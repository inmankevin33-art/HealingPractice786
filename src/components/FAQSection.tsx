"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Reduced y for a smoother entrance
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const, // Add 'as const' here
      },
    },
  };

  const faqs = [
    {
      question: "What is the P‑Shot and how does it help erectile dysfunction?",
      answer: "The P‑Shot (Priapus Shot) is a natural, non‑surgical treatment that uses your own platelet‑rich plasma (PRP) to stimulate blood flow, enhance sensitivity, and improve erectile function. This is a brief overview — further details can be found on our Sexual Rejuvenation page.",
    },
    {
      question: "Can the P‑Shot and Shockwave Therapy treat Peyronie's disease?",
      answer: "Yes. Both the P‑Shot and Shockwave Therapy are effective non‑surgical options for managing Peyronie's disease. These treatments can help reduce penile curvature, soften scar tissue, and improve erectile function.",
    },
    {
      question: "What is Platelet‑Rich Plasma (PRP)?",
      answer: "PRP is derived from your own blood and contains growth factors and proteins that support natural healing, regeneration, and improved circulation. It is the foundation of our regenerative treatments.",
    },
    {
      question: "What is PRP hair restoration?",
      answer: "PRP Hair Restoration treats thinning hair and early hair loss by stimulating follicles to improve thickness and promote natural regrowth. It is a minimally invasive alternative to surgical options.",
    },
    {
      question: "What's the difference between PRP and steroid joint injections?",
      answer: "PRP injections use your body's own healing cells for long‑term regeneration and tissue repair. Steroid injections provide rapid, temporary relief from inflammation. We offer both depending on your specific clinical needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden font-inter">
      {/* Background Glow to match Location/PRP light sections */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-96 bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Badge: Matches 'Scientific Excellence' styling */}
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.div>

          {/* Header: Matches PRP Section Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            Common Questions About PRP
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 mx-auto leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Find answers to the most frequently asked questions about our regenerative
            treatments and services in St Albans.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`transition-all duration-300 rounded-[1.5rem] border ${
                  isOpen 
                    ? "bg-white border-blue-200 shadow-xl shadow-blue-900/5" 
                    : "bg-slate-50/50 border-slate-100 hover:border-blue-100"
                }`}
                variants={itemVariants}
              >
                {/* Question */}
                <button
                  className="w-full p-6 text-left flex items-center justify-between group"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`font-raleway font-bold text-lg pr-4 leading-snug transition-colors ${
                    isOpen ? "text-blue-600" : "text-slate-900"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? "bg-blue-600 text-white" : "bg-white text-blue-600 shadow-sm"
                  }`}>
                    {isOpen ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8">
                        <div className="border-t border-slate-100 pt-6">
                          <p className="text-slate-600 leading-relaxed text-base font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
