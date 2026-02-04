"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus, FaEnvelope } from "react-icons/fa";
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

  const toggleFAQ = (key: string) => {
    setOpenFAQKey(openFAQKey === key ? null : key);
  };

  const formatAnswer = (text: string) => {
    const markdownLinkRegex = /\[(.*?)\]\((.*?)\)/g;
    return text.replace(
      markdownLinkRegex,
      '<a href="$2" class="text-[#4041d1] hover:underline font-semibold">$1</a>'
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
      {/* Hero Section - Standardized 55vh */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img 
            src="/hero_img.png" 
            alt="FAQ Background" 
            className="w-full h-full object-cover" 
            loading="eager"
          />
        </div>

        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="text-center">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  Frequently Asked Questions
                </motion.div>

                <motion.h1
                  className="md:text-3xl text-2xl font-raleway font-semibold text-slate-900 leading-tight"
                  variants={itemVariants}
                >
                  {title}
                  <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
                </motion.h1>

                <motion.p
                  className="text-base mt-2 text-slate-600 font-inter leading-relaxed max-w-2xl mx-auto"
                  variants={itemVariants}
                >
                  {description}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col mt-8 sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                      const section = document.getElementById("contact-form-section");
                      if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    // BRAND COLOR LOCK: #4041d1
                    className="px-8 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Book Consultation
                  </button>

                  <Link
                    href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
                    // BRAND COLOR LOCK: Border & Text
                    className="px-8 py-3.5 w-full sm:w-max flex items-center justify-center text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 rounded-xl font-inter font-bold transition-all duration-300"
                  >
                    View Treatment Prices
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => {
            const itemKey = `faq-${index}`;
            return (
              <div key={itemKey} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm transition-all hover:border-slate-200">
                <button
                  onClick={() => toggleFAQ(itemKey)}
                  className="w-full p-5 md:p-6 flex justify-between items-start text-left hover:bg-slate-50 transition-colors gap-4"
                >
                  {/* FIXED: Font-Raleway Semibold to match other pages */}
                  <span className="font-raleway font-semibold text-slate-900 text-base md:text-lg leading-snug pr-2">
                    {faq.question}
                  </span>
                  <span className="text-[#4041d1] mt-1.5 flex-shrink-0 text-sm">
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
    </>
  );
}
