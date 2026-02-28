"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaPlus,
  FaMinus,
  FaCheckCircle,
  FaShieldAlt,
  FaBox,
  FaUserMd,
  FaLock,
  FaPaperPlane,
  FaExclamationCircle
} from "react-icons/fa";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";
import emailjs from "@emailjs/browser";

// --- INTERFACE FOR DYNAMIC PROPS ---
export type FaqType = {
  question: string;
  answer: string;
};

interface TreatmentCostsProps {
  faqs: FaqType[];
}

export default function TreatmentCostsClient({ faqs }: TreatmentCostsProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    condition: "Erectile Dysfunction",
    message: "",
    acceptedTerms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
    if (submitStatus.type) setSubmitStatus({ type: null, message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; 
    setIsSubmitting(true);
    
    // Connect to your existing EmailJS Setup
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({ type: "error", message: "System error: Email service unconfigured." });
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        treatment: `Quote Request: ${formData.condition}`, // Maps your new dropdown to the existing template
        message: formData.message || "No additional message provided.",
        clinic_location: "Online / UK Wide", // Indicates it came from the national online page
      });

      setSubmitStatus({ 
        type: "success", 
        message: "Request Received Safely. Our clinical team will contact you discreetly with your custom quote." 
      });
      
      // GA4 Tracking for Lead Generation
      if (typeof window !== "undefined") {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          w.gtag("event", "generate_lead", {
            event_category: "form_submission",
            event_label: "treatment_costs_quote",
            page_path: window.location.pathname,
          });
        }
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "Failed to send request. Please try calling or WhatsApping us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Simplified animations for maximum page speed
  const simpleFadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-inter">
      
    {/* --- FAST, LIGHT HERO SECTION --- */}
      <div className="pt-12 pb-12 lg:pt-16 lg:pb-12 bg-white border-b border-slate-100">
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={simpleFadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 border border-[#4041d1]/20 rounded-full bg-[#4041d1]/5"
          >
            <FaLock className="text-[#4041d1] w-3 h-3" />
            <span className="text-[#4041d1] text-[10px] md:text-xs font-bold tracking-widest uppercase font-inter">Discreet UK-Wide Service</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={simpleFadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-raleway text-slate-900 leading-tight mb-4 tracking-tight"
          >
            Treatment Costs
          </motion.h1>

          <motion.p
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={simpleFadeUp}
            className="text-sm md:text-base text-slate-600 leading-relaxed max-w-xl mx-auto font-medium"
          >
            Ready to regain control? Complete the secure form below. Our medical team will assess your specific needs and formulate a bespoke treatment quote for you.
          </motion.p>
        </div>
      </div>

      {/* --- MAIN SPLIT SECTION: EXPLANATION & FORM --- */}
      <section className="py-16 lg:py-24 relative z-30 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* LEFT SIDE: The "Why" Explanation */}
            <motion.div 
              className="lg:col-span-5 flex flex-col justify-start pt-8"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={simpleFadeUp}
            >
              <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
                Understanding Your Treatment Investment
              </h2>
              
              <div className="space-y-5 text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-10">
                <p>
                  Because our GMC-registered doctors do not prescribe standard, “off-the-shelf” tablets, there is no one-size-fits-all price list.
                </p>
                <p>
                  Every man’s physiology is different. Your medication formulation, dosage, and overall treatment plan are tailored specifically to your individual medical profile and treatment goals.
                </p>
                <p>
                  This personalised approach ensures you receive the exact medical intervention required — helping to minimise unnecessary medication, reduce potential side effects, and support more reliable outcomes compared to generic options.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#4041d1]/10 flex items-center justify-center shrink-0">
                    <FaUserMd className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">Doctor-Led Clinical Review</h4>
                    <p className="text-sm text-slate-500 mt-1">Your case is evaluated safely and thoroughly online.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#4041d1]/10 flex items-center justify-center shrink-0">
                    <FaShieldAlt className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">No Hidden Commitments</h4>
                    <p className="text-sm text-slate-500 mt-1">Complete transparency with no forced long-term contracts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-[#4041d1]/10 flex items-center justify-center shrink-0">
                    <FaBox className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">Direct, Discreet Delivery</h4>
                    <p className="text-sm text-slate-500 mt-1">Medication shipped nationwide in plain, unbranded packaging.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Embedded Form (Light Theme) */}
            <motion.div 
              className="lg:col-span-7"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={simpleFadeUp}
            >
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-slate-200 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#4041d1]"></div>

                {submitStatus.type === "success" ? (
                  /* Success State */
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                      <FaCheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-3">Request Received Safely</h3>
                    <p className="text-slate-600 font-medium mb-8 max-w-sm mx-auto">
                      {submitStatus.message}
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitStatus({ type: null, message: "" });
                        setFormData({ ...formData, message: "" }); // Reset message but keep name/email
                      }} 
                      className="text-[#4041d1] font-bold text-sm hover:underline"
                    >
                      Submit another query
                    </button>
                  </motion.div>
                ) : (
                  /* The Form */
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold font-raleway text-slate-900">Get Your Customised Quote</h3>
                      <p className="text-sm text-slate-500 mt-2">Fill out the details below to receive your bespoke options.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">First Name *</label>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-slate-50 focus:bg-white text-sm" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Name *</label>
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-slate-50 focus:bg-white text-sm" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-slate-50 focus:bg-white text-sm" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Phone Number *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-slate-50 focus:bg-white text-sm" placeholder="07xxx xxxxxx" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Condition *</label>
                      <div className="flex flex-wrap gap-4">
                        <label className={`flex items-center gap-2 cursor-pointer px-5 py-3 rounded-2xl border-none ring-1 transition-all text-sm ${formData.condition === "Erectile Dysfunction" ? "ring-2 ring-[#4041d1] bg-[#4041d1]/5 text-[#4041d1]" : "ring-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"}`}>
                          <input type="radio" name="condition" value="Erectile Dysfunction" checked={formData.condition === "Erectile Dysfunction"} onChange={handleInputChange} className="hidden" />
                          <span className="font-semibold">Erectile Dysfunction</span>
                        </label>
                        <label className={`flex items-center gap-2 cursor-pointer px-5 py-3 rounded-2xl border-none ring-1 transition-all text-sm ${formData.condition === "Premature Ejaculation" ? "ring-2 ring-[#4041d1] bg-[#4041d1]/5 text-[#4041d1]" : "ring-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"}`}>
                          <input type="radio" name="condition" value="Premature Ejaculation" checked={formData.condition === "Premature Ejaculation"} onChange={handleInputChange} className="hidden" />
                          <span className="font-semibold">Premature Ejaculation</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">How can we help you? (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-5 py-3 rounded-2xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-[#4041d1] transition-shadow bg-slate-50 focus:bg-white text-sm resize-none" placeholder="Please briefly describe your goals..." />
                    </div>

                    <div className="pt-2 pb-4">
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center mt-1">
                          <input required type="checkbox" name="acceptedTerms" checked={formData.acceptedTerms} onChange={handleInputChange} className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded focus:ring-2 focus:ring-[#4041d1]/20 checked:bg-[#4041d1] checked:border-[#4041d1] transition-all cursor-pointer" />
                          <FaCheckCircle className="absolute text-white w-3 h-3 opacity-0 peer-checked:opacity-100 pointer-events-none" />
                        </div>
                        <span className="text-xs text-slate-500 leading-relaxed font-medium">
                          By submitting this form, you confirm that you have read and accepted our Privacy Policy, and you agree to be contacted discreetly by our medical team.
                        </span>
                      </label>
                    </div>

                    {submitStatus.type === "error" && (
                      <div className="p-4 rounded-xl border bg-red-50 border-red-100 flex items-center gap-3">
                        <FaExclamationCircle className="text-red-500 shrink-0" />
                        <p className="text-xs font-bold text-slate-800">{submitStatus.message}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.acceptedTerms}
                      className="w-full py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-2xl font-bold font-inter text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 disabled:bg-slate-300 disabled:shadow-none disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : <>Send My Enquiry <FaPaperPlane className="w-4 h-4" /></>}
                    </button>
                    
                    <div className="text-center flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-4 font-bold tracking-wider uppercase">
                      <FaLock /> 100% Secure & Confidential
                    </div>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FAQs SPECIFIC TO PRICING --- */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={simpleFadeUp}>
            <motion.div className="flex justify-center mb-2">
              <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider">
                Financial Peace of Mind
              </div>
            </motion.div>
            <motion.h2 className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 leading-tight text-center mb-12">
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-raleway font-bold text-slate-900 pr-8 leading-relaxed text-base md:text-lg">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative transition-colors ${openFAQIndex === index ? 'bg-[#4041d1] text-white' : 'bg-[#4041d1]/10 text-[#4041d1]'}`}>
                       {openFAQIndex === index ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {openFAQIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 border-t border-slate-100 pt-6">
                          <p className="font-inter text-base text-slate-600 leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Reviews */}
      <div className="bg-white pb-10">
         <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
      </div>

      <Footer />
    </div>
  );
}
