"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function PrematureEjaculationClient() {
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

  const benefits = [
    "Regain control & confidence",
    "Custom creams stable in vaginal pH",
    "Personalised behavioural & medication plan",
  ];

  const treatmentComponents = [
    {
      title: "Custom Numbing Creams",
      description:
        "Formulations designed for fast onset, consistent effect, and stability in the vaginal environment.",
    },
    {
      title: "Medication Options",
      description:
        "Personalised prescribing where appropriate (e.g., on‑demand or daily regimens) with safety monitoring.",
    },
    {
      title: "Behavioural Coaching",
      description:
        "Guided practice of stop‑start / squeeze methods and arousal pacing, with a take‑home plan tailored to you.",
    },
    {
      title: "Pelvic Floor Programme",
      description:
        "Targeted exercises and biofeedback‑style cues to build strength and control in the pelvic floor.",
    },
  ];

  const whoIsItFor = [
    "Men seeking a non‑surgical, structured plan for PE",
    "Those wanting customised creams and medication options",
    "Men with PE co‑existing with ED or anxiety",
    "Couples looking to improve intimacy and confidence",
  ];

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer:
        "Many men notice improvement within weeks when behavioural plans and topical therapy are followed consistently.",
    },
    {
      question: "Are there side effects?",
      answer:
        "Topical creams may cause temporary local numbness or sensitivity changes; medications can have specific side effects which we discuss during consultation.",
    },
    {
      question: "Do you use PRP for PE?",
      answer:
        "No — PE is best addressed with behavioural strategies and medical therapy. We do not use PRP for premature ejaculation.",
    },
    {
      question: "Can my partner be involved?",
      answer:
        "Yes. Partner‑inclusive guidance often improves outcomes and confidence.",
    },
  ];

  return (
    <>
      {/* Hero Section - Twin Standard Height */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Background"
            className="w-full h-full object-cover"
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
                // BRAND COLOR LOCK
                className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold mb-4 uppercase tracking-wider"
                variants={itemVariants}
              >
                Male Sexual Health
              </motion.div>

              <motion.h1
                className="text-2xl lg:text-4xl font-raleway text-slate-900 font-bold leading-snug mb-4"
                variants={itemVariants}
              >
                Premature Ejaculation (PE) Treatment
                <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-base font-inter text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8"
                variants={itemVariants}
              >
                Advanced male sexual health care using behavioural and medical therapies — no surgery, private and GP‑led.
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

              {/* Standardized Single Button */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
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
              { label: "Understanding PE", href: "#understanding" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Who Is It For", href: "#who-is-it-for" },
              { label: "Treatment Components", href: "#treatment-components" },
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

      {/* Understanding Premature Ejaculation Section */}
      <section id="understanding" className="py-20 lg:py-24 bg-white">
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
              Understanding Premature Ejaculation
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Premature ejaculation is reaching climax sooner than desired,
              often within a minute of penetration. Causes are multifactorial —
              including heightened sensitivity, anxiety, and neurochemical or
              hormonal factors — and it frequently co‑exists with performance
              anxiety.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-slate-50">
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
              How It Works
            </motion.h2>

            <motion.div className="space-y-4 mb-8" variants={containerVariants}>
              {[
                "Custom topical numbing creams designed to remain effective in vaginal pH for better consistency",
                "Tailored medication regimens where appropriate to delay climax and reduce hypersensitivity",
                "Behavioural techniques (stop‑start, squeeze method) to improve ejaculatory control",
                "Pelvic floor training to strengthen the bulbocavernosus & pelvic musculature",
                "Lifestyle optimisation (sleep, stress, alcohol/smoking) and partner‑inclusive guidance if desired",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[#4041d1] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Sessions are discreet, and most patients resume normal activities
              immediately after consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section id="who-is-it-for" className="py-20 lg:py-24 bg-white">
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
              Who Is It For?
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {whoIsItFor.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
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

      {/* Treatment Components Section */}
      <section id="treatment-components" className="py-20 lg:py-24 bg-slate-50">
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
              Treatment Components
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {treatmentComponents.map((component, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">
                    {component.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    {component.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Reusable CTA Bar (Standardized) */}
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
      <section id="faqs" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div
              className="flex justify-center mb-2"
              variants={itemVariants}
            >
              <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </div>
            </motion.div>
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway font-bold text-slate-700 leading-tight text-center mb-4"
              variants={itemVariants}
            >
              Common Questions
            </motion.h2>

            <motion.div
              className="space-y-4 mt-8"
              initial="hidden"
              whileInView="visible"
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
