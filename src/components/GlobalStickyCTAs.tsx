"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function GlobalStickyCTAs() {
  const openContactForm = () => {
    // This fires the event to open your slide-out drawer globally
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // Fallback: If there's an embedded form on the page, it scrolls to it
    const element = document.getElementById("contact-form-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Bubble */}
      <a 
        href="https://wa.me/447990364147" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Speak to a Specialist Button */}
      <button 
        onClick={openContactForm}
        className="flex items-center gap-3 px-6 py-3.5 bg-[#4041d1] text-white rounded-full font-bold text-[11px] shadow-2xl hover:bg-[#2a2bb8] transition-colors group pointer-events-auto uppercase tracking-wider"
      >
        <Phone className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
        Speak to a Specialist
      </button>
    </div>
  );
}
