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

  // Scroll lock for modal
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

  const services = [
    {
      title: "Hair Restoration",
      desc: "Advanced PRP & Exosome treatments to stop hair loss and stimulate natural regrowth.",
      link: "/birmingham/hair-restoration",
    },
    {
      title: "Sexual Rejuvenation",
      desc: "P-Shot® & O-Shot® therapies for function, sensitivity, and confidence.",
      link: "/birmingham/sexual-rejuvenation",
    },
    {
      title: "Joint Injections",
      desc: "Non-surgical pain relief for arthritis and sports injuries (PRP & Steroid).",
      link: "/birmingham/joint-injections",
    },
    {
      title: "Facial Aesthetics",
      desc: "Natural skin rejuvenation using Polynucleotides and Vampire Facials.",
      link: "/birmingham/facial-aesthetics",
    },
  ];

  return (
    <>
      {/* --- NEW HERO SECTION (Matches St Albans Style) --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden" style={{ backgroundImage: "url('/mobilehero.png')" }}></div>
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block" style={{ backgroundImage: "url('/herobg.jpg')" }}></div>
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Main Content - Centered */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-5vh]">
          
          {/* Badge */}
          <div className={`inline-block md:px-4 px-2 md:py-2 py-1 bg-[var(--brand-blue)] text-white rounded-full text-xs mb-6 font-medium uppercase tracking-wider transition-opacity transition-transform duration-1000 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <FaMapMarkerAlt className="inline-block mr-2 mb-0.5" /> Birmingham Clinic
          </div>

          {/* Headline - Large Style */}
          <h1 className={`md:text-5xl text-3xl font-medium font-raleway text-white leading-tight mb-4 transition-opacity transition-transform duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Natural Regeneration Treatments <br /> in Birmingham
          </h1>

          <h2 className={`mt-2 md:text-xl text-lg text-blue-100 font-semibold leading-relaxed transition-opacity transition-transform duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Confidential Care by a GMC Registered Experienced Doctor
          </h2>

          <p className={`mt-4 text-sm md:text-base text-white leading-relaxed max-w-2xl mx-auto mb-8 transition-opacity transition-transform duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Specialist treatments for Hair Restoration, Sexual Wellness, and Joint Pain. 
            Safe, effective, and non-surgical care in the West Midlands.
          </p>

          {/* Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity transition-transform duration-1000 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {isDesktop ? (
              <button onClick={handleWhatsAppClick} className="px-8 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg">
                <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
              </button>
            ) : (
              <a href="https://wa.me/447990364147" target="_blank" rel="noopener noreferrer" className="px-8 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg">
                <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
              </a>
            )}
            <Link href="/contact" className="px-8 py-3 hidden md:inline-flex gap-2 items-center justify-center cursor-pointer text-sm border-2 border-white/30 backdrop-blur-md bg-white/10 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40">
              <FaEnvelope className="w-5 h-5" /> Contact Us
            </Link>
          </div>
        </div>

        {/* Feature Banner at Bottom (Matches St Albans) */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[var(--brand-blue)]/90 backdrop-blur-sm transition-opacity transition-transform duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-4 sm:px-6 lg:px-8 py-5">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center border-r border-[var(--brand-blue-100)]/30">
                  <div className="text-white font-semibold text-xs">GMC-registered doctor</div>
                  <div className="text-blue-100 text-xs">Over 10 years experience</div>
                </div>
                <div className="text-center border-r border-[var(--brand-blue-100)]/30">
                  <div className="text-white font-semibold text-xs">Drug-free options</div>
                  <div className="text-blue-100 text-xs">Your own PRP — no hormones</div>
                </div>
                <div className="text-center border-r border-[var(--brand-blue-100)]/30">
                  <div className="text-white font-semibold text-xs">Discreet location</div>
                  <div className="text-blue-100 text-xs">Edgbaston & Central Birmingham</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-xs">Flexible appointments</div>
                  <div className="text-blue-100 text-xs">Private 1:1 consultations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- END NEW HERO --- */}

      {/* Services Grid (Rest of page content) */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-raleway text-slate-900 mt-2">
              Available Treatments in Birmingham
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-3xl mx-auto">
              We specialize in regenerative medicine, bringing Harley Street expertise to the West Midlands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link href={service.link} className="inline-flex items-center text-[var(--brand-blue)] font-semibold group-hover:gap-2 transition-all duration-300">
                  View Treatments <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Injections Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
                 <img src="/joint-injections.jpg" alt="Joint Injection Therapy" className="w-full h-full object-cover" />
              </div>
              <div>
                 <h2 className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-6">
                    Joint Injections in Birmingham
                 </h2>
                 <p className="text-slate-600 font-inter leading-relaxed mb-6">
                    Doctor-delivered injections for pain relief and mobility in arthritis, tendon, and sports-related conditions.
                    We offer both PRP (Platelet-Rich Plasma) for regeneration and Steroid injections for rapid inflammation relief.
                 </p>
                 <Link href="/birmingham/joint-injections" className="inline-flex items-center text-[var(--brand-blue)] font-semibold hover:gap-2 transition-all duration-300">
                    View Joint Treatments <FaArrowRight className="ml-2 w-4 h-4" />
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--brand-blue)] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-raleway font-bold mb-6">Visit Our Birmingham Clinic</h2>
                <p className="text-blue-100 mb-8 font-inter leading-relaxed">
                  Conveniently located for patients across the West Midlands, including Solihull, Edgbaston, and Sutton Coldfield.
                </p>
                <div className="flex items-start gap-4 mb-10">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-blue-100 text-sm">
                      Healing-PRP Clinics Birmingham<br />
                      [Insert Full Street Address]<br />
                      Birmingham, West Midlands<br />
                      [Postcode]
                    </p>
                  </div>
                </div>
                <div>
                  <Link href="/contact" className="inline-block px-8 py-3 bg-white text-[var(--brand-blue)] rounded-lg font-bold hover:bg-gray-100 transition-colors">
                    Get Directions
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto bg-slate-200">
                 <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
                    <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.6200223727823!2d-1.9025!3d52.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870000000000000%3A0x0000000000000000!2sBirmingham!5e0!3m2!1sen!2suk!4v1"></iframe>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full"><FaTimes className="w-5 h-5 text-slate-600" /></button>
                <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">Scan to Chat</h3>
                <p className="text-sm text-slate-600 mb-6">Use your phone camera to scan the QR code</p>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6"><img src="/qrcode.png" alt="WhatsApp QR Code" className="w-64 h-64" /></div>
                <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all duration-300"><FaWhatsapp className="w-5 h-5" /> Open WhatsApp Web</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ContactCTASection />
      <Footer />
    </>
  );
}
