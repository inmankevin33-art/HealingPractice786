"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSyringe, FaSync, FaGem, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function PRPExplanationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const steps = [
    { number: 1, icon: FaSyringe, title: "Blood Collection", description: "A small amount of blood is taken from your arm, similar to a standard test." },
    { number: 2, icon: FaSync, title: "Centrifuge Process", description: "It's spun in a medical centrifuge to isolate the concentrated PRP layer." },
    { number: 3, icon: FaGem, title: "PRP Concentration", description: "Pure Platelet-Rich Plasma—dense with growth factors—is carefully collected." },
    { number: 4, icon: FaStar, title: "Injection & Healing", description: "PRP is injected into the target area to stimulate natural repair and regeneration." },
  ];

  const applications = [
    { 
      title: "Sexual Wellness", 
      desc: "Restoring function and sensitivity.",
      conditions: [
        { name: "Erectile Dysfunction", href: `${prefix}/erectile-dysfunction` },
        { name: "Peyronie's Disease", href: `${prefix}/peyronies-disease` },
        { name: "Premature Ejaculation", href: `${prefix}/premature-ejaculation` },
      ],
      treatments: [
        { name: "P-Shot", href: `${prefix}/p-shot` },
        { name: "O-Shot", href: `${prefix}/o-shot` },
        { name: "Shockwave Therapy", href: `${prefix}/shockwave-therapy-erectile-dysfunction` }
      ]
    },
    { 
      title: "Hair Restoration", 
      desc: "Targeting follicle health.",
      conditions: [
        { name: "Male Pattern Baldness", href: `${prefix}/hair-restoration` },
        { name: "Thinning Hair", href: `${prefix}/hair-restoration` },
        { name: "Scalp Inflammation", href: `${prefix}/hair-restoration` }
      ],
      treatments: [
        { name: "PRP Hair Therapy", href: `${prefix}/hair-restoration` },
        { name: "Exosome Therapy", href: `${prefix}/hair-restoration` },
        { name: "Mesotherapy", href: `${prefix}/hair-restoration` }
      ]
    },
    { 
      title: "Joint & Soft Tissue", 
      desc: "Managing pain and recovery.",
      conditions: [
        { name: "Osteoarthritis", href: `${prefix}/joint-injections` },
        { name: "Tennis/Golfer's Elbow", href: `${prefix}/joint-injections` },
        { name: "Sports Injuries", href: `${prefix}/joint-injections` }
      ],
      treatments: [
        { name: "Joint PRP Injections", href: `${prefix}/joint-injections` },
        { name: "Steroid Therapy", href: `${prefix}/joint-injections` },
        { name: "Ostenil Injections", href: `${prefix}/joint-injections` }
      ]
    },
    { 
      title: "Facial Aesthetics", 
      desc: "Natural skin rejuvenation.",
      conditions: [
        { name: "Fine Lines & Wrinkles", href: `${prefix}/facial-aesthetics` },
        { name: "Acne Scarring", href: `${prefix}/facial-aesthetics` },
        { name: "Skin Laxity", href: `${prefix}/facial-aesthetics` }
      ],
      treatments: [
        { name: "Vampire Facial", href: `${prefix}/facial-aesthetics` },
        { name: "Polynucleotides", href: `${prefix}/polynucleotides` },
        { name: "Botox & Fillers", href: `${prefix}/facial-aesthetics` }
      ]
    },
  ];

  return (
    <section 
      id="prp-explanation" 
      className="relative py-20 lg:py-28 bg-[#0A1128] overflow-hidden font-inter"
      style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(64, 65, 209, 0.15) 0%, transparent 40%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-[#4041d1]/20 text-[#8ea3ff] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-[#4041d1]/30 font-raleway"
            variants={itemVariants}
          >
            Scientific Excellence
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-raleway font-bold text-white leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            What is Platelet-Rich Plasma?
          </motion.h2>

          <div className="max-w-6xl mx-auto">
            <motion.p
              className="text-base text-slate-200 leading-relaxed font-medium font-inter mb-12"
              variants={itemVariants}
            >
              PRP is prepared using a small sample of your own blood, carefully processed to concentrate platelets and growth factors to support natural tissue repair.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left"
              variants={itemVariants}
            >
              {applications.map((app, i) => (
                <div key={i} className="flex flex-col p-6 bg-white/[0.03] rounded-[2rem] border border-white/10 hover:border-[#4041d1]/40 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-6">
                    <FaCheckCircle className="text-[#4041d1] mt-1 shrink-0 w-4 h-4" />
                    <div>
                      <span className="text-white font-bold block text-lg font-raleway">{app.title}</span>
                      <span className="text-slate-400 text-xs font-inter">{app.desc}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5">
                    {/* COLUMN 1: CONDITIONS */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Conditions</p>
                      <div className="space-y-2">
                        {app.conditions.map((c, idx) => (
                          <Link key={idx} href={c.href} className="text-[11px] text-[#8ea3ff] hover:text-white flex items-center gap-2 group/link transition-colors leading-tight">
                            <FaArrowRight className="w-1.5 h-1.5 text-[#4041d1]/60 group-hover/link:translate-x-1 transition-transform" />
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* COLUMN 2: TREATMENTS */}
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">Treatments</p>
                      <div className="space-y-2">
                        {app.treatments.map((t, idx) => (
                          <Link key={idx} href={t.href} className="text-[11px] text-slate-300 hover:text-white flex items-center gap-2 group/link transition-colors leading-tight">
                            <FaArrowRight className="w-1.5 h-1.5 text-[#4041d1]/60 group-hover/link:translate-x-1 transition-transform" />
                            {t.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Process Steps Section (Kept for the visual flow) */}
        <div className="max-w-6xl mx-auto mt-16 relative">
          <div className="text-center mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#4041d1]/10 border border-[#4041d1]/40 rounded-full shadow-[0_0_15px_rgba(64,65,209,0.25)] backdrop-blur-md"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#4041d1] animate-pulse shadow-[0_0_8px_#4041d1]" />
                <span className="text-xs font-bold text-white uppercase tracking-[0.25em] font-raleway">
                  Phase 0{steps[activeStep].number}: {steps[activeStep].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="hidden lg:block absolute top-[100px] left-0 w-full h-[1px] border-t border-dashed border-white/10 -z-10" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  className="relative group will-change-transform transform-gpu"
                  onClick={() => setActiveStep(index)}
                  variants={itemVariants}
                >
                  <div
                    className={`p-6 rounded-[2rem] border transition-all duration-300 cursor-pointer h-full flex flex-col ${
                      isActive
                        ? "border-[#4041d1] bg-white shadow-xl shadow-[#4041d1]/20 scale-105 z-20"
                        : "border-white/10 bg-white/[0.04] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${
                      isActive ? "bg-[#4041d1] text-white shadow-lg" : "bg-white/10 text-slate-300 group-hover:text-[#4041d1]"
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <h3 className={`font-raleway font-bold mb-2 text-base transition-colors ${isActive ? "text-slate-900" : "text-white"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-inter transition-colors ${isActive ? "text-slate-600" : "text-slate-400"}`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
