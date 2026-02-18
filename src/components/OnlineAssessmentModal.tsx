"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaCheckCircle, FaUserMd } from "react-icons/fa";

interface OnlineAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnlineAssessmentModal({ isOpen, onClose }: OnlineAssessmentModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [isComplete, setIsComplete] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const questions = [
    {
      id: 1,
      title: "How often can you achieve an erection?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 2,
      title: "Do you have a problem maintaining an erection strong enough for penetration?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 3,
      title: "On a scale of 0 - 10 (0 being impotent, 10 being 'rock hard'), how strong is your average erection?",
      type: "scale",
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    {
      id: 4,
      title: "Are you able to satisfy your partner during sex?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 5,
      title: "If you lose your erection, are you able to get it back?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 6,
      title: "Do you wake up with morning erections?",
      options: ["Always", "Sometimes", "Rarely", "Never"],
    },
    {
      id: 7,
      title: "When did your erection issues start?",
      options: ["All my life", "Suddenly", "Gradually", "With a new partner"],
    },
    {
      id: 8,
      title: "Do you have a diagnosed heart condition?",
      options: ["Yes", "No"],
      note: "This helps our doctors determine pharmacological suitability.",
    },
  ];

  const handleSelect = (answer: string | number) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    
    // Tiny delay so the user sees their click register before moving
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

  const handleFinalSubmit = () => {
    onClose();
    // Reset state for next time
    setTimeout(() => {
      setStep(0);
      setIsComplete(false);
      setAnswers({});
      // Trigger your existing contact drawer
      window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Dark frosted glass backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A1128]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
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

                  {/* Standard Options */}
                  {questions[step].type !== "scale" ? (
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
                  ) : (
                    /* Scale Options (0-10) */
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
                      {questions[step].options.map((num) => (
                        <button
                          key={num}
                          onClick={() => handleSelect(num)}
                          className={`aspect-square rounded-xl border-2 font-inter font-bold text-lg flex items-center justify-center transition-all duration-200 ${
                            answers[step] === num
                              ? "border-[#4041d1] bg-[#4041d1] text-white scale-105 shadow-lg shadow-blue-900/20"
                              : "border-slate-100 text-slate-600 hover:border-[#4041d1]/50 hover:text-[#4041d1]"
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  {questions[step].note && (
                    <p className="mt-6 text-sm text-slate-500 font-inter italic flex items-center gap-2">
                      <FaUserMd className="text-slate-400" /> {questions[step].note}
                    </p>
                  )}
                </motion.div>
              ) : (
                /* Completion Screen */
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaCheckCircle className="text-green-500 text-4xl" />
                  </div>
                  <h2 className="text-3xl font-raleway font-bold text-slate-900 mb-4">
                    Assessment Complete
                  </h2>
                  <p className="text-slate-600 font-inter text-lg leading-relaxed mb-8 max-w-md mx-auto">
                    Thank you. Based on your profile, you are an excellent candidate for a clinical consultation. Our GMC-registered doctor will review these details to build your bespoke treatment plan.
                  </p>
                  <button
                    onClick={handleFinalSubmit}
                    className="px-10 py-4 w-full sm:w-auto bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold font-inter transition-all duration-300 shadow-xl shadow-[#4041d1]/20 active:scale-95 text-lg"
                  >
                    Secure My Consultation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
