"use client";

import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaUserMd, 
  FaShieldAlt, 
  FaStar 
} from "react-icons/fa";
import Link from "next/link";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";

export default function BirminghamHomeClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    {
      title: "Hair Restoration",
      desc: "Advanced PRP & Exosome treatments to stop hair loss and stimulate natural regrowth.",
      link: "/birmingham/hair-restoration",
      // image: "/hair-restoration.jpg", // Ensure you have images or remove this line if strictly text
    },
    {
      title: "Sexual Rejuvenation",
      desc: "P-Shot® & O-Shot® therapies for function, sensitivity, and confidence.",
      link: "/birmingham/sexual-rejuvenation",
    },
    {
      title: "Joint Injections",
      desc: "Non-surgical pain relief for arthritis and sports injuries (PRP & Steroid).",
      link: "/birmingham/joint-injections",
    },
    {
      title: "Facial Aesthetics",
      desc: "Natural skin rejuvenation using Polynucleotides and Vampire Facials.",
      link: "/birmingham/facial-aesthetics",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background - Reusing your main hero image for consistency */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
          <img
            src="/hero_img.png"
            alt="Healing-PRP Birmingham Clinic"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/90 backdrop-blur-md rounded-full text-white text-xs font-medium mb-6 uppercase tracking-wider"
            >
              <FaMapMarkerAlt /> Now Open in Birmingham
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-raleway font-bold text-white mb-6 leading-tight"
            >
              Doctor-Led Regenerative Clinic <br />
              <span className="text-blue-100">in Birmingham</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto font-inter leading-relaxed"
            >
              Specialist treatments for Hair Restoration, Sexual Wellness, and Joint Pain. 
              Safe, effective, and non-surgical care in the West Midlands.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#services"
                className="px-8 py-3 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors font-inter"
              >
                View Treatments
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors font-inter"
              >
                Book Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-raleway text-slate-900 mb-6">
                Expert Care, Local to You
              </h2>
              <div className="space-y-4 text-slate-600 font-inter leading-relaxed">
                <p>
                  Healing-PRP Clinics is proud to bring our expert, doctor-led regenerative
                  services to Birmingham. Whether you are seeking hair restoration or 
                  pain relief, you receive the same high standard of CQC-compliant care 
                  that established our reputation.
                </p>
                <p>
                  {/* Fixed: changed body's to body&apos;s */}
                  We focus on regenerative medicine—using the body&apos;s own ability to heal (via PRP and Exosomes) 
                  to treat conditions ranging from hair loss and erectile dysfunction to arthritis and skin aging.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: FaUserMd, text: "GMC-Registered Doctors" },
                  { icon: FaShieldAlt, text: "CQC-Compliant Safety" },
                  { icon: FaStar, text: "Evidence-Based Care" },
                  { icon: FaMapMarkerAlt, text: "Central Birmingham" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[var(--brand-blue)]" />
                    <span className="text-sm font-medium text-slate-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Image Placeholder - Replace with doctor photo or clinic interior later */}
            <div className="relative h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
               <img 
                 src="/herobg.jpg" 
                 alt="Doctor consultation" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--brand-blue)] font-semibold tracking-wider uppercase text-sm">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-raleway text-slate-900 mt-2">
              Available Treatments in Birmingham
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-2xl font-raleway text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-sm leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[var(--brand-blue)] font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  Learn More <FaArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--brand-blue)] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 text-white flex flex-col justify-center">
                <h2 className="text-3xl font-raleway font-bold mb-6">
                  Visit Our Birmingham Clinic
                </h2>
                <p className="text-blue-100 mb-8 font-inter leading-relaxed">
                  Conveniently located for patients across the West Midlands, 
                  including Solihull, Edgbaston, and Sutton Coldfield.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <FaMapMarkerAlt className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Address</h4>
                      <p className="text-blue-100 text-sm">
                        [Insert Full Birmingham Address Here]<br />
                        Birmingham, West Midlands<br />
                        [Postcode]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3 bg-white text-[var(--brand-blue)] rounded-lg font-bold hover:bg-gray-100 transition-colors"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="relative h-[400px] lg:h-auto bg-slate-200">
                 {/* Replace this iframe with your actual Google Maps Embed link for Birmingham */}
                 <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.6200223727823!2d-1.9025!3d52.4862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870000000000000%3A0x0000000000000000!2sBirmingham!5e0!3m2!1sen!2suk!4v1"
                    ></iframe>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
      <Footer />
    </>
  );
}
