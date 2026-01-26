"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaPlus, FaMinus, FaEnvelope, FaTimes } from "react-icons/fa";
import ContactCTASection from "@/components/ContactCTASection";
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

export default function FaqClient({ title, description, faqs, locationBadge = "GMC-registered | CE-marked" }: FaqClientProps) {
  const [openFAQKey, setOpenFAQKey] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (key: string) => {
    setOpenFAQKey(openFAQKey === key ? null : key);
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

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
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <>
      {/* --- NEW LIGHT HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-50 overflow-hidden">
        {/* Decorative background element (optional subtle gradient) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        
        <div className="relative w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                
                {/* Badge - Blue Style */}
                <motion.div
                  className="inline-block px-4 py-2 bg-blue-100 text-[var(--brand-blue)] rounded-full text-xs font-inter font-semibold mb-6 uppercase tracking-wider"
                  variants={itemVariants}
                >
                  {locationBadge}
                </motion.div>

                {/* Heading - Dark Text */}
                <motion.h1
                  className="text-4xl md:text-6xl font-raleway font-bold text-slate-900 mb-6 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>

                {/* Description - Slate Text */}
                <motion.p
                  className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-inter mb-10"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>

                {/* Buttons - Clean Style */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-medium flex justify-center items-center gap-2 transition-all shadow-md hover:shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-blue-50 rounded-lg font-medium flex justify-center items-center gap-2 transition-colors"
                  >
                    <FaEnvelope className="w-4 h-4" /> Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const key = `faq-${index}`;
            return (
              <div
                key={key}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(key)}
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-raleway font-semibold text-lg text-slate-900 pr-8">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: openFAQKey === key ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[var(--brand-blue)]"
                  >
                    {openFAQKey === key ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openFAQKey === key && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed font-inter border-t border-slate-100 pt-4">
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
      
      {/* WhatsApp Modal */}
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
              <div className="bg-white p-8 rounded-2xl shadow-2xl relative max-w-sm w-full text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <FaTimes className="text-slate-500" />
                </button>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Scan to Chat</h3>
                <p className="text-slate-600 mb-6 text-sm">Use your phone camera to scan the QR code</p>
                <div className="bg-white p-4 rounded-xl border-2 border-slate-100 inline-block">
                   <img src="/qrcode.png" alt="WhatsApp QR" className="w-48 h-48" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
