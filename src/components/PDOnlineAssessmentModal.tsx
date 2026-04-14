"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaCheckCircle, FaUserMd, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface PDOnlineAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PDOnlineAssessmentModal({ isOpen, onClose }: PDOnlineAssessmentModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [isComplete, setIsComplete] = useState(false);
  
  // Lead Capture State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const questions = [
    {
      id: 1,
      title: "How long have you noticed penile curvature or related symptoms?",
      options: ["Less than 3 months", "3 to 6 months", "6 to 12 months", "More than 1 year"],
      note: "This helps determine if the condition is in the active or stable phase.",
    },
    {
      id: 2,
      title: "Roughly what angle is the curvature when fully erect?",
      options: ["Mild (Under 30°)", "Moderate (30° - 60°)", "Severe (Over 60°)", "Not sure"],
    },
    {
      id: 3,
      title: "Do you experience pain or discomfort during erections?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 4,
      title: "Can you feel a hard lump, plaque, or thickened tissue under the skin?",
      options: ["Yes, definitely", "Not sure", "No"],
    },
    {
      id: 5,
      title: "Is the condition impacting your ability to get or maintain a firm erection?",
      options: ["Yes, significantly", "Yes, somewhat", "No, erections are fine"],
    },
    {
      id: 6,
      title: "Have you previously tried any treatments for Peyronie's Disease?",
      options: ["No, seeking first-time help", "Yes, oral medication", "Yes, traction devices", "Yes, injections/surgery"],
    },
    {
      id: 7,
      title: "Do you have any diagnosed cardiovascular conditions or diabetes?",
      options: ["Yes", "No"],
      note: "This helps our doctor ensure specific treatment suitability.",
    },
    {
      id: 8,
      title: "What is your age?",
      options: ["20-29", "30-39", "40-49", "50-59", "60+"],
    },
  ];

  const handleSelect = (answer: string | number) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    
    setTimeout(() => {
      if (step < questions.length - 1) {
        setStep((prev) => prev + 1);
      } else {
        setIsComplete(true);
      }
    }, 300);
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- STANDALONE EMAILJS SUBMISSION LOGIC ---
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials missing.");
      alert("Configuration error. Please use our standard contact form.");
      setIsSubmitting(false);
      return;
    }

    // Format the answers into a clean, readable summary for the doctor
    let formattedAssessment = "=== ONLINE PEYRONIE'S ASSESSMENT RESULTS ===\n\n";
    questions.forEach((q, index) => {
      formattedAssessment += `Q${index + 1}: ${q.title}\n`;
      formattedAssessment += `Answer: ${answers[index] || "Not answered"}\n\n`;
    });

    const clinicLocation = window.location.pathname?.startsWith("/birmingham") 
      ? "Birmingham (Edgbaston)" 
      : "St Albans";

    try {
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        treatment: "Peyronie's Disease Treatment (Online Assessment Completed)",
        message: formattedAssessment,
        clinic_location: clinicLocation,
      });

      setIsSubmitted(true);
      
      // Close modal and reset state after a short delay so they see the success message
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setStep(0);
          setIsComplete(false);
          setIsSubmitted(false);
          setAnswers({});
          setFormData({ name: "", email: "", phone: "" });
        }, 500);
      }, 3000);

    } catch (error) {
      console.error("Failed to send assessment:", error);
      alert("There was an issue sending your assessment. Please try calling us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A1128]/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
            <div className="flex items-center gap-4">
              {!isComplete && step > 0 && (
                <button onClick={handleBack} className="text-slate-400 hover:text-[#4041d1] transition-colors">
                  <FaArrowLeft className="w-5 h-5" />
                </button>
              )}
              <span className="font-raleway font-bold text-slate-800 text-sm tracking-widest uppercase">
                {isComplete ? "Review Complete" : "Clinical Assessment"}
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-rose-500 transition-colors bg-slate-50 rounded-full">
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          {!isComplete && (
            <div className="w-full bg-slate-100 h-1.5">
              <motion.div
                className="h-full bg-[#4041d1]"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          {/* Content Area */}
          <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                /* QUESTION SCREEN */
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  <span className="text-[#4041d1] font-bold font-inter text-sm mb-3 block">
                    Question {step + 1} of {questions.length}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
                    {questions[step].title}
                  </h2>

                  <div className="grid gap-3">
                    {questions[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelect(option)}
                        className={`p-5 rounded-xl border-2 text-left font-inter font-medium text-lg transition-all duration-200 group flex justify-between items-center ${
                          answers[step] === option
                            ? "border-[#4041d1] bg-blue-50/50 text-[#4041d1]"
                            : "border-slate-100 text-slate-700 hover:border-[#4041d1]/30 hover:bg-slate-50"
                        }`}
                      >
                        {option}
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          answers[step] === option ? "border-[#4041d1] bg-[#4041d1]" : "border-slate-300 group-hover:border-[#4041d1]/50"
                        }`}>
                          {answers[step] === option && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {questions[step].note && (
                    <p className="mt-6 text-sm text-slate-500 font-inter italic flex items-center gap-2">
                      <FaUserMd className="text-slate-400" /> {questions[step].note}
                    </p>
                  )}
                </motion.div>
              ) : !isSubmitted ? (
                /* FORM SCREEN */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">
                      Assessment Complete
                    </h2>
                    <p className="text-slate-600 font-inter leading-relaxed max-w-md mx-auto">
                      Based on your answers, there are non-surgical options we can explore. Enter your details below so Dr Abdi can review your profile.
                    </p>
                  </div>

                  <form onSubmit={handleFinalSubmit} className="max-w-md mx-auto space-y-4">
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900"
                      />
                    </div>
                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900"
                      />
                    </div>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-6 w-full py-4 bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold font-inter transition-all duration-300 shadow-xl shadow-[#4041d1]/20 active:scale-95 text-lg disabled:opacity-70 disabled:active:scale-100 flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Submit to Doctor"
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-4 font-inter">
                      Your details are strictly confidential and completely secure.
                    </p>
                  </form>
                </motion.div>
              ) : (
                /* SUCCESS SCREEN */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <FaCheckCircle className="text-green-500 text-5xl" />
                  </motion.div>
                  <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">
                    Request Received
                  </h2>
                  <p className="text-slate-600 font-inter text-lg leading-relaxed mb-8 max-w-sm mx-auto">
                    Thank you, {formData.name.split(' ')[0]}. Our clinical team will review your assessment and be in touch shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
