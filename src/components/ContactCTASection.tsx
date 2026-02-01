"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTimes, FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "Sexual Rejuvenation (P-Shot/O-Shot)",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (prev[name as keyof typeof prev] === value) return prev;
      return { ...prev, [name]: value };
    });
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; 
  
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({ type: "error", message: "Email service unconfigured." });
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        treatment: formData.treatment,
        message: formData.message,
      });

      setSubmitStatus({ 
        type: "success", 
        message: "Thank you! Your enquiry has been received. Our clinical team will review your details and get back to you within 24 hours." 
      });
      
      setFormData({ name: "", email: "", phone: "", treatment: "Sexual Rejuvenation (P-Shot/O-Shot)", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send. Please try WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    // 1. Tightened section padding: py-16 lg:py-24 (was 24/32)
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white font-inter">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-96 bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Reduced margin-bottom: mb-12 (was 16) */}
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={containerVariants}>
          <motion.div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border border-blue-100" variants={itemVariants}>
            Get In Touch
          </motion.div>
          {/* 3. Reduced heading size: text-3xl md:text-4xl (was 4xl/5xl) */}
          <motion.h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 mb-4 tracking-tight" variants={itemVariants}>
            Book Your Private Consultation
          </motion.h2>
          {/* 4. Reduced paragraph size: text-base (was lg) */}
          <motion.p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
            We don’t simply perform a procedure—we develop a personalised medical protocol tailored to your individual biology.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* 5. Reduced container padding: p-6 md:p-8 (was 8/10) */}
          <motion.div 
            className="lg:col-span-7 bg-slate-50 p-6 md:p-8 rounded-[2.5rem] border border-slate-100 will-change-transform" 
            style={{ transform: 'translateZ(0)' }}
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
          >
            {/* 6. Tightened grid gap: gap-4 (was 6) */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  defaultValue={formData.name} 
                  onChange={handleInputChange} 
                  // 7. Reduced input padding: py-3 (was 4)
                  className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow bg-white text-sm" 
                  placeholder="Full Name" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  defaultValue={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow bg-white text-sm" 
                  placeholder="email@example.com" 
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  defaultValue={formData.phone} 
                  onChange={handleInputChange} 
                  className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow bg-white text-sm" 
                  placeholder="07xxx xxxxxx" 
                />
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Treatment Interest</label>
                <select 
                  name="treatment" 
                  value={formData.treatment} 
                  onChange={handleInputChange} 
                  className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow bg-white text-slate-600 appearance-none text-sm"
                >
                  <option>Sexual Rejuvenation (P-Shot/O-Shot)</option>
                  <option>Hair Restoration</option>
                  <option>Joint Pain Relief</option>
                  <option>Facial Aesthetics</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[10px] font-bold uppercase text-slate-400 ml-1 tracking-widest">Your Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={3} // 8. Reduced rows: 3 (was 4)
                  defaultValue={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-blue-500 transition-shadow bg-white placeholder:text-slate-300 text-sm" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {submitStatus.type && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`md:col-span-2 p-4 rounded-xl border mb-1 ${submitStatus.type === "success" ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className={`mt-1 shrink-0 ${submitStatus.type === "success" ? "text-green-500" : "text-red-500"}`} />
                    <div>
                      <p className={`font-bold mb-0.5 text-sm ${submitStatus.type === "success" ? "text-green-800" : "text-red-800"}`}>
                        {submitStatus.type === "success" ? "Enquiry Received" : "Error"}
                      </p>
                      <p className={`text-xs leading-relaxed ${submitStatus.type === "success" ? "text-green-700" : "text-red-700"}`}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <button 
                disabled={isSubmitting} 
                // 9. Reduced button padding: py-4 (was 5)
                className="md:col-span-2 w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:bg-slate-300 text-sm"
              >
                {isSubmitting ? "Sending..." : <><FaPaperPlane className="w-4 h-4" /> Send My Enquiry</>}
              </button>
            </form>
          </motion.div>
          
          {/* 10. Tightened right side spacing: gap-4 (was 6) */}
          <motion.div className="lg:col-span-5 space-y-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {/* 11. Reduced card padding: p-4 (was 6) */}
            <button onClick={() => isDesktop ? setIsModalOpen(true) : window.open('https://wa.me/447990364147', '_blank')} className="w-full group p-4 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 text-left">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform"><FaWhatsapp /></div>
                <div>
                  <h3 className="font-raleway font-bold text-slate-900 text-base">WhatsApp Support</h3>
                  <p className="text-xs text-slate-500 italic">Responds in 1 hour</p>
                </div>
              </div>
            </button>
            <a href="/contact" className="block group p-4 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform"><FaEnvelope /></div>
                <div>
                  <h3 className="font-raleway font-bold text-slate-900 text-base">Full Contact Details</h3>
                  <p className="text-xs text-slate-500">View maps & clinic hours</p>
                </div>
              </div>
            </a>
            {/* 12. Reduced standards panel padding: p-6 (was 8) */}
            <div className="p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100/50">
              <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Patient Standards</h4>
              <ul className="space-y-3">
                {["Flexible appointments", "Private 1:1 medical consultations", "No GP referral required", "Doctor-led bespoke protocols"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 text-xs font-semibold">
                    <FaCheckCircle className="text-blue-500 shrink-0 w-3.5 h-3.5" /> {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 z-[70] flex items-center justify-center p-4">
              <div className="bg-white rounded-[2.5rem] shadow-2xl max-w-md w-full p-8 relative overflow-hidden" onClick={e => e.stopPropagation()}>
                <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"><FaTimes className="w-5 h-5 text-slate-400" /></button>
                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-bold text-slate-900 mb-2">Scan to Chat</h3>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 inline-block mb-6 mt-4"><img src="/qrcode.png" alt="WhatsApp QR" className="w-40 h-40" /></div>
                  <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold hover:shadow-lg transition-all"><FaWhatsapp className="w-5 h-5" /> Open WhatsApp Web</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
