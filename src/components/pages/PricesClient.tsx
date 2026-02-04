"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaChevronRight } from "react-icons/fa";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import Script from "next/script";
import Link from "next/link";

export default function PricesClient({ isBirmingham = false }: { isBirmingham?: boolean }) {
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
    "description": `Doctor-led regenerative medicine prices for ${locationName}.`
  };

  // Animation Variants (Identical to other pages)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Script
        id="price-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(priceSchema) }}
      />

      {/* Hero Section - Standardized 55vh & Typography */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img 
            src="/hero_img.png" 
            alt="Pricing Background" 
            className="w-full h-full object-cover" 
            loading="eager"
          />
        </div>

        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  Transparent Pricing
                </motion.div>

                <motion.h1
                  className="md:text-3xl text-2xl font-raleway font-semibold text-slate-900 leading-tight"
                  variants={itemVariants}
                >
                  Treatment Prices in {locationName}
                  <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
                </motion.h1>

                <motion.p
                  className="text-base mt-2 text-slate-600 leading-relaxed max-w-2xl mx-auto font-inter"
                  variants={itemVariants}
                >
                  Doctor-led regenerative treatments with clear, upfront costs. Serving patients across {isBirmingham ? "the West Midlands" : "Hertfordshire"}.
                </motion.p>

                {/* Stacked Layout: Tags Top, Button Bottom */}
                <motion.div variants={itemVariants} className="flex flex-col mt-8 gap-6 justify-center items-center">
                  <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                    {categories.map(cat => (
                      <a 
                        key={cat.id} 
                        href={`#${cat.id}`} 
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-xs font-semibold font-inter text-slate-700 hover:border-[#4041d1] hover:text-[#4041d1] transition-all shadow-sm whitespace-nowrap"
                      >
                        {cat.title}
                      </a>
                    ))}
                  </div>

                  <button
                    onClick={handleConsultationClick}
                    // BRAND COLOR LOCK: #4041d1
                    className="px-8 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Book Consultation
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-xl font-raleway font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#4041d1] rounded-full"></span>
                {cat.title}
              </h2>

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all hover:border-slate-200">
                {/* Table Header - Desktop Only */}
                <div className="hidden md:grid grid-cols-4 bg-slate-50/50 p-4 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] font-inter">
                  <div className="col-span-1 pl-2">Treatment</div>
                  <div className="col-span-1 text-center">Investment</div>
                  <div className="col-span-1 text-center">Sessions</div>
                  <div className="col-span-1 text-right pr-2">Action</div>
                </div>

                {/* Pricing Rows */}
                {cat.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="grid grid-cols-1 md:grid-cols-4 items-center p-5 md:p-6 border-b last:border-0 border-slate-50 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="col-span-1 mb-3 md:mb-0">
                      <h3 className="font-raleway font-semibold text-slate-900 text-base md:text-lg leading-tight">{item.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 font-inter">{item.details}</p>
                    </div>
                    
                    <div className="col-span-1 text-left md:text-center mb-3 md:mb-0">
                      <span className="text-[#4041d1] font-bold text-xl font-inter">{item.price}</span>
                    </div>

                    <div className="col-span-1 text-left md:text-center mb-4 md:mb-0">
                      <span className="text-[10px] text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase font-bold tracking-wider font-inter">
                        {item.sessions}
                      </span>
                    </div>

                    <div className="col-span-1 text-left md:text-right">
                      <button 
                        onClick={handleConsultationClick}
                        className="flex items-center gap-1 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors group ml-auto md:ml-0 md:inline-flex font-inter"
                      >
                        Book Now
                        <FaChevronRight className="w-2 h-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div id="contact-form-section">
        <ContactCTASection />
        <LocationSection />
      </div>

      <Footer />
    </>
  );
}
