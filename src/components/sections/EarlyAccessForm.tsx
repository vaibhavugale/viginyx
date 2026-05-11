"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Rocket, ArrowRight } from "lucide-react";

export default function EarlyAccessForm() {
  const containerRef = useRef<HTMLElement>(null);

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
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full px-4 md:px-8 py-8 md:py-24"
    >
      <div className="max-w-7xl mx-auto bg-brand-1 rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-24 text-center">
        
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-12">
          <div className="reveal-item inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mx-auto">
            <Rocket className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Pilot Program Round 1</span>
          </div>

          <h2 className="reveal-item text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Get Early Access to <br />
            <span className="text-primary">The Future of PV.</span>
          </h2>

          <p className="reveal-item text-lg md:text-xl text-blue-100/60 leading-relaxed">
            Join our first cohort for a free 4–8 week pilot. Limited slots available for CDSCO-regulated institutions.
          </p>

          <div className="reveal-item bg-white p-2 rounded-3xl md:rounded-full shadow-2xl flex flex-col md:flex-row gap-2">
            <input 
              type="text" 
              placeholder="Enter your hospital email" 
              className="flex-1 bg-transparent px-8 py-4 text-brand-1 font-bold outline-none placeholder:text-brand-5 text-sm"
            />
            <button className="px-8 py-4 bg-brand-1 text-white rounded-2xl md:rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="reveal-item text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">
            No Commitment Required • 48hr Response Time
          </div>
        </div>
      </div>
    </section>
  );
}
