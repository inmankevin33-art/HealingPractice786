"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaUserMd,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

export default function ErectileDysfunctionClient() {
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

  // SEO-Optimized Benefits
  const benefits = [
    "Restores natural spontaneous erections",
    "Non-pharmaceutical & non-surgical",
    "Improves blood flow & sensitivity",
  ];

  const symptoms = [
    "Difficulty achieving a full erection",
    "Losing erection during intercourse",
    "Reduced firmness or sensation",
    "Reliance on oral medications (Pills)",
  ];

  const whoIsItFor = [
    "Men seeking a long-term fix, not just a temporary pill",
    "Patients with vascular-related ED (blood flow issues)",
    "Men who experience side effects from ED medication",
    "Those looking to restore morning erections and confidence",
  ];

  const treatmentDetails = [
    {
      title: "Focused Shockwave Therapy (LiSWT)",
      description:
        "The gold standard for vascular ED. Acoustic waves stimulate the formation of new blood vessels (angiogenesis) and clear micro-plaque blockages. This treats the root cause of ED by physically improving blood supply to the tissue.",
    },
    {
      title: "The P-Shot® (PRP Therapy)",
      description:
        "We utilize high-concentration Platelet-Rich Plasma from your own blood. When injected, these growth factors rejuvenate the nerve endings and cavernous tissue, enhancing sensitivity and response times.",
    },
    {
      title: "Comprehensive Hormonal Review",
      description:
        "Erectile health is often linked to Testosterone levels. We review your hormonal profile to ensure your body has the chemical signals it needs to function correctly, prescribing optimization protocols if necessary.",
    },
  ];

  const faqs = [
    {
      question: "Is Shockwave Therapy painful?",
      answer:
        "Not at all. It is a non-invasive, outpatient procedure. You will feel a tapping sensation, but no anaesthetic is required, and there is zero downtime. You can drive home immediately.",
    },
    {
      question: "How is this different from Viagra/Cialis?",
      answer:
        "Pills are a 'band-aid'—they temporarily force blood flow for a few hours. Our regenerative treatments (Shockwave & PRP) aim to repair the blood vessels and tissue, offering a lasting restoration of function.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Tissue regeneration takes time. While some men notice improvements after 2-3 sessions, the peak benefit is usually seen 8-12 weeks after the course is completed as new blood vessels fully form.",
    },
    {
      question: "Can I treat ED if I have diabetes?",
      answer:
        "Yes. Diabetic ED is often vascular (blood flow related). Shockwave therapy is particularly effective for diabetic patients as it directly targets the compromised blood vessels.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/ed_hero.jpg" 
            alt="Male Health Consultation"
            className="w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/hero_img.png")} // Fallback
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
                Restorative Medicine
              </motion.div>

              <motion.h1
                className="text-2xl lg:text-4xl font-raleway text-slate-900 font-bold leading-snug mb-4"
                variants={itemVariants}
              >
                Erectile Dysfunction Treatment
                <span className="block mt-1 text-slate-700">Treat the Root Cause, Not Just Symptoms</span>
              </motion.h1>

              <motion.p
                className="text-sm md:text-base font-inter text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8"
                variants={itemVariants}
              >
                Move beyond temporary pills. We use advanced Shockwave Therapy and PRP to restore blood flow and spontaneity to your love life.
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
                  <FaUserMd className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Book Confidential Consult
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
              { label: "Understanding ED", href: "#understanding" },
              { label: "Warning Signs", href: "#symptoms" },
              { label: "Our Protocol", href: "#how-it-works" },
              { label: "Ideal Candidates", href: "#who-is-it-for" },
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

      {/* Understanding ED Section */}
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
              Why It Happens: The Vascular Connection
            </motion.h2>

            <motion.p
              className="text-sm md:text-base font-inter text-slate-600 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              {/* FIXED: Replaced " with &quot; to fix build error */}
              Erectile Dysfunction is rarely &quot;just in your head.&quot; In the majority of men over 40, it is a vascular issue. As we age, the micro-vessels in the penis can become restricted or develop plaque (atherosclerosis), limiting the blood inflow required for a firm erection. Our treatments focus on clearing these pathways and generating new, healthy vessels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-20 lg:py-24 bg-slate-50">
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
              Signs You May Need Treatment
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[#4041d1] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {symptom}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-white">
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
              Our Regenerative Protocol
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
            >
              {treatmentDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 shadow-sm border border-slate-100"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3">
                    {detail.title}
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    {detail.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section id="who-is-it-for" className="py-20 lg:py-24 bg-slate-50">
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
              Who Is This For?
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {whoIsItFor.map((item, index) => (
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
              Common Questions
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
