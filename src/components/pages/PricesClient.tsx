"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// Removed FaWhatsapp and FaTimes to prevent build errors
import {
  FaCheck,
  FaEnvelope,
} from "react-icons/fa";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";

export default function PricesClient({ isBirmingham = false }: { isBirmingham?: boolean }) {
  // Removed isModalOpen and isDesktop states
  // Removed all useEffect hooks and handleWhatsAppClick function

  // If your page uses location-based logic, we keep the isBirmingham check
  const locationName = isBirmingham ? "Birmingham" : "St Albans";

  const categories = [
    {
      id: "facial",
      title: "Facial Aesthetics",
      items: [
        { name: "Polynucleotides", price: "From £150", sessions: "1-3 sessions", details: "Advanced skin repair & hydration" },
        { name: "HA Skin Boosters", price: "£250", sessions: "2-3 sessions", details: "Deep hydration & glow" },
        { name: "PRP Microneedling", price: "£150", sessions: "2-3 sessions", details: "Texture & acne scar support" },
        { name: "Vampire Facial", price: "£550", sessions: "Course of 3: £1500", details: "Full face regeneration" },
        { name: "Botox (3 Areas)", price: "£200", sessions: "Single", details: "Anti-wrinkle injections" },
      ]
    },
    {
      id: "joint",
      title: "Joint Injections",
      items: [
        { name: "PRP Joint Injection", price: "From £250", sessions: "1-3 sessions", details: "Regenerative pain relief" },
        { name: "Steroid Injection", price: "£120", sessions: "Single", details: "Anti-inflammatory relief" },
      ]
    },
    {
      id: "hair",
      title: "Hair Restoration",
      items: [
        { name: "PRP Hair Treatment", price: "£200", sessions: "Course of 3: £500", details: "Natural follicle stimulation" },
        { name: "Hair Exosomes", price: "From £400", sessions: "Tailored plan", details: "Advanced scalp regeneration" },
      ]
    },
    {
      id: "sexual",
      title: "Sexual Rejuvenation",
      items: [
        { name: "P-Shot® (PRP)", price: "£650", sessions: "Course of 3: £1800", details: "Male performance & repair" },
        { name: "O-Shot® (PRP)", price: "£700", sessions: "1-3 sessions", details: "Female health & sensitivity" },
        { name: "EXO P-Shot®", price: "£1200", sessions: "Enhanced", details: "Advanced exosome protocol" },
      ]
    }
  ];

  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Healing-PRP Clinics",
    "priceRange": "£120 - £1800",
    "image": "https://www.healing-prp.co.uk/Logo2.png",
    "description": "Doctor-led regenerative medicine prices for St Albans and Birmingham."
  };

  return (
    <main> {/* Changed from <> to <main> to match the closing tag */}
      <Script
        id="price-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />

      <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
            Treatment Prices in {isBirmingham ? "Birmingham" : "St Albans"}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-inter">
            Doctor-led regenerative treatments with clear, upfront costs. Serving patients across {isBirmingham ? "the West Midlands" : "Hertfordshire"}.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {categories.map(cat => (
              <a key={cat.id} href={`#${cat.id}`} className="px-5 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm">
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-16 bg-white border-b border-slate-50 scroll-mt-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
              {cat.title}
            </h2>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-4 bg-slate-50 p-4 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-widest">
                <div className="col-span-1">Treatment</div>
                <div className="col-span-1 text-center">Price</div>
                <div className="col-span-1 text-center">Sessions</div>
                <div className="col-span-1 text-right">Action</div>
              </div>

              {cat.items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-4 items-center p-6 border-b last:border-0 border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="col-span-1 mb-2 md:mb-0">
                    <h3 className="font-raleway font-bold text-slate-900 text-lg">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{item.details}</p>
                  </div>
                  <div className="col-span-1 text-left md:text-center mb-4 md:mb-0">
                    <span className="text-blue-600 font-bold text-xl">{item.price}</span>
                  </div>
                  <div className="col-span-1 text-left md:text-center mb-4 md:mb-0">
                    <span className="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-tighter font-semibold">{item.sessions}</span>
                  </div>
                  <div className="col-span-1 text-left md:text-right">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                        const section = document.getElementById("contact-form-section");
                        if (section) section.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4 cursor-pointer"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    
      {/* Location and Footer Sections */}
      <div id="contact-form-section" className="contain-layout">
        <ContactCTASection />
        <LocationSection />
      </div>
    
      <Footer />
    </main>
  );
}
