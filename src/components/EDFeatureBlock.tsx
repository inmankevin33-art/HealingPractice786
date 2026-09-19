"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function EDFeatureBlock() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          {/* Doctor Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-slate-50 shadow-md">
            {/* Update this src to the exact filename of your doctor portrait */}
            <img
              src="/dr-syed-abdi.jpg" 
              alt="Dr Syed Abdi"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Copy & CTAs */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
              Treatment With Dr Syed Abdi
            </h2>
            <p className="text-base md:text-lg text-slate-600 font-inter leading-relaxed mb-6">
              Your consultation and treatment are carried out by Dr Syed Abdi, a UK-trained and GMC-registered doctor (GMC No. 6083294). With extensive experience across regenerative medicine, medical ozone therapy, aesthetics, and non-surgical intimate health procedures, Dr Abdi takes a holistic, medically grounded approach. 
            </p>
            <p className="text-base md:text-lg text-slate-600 font-inter leading-relaxed mb-8">
              At Healing-PRP Clinics, every appointment is strictly private, discreet, and focused on understanding the root cause of your symptoms to create a personalised, evidence-based treatment plan.
            </p>

            <div className="flex justify-center md:justify-start">
              <Link 
                href={`${prefix}/our-doctor`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold text-sm transition-all duration-300 shadow-lg shadow-[#4041d1]/20 font-inter group"
              >
                Meet Dr Syed Abdi <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Subtle Background Blobs for depth */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#4041d1]/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
