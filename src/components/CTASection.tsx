"use client";

import { motion, Variants } from "framer-motion";
import { MoveRight } from "lucide-react";
import { FaCheck } from "react-icons/fa";

export default function CTASection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    "Doctor-led medical assessments",
    "Bespoke treatment protocols",
    "Natural, drug‑free PRP therapy",
    "Private 1:1 clinical setting",
    "GMC Registered Expertise",
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden font-inter">
      {/* Optimized Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] scale-105"
          style={{ backgroundImage: "url('/Firefly.jpg')" }}
        ></div>
        {/* Simplified Overlay for Speed */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-[#0A1128]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* FONT ADJUSTMENT: Matches Scientific Excellence Header */}
          <motion.h2
            className="text-4xl md:text-5xl font-raleway font-bold text-white leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            Why Choose Healing‑PRP?
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
            variants={itemVariants}
          >
            We don’t simply perform a procedure—we develop a personalised 
            medical protocol tailored to your individual biology and goals.
          </motion.p>

          {/* Benefits Grid: Faster Rendering with 2 columns on desktop */}
          <motion.div
            className="max-w-4xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl will-change-transform hover:bg-white/10 transition-colors"
                variants={itemVariants}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                  <FaCheck className="w-3 h-3 text-white" />
                </div>
                <span className="font-semibold text-white">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary Action Button */}
          <motion.div
            variants={itemVariants}
          >
            <motion.a
              href="/contact"
              className="inline-flex px-10 py-5 text-base bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all duration-300 items-center gap-3 shadow-2xl shadow-blue-600/20 active:scale-95 group"
              whileHover={{ y: -4 }}
            >
              Start Your Treatment Journey
              <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
