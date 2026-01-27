"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Added for dynamic routing
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
  
  const pathname = usePathname(); // Get current path
  const isBirmingham = pathname?.startsWith("/birmingham"); // Check if in Birmingham section

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Modal scroll lock logic
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
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
  }, [isModalOpen]);

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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const contactMethods = [
    { icon: FaWhatsapp, label: "WhatsApp", value: "+44 7990 364147", href: "https://wa.me/447990364147" },
    { icon: FaEnvelope, label: "Email", value: "info@healing-prp.co.uk", href: "mailto:info@healing-prp.co.uk" },
    { icon: FaInstagram, label: "Instagram", value: "@healing_prp", href: "https://www.instagram.com/Healing_Prp" },
  ];

  // Dynamic Treatment Links - Synchronized with Header logic
  const treatments = [
    { name: "Sexual Rejuvenation", href: isBirmingham ? "/birmingham/sexual-rejuvenation" : "/sexual-rejuvenation" },
    { name: "Joint Injections", href: isBirmingham ? "/birmingham/joint-injections" : "/joint-injections" },
    { name: "Facial Aesthetics", href: isBirmingham ? "/birmingham/facial-aesthetics" : "/facial-aesthetics" },
    { name: "Health Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center mb-6 gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                <Image src="/Logo2.png" alt="Healing-PRP Logo" fill className="object-contain" />
              </div>
              <h3 className="font-raleway text-xl font-semibold tracking-tight">
                Healing-PRP Clinics
              </h3>
            </div>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Evidence‑based treatments using your own Platelet‑Rich Plasma
              (PRP) and adjunct therapies in a discreet, professional medical setting.
            </p>
            <div className="flex gap-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={method.label === "WhatsApp" ? handleWhatsAppClick : undefined}
                  className="p-2.5 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  aria-label={method.label}
                >
                  <method.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Now Dynamic */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
              Our Treatments
            </h4>
            <ul className="space-y-4">
              {treatments.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Birmingham Location */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
              Birmingham Clinic
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Advanced Medical Hub,<br />Birmingham B1 2JP</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:07990364147" className="hover:text-white transition-colors">+44 7990 364147</a>
              </div>
            </div>
          </motion.div>

          {/* St Albans Location */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
              St Albans Clinic
            </h4>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>Wellness Center,<br />St Albans AL1 3UR</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:07990364147" className="hover:text-white transition-colors">+44 7990 364147</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-800 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p className="text-xs text-slate-500" variants={itemVariants}>
            © 2026 Healing-PRP Clinics. All rights reserved.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-6" variants={itemVariants}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Refund Policy"].map((text, idx) => (
              <Link
                key={idx}
                href={`/${text.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                {text}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* WhatsApp QR Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl p-8 max-w-sm w-full pointer-events-auto shadow-2xl relative text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-raleway font-bold text-slate-900 mb-2">Connect Instantly</h3>
                <p className="text-sm text-slate-500 mb-6">Scan to message our clinical team</p>
                <div className="bg-slate-50 p-4 rounded-2xl mb-6 inline-block border border-slate-100">
                  <Image src="/qrcode.png" alt="WhatsApp QR Code" width={192} height={192} />
                </div>
                <a
                  href="https://web.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white rounded-xl font-semibold hover:shadow-lg transition-all"
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
