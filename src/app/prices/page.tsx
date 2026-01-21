"use client";

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

export default function PricesPage() {
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
      name: "Polynucleotide Treatments",
      price: "From £300",
      description:
        "Advanced skin boosters that support repair, hydration, and rejuvenation at a cellular level.",
      benefits: [
        "Support collagen and elastin production",
        "Improve skin elasticity and firmness",
        "Help reduce inflammation and oxidative stress",
        "Deep hydration and improved skin quality",
        "Smoother texture and brighter appearance",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "After applying numbing cream, polynucleotides are injected just under the skin in tiny amounts. Small surface ‘blips’ can appear and usually settle within hours. Mild redness or small injection marks can occur and typically resolve within 1–2 days.",
        whoIsItFor: [
          "Those wanting to improve skin texture and quality",
          "People with fine lines and dull skin",
          "Anyone seeking natural-looking rejuvenation",
          "Those wanting to enhance hydration",
          "People looking for longer-lasting results",
        ],
        commonQuestions: [
          {
            question: "How long do results last?",
            answer:
              "Improvements are often visible within 2–3 weeks, with results commonly lasting 6–9 months depending on skin type and lifestyle.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Common options include under-eye, face, and neck. We’ll recommend the best plan for your goals at consultation.",
          },
          {
            question: "Can it be combined with other treatments?",
            answer:
              "Yes — it can be combined with HA skin boosters or PRP microneedling for a more comprehensive approach.",
          },
        ],
      },
    },
    {
      name: "Non-Crosslinked Hyaluronic Acid (HA) Skin Boosters",
      price: "From £300",
      description:
        "Light, hydrating injections designed to deeply rehydrate and improve skin glow and texture.",
      benefits: [
        "Attract water for long-lasting hydration",
        "Improve elasticity and firmness",
        "Soften fine lines and crepey texture",
        "Support a healthier skin barrier and glow",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "After numbing cream, tiny amounts of HA are injected just under the skin. Small surface ‘blips’ settle within hours. Mild redness or injection marks can occur and typically resolve within 1–2 days (occasional light bruising is possible).",
        whoIsItFor: [
          "Those with dehydrated or dull skin",
          "People wanting improved plumpness",
          "Anyone seeking an enhanced glow",
          "Those with fine lines and crepey texture",
          "People wanting natural-looking hydration",
        ],
        commonQuestions: [
          {
            question: "How quickly will I see results?",
            answer:
              "Hydration often improves within 1–2 weeks. Results typically last 6–9 months depending on your skin and aftercare.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Common areas include the face, neck, and hands. We’ll confirm suitability at consultation.",
          },
          {
            question: "Is it safe?",
            answer:
              "Yes — hyaluronic acid occurs naturally in the body. Treatments are safe when performed by a qualified medical practitioner.",
          },
        ],
      },
    },
    {
      name: "Platelet-Rich Plasma (PRP) Microneedling",
      price: "From £120",
      description:
        "Natural rejuvenation using your own PRP combined with microneedling to stimulate collagen and improve texture.",
      benefits: [
        "Improves acne scars and post-acne marks",
        "Promotes firmer, smoother skin",
        "Stimulates collagen and elastin",
        "Reduces fine lines over time",
        "Improves tone, texture, and glow",
        "Helps minimise the appearance of pores",
      ],
      duration: "45–60 minutes",
      course: "2–3 sessions recommended",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into PRP. PRP is applied while microneedling creates controlled micro-channels to support deeper penetration and regeneration. Downtime is minimal, with most clients returning to normal activities the same day.",
        whoIsItFor: [
          "Those with acne scars or post-acne marks",
          "People wanting improved texture",
          "Anyone seeking natural collagen stimulation",
          "Those with fine lines",
          "People wanting to minimise pore appearance",
        ],
        commonQuestions: [
          {
            question: "How long do results last?",
            answer:
              "An initial glow may appear within 1–2 weeks, with collagen changes continuing over 4–6 weeks. Results often last 6–12 months.",
          },
          {
            question: "Is there downtime?",
            answer:
              "Usually minimal — mild redness can last 24–48 hours.",
          },
          {
            question: "How many sessions are recommended?",
            answer:
              "Best results are typically achieved with 2–3 sessions depending on goals and skin condition.",
          },
        ],
      },
    },
    {
      name: "Collagen Stimulating Threads",
      price: "From £200",
      description:
        "A non-surgical option using biodegradable threads to support lifting and collagen stimulation over time.",
      benefits: [
        "Support lifting/tightening (jawline, cheeks, neck)",
        "Stimulate collagen production",
        "Improve firmness and texture gradually",
        "Quick procedure with minimal downtime",
      ],
      duration: "10–15 minutes",
      course: "Single treatment",
      expandedContent: {
        howItWorks:
          "Threads are quick to insert (often 10–15 minutes). With numbing, discomfort is usually minimal. Mild swelling or bruising can occur and typically settles within a few days.",
        whoIsItFor: [
          "Those with mild to moderate laxity",
          "People wanting non-surgical lifting",
          "Anyone seeking gradual collagen support",
          "Those wanting improved jawline definition",
          "People looking for subtle results",
        ],
        commonQuestions: [
          {
            question: "Is it painful?",
            answer:
              "With numbing, most clients find the procedure very manageable. Any tenderness is usually mild and short-lived.",
          },
          {
            question: "How long do results last?",
            answer:
              "Results develop gradually over 6–12 weeks and often last 12–18 months depending on skin quality and lifestyle.",
          },
          {
            question: "Can it be combined with other treatments?",
            answer:
              "Yes — threads can be paired with PRP, HA boosters, or polynucleotides for a broader plan.",
          },
        ],
      },
    },
    {
      name: "Botox Anti-Wrinkle Injections",
      price: "3 Areas £200",
      description:
        "Targeted muscle relaxation to soften expression lines and help prevent deepening wrinkles.",
      benefits: [
        "Softens expression lines",
        "Helps prevent new wrinkles forming",
        "Quick treatment, minimal downtime",
        "Natural-looking outcomes when tailored correctly",
      ],
      duration: "15–20 minutes",
      course: "Single treatment",
      expandedContent: {
        howItWorks:
          "Small injections are placed into specific muscles to reduce activity and soften lines. Common areas include forehead, frown lines, and crow’s feet.",
        whoIsItFor: [
          "Those with expression lines",
          "People wanting prevention as well as treatment",
          "Anyone seeking a quick option",
          "Those wanting subtle, natural results",
          "People with dynamic wrinkles",
        ],
        commonQuestions: [
          {
            question: "How much does it cost?",
            answer:
              "Anti-wrinkle injections are £200 for 3 areas at Healing-PRP Clinics. A personalised plan is confirmed at consultation.",
          },
          {
            question: "How long do results last?",
            answer:
              "Effects usually begin within 3–5 days, with peak results around 2 weeks. Results commonly last 3–4 months.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Forehead, frown lines, and crow’s feet are most common. Other areas can be discussed during consultation.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "Do your prices include a consultation?",
      answer:
        "Yes — we’ll discuss your goals, suitability, expected outcomes, and aftercare before confirming the final plan and total cost.",
    },
    {
      question: "Why do some treatments show “From £…”?",
      answer:
        "Some treatments vary by area treated, product amount, and whether you choose a single session or a course. We confirm an exact quote after assessment.",
    },
    {
      question: "Do you offer course discounts?",
      answer:
        "For some treatments, courses can offer better value than single sessions. Ask us on WhatsApp and we’ll recommend the most cost-effective plan for your goals.",
    },
    {
      question: "Are there any hidden costs?",
      answer:
        "No — pricing is transparent. If anything changes (e.g., additional areas or sessions), we discuss it with you first.",
    },
    {
      question: "Where do you offer appointments?",
      answer:
        "We currently serve St Albans and Birmingham. If you’re travelling from nearby areas, we can advise on appointment timing and aftercare.",
    },
    {
      question: "How do I book?",
      answer:
        "The quickest way is WhatsApp booking. You can also contact us via the contact form and we’ll get back to you.",
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
            alt="Healing-PRP Clinics background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mt-10 md:mt-0 mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="text-white">
              <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                <motion.div
                  className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
                  variants={itemVariants}
                >
                  GMC-registered | CE-marked | Transparent Pricing
                </motion.div>

                <motion.h1
                  className="text-2xl lg:text-4xl text-gray-700 font-raleway leading-tight mb-2"
                  variants={itemVariants}
                >
                  Treatment Prices at Healing-PRP Clinics – St Albans & Birmingham
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Transparent and competitive pricing for safe, natural, and effective regenerative treatments. All procedures are carried out by a GMC-registered doctor, ensuring expert, medical-led care with no hidden costs.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col mt-3 sm:flex-row gap-4">
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

                  <button className="px-6 w-full md:w-max inline-flex items-center justify-center md:text-sm text-xs gap-2 py-3 cursor-pointer border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] rounded-lg font-inter bg-white font-medium transition-all duration-300 hover:bg-[var(--brand-blue-50)]">
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
                href={`#${treatment.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
                variants={itemVariants}
              >
                {treatment.name}
              </motion.a>
            ))}
            <motion.a
              href="#prp-vampire"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              PRP Vampire Facial
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 lg:py-32 bg-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.p className="text-sm font-inter text-slate-600 mb-8 max-w-4xl" variants={itemVariants}>
              At Healing-PRP Clinics, we offer transparent and competitive pricing for safe, natural, and effective regenerative treatments. All procedures are carried out by a GMC-registered doctor, ensuring expert, medical-led care with no hidden costs.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
              variants={itemVariants}
            >
              {[
                "Doctor-led treatments using high-quality, CE-marked products",
                "Tailored plans based on your goals and suitability",
                "Strict medical hygiene and sterility protocols",
                "Confidential clinic environment with natural-looking results",
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

            <motion.p className="text-sm font-inter text-slate-600" variants={itemVariants}>
              Appointments available in St Albans and Birmingham. If you’re travelling from Harpenden, Luton, Watford, Welwyn, Hertford, or London, we can advise on timing and aftercare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="treatments" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              Treatment Prices
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
                          {treatment.name}{" "}
                          <span className="md:text-xl text-lg font-inter font-semibold text-[var(--brand-blue)]">
                            — {treatment.price}
                          </span>
                        </h3>
                      </div>

                      <p className="text-sm font-inter text-slate-600 mb-6">
                        {treatment.description}
                      </p>

                      <ul className="space-y-3 mb-6">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-3">
                            <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                            <span className="font-inter text-sm text-slate-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-6">
                      <h4 className="md:text-lg text-base font-raleway font-semibold text-slate-900 mb-4">
                        Price & Session Details
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <span className="font-inter md:text-base text-sm font-medium text-slate-700">
                            Appointment time:
                          </span>
                          <span className="font-inter md:text-base text-sm text-slate-600 ml-2">
                            {treatment.duration}
                          </span>
                        </div>
                        <div>
                          <span className="font-inter md:text-base text-sm font-medium text-slate-700">
                            Recommended plan:
                          </span>
                          <span className="font-inter md:text-base text-sm text-slate-600 ml-2">
                            {treatment.course}
                          </span>
                        </div>
                      </div>

                      {isDesktop ? (
                        <motion.button
                          onClick={handleWhatsAppClick}
                          className="inline-flex items-center text-sm gap-2 mt-6 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          Get a Quote / Book
                        </motion.button>
                      ) : (
                        <motion.a
                          href="https://wa.me/447990364147"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm gap-2 mt-6 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          Get a Quote / Book
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Learn More */}
                  <div>
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name ? null : treatment.name
                        )
                      }
                      className="inline-flex items-center gap-2 py-3 text-[var(--brand-blue)] rounded-lg font-inter text-sm transition-all duration-300 hover:opacity-50 cursor-pointer"
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedTreatment === treatment.name ? (
                        <>
                          Show Less <FaChevronUp className="w-3 h-3" />
                        </>
                      ) : (
                        <>
                          What’s included? <FaChevronDown className="w-3 h-3 mt-[0.1rem]" />
                        </>
                      )}
                    </motion.button>
                  </div>

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
                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                How it works
                              </h4>
                              <p className="text-sm font-inter text-slate-600 leading-relaxed">
                                {treatment.expandedContent.howItWorks}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-raleway font-semibold text-slate-900 mb-4">
                                Who it’s for
                              </h4>
                              <ul className="space-y-2">
                                {treatment.expandedContent.whoIsItFor.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3">
                                    <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                                    <span className="text-sm font-inter text-slate-700">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-8">
                            <h4 className="md:text-lg text-base font-raleway font-semibold text-slate-900 mb-4">
                              Common questions
                            </h4>
                            <div className="space-y-4">
                              {treatment.expandedContent.commonQuestions.map((qa, qaIndex) => (
                                <div key={qaIndex} className="bg-slate-50 rounded-lg p-4">
                                  <h5 className="font-inter md:text-base text-sm font-semibold text-slate-900 mb-2">
                                    {qa.question}
                                  </h5>
                                  <p className="md:text-sm text-xs font-inter text-slate-600">
                                    {qa.answer}
                                  </p>
                                </div>
                              ))}
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

      {/* PRP Vampire Facial */}
      <section id="prp-vampire" className="py-20 lg:py-32 bg-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="bg-white rounded-lg p-8 lg:p-12 shadow" variants={itemVariants}>
              <motion.h2
                className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-6"
                variants={itemVariants}
              >
                PRP Vampire Facial — Pricing
              </motion.h2>

              <motion.p className="text-sm font-inter text-slate-600 mb-6" variants={itemVariants}>
                A regenerative skin treatment using your own PRP to support collagen, brighten dull skin, and improve tone and texture.
              </motion.p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-4">
                    What’s included
                  </h3>
                  <p className="text-sm font-inter text-slate-600 leading-relaxed">
                    A small blood sample is processed into high-quality PRP, which is applied with microneedling to support deeper penetration and natural repair.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-4">
                    Typical outcomes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Skin can appear fresher and brighter within a few weeks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Best outcomes often seen after 2–3 sessions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[var(--brand-blue)] flex-shrink-0" />
                      <span className="text-sm font-inter text-slate-700">
                        Results commonly last 6–12 months depending on skin condition
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                  <div>
                    <span className="text-lg font-inter font-semibold text-slate-900">
                      Price: £550
                    </span>
                    <p className="text-sm font-inter text-slate-600">
                      Course of 3: £1500
                    </p>
                  </div>

                  {isDesktop ? (
                    <motion.button
                      onClick={handleWhatsAppClick}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Book on WhatsApp
                    </motion.button>
                  ) : (
                    <motion.a
                      href="https://wa.me/447990364147"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      Book on WhatsApp
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="flex justify-center mb-2" variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium">
                Pricing FAQs
              </div>
            </motion.div>

            <motion.h2
              className="text-2xl lg:text-4xl text-text tracking-tight font-raleway text-navy-600 leading-tight text-center"
              variants={itemVariants}
            >
              Common Questions About Prices & Booking
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mx-auto leading-relaxed text-center"
              variants={itemVariants}
            >
              Answers to common questions about pricing, courses, and how to book in St Albans and Birmingham.
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>

                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">
                    Scan to Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Use your phone camera to scan the QR code
                  </p>

                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6">
                    <img
                      src="/qrcode.png"
                      alt="WhatsApp QR Code"
                      className="w-64 h-64"
                    />
                  </div>

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
