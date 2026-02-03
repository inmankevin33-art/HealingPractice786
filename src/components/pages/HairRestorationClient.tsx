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
  FaTimes,
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
    // 1. Signal the consultation drawer to open
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // 2. Smooth scroll to the form section
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
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
          "A small blood sample is taken and processed to extract platelet-rich plasma (PRP). After numbing cream is applied to the scalp, tiny amounts of PRP are injected into targeted areas to stimulate hair follicles. Mild redness, tenderness, or pinpoint marks may occur and usually settle within 1–2 days (occasional light bruising is possible).",
        whoIsItFor: [
          "Men and women experiencing hair thinning or early hair loss",
          "Those with pattern hair loss or diffuse thinning",
          "People seeking a non-surgical, regenerative approach",
          "Individuals looking to support natural hair regrowth",
          "Those wanting to improve scalp health and hair quality",
        ],
        commonQuestions: [
          {
            question: "How quickly will I see results from PRP hair treatment?",
            answer:
              "PRP works gradually by supporting the natural hair growth cycle. Early improvements in hair quality or shedding may be noticed within 2–3 months, with more visible changes typically developing over 4–6 months. Results vary between individuals.",
          },
          {
            question: "Which areas of the scalp can be treated with PRP?",
            answer:
              "PRP can be used to treat areas of thinning such as the crown, hairline, temples, and diffuse scalp thinning, depending on individual assessment.",
          },
          {
            question: "Is PRP hair treatment safe?",
            answer:
              "Yes. PRP is derived from your own blood and is generally well tolerated when performed by a trained medical practitioner following appropriate assessment.",
          },
        ],
      },
    },
    {
      name: "Hair Exosome Regeneration Treatment",
      price: "",
      description:
        "Advanced regenerative scalp treatment using purified exosomes to support hair follicle activity and scalp health. As with all regenerative treatments, individual response varies and results cannot be guaranteed.",
      benefits: [
        "Support hair follicle signalling and regeneration",
        "May help improve hair density and quality over time",
        "Enhance scalp environment and follicle function",
        "Often combined with PRP for a synergistic approach",
      ],
      duration: "20–40 minutes",
      course: "1-2 sessions recommended",
      expandedContent: {
        howItWorks:
          "Exosomes are tiny vesicles that act as messengers between cells. In hair treatments, they deliver signalling molecules such as growth factors and proteins that help support communication around hair follicles and the surrounding scalp tissue. This signalling may encourage follicles to remain in, or return to, the active growth phase and support a healthier scalp environment. Exosomes do not create new hair follicles but aim to support the function of existing ones over time. Treatment is usually well tolerated, with mild redness or scalp sensitivity that typically settles within 24–48 hours.",
        whoIsItFor: [
          "Men and women with early to moderate hair thinning",
          "Those with pattern hair loss or diffuse scalp thinning",
          "Individuals seeking an advanced, non-surgical regenerative option",
          "People who have had limited response to PRP alone",
          "Those looking to support scalp health and hair quality",
        ],
        commonQuestions: [
          {
            question: "How long do hair exosome treatment results last?",
            answer:
              "Hair exosome treatments work gradually by supporting the natural hair growth cycle. Improvements in hair quality may be noticed over several months, with results typically assessed at 6–12 months. Longevity varies depending on individual factors and ongoing hair loss.",
          },
          {
            question: "What is the downtime after hair exosome treatment?",
            answer:
              "Minimal — most patients return to normal activities the same day. Mild scalp redness, sensitivity, or tightness may occur and usually settles within 24–48 hours.",
          },
          {
            question: "How many hair exosome treatment sessions are recommended?",
            answer:
              "Many patients are advised to have 1–2 sessions, depending on individual assessment and treatment goals. Some may benefit from a repeat treatment after several months.",
          },
          {
            question:
              "Is hair exosome treatment safe for people with a history of cancer?",
            answer:
              "There is currently no evidence that exosome-based hair treatments cause cancer. However, as exosomes are involved in cellular signalling, treatment is usually avoided in individuals with active cancer or those undergoing cancer treatment. Patients with a past history of cancer are assessed on an individual basis during consultation.",
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
      answer:
        "Results vary, but many patients see improvements for 12–18 months. Maintenance treatments are often recommended every 6–12 months to sustain results.",
    },
    {
      question: "Is the treatment painful?",
      answer:
        "Discomfort is generally mild. We use numbing cream and fine needles to make the procedure as comfortable as possible.",
    },
    {
      question: "Can I combine PRP with other hair loss treatments?",
      answer:
        "Yes, PRP can often be combined with other therapies like Minoxidil, Finasteride, or Exosomes for enhanced results. We can discuss this during your consultation.",
    },
    {
      question: "Is there any downtime?",
      answer:
        "There is minimal downtime. You may experience mild redness or tenderness for 24–48 hours, but most patients return to normal activities immediately.",
    },
    {
      question: "Do you offer consultations before treatment?",
      answer:
        "Yes — every client receives a personal consultation with our GMC‑registered doctor to tailor a safe, effective plan for your hair restoration journey.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Projects background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mt-10 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  GMC‑registered | CE‑marked | Natural Results
                </motion.div>

                <motion.h1
                  className="text-2xl lg:text-4xl text-gray-700 font-semibold leading-snug mb-2"
                  variants={itemVariants}
                >
                  Hair Restoration & Regenerative Treatments in {locationName}
                  <span className="block mt-1">Healing-PRP Clinics</span>
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  At Healing-PRP Clinics in {locationName}, we provide
                  doctor-led regenerative hair treatments for men and women
                  experiencing hair thinning or hair loss. Our approach focuses
                  on evidence-based treatments such as PRP and regenerative
                  protocols, tailored to individual needs following a medical
                  consultation.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col mt-6 sm:flex-row gap-4"
                >
                  <button
                    onClick={handleAction}
                    className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group active:scale-95"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Book Consultation
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-gray-100 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-white to-gray-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {treatments.map((treatment, index) => (
              <motion.a
                key={index}
                href={`#${treatment.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
                className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
                variants={itemVariants}
              >
                {treatment.name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-14 lg:py-32 bg-white relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              className="text-sm font-inter text-slate-600 mb-8 max-w-4xl"
              variants={itemVariants}
            >
              At Healing-PRP Clinics, all hair restoration treatments are
              carried out by a GMC-registered doctor using evidence-based
              regenerative techniques. Each treatment plan is personalised
              following a medical consultation, with a focus on scalp health and
              supporting natural hair growth.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={itemVariants}
            >
              {[
                "We only use high‑quality, CE‑marked products approved for safety and effectiveness",
                "Treatments are tailored to your individual needs",
                "Performed under strict medical hygiene and sterility protocols",
                "Confidential, professional clinic environment with natural‑looking results",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[var(--brand-blue)] flex-shrink-0" />
                  <span className="font-inter text-sm text-slate-700">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm font-inter text-slate-600"
              variants={itemVariants}
            >
              Serving {locationName} and nearby: {nearbyAreas}.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              Our Hair Restoration Treatments
            </motion.h2>

            <div className="space-y-16">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  id={treatment.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}
                  className="bg-slate-50 rounded-2xl p-8 lg:p-12"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="md:text-2xl text-lg font-raleway text-slate-900">
                          {treatment.name} -{" "}
                          <span className="md:text-xl text-lg font-inter font-semibold text-[var(--brand-blue)]">
                            {treatment.price}
                          </span>
                        </h3>
                      </div>
                      <p className="text-sm font-inter text-slate-600 mb-6">
                        {treatment.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start gap-3"
                          >
                            <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                            <span className="font-inter text-sm text-slate-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                    <h4 className="md:text-lg text-base font-raleway font-semibold text-slate-900 mb-4">
                      Treatment Details
                    </h4>
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-inter md:text-base text-sm font-medium text-slate-700">Duration:</span>
                        <span className="font-inter md:text-base text-sm text-slate-600 ml-2">{treatment.duration}</span>
                      </div>
                      <div>
                        <span className="font-inter md:text-base text-sm font-medium text-slate-700">Course:</span>
                        <span className="font-inter md:text-base text-sm text-slate-600 ml-2">{treatment.course}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={handleAction}
                      className="inline-flex items-center justify-center w-full sm:w-auto text-sm gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 group active:scale-95"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Book Consultation
                    </motion.button>
                  </div>
                  {/* Learn More Button */}
                  <div className="mt-4">
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name ? null : treatment.name
                        )
                      }
                      className="inline-flex items-center gap-2 py-2 text-blue-600 rounded-lg font-inter text-sm transition-all duration-300 hover:opacity-70 cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedTreatment === treatment.name ? (
                        <>
                          Show Less
                          <FaChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          Learn More
                          <FaChevronDown className="w-3 h-3 mt-[0.1rem]" />
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedTreatment === treatment.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-6"
                      >
                        <div className="bg-white rounded-xl p-6 border-t border-slate-200">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* How It Works */}
                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                How It Works
                              </h4>
                              <p className="text-sm font-inter text-slate-600 leading-relaxed">
                                {treatment.expandedContent.howItWorks}
                              </p>
                            </div>

                            {/* Who Is It For */}
                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                Who Is It For?
                              </h4>
                              <ul className="space-y-2">
                                {treatment.expandedContent.whoIsItFor.map(
                                  (item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3"
                                    >
                                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                                      <span className="text-sm font-inter text-slate-700">
                                        {item}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>

                          {/* Common Questions */}
                          <div className="mt-8">
                            <h4 className="md:text-lg text-base font-raleway font-semibold text-slate-900 mb-4">
                              Common Questions
                            </h4>
                            <div className="space-y-4">
                              {treatment.expandedContent.commonQuestions.map(
                                (qa, qaIndex) => (
                                  <div
                                    key={qaIndex}
                                    className="bg-slate-50 rounded-lg p-4"
                                  >
                                    <h5 className="font-inter md:text-base text-sm font-semibold text-slate-900 mb-2">
                                      {qa.question}
                                    </h5>
                                    <p className="md:text-sm text-xs font-inter text-slate-600">
                                      {qa.answer}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reusable CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"}
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>
              
      {/* FAQs Section */}
      <section id="faqs" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex justify-center mb-2"
              variants={itemVariants}
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium">
                Frequently Asked Questions
              </div>
            </motion.div>
            <motion.h2
              className="text-2xl lg:text-4xl text-text tracking-tight font-raleway text-navy-600 leading-tight text-center"
              variants={itemVariants}
            >
              Common Questions About Hair Restoration
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              Find answers to the most frequently asked questions about our hair
              restoration treatments and services in {locationName}.
            </motion.p>
            <motion.div
              className="space-y-4 mt-4"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl border border-slate-200/50 overflow-hidden"
                  variants={itemVariants}
                >
                  {/* Question */}
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                    whileTap={{ scale: 0.99 }}
                  >
                    <h3 className="text-slate-900 md:text-base text-sm font-raleway pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center"
                      animate={{ rotate: openFAQIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{
                          opacity: openFAQIndex === index ? 0 : 1,
                          scale: openFAQIndex === index ? 0 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaPlus className="w-3 h-3 text-[var(--brand-blue)]" />
                      </motion.div>
                      <motion.div
                        className="absolute"
                        animate={{
                          opacity: openFAQIndex === index ? 1 : 0,
                          scale: openFAQIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaMinus className="w-3 h-3 text-[var(--brand-blue)]" />
                      </motion.div>
                    </motion.div>
                  </motion.button>

                  {/* Answer */}
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
                          <div className="border-t border-slate-200/50 pt-4">
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
