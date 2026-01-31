"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { FaSyringe, FaSync, FaGem, FaStar } from "react-icons/fa";

export default function PRPExplanationSection() {
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const steps = [
    {
      number: 1,
      icon: FaSyringe,
      title: "Blood Collection",
      description: "A small amount of blood is taken from your arm, similar to a standard test.",
    },
    {
      number: 2,
      icon: FaSync,
      title: "Centrifuge Process",
      description: "It's spun in a medical centrifuge to isolate the concentrated PRP layer.",
    },
    {
      number: 3,
      icon: FaGem,
      title: "PRP Concentration",
      description: "Pure Platelet-Rich Plasma—dense with growth factors—is carefully collected.",
    },
    {
      number: 4,
      icon: FaStar,
      title: "Injection & Healing",
      description: "PRP is injected into the target area to stimulate natural repair and regeneration.",
    },
  ];

  return (
    <section id="prp-explanation" className="relative py-24 lg:py-32 bg-white overflow-hidden font-inter">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100"
            variants={itemVariants}
          >
            The Science of Healing
          </motion.div>

          <motion.h2
            className="md:text-5xl text-3xl font-raleway font-bold text-slate-900 leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            What is Platelet-Rich Plasma?
          </motion.h2>

          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
            variants={itemVariants}
          >
            PRP is a natural therapy using your own blood to concentrate growth factors, 
            accelerating the body&apos;s internal repair mechanisms.
          </motion.p>
        </motion.div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto relative">
          
          {/* Progress Indicator Badge */}
          <div className="text-center mb-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex items-center gap-3 px-6 py-2 bg-slate-900 rounded-full shadow-lg"
              >
                <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                  Phase 0{steps[activeStep].number}: {steps[activeStep].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Visual Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-1/3 left-0 w-full h-[2px] bg-slate-100 -z-10" />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  onClick={() => setActiveStep(index)}
                  variants={itemVariants}
                >
                  <div
                    className={`p-8 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer h-full flex flex-col ${
                      isActive
                        ? "border-blue-600 bg-white shadow-2xl shadow-blue-100 scale-105 z-20"
                        : "border-transparent bg-slate-50/50 hover:bg-white hover:border-slate-200 opacity-60 grayscale-[0.5] hover:opacity-100 hover:grayscale-0"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                      isActive ? "bg-blue-600 text-white rotate-3" : "bg-white text-slate-400 shadow-sm group-hover:text-blue-500"
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className={`font-raleway font-bold mb-3 text-lg transition-colors ${isActive ? "text-slate-900" : "text-slate-500"}`}>
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
