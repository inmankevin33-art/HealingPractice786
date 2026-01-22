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

type QA = { question: string; answer: string };

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
    commonQuestions: QA[];
  };
};

type Category = {
  id: string;
  title: string;
  subtitle: string;
  items: Treatment[];
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

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
      transition: { duration: 0.6 },
    },
  };

  // -------------------------
  // DATA (Prices)
  // -------------------------

  const facialTreatments: Treatment[] = [
    {
      name: "Polynucleotide Treatments",
      price: "From £150",
      description:
        "Advanced skin boosters designed to support repair, hydration, and rejuvenation at a cellular level.",
      benefits: [
        "Support collagen and elastin production",
        "Improve skin elasticity and firmness",
        "Help calm inflammation and oxidative stress",
        "Deep hydration and improved skin quality",
        "Smoother texture and brighter appearance",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "After numbing cream, polynucleotides are injected just under the skin in tiny amounts. Small surface ‘blips’ can appear and usually settle within hours. Mild redness or injection marks may occur and typically resolve within 1–2 days.",
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
              "Improvements often develop over 2–3 weeks, with results commonly lasting 6–9 months depending on skin type and lifestyle.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Common areas include face, around eyes, neck, and delicate areas depending on suitability. We’ll advise the best plan at consultation.",
          },
          {
            question: "Can it be combined with other treatments?",
            answer:
              "Yes — it can be combined with HA skin boosters or PRP microneedling as part of a tailored plan.",
          },
        ],
      },
    },
    {
      name: "Non Cross-Linked Hyaluronic Acid (HA) Skin Boosters",
      price: "Face £250",
      description:
        "Light, hydrating injections designed to improve glow, elasticity, and overall skin quality.",
      benefits: [
        "Deep hydration and improved glow",
        "Support skin elasticity and firmness",
        "Soften fine lines and crepey texture",
        "Support a healthier skin barrier",
      ],
      duration: "30–45 minutes",
      course: "Up to 3 sessions",
      expandedContent: {
        howItWorks:
          "After numbing cream, tiny amounts of HA are injected just under the skin. Small surface ‘blips’ usually settle within hours. Mild redness or injection marks can occur and typically resolve within 1–2 days (occasional light bruising is possible).",
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
            question: "Is it safe?",
            answer:
              "Yes — hyaluronic acid occurs naturally in the body. Treatments are safe when performed by a qualified medical practitioner.",
          },
          {
            question: "Can it be combined with other treatments?",
            answer:
              "Yes — HA boosters pair well with polynucleotides and PRP microneedling for overall skin quality.",
          },
        ],
      },
    },
    {
      name: "PRP Microneedling",
      price: "£150",
      description:
        "Natural rejuvenation using your own PRP with microneedling to support collagen and improve texture.",
      benefits: [
        "Helps improve acne scars and post-acne marks",
        "Supports firmer, smoother skin",
        "Stimulates collagen and elastin",
        "Helps reduce fine lines over time",
        "Improves tone, texture, and glow",
        "Helps minimise the appearance of pores",
      ],
      duration: "45–60 minutes",
      course: "2–3 sessions recommended",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into PRP. PRP is applied while microneedling creates controlled micro-channels, supporting deeper penetration and regeneration. Downtime is usually minimal.",
        whoIsItFor: [
          "Those with acne scars or post-acne marks",
          "People wanting improved texture",
          "Anyone seeking natural collagen stimulation",
          "Those with fine lines",
          "People wanting to minimise pore appearance",
        ],
        commonQuestions: [
          {
            question: "Is there downtime?",
            answer:
              "Usually minimal — mild redness can last 24–48 hours.",
          },
          {
            question: "When will I see results?",
            answer:
              "An initial glow may appear within 1–2 weeks, with collagen changes continuing over 4–6 weeks.",
          },
          {
            question: "How many sessions do I need?",
            answer:
              "Most people do best with 2–3 sessions depending on goals and skin condition.",
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
        "Supports lifting/tightening (jawline, cheeks, neck)",
        "Stimulates collagen production",
        "Improves firmness and texture gradually",
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
            question: "Are threads painful?",
            answer:
              "With numbing, most clients find the procedure very manageable. Any tenderness is usually mild and short-lived.",
          },
          {
            question: "How long do results last?",
            answer:
              "Results develop gradually over 6–12 weeks and often last 12–18 months depending on skin quality and lifestyle.",
          },
          {
            question: "Can threads be combined with other treatments?",
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
        "Helps prevent lines deepening over time",
        "Quick appointment, minimal downtime",
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
            question: "When do results start?",
            answer:
              "Effects usually begin within 3–5 days, with peak results around 2 weeks.",
          },
          {
            question: "How long do results last?",
            answer:
              "Results commonly last 3–4 months.",
          },
          {
            question: "What areas can be treated?",
            answer:
              "Forehead, frown lines, and crow’s feet are most common. Other areas can be discussed during consultation.",
          },
        ],
      },
    },
    {
      name: "PRP Vampire Facial",
      price: "£550 (Course of 3: £1500)",
      description:
        "A regenerative skin treatment using your own PRP to support collagen, brighten dull skin, and improve tone and texture.",
      benefits: [
        "Supports collagen stimulation",
        "Improves tone and texture over time",
        "Brighter, fresher-looking skin",
        "Minimal downtime for most clients",
      ],
      duration: "45–60 minutes",
      course: "Single or course of 3",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into high-quality PRP. PRP is applied with microneedling to support deeper penetration and natural repair.",
        whoIsItFor: [
          "Those wanting an overall skin refresh",
          "People with dull, tired-looking skin",
          "Those with uneven tone and texture",
          "Anyone seeking a natural approach",
          "People wanting a course-based plan",
        ],
        commonQuestions: [
          {
            question: "Is a course better?",
            answer:
              "Most people see best outcomes with 2–3 sessions, especially for texture and collagen support.",
          },
          {
            question: "How long do results last?",
            answer:
              "Results commonly last 6–12 months depending on skin condition and lifestyle.",
          },
          {
            question: "Is there downtime?",
            answer:
              "Usually mild redness for 24–48 hours. Aftercare guidance is provided.",
          },
        ],
      },
    },
  ];

  const hairTreatments: Treatment[] = [
    {
      name: "PRP Hair Treatment",
      price: "£200 (Course of 3: £500)",
      description:
        "Doctor-led PRP therapy using your own platelets to support hair follicle function and scalp health.",
      benefits: [
        "Supports hair density and thickness",
        "Improves scalp condition",
        "Natural approach using your own PRP",
        "Course-based plan for best results",
      ],
      duration: "45–60 minutes",
      course: "Course of 3 recommended",
      expandedContent: {
        howItWorks:
          "A small blood sample is processed into concentrated PRP. PRP is then applied to targeted scalp areas to support follicle health. A course is usually recommended for best outcomes.",
        whoIsItFor: [
          "Those with early thinning",
          "Men or women with diffuse shedding",
          "People wanting a natural approach",
          "Those wanting to support scalp health",
          "People seeking a course-based plan",
        ],
        commonQuestions: [
          {
            question: "When will I see results?",
            answer:
              "Most people notice changes gradually over 6–12 weeks, with continued improvement over several months.",
          },
          {
            question: "How many sessions do I need?",
            answer:
              "A course of 3 is commonly recommended, with maintenance depending on response.",
          },
          {
            question: "Is PRP safe?",
            answer:
              "Yes — it uses your own blood components. Suitability is confirmed in consultation.",
          },
        ],
      },
    },
    {
      name: "Hair Exosomes",
      price: "From £400",
      description:
        "Advanced regenerative support for the scalp, often used alongside PRP depending on suitability and goals.",
      benefits: [
        "Supports scalp regeneration",
        "Can complement PRP hair plans",
        "Doctor-led, tailored approach",
        "Designed for targeted scalp support",
      ],
      duration: "45–60 minutes",
      course: "Tailored plan (often course-based)",
      expandedContent: {
        howItWorks:
          "Exosomes are used as part of a targeted scalp plan to support regeneration. We advise whether exosomes alone or combined with PRP best suits your goals after assessment.",
        whoIsItFor: [
          "Those wanting advanced scalp support",
          "People who want to enhance PRP outcomes",
          "Those with thinning seeking stronger protocols",
          "Individuals wanting a tailored plan",
          "Those open to course-based programmes",
        ],
        commonQuestions: [
          {
            question: "Is exosomes treatment right for everyone?",
            answer:
              "Not always — suitability depends on your scalp, history, and goals. We’ll advise honestly at consultation.",
          },
          {
            question: "Can exosomes be combined with PRP?",
            answer:
              "Yes — in some cases, combination protocols are used to support stronger outcomes.",
          },
          {
            question: "Do you offer courses?",
            answer:
              "Yes — course-based plans are available depending on your treatment protocol.",
          },
        ],
      },
    },
  ];

  const jointTreatments: Treatment[] = [
    {
      name: "PRP Joint Injections",
      price: "From £250",
      description:
        "Regenerative joint injections using your own PRP to support pain control and function.",
      benefits: [
        "Uses your own PRP (natural approach)",
        "Supports joint comfort and function",
        "Tailored to the joint and severity",
        "Doctor-led assessment and aftercare",
      ],
      duration: "30–45 minutes",
      course: "Often 1–3 sessions (depending on joint and response)",
      expandedContent: {
        howItWorks:
          "After assessment, PRP is prepared from a small blood sample. The PRP is injected into the selected joint under sterile technique. The number of sessions depends on the joint, severity, and response.",
        whoIsItFor: [
          "Those with joint pain and stiffness",
          "People seeking regenerative options",
          "Those wanting to reduce flare frequency",
          "People with mild to moderate symptoms",
          "Those wanting doctor-led care",
        ],
        commonQuestions: [
          {
            question: "Why is it “From £250”?",
            answer:
              "Pricing can vary by joint (e.g., knee vs smaller joints), complexity, and whether you need a course. We confirm your exact quote after assessment.",
          },
          {
            question: "Which joints can be treated?",
            answer:
              "Common joints include knee, shoulder, elbow, and others depending on suitability. We’ll advise at consultation.",
          },
          {
            question: "How quickly will I feel improvement?",
            answer:
              "Some notice changes within weeks, while regenerative effects can continue over 6–12 weeks.",
          },
        ],
      },
    },
    {
      name: "Steroid Joint Injection",
      price: "£120",
      description:
        "A targeted anti-inflammatory injection option for selected joint or soft tissue conditions.",
      benefits: [
        "Can reduce inflammation quickly",
        "May improve pain and function",
        "Short appointment time",
        "Doctor-led assessment and sterile technique",
      ],
      duration: "15–30 minutes",
      course: "Single treatment (repeat only if appropriate)",
      expandedContent: {
        howItWorks:
          "After assessment, a steroid medication is injected into the selected joint or soft tissue area using sterile technique. We also discuss risks, benefits, and aftercare.",
        whoIsItFor: [
          "Those with inflammatory flare-ups",
          "People needing quicker symptom relief",
          "Selected joint/soft tissue conditions",
          "Those suitable after medical assessment",
          "People wanting doctor-led injections",
        ],
        commonQuestions: [
          {
            question: "Is steroid right for me or PRP?",
            answer:
              "It depends on your diagnosis, goals, and timeline. We’ll explain the pros/cons and recommend the most appropriate option.",
          },
          {
            question: "How long does it last?",
            answer:
              "Relief can vary — some benefit for weeks to months. We’ll discuss expected response for your condition.",
          },
          {
            question: "Is there downtime?",
            answer:
              "Usually minimal. We provide aftercare guidance including activity modification for a short period.",
          },
        ],
      },
    },
  ];

  const sexualTreatments: Treatment[] = [
    {
      name: "P-Shot (PRP for Erectile Function)",
      price: "£650 (Course of 3 for £1800)",
      description:
        "Doctor-led PRP protocol designed to support erectile function and confidence using your own growth factors.",
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
          "Peyronie&apos;s disease (penile curvature due to scar tissue)",
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
      name: "O-Shot",
      price: "£700",
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
      name: "EXO P-Shot",
      price: "£1200",
      description:
        "An enhanced protocol using activated platelets to support stronger regenerative signalling and improved outcomes.",
      benefits: [
        "Advanced protocol and planning",
        "Doctor-led assessment and delivery",
        "Designed for clients wanting more support",
        "Confidential clinical setting",
      ],
      duration: "60–75 minutes",
      course: "Tailored plan",
      expandedContent: {
        howItWorks:
          "We discuss your goals, suitability, and expected outcomes carefully before treatment.",
        whoIsItFor: [
          "Moderate to severe erectile dysfunction",
          "Men who want a more comprehensive plan",
          "Those open to tailored programmes",
          "People wanting doctor-led care",
          "Anyone seeking discreet support",
        ],
        commonQuestions: [
          {
            question: "What makes it ‘enhanced’?",
            answer:
              "An enhanced protocol using activated platelets to support stronger regenerative signalling and improved outcomes.",
          },
          {
            question: "Do you offer courses for this?",
            answer:
              "Depending on your goals, a tailored plan may include multiple sessions. We’ll advise honestly after assessment.",
          },
          {
            question: "How do I book discreetly?",
            answer:
              "WhatsApp is quickest — and everything is handled confidentially.",
          },
        ],
      },
    },
  ];

  const categories: Category[] = [
    {
      id: "facial",
      title: "Facial Treatments",
      subtitle:
        "Facial treatments designed around your goals — treatments can be combined and personalised rather than delivered as fixed menus.",
      items: facialTreatments,
    },
    {
      id: "hair",
      title: "Hair Treatments",
      subtitle:
        "Regenerative options for hair thinning — PRP and advanced protocols tailored to you.",
      items: hairTreatments,
    },
    {
      id: "joints",
      title: "Joint Injection Treatments",
      subtitle:
        "Injection options for selected joint conditions — regenerative and anti-inflammatory choices.",
      items: jointTreatments,
    },
    {
      id: "sexual",
      title: "Sexual Rejuvenation Treatments",
      subtitle:
        "Private, doctor-led care designed around your needs, with clear pricing and treatment plans tailored to you.",
      items: sexualTreatments,
    },
  ];

  const quickSummary = [
    { name: "Polynucleotides", price: "From £150", href: "#facial" },
    { name: "PRP Hair", price: "£200 (3 for £500)", href: "#hair" },
    { name: "PRP Joint Injections", price: "From £250", href: "#joints" },
    { name: "P-Shot", price: "£650 (3 for £1800)", href: "#sexual" },
  ];

  const faqs: QA[] = [
    {
      question: "Do your prices include a consultation?",
      answer:
        "A small consultation fee may apply, which can be offset against the cost of treatment if you proceed.",
    },
    {
      question: "Why do some treatments show “From £…”?",
      answer:
        "Some treatments vary by area treated, product amount (where applicable), and whether you choose a single session or a course. We confirm an exact quote after assessment.",
    },
    {
      question: "Do you offer course discounts?",
      answer:
        "Yes — selected treatments have course pricing to offer better value. Message us on WhatsApp and we’ll outline your options.",
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

  // -------------------------
  // UI helpers
  // -------------------------

  const renderWhatsAppCTA = (label = "Book on WhatsApp") =>
    isDesktop ? (
      <button
        onClick={handleWhatsAppClick}
        className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
      >
        <FaWhatsapp className="w-5 h-5" />
        {label}
      </button>
    ) : (
      <a
        href="https://wa.me/447990364147"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-inter font-medium transition-all duration-300 gap-2"
      >
        <FaWhatsapp className="w-5 h-5" />
        {label}
      </a>
    );

  // -------------------------
  // RENDER
  // -------------------------

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
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
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
                  Treatment Prices at Healing-PRP Clinics – St Albans
                </motion.h1>

                <motion.p
                  className="text-sm font-inter text-gray-500 leading-relaxed max-w-3xl"
                  variants={itemVariants}
                >
                  Clear, competitive pricing for safe, natural, and effective
                  regenerative treatments. All procedures are carried out by a
                  GMC-registered doctor — expert, medical-led care with no hidden
                  costs.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col mt-3 sm:flex-row gap-4"
                >
                  {renderWhatsAppCTA("Book on WhatsApp")}

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
            {categories.map((cat) => (
              <motion.a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
                variants={itemVariants}
              >
                {cat.title}
              </motion.a>
            ))}
            <motion.a
              href="#faqs"
              className="px-4 py-2 text-sm border border-gray-100 shadow-xs bg-white text-[var(--brand-blue)] rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-50)] transition-colors duration-300"
              variants={itemVariants}
            >
              FAQs
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 lg:py-24 bg-white relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent" />
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
              At Healing-PRP Clinics, we offer transparent pricing for safe,
              natural, and effective regenerative treatments. All procedures are
              carried out by a GMC-registered doctor, ensuring expert,
              medical-led care with no hidden costs.
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

            <motion.p
              className="text-sm font-inter text-slate-600"
              variants={itemVariants}
            >
              Appointments available in St Albans. If you’re
              travelling from Harpenden, Luton, Watford, Welwyn, Hertford, or
              London, we can advise on timing and aftercare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Price Summary */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h2
              className="text-xl lg:text-2xl font-raleway text-slate-900 mb-3"
              variants={itemVariants}
            >
              Quick Price Summary
            </motion.h2>

            <motion.p
              className="text-sm font-inter text-slate-600 mb-6 max-w-4xl"
              variants={itemVariants}
            >
              Transparent starting prices. Your final quote depends on the area
              treated, product amount (where applicable), and whether you choose
              a single session or a course.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={itemVariants}
            >
              {quickSummary.map((x, i) => (
                <a
                  key={i}
                  href={x.href}
                  className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition border border-slate-100"
                >
                  <div className="font-raleway font-semibold text-slate-900 text-sm">
                    {x.name}
                  </div>
                  <div className="font-inter text-[var(--brand-blue)] font-semibold mt-1">
                    {x.price}
                  </div>
                  <div className="text-xs font-inter text-slate-600 mt-1">
                    Tap to view details
                  </div>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories + Treatments */}
      {categories.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="py-20 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.h2
                className="text-2xl lg:text-4xl font-raleway text-slate-900 mb-2"
                variants={itemVariants}
              >
                {cat.title}
              </motion.h2>

              <motion.p
                className="text-sm font-inter text-slate-600 mb-10 max-w-4xl"
                variants={itemVariants}
              >
                {cat.subtitle}
              </motion.p>

              <div className="space-y-16">
                {cat.items.map((treatment, index) => {
                  const treatmentId = slugify(`${cat.id}-${treatment.name}`);
                  const expandedKey = `${cat.id}::${treatment.name}`;

                  return (
                    <motion.div
                      key={index}
                      id={treatmentId}
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

                          <div className="mt-6">
                            {renderWhatsAppCTA("Get a Quote / Book")}
                          </div>
                        </div>
                      </div>

                      {/* Learn More Button */}
                      <div>
                        <motion.button
                          onClick={() =>
                            setExpandedTreatment(
                              expandedTreatment === expandedKey
                                ? null
                                : expandedKey
                            )
                          }
                          className="inline-flex items-center gap-2 py-3 text-[var(--brand-blue)] rounded-lg font-inter text-sm transition-all duration-300 hover:opacity-50 cursor-pointer"
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedTreatment === expandedKey ? (
                            <>
                              Show Less <FaChevronUp className="w-3 h-3" />
                            </>
                          ) : (
                            <>
                              Learn More{" "}
                              <FaChevronDown className="w-3 h-3 mt-[0.1rem]" />
                            </>
                          )}
                        </motion.button>
                      </div>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {expandedTreatment === expandedKey && (
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
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

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
                Pricing & Booking FAQs
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
              Answers about pricing, courses, and booking in St Albans and
              Birmingham.
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
