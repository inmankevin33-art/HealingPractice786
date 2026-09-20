"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function EDFeatureBlock() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

  return (
    <section className="py-24 bg-white font-inter border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="shrink-0 relative">
            <Image
              src="/dr-syed-abdi.webp"
              alt="Dr Syed Abdi, GMC-registered doctor at Healing-PRP Clinics"
              width={192}
              height={192}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-md mx-auto md:mx-0 border-4 border-white"
              loading="lazy"
              quality={85}
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-4">
              Treatment With Dr Syed Abdi
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              Your consultation and treatment are carried out by Dr Syed Abdi, GMC No. 6083294, a UK-trained and GMC-registered doctor with extensive experience in regenerative medicine, medical ozone therapy, aesthetics, and non-surgical intimate health procedures. The appointment is discreet, private and focused on understanding the root cause of your symptoms to create a personalised, evidence-based treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
              <Link 
                href="/our-doctor"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors font-inter group"
              >
                Meet Dr Syed Abdi <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <a 
                href="https://www.linkedin.com/in/syed-abdi-056b28b9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0A66C2] hover:text-[#004182] transition-colors font-inter"
              >
                <FaLinkedin className="w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
