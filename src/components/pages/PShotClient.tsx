"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaBolt,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function PShotClient() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

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

  // SEO Hooks: Focus on Enhancement and Rejuvenation
  const benefits = [
    "Increase penile sensation & sensitivity",
    "Strengthen erections & firmness",
    "Enhance tissue health & blood flow",
  ];

  const signsForTreatment = [
    "Reduced sensation during intimacy",
    "Desire for stronger, firmer erections",
    "Lichen Sclerosus or skin texture issues",
    "Desire to optimize sexual performance naturally",
  ];

  const processSteps = [
    {
      title: "1. Collection",
      description:
        "We draw a small amount of blood from your arm (similar to a standard blood test).",
    },
    {
      title: "2. Concentration",
      description:
        "Using a high-speed centrifuge, we separate the Platelet-Rich Plasma (PRP) containing powerful growth factors.",
    },
    {
      title: "3. Activation",
      description:
        "The area is completely numbed with a potent topical anaesthetic. The PRP is then injected precisely into specific areas of the penis to trigger rejuvenation.",
    },
  ];

  const faqs = [
    {
      question: "Does the injection hurt?",
      answer:
        "This is the most common fear, but the answer is no. We use a very strong medical-grade numbing cream. Most patients report feeling only pressure, not sharp pain.",
    },
    {
      question: "Will it increase size?",
      answer:
        "While the P-Shot is primarily for function, sensitivity, and erection quality, many men report an increase in girth due to improved blood flow and tissue health. Length gains are less common but possible if combined with pump therapy.",
    },
    {
      question: "How long does it last?",
      answer:
        "The results typically last 12 to 18 months. Since we are using your body's own biology to repair tissue, the effects are long-lasting. Many men choose to have an annual 'maintenance' shot.",
    },
    {
      question: "Is there recovery time?",
      answer:
        "There is zero downtime. You can return to work, exercise, and sexual activity on the same day. In fact, utilizing the treated tissue shortly after treatment is often encouraged.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          {/* USER: Replace with image of lab equipment or abstract blue cells/biology */}
          <img
            src="/pshot_hero.jpg" 
            alt="Platelet Rich Plasma Therapy"
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/hero_img.png")}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full w-full items-center mt-10 md:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold mb-4 uppercase tracking-wider"
                variants={itemVariants}
              >
                Performance & Aesthetics
              </motion.div>

              <motion.h1
                className="text-2xl lg:text-4xl font-raleway text-slate-900 font-bold leading-snug mb-4"
                variants={itemVariants}
              >
                Male Sexual Rejuvenation (P-Shot®)
                <span className="block mt-1 text-slate-700">Power Your Performance Naturally</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-base font-inter text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8"
                variants={itemVariants}
              >
                Harness the regenerative power of your own body. Platelet-Rich Plasma (PRP) therapy is designed to increase sensitivity, improve blood flow, and rejuvenate tissue.
              </motion.p>

              <motion.div
                className="hidden md:flex flex-row justify-center gap-4 mb-8"
                variants={itemVariants}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm"
                  >
                    <FaCheck className="w-3 h-3 text-[#4041d1]" />
                    <span className="text-sm font-inter text-slate-700 font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                  }}
                  className="px-8 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
                >
                  <FaBolt className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Book P-Shot Consultation
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-slate-100 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              { label: "What is PRP?", href: "#what-is-prp" },
              { label: "Benefits", href: "#benefits" },
              { label: "The Process", href: "#process" },
              { label: "FAQs", href: "#faqs" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-sm border border-slate-100 shadow-xs bg-white text-[#4041d1] rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
                variants={itemVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is PRP Section */}
      <section id="what-is-prp" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              What is the P-Shot (PRP)?
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-inter text-slate-600 max-w-4xl leading-relaxed mb-6"
              variants={itemVariants}
            >
              The Priapus Shot® (P-Shot) is a pioneering regenerative procedure that uses your own blood to promote penile rejuvenation. Your blood contains Platelet-Rich Plasma (PRP), which is packed with growth factors.
            </motion.p>
            <motion.p
              className="text-sm md:text-base font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              When injected into the penile tissue, these growth factors trick the body into thinking there is an injury that needs repair. This triggers the release of stem cells, the formation of new blood vessels, and the regeneration of nerve tissue—resulting in enhanced function and sensation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Candidates Section */}
      <section id="benefits" className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Key Benefits & Candidates
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {signsForTreatment.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[#4041d1] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Process Section */}
      <section id="process" className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-12 text-center"
              variants={itemVariants}
            >
              The Procedure: Simple & Safe
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100"
                  variants={itemVariants}
                >
                  <div className="w-12 h-12 rounded-full bg-[#4041d1]/10 flex items-center justify-center text-[#4041d1] font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">
                    {step.title.split('. ')[1]}
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/prices"
            className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href="/faq"
            className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex gap-2"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 leading-tight text-center mb-8"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                >
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-raleway font-bold text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[#4041d1]/10 rounded-full flex items-center justify-center relative"
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{ opacity: openFAQIndex === index ? 0 : 1, scale: openFAQIndex === index ? 0 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute"
                      >
                        <FaPlus className="w-3 h-3 text-[#4041d1]" />
                      </motion.div>
                      <motion.div
                        animate={{ opacity: openFAQIndex === index ? 1 : 0, scale: openFAQIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaMinus className="w-3 h-3 text-[#4041d1]" />
                      </motion.div>
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="border-t border-slate-100 pt-4">
                            <p className="font-inter text-sm text-slate-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
