/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-white transform-gpu">
      {/* 1. Removed the dark Hero section as requested.
          2. The page now starts directly with the Consultation Form.
          3. Added pt-12 to give a clean breathing space under the navigation bar.
      */}
      <div className="pt-12 pb-8">
        <ContactCTASection />
      </div>

      {/* 2. The Optimized Location Strip with map preview */}
      <div className="pb-20">
        <LocationSection />
      </div>

      <Footer />
    </main>
  );
}
