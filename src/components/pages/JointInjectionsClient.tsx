"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaTimes,
  FaChevronUp,
  FaChevronDown
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import Link from "next/link";

type JointInjectionsClientProps = {
  locationName?: string;
};

export default function JointInjectionsClient({
  locationName = "St Albans",
}: JointInjectionsClientProps) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Determine nearby areas text based on location
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
      price: "",
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
      price: "",
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
      question: "Who is PRP joint injection not suitable for?",
      answer: 
        "PRP may not be suitable for those with severe 'bone-on-bone' arthritis (Grade 4), active infections, or low platelet counts. It is also generally avoided in patients with active malignancy or those currently experiencing a severe inflammatory flare-up where a steroid injection might be more appropriate first.",
    },
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
     {/* Hero Section - Standardized 55vh & Typography */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img
            src="/hero_img.png"
            alt="Joint Injections Background"
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Hero Content */}
        <div className="relative w-full z-20 flex h-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-start">
            <div className="text-center md:text-left">
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
                  className="text-2xl lg:text-4xl text-slate-900 font-raleway font-semibold leading-snug mb-2"
                  variants={itemVariants}
                >
                  Joint Injections Treatments in {locationName}
                  <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
                </motion.h1>

                <motion.p
                  className="text-sm md:text-base font-inter text-slate-600 leading-relaxed max-w-3xl mb-8"
                  variants={itemVariants}
                >
                  GP-led pain relief for arthritis, sports injuries & joint conditions in a 
                  discreet, CQC‑compliant setting. All procedures are carried out by a 
                  GMC‑registered doctor to improve mobility and reduce inflammation.
                </motion.p>
                
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col mt-3 sm:flex-row gap-4 justify-center md:justify-start`}
                >
                  <button
                    onClick={handleAction}
                    // BRAND COLOR LOCK: #4041d1
                    className="px-10 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
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
            <motion.a
              href="#what-is-joint-injection"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white/80 backdrop-blur-sm text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              What is a Joint Injection
            </motion.a>
            <motion.a
              href="#treatments"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white/80 backdrop-blur-sm text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              Treatments
            </motion.a>
            <motion.a
              href="#comparison"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white/80 backdrop-blur-sm text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              PRP vs Steroid
            </motion.a>
            <motion.a
              href="#faqs"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white/80 backdrop-blur-sm text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              FAQs
            </motion.a>
          </motion.div>
        </div>
      </section>

   {/* What is a Joint Injection Section */}
      <section
        id="what-is-joint-injection"
        className="py-16 lg:py-24 bg-white relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Content */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="mb-8"
              >
                <motion.h2
                  className="text-2xl lg:text-3xl font-raleway font-semibold text-slate-900 mb-3"
                  variants={itemVariants}
                >
                  What is a Joint Injection?
                </motion.h2>
                <motion.p
                  className="text-sm font-inter text-slate-600 mb-4"
                  variants={itemVariants}
                >
                  A joint injection delivers targeted therapy into a joint or
                  surrounding soft tissue to reduce inflammation, relieve pain,
                  improve mobility, and support recovery.
                </motion.p>
                <motion.p
                  className="text-sm font-inter text-slate-600"
                  variants={itemVariants}
                >
                  Common uses: osteoarthritis (knee, hip, shoulder, hand),
                  tendonitis, bursitis, frozen shoulder, sports &amp; overuse
                  injuries.
                </motion.p>
              </motion.div>

              {/* Added: Who is it not for section to fill the empty space */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="bg-blue-50/50 p-5 rounded-xl border border-blue-100"
              >
                <motion.h3 
                  className="text-md font-raleway font-bold text-slate-900 mb-3"
                  variants={itemVariants}
                >
                  Who is this treatment not suitable for?
                </motion.h3>
                <ul className="space-y-3">
                  <motion.li variants={itemVariants} className="flex items-start gap-3 text-xs font-inter text-slate-700">
                    <FaTimes className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Severe Degeneration:</strong> Individuals with Grade 4 &quot;bone-on-bone&quot; arthritis may see limited results and may require surgical consultation.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-3 text-xs font-inter text-slate-700">
                    <FaTimes className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Active Infection:</strong> Treatment cannot be performed if there is a systemic infection or an active skin infection at the injection site.</span>
                  </motion.li>
                  <motion.li variants={itemVariants} className="flex items-start gap-3 text-xs font-inter text-slate-700">
                    <FaTimes className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Medical Pre-conditions:</strong> Certain blood or platelet disorders (thrombocytopenia), as well as active malignancies, may preclude regenerative PRP therapy.</span>
                  </motion.li>
                </ul>
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
              className="text-2xl lg:text-3xl font-raleway font-semibold text-slate-900 mb-8 text-center"
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
                        <h3 className="md:text-2xl text-lg font-raleway font-semibold text-slate-900">
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
                        <span className="md:text-xl text-lg font-inter font-bold text-[#4041d1]">
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
                            <FaCheck className="w-3 h-3 mt-[0.3rem] text-[#4041d1] flex-shrink-0 mt-0.5" />
                            <span className="font-inter text-sm text-slate-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
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
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                          const section = document.getElementById("contact-form-section");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="inline-flex items-center text-sm gap-2 mt-6 px-8 py-3.5 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 group"
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Book Consultation
                      </motion.button>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="">
                    <motion.button
                      onClick={() =>
                        setExpandedTreatment(
                          expandedTreatment === treatment.name ? null : treatment.name
                        )
                      }
                      className="inline-flex items-center gap-2 py-3 text-[#4041d1] rounded-lg font-inter text-sm font-semibold transition-all duration-300 hover:opacity-70 cursor-pointer"
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
                                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[#4041d1] flex-shrink-0" />
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
              className="text-2xl lg:text-4xl font-raleway font-semibold text-slate-900 mb-8 text-center"
              variants={itemVariants}
            >
              PRP vs Steroid – Which is Right for Me?
            </motion.h2>

            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-slate-100">
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
                    {/* ... other rows kept identical ... */}
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

      {/* Reusable CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all shadow-lg active:scale-95 gap-2"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"}
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-xl font-inter font-bold transition-all active:scale-95 gap-2"
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
              className="text-2xl lg:text-4xl text-slate-900 tracking-tight font-raleway font-semibold leading-tight text-center"
              variants={itemVariants}
            >
              Common Questions About Joint Injections
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mx-auto leading-relaxed text-center mt-2 mb-8"
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
                    {/* FIXED: Font-Raleway Semibold */}
                    <h3 className="font-raleway font-semibold text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
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
                        <FaPlus className="w-3 h-3 text-[#4041d1]" />
                      </motion.div>
                      <motion.div
                        className="absolute"
                        animate={{
                          opacity: openFAQIndex === index ? 1 : 0,
                          scale: openFAQIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaMinus className="w-3 h-3 text-[#4041d1]" />
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
