"use client";

import { motion, Variants } from "framer-motion"; // Added Variants type
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Added Next.js Image component
import { FaSyringe, FaPills, FaXRay } from "react-icons/fa";

export default function JointInjectionsSection() {
  // Explicitly typing variants to avoid the "string not assignable to Easing" error
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
        duration: 0.8,
        ease: "easeOut", // Now type-safe
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
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#f6f7ff] to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.p
              className="text-xs text-blue-600 font-inter leading-relaxed font-bold tracking-widest uppercase mb-2"
              variants={itemVariants}
            >
              SERVICES
            </motion.p>
            <motion.h2
              className="md:text-4xl text-3xl font-raleway font-semibold text-slate-900 leading-tight mb-4"
              variants={itemVariants}
            >
              Joint Injections in St Albans, Hertfordshire and Birmingham
            </motion.h2>

            <motion.p
              className="text-base text-slate-600 leading-relaxed mb-8"
              variants={itemVariants}
            >
              Doctor‑delivered injections for pain relief and mobility in
              arthritis, tendon and sports‑related conditions.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
                  variants={itemVariants}
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                        {treatment.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                      {treatment.description}
                    </p>
                    <Link href="/contact" className="inline-block w-fit">
                      <button className="flex text-sm cursor-pointer items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300 group">
                        <span>{treatment.cta}</span>
                        <MoveRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Optimized Image */}
          <motion.div
            className="relative h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[500px] lg:h-full border-4 border-white">
              {/* Updated to Next.js Image Component */}
              <Image
                src="/Pic3.jpg"
                alt="Joint injection treatments at Healing-PRP Clinics"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
