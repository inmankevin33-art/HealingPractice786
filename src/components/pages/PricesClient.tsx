"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";
import Script from "next/script";

// ... (Keep your types: QA, Treatment, Category, and slugify function)

export default function PricesClient({ isBirmingham = false }: { isBirmingham?: boolean }) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // ... (Keep your useEffects for Desktop check and Modal scroll lock)

  // --- PRICING DATA (RESTRUCTURED FOR SCANNABILITY) ---
  // Note: I suggest keeping the descriptions short in the main view.
  
  const categories = [
    {
      id: "facial",
      title: "Facial Aesthetics",
      items: [
        { name: "Polynucleotides", price: "From £150", sessions: "1-3 sessions", details: "Advanced skin repair & hydration" },
        { name: "HA Skin Boosters", price: "£250", sessions: "2-3 sessions", details: "Deep hydration & glow" },
        { name: "PRP Microneedling", price: "£150", sessions: "2-3 sessions", details: "Texture & acne scar support" },
        { name: "Vampire Facial", price: "£550", sessions: "Course of 3: £1500", details: "Full face regeneration" },
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
    // ... Add other categories similarly
  ];

  // Schema.org Price Data for Google
  const priceSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "priceCurrency": "GBP",
    "name": "Healing-PRP Treatment Prices",
    "description": "Doctor-led regenerative medicine pricing for St Albans and Birmingham."
  };

  return (
    <>
      <Script
        id="price-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />

      {/* --- HERO: CLEAN & PROFESSIONAL --- */}
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

      {/* --- PRICE TABLES: THE SCANNABLE LAYOUT --- */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-16 bg-white border-b border-slate-50">
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
                      onClick={handleWhatsAppClick}
                      className="text-sm font-bold text-blue-600 hover:text-blue-800 underline underline-offset-4"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* --- FAQ SECTION: TRUST BUILDING --- */}
      <section className="py-24 bg-slate-50">
          {/* ... Keep your existing FAQ logic here, it is good for SEO ... */}
      </section>

      <ContactCTASection />
      <Footer />
      {/* ... Keep your Modal logic ... */}
    </>
  );
}
