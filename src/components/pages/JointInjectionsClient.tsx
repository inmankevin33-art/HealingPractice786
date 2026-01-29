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
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

type JointInjectionsClientProps = {
  locationName?: string;
};

export default function JointInjectionsClient({
  locationName = "St Albans",
}: JointInjectionsClientProps) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Modal scroll lock logic
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  // Fixed Variants: Removed "easeOut" string to prevent build crash
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }      
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }, 
    },
  };

  return (
    <>
      {/* Hero Section using standard img */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-medium mb-4" variants={itemVariants}>
                  GMC‑registered | CQC‑compliant | Private
                </motion.div>
                <motion.h1 className="text-2xl lg:text-4xl text-gray-700 font-semibold mb-2" variants={itemVariants}>
                  Private Joint Injections in {locationName}
                </motion.h1>
                <motion.p className="text-sm text-gray-500 max-w-3xl mb-6" variants={itemVariants}>
                  GP-led pain relief for arthritis and sports injuries.
                </motion.p>
                <motion.div variants={itemVariants} className="flex gap-4">
                  <button onClick={handleWhatsAppClick} className="px-6 py-3 bg-[var(--brand-blue)] text-white rounded-lg flex items-center gap-2">
                    <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-raleway text-slate-900 mb-4">What is a Joint Injection?</h2>
              <p className="text-slate-600 mb-8 font-inter">Targeted therapy to reduce inflammation and improve mobility.</p>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/joint-injections.jpg" alt="Treatment" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />

      {/* WhatsApp QR Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                  <FaTimes className="w-5 h-5" />
                </button>
                <h3 className="text-2xl font-semibold mb-2">Scan to Chat</h3>
                <img src="/qrcode.png" alt="QR Code" className="w-48 h-48 mx-auto mb-6" />
                <a href="https://wa.me/447990364147" className="inline-flex items-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white rounded-lg justify-center font-medium hover:bg-[#20BA5A] transition-all">
                  <FaWhatsapp /> Open WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
