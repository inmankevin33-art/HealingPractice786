"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import TreatmentsSection from "@/components/TreatmentsSection";
import AestheticSection from "@/components/AestheticSection";
import JointInjectionsSection from "@/components/JointInjectionsSection";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import CTASection from "@/components/CTASection";
import LocationSection from "@/components/LocationSection";
import LocationsCTASection from "@/components/LocationsCTASection";
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const { hash } = window.location;
    if (hash) {
      // Wait for sections to render
      const tryScroll = () => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
      // Attempt immediately and on next frame
      tryScroll();
      requestAnimationFrame(tryScroll);
      // Fallback slight delay
      setTimeout(tryScroll, 200);
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <TreatmentsSection />
        <AestheticSection />
        <JointInjectionsSection />
        <PRPExplanationSection />
        <CTASection />
        <LocationSection />
        <LocationsCTASection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
