"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Flower } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); // Reset submenu when closing/opening
  };

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
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
  }, [isMenuOpen]);

  const menuItems = [
    {
      name: "Hair Restoration",
      href: "/hair-restoration",
      hasDropdown: false,
    },
    {
      name: "Sexual Rejuvenation",
      href: "/sexual-rejuvenation",
      hasDropdown: false,
    },
    {
      name: "Joint Injections",
      href: "/joint-injections",
      hasDropdown: false,
    },
    {
      name: "Facial Aesthetics",
      href: "/facial-aesthetics",
      hasDropdown: false,
    },
    {
      name: "Prices",
      href: "/prices",
      hasDropdown: false,
    },
    {
      name: "Locations",
      href: "#",
      hasDropdown: true,
      subItems: [
        { name: "St Albans (Main Clinic)", href: "/" },
        { name: "Birmingham Clinic", href: "/birmingham/hair-restoration" },
      ],
    },
    { name: "Blog", hasDropdown: false, href: "/blog" },
    { name: "Contact", hasDropdown: false, href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className="text-base inline-flex items-center gap-1 tracking-tight font-medium text-black">
                  <Flower className="w-5 h-5 text-blue-700" /> Healing-PRP
                  Clinics
                </div>
              </Link>
            </div>

            {/* Phone number and Menu */}
            <div className="flex items-center space-x-2">
              <span className="hidden md:inline text-[13px] font-medium font-raleway text-slate-800">
                MENU
              </span>
              <button
                onClick={toggleMenu}
                className="p-2 cursor-pointer hover:bg-[var(--brand-blue-50)] rounded-md transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 text-slate-700" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white top-16 lg:top-20 overflow-y-auto"
          >
            <div className="flex flex-col justify-start items-start min-h-full py-8 md:py-12">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.nav
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex flex-col"
                    >
                      <div className="flex items-center space-x-3">
                        {item.hasDropdown ? (
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className="flex items-center gap-3 text-2xl lg:text-3xl font-raleway text-slate-900 hover:text-[var(--brand-blue)] transition-colors duration-300"
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 lg:h-6 lg:w-6 text-slate-500 transition-transform duration-300 ${
                                activeSubmenu === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-2xl lg:text-3xl font-raleway text-slate-900 hover:text-[var(--brand-blue)] transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>

                      {/* Dropdown / Sub-items */}
                      <AnimatePresence>
                        {item.hasDropdown &&
                          activeSubmenu === item.name &&
                          item.subItems && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 mt-2 space-y-3 border-l-2 border-gray-100 ml-2"
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="block text-lg lg:text-xl font-inter text-slate-600 hover:text-[var(--brand-blue)] py-1"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
