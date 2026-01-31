"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useMemo } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Memoizing the FAQ data to prevent recreation on every re-render
  const faqs = useMemo(() => [
    {
      question: "Who is not suitable for PRP treatments?",
      answer: "Your safety is our priority. PRP may not be suitable for individuals with active infections, certain blood disorders, or those undergoing specific cancer treatments. During our medical consultation, we take a patient-centered approach to review your health history and ensure PRP is the safest, most effective path for your unique needs.",
    },
    {
      question: "Are the results from PRP treatments permanent?",
      answer: "PRP works by stimulating your body’s natural regenerative processes, and while results are long-lasting, they are not permanent as the natural aging process continues. We work closely with you to develop a tailored maintenance plan, ensuring you enjoy your rejuvenated results for as long as possible.",
    },
    {
      question: "Do you offer consultations before treatment?",
      answer: "Absolutely. We believe every successful journey starts with a conversation. We offer a comprehensive medical consultation to listen to your concerns, answer your questions, and determine the right treatment for you. This ensures a transparent, no-pressure environment focused entirely on your wellbeing.",
    },
    {
      question: "What makes PRP at Healing‑PRP Clinics different?",
      answer:  "Our treatments are doctor-led and patient-focused, guided by thorough medical assessment rather than a one-size-fits-all approach. We don’t simply perform a procedure — we develop a personalised medical protocol tailored to your individual biology and treatment goals."
    },
    {
      question: "What's the difference between PRP and steroid joint injections?",
      answer: "PRP injections use your body's own healing cells for long‑term regeneration. Steroid injections provide rapid relief from inflammation and pain. Both options are available depending on your condition.",
    },
  ], []);

  // Explicitly typing variants to fix the TypeScript 'index signature' build error
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#f8fafc] will-change-transform">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4 tracking-tight">
            Common Questions About PRP
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to the most frequently asked questions about our treatments.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden transform-gpu"
              variants={itemVariants}
            >
              <button
                className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-raleway font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <div className="text-blue-600 flex-shrink-0">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
