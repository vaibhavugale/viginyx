"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const stethoscopeRef = useRef<HTMLDivElement>(null);
  const medicineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: clientX - left,
      y: clientY - top
    };
  };

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: any[] = [];
    const spacing = 32;
    const dotSize = 1.5;
    const mouseRadius = 180;

    const init = () => {
      if (!canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
      dots = [];
      for (let x = spacing / 2; x < canvas.width; x += spacing) {
        for (let y = spacing / 2; y < canvas.height; y += spacing) {
          dots.push({
            x,
            y,
            baseRadius: dotSize,
            currentRadius: dotSize,
            currentOpacity: 0.4
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach(dot => {
        let targetRadius = dot.baseRadius;
        let targetOpacity = 0.4;

        if (isHoveringRef.current) {
          const dx = mouseRef.current.x - dot.x;
          const dy = mouseRef.current.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const factor = (1 - dist / mouseRadius);
            targetRadius = dot.baseRadius + factor * 4;
            targetOpacity = 0.4 + factor * 0.5;
          }
        }

        // Smooth transition (lerp)
        dot.currentRadius += (targetRadius - dot.currentRadius) * 0.1;
        dot.currentOpacity += (targetOpacity - dot.currentOpacity) * 0.1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 181, 184, ${dot.currentOpacity})`;
        ctx.fill();
      });
    };

    init();
    window.addEventListener("resize", init);
    gsap.ticker.add(draw);

    // Function to initialize scroll-triggered fly-out
    const initScrollAnimations = () => {
      [stethoscopeRef, medicineRef].forEach((ref, i) => {
        if (ref.current) {
          gsap.to(ref.current, {
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
            x: i === 0 ? 400 : -400,
            y: 0, 
            opacity: 1,
            rotate: i === 0 ? 45 : -45,
            ease: "none"
          });
        }
      });
    };

    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out" },
      onComplete: initScrollAnimations 
    });

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
    .from(titleLine1Ref.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
    }, "-=0.6")
    .fromTo(".pv-letter", 
      { opacity: 0, scale: 0.5, y: 20 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.04, 
        ease: "back.out(2)" 
      }, 
      "-=1.0"
    )
    .from(titleLine2Ref.current, {
      y: 40,
      opacity: 0,
      duration: 1,
    }, "-=1.0")
    .from(subtextRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(ctaRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.6")
    .fromTo(stethoscopeRef.current, 
      { x: 400, y: 400, opacity: 0 },
      { 
        x: 0, 
        y: 0,
        opacity: 1, 
        duration: 1.5, 
      }, 
      "-=1"
    )
    .fromTo(medicineRef.current,
      { x: -400, y: 400, opacity: 0 },
      { 
        x: 0, 
        y: 0,
        opacity: 1, 
        duration: 1.5, 
      },
      "-=1.2"
    );

    return () => {
      window.removeEventListener("resize", init);
      gsap.ticker.remove(draw);
    };
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="h-[calc(90vh-120px)] min-h-[600px] w-full px-4 md:px-8 pb-8"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => isHoveringRef.current = true}
        onMouseLeave={() => isHoveringRef.current = false}
        className="h-full max-w-7xl mx-auto bg-brand-9/30 rounded-[64px] relative flex flex-col items-center justify-center text-center overflow-hidden group running-outline"
      >
        {/* Interactive Canvas Dot Grid */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Floating Assets */}
        <div ref={medicineRef} className="absolute left-[4%] bottom-[15%] w-32 md:w-40 lg:w-48 pointer-events-none z-10">
          <Image
            src="/medicie.png"
            alt="Medical Supplies"
            width={300}
            height={300}
            className="w-full h-auto object-contain -rotate-0 opacity-80"
          />
        </div>
        <div ref={stethoscopeRef} className="absolute right-[4%] bottom-[15%] w-32 md:w-40 lg:w-48 pointer-events-none z-10">
          <Image
            src="/stethoscope.png"
            alt="Medical Stethoscope"
            width={300}
            height={300}
            className="w-full h-auto object-contain rotate-12 opacity-80"
          />
        </div>

        {/* Central Content */}
        <div className="relative z-10 max-w-4xl flex flex-col items-center px-4 pt-16 pb-12">
          <div ref={badgeRef} className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full subtle-shadow border border-brand-5/10 mb-6 hover:scale-105 transition-transform cursor-default">
            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-[9px]">●</div>
            <span className="text-xs font-bold text-brand-1">New! Blockchain ADR audit trails for NABH</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-brand-1">
            <span ref={titleLine1Ref} className="block">
              Precision{" "}
              <span className="text-primary inline-block">
                {"Pharmacovigilance".split("").map((char, i) => (
                  <span key={i} className="pv-letter inline-block origin-bottom">{char}</span>
                ))}
              </span>
            </span>
            <span ref={titleLine2Ref} className="block">for Modern Hospitals.</span>
          </h2>

          <p ref={subtextRef} className="text-sm md:text-lg lg:text-xl text-brand-3 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Automate ADR reporting and causality assessments in under 60 seconds. Focus on patient safety, while we handle the compliance.
          </p>

          <div ref={ctaRef}>
            <button className="px-10 py-5 bg-primary text-white font-bold rounded-2xl hover:scale-105 transition-all subtle-shadow flex items-center gap-3 text-base">
              Get started — it's free <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
