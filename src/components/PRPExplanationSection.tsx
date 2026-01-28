"use client";

import { motion, AnimatePresence, Variants } from "framer-motion"; // Added Variants for TS safety
import { MoveRight } from "lucide-react";
import { useState } from "react";
import { FaSyringe, FaSync, FaGem, FaStar } from "react-icons/fa";

export default function PRPExplanationSection() {
  const [activeStep, setActiveStep] = useState(0);

  // TypeScript safe variants to prevent Next.js build crash
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const steps = [
    {
      number: 1,
      icon: FaSyringe,
      title: "Blood Collection",
      description: "A small amount of blood is taken from your arm, similar to a standard test.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 2,
      icon: FaSync,
      title: "Centrifuge Process",
      description: "It's spun in a medical centrifuge to isolate the concentrated PRP layer.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 3,
      icon: FaGem,
      title: "PRP Concentration",
      description: "Pure Platelet-Rich Plasma—dense with growth factors—is carefully collected.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      number: 4,
      icon: FaStar,
      title: "Injection & Healing",
      description: "PRP is injected into the target area to stimulate natural repair and regeneration.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ];

  const benefits = [
    "Stimulates natural healing and regeneration",
    "Improves blood circulation",
    "Reduces inflammation and pain",
    "Promotes new tissue growth",
  ];

  return (
    <section id="prp-explanation" className="relative py-24 lg:py-32 bg-white overflow-hidden font-inter">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Upgraded to Raleway */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6"
            variants={itemVariants}
          >
            Understanding PRP
          </motion.div>

          <motion.h2
            className="md:text-5xl text-3xl font-raleway font-semibold text-slate-900 leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            What is Platelet-Rich Plasma - PRP?
          </motion.h2>

          <motion.p
            className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            PRP is derived from a small sample of your own blood and processed in a medical centrifuge 
            to concentrate the platelets. These are rich in growth factors that stimulate natural healing.
          </motion.p>
        </motion.div>

        {/* Interactive Trail Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-6xl mx-auto">
            {/* Active Step Indicator - Synced to Dark Theme */}
            <div className="text-center mb-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 rounded-full shadow-xl"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    Step {steps[activeStep].number}: {steps[activeStep].title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Steps Grid - Upgraded to Rounded-[2rem] */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = activeStep === index;

                return (
                  <motion.div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -5 }}
                    variants={itemVariants}
                  >
                    <div
                      className={`p-8 rounded-[2rem] border-2 transition-all duration-500 flex flex-col h-full ${
                        isActive
                          ? "border-blue-600 bg-white shadow-2xl scale-105"
                          : "border-slate-100 bg-slate-50 hover:border-blue-200"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                        isActive ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <h3 className="font-raleway font-bold text-slate-900 mb-3 text-lg">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-inter">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="text-center pt-20 border-t border-slate-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h3
            className="text-2xl font-raleway font-bold text-slate-900 mb-12"
            variants={itemVariants}
          >
            Why PRP Works?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                variants={itemVariants}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0"></div>
                <span className="text-slate-600 text-sm font-medium text-left">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Link
              href="/sexual-rejuvenation"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 hover:gap-4 transition-all group"
            >
              <span>Learn more on our Sexual Rejuvenation page</span>
              <MoveRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
