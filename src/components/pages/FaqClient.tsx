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
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <>
      {/* Hero Section - Restored Image and Smaller Fonts */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="FAQ background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                {locationBadge && (
                  <motion.div
                    className="inline-block px-4 py-2 bg-blue-100 text-[var(--brand-blue)] rounded-full text-xs font-medium mb-6 uppercase tracking-wider"
                    variants={itemVariants}
                  >
                    {locationBadge}
                  </motion.div>
                )}

                {/* Font size reduced to match Treatment pages (text-2xl to 4xl) */}
                <motion.h1
                  className="text-2xl lg:text-4xl font-raleway font-bold text-slate-800 mb-6 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                </motion.h1>

                <motion.p
                  className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl font-inter mb-8"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-blue-700 text-white rounded-lg font-semibold flex gap-2 items-center transition-colors shadow-lg"
                    >
                      <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                    </button>

                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-white border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-slate-50 rounded-lg font-semibold flex gap-2 items-center transition-colors"
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
      <section className="py-20 bg-slate-50">
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
                  className="w-full p-6 flex justify-between items-center text-left"
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
      
      {/* WhatsApp Modal logic remains unchanged */}
    </>
  );
}
