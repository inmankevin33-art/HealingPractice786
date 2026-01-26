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

export default function FaqClient({ title, description, faqs, locationBadge }: FaqClientProps) {
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
      {/* Hero Section - Image Restored and Font Sizes Aligned */}
      <section className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
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

            {/* Adjusted Font and Added Clinic Name to match treatment pages */}
            <motion.h1
              className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 leading-tight max-w-4xl mx-auto"
              variants={itemVariants}
            >
              {title} <br className="hidden md:block" />
              <span className="text-slate-700">Healing-PRP Clinics</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-inter mb-10"
              variants={itemVariants}
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-semibold flex gap-2 items-center transition-all shadow-md"
              >
                <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
              </button>

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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
      
      {/* WhatsApp QR Modal Logic stays here */}
    </>
  );
}
