"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
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
  FaInfoCircle
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";

// --- INTERFACE ---
// Removed faqs from props as requested
interface VaginalDrynessProps {
  locationName?: string;
  servingAreas?: string;
}

export default function VaginalDrynessClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
}: VaginalDrynessProps) {
  
  const [isLoaded, setIsLoaded] = useState(false);
  const isBirmingham = locationName === "Birmingham";

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

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
    "Polynucleotide results usually build gradually over a course of treatments.",
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

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[90vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/vaginal-dryness-treatment.webp" 
            alt="Doctor-led vaginal dryness consultation" 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = "/o-shot-consultation.webp")}
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
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block font-medium">in {locationName}</span>
          </motion.h1>
          
          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-4 text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-3xl mx-auto mb-10 font-medium"
          >
            Discreet, doctor-led care for vaginal dryness, soreness, reduced lubrication and discomfort during intimacy. At HealingPRP Clinics, Dr Syed Abdi offers confidential assessment and selected non-hormonal treatment options, including hyaluronic acid, polynucleotides and PRP/O-Shot, where clinically appropriate.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20 font-inter"
            >
              Book Private Vaginal Dryness Consultation
            </button>
            <button 
              onClick={scrollToTreatments}
              className="w-full sm:w-auto px-8 py-4 flex items-center justify-center text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all duration-300 font-inter backdrop-blur-sm"
            >
              View Treatment Options
            </button>
          </motion.div>

          <motion.p
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-6 text-xs text-blue-200/70 max-w-lg mx-auto"
          >
            Confidential appointments available in {locationName}. Suitable treatment is discussed after medical assessment.
          </motion.p>
        </div>
      </div>

      {/* --- TRUST STRIP --- */}
      <div className="bg-[#0A1128] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center p-4">
              <FaUserMd className="text-[#4041d1] text-3xl mb-3" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Doctor-led assessment</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Your symptoms are reviewed by an experienced UK GP before treatment is recommended.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaLeaf className="text-[#4041d1] text-3xl mb-3" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Non-hormonal options</h3>
              <p className="text-slate-400 text-xs leading-relaxed">We offer selected treatment options for women who prefer or require a non-hormonal approach.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaUserShield className="text-[#4041d1] text-3xl mb-3" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">Discreet private care</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Appointments are confidential, respectful and focused on your comfort.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <FaMapMarkerAlt className="text-[#4041d1] text-3xl mb-3" />
              <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-wide">{locationName} clinic</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Private intimate health consultations available at HealingPRP Clinics in {locationName}.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- INTRO SECTION --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Private treatment for vaginal dryness, soreness and intimate discomfort
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            Vaginal dryness is common, especially around perimenopause, menopause and after childbirth, but it can still feel uncomfortable, embarrassing or difficult to discuss. It may cause dryness, burning, soreness, reduced lubrication, discomfort during sex or a feeling that the tissue has become more fragile.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
            At HealingPRP Clinics, we take a medical-first approach. This means we do not simply offer an injection without understanding the cause of your symptoms. Your consultation will consider menopause-related changes, infection, irritation, medication, skin conditions, previous treatment, and any symptoms that may need further medical review.
          </p>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
            Where suitable, we can discuss non-hormonal options such as hyaluronic acid, polynucleotides and PRP/O-Shot. These treatments are intended to support hydration, tissue quality and intimate comfort, but results vary and no outcome can be guaranteed.
          </p>
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
              Other possible causes include breastfeeding, some medications, cancer treatment, stress, reduced arousal, recurrent thrush or urinary infections, perfumed intimate products, and vulval skin conditions such as lichen sclerosus.
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
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">When vaginal dryness needs medical assessment first</h2>
            <p className="text-slate-600">
              Some symptoms should be assessed before any intimate injectable treatment is considered. This is to make sure there is no infection, skin condition or other medical problem that needs a different type of care.
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FaExclamationTriangle className="text-red-600 text-2xl" />
              <h3 className="font-bold text-red-900 text-lg">Please arrange medical review first if you have:</h3>
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
              If any of these apply, Dr Abdi may recommend GP, gynaecology or specialist review before treatment.
            </p>
          </div>
        </div>
      </section>

      {/* --- TREATMENT OVERVIEW --- */}
      <section className="py-20 bg-slate-50 font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">Treatment options for vaginal dryness</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Treatment depends on the cause, severity and your personal preferences. Some women benefit from simple lubricants or vaginal moisturisers. Vaginal oestrogen is also commonly recommended for menopausal vaginal dryness where appropriate.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            However, some women prefer non-hormonal options, cannot use hormones, or want additional support for tissue comfort, hydration and intimate wellbeing. In these cases, selected treatments such as hyaluronic acid, polynucleotides or PRP/O-Shot may be discussed after assessment.
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
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaTint />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Vaginal Hyaluronic Acid</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Hydration-focused support for dryness and tissue comfort</p>
              <div className="text-slate-600 text-sm space-y-4 mb-6 flex-grow">
                <p>Hyaluronic acid is a moisture-binding substance that helps tissue hold water. In intimate health, it may be used to support hydration, elasticity and comfort in women experiencing vaginal dryness or irritation.</p>
                <p>The strongest evidence for vaginal hyaluronic acid is for moisturisers, gels and suppositories. Injectable protocols vary between clinics, so we explain clearly what treatment is being offered and what outcome is realistic for your symptoms.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-4">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>mild to moderate vaginal dryness</li>
                  <li>reduced lubrication</li>
                  <li>intimate discomfort linked to dryness</li>
                  <li>women looking for a non-hormonal option</li>
                  <li>women who want hydration-focused tissue support</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic border-l-2 border-blue-300 pl-3">
                This is not a cosmetic vaginal filler treatment. The aim is to support hydration, tissue comfort and intimate wellbeing in suitable patients.
              </p>
            </div>

            {/* Card 2: PN */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaDna />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Vaginal Polynucleotides</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Regenerative support for tissue quality and comfort</p>
              <div className="text-slate-600 text-sm space-y-4 mb-6 flex-grow">
                <p>Polynucleotides are DNA-derived molecules used in regenerative aesthetic medicine. They are designed to support tissue repair, hydration and collagen activity. In intimate health, they may be considered for women experiencing dryness, soreness, thinning or reduced tissue comfort.</p>
                <p>The evidence for vulvo-vaginal polynucleotide treatment is still developing, and many published protocols combine polynucleotides with hyaluronic acid. For this reason, we describe this as an emerging treatment option rather than a guaranteed solution.</p>
                <p className="font-medium text-slate-700 bg-indigo-50 p-3 rounded-lg">Polynucleotide treatment is usually offered as a course rather than a one-off treatment. Many protocols involve several sessions spaced a few weeks apart, with improvement developing gradually.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-4">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>vaginal dryness linked to tissue fragility</li>
                  <li>soreness or irritation</li>
                  <li>reduced intimate comfort</li>
                  <li>women seeking a non-hormonal regenerative approach</li>
                  <li>women who understand that results build gradually</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic border-l-2 border-indigo-300 pl-3">
                Polynucleotides may help support tissue quality and hydration, but clinical response varies and long-term evidence is still limited.
              </p>
            </div>

            {/* Card 3: PRP/O-Shot */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                <FaHeartbeat />
              </div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">PRP / O-Shot</h3>
              <p className="text-sm font-bold text-[#4041d1] mb-4 uppercase tracking-wide">Platelet-rich plasma treatment using your own blood</p>
              <div className="text-slate-600 text-sm space-y-4 mb-6 flex-grow">
                <p>PRP stands for platelet-rich plasma. A small sample of your blood is taken and processed in a centrifuge to concentrate platelets and growth-factor-containing plasma. This plasma is then carefully injected into selected intimate tissues.</p>
                <p>The O-Shot is a commonly used name for PRP treatment in female intimate health. It may be considered for symptoms such as vaginal dryness, reduced lubrication, discomfort during sex or reduced sensitivity. However, PRP protocols vary between clinics and studies, and results cannot be guaranteed.</p>
                <p className="font-medium text-slate-700 bg-rose-50 p-3 rounded-lg">Some patients have one treatment followed by review, while others may require a course or maintenance treatment. Published studies have used different protocols, so your treatment plan will be individual.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 mb-4">
                <p className="text-xs font-bold text-slate-900 mb-2 uppercase">May be suitable for:</p>
                <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
                  <li>vaginal dryness with reduced lubrication</li>
                  <li>discomfort during intimacy</li>
                  <li>reduced sensitivity or intimate confidence</li>
                  <li>women looking for an autologous treatment using their own blood</li>
                  <li>selected urinary or intimate symptoms after assessment</li>
                </ul>
              </div>
              <p className="text-xs text-slate-500 italic border-l-2 border-rose-300 pl-3">
                PRP is a promising regenerative option, but the evidence is still evolving and treatment response varies.
              </p>
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
          
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
            <table className="w-full text-left border-collapse min-w-[800px]">
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
                  <td className="p-5">Usually hydration-focused treatment; protocols vary</td>
                  <td className="p-5">Stronger evidence for topical/suppository use than injectable protocols</td>
                  <td className="p-5">Usually minimal</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-5 font-bold text-slate-900">Polynucleotides</td>
                  <td className="p-5">Tissue quality and regenerative support</td>
                  <td className="p-5">Usually a short course of treatments</td>
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
              Your consultation is confidential and doctor-led. The aim is to understand your symptoms properly before recommending treatment. During the consultation, Dr Abdi may discuss:
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
              The exact treatment steps depend on whether you are having hyaluronic acid, polynucleotides, PRP/O-Shot or a combination approach. Before any procedure, the treatment area is cleaned and numbing cream or local anaesthetic may be used to improve comfort.
            </p>
            <div className="space-y-4 text-sm text-slate-600 mb-6">
              <p><strong>For HA:</strong> For hyaluronic acid treatment, small amounts of product may be placed into selected tissues to support hydration and comfort. The aim is not cosmetic enlargement, but improvement in dryness-related symptoms where appropriate.</p>
              <p><strong>For Polynucleotides:</strong> For polynucleotide treatment, small amounts of product are placed into selected tissues to support tissue quality, hydration and regenerative activity. A course of treatment may be recommended.</p>
              <p><strong>For PRP/O-Shot:</strong> For PRP/O-Shot treatment, a small blood sample is taken and processed to prepare platelet-rich plasma. The PRP is then injected into selected intimate tissues according to your symptoms and treatment plan.</p>
            </div>
            <p className="font-medium text-slate-900 bg-slate-50 p-4 rounded-xl border border-slate-100">
              Most treatments are performed in clinic with minimal downtime, but individual recovery and results can vary.
            </p>
          </div>
        </div>
      </section>

      {/* --- RESULTS, SIDE EFFECTS, CONTRAINDICATIONS, AFTERCARE --- */}
      <section className="py-20 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Results */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaClock className="text-[#4041d1]" /> When might I notice results?
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Results vary depending on the treatment used, the severity of dryness, hormonal status, tissue quality and any underlying medical factors.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {resultsList.map((res, i) => <li key={i}>{res}</li>)}
              </ul>
              <p className="text-sm font-bold text-[#4041d1]">At your consultation, Dr Abdi will explain what is realistic for your symptoms and whether another treatment route may be more suitable.</p>
            </div>

            {/* Side Effects */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-amber-500" /> Possible side effects and downtime
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Most patients return to normal daily activities quickly, but intimate treatments can cause temporary side effects.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 grid grid-cols-2">
                {sideEffectsList.map((se, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-400 rounded-full"></span> {se}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-amber-700">You will be given aftercare advice and told what symptoms should prompt medical review.</p>
            </div>

            {/* Contraindications */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaBan className="text-red-500" /> Who may not be suitable?
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Treatment may not be suitable for everyone. Injectable intimate treatments may need to be delayed or avoided in some situations.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {contraindicationsList.map((ci, i) => <li key={i}>{ci}</li>)}
              </ul>
              <p className="text-sm font-bold text-red-700">If treatment is not suitable, Dr Abdi will explain why and may advise a different medical route.</p>
            </div>

            {/* Aftercare */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-raleway font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Aftercare advice
              </h2>
              <p className="text-slate-600 mb-4 text-sm">Aftercare depends on the treatment performed. You will receive personalised advice before leaving the clinic.</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-600 list-disc pl-5">
                {aftercareList.map((ac, i) => <li key={i}>{ac}</li>)}
              </ul>
              <p className="text-sm font-bold text-green-700">Your individual aftercare instructions may differ depending on the treatment and your medical history.</p>
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
          <div className="prose prose-slate max-w-none text-slate-600">
            <p>
              Vaginal dryness can be treated in different ways. Lubricants, moisturisers and vaginal oestrogen are commonly used options, especially when symptoms are related to menopause. Regenerative treatments such as PRP/O-Shot and polynucleotides are newer options and the evidence is still developing.
            </p>
            <p>
              Some studies suggest that PRP may improve symptoms such as lubrication, discomfort and sexual function in selected women, but treatment protocols vary and the long-term durability of results is not fully established.
            </p>
            <p>
              Polynucleotide treatment is also an emerging area in intimate health. Early evidence is encouraging, but it should not be presented as a guaranteed or proven cure for vaginal dryness.
            </p>
            <p>
              Hyaluronic acid has stronger evidence as a non-hormonal moisturising option, particularly in topical or suppository form. Injectable protocols vary, so we explain clearly what is being offered and what outcome is realistic.
            </p>
            <div className="bg-blue-50 border-l-4 border-[#4041d1] p-6 mt-8 rounded-r-xl">
              <p className="font-bold text-slate-900 m-0">
                Our approach is to explain the possible benefits, limitations, risks and alternatives before treatment, so you can make an informed decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOCTOR PROFILE (E-E-A-T) --- */}
      <section className="py-20 bg-slate-900 text-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-slate-800 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-[#4041d1]/30">
              <FaUserMd className="text-6xl text-slate-500" />
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
            Treatment cost depends on the option recommended, the number of sessions required and whether a combination approach is used.
          </p>
          <Link 
            href={isBirmingham ? "/birmingham/prices" : "/prices"}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#4041d1] text-[#4041d1] rounded-xl font-bold hover:bg-[#4041d1] hover:text-white transition-all duration-300"
          >
            View our treatment prices <FaArrowRight />
          </Link>
          <p className="text-xs text-slate-500 mt-4 italic">
            A consultation is required before treatment. Prices may vary depending on suitability and treatment plan.
          </p>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 bg-white font-inter text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
            Book a private vaginal dryness consultation in {locationName}
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            If vaginal dryness, soreness or discomfort during intimacy is affecting your confidence or quality of life, you can book a confidential consultation with Dr Syed Abdi at HealingPRP Clinics in {locationName}.
          </p>
          <p className="text-slate-900 font-bold mb-10">
            Your symptoms will be assessed carefully, and suitable options will be explained clearly before any treatment is offered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleAction}
              className="px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 shadow-xl shadow-[#4041d1]/20"
            >
              Book Private Vaginal Dryness Consultation
            </button>
            <Link 
              href="/contact"
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
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
