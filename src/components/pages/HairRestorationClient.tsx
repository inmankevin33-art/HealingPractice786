"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaPlus,
  FaMinus,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

type HairRestorationClientProps = {
  locationName?: string;
};

export default function HairRestorationClient({
  locationName = "St Albans",
}: HairRestorationClientProps) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Dynamic nearby locations text
  const nearbyAreas =
    locationName === "Birmingham"
      ? "Solihull, Edgbaston, Sutton Coldfield, and the West Midlands"
      : "Harpenden, Luton, Watford, Welwyn, Hertford, and London";

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Unified Action Function: Opens Drawer + Smooth Scroll
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const treatments = [
    {
      name: "PRP Hair Restoration Treatment",
      price: "",
      description:
        "Doctor-led platelet-rich plasma (PRP) injections designed to stimulate hair follicles and support natural hair regrowth",
      benefits: [
        "Stimulate dormant hair follicles using growth factors from your own blood",
        "Support thicker, stronger hair growth over time",
        "Improve scalp health and blood supply to hair follicles",
        "Help slow ongoing hair thinning and shedding",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "A small blood sample is taken and processed to extract platelet-rich plasma (PRP). After numbing cream is applied to the scalp, tiny amounts of PRP are injected into targeted areas to stimulate hair follicles.",
        whoIsItFor: [
          "Men and women experiencing hair thinning",
          "Those seeking non-surgical regenerative options",
        ],
        commonQuestions: [
          {
            question: "How quickly will I see results?",
            answer: "Early improvements are usually noticed within 2–3 months.",
          },
        ],
      },
    },
    {
      name: "Hair Exosome Regeneration Treatment",
      price: "",
      description:
        "Advanced regenerative scalp treatment using purified exosomes to support hair follicle activity and scalp health.",
      benefits: [
        "Support hair follicle signalling and regeneration",
        "May help improve hair density and quality",
        "Enhance scalp environment",
      ],
      duration: "20–40 minutes",
      course: "1-2 sessions recommended",
      expandedContent: {
        howItWorks: "Exosomes act as messengers delivering growth factors to follicles.",
        whoIsItFor: [
          "Early to moderate hair thinning",
          "Patients wanting advanced non-surgical options",
        ],
        commonQuestions: [
          {
            question: "Is there downtime?",
            answer: "Minimal—most return to activities same day.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: `Where can I get PRP hair treatments in ${locationName}?`,
      answer: `At Healing‑PRP Clinics in ${locationName}, we offer advanced PRP hair restoration injections. Many of our patients travel from ${nearbyAreas}.`,
    },
    {
      question: "How long do results from PRP hair treatments last?",
      answer: "Results vary, but many patients see improvements for 12–18 months. Maintenance treatments are often recommended every 6–12 months.",
    },
    {
      question: "Is the hair restoration treatment painful?",
      answer: "Discomfort is generally mild. We use topical numbing cream and very fine needles to ensure the procedure is as comfortable as possible.",
    },
    {
      question: "Can I go back to work after my scalp treatment?",
      answer: "Yes, most patients return to normal activities immediately. There may be some mild redness or a 'tight' sensation on the scalp for 24 hours.",
    },
  ];

  return (
    <>
      {/* Hero Section - Standardized 55vh & Colors */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img src="/hero_img.png" alt="Hair Restoration" className="w-full h-full object-cover" />
        </div>

        <div className="relative w-full z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-start">
          <div className="text-center md:text-left">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4" variants={itemVariants}>
                GMC‑registered | CE‑marked | Natural Results
              </motion.div>
              
              <motion.h1 className="text-2xl lg:text-4xl text-slate-900 font-raleway font-semibold leading-snug mb-2" variants={itemVariants}>
                Hair Restoration & Regenerative Treatments in {locationName}
                <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
              </motion.h1>
              
              <motion.p className="text-sm md:text-base text-slate-600 font-inter leading-relaxed max-w-3xl mb-8" variants={itemVariants}>
                Doctor-led regenerative hair treatments tailored to individual needs following a medical consultation.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onClick={handleAction} className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all shadow-xl gap-2 group active:scale-95">
                  <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Book Consultation
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {treatments.map((treatment, index) => (
              <motion.div key={index} id={treatment.name.toLowerCase().replace(/[^a-z0-9]/g, "-")} className="bg-slate-50 rounded-2xl p-8 lg:p-12" variants={itemVariants}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="md:text-2xl text-lg font-raleway font-semibold text-slate-900 mb-4">{treatment.name}</h3>
                    <p className="text-sm font-inter text-slate-600 mb-6">{treatment.description}</p>
                    <ul className="space-y-3 mb-6">
                      {treatment.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FaCheck className="w-3 h-3 text-[#4041d1] flex-shrink-0 mt-1" />
                          <span className="text-sm font-inter text-slate-700">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-4 font-raleway">Treatment Details</h4>
                    <div className="space-y-3 mb-6">
                      <div className="text-sm font-inter"><span className="font-medium text-slate-700">Duration:</span> {treatment.duration}</div>
                      <div className="text-sm font-inter"><span className="font-medium text-slate-700">Course:</span> {treatment.course}</div>
                    </div>
                    <button onClick={handleAction} className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all shadow-xl gap-2 group active:scale-95">
                      <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Book Consultation
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <button onClick={() => setExpandedTreatment(expandedTreatment === treatment.name ? null : treatment.name)} className="inline-flex items-center gap-2 py-2 text-[#4041d1] text-sm font-semibold font-inter hover:opacity-70 transition-opacity">
                    {expandedTreatment === treatment.name ? (<>Show Less <FaChevronUp className="w-3" /></>) : (<>Learn More <FaChevronDown className="w-3" /></>)}
                  </button>
                </div>

                <AnimatePresence>
                  {expandedTreatment === treatment.name && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mt-6">
                      <div className="bg-white rounded-xl p-6 border-t border-slate-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 font-raleway">How It Works</h4>
                            <p className="text-sm text-slate-600 leading-relaxed font-inter">{treatment.expandedContent.howItWorks}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2 font-raleway">Who Is It For?</h4>
                            <ul className="space-y-2">
                              {treatment.expandedContent.whoIsItFor.map((w, i) => (
                                <li key={i} className="text-sm text-slate-700 flex gap-2 font-inter"><FaCheck className="text-[#4041d1] w-3 mt-1" /> {w}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bar - Matched Colors */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"} className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all shadow-lg active:scale-95 gap-2">
            View Treatment Prices
          </Link>
          <Link href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"} className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-xl font-inter font-bold transition-all active:scale-95 gap-2">
            View Clinic FAQs
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl lg:text-4xl font-raleway font-semibold text-slate-900 tracking-tight leading-tight">
                Common Questions About Hair Restoration
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <button onClick={() => toggleFAQ(index)} className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors">
                    {/* FIXED: Font-Raleway Semibold used here */}
                    <h3 className="font-raleway text-slate-900 font-semibold pr-4 leading-relaxed">{faq.question}</h3>
                    <div className="flex-shrink-0 w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center text-[#4041d1] transition-transform">
                      {openFAQIndex === index ? <FaMinus /> : <FaPlus />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <div className="px-6 pb-6 pt-2 border-t border-slate-50">
                          <p className="text-slate-600 text-sm leading-relaxed font-inter">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
