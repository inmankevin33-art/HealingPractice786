"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

type FaqType = {
  question: string;
  answer: string;
};

export default function DynamicFAQ({ faqs, locationName }: { faqs: FaqType[], locationName: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 font-inter text-lg">
            Answers to common questions about our {locationName} clinic treatments.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button
                className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-raleway font-bold text-slate-900 pr-8 text-base md:text-lg">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                  {openIndex === index ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-8 border-t border-slate-100 pt-6">
                      <p className="font-inter text-base text-slate-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
