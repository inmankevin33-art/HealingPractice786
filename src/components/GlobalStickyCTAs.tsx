"use client";

import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function GlobalStickyCTAs() {
  const openContactForm = () => {
    // This fires the event to open your slide-out drawer globally
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    
    // Smooth scroll with offset to perfectly center the form
    const section = document.getElementById("contact-form-section");
    if (section) {
      // Use a negative number here to scroll deeper. 
      // If the form is still slightly too low, change this to -60 or -80!
      const headerOffset = -40; 
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] flex flex-col items-end gap-2 md:gap-3 pointer-events-none">
      {/* WhatsApp Bubble (Slimmer on mobile) */}
      <a 
        href="https://wa.me/447990364147" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
      >
        <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
      </a>

      {/* Speak to a Specialist Button (Translucent blur, tighter padding) */}
      <button 
        onClick={openContactForm}
        className="flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3.5 bg-[#4041d1]/95 backdrop-blur-md text-white rounded-full font-bold text-[10px] md:text-[11px] shadow-2xl hover:bg-[#2a2bb8] transition-all group pointer-events-auto uppercase tracking-wider"
      >
        <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 text-white group-hover:rotate-12 transition-transform" />
        <span className="sm:hidden">Book Consult</span>
        <span className="hidden sm:inline">Book free consultation</span>
      </button>
    </div>
  );
}
