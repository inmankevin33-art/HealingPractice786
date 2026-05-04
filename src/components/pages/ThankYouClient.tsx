"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaFileInvoiceDollar, FaSyringe, FaBolt, FaInfoCircle } from "react-icons/fa";

interface ThankYouClientProps {
  locationName: string;
  links: {
    pricing: string;
    edOverview: string;
    pShot: string;
    shockwave: string;
  };
}

export default function ThankYouClient({ locationName, links }: ThankYouClientProps) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black font-inter">
      
      {/* 1. Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 z-10" />
        <Image 
          src="/ed-doctor-consultation.webp" 
          alt="Consultation background" 
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        
        <motion.div 
          custom={0} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="w-20 h-20 bg-green-500/20 border border-green-400/50 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl shadow-[0_0_30px_rgba(34,197,94,0.3)] backdrop-blur-md"
        >
          <FaCheckCircle />
        </motion.div>

        <motion.h1
          custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="text-4xl md:text-5xl font-bold font-raleway text-white leading-tight mb-4 tracking-tight"
        >
          Request Received
        </motion.h1>

        <motion.p 
          custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="text-base md:text-lg text-blue-50/90 font-inter leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
        >
          Thank you. Dr. Abdi&apos;s clinical team in {locationName} has received your details and will be in touch shortly. While you wait, explore our treatments and pricing below:
        </motion.p>

        {/* Links Grid using dynamic props */}
        <motion.div 
          custom={3} initial="hidden" animate="visible" variants={fadeUpVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10"
        >
          <Link href={links.pricing} className="group flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4041d1]/40 flex items-center justify-center text-blue-200">
                <FaFileInvoiceDollar className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white font-raleway text-lg group-hover:text-blue-100 transition-colors">Pricing</div>
                <div className="text-[10px] text-blue-200/80 uppercase tracking-widest font-bold">View full list</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href={links.edOverview} className="group flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4041d1]/40 flex items-center justify-center text-blue-200">
                <FaInfoCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white font-raleway text-lg group-hover:text-blue-100 transition-colors">ED Overview</div>
                <div className="text-[10px] text-blue-200/80 uppercase tracking-widest font-bold">Learn the causes</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href={links.pShot} className="group flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4041d1]/40 flex items-center justify-center text-blue-200">
                <FaSyringe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white font-raleway text-lg group-hover:text-blue-100 transition-colors">The P-Shot</div>
                <div className="text-[10px] text-blue-200/80 uppercase tracking-widest font-bold">Regenerative PRP</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href={links.shockwave} className="group flex items-center justify-between p-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md rounded-2xl transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4041d1]/40 flex items-center justify-center text-blue-200">
                <FaBolt className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-bold text-white font-raleway text-lg group-hover:text-blue-100 transition-colors">Shockwave</div>
                <div className="text-[10px] text-blue-200/80 uppercase tracking-widest font-bold">Acoustic Therapy</div>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUpVariants}>
          <Link href="/" className="text-sm font-bold text-white/50 hover:text-white transition-colors underline underline-offset-4">
            Return to Homepage
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
