"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaWhatsapp, 
  FaEnvelope, 
  FaTimes 
} from "react-icons/fa";
import Link from "next/link";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import LocationSection from "@/components/LocationSection";

export default function BirminghamHomeClient() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const scrollToContact = () => {
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
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden" style={{ backgroundImage: "url('/mobilehero.png')" }}></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: "url('/herobg.jpg')" }}></div>
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Main Content - Centered mt refinement */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-4vh]">
          
          {/* Aligned Badge */}
          <div className={`inline-block px-4 py-1.5 bg-[var(--brand-blue)] text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em] transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <FaMapMarkerAlt className="inline-block mr-2 mb-0.5" /> Birmingham Clinic
          </div>

          {/* Headline - Refined to text-5xl/text-3xl */}
          <h1 className={`md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Natural Regeneration Treatments <br /> in Birmingham
          </h1>

          {/* Subheading - Refined to text-lg/text-base */}
          <h2 className={`mt-1 md:text-lg text-base text-blue-100 font-medium leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Confidential Care by a GMC Registered Experienced Doctor
          </h2>

          <p className={`mt-3 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Specialist regenerative treatments for Hair Loss, Sexual Wellness, and Joint Pain. 
            Proudly serving Edgbaston, Solihull, and the wider West Midlands.
          </p>

          {/* Buttons - py-3.5 refinement */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <button 
              onClick={scrollToContact} 
              className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-xl active:scale-95"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
            
            <button 
              onClick={handleWhatsAppClick} 
              className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer border-2 border-white/20 backdrop-blur-md bg-white/5 rounded-xl text-white font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/40 active:scale-95 gap-2"
            >
              <FaWhatsapp className="w-4 h-4" /> WhatsApp Support
            </button>
          </div>
        </div>

        {/* Feature Banner - Height/Text Refinement */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[var(--brand-blue)]/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-4 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { label: "GMC-registered doctor", sub: "Over 10 years experience" },
                  { label: "Drug-free options", sub: "Your own PRP — no hormones" },
                  { label: "Discreet location", sub: "Edgbaston & Central Birmingham" },
                  { label: "Private consultations", sub: "Strictly 1:1 Care" }
                ].map((item, idx) => (
                  <div key={idx} className={`text-center ${idx !== 3 ? 'border-r border-white/10' : ''}`}>
                    <div className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 font-inter">{item.label}</div>
                    <div className="text-blue-100 text-[10px] md:text-[11px] font-semibold font-inter">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid - Performance Optimized & Aligned */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mt-2 tracking-tight">
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
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col transform-gpu will-change-transform"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h3 className="text-lg font-raleway font-bold text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-xs leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-[var(--brand-blue)] text-xs font-bold group-hover:gap-2 transition-all duration-300"
                >
                  View Details <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid remains at the top */}
      <section id="services" className="py-16 bg-white">
        {/* ... existing services code ... */}
      </section>

      {/* NEW: Scientific PRP Breakdown replaces the static Joint section */}
      <PRPExplanationSection />

      {/* Localized Location Section */}
      <LocationSection />

      {/* WhatsApp Modal - Refined sizing */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[#0f172a]/80 z-[60] backdrop-blur-md" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full pointer-events-auto shadow-2xl relative text-center">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors"><FaTimes className="w-4 h-4" /></button>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Connect Instantly</h3>
                <p className="text-xs text-slate-500 mb-6 font-inter leading-relaxed">Scan with your phone camera to chat with our medical team</p>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 inline-block mb-6"><img src="/qrcode.png" alt="WhatsApp QR Code" className="w-40 h-40" /></div>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all"><FaWhatsapp className="w-5 h-5" /> Open WhatsApp Web</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div id="contact-form-section">
        <ContactCTASection />
      </div>
      <Footer />
    </>
  );
}
