"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaCheckCircle, FaPaperPlane, FaInfoCircle, FaPhoneAlt, FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactCTASection() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false); // Used for QR Logic
  
  const [activeClinic, setActiveClinic] = useState<"st-albans" | "birmingham">(
    pathname?.startsWith("/birmingham") ? "birmingham" : "st-albans"
  );

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

  // Handle drawer open events
  useEffect(() => {
    const handleOpenEvent = () => setIsOpen(true);
    window.addEventListener("open-contact-drawer", handleOpenEvent);
    return () => window.removeEventListener("open-contact-drawer", handleOpenEvent);
  }, []);

  // Check screen size for QR logic
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop(); // Run immediately
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus.type) setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; 
    setIsSubmitting(true);
    
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
        clinic_location: activeClinic === "birmingham" ? "Birmingham (Edgbaston)" : "St Albans",
      });

      setSubmitStatus({ 
        type: "success", 
        message: "Thank you! Our clinical team will get back to you within 24 hours." 
      });
      setFormData({ name: "", email: "", phone: "", treatment: "Sexual Rejuvenation (P-Shot/O-Shot)", message: "" });
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send. Please try WhatsApp." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form-section" className="relative py-12 bg-white font-inter scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Collapsed Header / Trigger */}
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue-50)] text-[#4041d1] rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-4 border border-slate-100">
            Get In Touch
          </div>
          <h2 className="text-2xl md:text-3xl font-raleway font-semibold text-slate-900 mb-4">
            Speak with a Specialist
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            {!isOpen && (
              <button
                onClick={() => setIsOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[#4041d1] text-white rounded-2xl font-bold text-sm hover:bg-[#2a2bb8] transition-all shadow-xl shadow-blue-500/20 group"
              >
                <FaPaperPlane className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Book Consultation Now
                <FaChevronDown className="ml-2 opacity-50" />
              </button>
            )}

            <a 
              href="tel:07990364147"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all"
            >
              <FaPhoneAlt className="text-[#4041d1] w-3.5 h-3.5" />
              07990 364 147
            </a>
          </div>
        </div>

        {/* The Sliding Form Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-8 pb-12">
                <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 relative shadow-sm">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-8 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <FaTimes size={20} />
                  </button>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT: THE FORM */}
                    <div className="lg:col-span-7">
                      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                        <div className="md:col-span-2 mb-2">
                          <div className="flex p-1 bg-slate-200/50 rounded-2xl w-fit">
                            {(["st-albans", "birmingham"] as const).map((clinic) => (
                              <button
                                key={clinic}
                                type="button"
                                onClick={() => setActiveClinic(clinic)}
                                className={`px-6 py-2 rounded-xl text-[11px] font-bold transition-all ${
                                  activeClinic === clinic ? "bg-white text-[#4041d1] shadow-sm" : "text-slate-500 hover:text-slate-700"
                                }`}
                              >
                                {clinic === "st-albans" ? "St Albans" : "Birmingham"}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Form Fields - Updated Labels for Contrast */}
                        <div className="md:col-span-2 space-y-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 ml-1 tracking-widest">Full Name</label>
                          <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-white text-sm" placeholder="Full Name" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 ml-1 tracking-widest">Email</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-white text-sm" placeholder="email@example.com" />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 ml-1 tracking-widest">Phone</label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-white text-sm" placeholder="07xxx xxxxxx" />
                        </div>
                        <div className="md:col-span-2 space-y-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 ml-1 tracking-widest">Treatment</label>
                          <select name="treatment" value={formData.treatment} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-white text-slate-600 appearance-none text-sm">
                            <option>Sexual Rejuvenation (P-Shot/O-Shot)</option>
                            <option>Hair Restoration</option>
                            <option>Joint Pain Relief</option>
                            <option>Facial Aesthetics</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 space-y-1">
                          <label className="text-[10px] font-bold uppercase text-slate-500 ml-1 tracking-widest">Message</label>
                          <textarea name="message" required rows={3} value={formData.message} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-white text-sm" placeholder="How can we help?"></textarea>
                        </div>

                        {submitStatus.type && (
                          <div className={`md:col-span-2 p-4 rounded-xl border ${submitStatus.type === "success" ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100"}`}>
                            <p className="text-xs font-bold text-slate-800">{submitStatus.message}</p>
                          </div>
                        )}

                        <button disabled={isSubmitting} className="md:col-span-2 w-full py-4 bg-[#4041d1] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#2a2bb8] transition-all shadow-xl shadow-blue-600/20 disabled:bg-slate-300 text-sm">
                          {isSubmitting ? "Sending..." : "Send My Enquiry"}
                        </button>
                      </form>
                    </div>

                    {/* RIGHT SIDE: QUICK CONTACTS */}
                    <div className="lg:col-span-5 space-y-3">
                      
                      {/* ✅ MOBILE SMART LOGIC: Show Button on Mobile, QR on Desktop */}
                      <div className="w-full bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm">
                        <div className="inline-flex items-center gap-2 text-green-600 mb-4 bg-green-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          <FaWhatsapp className="w-3 h-3" /> Quick Chat
                        </div>
                        
                        {isDesktop ? (
                          // DESKTOP: Show QR Code
                          <>
                            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 inline-block mb-4">
                              <img src="/qrcode.png" alt="WhatsApp QR" className="w-32 h-32 mx-auto mix-blend-multiply" />
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Scan to Chat</p>
                              <div className="text-lg font-raleway font-bold text-[#4041d1]">
                                +44 7990 364 147
                              </div>
                            </div>
                          </>
                        ) : (
                          // MOBILE: Show Big Button
                          <div className="py-4">
                             <a 
                               href="https://wa.me/447990364147" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
                             >
                               <FaWhatsapp className="w-6 h-6" /> Open WhatsApp
                             </a>
                             <p className="mt-4 text-[10px] text-slate-400">
                               Typically replies in &lt; 1 hour
                             </p>
                          </div>
                        )}
                      </div>

                      {/* Clinic Info Link */}
                      <Link href="/contact" className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                        <div className="w-10 h-10 bg-[var(--brand-blue-50)] text-[#4041d1] rounded-xl flex items-center justify-center text-lg"><FaInfoCircle /></div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Clinic Info</h4>
                          <p className="text-[10px] text-slate-500">Maps & Opening Hours</p>
                        </div>
                      </Link>

                      {/* Standards List */}
                      <div className="p-5 bg-slate-100/50 rounded-2xl border border-slate-200/50">
                        <h4 className="text-[9px] font-bold text-[#4041d1] uppercase tracking-widest mb-3">Standards</h4>
                        <ul className="space-y-2">
                          {["Private 1:1 Medical", "Doctor-Led Care", "No Referral Needed"].map((text, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700 text-[11px] font-semibold">
                              <FaCheckCircle className="text-[#4041d1] w-3 h-3" /> {text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
