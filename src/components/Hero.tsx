"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);

    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
    };
  }, [isModalOpen]);

  const handleLearnAboutPRP = () => {
    router.push("/sexual-rejuvenation");
    // Scroll to PRP section after navigation
    setTimeout(() => {
      const element = document.getElementById("what-is-prp");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
    // On mobile, let the default link behavior work
  };

  return (
    <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{ backgroundImage: "url('/mobilehero.png')" }}
        ></div>
        {/* Desktop background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
          style={{
            backgroundImage: "url('/herobg.jpg')",
          }}
        ></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex md:mt-30 md:mt-8 mt-20 h-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Content */}
            <div className="">
              {/* Location Tag */}
              <div
                className={`inline-block md:px-4 px-2 md:py-2 py-1 bg-[var(--brand-blue)]  text-white rounded-full text-xs mb-2 font-medium transition-opacity transition-transform duration-1000 delay-200 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                St Albans • Hertfordshire • London • Midlands
              </div>

              {/* Main Heading */}
              <h1
                className={`md:text-3xl font-medium text-2xl font-raleway text-white leading-tight transition-opacity transition-transform duration-1000 delay-300 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Natural Regeneration Treatments <br /> with PRP (
                <a
                  href="#prp-explanation"
                  className="underline decoration-transparent hover:decoration-white cursor-pointer"
                >
                  Platelet‑Rich Plasma
                </a>
                )
              </h1>
              <h2
                className={`mt-1 md:text-lg text-base text-white font-semibold leading-relaxed transition-opacity transition-transform duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Confidential Care by a GMC Registered Experienced Doctor
              </h2>
              {/* Description */}
              <p
                className={`mt-1 text-sm md:text-base text-white leading-relaxed transition-opacity transition-transform duration-1000 delay-500 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Evidence-based, non-surgical treatments for sexual wellness,
                facial aesthetics & hair, and joint pain — with clinics in St
                Albans and Birmingham.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col mt-3 sm:flex-row gap-4 transition-opacity transition-transform duration-1000 delay-800 ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                {isDesktop ? (
                  <button
                    onClick={handleWhatsAppClick}
                    className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Book on WhatsApp
                  </button>
                ) : (
                  <a
                    href="https://wa.me/447990364147"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 flex items-center justify-center text-sm cursor-pointer bg-[var(--brand-blue)] hover:bg-[var(--brand-blue-dark)] text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Book on WhatsApp
                  </a>
                )}
                <Link
                  href="/contact"
                  className="px-6 py-3 hidden md:inline-flex gap-2 items-center cursor-pointer text-sm border-2 border-white/30 backdrop-blur-md bg-white/10 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white/20 hover:border-white/40"
                >
                  <FaEnvelope className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>

              {/* Feature Banner - Removed from here, moved to bottom */}
            </div>

            {/* Right Side - Signature Treatments */}
            <div
              className={`transition-opacity transition-transform duration-1000 delay-1000 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="p-8 bg-white/90 -mt-6 md:mt-0 rounded-lg border border-slate-200">
                <h2 className="md:text-2xl text-lg font-raleway text-slate-900 mb-6 transition-colors">
                  Our Signature Treatments
                </h2>
                <ul className="space-y-3 text-slate-600 text-sm ">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      P-Shot® (Priapus Shot) for erectile dysfunction &
                      Peyronie&apos;s
                    </span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Exomine® P-Shot — premium, exosome-enhanced PRP</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>O-Shot® for female sexual wellness</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Shockwave Therapy for ED & Peyronie&apos;s</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>PRP Hair Restoration for thinning hair</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Polynucleotides & Botox aesthetics</span>
                  </li>
                  <div className="h-px bg-slate-200"></div>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[var(--brand-blue)] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Joint Injections — PRP & Steroid</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Banner at Bottom */}
      <div
        className={`md:block absolute hidden bottom-0 left-0 right-0 bg-[var(--brand-blue)] transition-opacity transition-transform duration-1000 delay-1100 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-xs">
                  GMC-registered doctor
                </div>
                <div className="text-blue-100 text-xs">
                  Over 10 years experience
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-xs">
                  Drug-free options
                </div>
                <div className="text-blue-100 text-xs">
                  Your own PRP — no hormones
                </div>
              </div>
              <div className="text-center border-r border-[var(--brand-blue-100)]">
                <div className="text-white font-semibold text-xs">
                  Discreet location
                </div>
                <div className="text-blue-100 text-xs">
                  St Albans & Birmingham
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-semibold text-xs">
                  Flexible appointments
                </div>
                <div className="text-blue-100 text-xs">
                  Private 1:1 consultations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp QR Code Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-5 h-5 text-slate-600" />
                </button>

                {/* Modal Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-raleway font-semibold text-slate-900 mb-2">
                    Scan to Chat on WhatsApp
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Use your phone camera to scan the QR code
                  </p>

                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-xl border-2 border-slate-200 inline-block mb-6">
                    <img
                      src="/qrcode.png"
                      alt="WhatsApp QR Code"
                      className="w-64 h-64"
                    />
                  </div>

                  {/* WhatsApp Web Button */}
                  <a
                    href="https://web.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg font-medium transition-all duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Open WhatsApp Web
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
