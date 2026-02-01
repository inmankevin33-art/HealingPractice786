/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function ContactClient() {
  return (
    <main className="min-h-screen bg-white transform-gpu">
      {/* Contact Hero */}
      <section className="relative pt-24 pb-16 bg-[#0a1128] overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/herobg.jpg" 
            alt="Contact Us" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            // @ts-expect-error - fetchpriority supported by browsers
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/80 to-[#0a1128]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-raleway font-bold text-white mb-4 tracking-tight">
            Contact Our Clinics
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-base md:text-lg font-inter">
            Expert regenerative care in Birmingham and St Albans. Reach out to our clinical team to begin your journey.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="relative z-10 -mt-8">
        <ContactCTASection />
      </div>

      {/* Location Section */}
      <div className="py-12 bg-white">
        <LocationSection />
      </div>

      <Footer />
    </main>
  );
}
