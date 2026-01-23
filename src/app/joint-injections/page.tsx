```tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

type Treatment = {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  duration: string;
  course: string;
  expandedContent: {
    howItWorks: string;
    whoIsItFor: string[];
    commonQuestions: { question: string; answer: string }[];
  };
};

export default function JointInjectionsPage() {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(
    null
  );
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isModalOpen) return;

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      const top = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(top || "0", 10) * -1);
    };
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
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

  const treatments: Treatment[] = [
    {
      name: "PRP (Platelet-Rich Plasma) Joint Injections",
      price: "From £400",
      description: "Natural healing using your own platelet-rich plasma",
      benefits: [
        "Encourages cartilage & soft-tissue repair",
        "May slow arthritis progression",
        "Suitable for sports injuries & early arthritis",
        "Minimal downtime; drug-free approach",
      ],
      duration: "20–30 minutes",
      course: "Single or course of 3",
      expandedContent: {
        howItWorks:
          "We assess your suitability and may arrange a recent joint X-ray if needed. A small blood sample is taken from your arm like a routine blood test. We use advanced PRP equipment to produce high-quality, concentrated PRP. The PRP is then injected precisely into the affected joint. The entire process takes about 20–30 minutes total.",
        whoIsItFor: [
          "Early to moderate osteoarthritis",
          "Sports and overuse injuries",
          "Tendonitis and bursitis",
          "Frozen shoulder",
          "Those preferring a natural approach",
        ],
        commonQuestions: [
          {
            question: "How long do PRP joint injections last?",
            answer:
              "Initial improvements typically begin at 4–6 weeks, with continued benefits lasting 3–6 months. Best results are often seen with a planned course.",
          },
          {
            question: "What can I expect after the procedure?",
            answer:
              "Mild discomfort can occur for 24–48 hours. Most patients return to normal activities the next day. Effects build gradually over several weeks.",
          },
          {
            question: "Do I need an X-ray before PRP?",
            answer:
              "A recent joint X-ray is helpful for assessment. We can arrange this during consultation if needed.",
          },
        ],
      },
    },
    {
      name: "Steroid Joint Injections",
      price: "From £200",
      description: "Fast-acting anti-inflammatory pain relief",
      benefits: [
        "Fast pain relief",
        "Reduces swelling & inflammation",
        "Relief can last weeks to several months",
        "Quick procedure with minimal downtime",
      ],
      duration: "15–20 minutes",
      course: "Single injection",
      expandedContent: {
        howItWorks:
          "We confirm suitability and discuss risks and benefits. The area is cleaned and local anaesthetic may be used for comfort. The corticosteroid medication is placed precisely into the joint or surrounding soft tissue. The procedure takes about 15–20 minutes including preparation.",
        whoIsItFor: [
          "Inflammatory arthritis flare-ups",
          "Acute sports injuries",
          "Severe joint pain requiring rapid relief",
          "When immediate pain reduction is needed",
          "As part of a broader plan",
        ],
        commonQuestions: [
          {
            question: "How quickly will a steroid injection work?",
            answer:
              "Relief often begins within 1–3 days, with full benefit developing over the following week.",
          },
          {
            question: "Can I go back to work after an injection?",
            answer:
              "Most patients can resume normal activities the same day. Mild soreness can occur for 24–48 hours.",
          },
          {
            question: "How often can I have steroid injections?",
            answer:
              "We limit frequency to protect joint health. The interval depends on your condition and response.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "How long do PRP joint injections last?",
      answer:
        "Improvements often start at 4–6 weeks, with benefits lasting 3–6 months. A course can improve durability of results in suitable patients.",
    },
    {
      question: "How quickly will a steroid injection work?",
      answer:
        "Steroid injections often start helping within 1–3 days, with full benefit over the following week.",
    },
    {
      question: "Can I go back to work after an injection?",
      answer:
        "Yes. Many patients can return to normal activities the same day after a steroid injection, or the next day after PRP.",
    },
    {
      question: "Do I need an X-ray before PRP?",
      answer:
        "A recent joint X-ray is often helpful for assessment. We can advise and arrange this if needed.",
    },
    {
      question: "What's the difference between PRP and steroid injections?",
      answer:
        "PRP aims to support tissue response and recovery and is drug-free (uses your own blood). Steroids reduce inflammation quickly but are typically shorter-term.",
    },
    {
      question: "Are results guaranteed?",
      answer:
        "No. Response varies between individuals and depends on the diagnosis, severity, and overall health. We discuss realistic expectations at consultation.",
    },
    {
      question: "Can PRP be repeated safely?",
      answer:
        "In suitable individuals, PRP can be repeated because it uses your own blood. Frequency is personalised.",
    },
    {
      question: "Is PRP a replacement for medication?",
      answer:
        "No. PRP works differently and may complement other approaches. The right option depends on your condition and goals.",
    },
  ];

  const jointFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      {/* FAQ Schema (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jointFaqSchema) }}
      />

      {/* WhatsApp Desktop Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              className="relative z-10 w-[92%] max-w-md rounded-2xl bg-white shadow-xl p-6"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 p-2 rounded-lg hover:bg-slate-50"
                aria-label="Close"
              >
                <FaTimes className="w-4 h-4 text-slate-600" />
              </button>

              <h3 className="text-lg font-raleway font-semibold text-slate-900">
                Book on WhatsApp
              </h3>
              <p className="mt-2 text-sm font-inter text-slate-600">
                On desktop, WhatsApp opens best via WhatsApp Web. Click below to
                continue.
              </p>

              <a
                href="https://wa.me/447990364147"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--brand-blue)] px-4 py-3 text-sm font-inter font-medium text-white hover:bg-[var(--brand-blue-dark)] transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                Open WhatsApp Web
              </a>

              <button
                onClick={() => setIsModalOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-sm font-inter font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Healing PRP Clinics background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
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
                  GMC-registered | CQC-compliant | Private
                </motion.div>

                <motion.h1
                  className="text-2xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
                  variants={itemVariants}
                >
                  Private Joint Injections (PRP & Steroid) in St Albans | Healing
                  PRP Clinics
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl line-clamp-3"
                  variants={itemVariants}
                >
                  GP-led pain relief for arthritis, sports injuries & joint
                  conditions in a discreet, CQC-compliant setting. Serving
                  patients across Hertfordshire.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col mt-3 sm:flex-row gap-4"
                >
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="px-6 w-full md:w-max inline-flex items-center justify-center text-sm gap-2 py-3 cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]"
                  >
                    <FaEnvelope className="w-5 h-5" />
                    Contact Us
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-gray-100 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-white to-gray-50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              { href: "#what-is-joint-injection", label: "What is a Joint Injection" },
              { href: "#treatments", label: "Treatments" },
              { href: "#comparison", label: "PRP vs Steroid" },
              { href: "#faqs", label: "FAQs" },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
                variants={itemVariants}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is a Joint Injection Section */}
      <section
        id="what-is-joint-injection"
        className="py-20 lg:py-32 bg-white relative"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mb-8"
              >
                <motion.h2
                  className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-3"
                  variants={itemVariants}
                >
                  What is a Joint Injection?
                </motion.h2>
                <motion.p
                  className="text-sm font-inter text-slate-600"
                  variants={itemVariants}
                >
                  A joint injection delivers targeted therapy into a joint or
                  surrounding soft tissue to reduce inflammation, relieve pain,
                  improve mobility, and support recovery.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.p
                  className="text-sm font-inter text-slate-600"
                  variants={itemVariants}
                >
                  Common uses include osteoarthritis (knee, hip, shoulder, hand),
                  tendonitis, bursitis, frozen shoulder, and sports/overuse
                  injuries.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative rounded-lg overflow-hidden shadow-lg max-w-md w-full"
                variants={itemVariants}
              >
                <img
                  src="/joint-injections.jpg"
                  alt="Joint injection treatment"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
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
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              Treatments Offered at Healing PRP Clinics
            </motion.h2>

            <div className="space-y-16">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  id={treatment.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                  className="bg-slate-50 rounded-2xl p-8 lg:p-12"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <h3 className="md:text-2xl text-lg font-raleway text-slate-900">
                          {treatment.name.includes("PRP") ? (
                            <Link
                              href="/#prp-explanation"
                              scroll={false}
                              className="underline decoration-transparent hover:decoration-[var(--brand-blue)]"
                            >
                              {treatment.name}
                            </Link>
                          ) : (
                            treatment.name
                          )}{" "}
                          -
                        </h3>
                        <span className="md:text-xl text-lg font-inter font-semibold text-[var(--brand-blue)]">
                          {treatment.price}
                        </span>
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
                            <FaCheck className="w-3 h-3 mt-[0.35rem] text-[var(--brand-blue)] flex-shrink-0" />
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

                      <div className="space-y-3">
                        <div>
                          <span className="font-inter md:text-base text-sm font-medium text-slate-700">
                            Duration:
                          </span>
                          <span className="font-inter md:text-base text-sm text-slate-600 ml-2">
                            {treatment.duration}
                          </span>
                        </div>

                        <div>
                          <span className="font-inter md:text-base text-sm font-medium text-slate-700">
                            Course:
                          </span>
                          <span className="font-inter md:text-base text-sm text-slate-600 ml-2">
                            {treatment.course}
                          </span>
                        </div>
                      </div>

                      {isDesktop ? (
                        <motion.button
                          onClick={handleWhatsAppClick}
                          className="inline-flex items-center md:text-sm text-xs gap-2 mt-6 md:px-6 px-4 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="w-4 h-4 md:block hidden" />
                          Enquire About {treatment.name}
                        </motion.button>
                      ) : (
                        <motion.a
                          href="https://wa.me/447990364147"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center md:text-sm text-xs gap-2 mt-6 md:px-6 px-4 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="w-4 h-4 md:block hidden" />
                          Enquire About {treatment.name}
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Learn More */}
                  <div className="mt-2">
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name
                            ? null
                            : treatment.name
                        )
                      }
                      className="mt-6 inline-flex items-center gap-2 text-sm font-inter font-medium text-[var(--brand-blue)] hover:underline"
                      whileTap={{ scale: 0.98 }}
                      aria-expanded={expandedTreatment === treatment.name}
                    >
                      {expandedTreatment === treatment.name ? (
                        <>
                          <FaChevronUp className="w-4 h-4" />
                          Hide details
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="w-4 h-4" />
                          Learn more
                        </>
                      )}
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {expandedTreatment === treatment.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-6 bg-white rounded-xl p-6"
                        >
                          <p className="text-sm font-inter text-slate-600">
                            {treatment.expandedContent.howItWorks}
                          </p>

                          <div className="mt-5">
                            <h5 className="font-raleway font-semibold text-slate-900 mb-2">
                              Who is it for?
                            </h5>
                            <ul className="space-y-2">
                              {treatment.expandedContent.whoIsItFor.map(
                                (item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <FaCheck className="w-3 h-3 mt-[0.35rem] text-[var(--brand-blue)] flex-shrink-0" />
                                    <span className="text-sm font-inter text-slate-700">
                                      {item}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div className="mt-6">
                            <h5 className="font-raleway font-semibold text-slate-900 mb-3">
                              Common questions
                            </h5>
                            <div className="space-y-3">
                              {treatment.expandedContent.commonQuestions.map(
                                (q, qi) => (
                                  <div
                                    key={qi}
                                    className="border border-slate-100 rounded-lg p-4"
                                  >
                                    <p className="font-inter font-medium text-slate-900 text-sm">
                                      {q.question}
                                    </p>
                                    <p className="font-inter text-slate-600 text-sm mt-1">
                                      {q.answer}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              PRP vs Steroid Injections
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-raleway font-semibold text-slate-900">
                  PRP (Platelet-Rich Plasma)
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Supports tissue response and recovery",
                    "Drug-free (uses your own blood)",
                    "Typically slower onset (weeks)",
                    "Often used as a course for best results",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 mt-[0.35rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        {x}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <h3 className="text-lg font-raleway font-semibold text-slate-900">
                  Steroid Injection
                </h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Fast anti-inflammatory relief",
                    "Often improves pain within days",
                    "Effects can be shorter-term",
                    "Frequency is limited to protect joint health",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <FaCheck className="w-3 h-3 mt-[0.35rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        {x}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-sm font-inter text-slate-600 text-center max-w-3xl mx-auto"
            >
              The right option depends on your diagnosis, severity, goals, and
              overall health. We’ll help you decide in a clinician-led
              consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <motion.div
                    key={faq.question}
                    variants={itemVariants}
                    className="border border-slate-100 rounded-xl bg-white overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-inter font-medium text-slate-900 text-sm md:text-base">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <FaChevronUp className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-5 pb-4"
                        >
                          <p className="text-sm font-inter text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA + Footer */}
      <ContactCTASection />
      <Footer />
    </>
  );
}
```
