"use client";

import { motion } from "framer-motion";
import { FaMars, FaVenus, FaStethoscope } from "react-icons/fa";

export default function IntimateTreatmentApproachSection() {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-slate-50 font-inter border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            Clinical Excellence
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-slate-900 mb-6"
          >
            A Doctor-Led Approach to Intimate Health
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed mb-6"
          >
            Intimate symptoms can be influenced by vascular, hormonal, tissue and lifestyle factors. Our approach is to assess the wider picture and recommend a treatment pathway tailored to the individual rather than a one-size-fits-all package.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base md:text-lg leading-relaxed"
          >
            Depending on the concern, treatment options may include medical assessment, shockwave therapy, PRP-based treatments such as the P-Shot or O-Shot, and other non-surgical options where appropriate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-50 text-[#4041d1] rounded-2xl flex items-center justify-center text-xl mb-6">
              <FaMars />
            </div>
            <h3 className="font-raleway font-bold text-slate-900 text-xl mb-3">Men’s concerns</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Erectile dysfunction, Peyronie’s disease and premature ejaculation
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center text-xl mb-6">
              <FaVenus />
            </div>
            <h3 className="font-raleway font-bold text-slate-900 text-xl mb-3">Women’s concerns</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Vaginal dryness, reduced sensitivity and intimate discomfort
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center text-xl mb-6">
              <FaStethoscope />
            </div>
            <h3 className="font-raleway font-bold text-slate-900 text-xl mb-3">Personalised planning</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Treatment is based on symptoms, history and realistic goals
            </p>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={handleAction}
            className="px-8 py-4 inline-flex items-center justify-center text-sm cursor-pointer bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-xl shadow-[#4041d1]/20 active:scale-95"
          >
            Book Private Consultation
          </motion.button>
        </div>

      </div>
    </section>
  );
}
