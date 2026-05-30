"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGoogle,
  FaStar,
  FaInfoCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaUserMd,
  FaRegClock,
  FaShieldAlt,
  FaTint,
  FaDna,
  FaVial,
  FaArrowRight,
  FaNotesMedical,
  FaClipboardList,
   FaUserShield
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";

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

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] overflow-hidden flex items-center justify-center bg-black font-inter">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/vaginal-dryness-treatment.webp" 
            alt="Doctor-led vaginal dryness consultation" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            onError={(e) => (e.currentTarget.src = "/o-shot-consultation.webp")}
          />
        </div>

        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-48 md:pb-24">
          <motion.div 
            custom={0} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-100 text-xs font-bold tracking-widest uppercase">Private • Doctor-Led • Confidential</span>
          </motion.div>

          <motion.h1
            custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight"
          >
            Vaginal Dryness Treatment <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-blue-200 mt-2 inline-block">in {locationName}</span>
          </motion.h1>
          
          <motion.p 
            custom={2} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-2 text-base md:text-xl text-blue-50/90 leading-relaxed max-w-3xl mx-auto mb-10 font-medium"
          >
            Discreet, doctor-led care for vaginal dryness, soreness, reduced lubrication and discomfort during intimacy. At HealingPRP Clinics, Dr Syed Abdi offers confidential assessment and selected non-hormonal treatment options, including hyaluronic acid, polynucleotides and PRP/O-Shot, where clinically appropriate.
          </motion.p>

          <motion.div 
            custom={3} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={handleAction}
              className="px-8 py-4 flex items-center justify-center text-sm md:text-base cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 w-full sm:w-auto"
            >
              <FaNotesMedical className="w-4 h-4" /> Book Private Vaginal Dryness Consultation
            </button>
            <Link 
              href="#treatment-options"
              className="px-8 py-4 flex items-center justify-center text-sm md:text-base cursor-pointer bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold transition-all duration-300 gap-2 backdrop-blur-sm w-full sm:w-auto"
            >
              View Treatment Options
            </Link>
          </motion.div>

          <motion.p 
            custom={4} initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={fadeUpVariants}
            className="mt-8 text-xs md:text-sm text-blue-200/60 max-w-xl mx-auto"
          >
            Confidential appointments available in {locationName}. Suitable treatment is discussed after medical assessment.
          </motion.p>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`absolute bottom-0 left-0 w-full z-30 bg-[#0A1128]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2">
              <div className="flex justify-center items-center px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] shadow-md">
                    <FaGoogle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90">5.0 Patient Rating</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 border-l border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md">GMC</div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Registered</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase">Doctor</span>
                  </div>
                </div>
              </div>
               <div className="flex justify-center items-center px-2 border-l border-white/10 hidden sm:flex">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaUserShield className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Confidential</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase">Private Care</span>
                  </div>
                </div>
              </div>
               <div className="flex justify-center items-center px-2 border-l border-white/10 hidden sm:flex">
                <div className="flex items-center gap-3">
                   <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest">Clinic</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase">{locationName}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- TRUST STRIP --- */}
      <section className="py-12 bg-slate-50 border-b border-slate-200 font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <div className="bg-blue-50 text-[#4041d1] p-3 rounded-xl shrink-0"><FaUserMd className="text-xl" /></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 font-raleway">Doctor-led assessment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Your symptoms are reviewed by an experienced UK GP before treatment is recommended.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <div className="bg-blue-50 text-[#4041d1] p-3 rounded-xl shrink-0"><FaTint className="text-xl" /></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 font-raleway">Non-hormonal options</h3>
                <p className="text-sm text-slate-600 leading-relaxed">We offer selected treatment options for women who prefer or require a non-hormonal approach.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <div className="bg-blue-50 text-[#4041d1] p-3 rounded-xl shrink-0"><FaShieldAlt className="text-xl" /></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 font-raleway">Discreet private care</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Appointments are confidential, respectful and focused on your comfort.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
              <div className="bg-blue-50 text-[#4041d1] p-3 rounded-xl shrink-0"><FaMapMarkerAlt className="text-xl" /></div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1 font-raleway">{locationName} clinic</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Private intimate health consultations available at HealingPRP Clinics in {locationName}.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Private treatment for vaginal dryness, soreness and intimate discomfort
            </h2>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none leading-relaxed space-y-6">
            <p>
              Vaginal dryness is common, especially around perimenopause, menopause and after childbirth, but it can still feel uncomfortable, embarrassing or difficult to discuss. It may cause dryness, burning, soreness, reduced lubrication, discomfort during sex or a feeling that the tissue has become more fragile.
            </p>
            <p>
              At HealingPRP Clinics, we take a medical-first approach. This means we do not simply offer an injection without understanding the cause of your symptoms. Your consultation will consider menopause-related changes, infection, irritation, medication, skin conditions, previous treatment, and any symptoms that may need further medical review.
            </p>
            <p>
              Where suitable, we can discuss non-hormonal options such as hyaluronic acid, polynucleotides and PRP/O-Shot. These treatments are intended to support hydration, tissue quality and intimate comfort, but results vary and no outcome can be guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* --- CAUSES SECTION --- */}
      <section className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-8">
              What can cause vaginal dryness?
            </h2>
            <div className="text-slate-600 space-y-6 leading-relaxed">
              <p>
                Vaginal dryness can happen for several reasons. For many women, it is linked to lower oestrogen levels during perimenopause or menopause. This can make the vaginal and vulval tissues feel thinner, drier, more sensitive or more easily irritated.
              </p>
              <p>
                Other possible causes include breastfeeding, some medications, cancer treatment, stress, reduced arousal, recurrent thrush or urinary infections, perfumed intimate products, and vulval skin conditions such as lichen sclerosus.
              </p>
              <div className="pt-4">
                <p className="font-bold text-slate-900 mb-4">Common symptoms may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                  {[
                    "dryness or reduced natural lubrication",
                    "soreness, burning or irritation",
                    "discomfort or pain during sex",
                    "light spotting after intercourse",
                    "reduced sensitivity or intimate confidence",
                    "recurrent urinary symptoms",
                    "a feeling of tightness or tissue fragility"
                  ].map((symptom, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base">
                      <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0" />
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="pt-6 font-semibold text-slate-900 border-t border-slate-100">
                Because these symptoms can have different causes, a careful medical assessment is important before choosing treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- RED FLAGS SECTION --- */}
      <section className="py-20 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center shrink-0">
              <FaExclamationTriangle className="text-xl" />
            </div>
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900">
              When vaginal dryness needs medical assessment first
            </h2>
          </div>
          
          <p className="text-slate-700 mb-10 leading-relaxed">
            Some symptoms should be assessed before any intimate injectable treatment is considered. This is to make sure there is no infection, skin condition or other medical problem that needs a different type of care.
          </p>

          <div className="bg-rose-50/50 rounded-3xl p-8 md:p-10 border-l-4 border-rose-500 shadow-sm">
            <h4 className="font-bold text-rose-900 mb-6 uppercase tracking-wider text-xs">Medical Review Required If You Experience:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-slate-700">
              {[
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
              ].map((flag, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 shrink-0" />
                  <span className="text-sm font-medium leading-snug">{flag}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <p className="mt-10 text-slate-800 font-bold">
            If any of these apply, Dr Abdi may recommend GP, gynaecology or specialist review before treatment.
          </p>
        </div>
      </section>

      {/* --- TREATMENT CARDS SECTION --- */}
      <section id="treatment-options" className="py-24 bg-slate-50 font-inter border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-6">
              Treatment options for vaginal dryness
            </h2>
            <div className="text-slate-600 space-y-4">
              <p>
                Treatment depends on the cause, severity and your personal preferences. Some women benefit from simple lubricants or vaginal moisturisers. Vaginal oestrogen is also commonly recommended for menopausal vaginal dryness where appropriate.
              </p>
              <p>
                However, some women prefer non-hormonal options, cannot use hormones, or want additional support for tissue comfort, hydration and intimate wellbeing. In these cases, selected treatments such as hyaluronic acid, polynucleotides or PRP/O-Shot may be discussed after assessment.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
              Non-hormonal treatment options we may discuss
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These treatments are not suitable for everyone. The right option depends on your symptoms, medical history, examination findings where appropriate, and your treatment goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Hyaluronic Acid */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl"><FaTint /></div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Vaginal Hyaluronic Acid</h3>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">Hydration-focused support</p>
              <div className="text-slate-600 text-sm space-y-4 mb-8 flex-grow leading-relaxed">
                <p>Hyaluronic acid is a moisture-binding substance that helps tissue hold water. In intimate health, it may be used to support hydration, elasticity and comfort in women experiencing vaginal dryness or irritation.</p>
                <p>The strongest evidence for vaginal hyaluronic acid is for moisturisers, gels and suppositories. Injectable protocols vary between clinics, so we explain clearly what treatment is being offered and what outcome is realistic for your symptoms.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">May be suitable for:</p>
                <ul className="space-y-2">
                  {["mild to moderate vaginal dryness", "reduced lubrication", "dryness-linked discomfort", "non-hormonal preference", "hydration-focused support"].map((item, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2"><FaCheckCircle className="text-blue-500 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-[11px] font-bold text-slate-900 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <span className="text-blue-600 tracking-wider uppercase mr-1">Note:</span> 
                This is not a cosmetic vaginal filler treatment. The aim is to support hydration, tissue comfort and intimate wellbeing in suitable patients.
              </p>
            </div>

            {/* Card 2: Polynucleotides */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 text-2xl"><FaDna /></div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Vaginal Polynucleotides</h3>
              <p className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-6">Regenerative tissue support</p>
              <div className="text-slate-600 text-sm space-y-4 mb-8 flex-grow leading-relaxed">
                <p>Polynucleotides are DNA-derived molecules used in regenerative aesthetic medicine. They are designed to support tissue repair, hydration and collagen activity. In intimate health, they may be considered for dryness, soreness or thinning.</p>
                <p>The evidence for vulvo-vaginal polynucleotide treatment is still developing. For this reason, we describe this as an emerging treatment option rather than a guaranteed solution.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">May be suitable for:</p>
                <ul className="space-y-2">
                  {["tissue fragility dryness", "soreness or irritation", "reduced intimate comfort", "non-hormonal regenerative approach", "gradual result expectations"].map((item, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2"><FaCheckCircle className="text-indigo-500 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs italic text-slate-500 mb-4 px-2">Polynucleotide treatment is usually offered as a course rather than a one-off treatment.</p>
              <p className="text-[11px] font-bold text-slate-900 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
                 Polynucleotides may help support tissue quality and hydration, but clinical response varies and long-term evidence is still limited.
              </p>
            </div>

            {/* Card 3: PRP / O-Shot */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6 text-2xl"><FaVial /></div>
              <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">PRP / O-Shot</h3>
              <p className="text-rose-600 font-bold text-xs uppercase tracking-widest mb-6">Platelet-rich plasma</p>
              <div className="text-slate-600 text-sm space-y-4 mb-8 flex-grow leading-relaxed">
                <p>PRP stands for platelet-rich plasma. A small sample of your blood is processed to concentrate platelets and growth factors. This plasma is then carefully injected into selected intimate tissues.</p>
                <p>The O-Shot is a commonly used name for PRP treatment in female intimate health. It may be considered for dryness, reduced lubrication, discomfort or reduced sensitivity.</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl mb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">May be suitable for:</p>
                <ul className="space-y-2">
                  {["dryness & reduced lubrication", "discomfort during intimacy", "reduced intimate confidence", "autologous blood treatment", "selected urinary symptoms"].map((item, i) => (
                    <li key={i} className="text-xs text-slate-700 flex items-start gap-2"><FaCheckCircle className="text-rose-500 mt-0.5 shrink-0" /> {item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs italic text-slate-500 mb-4 px-2">Published studies have used different protocols, so your treatment plan will be individual.</p>
              <p className="text-[11px] font-bold text-slate-900 p-4 bg-rose-50/50 rounded-xl border border-rose-100">
                PRP is a promising regenerative option, but the evidence is still evolving and treatment response varies.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="p-5 font-raleway font-bold">Treatment</th>
                  <th className="p-5 font-raleway font-bold">Main aim</th>
                  <th className="p-5 font-raleway font-bold">Typical approach</th>
                  <th className="p-5 font-raleway font-bold">Evidence level</th>
                  <th className="p-5 font-raleway font-bold">Downtime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-slate-50/50"><td className="p-5 font-bold text-slate-900">Hyaluronic Acid</td><td className="p-5 text-slate-600">Hydration and comfort</td><td className="p-5 text-slate-600">Hydration-focused treatment</td><td className="p-5 text-slate-600">Stronger for topical use</td><td className="p-5 text-slate-600">Minimal</td></tr>
                <tr className="hover:bg-slate-50/50"><td className="p-5 font-bold text-slate-900">Polynucleotides</td><td className="p-5 text-slate-600">Tissue quality</td><td className="p-5 text-slate-600">Short course of treatments</td><td className="p-5 text-slate-600">Emerging evidence</td><td className="p-5 text-slate-600">Minimal</td></tr>
                <tr className="hover:bg-slate-50/50"><td className="p-5 font-bold text-slate-900">PRP / O-Shot</td><td className="p-5 text-slate-600">Regenerative support</td><td className="p-5 text-slate-600">Autologous plasma injection</td><td className="p-5 text-slate-600">Promising but variable</td><td className="p-5 text-slate-600">Same day</td></tr>
              </tbody>
            </table>
            <div className="p-5 bg-slate-50 text-xs text-slate-500 italic border-t border-slate-100">
              The best option depends on your symptoms, medical history and treatment goals. Dr Abdi will explain the likely benefits, limitations, risks and alternatives before treatment.
            </div>
          </div>
        </div>
      </section>

      {/* --- JOURNEY SECTION (Steps 11-14) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Consultation */}
            <div className="space-y-6">
               <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl shadow-sm"><FaClipboardList /></div>
               <h2 className="text-2xl font-raleway font-bold text-slate-900">What happens during your consultation?</h2>
               <p className="text-slate-600 leading-relaxed">Your consultation is confidential and doctor-led. The aim is to understand your symptoms properly before recommending treatment.</p>
               <ul className="space-y-3">
                 {["when symptoms started", "menopause, childbirth or medication links", "pain during sex, dryness or burning", "bleeding, discharge or infection symptoms", "previous use of HRT or vaginal oestrogen", "medical history and current medications"].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                     <div className="w-1.5 h-1.5 bg-[#4041d1] rounded-full mt-1.5 shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
               <p className="font-bold text-slate-900 text-sm border-t border-slate-100 pt-6">Treatment is only offered if it is clinically appropriate and you feel fully informed.</p>
            </div>

            {/* Treatment Procedure */}
            <div className="space-y-6">
               <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl shadow-sm"><FaUserMd /></div>
               <h2 className="text-2xl font-raleway font-bold text-slate-900">What happens during treatment?</h2>
               <p className="text-slate-600 leading-relaxed">The exact steps depend on the specific treatment. Before any procedure, the area is cleaned and numbing cream or local anaesthetic may be used to improve comfort.</p>
               <div className="space-y-4">
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm">
                   <p className="font-bold text-slate-900 mb-1">HA / Polynucleotides</p>
                   <p className="text-slate-600">Small amounts of product are placed into selected tissues to support hydration, tissue quality and regenerative activity.</p>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm">
                   <p className="font-bold text-slate-900 mb-1">PRP / O-Shot</p>
                   <p className="text-slate-600">A blood sample is taken and processed to prepare platelet-rich plasma, which is then injected into selected intimate tissues.</p>
                 </div>
               </div>
            </div>

             {/* Results */}
             <div className="space-y-6">
               <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl shadow-sm"><FaRegClock /></div>
               <h2 className="text-2xl font-raleway font-bold text-slate-900">When might I notice results?</h2>
               <p className="text-slate-600 leading-relaxed">Results vary depending on the severity of dryness, hormonal status, and tissue quality. No result can be guaranteed.</p>
               <ul className="space-y-3">
                 {["HA changes often develop over days to weeks.", "Polynucleotide results build gradually over a course.", "PRP is usually assessed over several weeks.", "Maintenance sessions may be required."].map((item, i) => (
                   <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                     <div className="w-1.5 h-1.5 bg-[#4041d1] rounded-full mt-1.5 shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Side Effects */}
            <div className="space-y-6">
               <div className="w-12 h-12 bg-slate-100 text-slate-900 rounded-xl flex items-center justify-center text-xl shadow-sm"><FaShieldAlt /></div>
               <h2 className="text-2xl font-raleway font-bold text-slate-900">Side effects and downtime</h2>
               <p className="text-slate-600 leading-relaxed">Most patients return to daily activities quickly. Temporary side effects may include tenderness, swelling, bruising, mild spotting, or sensitivity.</p>
               <p className="font-bold text-slate-900 text-sm border-t border-slate-100 pt-6">You will be given personalised aftercare advice before leaving the clinic.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- SUITABILITY & AFTERCARE (Steps 15-16) --- */}
      <section className="py-24 bg-slate-900 text-white font-inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              
              {/* Contraindications */}
              <div>
                <h2 className="text-3xl font-raleway font-bold mb-8">Who may not be suitable?</h2>
                <ul className="space-y-3">
                  {["active vaginal or urinary infection", "unexplained vaginal bleeding", "pregnancy", "severe untreated vulval skin disease", "allergy to treatment ingredients", "significant bleeding disorders", "current cancer treatment without specialist approval"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <FaMinus className="mt-1.5 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Aftercare */}
              <div>
                <h2 className="text-3xl font-raleway font-bold mb-8">Aftercare advice</h2>
                <ul className="space-y-3">
                  {["avoid perfumed intimate products", "avoid douching", "avoid swimming, hot tubs or saunas", "avoid intercourse for the advised period", "avoid strenuous exercise for 24–48 hours", "keep the area clean and dry"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <FaCheckCircle className="mt-1 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

           </div>
        </div>
      </section>

      {/* --- EVIDENCE SECTION (Step 17) --- */}
      <section className="py-24 bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-8 text-center">Evidence and realistic expectations</h2>
           <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
             <p>Vaginal dryness can be treated in different ways. Lubricants, moisturisers and vaginal oestrogen are commonly used options. Regenerative treatments such as PRP/O-Shot and polynucleotides are newer options and the evidence is still developing.</p>
             <p>Some studies suggest that PRP may improve symptoms such as lubrication and sexual function in selected women, but the long-term durability of results is not fully established. Early polynucleotide evidence is encouraging, but it should not be presented as a guaranteed cure.</p>
             <p className="font-bold text-slate-900 p-6 bg-slate-50 border-l-4 border-[#4041d1] rounded-r-2xl">Our approach is to explain the possible benefits, limitations, risks and alternatives before treatment, so you can make an informed decision.</p>
           </div>
        </div>
      </section>

      {/* --- DOCTOR PROFILE & PRICE CTA --- */}
      <section className="py-24 bg-slate-50 font-inter border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             
             {/* Doctor Bio */}
             <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-6">Doctor-led care with Dr Syed Abdi</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Dr Syed Abdi is a UK-trained GP with over 20 years of medical experience and a special interest in regenerative medicine, sexual wellness and intimate health treatments. 
                  He provides discreet, confidential consultations for women experiencing vaginal dryness, soreness, and intimate discomfort.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8">
                  HealingPRP Clinics focuses on careful assessment, realistic expectations and safe treatment planning rather than one-size-fits-all procedures.
                </p>
                <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Reviewed by Dr Syed Abdi • Updated: May 2026</p>
             </div>

             {/* Price CTA */}
             <div className="text-center lg:text-left px-4">
                <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6">Treatment prices</h2>
                <p className="text-slate-600 mb-10 text-lg leading-relaxed">
                  Treatment cost depends on the option recommended, the number of sessions required and whether a combination approach is used.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href={isBirmingham ? "/birmingham/prices" : "/prices"}
                    className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-colors flex items-center justify-center gap-2"
                  >
                    View Treatment Prices <FaArrowRight />
                  </Link>
                </div>
                <p className="mt-6 text-xs text-slate-400 font-medium italic">A consultation is required before treatment. Prices may vary based on suitability.</p>
             </div>

          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 bg-white font-inter text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
            Book a private vaginal dryness consultation in {locationName}
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
             If vaginal dryness, soreness or discomfort during intimacy is affecting your confidence or quality of life, you can book a confidential consultation with Dr Syed Abdi at HealingPRP Clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleAction}
              className="px-10 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold shadow-xl shadow-[#4041d1]/20 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FaNotesMedical /> Book Private Consultation
            </button>
            <Link 
              href="/contact"
              className="px-10 py-4 bg-slate-100 text-slate-800 rounded-xl font-bold hover:bg-slate-200 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Ask a Confidential Question
            </Link>
          </div>
          <div className="mt-12 pt-12 border-t border-slate-100 flex flex-wrap justify-center gap-6 text-sm font-bold text-[#4041d1]">
             <Link href="/sexual-rejuvenation" className="hover:underline">Women's Intimate Treatments</Link>
             <Link href="/o-shot" className="hover:underline">Learn About the O-Shot</Link>
             <Link href="/faq" className="hover:underline">Frequently Asked Questions</Link>
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
