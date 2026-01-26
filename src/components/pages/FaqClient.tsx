"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPlus, FaMinus, FaEnvelope, FaTimes } from "react-icons/fa";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer"; // FIXED: Added missing import
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqClientProps {
  title: string;
  description: string;
  faqs: FAQItem[];
  locationBadge?: string;
}

export default function FaqClient({ title, description, faqs, locationBadge }: FaqClientProps) {
  const [openFAQKey, setOpenFAQKey] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Added for WhatsApp Modal

  const toggleFAQ = (key: string) => {
    setOpenFAQKey(openFAQKey === key ? null : key);
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Added logic for WhatsApp modal on desktop
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Healing-PRP FAQ Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full z-20 text-center px-4">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            {locationBadge && (
              <motion.div
                className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
                variants={itemVariants}
              >
                {locationBadge}
              </motion.div>
            )}

            <motion.h1
              className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 leading-tight max-w-5xl mx-auto"
              variants={itemVariants}
            >
              {title} <br />
              <span className="text-slate-700">Healing-PRP Clinics</span>
            </motion.h1>

            <motion.p
              className="text-sm md:text-base text-slate-600 font-inter mb-10 max-w-none md:whitespace-nowrap overflow-hidden text-ellipsis"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              {/* WhatsApp Button with Desktop Modal Logic */}
              <a
                href="https://wa.me/447990364147"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-semibold flex gap-2 items-center transition-all shadow-md cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
              </a>

              <Link
                href="/contact"
                className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold flex gap-2 items-center transition-all shadow-sm"
              >
                <FaEnvelope className="w-4 h-4" /> Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const key = `faq-${index}`;
            return (
              <div
                key={key}
                className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(key)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-100/50 transition-colors"
                >
                  <span className="font-raleway font-bold text-slate-900 text-lg">
                    {faq.question}
                  </span>
                  <span className="text-blue-600">
                    {openFAQKey === key ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {openFAQKey === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 font-inter text-sm border-t border-slate-200/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTASection />
      <Footer />

      {/* WhatsApp QR Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" 
              onClick={() => setIsModalOpen(false)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>
                <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">Scan to Chat</h3>
                <p className="text-sm text-slate-600 mb-6">Use your phone camera to scan the QR code</p>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6">
                  <img src="/qrcode.png" alt="WhatsApp QR Code" className="w-64 h-64" />
                </div>
                <a 
                  href="https://wa.me/447990364147" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" /> Open WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
