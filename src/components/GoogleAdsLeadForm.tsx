"use client";

import { useState } from "react";
import { FaWhatsapp, FaLock, FaPhoneAlt, FaCheckCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";

interface GoogleAdsLeadFormProps {
  defaultTreatment?: string;
  defaultLocation?: string;
  sourcePage?: string;
  conversionLabel?: string; // e.g., "AW-18130686557/YOUR_LABEL"
}

export default function GoogleAdsLeadForm({
  defaultTreatment = "General Enquiry",
  defaultLocation = "",
  sourcePage = "Google Ads Landing Page",
  conversionLabel,
}: GoogleAdsLeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const CLINIC_PHONE_NUMBER = "07990364147";
  const CLINIC_WHATSAPP_NUMBER = "447990364147";

  const handleWhatsAppClick = () => {
    // --- GA4 Tracking for WhatsApp Click ---
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "whatsapp_click", {
          event_category: "lead",
          event_label: defaultTreatment,
          location: defaultLocation,
          page_path: window.location.pathname,
        });

        // Fire Google Ads Conversion on WA Click if label provided
        if (conversionLabel) {
          w.gtag('event', 'conversion', { 'send_to': conversionLabel });
        }
      }
    }

    // Dynamic WhatsApp Message
    const whatsappMessage = `Hello, I would like to enquire about ${defaultTreatment}${
      defaultLocation ? ` in ${defaultLocation}` : ""
    }.`;
    const waUrl = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    
    window.open(waUrl, "_blank");
  };

  const handlePhoneClick = () => {
    // --- GA4 Tracking for Phone Click ---
    if (typeof window !== "undefined") {
      const w = window as Window & { gtag?: (...args: unknown[]) => void };
      if (w.gtag) {
        w.gtag("event", "phone_click", {
          event_category: "lead",
          event_label: defaultTreatment,
          location: defaultLocation,
          page_path: window.location.pathname,
        });
      }
    }
    
    window.location.href = `tel:${CLINIC_PHONE_NUMBER}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage("");

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
        treatment: defaultTreatment,
        clinic_location: defaultLocation || "Not specified",
        message: `New callback request\n\nName: ${name}\nPhone: ${phone}\nBrief symptoms / concern: ${
          concern.trim() ? concern : "Not provided"
        }\nTreatment: ${defaultTreatment}\nLocation: ${defaultLocation}\nSource page: ${sourcePage}\nPage path: ${window.location.pathname}`,
      });

      // --- GA4 & GOOGLE ADS TRACKING ON SUCCESSFUL SUBMIT ---
      if (typeof window !== "undefined") {
        const w = window as Window & { gtag?: (...args: unknown[]) => void };
        if (w.gtag) {
          w.gtag("event", "callback_request_submitted", {
            event_category: "lead",
            event_label: defaultTreatment,
            location: defaultLocation,
            page_path: window.location.pathname,
          });

          // Fire Google Ads Conversion on Form Submit
          if (conversionLabel) {
            w.gtag('event', 'conversion', { 'send_to': conversionLabel });
          }
        }
      }

      setIsSuccess(true);
      setName("");
      setPhone("");
      setConcern("");
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
        <p className="text-slate-600 font-inter text-sm leading-relaxed">
          Thank you. Your callback request has been received. We will contact you discreetly.
        </p>
      </div>
    );
  }

  return (
    <div id="google-lead-form" className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xl max-w-lg mx-auto w-full relative z-10 scroll-mt-6">
      
      {/* --- FORM HEADER --- */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-3">
          <FaLock className="w-3 h-3" /> Strictly Confidential
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-raleway text-slate-900 mb-2">
          Request a Private Callback
        </h3>
        <p className="text-slate-500 text-sm font-inter">
          Leave your details below or message us directly on WhatsApp for a fast, discreet response.
        </p>
      </div>

      {/* --- PRIMARY WHATSAPP BUTTON --- */}
      <button
        onClick={handleWhatsAppClick}
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold font-inter transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mb-6"
      >
        <FaWhatsapp className="text-2xl" />
        Chat or Call on WhatsApp
      </button>

      {/* --- DIVIDER --- */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px bg-slate-200 flex-1"></div>
        <span className="text-slate-400 text-xs font-bold uppercase font-inter">OR REQUEST A CALL</span>
        <div className="h-px bg-slate-200 flex-1"></div>
      </div>

      {/* --- FORM FIELDS --- */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5 font-inter">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900 placeholder:text-slate-400"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5 font-inter">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900 placeholder:text-slate-400"
            placeholder="07700 900000"
          />
        </div>

        <div>
          <label htmlFor="concern" className="block text-sm font-semibold text-slate-700 mb-1.5 font-inter">
            Brief symptoms or concern <span className="text-slate-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="concern"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full min-h-[90px] px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#4041d1] focus:border-[#4041d1] outline-none transition-all font-inter text-slate-900 placeholder:text-slate-400 resize-none"
            placeholder="Briefly tell us what you would like help with, or leave blank and we can discuss privately."
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
          className="w-full flex items-center justify-center gap-2 bg-[#4041d1] hover:bg-[#3334b5] text-white py-4 rounded-xl font-bold font-inter transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 disabled:opacity-70 mt-2"
        >
          {isSubmitting ? "Sending..." : "Request Private Callback"}
        </button>
      </form>

      {/* --- NEW DIRECT CALL OPTION --- */}
      <div className="mt-5 pt-5 border-t border-slate-100">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 font-inter">
          Prefer to speak immediately?
        </p>
        <button
          onClick={handlePhoneClick}
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-[#4041d1] hover:border-[#4041d1] py-3.5 rounded-xl font-bold font-inter transition-all duration-300 active:scale-95"
        >
          <FaPhoneAlt className="text-sm" />
          Call the Clinic
        </button>
      </div>

      {/* --- COMPLIANCE FOOTER NOTE --- */}
      <div className="mt-5 text-center">
        <p className="text-[10px] leading-relaxed text-slate-400 font-inter">
          This is a private, doctor-led service. Initial discussions may be free; treatments, tests and procedures are charged separately if you proceed. Suitability, risks and fees are discussed before any treatment.
        </p>
      </div>
    </div>
  );
}
