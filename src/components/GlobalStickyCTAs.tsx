"use client";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function GlobalStickyCTAs() {
  const handleAction = (e: React.MouseEvent) => {
    e.preventDefault();
    // This triggers your global contact drawer to open!
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
  };

  return (
    <>
      {/* --- DESKTOP FLOATING BUTTONS (Hidden on Mobile) --- */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-50 flex-col gap-4">
        <button
          onClick={handleAction}
          className="w-14 h-14 bg-[#4041d1] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="Contact Us"
        >
          <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" />
        </button>
        <a
          href="https://wa.me/447990364147"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* --- MOBILE STICKY BOTTOM BAR (Hidden on Desktop) --- */}
      {/* Note: pb-[max(12px,env(safe-area-inset-bottom))] protects it from the iPhone home bar */}
      <div className="fixed bottom-0 left-0 w-full z-[99999] bg-white border-t border-slate-200 p-3 lg:hidden flex gap-3 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.15)] pb-[max(12px,env(safe-area-inset-bottom))]">
        <button 
          onClick={handleAction} 
          style={{ backgroundColor: '#4041d1', color: '#ffffff' }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter border-none"
        >
          Book Consult
        </button>
        <a 
          href="https://wa.me/447990364147" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ backgroundColor: '#25D366', color: '#ffffff' }}
          className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-md active:scale-95 flex items-center justify-center gap-2 font-inter no-underline border-none"
        >
          <FaWhatsapp style={{ fontSize: '1.25rem', color: '#ffffff' }} /> 
          <span style={{ color: '#ffffff' }}>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
