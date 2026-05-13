"use client";

import { useRef, useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why focus specifically on ADRs?",
      a: "ADR reporting is the most cited non-compliance during NABH audits. A purpose-built tool outperforms generic HIS modules every time.",
    },
    {
      q: "What makes it immutable?",
      a: "Every record is cryptographically hashed and stored on a blockchain ledger. It cannot be edited or deleted once written.",
    },
    {
      q: "How is it different from HMS?",
      a: "HMS bundles treat PV as a checkbox. Viginyx offers AI causality scoring and blockchain security that HIS simply doesn't have.",
    },
    {
      q: "HIS Integration?",
      a: "Viginyx runs alongside your existing HIS via API integration. It fills the critical PV gap without requiring a HIS replacement.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full px-4 md:px-8 py-12 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto bg-[#F8F9FA] border border-black/[0.04] rounded-[48px] md:rounded-[64px] relative overflow-hidden p-8 md:p-16 lg:p-20 shadow-sm">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00b5b8_1px,transparent_1px),linear-gradient(to_bottom,#00b5b8_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="reveal-header text-center max-w-3xl mx-auto mb-16 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-brand-5/10 mx-auto">
            <HelpCircle className="w-3.5 h-3.5 text-brand-8" />
            <span className="text-[10px] font-bold text-brand-1 uppercase tracking-widest">
              Support Knowledge
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-1 leading-[1.1]">
            Common
            <span className="ml-4 text-brand-8">Inquiries.</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item overflow-hidden transition-all duration-300 border rounded-3xl ${
                  isOpen
                    ? "bg-white border-brand-8 shadow-[0_8px_30px_rgba(0,181,184,0.15)]"
                    : "bg-white/60 border-brand-5/10 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center gap-4 focus:outline-none group"
                >
                  <h4
                    className={`text-base md:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-brand-8" : "text-brand-1 group-hover:text-brand-8"}`}
                  >
                    {faq.q}
                  </h4>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-brand-8/10 text-brand-8 rotate-180" : "bg-brand-9 text-brand-5"}`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 text-sm md:text-base text-brand-3 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
