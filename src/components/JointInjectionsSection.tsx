"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { FaSyringe, FaPills, FaXRay } from "react-icons/fa";

export default function JointInjectionsSection() {
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
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const treatments = [
    {
      icon: FaSyringe,
      tag: "Regenerative",
      title: "PRP Joint Injections",
      description:
        "Uses your own PRP to support tissue healing and reduce inflammation. Suitable for knees, shoulders, elbows, wrists and ankles.",
      cta: "Discuss PRP for joints",
    },
    {
      icon: FaPills,
      tag: "Anti‑inflammatory",
      title: "Steroid Joint Injections",
      description:
        "Fast‑acting relief for painful flares while you rehabilitate. Delivered with ultrasound guidance where appropriate.",
      cta: "Ask about steroid injections",
    },
    {
      icon: FaXRay,
      tag: "Diagnostics",
      title: "X‑ray/Imaging Advice",
      description:
        "We can advise on relevant imaging prior to treatment to confirm diagnosis and plan care.",
      cta: "Talk to the doctor",
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
            <motion.h2
              className="md:text-3xl text-2xl font-raleway text-slate-900 leading-tight"
              variants={itemVariants}
            >
              Joint Injections in St Albans, Hertfordshire and Birmingham
            </motion.h2>

            {/* Introductory Paragraph */}
            <motion.p
              className="text-base mt-2 text-slate-600 leading-relaxed"
              variants={itemVariants}
            >
              Doctor‑delivered injections for pain relief and mobility in
              arthritis, tendon and sports‑related conditions.
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
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  variants={itemVariants}
                >
                  <div className="flex gap-4 flex-1">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-blue-dark)] rounded-xl flex items-center justify-center flex-shrink-0">
                      <treatment.icon className="w-6 h-6 text-white" />
                    </div> */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-[var(--brand-blue)] uppercase tracking-wide">
                          {treatment.tag}
                        </span>
                      </div>
                      <h3 className="text-xl font-raleway font-medium text-slate-900 mb-2">
                        {treatment.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                        {treatment.description}
                      </p>
                      <Link href="/contact">
                        <button className="flex text-sm cursor-pointer items-center gap-2 text-[var(--brand-blue)] font-medium hover:text-[var(--brand-blue-dark)] transition-colors duration-300 group mt-auto">
                          <span>{treatment.cta}</span>
                          <MoveRight className="w-4 h-4 mt-[0.1rem] transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
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
                src="/Pic3.jpg"
                alt="Joint injection treatments at Healing-PRP Clinics"
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
