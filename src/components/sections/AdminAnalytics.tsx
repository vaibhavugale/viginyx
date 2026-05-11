"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BarChart3, TrendingUp, Clock, AlertCircle } from "lucide-react";

export default function AdminAnalytics() {
  const containerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "ADRs This Month", value: "91", trend: "+18%", icon: <BarChart3 className="w-4 h-4" /> },
    { label: "Avg Causality Time", value: "47s", trend: "-12%", icon: <Clock className="w-4 h-4" /> },
    { label: "Pending Reports", value: "9", trend: "-34%", icon: <AlertCircle className="w-4 h-4" /> },
    { label: "Resolution Rate", value: "90.1%", trend: "+4.2%", icon: <TrendingUp className="w-4 h-4" /> }
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
    .from(".stat-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full px-4 md:px-8 py-8 md:py-12"
    >
      <div className="max-w-7xl mx-auto bg-brand-9/30 rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-20">
        
        {/* Header Section */}
        <div className="reveal-header text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full subtle-shadow border border-brand-5/10 mx-auto">
            <BarChart3 className="w-3.5 h-3.5 text-primary" />
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">Surveillance Dashboard</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-1 leading-[1.1]">
            Hospital-Grade <br />
            <span className="text-primary">Intelligence.</span>
          </h2>

          <p className="text-lg md:text-xl text-brand-3 leading-relaxed">
            Real-time ADR surveillance, causality clustering, and reporting latency — all in one unified command center.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="stat-card bg-white p-8 rounded-[40px] border border-brand-5/10 shadow-sm group hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-9 flex items-center justify-center text-brand-1 group-hover:bg-primary group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {stat.trend}
                </div>
              </div>
              
              <div className="text-4xl font-black text-brand-1 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-brand-5 uppercase tracking-widest leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
      </div>
    </section>
  );
}
