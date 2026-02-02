"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FaUser, FaVenus, FaHeartbeat } from "react-icons/fa";

export default function TreatmentsSection() {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const treatments = [
    {
      icon: FaUser,
      tag: "Men",
      title: "P‑Shot® (Priapus Shot)",
      description:
        "PRP injections to enhance blood flow, sensitivity, and erectile function. Also used with shockwave for Peyronie's disease.",
      cta: "Book P‑Shot consultation ",
    },
    {
      icon: FaVenus,
      tag: "Women",
      title: "O‑Shot®",
      description:
        "PRP for female sexual wellness — supports arousal, lubrication, and sensitivity. Discreet, doctor‑led care.",
      cta: "Book O‑Shot consultation ",
    },
    {
      icon: FaHeartbeat,
      tag: "Adjunct",
      title: "Shockwave Therapy",
      description:
        "Non‑invasive therapy to support vascular regeneration in ED and manage scar tissue in Peyronie's disease.",
      cta: "Ask about Shockwave ",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle diagonal shadow effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p
              className="text-xs text-blue-600 font-inter leading-relaxed"
              variants={itemVariants}
            >
              SERVICES
            </motion.p>
            {/* Main Headline */}
            <motion.h2
              className="md:text-3xl text-2xl font-raleway text-slate-900 leading-tight transition-colors"
              variants={itemVariants}
            >
              Sexual Rejuvenation in St Albans, Hertfordshire and Birmingham
            </motion.h2>

            {/* Introductory Paragraph */}
            <motion.p
              className="text-base mt-2 text-slate-600 leading-relaxed transition-colors"
              variants={itemVariants}
            >
              Evidence‑based treatments using your own Platelet‑Rich Plasma
              (PRP) and adjunct therapies in a discreet, professional setting.
            </motion.p>

            {/* Treatment Cards */}
            <motion.div
              className="space-y-6 mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-blue-600 uppercase tracking-wide">
                          {treatment.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-raleway font-medium text-slate-900 mb-2 transition-colors">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 transition-colors">
                        {treatment.description}
                      </p>
                      
                      {/* Updated Button Logic */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // 1. Tell the Contact Drawer to open
                          window.dispatchEvent(new CustomEvent("open-contact-drawer"));

                          // 2. Scroll to the form section
                          const section = document.getElementById("contact-form-section");
                          if (section) {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="flex cursor-pointer text-sm items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 group"
                        >
                        <span>{treatment.cta}</span>
                          <MoveRight className="w-4 h-4 mt-[0.1rem] transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src="/Pic1.jpg"
                alt="Professional medical care at Healing-PRP Clinics"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
