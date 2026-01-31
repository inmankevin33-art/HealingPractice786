"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { FaSyringe, FaSync, FaGem, FaStar, FaCheckCircle } from "react-icons/fa";

export default function PRPExplanationSection() {
  const [activeStep, setActiveStep] = useState(0);

  // Simplified variants for better performance
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
    { title: "Hair Restoration", desc: "Supports scalp health and follicle density." },
    { title: "Facial Aesthetics", desc: "Improves skin quality, texture, and collagen." },
    { title: "Joint & Soft Tissue", desc: "Aids recovery and reduces discomfort." },
    { title: "Sexual Wellness", desc: "Supports tissue health and blood flow." },
  ];

  return (
    <section 
      id="prp-explanation" 
      className="relative py-24 lg:py-32 bg-[#0A1128] overflow-hidden font-inter"
      // Performance optimization: Using a radial gradient instead of a blur filter
      style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.08) 0%, transparent 40%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Reduced amount for earlier trigger
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-500/10 text-blue-300 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-500/20"
            variants={itemVariants}
          >
            Scientific Excellence
          </motion.div>

          <motion.h2
            className="md:text-5xl text-3xl font-raleway font-bold text-white leading-tight mb-8 tracking-tight"
            variants={itemVariants}
          >
            What is Platelet-Rich Plasma?
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-10">
            <motion.p
              className="text-lg text-slate-200 leading-relaxed font-medium"
              variants={itemVariants}
            >
              Platelet-Rich Plasma (PRP) is prepared using a small sample of your own blood, 
              carefully processed to concentrate platelets, growth factors, and healing proteins. 
              These components play a key role in supporting tissue repair and collagen production.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
              variants={itemVariants}
            >
              {applications.map((app, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-2xl border border-white/10">
                  <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-white font-bold block">{app.title}</span>
                    <span className="text-slate-400 text-sm">{app.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              className="text-sm text-slate-400 italic"
              variants={itemVariants}
            >
              Because PRP is derived from your own blood, it is biocompatible and tailored to your body’s natural healing processes.
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto mt-20 relative">
          <div className="text-center mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 border border-white/20 rounded-full shadow-lg"
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
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
            <div className="hidden lg:block absolute top-[110px] left-0 w-full h-[2px] border-t-2 border-dashed border-white/10 -z-10" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  className="relative group will-change-transform" // Hardware acceleration
                  onClick={() => setActiveStep(index)}
                  variants={itemVariants}
                >
                  <div
                    className={`p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer h-full flex flex-col ${
                      isActive
                        ? "border-blue-500 bg-white shadow-xl scale-105 z-20"
                        : "border-white/10 bg-white/[0.04] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      isActive ? "bg-blue-600 text-white shadow-lg" : "bg-white/10 text-slate-300 group-hover:text-blue-400"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className={`font-raleway font-bold mb-3 text-lg transition-colors ${isActive ? "text-slate-900" : "text-white"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors ${isActive ? "text-slate-600" : "text-slate-400"}`}>
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
