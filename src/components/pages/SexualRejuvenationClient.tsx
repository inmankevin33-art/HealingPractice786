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

type SexualHealthClientProps = {
  locationName?: string;
};

export default function SexualHealthClient({
  locationName = "St Albans",
}: SexualHealthClientProps) {
  const [expandedTreatment, setExpandedTreatment] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  // Determine nearby areas text based on location
  const nearbyAreas =
    locationName === "Birmingham"
      ? "Solihull, Edgbaston, Sutton Coldfield, and the West Midlands"
      : "Harpenden, Watford, Welwyn Garden City, Hitchin, Luton, Hertford, and London";

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const treatments = [
    {
      name: "P‑Shot®",
      price: "",
      description:
        "Standard PRP treatment for mild to moderate erectile dysfunction",
      benefits: [
        "Improve erection firmness and duration",
        "Enhance sensitivity and confidence",
        "Support blood flow and repair",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample of around 40ml is taken from your arm, just like a routine blood test. The blood is then placed in a medical centrifuge to create high‑quality PRP (Platelet‑Rich Plasma). Before treatment, a numbing cream is applied to ensure comfort. The PRP is then carefully injected into precise areas of the penis to stimulate repair and regeneration. You may feel very mild discomfort during the injection, which usually settles within 5–30 minutes. You can return to work straight away. The whole procedure typically takes 30–45 minutes. Depending on your medical history and individual response, you may require a course of up to three injections, which will be discussed in detail during your online consultation. After treatment, you will receive personalised aftercare instructions.",
        whoIsItFor: [
          "Men with mild to moderate erectile dysfunction",
          "Those wanting to improve erection firmness and duration",
          "Reduced penile sensitivity or performance anxiety",
          "Restoring sexual confidence after conditions such as diabetes or circulatory problems",
          "Peyronie's disease (penile curvature due to scar tissue)",
        ],
        commonQuestions: [
          {
            question: "Is the P‑Shot painful?",
            answer:
              "Only mild discomfort, numbing cream is applied before injection.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Many men notice improvements within weeks, with further gains over 2–3 months. Results may vary from patient to patient.",
          },
          {
            question: "Is it safe?",
            answer:
              "Yes. We use your own PRP prepared with CE‑marked, medical‑grade equipment.",
          },
          {
            question: "Is recovery quick?",
            answer:
              "Absolutely. You can return to daily activities straight away.",
          },
        ],
      },
    },
    {
      name: "Exomine® P‑Shot",
      price: "",
      description:
        "Advanced PRP treatment with stronger, longer-lasting results",
      benefits: [
        "Improve erection strength and firmness",
        "Increase sensitivity and responsiveness",
        "Boost vascular regeneration",
      ],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample of around 40ml is taken from your arm. The blood is processed using the Exomine kit, producing PRP with growth factors already released and active. After numbing cream is applied, the enriched PRP is carefully injected into precise areas of the penis to stimulate repair and regeneration. Mild discomfort usually settles within 5–30 minutes, and you can return to work straight away. The procedure is very similar to the standard P‑Shot® but typically takes around 1 hour. Depending on your history and response, you may require a course of up to three injections for optimal results.",
        whoIsItFor: [
          "Moderate to severe erectile dysfunction",
          "Patients wanting stronger, longer‑lasting results than the standard P‑Shot®",
          "Poor response to other therapies",
          "Diabetes or poor circulation",
          "Peyronie's disease (penile curvature caused by scar tissue)",
        ],
        commonQuestions: [
          {
            question: "How is it different from the standard P‑Shot?",
            answer:
              "Standard PRP contains platelets that release growth factors gradually. Exomine PRP has growth factors already released into the plasma, so they are ready to work immediately.",
          },
          {
            question: "Is it longer lasting?",
            answer:
              "Often yes, due to deeper tissue repair and stronger regenerative signalling. Results may vary from patient to patient.",
          },
          {
            question: "Who is it best for?",
            answer:
              "Men with longstanding ED, diabetes, poor response to standard therapies, or Peyronie's disease.",
          },
        ],
      },
    },
    {
      name: "O‑Shot®",
      price: "",
      description:
        "Female rejuvenation for improved sensitivity and vaginal health",
      benefits: [
        "Enhances sensation & supports vaginal rejuvenation",
        "Minimal discomfort, no downtime",
        "Uses your own PRP",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into high‑quality PRP (Platelet‑Rich Plasma). After numbing cream is applied, the PRP is carefully injected into precise areas of the vagina to stimulate regeneration and improved sensitivity. Most women experience only mild, brief discomfort. You can return to work straight away.",
        whoIsItFor: [
          "Vaginal dryness or discomfort during intimacy",
          "Reduced sensitivity or difficulty achieving orgasm",
          "Stress urinary incontinence (leakage when coughing, sneezing, or exercising)",
          "Post‑menopausal vaginal rejuvenation",
          "Enhancing sexual confidence and overall intimate health",
        ],
        commonQuestions: [
          {
            question: "Will it help with vaginal dryness?",
            answer:
              "Yes, many women (especially post‑menopausal) experience improved natural lubrication.",
          },
          {
            question: "Is recovery quick?",
            answer:
              "Absolutely. You can return to daily activities straight away.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Improvements are often noticed within weeks and continue over time. Results may vary from patient to patient.",
          },
          {
            question: "Is it safe?",
            answer:
              "Yes, the O‑Shot uses your body's own plasma, prepared with CE‑certified equipment.",
          },
        ],
      },
    },
    {
      name: "Exomine® O‑Shot",
      price: "",
      description: "Advanced female rejuvenation with enhanced results",
      benefits: [
        "Improves natural lubrication & sensitivity",
        "Supports collagen and blood vessel repair",
        "Stronger, longer-lasting results",
      ],
      duration: "~60 minutes",
      course: "Up to 3 injections",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into Exomine PRP (Platelet‑Rich Plasma) using the Exomine kit. After numbing cream is applied, the PRP is injected into targeted vaginal areas for maximum regenerative benefit. Any mild discomfort resolves quickly. You can return to work straight away. The whole procedure usually takes around 1 hour, and in some cases a course of up to three injections may be recommended.",
        whoIsItFor: [
          "Want stronger, longer‑lasting results than the standard O‑Shot®",
          "Vaginal laxity or dryness, especially after menopause",
          "Stress urinary incontinence that affects quality of life",
          "Reduced sensitivity or difficulty achieving orgasm",
          "Restore vaginal health and confidence after hormonal changes",
        ],
        commonQuestions: [
          {
            question: "How is this different from the standard O‑Shot?",
            answer:
              "Standard PRP releases growth factors gradually. Exomine PRP already has growth factors in the plasma, so they are ready to act immediately after injection.",
          },
          {
            question: "Will it help with incontinence?",
            answer:
              "Yes, it can reduce stress urinary incontinence in many women.",
          },
          {
            question: "Is it suitable post‑menopause?",
            answer:
              "Absolutely. Many post‑menopausal women benefit from improved sensitivity, lubrication, and vaginal health.",
          },
          {
            question: "How soon will I see results?",
            answer:
              "Many women notice benefits within weeks, with continued improvement over time. Results may vary from patient to patient.",
          },
          {
            question: "How long do results last?",
            answer:
              "Most patients notice benefits for 12 months or more. Results may vary from patient to patient.",
          },
        ],
      },
    },
  ];

  const faqs = [
    {
      question: "How soon will I see results?",
      answer:
        "Within weeks, with continued improvement over time. Results may vary from patient to patient.",
    },
    {
      question: "Is this a natural erectile dysfunction treatment?",
      answer:
        "Yes — PRP uses your own blood; Exomine PRP provides extra benefit because growth factors are already released and ready to work immediately. Results may vary from patient to patient.",
    },
    {
      question: "Are your products safe?",
      answer:
        "Absolutely — we only use CE‑marked devices and medical‑grade kits for PRP preparation.",
    },
    {
      question: "Is there downtime after O‑Shot?",
      answer: "Minimal. Most resume daily activity the same day.",
    },
    {
      question: `Do you offer this near ${locationName}?`,
      answer: `Yes — our clinic in ${locationName} is convenient for patients in ${nearbyAreas}.`,
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
        <div className="relative w-full z-20 mt-10 md:mt-0 flex h-full">
          <div className="w-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.div
                  // BRAND COLOR LOCK: Light blue background, brand text
                  className="inline-flex gap-1 px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold mb-4 uppercase tracking-wider"
                  variants={itemVariants}
                >
                  GMC‑registered | CE‑marked equipment{" "}
                  <span className="hidden md:block">| Confidential</span>
                </motion.div>

               <motion.h1
                  className="text-2xl lg:text-4xl text-slate-900 font-raleway font-bold leading-snug mb-2"
                  variants={itemVariants}
                >
                  Sexual Rejuvenation & Natural Regeneration in {locationName}
                  {/* "block" forces this span to start on a new line */}
                  <span className="block mt-1">Healing-PRP Clinics</span>
                </motion.h1>

                <motion.p
                  className="md:text-base text-xs font-inter text-slate-600 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Patient-centred, non-surgical solutions to support confidence,
                  sensitivity and intimacy — delivered by a fully insured,
                  GMC-registered doctor in {locationName}.
                </motion.p>
                <motion.div
                  variants={itemVariants}
                  className={`flex flex-col items-center md:items-start mb-10 md:mb-0 mt-6 sm:flex-row gap-4`}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                      const section = document.getElementById("contact-form-section");
                      if (section) section.scrollIntoView({ behavior: "smooth" });
                    }}
                    // BRAND COLOR LOCK: #4041d1 with hover #2a2bb8
                    className="px-8 py-3.5 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-xl shadow-blue-500/25 gap-2 group"
                  >
                    <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Book Consultation
                  </button>
                  {/* Empty space to maintain line count if needed */}
                  <div className="hidden"></div>
                  <div className="hidden"></div>
                  <div className="hidden"></div>
                  <div className="hidden"></div>
                  <div className="hidden"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-slate-100 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-white to-gray-50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {treatments.map((treatment, index) => (
              <motion.a
                key={index}
                href={`#${treatment.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-")}`}
                className="px-4 py-2 text-sm border border-slate-100 shadow-xs bg-white text-[#4041d1] rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
                variants={itemVariants}
              >
                {treatment.name}
              </motion.a>
            ))}
            <motion.a
              href="#comparison"
              className="px-4 py-2 text-sm bg-white text-[#4041d1] border border-slate-100 shadow-xs rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
              variants={itemVariants}
            >
              Comparison
            </motion.a>
            <motion.button
              onClick={() => {
                const section = document.getElementById(
                  "premature-ejaculation"
                );
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-2 text-sm bg-white text-[#4041d1] border border-slate-100 shadow-xs rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
              variants={itemVariants}
            >
              Premature Ejaculation
            </motion.button>
            <motion.button
              onClick={() => {
                const section = document.getElementById("peyronies-disease");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-4 py-2 text-sm bg-white text-[#4041d1] border border-slate-100 shadow-xs rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
              variants={itemVariants}
            >
              Peyronie&apos;s Disease
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}

      {/* Understanding ED Section */}
      <section className="py-12 lg:py-24 bg-gradient-to-b from-[#f6f7ff] to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-3"
              variants={itemVariants}
            >
              Understanding Erectile Dysfunction (ED)
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 leading-relaxed mb-4"
              variants={itemVariants}
            >
              Erectile dysfunction (ED) is a common condition in which achieving
              or maintaining an erection becomes difficult. It often results
              from a combination of factors, including reduced blood flow,
              stress, hormonal imbalance, diabetes, high blood pressure, nerve
              changes, or certain medications.
            </motion.p>

            <motion.p
              className="text-sm font-inter text-slate-600 leading-relaxed mb-3 "
              variants={itemVariants}
            >
              Sometimes, the blood vessels supplying the penis can become
              narrow, and the penile muscles may weaken, reducing the ability to
              maintain a firm erection. PRP (Platelet-Rich Plasma) therapy can
              help by improving blood flow, regenerating tissue, and
              strengthening the smooth muscle responsible for erections.
            </motion.p>

            <motion.p
              className="text-sm font-inter text-slate-600 leading-relaxed mb-3"
              variants={itemVariants}
            >
              At Healing-PRP Clinics, we recognise that ED can affect both
              physical confidence and emotional wellbeing. Many men prefer to
              avoid invasive procedures and instead explore natural,
              regenerative options. Our treatments — including PRP-based
              therapies such as the P-Shot® and Exomine® P-Shot — use your
              body’s own growth factors to support tissue healing and
              sensitivity.
            </motion.p>

            <motion.p
              className="text-sm font-inter text-slate-600 leading-relaxed mb-3"
              variants={itemVariants}
            >
              Because PRP is derived from your own blood, the treatment is
              autologous, and minimally invasive. While results vary between
              individuals, PRP therapy is designed to address contributing
              factors rather than simply masking symptoms, with the aim of
              supporting erectile function, confidence, and intimacy over time.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-contact-drawer"));
                  const section = document.getElementById("contact-form-section");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                // BRAND COLOR LOCK
                className="px-6 py-3 mt-4 w-max text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 flex items-center gap-2 group"
              >
                <FaEnvelope className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-12 lg:py-16 relative">
        {/* Background Elements */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-3"
              variants={itemVariants}
            >
              A Personal, Medical Approach to Sexual Wellness
            </motion.h2>

            <motion.div
              className="prose prose-lg text-sm max-w-none text-slate-600 font-inter leading-relaxed space-y-6"
              variants={itemVariants}
            >
              <p>
                Sexual health is deeply personal and deserves thoughtful,
                evidence-based care. At Healing-PRP Clinics in {locationName},
                we provide doctor-led regenerative treatments for concerns such
                as erectile dysfunction (ED) and reduced sensitivity. Our
                approach focuses on supporting the body’s natural repair
                processes and healthy blood flow, delivered within a
                confidential, professional clinical setting and tailored to each
                individual.
              </p>
              <p>
                We only use CE‑marked, medical‑grade products and prepare
                high‑quality PRP (Platelet‑Rich Plasma) with the latest
                technology, ensuring maximum safety and effectiveness.
              </p>
              <p>
                Serving {nearbyAreas}. All treatments begin with a medical
                consultation to assess suitability. Recommendations are based on
                individual clinical assessment and may not be appropriate for
                everyone.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                // BRAND COLOR LOCK
                className="px-6 py-3 mt-4 w-max text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 flex items-center gap-2"
              >
                {/* Using FaCheck instead of BookOpen to avoid the error */}
                <FaCheck className="w-4 h-4" /> 
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRP Explanation Section */}
      <section id="what-is-prp" className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="md:text-3xl text-2xl font-raleway font-bold text-slate-900 mb-3"
              variants={itemVariants}
            >
              What is PRP (Platelet‑Rich Plasma)?
            </motion.h2>

            <motion.div
              className="prose prose-lg text-sm max-w-none text-slate-600 font-inter leading-relaxed mb-6"
              variants={itemVariants}
            >
              <p>
                PRP (Platelet‑Rich Plasma) is derived from a small sample of
                your own blood and processed in a medical centrifuge to
                concentrate the platelets. These platelets are rich in growth
                factors that stimulate natural healing, repair, and
                regeneration.
              </p>
              <p className="mt-3">
                When injected into targeted areas, PRP can:
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 text-sm md:grid-cols-2 gap-4"
              variants={itemVariants}
            >
              {[
                "Improve blood flow and sensitivity",
                "Stimulate collagen production and new tissue growth",
                "Support repair of nerves, blood vessels, and muscles",
                "Enhance natural function and overall rejuvenation",
                "PRP comes from your own body",
                "Safe, natural and non‑surgical treatment",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-100"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 text-[#4041d1] flex-shrink-0" />
                  <span className="font-inter text-slate-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16 relative">
        {/* Background Elements */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-3"
              variants={itemVariants}
            >
              What PRP therapy cannot do
            </motion.h2>

            <motion.div
              className="prose prose-lg text-sm max-w-none text-slate-600 font-inter leading-relaxed space-y-6"
              variants={itemVariants}
            >
              <p>
                PRP therapy is not a guaranteed treatment for erectile
                dysfunction, and individual responses vary. PRP therapy is not a
                cure for erectile dysfunction and outcomes vary between
                individuals. It may not be effective where erectile dysfunction
                is primarily caused by severe nerve damage, advanced vascular
                disease, significant psychological factors, or untreated
                hormonal imbalance
              </p>
              <p>
                PRP therapy cannot provide immediate results and should not be
                viewed as a replacement for appropriate medical assessment,
                lifestyle modification, or conventional treatments where these
                are clinically indicated. A consultation is required to assess
                suitability and discuss realistic expectations.
              </p>
              <p>
                Recommendations are based on individual clinical assessment and
                may not be appropriate for everyone.
              </p>
            </motion.div>
           <motion.div variants={itemVariants}>
              <Link
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 mt-4 w-max text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 flex items-center gap-2"
              >
                {/* Using FaCheck instead of BookOpen to avoid the error */}
                <FaCheck className="w-4 h-4" /> 
                Read More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Understanding Premature Ejaculation Section */}
      <section id="premature-ejaculation" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="md:text-3xl text-2xl font-raleway font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Understanding Premature Ejaculation
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mb-8 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Premature ejaculation is reaching climax sooner than desired,
              often within a minute of penetration. Causes are multifactorial —
              including heightened sensitivity, anxiety, and neurochemical or
              hormonal factors — and it frequently co‑exists with performance
              anxiety.
            </motion.p>

            <motion.h3
              className="md:text-2xl text-xl font-raleway font-semibold text-slate-900 mb-4"
              variants={itemVariants}
            >
              How It Works
            </motion.h3>

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
              className="text-sm font-inter text-slate-600 max-w-4xl leading-relaxed mb-8"
              variants={itemVariants}
            >
              Sessions are discreet, and most patients resume normal activities
              immediately after consultation.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/premature-ejaculation"
                // BRAND COLOR LOCK
                className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300"
              >
                Learn More
                <FaChevronDown className="w-3 h-3 rotate-[-90deg]" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Understanding Peyronie's Disease Section */}
      <section id="peyronies-disease" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="md:text-3xl text-2xl font-raleway font-bold text-slate-900 mb-6"
              variants={itemVariants}
            >
              Understanding Peyronie&apos;s Disease
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mb-8 max-w-4xl leading-relaxed"
              variants={itemVariants}
            >
              Peyronie&apos;s Disease Disease occurs when fibrous scar tissue
              (plaques) forms in the tunica albuginea, causing penile curvature,
              indentation, pain, and sometimes shortening. It often follows
              micro‑trauma; in many cases, the cause is unclear. Emotional
              impact is common and treatable.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
            >
              {[
                "Curvature or indentation during erection",
                "Penile pain (usually early phase)",
                "Perceived shortening or loss of elasticity",
                "Erectile difficulties and confidence issues",
              ].map((symptom, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"
                  variants={itemVariants}
                >
                  <FaCheck className="w-4 h-4 mt-[0.2rem] text-[#4041d1] flex-shrink-0" />
                  <span className="text-sm font-inter text-slate-700 leading-relaxed">
                    {symptom}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3
              className="md:text-2xl text-xl font-raleway font-semibold text-slate-900 mb-4"
              variants={itemVariants}
            >
              How It Works
            </motion.h3>

            <motion.p
              className="text-sm font-inter text-slate-600 max-w-4xl leading-relaxed mb-8"
              variants={itemVariants}
            >
              We combine Platelet Rich Plasma (PRP) P Shot with Low Intensity
              Shockwave Therapy (LiSWT) to encourage plaque remodelling and
              vascular regeneration. A small blood sample is processed into PRP;
              after topical anaesthetic, targeted injections are performed
              alongside scheduled shockwave sessions. Most patients return to
              normal activities the same day. A course of 6 or more shockwave
              sessions may be recommended depending on the individual case,
              curvature, and symptom severity.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/peyronies-disease"
                // BRAND COLOR LOCK
                className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300"
              >
                Learn More
                <FaChevronDown className="w-3 h-3 rotate-[-90deg]" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="md:text-3xl text-2xl font-raleway font-bold text-slate-900 mb-8"
              variants={itemVariants}
            >
              Treatments Offered at Healing‑PRP Clinics
            </motion.h2>

            <div className="space-y-16">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  id={treatment.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "-")}
                  className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="md:text-2xl text-xl font-raleway font-bold text-slate-900">
                          {treatment.name} -
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-inter font-bold text-[#4041d1]">
                            {treatment.price}
                          </span>
                        </div>
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
                    <div className="bg-white rounded-xl md:p-6 p-4 border border-slate-100 shadow-sm">
                      <h4 className="md:text-lg text-base font-raleway font-bold text-slate-900 mb-4">
                        Treatment Details
                      </h4>
                      <div className="space-y-3  md:text-base text-sm ">
                        <div>
                          <span className="font-inter font-bold text-slate-700">
                            Duration:
                          </span>
                          <span className="font-inter text-slate-600 ml-2">
                            {treatment.duration}
                          </span>
                        </div>
                        <div>
                          <span className="font-inter font-bold text-slate-700">
                            Course:
                          </span>
                          <span className="font-inter text-slate-600 ml-2">
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
                        // BRAND COLOR LOCK
                        className="inline-flex items-center text-sm gap-2 mt-6 px-8 py-3.5 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-inter font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 group"
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        Book Consultation
                      </motion.button>
                      {/* Empty space to maintain tag alignment */}
                      <div className="hidden"></div>
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
                      className="inline-flex items-center gap-2 py-3 text-[#4041d1] rounded-lg font-inter text-sm font-bold transition-all duration-300 hover:opacity-70 cursor-pointer"
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
                        <div className="bg-white rounded-xl p-6 border border-slate-200">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* How It Works */}
                            <div>
                              <h4 className="text-lg font-raleway font-bold text-slate-900 mb-4">
                                How It Works
                              </h4>
                              <p className="md:text-sm text-xs font-inter text-slate-600 leading-relaxed">
                                {treatment.expandedContent.howItWorks}
                              </p>
                            </div>

                            {/* Who Is It For */}
                            <div>
                              <h4 className="md:text-lg text-base font-raleway font-bold text-slate-900 mb-4">
                                Who Is It For?
                              </h4>
                              <ul className="space-y-2 md:text-sm text-xs">
                                {treatment.expandedContent.whoIsItFor.map(
                                  (item, itemIndex) => (
                                    <li
                                      key={itemIndex}
                                      className="flex items-start gap-3"
                                    >
                                      <FaCheck className="w-3 h-3 mt-[0.3rem] text-[#4041d1] flex-shrink-0" />
                                      <span className="font-inter text-slate-700">
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
                            <h4 className="md:text-lg text-base font-raleway font-bold text-slate-900 mb-4">
                              Common Questions
                            </h4>
                            <div className="space-y-4">
                              {treatment.expandedContent.commonQuestions.map(
                                (qa, qaIndex) => (
                                  <div
                                    key={qaIndex}
                                    className="bg-slate-50 rounded-lg md:p-4 p-2 border border-slate-100"
                                  >
                                    <h5 className="font-inter md:text-base text-sm font-bold text-slate-900 mb-2">
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

      {/* Comparison Table Section */}
      <section id="comparison" className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2
              className="md:text-3xl text-xl font-raleway font-bold text-slate-900 md:mb-6 mb-4"
              variants={itemVariants}
            >
              P-Shot® vs Exomine® P-Shot{" "}
              <span className="hidden md:inline">- Comparison</span>
            </motion.h2>

            <motion.div
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
              variants={itemVariants}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left font-raleway font-bold text-slate-900">
                        Feature
                      </th>
                      <th className="px-6 py-4 text-left font-raleway font-bold text-slate-900">
                        P-Shot® (Priapus Shot®)
                      </th>
                      <th className="px-6 py-4 text-left font-raleway font-bold text-slate-900">
                        Exomine® P-Shot (Priapus Shot®)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Type of PRP
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Standard PRP (Platelet-Rich Plasma)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Exomine PRP – platelets stressed so growth factors are
                        released outside the platelets
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Growth Factor Release
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Gradual release over time as platelets break down
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Growth factors are already active and ready to work
                        immediately
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Procedure Time
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        ~30-45 minutes
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        ~60 minutes (extra preparation steps)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Course of Treatment
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        May require up to 3 injections depending on history
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        May require up to 3 injections depending on history
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Best For
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Mild-moderate ED, sensitivity loss, confidence issues,
                        Peyronie&apos;s disease (early cases)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        Longstanding or severe ED, diabetes-related ED, poor
                        response to standard PRP, Peyronie&apos;s disease (more
                        advanced cases)
                      </td>
                    </tr>
                    <tr className="bg-slate-50/50">
                      <td className="px-6 py-4 font-inter font-bold text-slate-700">
                        Cost
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        £1,300–£1,500 (at Healing-PRP Clinics)
                      </td>
                      <td className="px-6 py-4 font-inter text-slate-600">
                        £1,500–£1,700 (at Healing-PRP Clinics)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

     {/* Reusable CTA Bar */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Prices Link */}
          <Link
            href={locationName === "Birmingham" ? "/birmingham/prices" : "/prices"}
            // BRAND COLOR LOCK
            className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex items-center gap-2"
          >
            View Treatment Prices
          </Link>
          
          {/* FAQ Link */}
          <Link
            href={locationName === "Birmingham" ? "/birmingham/faq" : "/faq"}
            // BRAND COLOR LOCK
            className="px-6 py-3 w-full md:w-max md:text-sm text-xs items-center justify-center cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 bg-white rounded-lg font-inter font-bold transition-all duration-300 inline-flex items-center gap-2"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-12 lg:py-16 bg-white">
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
              className="md:text-3xl text-xl tracking-tight font-raleway font-bold text-slate-900 leading-tight text-center mb-6"
              variants={itemVariants}
            >
              Common Questions About PRP Treatments
            </motion.h2>

            <motion.p
              className="md:text-sm text-xs font-inter text-slate-600 mx-auto leading-relaxed text-center max-w-2xl"
              variants={itemVariants}
            >
              Find answers to the most frequently asked questions about our PRP
              treatments and services in {locationName}.
            </motion.p>
            <motion.div
              className="space-y-4 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                >
                  {/* Question */}
                  <motion.button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="md:text-base text-sm font-raleway font-bold text-slate-900 pr-4 leading-relaxed">
                      {faq.question}
                    </h3>
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 bg-[#4041d1]/10 rounded-full flex items-center justify-center"
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

      {/* Contact Section */}
      <ContactCTASection />

      <Footer />
    </>
  );
}
