"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  FaUserMd,
  FaLeaf,
  FaUserShield,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaArrowRight,
  FaTint,
  FaDna,
  FaHeartbeat,
  FaNotesMedical,
  FaSyringe,
  FaClock,
  FaBan,
  FaInfoCircle,
  FaPlus,
  FaMinus,
  FaChevronDown,
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface VaginalDrynessProps {
  locationName?: string;
  servingAreas?: string;
  faqs: FaqType[];
}

export default function VaginalDrynessClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs,
}: VaginalDrynessProps) {
  
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // --- LOCATION LOGIC ---
  const isBirmingham = locationName === "Birmingham";
  const isHampstead = locationName === "Hampstead";

  const basePath = isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "";
  const contactRoute = isBirmingham ? "/birmingham/contact" : isHampstead ? "/hampstead/contact" : "/contact";
  const pricesRoute = isBirmingham ? "/birmingham/prices" : isHampstead ? "/hampstead/prices" : "/prices";
  const oShotRoute = isBirmingham ? "/birmingham/o-shot" : isHampstead ? "/hampstead/o-shot" : "/o-shot";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) {
        const headerOffset = 100;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const scrollToTreatments = (e: React.MouseEvent) => {
    e.preventDefault();
    const section = document.getElementById("treatments-section");
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  // --- VARIANTS ---
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  // --- DATA LISTS ---
  const causesList = [
    "dryness or reduced natural lubrication",
    "soreness, burning or irritation",
    "discomfort or pain during sex",
    "light spotting after intercourse",
    "reduced sensitivity or intimate confidence",
    "recurrent urinary symptoms",
    "a feeling of tightness or tissue fragility"
  ];

  const redFlagsList = [
    "bleeding after menopause",
    "unexplained vaginal bleeding or spotting",
    "unusual discharge or odour",
    "pelvic pain",
    "severe vulval itching, soreness or skin changes",
    "recurrent urinary infections",
    "pain that is worsening quickly",
    "a history of breast, cervical, womb or gynaecological cancer",
    "current cancer treatment or recent pelvic radiotherapy",
    "suspected vaginal or urinary infection"
  ];

  const consultationList = [
    "when your symptoms started",
    "whether symptoms are linked to menopause, childbirth or medication",
    "pain during sex, dryness, burning or urinary symptoms",
    "any bleeding, discharge or infection symptoms",
    "previous use of lubricants, moisturisers, HRT or vaginal oestrogen",
    "medical history, cancer history and current medications",
    "whether non-hormonal treatment is suitable for you"
  ];

  const resultsList = [
    "Hyaluronic acid may help support hydration and comfort, with changes often developing over days to weeks.",
    "Combined polynucleotide + hyaluronic acid results usually build gradually over a course of treatments.",
    "PRP/O-Shot results are usually assessed over several weeks rather than immediately.",
    "Some patients need more than one session.",
    "Maintenance treatment may be needed.",
    "No result can be guaranteed."
  ];

  const sideEffectsList = [
    "tenderness",
    "swelling",
    "bruising",
    "mild bleeding or spotting",
    "temporary discomfort",
    "sensitivity",
    "irritation",
    "infection, although uncommon",
    "uneven or limited response",
    "need for further treatment"
  ];

  const contraindicationsList = [
    "active vaginal infection",
    "active urinary infection",
    "unexplained vaginal bleeding",
    "pregnancy",
    "severe untreated vulval skin disease",
    "allergy to treatment ingredients",
    "significant bleeding disorder",
    "severe anaemia or platelet disorder, especially for PRP",
    "current cancer treatment unless specialist approval has been given",
    "unrealistic expectations about results"
  ];

  const aftercareList = [
    "avoid perfumed intimate products for a few days",
    "avoid douching",
    "avoid swimming, hot tubs or saunas for a short period",
    "avoid intercourse for the period advised by your clinician",
    "keep the area clean and dry",
    "avoid strenuous exercise for 24–48 hours if advised",
    "seek medical advice if you develop fever, worsening pain, heavy bleeding, offensive discharge or increasing swelling"
  ];

  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[85vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/vaginal-dryness.webp" 
            alt="Doctor-led vaginal dryness consultation" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/vaginal-dryness.webp")}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
          <motion.div 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Private • Doctor-Led • Confidential</span>
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight"
          >
            Vaginal Dryness Treatment <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block font-medium">in {isHampstead ? "Hampstead, London" : locationName}</span>
          </motion.h1>
          
          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-4 text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Doctor-led care for vaginal dryness, reduced lubrication, soreness and discomfort during intimacy. Confidential non-hormonal treatment options are discussed after assessment.
          </motion.p>
          
          <motion.p
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="text-xs text-blue-200/80 mb-6 max-w-lg mx-auto font-inter"
          >
            Assessed by Dr Syed Abdi, UK-trained GP.
          </motion.p>

          <motion.div 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20 font-inter"
            >
              Book Private consultation
            </button>
            <button 
              onClick={scrollToTreatments}
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all duration-300 font-inter backdrop-blur-sm"
            >
              View Treatment Options
            </button>
          </motion.div>

          <motion.p
            custom={5} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-6 text-xs text-blue-200/70 max-w-lg mx-auto"
          >
            Confidential appointments available in {locationName}. Suitable treatment is discussed after medical assessment.
          </motion.p>
        </div>
      </div>

      {/* --- TRUST STRIP --- */}
      <div className="bg-[#0A1128] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-xs mb-1 uppercase tracking-wide">Doctor-led</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed">UK GP review before treatment</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-xs mb-1 uppercase tracking-wide">Non-hormonal</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed">Selected options available</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-xs mb-1 uppercase tracking-wide">Private care</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed">Confidential and respectful</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-white font-bold text-xs mb-1 uppercase tracking-wide">{locationName} clinic</h3>
              <p className="text-slate-400 text-[10px] leading-relaxed">Private consultations available</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Private treatment for vaginal dryness and intimate discomfort
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            Vaginal dryness is common, especially around menopause, after childbirth, or with hormonal change. It may cause dryness, burning, soreness, reduced lubrication or discomfort during intimacy.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            At HealingPRP Clinics, we take a medical-first approach. Your symptoms are assessed carefully before treatment is recommended.
          </p>
          <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100">
            <p className="text-slate-800 text-base font-medium">
              Where appropriate, we may discuss non-hormonal options such as vaginal hyaluronic acid, combined polynucleotide + hyaluronic acid treatment, or PRP/O-Shot.
            </p>
          </div>
        </div>
      </section>

      {/* --- CAUSES SECTION --- */}
      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">What can cause vaginal dryness?</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Vaginal dryness can happen for several reasons. For many women, it is linked to lower oestrogen levels during perimenopause or menopause. This can make the vaginal and vulval tissues feel thinner, drier, more sensitive or more easily irritated.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mt-4">
              Other possible causes include breastfeeding, some medications, cancer treatment, stress, reduced arousal, recurrent thrush or urinary infections, perfumed intimate products, and vulval skin conditions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-2xl mx-auto">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Common symptoms may include:</h3>
            <ul className="space-y-3">
              {causesList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-center text-slate-500 font-medium mt-8 italic">
            Because these symptoms can have different causes, a careful medical assessment is important before choosing treatment.
          </p>
        </div>
      </section>

      {/* --- RED FLAGS SECTION --- */}
      <section className="py-16 bg-white font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">When to see your regular GP urgently</h2>
            <p className="text-slate-600">
              While your consultation with Dr Abdi includes a full medical review, certain &quot;red flag&quot; symptoms require diagnostic investigation through your regular NHS GP or gynaecologist before private regenerative treatments can be considered.
            </p>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FaExclamationTriangle className="text-red-600 text-2xl" />
              <h3 className="font-bold text-red-900 text-lg">Please consult your GP urgently if you have:</h3>
            </div>
            <ul className="space-y-2 mb-6">
              {redFlagsList.map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0"></span>
                  <span className="text-red-900/80 font-medium">{flag}</span>
                </li>
              ))}
            </ul>
            <p className="text-red-800 text-sm font-bold bg-red-100 p-4 rounded-xl">
              If you are experiencing any of these symptoms, please arrange an urgent review with your regular healthcare provider. Regenerative treatments cannot proceed until serious underlying conditions have been safely ruled out.
            </p>
          </div>
        </div>
      </section>

      {/* --- TREATMENT OVERVIEW --- */}
      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Treatment options for vaginal dryness</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Treatment depends on the cause, severity and your personal preferences. Some women benefit from lubricants, vaginal moisturisers or vaginal oestrogen where appropriate.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Some women prefer non-hormonal options, cannot use hormones, or want additional support for hydration, tissue comfort and intimate wellbeing. In these cases, selected treatments such as vaginal hyaluronic acid, combined polynucleotide + hyaluronic acid treatment, or PRP/O-Shot may be discussed after assessment.
          </p>
        </div>
      </section>

      {/* --- TREATMENT CARDS --- */}
      <section id="treatments-section" className="py-20 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4">
              Non-hormonal treatment options we may discuss
            </h2>
            <p className="text-slate-600 text-base">
              These treatments are not suitable for everyone. The right option depends on your symptoms, medical history, examination findings where appropriate, and your treatment goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: HA */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shrink-0">
                <FaTint />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Vaginal Hyaluronic Acid</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Hydration-focused support for dryness and tissue comfort</p>
              
              <div className="text-slate-600 text-sm space-y-4 mb-6">
                <p>Hyaluronic acid is a moisture-binding substance that helps tissue hold water. In intimate health, it may be used to support hydration, elasticity and comfort in women experiencing vaginal dryness or irritation.</p>
                <p>Vaginal hyaluronic acid may be considered for women looking for a non-hormonal option focused on hydration, comfort and tissue support.</p>
              </div>
              
              {/* UPDATED: White box now has flex-grow to stretch and fill gaps */}
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-6 flex-grow flex flex-col">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>mild to moderate vaginal dryness</li>
                  <li>reduced lubrication</li>
                  <li>intimate discomfort linked to dryness</li>
                  <li>women looking for a non-hormonal option</li>
                  <li>women who want hydration-focused tissue support</li>
                </ul>
              </div>
              
              {/* UPDATED: Grouped disclaimer & link with mt-auto and min-h-[60px] to align bottoms */}
              <div className="flex flex-col justify-end mt-auto">
                <p className="text-xs text-slate-500 italic border-l-2 border-blue-300 pl-3 mb-6 min-h-[60px] flex items-center">
                  The aim is to support hydration, tissue comfort and intimate wellbeing in suitable patients.
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <Link href={contactRoute} className="inline-flex items-center gap-1 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors">
                    Ask about Hyaluronic Acid <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: PN + HA */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shrink-0">
                <FaDna />
              </div>
              {/* UPDATED HEADING: Shortened to keep on one line */}
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Polynucleotide + HA</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Combined tissue-support and hydration treatment</p>
              
              <div className="text-slate-600 text-sm space-y-4 mb-6">
                <p>In our clinic, polynucleotides are combined with hyaluronic acid as a treatment approach designed to support hydration, tissue quality and intimate comfort.</p>
                <p>This option may be considered where vaginal dryness is accompanied by soreness, tissue fragility or reduced tissue comfort. Improvement usually develops gradually over a course of treatment rather than after a single session.</p>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-6 flex-grow flex flex-col">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>vaginal dryness linked to tissue fragility</li>
                  <li>soreness or irritation</li>
                  <li>reduced intimate comfort</li>
                  <li>women seeking a non-hormonal regenerative-style approach</li>
                  <li>women who understand that results build gradually</li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-end mt-auto">
                <p className="text-xs text-slate-500 italic border-l-2 border-indigo-300 pl-3 mb-6 min-h-[60px] flex items-center">
                  Combined polynucleotide + hyaluronic acid treatment may help support hydration and tissue quality, but response varies and more than one treatment is often needed.
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <Link href={contactRoute} className="inline-flex items-center gap-1 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors">
                    Ask about Polynucleotides + HA <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: PRP/O-Shot */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col h-full">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shrink-0">
                <FaHeartbeat />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">PRP / O-Shot</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Platelet-rich plasma treatment using your own blood</p>
              
              <div className="text-slate-600 text-sm space-y-4 mb-6">
                <p>PRP stands for platelet-rich plasma. A small blood sample is taken and processed in a centrifuge to concentrate platelets and growth-factor-rich plasma. This plasma is then carefully injected into selected intimate tissues.</p>
                <p>The O-Shot is a commonly used name for PRP treatment in female intimate health. It may be considered for vaginal dryness, reduced lubrication, discomfort during intimacy or reduced sensitivity in selected patients.</p>
              </div>
              
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-6 flex-grow flex flex-col">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>vaginal dryness with reduced lubrication</li>
                  <li>discomfort during intimacy</li>
                  <li>reduced sensitivity or intimate confidence</li>
                  <li>women looking for an autologous treatment using their own blood</li>
                  <li>selected urinary or intimate symptoms after assessment</li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-end mt-auto">
                <p className="text-xs text-slate-500 italic border-l-2 border-rose-300 pl-3 mb-6 min-h-[60px] flex items-center">
                  PRP is a promising regenerative option, but evidence is still evolving and treatment response varies.
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <Link href={oShotRoute} className="inline-flex items-center gap-1 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors">
                    Read more about the O-Shot <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMPARISON TABLE --- */}
      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">Comparing the treatment options</h2>
          </div>
          
          {/* Mobile View: Stacked Cards */}
          <div className="block md:hidden space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-lg text-slate-900 mb-3 border-b border-slate-100 pb-2">Hyaluronic Acid</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong className="text-slate-900">Main aim:</strong> Hydration and comfort</p>
                <p><strong className="text-slate-900">Typical approach:</strong> Hydration-focused support; treatment plan varies</p>
                <p><strong className="text-slate-900">Evidence level:</strong> Stronger evidence for topical/suppository use than injectable protocols</p>
                <p><strong className="text-slate-900">Downtime:</strong> Usually minimal</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-lg text-slate-900 mb-3 border-b border-slate-100 pb-2">Polynucleotide + HA</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong className="text-slate-900">Main aim:</strong> Tissue support and hydration</p>
                <p><strong className="text-slate-900">Typical approach:</strong> Usually a short course of combined treatments</p>
                <p><strong className="text-slate-900">Evidence level:</strong> Emerging evidence</p>
                <p><strong className="text-slate-900">Downtime:</strong> Usually minimal</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-lg text-slate-900 mb-3 border-b border-slate-100 pb-2">PRP / O-Shot</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong className="text-slate-900">Main aim:</strong> Regenerative support using your own blood</p>
                <p><strong className="text-slate-900">Typical approach:</strong> Blood sample, centrifuge processing and injection</p>
                <p><strong className="text-slate-900">Evidence level:</strong> Promising but variable evidence</p>
                <p><strong className="text-slate-900">Downtime:</strong> Usually same day or 24 hours</p>
              </div>
            </div>
          </div>

          {/* Desktop View: Semantic Table */}
          <div className="hidden md:block overflow-hidden bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#4041d1] text-white">
                  <th className="p-5 font-bold text-sm uppercase tracking-wide border-b border-white/20">Treatment</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wide border-b border-white/20">Main aim</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wide border-b border-white/20">Typical approach</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wide border-b border-white/20">Evidence level</th>
                  <th className="p-5 font-bold text-sm uppercase tracking-wide border-b border-white/20">Downtime</th>
                </tr>
              </thead>
              <tbody className="text-slate-600 text-sm">
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-5 font-bold text-slate-900">Hyaluronic Acid</td>
                  <td className="p-5">Hydration and comfort</td>
                  <td className="p-5">Hydration-focused support; treatment plan varies</td>
                  <td className="p-5">Stronger evidence for topical/suppository use than injectable protocols</td>
                  <td className="p-5">Usually minimal</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-5 font-bold text-slate-900">Polynucleotide + HA</td>
                  <td className="p-5">Tissue support and hydration</td>
                  <td className="p-5">Usually a short course of combined treatments</td>
                  <td className="p-5">Emerging evidence</td>
                  <td className="p-5">Usually minimal</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-5 font-bold text-slate-900">PRP / O-Shot</td>
                  <td className="p-5">Regenerative support using your own blood</td>
                  <td className="p-5">Blood sample, centrifuge processing and injection</td>
                  <td className="p-5">Promising but variable evidence</td>
                  <td className="p-5">Usually same day or 24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6 max-w-2xl mx-auto">
            The best option depends on your symptoms, medical history and treatment goals. Dr Abdi will explain the likely benefits, limitations, risks and alternatives before treatment.
          </p>
        </div>
      </section>

      {/* --- CONSULTATION & PROCEDURE --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
          {/* Consult */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <FaNotesMedical />
              </div>
              <h2 className="text-2xl font-raleway font-bold text-slate-900">What happens during your consultation?</h2>
            </div>
            <p className="text-slate-600 mb-6">
              Your consultation is confidential and doctor-led. The aim is to understand your symptoms properly before any treatment is recommended. During the consultation, Dr Abdi may discuss:
            </p>
            <ul className="space-y-3 mb-6 text-slate-600 text-sm">
              {consultationList.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100">
              Treatment is only offered if it is clinically appropriate and you feel fully informed.
            </p>
          </div>

          {/* Procedure */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                <FaSyringe />
              </div>
              <h2 className="text-2xl font-raleway font-bold text-slate-900">What happens during treatment?</h2>
            </div>
            <p className="text-slate-600 mb-6">
              The exact treatment steps depend on whether you are having vaginal hyaluronic acid, combined polynucleotide + hyaluronic acid treatment, PRP/O-Shot, or a personalised combination approach. Before any procedure, the treatment area is cleaned and numbing cream or local anaesthetic may be used to improve comfort.
            </p>
            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <p><strong>For Vaginal HA:</strong> Small amounts of hyaluronic acid may be placed into selected tissues to support hydration, comfort and tissue suppleness.</p>
              <p><strong>For Polynucleotide + HA:</strong> Small amounts of combined polynucleotide and hyaluronic acid product may be placed into selected tissues to support hydration, tissue quality and regenerative activity. A course of treatment is often recommended.</p>
              <p><strong>For PRP / O-Shot:</strong> A small blood sample is taken and processed to prepare platelet-rich plasma. The PRP is then injected into selected intimate tissues according to your symptoms and treatment plan.</p>
            </div>
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100">
              Most treatments are performed in clinic with minimal downtime, although recovery and results vary from person to person.
            </p>
          </div>
        </div>
      </section>

      {/* --- RESULTS, SIDE EFFECTS, CONTRAINDICATIONS, AFTERCARE --- */}
      <section className="py-20 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Results */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaClock className="text-[#4041d1]" /> When might I notice results?
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Results vary depending on the treatment used, the severity of dryness, hormonal status, tissue quality and any underlying medical factors.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {resultsList.map((res, i) => <li key={i}>{res}</li>)}
              </ul>
            </div>

            {/* Side Effects */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-amber-500" /> Possible side effects & downtime
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Most patients return to normal daily activities quickly, but intimate treatments can cause temporary side effects.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 grid grid-cols-2">
                {sideEffectsList.map((se, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span> {se}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contraindications */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBan className="text-red-500" /> Who may not be suitable?
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Treatment may not be suitable for everyone. Injectable intimate treatments may need to be delayed or avoided in some situations.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {contraindicationsList.map((ci, i) => <li key={i}>{ci}</li>)}
              </ul>
            </div>

            {/* Aftercare */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Aftercare advice
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Aftercare depends on the treatment performed. You will receive personalised advice before leaving the clinic.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {aftercareList.map((ac, i) => <li key={i}>{ac}</li>)}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* --- EVIDENCE AND REALISTIC EXPECTATIONS --- */}
      <section className="py-20 bg-white font-inter border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Evidence and realistic expectations</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 mb-12">
            <p>
              Vaginal dryness can be treated in different ways. Lubricants, moisturisers and vaginal oestrogen are commonly used options, especially when symptoms are related to menopause. Regenerative treatments such as PRP/O-Shot and polynucleotides are newer options and the evidence is still developing.
            </p>
            <p>
              Some studies suggest that PRP may improve symptoms such as lubrication, discomfort and sexual function in selected women, but treatment protocols vary and the long-term durability of results is not fully established.
            </p>
            <p>
              Combined polynucleotide and hyaluronic acid treatment is also an emerging area in intimate health. Early evidence is encouraging, but it should not be presented as a guaranteed or proven cure for vaginal dryness.
            </p>
            <p>
              Hyaluronic acid has stronger evidence as a non-hormonal moisturising option, particularly in topical or suppository form. Injectable protocols vary, so we explain clearly what is being offered and what outcome is realistic.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#4041d1] p-6 mt-8 rounded-r-xl">
              <p className="font-bold text-slate-900 m-0">
                Our approach is to explain the likely benefits, limitations, risks and alternatives before treatment, so you can make an informed decision.
              </p>
            </div>
          </div>

          {/* References and further reading */}
          <div className="border-t border-slate-100 pt-10">
            <h3 className="text-xl font-raleway font-bold text-slate-900 mb-4">References and further reading</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://www.nhs.uk/conditions/vaginal-dryness/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#4041d1] hover:underline flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs shrink-0" /> NHS Advice: Vaginal dryness
                </a>
              </li>
              <li>
                <a 
                  href="https://www.nice.org.uk/guidance/ng23" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#4041d1] hover:underline flex items-center gap-2"
                >
                  <FaArrowRight className="text-xs shrink-0" /> NICE Guidance: Menopause diagnosis and management
                </a>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- DOCTOR PROFILE (E-E-A-T) --- */}
      <section className="py-20 bg-slate-900 text-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            
            {/* UPDATED: Replaced Icon with Dr Abdi's Photo */}
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex-shrink-0 border-4 border-[#4041d1]/30 overflow-hidden relative shadow-lg">
              <img 
                src="/dr-syed-abdi.webp" 
                alt="Dr Syed Abdi, Medical Director" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-raleway font-bold mb-4">Doctor-led care with Dr Syed Abdi</h2>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Dr Syed Abdi is a UK-trained GP with over 20 years of medical experience and a special interest in regenerative medicine, sexual wellness and intimate health treatments. He provides discreet, confidential consultations for women experiencing vaginal dryness, soreness, reduced lubrication and intimate discomfort.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                As a doctor-led clinic, HealingPRP Clinics focuses on careful assessment, realistic expectations and safe treatment planning rather than one-size-fits-all procedures.
              </p>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-widest">
                Reviewed by Dr Syed Abdi. Last updated: May 2026.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING CTA --- */}
      <section className="py-16 bg-[#4041d1]/5 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">Treatment prices</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            The recommended treatment depends on your symptoms, suitability and whether a single treatment or a course is advised.
          </p>
          <Link 
            href={pricesRoute}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#4041d1] text-[#4041d1] rounded-xl font-bold hover:bg-[#4041d1] hover:text-white transition-all duration-300"
          >
            View our treatment prices <FaArrowRight />
          </Link>
          <p className="text-xs text-slate-500 mt-4 italic">
            A consultation is required before treatment. Prices may vary depending on suitability and treatment plan.
          </p>
        </div>
      </section>

      {/* --- FAQs --- */}
      <section id="faqs" className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-6">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {displayedFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-raleway font-bold text-slate-900 text-base md:text-lg">{faq.question}</h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                    {openFAQIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-50">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          {faqs.length > 5 && (
            <div className="mt-8 text-center">
              <button onClick={() => setShowAllFaqs(!showAllFaqs)} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#4041d1] text-[#4041d1] rounded-xl font-bold">
                {showAllFaqs ? "Show Less" : "View All"} <FaChevronDown className={showAllFaqs ? "rotate-180" : ""} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-slate-50 font-inter text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Book a private vaginal dryness consultation in {locationName}
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            If vaginal dryness, soreness or discomfort during intimacy is affecting your confidence or quality of life, you can book a confidential consultation with Dr Syed Abdi at HealingPRP Clinics in {locationName}.
          </p>
          <p className="text-slate-900 font-bold mb-10">
            Your symptoms will be assessed carefully and suitable options will be explained clearly before treatment is recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleAction}
              className="px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20"
            >
              Book Private consultation
            </button>
            <Link 
              href={contactRoute}
              className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-xl font-bold transition-all duration-300 flex items-center justify-center shadow-sm"
            >
              Ask a Confidential Question
            </Link>
          </div>
        </div>
      </section>

      <TrustReviews 
        widgetUrl={isBirmingham ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"} 
      />
      <ContactCTASection />
      <LocationSection />
      <Footer />
    </>
  );
}
