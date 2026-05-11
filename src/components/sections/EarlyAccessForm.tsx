"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Clock, MapPin, CheckCircle, Wrench } from "lucide-react";

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
      className="w-full px-4 md:px-8 py-16 md:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Badges */}
        <div className="reveal-item flex flex-col items-center gap-4 mb-12">
            <div className="bg-[#00b5b8] text-white px-6 py-2 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#00b5b8]/20">
                <Wrench className="w-4 h-4" />
                Platform Under Construction — Pilot Access Opens Soon
            </div>
            
            <div className="bg-brand-9/50 border border-brand-5/10 px-5 py-2 rounded-full flex items-center gap-2 text-xs font-bold text-brand-8">
                <Clock className="w-4 h-4" />
                Pilot opens soon
            </div>
        </div>

        {/* Header Content */}
        <div className="text-center space-y-6 mb-16 max-w-4xl">
            <h2 className="reveal-item text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-1 leading-[1.1]">
                We're Building This <span className="text-brand-8">For You</span> — Get Early Access
            </h2>

            <p className="reveal-item text-base md:text-lg text-brand-4 max-w-3xl mx-auto leading-relaxed">
                Viginyx is onboarding its first cohort of <span className="text-brand-8 font-semibold">NABH-accredited and NABH-aspiring hospitals</span> in Kalyan-Dombivli for a <span className="text-brand-1 font-bold">free 4–8 week pilot</span>. No commitment. No payment. First-come, first-served.
            </p>

            {/* Feature Pills */}
            <div className="reveal-item flex flex-wrap justify-center gap-3 pt-4">
                {[
                    { icon: <CheckCircle className="w-3.5 h-3.5" />, text: "Free Pilot — No Cost" },
                    { icon: <MapPin className="w-3.5 h-3.5" />, text: "KDMC Hospitals Prioritised" },
                    { icon: <Clock className="w-3.5 h-3.5" />, text: "4–8 Week Programme" }
                ].map((pill, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-brand-9/50 border border-brand-5/10 rounded-full text-[11px] font-bold text-brand-3">
                        <span className="text-brand-8">{pill.icon}</span>
                        {pill.text}
                    </div>
                ))}
            </div>
        </div>

        {/* Main Form Container */}
        <div className="reveal-item w-full bg-[#F8F9FA] border border-black/[0.04] rounded-[40px] md:rounded-[48px] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-sm">
            {/* Background Grid (Matching RoleBasedAccess) */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
            </div>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                
                {/* Full Name */}
                <div className="space-y-4">
                    <label className="block text-[10px] font-black text-brand-5 uppercase tracking-widest">Full Name *</label>
                    <input 
                        type="text" 
                        placeholder="Dr. Anjali Sharma" 
                        className="w-full bg-transparent border-b border-brand-1/10 pb-4 text-lg md:text-xl font-bold text-brand-1 placeholder:text-brand-1/20 outline-none focus:border-brand-8 transition-colors"
                    />
                </div>

                {/* Work Email */}
                <div className="space-y-4">
                    <label className="block text-[10px] font-black text-brand-5 uppercase tracking-widest">Work Email *</label>
                    <input 
                        type="email" 
                        placeholder="anjali@hospital.in" 
                        className="w-full bg-transparent border-b border-brand-1/10 pb-4 text-lg md:text-xl font-bold text-brand-1 placeholder:text-brand-1/20 outline-none focus:border-brand-8 transition-colors"
                    />
                </div>

                {/* Hospital Name */}
                <div className="md:col-span-2 space-y-4">
                    <label className="block text-[10px] font-black text-brand-5 uppercase tracking-widest">Hospital / Institution *</label>
                    <input 
                        type="text" 
                        placeholder="Apollo Hospitals, Kalyan" 
                        className="w-full bg-transparent border-b border-brand-1/10 pb-4 text-lg md:text-xl font-bold text-brand-1 placeholder:text-brand-1/20 outline-none focus:border-brand-8 transition-colors"
                    />
                </div>

                {/* Role */}
                <div className="space-y-4">
                    <label className="block text-[10px] font-black text-brand-5 uppercase tracking-widest">Your Role *</label>
                    <input 
                        type="text" 
                        placeholder="Quality Manager, CMO..." 
                        className="w-full bg-transparent border-b border-brand-1/10 pb-4 text-lg md:text-xl font-bold text-brand-1 placeholder:text-brand-1/20 outline-none focus:border-brand-8 transition-colors"
                    />
                </div>

                {/* Bed Count */}
                <div className="space-y-4">
                    <label className="block text-[10px] font-black text-brand-5 uppercase tracking-widest">Bed Count *</label>
                    <div className="relative group">
                        <input 
                            type="text" 
                            placeholder="Select range" 
                            className="w-full bg-transparent border-b border-brand-1/10 pb-4 text-lg md:text-xl font-bold text-brand-1 placeholder:text-brand-1/20 outline-none focus:border-brand-8 transition-colors cursor-pointer"
                            readOnly
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 pt-6">
                    <button className="w-full py-6 bg-brand-8 hover:bg-brand-8/90 text-white rounded-3xl text-lg font-black tracking-tight shadow-xl shadow-brand-8/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                        Register Your Hospital's Interest
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Footer Disclaimer */}
                <p className="md:col-span-2 text-center text-xs md:text-sm text-brand-4 font-medium leading-relaxed">
                    We'll reach out within 48 hours. Pilot is free — no commitment required. <span className="text-brand-8">KDMC hospitals prioritised in Round 1.</span>
                </p>
            </form>
        </div>
      </div>
    </section>
  );
}
