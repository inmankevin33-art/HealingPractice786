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
  // Added locationName prop to handle dynamic routing
  locationName?: string; 
}

export default function FaqClient({ title, description, faqs, locationBadge, locationName = "St Albans" }: FaqClientProps) {
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
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
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

            {/* UPDATED: Applied extracted button styles and internal navigation */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              {/* Primary: WhatsApp */}
              <a
                href="https://wa.me/447990364147"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="px-8 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium flex gap-2 items-center transition-all shadow-md cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5" /> Book on WhatsApp
              </a>

              {/* Secondary Action: Prices */}
              <Link
                href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
                className="px-8 py-3 bg-white border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue-50)] rounded-lg font-inter font-medium flex gap-2 items-center transition-all shadow-sm"
              >
                View Treatment Prices
              </Link>
              
              {/* Secondary Action: Contact */}
              <Link
                href="/contact"
                className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg font-inter font-medium flex gap-2 items-center transition-all shadow-sm"
              >
                <FaEnvelope className="w-4 h-4" /> Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

   {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        {/* Adjusted width to max-w-3xl to prevent the 'zoomed' look */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const itemKey = `faq-${index}`;
            return (
              <div
                key={itemKey}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:border-slate-200"
              >
                <button
                  onClick={() => toggleFAQ(itemKey)}
                  className="w-full p-5 md:p-6 flex justify-between items-start text-left hover:bg-slate-50 transition-colors gap-4"
                >
                  {/* Matching Joint Injections typography exactly */}
                  <span className="font-raleway text-slate-900 text-base md:text-lg font-medium leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Icon size matched to service pages */}
                  <span className="text-[var(--brand-blue)] mt-1 flex-shrink-0 text-sm">
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
                      {/* Answer padding and font styling */}
                      <div className="px-5 pb-6 md:px-6 text-slate-600 font-inter text-sm md:text-base border-t border-slate-50 pt-4 leading-relaxed">
                        <div 
                          className="faq-answer-content"
                          dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }} 
                        />
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
