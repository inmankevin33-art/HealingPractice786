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
  FaPaperPlane
} from "react-icons/fa";
import Footer from "@/components/Footer";
import TrustReviews from "@/components/TrustReviews";

// --- INTERFACE FOR DYNAMIC PROPS ---
type FaqType = {
  question: string;
  answer: string;
};

interface TreatmentCostsProps {
  faqs?: FaqType[];
}

// Default Pricing FAQs if none are passed
const defaultFaqs: FaqType[] = [
  {
    question: "What does my treatment cost include?",
    answer: "Your bespoke cost covers everything: your comprehensive online review by a GMC-registered doctor, your custom-formulated medication, ongoing dosage adjustments, and secure, discreet direct-to-door shipping."
  },
  {
    question: "Are there any hidden prescription fees?",
    answer: "Absolutely not. We believe in complete transparency. The quote you receive includes both the medical consultation and the physical medication. There are no surprise pharmacy dispensing fees."
  },
  {
    question: "Am I locked into a long-term contract?",
    answer: "No. Every man's needs are different, and your treatment plan is completely flexible. We do not lock you into rigid long-term contracts; your treatment is managed according to your ongoing progress."
  },
  {
    question: "Is the billing and shipping discreet?",
    answer: "Yes, your privacy is our highest priority. All packages arrive in unbranded, plain packaging, and your bank statements will show a discreet billing name that does not mention ED or PE."
  }
];

export default function TreatmentCostsClient({
  faqs = defaultFaqs,
}: TreatmentCostsProps) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0); // First FAQ open by default
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
  const [isSubmitted, setIsSubmitted] = useState(false);

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API Call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
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
    }, 1500);
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-slate-50 min-h-screen font-inter">
      {/* --- HERO SECTION --- */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A1128]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0A1128] to-[#0A1128] z-10" />
          {/* Optional abstract background pattern here */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#4041d1]/5 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-900/20 backdrop-blur-sm"
          >
            <FaLock className="text-blue-300 w-3 h-3" />
            <span className="text-blue-200 text-xs font-bold tracking-widest uppercase font-inter">Discreet UK-Wide Service</span>
          </motion.div>

          <motion.h1
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-raleway text-white leading-tight mb-6 tracking-tight"
          >
            Treatment Costs
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeUpVariants}
            className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Ready to regain control? Complete the secure form below. Our medical team will assess your specific needs and formulate a bespoke treatment quote for you.
          </motion.p>
        </div>
      </div>

      {/* --- MAIN SPLIT SECTION: EXPLANATION & FORM --- */}
      <section className="py-16 lg:py-24 relative z-30 -mt-10 lg:-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            {/* LEFT SIDE: The "Why" Explanation */}
            <motion.div 
              className="lg:col-span-5 flex flex-col justify-start pt-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
                Understanding Your Treatment Investment
              </h2>
              
              <div className="space-y-5 text-slate-600 font-medium text-sm md:text-base leading-relaxed mb-10">
                <p>
                  Because our GMC-registered doctors do not prescribe standard, &quot;off-the-shelf&quot; tablets, there is no one-size-fits-all price list.
                </p>
                <p>
                  Every man&apos;s physiology is different. Your medication formulation, dosage, and overall treatment plan are compounded specifically for your unique medical profile and goals.
                </p>
                <p>
                  This bespoke approach ensures you only pay for the exact medical intervention you require—resulting in higher success rates and minimal side effects compared to standard generic options.
                </p>
              </div>

              {/* Value Props */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <FaUserMd className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">GMC-Registered Review</h4>
                    <p className="text-sm text-slate-500 mt-1">Your case is evaluated safely and thoroughly online.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <FaShieldAlt className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">No Hidden Commitments</h4>
                    <p className="text-sm text-slate-500 mt-1">Complete transparency with no forced long-term contracts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <FaBox className="text-[#4041d1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 font-raleway">Direct, Discreet Delivery</h4>
                    <p className="text-sm text-slate-500 mt-1">Medication shipped nationwide in plain, unbranded packaging.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: The Embedded Form */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#4041d1] to-blue-400"></div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold font-raleway text-slate-900">Get Your Customised Quote</h3>
                      <p className="text-sm text-slate-500 mt-2">Fill out the details below to receive your bespoke options.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">First Name *</label>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4041d1] focus:ring-2 focus:ring-[#4041d1]/20 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Last Name *</label>
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4041d1] focus:ring-2 focus:ring-[#4041d1]/20 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4041d1] focus:ring-2 focus:ring-[#4041d1]/20 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4041d1] focus:ring-2 focus:ring-[#4041d1]/20 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white" placeholder="07123 456789" />
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Primary Condition *</label>
                      <div className="flex flex-wrap gap-4">
                        <label className={`flex items-center gap-2 cursor-pointer px-4 py-3 rounded-xl border transition-all ${formData.condition === "Erectile Dysfunction" ? "border-[#4041d1] bg-blue-50/50" : "border-slate-200 bg-slate-50 hover:bg-slate-100"}`}>
                          <input type="radio" name="condition" value="Erectile Dysfunction" checked={formData.condition === "Erectile Dysfunction"} onChange={handleInputChange} className="w-4 h-4 text-[#4041d1] focus:ring-[#4041d1]" />
                          <span className="text-sm font-medium text-slate-700">Erectile Dysfunction</span>
                        </label>
                        <label className={`flex items-center gap-2 cursor-pointer px-4 py-3 rounded-xl border transition-all ${formData.condition === "Premature Ejaculation" ? "border-[#4041d1] bg-blue-50/50" : "border-slate-200 bg-slate-50 hover:bg-slate-100"}`}>
                          <input type="radio" name="condition" value="Premature Ejaculation" checked={formData.condition === "Premature Ejaculation"} onChange={handleInputChange} className="w-4 h-4 text-[#4041d1] focus:ring-[#4041d1]" />
                          <span className="text-sm font-medium text-slate-700">Premature Ejaculation</span>
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">How can we help you? (Optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleInputChange} rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#4041d1] focus:ring-2 focus:ring-[#4041d1]/20 outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white resize-none" placeholder="Please briefly describe your goals..." />
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

                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.acceptedTerms}
                      className="w-full py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold font-inter text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#4041d1]/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>Submit Request <FaPaperPlane className="w-4 h-4" /></>
                      )}
                    </button>
                    
                    <div className="text-center flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
                      <FaLock /> 100% Secure & Confidential
                    </div>
                  </form>
                ) : (
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
                      Thank you, {formData.firstName}. Our medical team will review your details and contact you discreetly regarding your custom treatment quote.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="text-[#4041d1] font-bold text-sm hover:underline">
                      Submit another query
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- FAQs SPECIFIC TO PRICING --- */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div className="flex justify-center mb-2" variants={itemVariants}>
              <div className="inline-block px-4 py-2 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-inter font-bold uppercase tracking-wider">
                Financial Peace of Mind
              </div>
            </motion.div>
            <motion.h2
              className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 leading-tight text-center mb-12"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.div className="space-y-4" variants={containerVariants}>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  variants={itemVariants}
                >
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
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
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Reviews directly below FAQs */}
      <div className="bg-white pb-10">
         <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
      </div>

      <Footer />
    </div>
  );
}
