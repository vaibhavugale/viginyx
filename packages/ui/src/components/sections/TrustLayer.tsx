"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  Lock,
  Database,
  Search,
  FileCheck,
  History,
  Check,
} from "lucide-react";

export default function TrustLayer() {
  const containerRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const trustNodes = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Privacy",
      desc: "DPDP 2023 Compliant",
      color: "bg-blue-500",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Immutable",
      desc: "Blockchain Audit Trail",
      color: "bg-purple-500",
    },
  ];

  const complianceCards = [
    {
      title: "Blockchain Ledger",
      desc: "Immutable hashing of every ADR report",
      icon: <Database className="w-6 h-6 text-orange-500" />,
      bgColor: "bg-orange-50",
      shadowColor: "shadow-orange-200/50",
    },
    {
      title: "Audit History",
      desc: "100% trace of every manual intervention",
      icon: <History className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50",
      shadowColor: "shadow-blue-200/50",
    },
    {
      title: "Security Vault",
      desc: "Cryptographically sealed patient identifiers",
      icon: <FileCheck className="w-6 h-6 text-emerald-500" />,
      bgColor: "bg-emerald-50",
      shadowColor: "shadow-emerald-200/50",
    },
  ];

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".highlight-letter",
        { y: 40, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(2)",
        },
      )
        .fromTo(
          ".normal-word",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
          "-=0.6",
        )
        .fromTo(
          ".trust-visual",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.7)" },
          "-=0.4",
        )
        .fromTo(
          ".stacked-card",
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.8",
        )
        .fromTo(
          ".check-circle",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            stagger: 0.5,
            ease: "back.out(2)",
          },
          "-=0.4",
        )
        .fromTo(
          ".check-text",
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 0.6,
            stagger: 0.5,
            ease: "none",
          },
          "<",
        );
    },
    { scope: containerRef },
  );

  const renderHighlightedWord = (word: string) => {
    return (
      <span className="text-primary inline-block perspective-[1000px]">
        {word.split("").map((char, i) => (
          <span key={i} className="highlight-letter inline-block origin-bottom">
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section ref={containerRef} className="w-full px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-7xl mx-auto bg-brand-9/30 rounded-[48px] md:rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-6 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-brand-5/10 rounded-full shadow-sm">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">
              The Trust Layer
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-brand-1 leading-[1.05]"
          >
            {renderHighlightedWord("Immutable")}{" "}
            <span className="normal-word inline-block">Records.</span> <br />
            <span className="normal-word inline-block">Unbreakable</span>{" "}
            {renderHighlightedWord("Trust.")}
          </h2>

          <p className="normal-word text-lg md:text-xl text-brand-3 leading-relaxed font-medium max-w-2xl mt-4">
            Every ADR assessment, form submission, and data modification is
            cryptographically sealed on a blockchain-backed audit trail.
            Compliant with DPDP Act 2023 data privacy mandates and NABH 6th
            Edition requirements—ensuring your institution is always
            audit-ready.
          </p>
        </div>

        {/* Dashboard UI */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="w-full bg-[#F8FAFC] rounded-2xl border border-brand-5/10 overflow-hidden shadow-2xl shadow-brand-5/5 flex flex-col md:flex-row h-auto text-left">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col items-center py-6 w-16 bg-white border-r border-black/5 shrink-0 gap-6 relative z-20 shadow-[1px_0_10px_rgb(0,0,0,0.02)]">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
                <Activity className="w-4 h-4" />
              </div>
              <Database className="w-5 h-5 text-brand-5 hover:text-primary transition-colors cursor-pointer" />
              <FileCheck className="w-5 h-5 text-brand-5 hover:text-primary transition-colors cursor-pointer" />
              <History className="w-5 h-5 text-brand-5 hover:text-primary transition-colors cursor-pointer" />
              <div className="mt-auto">
                <Lock className="w-5 h-5 text-emerald-500 drop-shadow-sm" />
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
              {/* Top Bar */}
              <div className="h-14 bg-white border-b border-black/5 flex items-center justify-between px-4 md:px-6 shrink-0 relative z-10 shadow-[0_1px_5px_rgb(0,0,0,0.01)]">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4.5 h-4.5 text-primary" />
                  <span className="text-sm font-bold text-brand-1">
                    Trust Layer Validation Matrix
                  </span>
                </div>
                <div className="flex items-center gap-4 hidden sm:flex">
                  <div className="text-[11px] font-bold tracking-wide text-brand-5 bg-brand-9 px-2.5 py-1 rounded-md">
                    Last updated: Just now
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-5" />
                </div>
              </div>

              {/* Bento Grid Content */}
              {/* Bento Grid Content */}
              <div className="flex-1 p-4 md:p-6 bg-[#F8FAFC]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-full">
                  {/* Left Side: Dummy Report with Verification */}
                  <div className="bg-white rounded-[16px] border border-black/5 p-5 shadow-sm flex flex-col hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center border border-blue-100">
                        <FileCheck className="w-4 h-4 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="text-[12px] font-bold text-brand-1 uppercase tracking-wider">
                          Report Verification
                        </h4>
                        <div className="text-[9px] font-medium text-brand-5 uppercase tracking-wider">
                          CDSCO Format
                        </div>
                      </div>
                    </div>

                    {/* Dummy Document Skeleton */}
                    <div className="flex-1 bg-white rounded-xl border border-black/5 p-5 relative shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col">
                      {/* Header Skeleton */}
                      <div className="flex justify-between items-center mb-5 pb-4 border-b border-black/5">
                        <div className="space-y-2.5">
                          <div className="h-3 w-28 bg-brand-9/80 rounded-md"></div>
                          <div className="h-2 w-16 bg-brand-9/40 rounded-md"></div>
                        </div>
                        <div className="h-8 w-8 bg-brand-9/40 rounded-lg"></div>
                      </div>

                      {/* Compliance Checks inside Report */}
                      <div className="space-y-3 mb-5">
                        {[
                          "End-to-End Encryption",
                          "DPDP Act 2023 Compliant",
                          "NABH 6th Edition Standards",
                        ].map((check, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <div className="check-circle w-4 h-4 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-emerald-500" />
                            </div>
                            <div className="check-text text-[10px] font-bold text-brand-1 tracking-wide whitespace-nowrap">
                              {check}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Body Skeleton */}
                      <div className="space-y-3 mt-auto">
                        <div className="h-2 w-full bg-brand-9/60 rounded-md"></div>
                        <div className="h-2 w-[85%] bg-brand-9/60 rounded-md"></div>
                        <div className="h-2 w-[60%] bg-brand-9/60 rounded-md"></div>
                      </div>

                      {/* Verification Overlay */}
                      <div className="absolute bottom-3 right-3 z-10 pointer-events-none">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-xl border border-emerald-200 flex items-center gap-3 transform rotate-[-4deg] scale-100">
                          <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center border border-emerald-100 shrink-0 shadow-inner">
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                          </div>
                          <div>
                            <div className="text-emerald-600 font-black tracking-widest uppercase text-sm leading-tight drop-shadow-sm">
                              VERIFIED
                            </div>
                            <div className="text-[8px] font-bold text-brand-5 tracking-wider font-mono mt-0.5">
                              HASH MATCHED
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Blockchain Logs */}
                  <div className="bg-white rounded-[16px] border border-black/5 p-5 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center border border-purple-100">
                          <Database className="w-4 h-4 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="text-[12px] font-bold text-brand-1 uppercase tracking-wider">
                            Live Audit Trail
                          </h4>
                          <div className="text-[9px] font-medium text-brand-5 uppercase tracking-wider">
                            Blockchain Ledger
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-md border border-emerald-100">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-bold text-emerald-600 tracking-wider">
                          SYNCING
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col justify-center">
                      {[
                        {
                          hash: "0x8F92A1B2...3912",
                          type: "ADR Submission",
                          status: "Verified",
                          time: "2 min ago",
                        },
                        {
                          hash: "0x3C419F0E...843A",
                          type: "Data Modification",
                          status: "Verified",
                          time: "15 min ago",
                        },
                        {
                          hash: "0x7A2B4D5C...112B",
                          type: "Consent Granted",
                          status: "Verified",
                          time: "1 hr ago",
                        },
                        {
                          hash: "0x1E8DB3A4...99F2",
                          type: "System Event",
                          status: "Verified",
                          time: "3 hrs ago",
                        },
                      ].map((log, i) => (
                        <div
                          key={i}
                          className="p-3 bg-[#F8FAFC] rounded-[10px] border border-black/[0.03] space-y-2 relative group hover:border-purple-500/30 transition-all cursor-default"
                        >
                          <div className="flex justify-between items-start">
                            <div className="text-[11px] font-mono text-brand-1 font-bold group-hover:text-purple-600 transition-colors">
                              {log.hash}
                            </div>
                            <span className="text-[9px] text-brand-5 font-medium">
                              {log.time}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] px-2 py-0.5 bg-purple-50 text-purple-600 rounded-md font-bold tracking-wider">
                              {log.type}
                            </span>
                            <span className="text-[9px] px-2 py-0.5 bg-emerald-50 text-emerald-600 rounded-md font-bold tracking-wider flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3" /> {log.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Grid Lines inside the container */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>
      </div>
    </section>
  );
}
