"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import ServiceOverview from "@/components/ServiceOverview"; // The new component you just created
import PRPExplanationSection from "@/components/PRPExplanationSection";
import LocationSection from "@/components/LocationSection";
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
        {/* Your existing Hero - make sure it says "St Albans" in the text if possible */}
        <Hero />
        
        {/* New Consolidated Services Hub */}
        <ServiceOverview />
        
        {/* Supporting Info */}
        <PRPExplanationSection />
        
        {/* Location & Contact */}
        <LocationSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
