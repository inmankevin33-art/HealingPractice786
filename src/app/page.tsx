"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
// import TreatmentsSection from "@/components/TreatmentsSection"; // REMOVE THIS
// import AestheticSection from "@/components/AestheticSection";   // REMOVE THIS
// import JointInjectionsSection from "@/components/JointInjectionsSection"; // REMOVE THIS
import ServiceOverview from "@/components/ServiceOverview"; // ADD THIS
import PRPExplanationSection from "@/components/PRPExplanationSection";
import LocationSection from "@/components/LocationSection"; // Keep this for St Albans Map
import FAQSection from "@/components/FAQSection";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  // ... scroll logic remains same ...

  return (
    <>
      <main>
        <Hero /> {/* Ensure Hero text says "St Albans" not Birmingham */}
        
        {/* New Consolidated Section */}
        <ServiceOverview /> 
        
        <PRPExplanationSection />
        
        {/* Consider adding a Reviews Section here */}
        
        <LocationSection />
        <FAQSection />
        <ContactCTASection />
      </main>
      <Footer />
    </>
  );
}
