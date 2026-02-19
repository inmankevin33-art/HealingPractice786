"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaEnvelope 
} from "react-icons/fa";
import Link from "next/link";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";

export default function BirminghamHomeClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Hair Restoration",
      desc: "West Midlands' leading clinic for PRP & Exosome hair therapy. Stimulate regrowth without surgery.",
      link: "/birmingham/hair-restoration",
    },
    {
      title: "Sexual Rejuvenation",
      desc: "Confidential P-Shot® & O-Shot® treatments in Birmingham to restore function and sensitivity.",
      link: "/birmingham/sexual-rejuvenation",
    },
    {
      title: "Joint Injections",
      desc: "Expert joint pain relief for arthritis and sports injuries using regenerative PRP therapy.",
      link: "/birmingham/joint-injections",
    },
    {
      title: "Facial Aesthetics",
      desc: "Vampire Facials & Polynucleotides for natural skin rejuvenation in the heart of the Midlands.",
      link: "/birmingham/facial-aesthetics",
    },
  ];

  return (
    <main className="transform-gpu selection:bg-blue-100">
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/mobilehero.webp" 
            alt="Birmingham Clinic Hero" 
            className="absolute inset-0 w-full h-full object-cover sm:hidden opacity-60"
            // @ts-expect-error - fetchpriority supported by browsers
            fetchpriority="high"
          />
          <img 
            src="/herobg.webp" 
            alt="Birmingham Clinic Hero" 
            className="absolute inset-0 w-full h-full object-cover hidden sm:block opacity-60"
            // @ts-expect-error - fetchpriority supported by browsers
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-4vh]">
          <div className={`inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em] transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <FaMapMarkerAlt className="inline-block mr-2 mb-0.5" /> Birmingham Clinic
          </div>

          <h1 className={`md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Natural Regeneration Treatments <br /> in Birmingham
          </h1>

          <h2 className={`mt-1 md:text-lg text-base text-blue-100 font-medium leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Confidential Care by a GMC Registered Experienced Doctor
          </h2>

          <p className={`mt-3 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Specialist regenerative treatments for Hair Loss, Sexual Wellness, and Joint Pain. 
            Serving Edgbaston, Solihull, and the West Midlands.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <button 
              onClick={handleConsultationClick} 
              /* Updated code for exact color match */
              className="px-10 py-3.5 flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-xl active:scale-95 gap-2 group"
            >
              <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
              Book Consultation
            </button>
          </div>
        </div>

        {/* Feature Banner */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <div className="px-4 py-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "GMC-registered doctor", sub: "Over 10 years experience" },
                { label: "Drug-free options", sub: "Your own PRP — no hormones" },
                { label: "Discreet location", sub: "Edgbaston Quarter" },
                { label: "Private consultations", sub: "Strictly 1:1 Care" }
              ].map((item, idx) => (
                <div key={idx} className={`text-center ${idx !== 3 ? 'border-r border-white/10' : ''}`}>
                  <div className="text-white font-bold text-[10px] uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-blue-400 text-[10px] font-semibold">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 bg-white contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 tracking-tight">
              Our Birmingham Treatments
            </h2>
            <p className="text-slate-600 text-base mt-4 max-w-3xl mx-auto leading-relaxed">
              Regenerative medicine treatments delivered by an experienced doctor in our West Midlands clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col transform-gpu"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-raleway font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-xs leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 text-xs font-bold group-hover:gap-2 transition-all"
                >
                  View Details <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PRPExplanationSection />

      {/* Standardized CTA Bar for Birmingham */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/birmingham/prices"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href="/birmingham/faq"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>

      <FAQSection />

      <div id="contact-form-section" className="contain-layout">
        <ContactCTASection />
        <LocationSection />
      </div>

      <Footer />
    </main>
  );
}
