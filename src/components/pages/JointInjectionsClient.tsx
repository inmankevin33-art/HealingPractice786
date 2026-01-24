"use client";

export default function JointInjectionsClient() {
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
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
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    // On mobile, let the default link behavior work
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
      name: "PRP (Platelet‑Rich Plasma) Joint Injections",
      price: "From £400",
      description: "Natural healing using your own platelet-rich plasma",
      benefits: [
        "Encourages cartilage & soft‑tissue repair",
        "May slow arthritis progression",
        "Suitable for sports injuries & early arthritis",
        "Minimal downtime; drug‑free approach",
      ],
      duration: "20–30 minutes",
      course: "Single or course of 3",
      expandedContent: {
        howItWorks:
          "We assess your suitability and may arrange a recent joint X-ray if needed. A small blood sample is taken from your arm like a routine blood test. We use advanced PRP equipment to produce high-quality, concentrated PRP. The PRP is then injected precisely into the affected joint. The entire process takes about 20-30 minutes total.",
        whoIsItFor: [
          "Early to moderate osteoarthritis",
          "Sports and overuse injuries",
          "Tendonitis and bursitis",
          "Frozen shoulder",
          "Those preferring a natural, drug-free approach",
        ],
        commonQuestions: [
          {
            question: "How long do PRP joint injections last?",
            answer:
              "Initial improvements typically begin at 4-6 weeks, with continued benefits lasting 3-6 months. Best results are achieved with a planned course of treatments.",
          },
          {
            question: "What can I expect after the procedure?",
            answer:
              "Mild discomfort is common and paracetamol may be taken for 24 hours if needed. Most patients return to normal activities the next day. Full effects usually develop over 3-4 weeks.",
          },
          {
            question: "Do I need an X-ray before PRP?",
            answer:
              "A recent joint X-ray is helpful for assessment. We can arrange this for you if needed during your consultation.",
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
          "We confirm suitability and discuss risks and benefits. The skin is cleaned and local anaesthetic may be applied for comfort. The corticosteroid medication is placed precisely into the joint or surrounding soft tissue. The entire procedure takes about 15-20 minutes including preparation.",
        whoIsItFor: [
          "Inflammatory arthritis flare-ups",
          "Acute sports injuries",
          "Severe joint pain requiring rapid relief",
          "When immediate pain reduction is needed",
          "As part of a comprehensive treatment plan",
        ],
        commonQuestions: [
          {
            question: "How quickly will a steroid injection work?",
            answer:
              "Onset of pain relief usually begins within 1-3 days, with full benefits developing over the following week.",
          },
          {
            question: "Can I go back to work after an injection?",
            answer:
              "Yes, most patients can resume normal activities the same day. Mild discomfort or swelling may occur for 24-48 hours but doesn't usually prevent normal activities.",
          },
          {
            question: "How often can I have steroid injections?",
            answer:
              "Frequency is limited to protect joint health. We'll discuss the appropriate interval based on your specific condition and response.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "How long do PRP joint injections last?",
      answer:
        "Initial improvements typically begin at 4-6 weeks, with continued benefits lasting 3-6 months. Best results are achieved with a planned course of treatments.",
    },
    {
      question: "How quickly will a steroid injection work?",
      answer:
        "Steroid injections typically provide relief within 1-3 days, with full benefits developing over the following week.",
    },
    {
      question: "Can I go back to work after an injection?",
      answer:
        "Yes, most patients can resume normal activities the same day for steroid injections, or the next day for PRP injections.",
    },
    {
      question: "Do I need an X-ray before PRP?",
      answer:
        "A recent joint X-ray is helpful for assessment. We can arrange this for you if needed during your consultation.",
    },
    {
      question: "What's the difference between PRP and steroid injections?",
      answer:
        "PRP uses your own blood to stimulate natural healing and is drug-free, while steroid injections provide fast anti-inflammatory relief. PRP has longer-lasting benefits but takes weeks to work, while steroids work quickly but benefits are shorter-term.",
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
                  GMC‑registered | CQC‑compliant | Private
                </motion.div>

                <motion.h1
                  className="text-2xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
                  variants={itemVariants}
                >
                  Private Joint Injections in St Albans | Healing-PRP Clinics
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  GP-led pain relief for arthritis, sports injuries & joint
                  conditions in a discreet, CQC‑compliant setting. Serving patients across Hertfordshire.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col mt-3 sm:flex-row gap-4`}
                >
                  {isDesktop ? (
                    <button
                      onClick={handleWhatsAppClick}
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </button>
                  ) : (
                    <a
                      href="https://wa.me/447990364147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 flex items-center gap-2"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Book on WhatsApp
                    </a>
                  )}
                  <button className="px-6 w-full md:w-max inline-flex items-center justify-center md:text-sm text-xs items-center gap-2 py-3 cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
                    <Link className="flex items-center gap-2" href="/contact">
                      <FaEnvelope className="w-5 h-5" />
                      Contact Us
                    </Link>
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
            <motion.a
              href="#what-is-joint-injection"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              What is a Joint Injection
            </motion.a>
            <motion.a
              href="#treatments"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Treatments
            </motion.a>
            <motion.a
              href="#comparison"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              PRP vs Steroid
            </motion.a>
            <motion.a
              href="#faqs"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              FAQs
            </motion.a>
            {/* <motion.a
              href="#contact"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Contact
            </motion.a> */}
          </motion.div>
        </div>
      </section>

      {/* What is a Joint Injection Section */}
      <section
        id="what-is-joint-injection"
        className="py-20 lg:py-32 bg-white relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Content */}
            <div>
              {/* Section 1: What is a Joint Injection */}
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

              {/* Section 2: Common Uses */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.p
                  className="text-sm font-inter text-slate-600"
                  variants={itemVariants}
                >
                  Common uses: osteoarthritis (knee, hip, shoulder, hand),
                  tendonitis, bursitis, frozen shoulder, sports & overuse
                  injuries.
                </motion.p>
              </motion.div>
            </div>

            {/* Right Side: Image */}
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
                      <div className="flex items-center gap-2 mb-4">
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

                  {/* Learn More Button */}
                  <div className="">
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name
                            ? null
                            : treatment.name
                        )
                      }
                      className="inline-flex items-center gap-2 py-3 text-[var(--brand-blue)] rounded-lg font-inter text-sm transition-all duration-300 hover:opacity-50 cursor-pointer"
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
                                    <h5 className="font-inter font-semibold text-slate-900 mb-2">
                                      {qa.question}
                                    </h5>
                                    <p className="text-sm font-inter text-slate-600">
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

      {/* PRP vs Steroid Comparison Section */}
      <section id="comparison" className="py-20 lg:py-32 bg-white relative">
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
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              PRP vs Steroid – Which is Right for Me?
            </motion.h2>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-4 font-raleway font-semibold text-slate-900">
                        Feature
                      </th>
                      <th className="text-left py-4 px-4 font-raleway font-semibold text-slate-900">
                        PRP Joint Injection
                      </th>
                      <th className="text-left py-4 px-4 font-raleway font-semibold text-slate-900">
                        Steroid Joint Injection
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        What it is
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Your own platelet‑rich plasma to stimulate healing
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Synthetic corticosteroid to reduce inflammation
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        Best for
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Early–moderate arthritis, sports/tendon issues,
                        regenerative approach
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Inflammatory flare‑ups; rapid pain relief needed
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        Onset
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Gradual, ~3–4 weeks
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Often within 1–3 days
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        Duration
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Months; often longer with repeat course
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Weeks to several months
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        Downtime
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Minimal; normal activities next day
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Minimal; normal activities same day
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-inter font-medium text-slate-700">
                        Notes
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Drug‑free; supports tissue repair
                      </td>
                      <td className="py-4 px-4 font-inter text-slate-600">
                        Effective anti‑inflammatory; repeat frequency limited
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <motion.p
                className="mt-8 text-sm font-inter text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                If you prefer a natural, drug‑free option that supports
                long‑term healing, PRP may be ideal. If you need fast relief
                during a flare, a steroid injection may suit you better. In many
                cases, both can be used at different stages. Book a consultation
                and we&apos;ll advise the most effective plan for your goals.
              </motion.p>
            </div>
          </motion.div>
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
              Common Questions About Joint Injections
            </motion.h2>

            <motion.p
              className="text-xs lg:text-sm font-inter text-slate-600 mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              Find answers to the most frequently asked questions about our
              joint injection treatments and services in St Albans.
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
                  >
                    <h3 className="font-raleway text-slate-900 pr-4 leading-relaxed">
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

      {/* WhatsApp QR Code Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">
                    Scan to Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Use your phone camera to scan the QR code
                  </p>

                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6">
                    <img
                      src="/qrcode.png"
                      alt="WhatsApp QR Code"
                      className="w-64 h-64"
                    />
                  </div>

                  {/* WhatsApp Web Button */}
                  <a
                    href="https://web.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Open WhatsApp Web
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
}
