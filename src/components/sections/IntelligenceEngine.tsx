"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Cpu, Database, ShieldCheck, ArrowRight } from "lucide-react";

export default function IntelligenceEngine() {
  const containerRef = useRef<HTMLElement>(null);

  const nodes = [
    {
      id: "01",
      title: "Raw Data Input",
      desc: "Viginyx captures ADR reports from multiple entry points—manual forms, EMR integrations, and structured data feeds—normalizing them instantly against MedDRA and WHO-DD databases.",
      icon: <Database className="w-4 h-4 text-current" />,
      iconBg: "bg-blue-50 border-blue-100 text-blue-500",
      containerClass: "border-black/5",
    },
    {
      id: "02",
      title: "Viginyx Core Engine",
      desc: "Our proprietary algorithm runs both Naranjo scoring and WHO-UMC classification simultaneously, cross-referencing temporal relationships, de-challenge/re-challenge data, and concomitant drug interactions.",
      icon: <Cpu className="w-4 h-4 text-current" />,
      iconBg: "bg-primary/10 border-primary/20 text-primary",
      containerClass: "border-primary/20 ring-1 ring-primary/10",
    },
    {
      id: "03",
      title: "Validated Output",
      desc: "A fully validated causality score with audit-ready documentation, auto-generated CDSCO Yellow Forms, and real-time signal detection dashboards for your pharmacovigilance team.",
      icon: <ShieldCheck className="w-4 h-4 text-current" />,
      iconBg: "bg-emerald-50 border-emerald-100 text-emerald-500",
      containerClass: "border-black/5",
    }
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });

    tl.from(".reveal-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .fromTo(".node-card", {
        y: 40,
        opacity: 0,
        scale: 0.95
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)"
    }, "-=0.4")
    .fromTo(".flow-line", {
        scaleX: 0,
        transformOrigin: "left"
    }, {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.inOut"
    }, "-=0.8");

    // The Simulation Sequence
    const simTl = gsap.timeline({ repeat: -1, repeatDelay: 1, delay: 2 });

    simTl
        // 1. Activate Node 1
        .to(".sim-node-0", { y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,181,184,0.15)", duration: 0.8 })
        .to(".sim-icon-0", { scale: 1.1, backgroundColor: "#00b5b8", color: "#fff", borderColor: "#00b5b8", duration: 0.8 }, "<")
        
        // 2. Fire Packet 1
        .fromTo(".sim-packet-1", 
            { left: "0%", opacity: 0, scale: 0.5 }, 
            { left: "50%", opacity: 1, scale: 1.5, duration: 1.5, ease: "power2.inOut" }, 
            "+=0.8"
        )
        .to(".sim-packet-1", { opacity: 0, scale: 0.5, duration: 0.3 })

        // 3. Deactivate Node 1, Activate Node 2
        .to(".sim-node-0", { y: 0, scale: 1, clearProps: "boxShadow", duration: 0.8 }, "-=0.3")
        .to(".sim-icon-0", { scale: 1, clearProps: "all", duration: 0.8 }, "<")
        
        .to(".sim-node-1", { y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,181,184,0.15)", duration: 0.8 }, "<")
        .to(".sim-icon-1", { scale: 1.1, backgroundColor: "#00b5b8", color: "#fff", borderColor: "#00b5b8", duration: 0.8 }, "<")

        // 4. Fire Packet 2
        .fromTo(".sim-packet-2", 
            { left: "50%", opacity: 0, scale: 0.5 }, 
            { left: "100%", opacity: 1, scale: 1.5, duration: 1.5, ease: "power2.inOut" }, 
            "+=0.8"
        )
        .to(".sim-packet-2", { opacity: 0, scale: 0.5, duration: 0.3 })

        // 5. Deactivate Node 2, Activate Node 3
        .to(".sim-node-1", { y: 0, scale: 1, clearProps: "boxShadow", duration: 0.8 }, "-=0.3")
        .to(".sim-icon-1", { scale: 1, clearProps: "all", duration: 0.8 }, "<")
        
        .to(".sim-node-2", { y: -8, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,181,184,0.15)", duration: 0.8 }, "<")
        .to(".sim-icon-2", { scale: 1.1, backgroundColor: "#00b5b8", color: "#fff", borderColor: "#00b5b8", duration: 0.8 }, "<")

        // 6. Deactivate Node 3
        .to(".sim-node-2", { y: 0, scale: 1, clearProps: "boxShadow", duration: 0.8 }, "+=2")
        .to(".sim-icon-2", { scale: 1, clearProps: "all", duration: 0.8 }, "<");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full px-4 md:px-8 py-8 md:py-12 relative"
    >
      <div className="max-w-7xl mx-auto bg-white rounded-[48px] md:rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-20 shadow-xl border border-black/5">
        
        {/* Header Section */}
        <div className="reveal-header text-center max-w-3xl mx-auto mb-20 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F8FAFC] rounded-full shadow-sm border border-black/5 mx-auto">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">Processing Architecture</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-1 leading-[1.1]">
            From Raw Data to <br />
            <span className="text-primary">Validated Output.</span>
          </h2>
        </div>

        {/* Canvas Node Pipeline */}
        <div className="relative max-w-5xl mx-auto z-10">
            
            {/* The Connecting Pipeline (Desktop) */}
            <div className="hidden md:block absolute top-[48px] left-[16.66%] right-[16.66%] h-[2px] bg-brand-9/10 z-0 overflow-visible rounded-full">
                <div className="flow-line w-full h-full bg-primary/20 absolute inset-0" />
                {/* Simulation packets */}
                <div className="sim-packet-1 absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-primary shadow-[0_0_12px_rgba(0,181,184,0.8)] rounded-full opacity-0 z-10" />
                <div className="sim-packet-2 absolute top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-primary shadow-[0_0_12px_rgba(0,181,184,0.8)] rounded-full opacity-0 z-10" />
            </div>

            {/* The Connecting Pipeline (Mobile) */}
            <div className="md:hidden absolute top-[10%] bottom-[10%] left-[32px] w-[2px] bg-brand-9/50 z-0 overflow-hidden rounded-full">
                <div className="w-full h-full bg-primary/20 absolute inset-0" />
            </div>

            {/* Nodes Grid */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10">
                {nodes.map((node, i) => (
                    <div key={i} className="flex-1 node-card">
                        {/* Connecting point dot */}
                        <div className="hidden md:block absolute top-[44px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-white border-[2px] border-primary shadow-sm z-20" />
                        
                        <div className={`sim-node-${i} bg-white rounded-3xl p-6 md:p-8 border shadow-sm transition-all duration-300 relative z-10 h-full flex flex-col ${node.containerClass}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`sim-icon-${i} w-10 h-10 rounded-xl flex items-center justify-center border ${node.iconBg} shrink-0 transition-colors`}>
                                    {node.icon}
                                </div>
                                <div className="text-[10px] font-black text-slate-400 tracking-widest uppercase">
                                    STEP {node.id}
                                </div>
                            </div>
                            
                            <h3 className="text-base font-bold text-brand-1 mb-3">{node.title}</h3>
                            <p className="text-[11px] font-medium text-brand-5 leading-relaxed flex-1">
                                {node.desc}
                            </p>

                            {/* Fake output node connector (visual only) */}
                            {i < nodes.length - 1 && (
                                <div className="hidden md:flex absolute top-1/2 -right-6 lg:-right-8 w-6 h-6 rounded-full bg-[#F8FAFC] border border-black/5 items-center justify-center z-30 translate-x-1/2 -translate-y-1/2">
                                    <ArrowRight className="w-3 h-3 text-brand-5" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none rounded-[64px] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
      </div>
    </section>
  );
}
