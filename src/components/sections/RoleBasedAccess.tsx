"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { User, Stethoscope, ShieldAlert, Check, Activity, FileText, AlertTriangle } from "lucide-react";

export default function RoleBasedAccess() {
  const [activeRole, setActiveRole] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  const roles = [
    {
      id: "patient",
      title: "Patient",
      subtitle: "Daily Check-in Portal",
      icon: <User className="w-5 h-5 text-brand-8" />,
      iconBg: "bg-brand-8/10",
    },
    {
      id: "clinician",
      title: "Doctor / Clinician",
      subtitle: "ADR Review Console",
      icon: <Stethoscope className="w-5 h-5 text-brand-1" />,
      iconBg: "bg-brand-1/5",
    },
    {
      id: "manager",
      title: "Quality Manager",
      subtitle: "Compliance Dashboard",
      icon: <ShieldAlert className="w-5 h-5 text-brand-8" />,
      iconBg: "bg-brand-8/10",
    }
  ];

  // GSAP animation for tab switching
  useGSAP(() => {
    gsap.fromTo(displayRef.current, 
        { opacity: 0, y: 10, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, { dependencies: [activeRole], scope: containerRef });

  return (
    <section ref={containerRef} className="w-full px-4 md:px-8 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto bg-[#F8F9FA] border border-black/[0.04] rounded-[48px] md:rounded-[64px] relative overflow-hidden p-8 md:p-12 lg:p-20 shadow-sm">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        {/* Header Section */}
        <div className="reveal-header text-center max-w-3xl mx-auto mb-16 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-brand-5/10 mx-auto">
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">✨ Role-Based Access</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-1 leading-[1.1]">
            One Platform, <br className="hidden md:block" />
            <span className="text-brand-8">Three Roles.</span>
          </h2>

          <p className="text-lg md:text-xl text-brand-4 leading-relaxed">
            Viginyx shows every stakeholder exactly what they need — and nothing they don't.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative z-10 max-w-5xl mx-auto">
            
            {/* Left Box: Role Cards List */}
            <div className="flex flex-col gap-4 w-full">
                    {roles.map((role, index) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(index)}
                            className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                                activeRole === index 
                                ? "bg-white border-brand-8 shadow-[0_8px_30px_rgba(0,181,184,0.15)] scale-[1.02] z-10" 
                                : "bg-white/50 border-black/5 shadow-sm hover:bg-white hover:shadow-md"
                            }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${role.iconBg}`}>
                                {role.icon}
                            </div>
                            <div>
                                <h3 className="text-[15px] font-bold text-brand-1 leading-tight mb-1">{role.title}</h3>
                                <p className="text-[11px] font-semibold text-brand-5">{role.subtitle}</p>
                            </div>
                        </button>
                    ))}
            </div>

            {/* Right Box: Top UI Display (Mobile Phone UI) */}
            <div className="w-[300px] md:w-[340px] h-[600px] bg-brand-9 rounded-[40px] md:rounded-[48px] shadow-[0_20px_50px_-12px_rgba(0,40,85,0.15)] border-[10px] md:border-[12px] border-brand-1 relative overflow-hidden flex flex-col mx-auto lg:ml-auto">
                {/* Phone Notch / Dynamic Island */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
                    <div className="w-32 h-6 bg-brand-1 rounded-b-3xl"></div>
                </div>
                
                <div ref={displayRef} className="w-full h-full relative z-10 pt-[60px] px-4 pb-6 overflow-y-auto no-scrollbar flex flex-col items-center">
                    {activeRole === 0 && <PatientView />}
                    {activeRole === 1 && <ClinicianView />}
                    {activeRole === 2 && <ManagerView />}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}

/* --- Internal Mockup Components --- */

function PatientView() {
    return (
        <div className="w-full flex flex-col gap-3 font-sans text-slate-900">
            {/* Header Area */}
            <div className="px-2 pt-1 pb-0.5">
                <h3 className="text-base font-black text-slate-900 mb-0.5">Patient Portal</h3>
                <p className="text-[10px] text-slate-500 font-medium">Your daily check-in and health history.</p>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-[10px] text-slate-500 mb-0.5 font-semibold uppercase tracking-wider">Good morning</p>
                <h4 className="text-sm font-bold text-slate-900">Rajesh, how are you feeling today?</h4>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <p className="text-xs font-semibold text-slate-800">Are you experiencing any muscle pain or weakness?</p>
                <div className="grid grid-cols-2 gap-2">
                    <button className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 py-2 rounded-xl text-xs font-bold transition-colors">Yes</button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 transition-colors">No</button>
                </div>
            </div>

            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
                <div>
                    <p className="text-[9px] text-slate-500 uppercase tracking-wider font-bold mb-1.5">Adherence</p>
                    <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-600" /></div>)}
                        <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center"><AlertTriangle className="w-2.5 h-2.5 text-white" /></div>
                        {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200"></div>)}
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[9px] text-brand-5 uppercase tracking-wider font-bold mb-0.5">Check-in</div>
                    <div className="text-base font-black text-brand-8">3 <span className="text-[10px] text-brand-5">/ 6</span></div>
                </div>
            </div>
            
            <div className="bg-brand-8/5 p-3 rounded-2xl border border-brand-8/20 mt-1">
                <h4 className="text-xs font-bold text-brand-1 mb-1 flex items-center gap-1.5"><ShieldAlert className="w-3.5 h-3.5 text-brand-8" /> Why this matters</h4>
                <p className="text-[10px] text-brand-4 leading-relaxed font-medium">If you're ever in an emergency, this app speaks for you — your full reaction history is available instantly.</p>
            </div>
        </div>
    );
}

function ClinicianView() {
    return (
        <div className="w-full flex flex-col gap-2.5 font-sans text-slate-900">
            {/* Header Area */}
            <div className="px-2 pt-1 pb-0.5">
                <h3 className="text-base font-black text-slate-900 mb-0.5">Review Console</h3>
                <p className="text-[10px] text-slate-500 font-medium">Monitor flagged patients and calculate causality.</p>
            </div>

            {/* Patient List */}
            <div className="bg-white border border-rose-200 shadow-sm p-3 rounded-2xl flex justify-between items-center relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />
                <div>
                    <h4 className="text-xs font-bold text-slate-900">Rajesh Kumar</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">Atorvastatin • Muscle Pain</p>
                </div>
                <span className="px-2 py-1 bg-rose-50 text-rose-600 text-[8px] font-bold rounded-lg flex items-center gap-1 uppercase tracking-wider border border-rose-100"><AlertTriangle className="w-2.5 h-2.5" /> Flagged</span>
            </div>
            
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-2xl flex justify-between items-center">
                <div>
                    <h4 className="text-xs font-bold text-slate-900">Meena Patil</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">Metformin • Stable vitals</p>
                </div>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-bold rounded-lg uppercase tracking-wider">Stable</span>
            </div>

            {/* Naranjo Tool */}
            <div className="bg-white border border-brand-8/20 shadow-sm p-3 rounded-2xl mt-1">
                <div className="flex justify-between items-end mb-2.5">
                    <p className="text-[9px] uppercase tracking-wider font-bold text-brand-5">Naranjo Score</p>
                    <p className="text-xs font-black text-brand-1">7 — <span className="text-brand-8">Probable ADR</span></p>
                </div>
                <div className="w-full h-1.5 bg-brand-9 rounded-full overflow-hidden mb-3">
                    <div className="w-[70%] h-full bg-brand-8 rounded-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <div className="px-2 py-1.5 bg-brand-8/10 text-brand-8 border border-brand-8/20 text-[10px] font-bold rounded-lg text-center">WHO-UMC: Probable</div>
                    <div className="px-2 py-1.5 bg-brand-9 text-brand-5 border border-brand-5/20 text-[10px] font-bold rounded-lg text-center">12 entries cross-verified</div>
                </div>
            </div>

            <button className="w-full py-2.5 mt-1 bg-brand-1 hover:bg-brand-1/90 text-white rounded-2xl text-xs font-bold shadow-md transition-colors">
                Generate Yellow Form
            </button>
        </div>
    );
}

function ManagerView() {
    return (
        <div className="w-full flex flex-col gap-3 font-sans text-slate-900">
            {/* Header Area */}
            <div className="px-2 pt-1 pb-0.5">
                <h3 className="text-base font-black text-slate-900 mb-0.5">Compliance</h3>
                <p className="text-[10px] text-slate-500 font-medium">Real-time audit trails and KPI tracking.</p>
            </div>
            
            {/* Top KPI */}
            <div className="bg-white border border-emerald-200 shadow-sm p-3 rounded-2xl flex justify-between items-center">
                <div>
                    <p className="text-[8px] text-emerald-600 uppercase tracking-widest font-bold mb-1">NABH MOM.B.c Compliance</p>
                    <h3 className="text-2xl font-black text-slate-900">87%</h3>
                </div>
                <div className="w-10 h-10 rounded-full border-4 border-emerald-100 border-t-emerald-500 flex items-center justify-center">
                    <ShieldAlert className="w-4 h-4 text-emerald-600" />
                </div>
            </div>

            {/* Sub KPIs */}
            <div className="grid grid-cols-3 gap-2">
                <div className="bg-white border border-slate-200 shadow-sm p-2.5 rounded-2xl text-center">
                    <h4 className="text-lg font-black text-blue-600 mb-0.5">14</h4>
                    <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">ADRs</p>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm p-2.5 rounded-2xl text-center">
                    <h4 className="text-lg font-black text-indigo-600 mb-0.5">9</h4>
                    <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Forms</p>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm p-2.5 rounded-2xl text-center">
                    <h4 className="text-lg font-black text-rose-600 mb-0.5">3</h4>
                    <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Open</p>
                </div>
            </div>

            {/* Audit Logs */}
            <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-2xl">
                <h4 className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-2.5">Recent Activity</h4>
                <div className="space-y-2.5">
                    {[
                        { action: "ADR Logged — R. Kumar", time: "09:14 AM" },
                        { action: "Yellow Form Generated", time: "09:15 AM" },
                        { action: "Doctor Review — Dr. Shah", time: "11:02 AM" },
                        { action: "CDSCO Submission", time: "11:45 AM" },
                    ].map((log, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold text-slate-800">{log.action}</span>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[8px] text-slate-400 font-mono font-medium">{log.time}</span>
                                <span className="text-[8px] text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded font-bold flex items-center gap-0.5"><Check className="w-2 h-2" /></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <button className="w-full py-2.5 mt-1 bg-brand-8/10 text-brand-8 border border-brand-8/20 hover:bg-brand-8/20 rounded-2xl text-[10px] uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2">
                Download NABH Report &rarr;
            </button>

        </div>
    );
}
