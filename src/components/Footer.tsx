"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  // Trigger the Contact Drawer
  const handleContactClick = (e: React.MouseEvent) => {
    // List of pages where the drawer exists
    const drawerPages = [
      "/", 
      "/birmingham", 
      "/facial-aesthetics", 
      "/hair-restoration", 
      "/joint-injections", 
      "/sexual-rejuvenation",
      "/birmingham/facial-aesthetics",
      "/birmingham/hair-restoration",
      "/birmingham/joint-injections",
      "/birmingham/sexual-rejuvenation"
    ];
    
    if (drawerPages.includes(pathname || "")) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent("open-contact-drawer"));
      const section = document.getElementById("contact-form-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
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
    { 
      icon: FaEnvelope, 
      label: "Email", 
      href: "mailto:info@healing-prp.co.uk",
      text: "info@healing-prp.co.uk" 
    },
    { 
      icon: FaInstagram, 
      label: "Instagram", 
      href: "https://www.instagram.com/Healing_Prp",
      text: "@Healing_Prp" 
    },
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

            {/* Visible Contact List */}
            <div className="flex flex-col gap-4 mt-6">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                  aria-label={method.label}
                >
                  {/* BRAND COLOR LOCK: Hover bg-[#4041d1] */}
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-[#4041d1] transition-all duration-300">
                    <method.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-white transition-colors truncate">
                    {method.text}
                  </span>
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
                {/* BRAND COLOR LOCK: Text-[#4041d1] */}
                <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#4041d1]/80" />
                <p>38 Harborne Rd,<br />Edgbaston B15 3EB</p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="w-3.5 h-3.5 flex-shrink-0 text-[#4041d1]/80" />
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
                <FaMapMarkerAlt className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#4041d1]/80" />
                <p>21 Victoria Street,<br />St Albans AL1 3JJ</p>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="w-3.5 h-3.5 flex-shrink-0 text-[#4041d1]/80" />
                <a href="tel:07990364147" className="hover:text-white transition-colors">+44 7990 364147</a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
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
    </footer>
  );
}
