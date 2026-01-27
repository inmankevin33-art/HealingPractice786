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
  locationName?: string; 
}

export default function FaqClient({ 
  title, 
  description, 
  faqs, 
  locationBadge, 
  locationName = "St Albans" 
}: FaqClientProps) {
  const [openFAQKey, setOpenFAQKey] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const formatAnswer = (text: string) => {
    const markdownLinkRegex = /\[(.*?)\]\((.*?)\)/g;
    return text.replace(
      markdownLinkRegex,
      '<a href="$2" class="text-blue-600 font-bold hover:underline">$1</a>'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img src="/hero_img.png" alt="FAQ Background" className="w-full h-full object-cover" />
        </div>

        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                
                {/* Pill Style Badge */}
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  Frequently Asked Questions
                </motion.div>

                {/* Main Heading: Fixed Weight and Responsive Size */}
                <motion.h1
                  className="md:text-3xl text-2xl font-raleway font-semibold text-slate-900 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                  <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
                </motion.h1>

                {/* Subtext: Constraint to max-w-2xl prevents the zoomed look */}
                <motion.p
                  className="text-base mt-2 text-slate-600 leading-relaxed max-w-2xl mx-auto"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>

                {/* Navigation Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col mt-8 sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="https://wa.me/447990364147"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="px-6 py-3 w-full sm:w-max flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2 shadow-sm"
                  >
                    <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
                  </a>

                  <Link
                    href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
                    className="px-6 py-3 w-full sm:w-max flex items-center justify-center text-sm cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue-50)] rounded-lg font-inter bg-white font-medium transition-all duration-300"
                  >
                    View Treatment Prices
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="px-6 py-3 w-full sm:w-max flex items-center justify-center text-sm cursor-pointer border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-lg font-inter bg-white font-medium transition-all duration-300 gap-2 shadow-sm"
                  >
                    <FaEnvelope className="w-4 h-4" /> Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        {/* max-w-3xl prevents questions from stretching too wide on desktop */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const itemKey = `faq-${index}`;
            return (
              <div key={itemKey} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:border-slate-200">
                <button
                  onClick={() => toggleFAQ(itemKey)}
                  className="w-full p-5 md:p-6 flex justify-between items-start text-left hover:bg-slate-50 transition-colors gap-4"
                >
                  {/* Matching the natural Raleway style from Service H2s */}
                  <span className="font-raleway text-slate-900 text-base md:text-lg leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span className="text-[var(--brand-blue)] mt-1.5 flex-shrink-0 text-sm">
                    {openFAQKey === itemKey ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence>
                  {openFAQKey === itemKey && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6 text-slate-600 font-inter text-sm md:text-base border-t border-slate-50 pt-4 leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }} />
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

      {/* WhatsApp QR Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative text-center">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"><FaTimes className="w-5 h-5 text-slate-600" /></button>
                <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">Scan to Chat</h3>
                <p className="text-sm text-slate-600 mb-6 font-inter">Use your phone camera to scan the QR code</p>
                <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6 shadow-inner">
                  <img src="/qrcode.png" alt="WhatsApp QR" className="w-64 h-64" />
                </div>
                <a href="https://wa.me/447990364147" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all font-inter">
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
