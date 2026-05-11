"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Header, Footer } from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import AssessmentWidget from "@/components/sections/AssessmentWidget";
import IntelligenceEngine from "@/components/sections/IntelligenceEngine";
import TrustLayer from "@/components/sections/TrustLayer";
import AdminAnalytics from "@/components/sections/AdminAnalytics";
import RoleBasedAccess from "@/components/sections/RoleBasedAccess";
import FAQ from "@/components/sections/FAQ";
import EarlyAccessForm from "@/components/sections/EarlyAccessForm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const container = useRef(null);

  useGSAP(() => {
    // Global Section Reveals
    const sections = gsap.utils.toArray("section:not(:first-child)");
    sections.forEach((section: any) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="flex flex-col min-h-screen bg-white text-brand-1 font-sans antialiased">
      {/* Top Alert Banner */}
      <div className="bg-brand-9 py-2 px-4 text-center text-[10px] md:text-xs font-medium tracking-tight border-b border-brand-5/20 text-brand-3 uppercase">
        We'll reach out within 48 hours. Pilot is free — no commitment required. KDMC hospitals prioritised in Round 1.
      </div>

      <Header />

      <main className="flex-grow">
        <Hero />
        <TrustLayer />
        {/* <AssessmentWidget /> */}
        <IntelligenceEngine />
        {/* <AdminAnalytics /> */}
        <RoleBasedAccess />
        <FAQ />
        <EarlyAccessForm />
      </main>

      <Footer />
    </div>
  );
}
