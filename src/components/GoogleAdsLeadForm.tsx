"use client";

import { useState } from "react";
import { FaWhatsapp, FaLock, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface GoogleAdsLeadFormProps {
  locationName: string; // e.g., "Birmingham" or "St Albans"
  conversionLabel: string; // e.g., "AW-18130686557/YOUR_BIRMINGHAM_LABEL"
  treatment?: string; // Default is "Erectile Dysfunction"
}

export default function GoogleAdsLeadForm({ 
  locationName, 
  conversionLabel, 
  treatment = "Erectile Dysfunction" 
}: GoogleAdsLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const CLINIC_WHATSAPP_NUMBER = "447990364147"; 

  const handleWhatsAppClick = () => {
    // --- GOOGLE ADS CONVERSION TRACKING (WHATSAPP CLICK) ---
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: "whatsapp_button_clicked",
        });
      }
    }

    const message = `Hi Dr. Abdi, I would like to book a private ${treatment} consultation in ${locationName}.`;
    const waUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage(""); 

    // --- GOOGLE ADS CONVERSION TRACKING (FORM SUBMIT) ---
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag('event', 'conversion', {
          'send_to': conversionLabel // Uses the dynamic label passed to the component
        });
      }
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Email service unconfigured.");
      setErrorMessage("System error. Please use the WhatsApp button instead.");
      setIsSubmitting(false);
      return;
    }

    try {
      emailjs.init(publicKey);
      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: "google-ads@healing-prp.co.uk", 
        phone: phone,
        treatment: treatment,
        clinic_location: `${locationName} (Google Ads)`, 
        message: `GOOGLE ADS LEAD: Requesting a private ${treatment} callback in ${locationName}. Please call them directly at ${phone}.`,
      });

      setIsSuccess(true);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage("Failed to send. Please try clicking the WhatsApp button instead.");
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
          Thank you. Dr. Abdi or our clinic team will call you shortly on the number provided to discuss your consultation in complete privacy.
        </p>
      </div>
    );
  }

  return (
    <div id="google-lead-form" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl max-w-lg mx-auto w-full relative z-10 scroll-mt-6">
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
          <FaLock className="w-3 h-3" /> 100% Confidential
        </span>
        <h3 className="text-2xl font-bold font-raleway text-slate-900 mb-2">
          Request a Private Callback
        </h3>
        <p className="text-slate-500 text-sm font-inter">
          Leave your details below or message us directly on WhatsApp for a fast, discreet response.
        </p>
      </div>

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

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-bold text-center font-inter">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#4041d1] hover:bg-[#2a2bb8] text-white py-4 rounded-xl font-bold font-inter transition-all duration-300 shadow-[0_0_15px_rgba(64,65,209,0.2)] hover:shadow-[0_0_25px_rgba(64,65,209,0.4)] active:scale-95 disabled:opacity-70 mt-2"
        >
          {isSubmitting ? "Sending..." : "Request Call"}
          {!isSubmitting && <FaPhoneAlt className="w-3.5 h-3.5" />}
        </button>
      </form>

      <div className="mt-5 text-center">
        <p className="text-[10px] leading-relaxed text-slate-400 font-inter">
          This is a private, doctor-led service. Initial discussions may be free; structural treatments are charged separately. Suitability, risks, and fees are discussed prior to treatment.
        </p>
      </div>
    </div>
  );
}
