"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaCheck,
  FaPlus,
  FaMinus,
  FaEnvelope,
  FaArrowRight,
  FaChevronDown,
  FaMapMarkerAlt,
  FaGoogle,
  FaStar,
  FaLock,
  FaFlask,
  FaPills,
  FaBrain,
  FaRunning,
  FaLeaf,
  FaUserShield,
  FaUserMd,
  FaLink,
  FaDumbbell 
} from "react-icons/fa";
import Footer from "@/components/Footer";
import ContactCTASection from "@/components/ContactCTASection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import Link from "next/link";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface PrematureEjaculationProps {
  locationName?: string;
  servingAreas?: string;
  faqs?: FaqType[];
}

export default function PrematureEjaculationClient({
  locationName = "St Albans",
  servingAreas = "Harpenden • Luton • Watford • Hertfordshire",
  faqs = [],
}: PrematureEjaculationProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false); // Added toggle state back

  const isBirmingham = locationName === "Birmingham";
  const treatmentCostsRoute = isBirmingham ? "/birmingham/treatment-costs" : "/treatment-costs";

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- GA4 CONVERSION TRACKING ---
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "generate_lead", {
          event_category: "engagement",
          event_label: "opened_contact_drawer",
          page_path: window.location.pathname,
        });
      }
    }

    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    setTimeout(() => {
      const section = document.getElementById("contact-form-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // FASTER ANIMATIONS
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Only show first 5 FAQs unless expanded
  const displayedFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

  return (
    <>
    {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" /> 
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
          <img 
            src="/ed-doctor-consultation.webp" 
            alt="Premature Ejaculation Treatment" 
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            fetchPriority="high"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pb-24">
          
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm transform-gpu"
          >
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Male Sexual Health</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
          >
            Premature Ejaculation (PE) <br />
            <span className="text-xl md:text-3xl lg:text-4xl text-blue-100 mt-2 inline-block">Treatment in {locationName}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="mt-4 text-sm md:text-base text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-8 font-medium"
          >
            Advanced, doctor-led formulation and behavioural therapies for men seeking to regain control and confidence—without surgery.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleAction}
              className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all duration-300 gap-2 shadow-xl shadow-[#4041d1]/20 active:scale-95 font-inter"
            >
              <FaEnvelope className="w-4 h-4" /> Book Consultation
            </button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-[#4041d1]/10 text-white rounded-full text-[10px] md:text-xs mt-10 font-bold uppercase tracking-widest font-inter shadow-lg border border-white/10 backdrop-blur-sm"
          >
             <FaMapMarkerAlt className="text-white/80 mb-0.5" />
             <span>Serving: {servingAreas}</span>
          </motion.div>
        </div>
        
        {/* --- HERO TRUST BADGES --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="md:block absolute hidden bottom-0 left-0 right-0 bg-[#0f172a]/90 backdrop-blur-md border-t border-white/10 z-30"
        >
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
              <a href="#reviews" onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
              }} className="flex justify-center items-center group cursor-pointer px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md">
                    <FaGoogle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 font-inter">
                      5.0 Patient Rating
                    </span>
                  </div>
                </div>
              </a>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md border border-white/10">
                    10+
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Experience</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">
                    GMC
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Registered</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 shadow-md border border-white/10">
                    <FaLock className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Strictly 1:1</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Discreet Care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <section className="py-8 border-b border-t shadow-xs border-slate-100 relative bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { label: "Understanding PE", href: "#understanding" },
              { label: "Our Approach", href: "#approach" },
              { label: "Who Is It For", href: "#who-is-it-for" },
              { label: "Treatment Components", href: "#treatment-components" },
              { label: "FAQs", href: "#faqs" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="px-4 py-2 text-sm border border-slate-100 shadow-xs bg-white text-[#4041d1] rounded-lg font-inter font-bold hover:bg-[#4041d1]/5 transition-colors duration-300"
                variants={itemVariants}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1. Understanding Premature Ejaculation Section */}
      <section id="understanding" className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-[#4041d1] font-bold tracking-widest uppercase text-sm font-inter">The Condition</span>
            </motion.div>
            <motion.h2
              className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-8"
              variants={itemVariants}
            >
              Understanding Premature Ejaculation
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4041d1]"></div>
              
              <div className="space-y-6">
                <p className="text-base md:text-lg font-inter text-slate-700 leading-relaxed font-medium">
                  Premature ejaculation is reaching climax sooner than desired, often within a minute of penetration. However, the true impact extends far beyond the physical symptom. Left unmanaged, PE frequently leads to severe performance anxiety, relationship strain, and an avoidance of intimacy.
                </p>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-blue-100/50 shadow-sm">
                  <h4 className="text-lg md:text-xl font-bold font-raleway text-[#4041d1] mb-3 flex items-center gap-3">
                    <FaLink className="text-[#4041d1]" /> The Link Between PE and ED
                  </h4>
                  <p className="text-sm md:text-base font-inter text-slate-600 leading-relaxed mb-5">
                    Clinically, we often see Premature Ejaculation and Erectile Dysfunction (ED) co-existing. A man struggling to maintain an erection may subconsciously rush to climax before losing firmness, or conversely, severe anxiety around rapid ejaculation may cause a loss of erection. If you are experiencing both, it requires a holistic medical approach rather than a single off-the-shelf tablet.
                  </p>
                  
                  <Link 
                    href={isBirmingham ? "/birmingham/personalised-ed-medication" : "/personalised-ed-medication"}
                    className="inline-flex items-center gap-2 text-[#4041d1] font-bold text-sm md:text-base hover:text-[#2a2bb8] transition-colors group"
                  >
                    Explore our Personalised ED Medication protocols 
                    <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Doctor-Led, Patient-Centred Approach */}
      <section id="approach" className="py-20 lg:py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="w-16 h-16 bg-[#4041d1]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[#4041d1]/20">
              <FaUserMd className="text-2xl text-[#4041d1]" />
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-8">
              A Doctor-Led, Patient-Centred Approach
            </motion.h2>

            <motion.div 
              variants={itemVariants}
              className="bg-blue-50/50 border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm text-left relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4041d1]"></div>
              
              <div className="space-y-6">
                <div className="text-base md:text-lg font-inter text-slate-700 leading-relaxed font-medium space-y-4">
                  <p>
                    With years of experience in male sexual health, our GMC-registered doctors understand that there is no &quot;one-size-fits-all&quot; solution. We take a strictly patient-centred approach to your care.
                  </p>
                  <p>
                    During your discreet, 1:1 consultation, we do not just prescribe standard tablets; we listen to your specific history, identify the root physiological or psychological causes of your symptoms, and work closely with you to agree on a <strong>mutual management plan</strong>.
                  </p>
                  <p>
                    For many of our patients, our bespoke, personalised medication formulations and targeted behavioural strategies have provided life-changing control where standard over-the-counter options have failed.
                  </p>
                </div>
                
                {/* Internal Link Box to P-Shot */}
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-blue-100/50 shadow-sm mt-6">
                  <h4 className="text-lg md:text-xl font-bold font-raleway text-[#4041d1] mb-3">
                    Focusing on overall intimate wellness?
                  </h4>
                  <p className="text-sm md:text-base font-inter text-slate-600 leading-relaxed mb-5">
                    Beyond ejaculatory control, we offer advanced regenerative therapies to improve penile health, blood flow, and sensitivity. 
                  </p>
                  <Link 
                    href={isBirmingham ? "/birmingham/p-shot" : "/p-shot"}
                    className="inline-flex items-center gap-2 text-[#4041d1] font-bold text-sm md:text-base hover:text-[#2a2bb8] transition-colors group"
                  >
                    Read about our P-Shot →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Who Is It For Section */}
      <section id="who-is-it-for" className="py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center mb-12">
              <motion.div variants={itemVariants} className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-6 border border-slate-200">
                <FaUserShield className="text-2xl text-[#4041d1]" />
              </motion.div>
              <motion.h2
                className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-6"
                variants={itemVariants}
              >
                Who Is It For?
              </motion.h2>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
              variants={containerVariants}
            >
              {/* Card 1 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Men struggling to hold ejaculation and wishing to regain control
                </span>
              </motion.div>

              {/* Card 2 (With Internal ED Link) */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium mb-3">
                    Men experiencing PE co-existing with Erectile Dysfunction (ED) or performance anxiety
                  </span>
                  <Link 
                    href={isBirmingham ? "/birmingham/personalised-ed-medication" : "/personalised-ed-medication"}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors"
                  >
                    Explore ED Treatments →
                  </Link>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Those wanting customised creams and medication options
                </span>
              </motion.div>

              {/* Card 4 */}
              <motion.div className="flex items-start gap-4 p-6 bg-white border border-slate-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow" variants={itemVariants}>
                <div className="mt-1 bg-blue-50 rounded-full p-2 shrink-0">
                  <FaCheck className="w-3 h-3 text-[#4041d1]" />
                </div>
                <span className="text-sm md:text-base font-inter text-slate-700 leading-relaxed font-medium">
                  Couples experiencing distress or frustration looking to improve intimacy
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Treatment Components (The 6-Card Grid) */}
      <section id="treatment-components" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-6"
                variants={itemVariants}
              >
                Treatment Components
              </motion.h2>
              <motion.p
                className="text-slate-600 text-lg leading-relaxed font-inter"
                variants={itemVariants}
              >
                Our multi-faceted approach ensures we address PE from every possible angle, combining therapies tailored to your specific physiological and psychological needs.
              </motion.p>
            </div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" variants={containerVariants}>
              
              {/* Card 1: Creams */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaFlask />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Custom Numbing Creams
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  Formulations designed for fast onset, consistent effect, and stability in vaginal pH for better consistency.
                </p>
              </motion.div>

              {/* Card 2: Medication (With Internal Link) */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaPills />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Medication Options
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed mb-4">
                  Tailored prescribing regimens where appropriate to safely delay climax and reduce hypersensitivity.
                </p>
                <div className="mt-auto">
                  <Link 
                    href={isBirmingham ? "/birmingham/personalised-ed-medication" : "/personalised-ed-medication"}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors"
                  >
                    Explore Personalised Medication <FaArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 3: Coaching */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaBrain />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Behavioural Coaching
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  Guided practice of stop-start and squeeze methods to improve your natural ejaculatory control.
                </p>
              </motion.div>

              {/* Card 4: Pelvic Floor */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaRunning />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Pelvic Floor Programme
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  Targeted training and exercises to strengthen the bulbocavernosus and pelvic musculature.
                </p>
              </motion.div>

              {/* Card 5: Lifestyle */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaLeaf />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Lifestyle Optimisation
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  Medical guidance on sleep, stress, and habits, plus partner-inclusive strategies if desired.
                </p>
              </motion.div>

              {/* Card 6: Pelvic Gym */}
              <motion.div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-start hover:shadow-md hover:border-[#4041d1]/30 transition-all group" variants={itemVariants}>
                <div className="w-14 h-14 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center mb-6 text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <FaDumbbell />
                </div>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  Pelvic Gym
                </h3>
                <p className="text-sm font-inter text-slate-600 leading-relaxed">
                  An innovative, small at-home device designed to safely stimulate and enhance pelvic floor muscles, accelerating your progress and ejaculatory control.
                </p>
              </motion.div>

            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200 text-sm font-inter text-slate-600 font-bold shadow-sm">
                <FaLock className="text-slate-400" />
                Sessions are strictly discreet, and most patients resume normal activities immediately.
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Intimate Wellness Banner */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-6 shadow-sm border border-slate-200 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h4 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">Looking for comprehensive intimate wellness?</h4>
                <p className="text-slate-600 text-sm md:text-base font-inter">
                  Explore our holistic treatments designed to restore confidence, performance, and overall male sexual health.
                </p>
              </div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-4">
                <Link 
                  href={isBirmingham ? "/birmingham/erectile-dysfunction" : "/erectile-dysfunction"}
                  className="px-8 py-3.5 bg-white border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-sm active:scale-95 font-inter"
                >
                  Explore ED Treatments
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href={isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation"}
                  className="px-8 py-3.5 bg-[#4041d1] text-white hover:bg-[#2a2bb8] rounded-xl font-bold transition-all duration-300 text-sm flex items-center justify-center gap-2 group shadow-md active:scale-95 font-inter"
                >
                  Explore Sexual Rejuvenation
                  <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
        </div>
      </section>

      {/* 6. Action Bar & FAQs */}
      <section id="faqs" className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Action Bar (Pre-FAQ) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 border-b border-slate-100 pb-12">
            <button
              onClick={handleAction}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-lg font-inter font-bold transition-all duration-300 shadow-md active:scale-95"
            >
              Book Consultation
            </button>
            <Link
              href={treatmentCostsRoute}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-lg font-inter font-bold transition-all duration-300"
            >
              View Treatment Prices
            </Link>
            <Link
              href={isBirmingham ? "/birmingham/faq" : "/faq"}
              className="w-full md:w-auto px-6 py-3 flex items-center justify-center text-sm cursor-pointer border-2 border-slate-200 text-slate-700 hover:border-[#4041d1] hover:text-[#4041d1] bg-white rounded-lg font-inter font-bold transition-all duration-300"
            >
              View Clinic FAQs
            </Link>
          </div>

          {/* FAQ Accordions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div className="flex justify-center mb-2" variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </div>
            </motion.div>
            <motion.h2
              className="text-2xl lg:text-4xl font-raleway font-bold text-slate-700 leading-tight text-center mb-4"
              variants={itemVariants}
            >
              Common Questions
            </motion.h2>

            <motion.div className="space-y-4 mt-8" variants={containerVariants}>
              {/* Map over displayedFaqs to restrict default view */}
              {displayedFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-raleway font-bold text-slate-900 pr-4 leading-relaxed text-sm md:text-base">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center relative transition-colors ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                       {openFAQIndex === index ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                          <p className="font-inter text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Re-added Toggle Button */}
            {faqs.length > 5 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm cursor-pointer border-2 border-[#4041d1] text-[#4041d1] hover:bg-[#4041d1]/5 rounded-xl font-inter font-bold transition-all duration-300"
                >
                  {showAllFaqs ? "Show Less FAQs" : "View All FAQs"}
                  <FaChevronDown className={`w-3 h-3 transition-transform duration-300 ${showAllFaqs ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* --- GOOGLE REVIEWS SECTION --- */}
      <div id="reviews-section">
        <TrustReviews 
          widgetUrl={
            isBirmingham 
              ? "https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" 
              : "https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586"
          } 
        />
      </div>

      <ContactCTASection />
      
      {/* Location Section Added Here */}
      <LocationSection />

      <Footer />
    </>
  );
}
