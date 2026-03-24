"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaUserMd } from "react-icons/fa";

export default function EDFeatureBlock() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-6 pb-24 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              
              {/* HEADLINE MOVED TO TOP FOR HERO "PEEK" EFFECT */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-slate-900 leading-tight tracking-tight mt-4">
                Private Doctor-Led Help for Erectile Dysfunction
              </h2>
              
              <p className="text-lg text-slate-600 font-inter leading-relaxed">
                If erections have become less reliable, less firm, or more dependent on tablets, a personalised assessment may help identify the right treatment pathway.
              </p>
              
              <p className="text-base text-slate-600 font-inter leading-relaxed">
                We take a discreet, medically grounded approach to erectile dysfunction, with treatment plans tailored to the individual rather than a one-size-fits-all package. Options may include medication, shockwave therapy, PRP-based procedures, and hormone review where appropriate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href={`${prefix}/erectile-dysfunction`}
                  className="px-8 py-4 bg-white border border-slate-200 text-slate-900 hover:border-[#4041d1] hover:text-[#4041d1] rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm font-inter group"
                >
                  View ED Treatment Options <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
                <button 
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#4041d1]/20 font-inter"
                >
                  Book Free Initial Consultation
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Doctor Trust Card (Shifted Upwards) */}
          <div className="lg:col-span-5 relative mt-10 lg:-mt-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl border border-slate-100 relative z-10"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#4041d1] border border-blue-100 shadow-sm">
                  <FaUserMd className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-raleway font-bold text-xl md:text-2xl text-slate-900">Dr Syed Abdi</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider font-inter mt-1">Medical Director • GMC 6083294</p>
                </div>
              </div>
              
              <blockquote className="text-slate-600 italic font-inter text-base md:text-lg leading-relaxed mb-8 border-l-4 border-[#4041d1]/20 pl-6">
                &ldquo;Erectile dysfunction is often linked to vascular, metabolic, hormonal, or lifestyle factors. Our aim is to assess the wider picture and create a treatment plan tailored to the individual.&rdquo;
              </blockquote>
              
              <Link 
                href={`${prefix}/our-doctor`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#4041d1] hover:text-[#2a2bb8] transition-colors font-inter group"
              >
                Meet Dr Syed Abdi <FaArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Subtle Background Blobs for depth */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#4041d1]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
}
