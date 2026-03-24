"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import EDFeatureBlock from "@/components/EDFeatureBlock";
import ServiceOverview from "@/components/ServiceOverview";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import DynamicFAQ from "@/components/DynamicFAQ";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";

// Ensure the type exactly matches what is passed from page.tsx
export interface FaqType {
  question: string;
  answer: string;
}

export interface BirminghamClientProps {
  faqs: FaqType[];
}

export default function BirminghamHomeClient({ faqs }: BirminghamClientProps) {
  return (
    <main className="flex flex-col w-full selection:bg-blue-100 transform-gpu">
      
      {/* 1. Smart Hero (Automatically detects /birmingham URL) */}
      <Hero />
      
      {/* 2. Doctor Authority Block */}
      <EDFeatureBlock />

      {/* 3. Smart Services Grid (Automatically routes to /birmingham links) */}
      <div id="treatments">
        <ServiceOverview />
      </div>

      {/* 4. PRP Explanation Section */}
      <PRPExplanationSection />

      {/* --- CTA BAR --- */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          
          {/* Swapped "Meet Your Doctor" for "Explore All Treatments" */}
          <Link
            href="#treatments"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            Explore All Treatments
          </Link>

          <Link
            href="/birmingham/prices"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href="/birmingham/faq"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2 font-inter"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>

      {/* 5. Dynamic FAQs (Fed from birmingham/page.tsx) */}
      <DynamicFAQ faqs={faqs} locationName="Birmingham" />

      {/* 6. Google Reviews - Birmingham Specific Widget ID Kept Intact */}
      <div id="reviews-section">
        <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" />
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
