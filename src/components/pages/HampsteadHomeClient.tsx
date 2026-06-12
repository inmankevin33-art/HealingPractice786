"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import EDFeatureBlock from "@/components/EDFeatureBlock";
import ServiceOverview from "@/components/ServiceOverview";
import IntimateTreatmentApproachSection from "@/components/IntimateTreatmentApproachSection";
import DynamicFAQ from "@/components/DynamicFAQ";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";

export interface FaqType {
  question: string;
  answer: string;
}

export interface HampsteadClientProps {
  faqs: FaqType[];
}

export default function HampsteadHomeClient({ faqs }: HampsteadClientProps) {
  return (
    <main className="flex flex-col w-full selection:bg-blue-100 transform-gpu">
      
      {/* 1. Smart Hero (Automatically detects /hampstead URL) */}
      <Hero />
      
      {/* 2. Doctor Authority Block */}
      <EDFeatureBlock />

      {/* 3. Smart Services Grid (Only shows Intimate Health for Hampstead) */}
      <div id="treatments">
        <ServiceOverview />
      </div>

      {/* 4. Hampstead Specific Intimate Health Section */}
      <IntimateTreatmentApproachSection />

      {/* --- CTA BAR --- */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          
          <Link
            href="#contact-form-section"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            Book Private Consultation
          </Link>

          <Link
            href="/hampstead/prices"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href="/hampstead/faq"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2 font-inter"
          >
            View Common Questions
          </Link>
        </div>
      </section>

      {/* 5. Dynamic FAQs (Fed from hampstead/page.tsx) */}
      <DynamicFAQ faqs={faqs} locationName="Hampstead" />

      {/* 6. Google Reviews - Using the primary clinic widget */}
      <div id="reviews-section">
        <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
      </div>

      {/* 7. Contact & Location */}
      <div id="contact-form-section" className="contain-layout">
        <ContactCTASection />
        <LocationSection />
      </div>

      <Footer />
    </main>
  );
}
