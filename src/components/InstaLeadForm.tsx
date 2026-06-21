"use client";

import { useState } from "react";
import { FaWhatsapp, FaLock, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";

interface InstaLeadFormProps {
  campaignName: string;
}

export default function InstaLeadForm({ campaignName }: InstaLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // IMPORTANT: Replace this with your clinic's actual WhatsApp Business number (including country code, no + or spaces)
  const CLINIC_WHATSAPP_NUMBER = "447990364147"; 

  const handleWhatsAppClick = () => {
    // 1. Fire Meta Pixel Lead Event (Strict TypeScript compliant)
    if (typeof window !== "undefined") {
      const w = window as Window & { fbq?: (...args: unknown[]) => void };
      if (w.fbq) {
        w.fbq("track", "Lead", {
          content_name: campaignName,
          lead_type: "WhatsApp",
        });
      }
    }

    // 2. Open WhatsApp with pre-filled message
    const message = `Hi Healing-PRP, I would like some more information about the ${campaignName}.`;
    const waUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 1. Fire Meta Pixel Lead Event
    if (typeof window !== "undefined") {
      const w = window as Window & { fbq?: (...args: unknown[]) => void };
      if (w.fbq) {
        w.fbq("track", "Lead", {
          content_name: campaignName,
          lead_type: "Form Submission",
        });
      }
    }

    try {
      // 2. Send the "kitchen sink" payload to satisfy the API validation
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          firstName: name, // Often required instead of 'name'
          lastName: "Instagram Lead", // Often required
          phone: phone,
          email: "instagram-lead@healing-prp.co.uk",
          service: campaignName,
          treatment: campaignName,
          location: "Instagram Campaign", // Often required for multi-clinic setups
          message: `URGENT CALLBACK REQUEST: This lead came from the Instagram Landing Page for ${campaignName}. Please call them at ${phone}.`,
          source: "Instagram Landing Page",
        }),
      });

      // 3. Capture the exact error message from the server if it fails
      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("SERVER REJECTION DETAILS:", errorDetails);
        throw new Error(`API rejected submission: ${response.status}`);
      }

      setIsSuccess(true);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please check the developer console or try clicking the WhatsApp button instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-8 text-center shadow-sm max-w-lg mx-auto w-full">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <FaCheckCircle className="text-green-600 text-3xl" />
        </div>
        <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-2">Request Received</h3>
        <p className="text-slate-600 font-inter">
          Thank you. Our clinic team will call you shortly on the number provided to discuss your consultation in complete privacy.
        </p>
      </div>
    );
  }

  return (
    <div id="insta-lead-form" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl max-w-lg mx-auto w-full relative z-10 scroll-mt-24">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
          <FaLock className="w-3 h-3" /> 100% Confidential
        </span>
        <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-2">
          Request a Callback
        </h3>
        <p className="text-slate-500 text-sm font-inter">
          Leave your details below or message us directly on WhatsApp for a fast, discreet response.
        </p>
      </div>

      {/* WHATSAPP BUTTON (Primary focus for mobile users) */}
      <button
        onClick={handleWhatsAppClick}
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-white py-4 rounded-xl font-bold font-inter transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mb-6"
      >
        <FaWhatsapp className="text-2xl" />
        Chat on WhatsApp
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span className="text-slate-400 text-xs font-bold uppercase font-inter">Or request a call</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>

      {/* MICRO-FORM WITH AUTOFILL ENABLED */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5 font-inter">First Name</label>
          <input
            type="text"
            id="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900 placeholder:text-slate-400"
            placeholder="John"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5 font-inter">Phone Number</label>
          <input
            type="tel"
            id="phone"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900 placeholder:text-slate-400"
            placeholder="07700 900000"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#4041d1] hover:bg-[#2a2bb8] text-white py-4 rounded-xl font-bold font-inter transition-all duration-300 shadow-[0_0_15px_rgba(64,65,209,0.2)] hover:shadow-[0_0_25px_rgba(64,65,209,0.4)] active:scale-95 disabled:opacity-70 mt-2"
        >
          {isSubmitting ? "Sending..." : "Request Call"}
          {!isSubmitting && <FaPhoneAlt className="w-3.5 h-3.5" />}
        </button>
      </form>
    </div>
  );
}
