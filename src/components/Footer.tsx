"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Simplified Modal scroll lock
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  // Unified Scroll/Navigate Function
  const handleContactClick = (e: React.MouseEvent) => {
    if (pathname === "/" || pathname === "/birmingham") {
      e.preventDefault();
      const section = document.getElementById("contact-form-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (isDesktop) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const contactMethods = [
    { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/447990364147" },
    { icon: FaEnvelope, label: "Email", href: "mailto:info@healing-prp.co.uk" },
    { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/Healing_Prp" },
  ];

  const treatments = [
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Health Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact", isContact: true },
  ];

  return (
    <footer className="bg-[#0f172a] text-white font-inter border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          // 1. Reduced vertical padding: py-12 (was 16)
          className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center mb-5 gap-2.5">
              <div className="relative h-8 w-8 flex-shrink-0">
                <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" />
              </div>
              <h3 className="font-raleway text-lg font-bold tracking-tight">
                Healing-PRP Clinics
              </h3>
            </div>
            <p className="text-slate-400 mb-6 text-xs leading-relaxed max-w-xs">
              Evidence‑based treatments using your own Platelet‑Rich Plasma
              (PRP) in a discreet, professional medical setting.
            </p>
            <div className="flex gap-3">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={method.label === "WhatsApp" ? handleWhatsAppClick : undefined}
                  className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-all duration-300"
                  aria-label={method.label}
                >
                  <method.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-5">
              Our Treatments
            </h4>
            <ul className="space-y-3">
              {treatments.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={item.href} 
                    onClick={item.isContact ? handleContactClick : undefined}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Birmingham Location */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-5">
              Birmingham Clinic
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500/70" />
                <p>Advanced Medical Hub,<br />Birmingham B1 2JP</p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="w-3.5 h-3.5 flex-shrink-0 text-blue-500/70" />
                <a href="tel:07990364147" className="hover:text-white transition-colors">+44 7990 364147</a>
              </div>
            </div>
          </motion.div>

          {/* St Albans Location */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-5">
              St Albans Clinic
            </h4>
            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-blue-500/70" />
                <p>Wellness Center,<br />St Albans AL1 3UR</p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="w-3.5 h-3.5 flex-shrink-0 text-blue-500/70" />
                <a href="tel:07990364147" className="hover:text-white transition-colors">+44 7990 364147</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          // 2. Reduced padding: py-6 (was 8)
          className="border-t border-white/5 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="text-[10px] text-slate-500" variants={itemVariants}>
            © 2026 Healing-PRP Clinics. All rights reserved.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-5" variants={itemVariants}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((text, idx) => (
              <Link
                key={idx}
                href={`/${text.toLowerCase().replace(/ /g, "-")}`}
                className="text-[10px] text-slate-500 hover:text-white transition-colors"
              >
                {text}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp Modal - Refined sizing */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0f172a]/80 z-[60] backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-[2rem] p-8 max-w-sm w-full pointer-events-auto shadow-2xl relative text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Connect Instantly</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">Scan to message our clinical team</p>
                <div className="bg-slate-50 p-4 rounded-2xl mb-6 inline-block border border-slate-100">
                  <Image src="/qrcode.png" alt="WhatsApp QR Code" width={160} height={160} />
                </div>
                <a
                  href="https://web.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:shadow-lg transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Open WhatsApp Web
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </footer>
  );
}
