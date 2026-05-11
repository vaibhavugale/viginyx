"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Timer, Activity, ClipboardCheck, ArrowRight } from "lucide-react";

export default function AssessmentWidget() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(".reveal-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
    })
    .from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
    }, "-=0.6");
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full px-4 md:px-8 py-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto bg-brand-9/30 rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side */}
        <div className="flex-1 space-y-8 relative z-10">
          <div className="reveal-item inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full subtle-shadow border border-brand-5/10">
            <Timer className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">Real-time Analysis</span>
          </div>

          <h2 className="reveal-item text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-1 leading-[1.1]">
            Instant Causality. <br />
            <span className="text-primary">Definitive Results.</span>
          </h2>

          <p className="reveal-item text-lg md:text-xl text-brand-3 max-w-xl leading-relaxed">
            Our automated Naranjo and WHO-UMC causality assessments reduce processing time from hours to <span className="text-brand-1 font-bold">seconds</span>, with zero compromise on precision.
          </p>

          <div className="reveal-item flex gap-8">
              <div className="flex flex-col">
                  <span className="text-2xl font-black text-brand-1">98%</span>
                  <span className="text-[10px] font-bold text-brand-3 uppercase tracking-tighter">Accuracy</span>
              </div>
              <div className="w-px h-10 bg-brand-5/20" />
              <div className="flex flex-col">
                  <span className="text-2xl font-black text-brand-1">&lt;60s</span>
                  <span className="text-[10px] font-bold text-brand-3 uppercase tracking-tighter">Processing</span>
              </div>
          </div>
        </div>

        {/* Right Side: The Card */}
        <div className="w-full lg:w-[550px] relative z-10">
          <div 
            ref={cardRef}
            className="running-outline relative bg-white rounded-[40px] shadow-2xl border border-brand-5/5 overflow-hidden"
          >
            <div className="bg-brand-9/50 px-8 py-4 border-b border-brand-5/10 flex justify-between items-center">
                <span className="text-[10px] font-bold text-brand-3 uppercase tracking-widest">Active Assessment</span>
                <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                </div>
            </div>
            
            <div className="p-8 md:p-10 space-y-8">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold text-brand-3 uppercase tracking-tight">Causality Score</div>
                        <div className="text-5xl font-black text-brand-1 flex items-baseline gap-2">
                            9 <span className="text-xl font-bold text-brand-3">/ 10</span>
                        </div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-black text-xs uppercase tracking-widest">
                        DEFINITE
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-9/50 border border-brand-5/10">
                        <ClipboardCheck className="w-5 h-5 text-brand-1" />
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-brand-3 uppercase">Methodology</div>
                            <div className="text-sm font-bold text-brand-1">Naranjo Scale v2.1</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-brand-9/50 border border-brand-5/10">
                        <Activity className="w-5 h-5 text-brand-1" />
                        <div className="flex-1">
                            <div className="text-[10px] font-bold text-brand-3 uppercase">Integrity</div>
                            <div className="text-sm font-bold text-brand-1">Blockchain Hash Verified</div>
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-primary text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Verify Assessment
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
