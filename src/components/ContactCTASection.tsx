"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

export default function ContactCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white font-inter">
      {/* Optimized Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100"
            variants={itemVariants}
          >
            Get In Touch
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 tracking-tight"
            variants={itemVariants}
          >
            Book Your Private Consultation
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            We don’t simply perform a procedure—we develop a personalised medical protocol tailored to your individual biology.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Direct Inquiry Form (Productivity Boost) */}
          <motion.div 
            className="lg:col-span-7 bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">First Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Last Name</label>
                <input type="text" className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" placeholder="Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" 
                  placeholder="email@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white" 
                  placeholder="07123 456789" 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Treatment Interest</label>
                <select className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white text-slate-600 appearance-none">
                  <option>Sexual Rejuvenation (P-Shot/O-Shot)</option>
                  <option>Hair Restoration</option>
                  <option>Joint Pain Relief</option>
                  <option>Facial Aesthetics</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Your Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white placeholder:text-slate-300" placeholder="How can we help you?"></textarea>
              </div>
              <button className="md:col-span-2 w-full py-5 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                <FaPaperPlane className="w-4 h-4" />
                Send My Enquiry
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE: High-Speed Contact & Trust Panel */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp - Action Button Style */}
            <button 
              onClick={() => isDesktop ? setIsModalOpen(true) : window.open('https://wa.me/447990364147', '_blank')}
              className="w-full group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-left"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <h3 className="font-raleway font-bold text-slate-900 text-lg">WhatsApp Support</h3>
                  <p className="text-sm text-slate-500 italic">Responds in 1 hour</p>
                </div>
                <div className="ml-auto text-blue-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
                  Chat Now →
                </div>
              </div>
            </button>

            {/* Instagram - Social Proof */}
            <a href="https://www.instagram.com/Healing_Prp/" target="_blank" rel="noopener noreferrer" className="block group p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  <FaInstagram />
                </div>
                <div>
                  <h3 className="font-raleway font-bold text-slate-900 text-lg">Follow Our Results</h3>
                  <p className="text-sm text-slate-500">@healingprp</p>
                </div>
              </div>
            </a>

            {/* Trust Panel */}
            <div className="p-8 bg-blue-50/50 rounded-[2.5rem] border border-blue-100/50">
              <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">Patient Standards</h4>
              <ul className="space-y-4">
                {[
                  "Flexible, evening & weekend appointments",
                  "Private 1:1 medical consultations",
                  "No GP referral required",
                  "Doctor-led bespoke medical protocols"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                    <FaCheckCircle className="text-blue-500 shrink-0 w-4 h-4" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Modal - Maintained from your original code */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full p-10 relative pointer-events-auto overflow-hidden">
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"><FaTimes className="w-5 h-5 text-slate-400" /></button>
                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Scan to Chat</h3>
                  <p className="text-sm text-slate-500 mb-8">Open WhatsApp on your phone and scan</p>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 inline-block mb-8">
                    <img src="/qrcode.png" alt="WhatsApp QR" className="w-48 h-48" />
                  </div>
                  <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:shadow-lg transition-all">
                    <FaWhatsapp className="w-5 h-5" /> Open WhatsApp Web
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
