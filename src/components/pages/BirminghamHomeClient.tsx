"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaUserMd, FaShieldAlt, FaStar } from "react-icons/fa";
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
      desc: "Advanced PRP & Exosome treatments to stop hair loss and stimulate regrowth.",
      link: "/birmingham/hair-restoration",
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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
          <img
            src="/hero_img.png"
            alt="Healing-PRP Birmingham Clinic"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
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

      {/* Services Grid (Matches Main Home Style) */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-raleway text-slate-900 mt-2">
              Our Core Treatments
            </h2>
            <p className="text-slate-600 text-lg mt-4 max-w-3xl mx-auto">
              We specialize in regenerative medicine, bringing Harley Street expertise to Birmingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-[var(--brand-blue)] font-semibold group-hover:gap-2 transition-all duration-300"
                >
                  View Treatments <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-20 bg-slate-50">
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
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-medium">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155422.378939223!2d-2.000720546990597!3d52.47756475730302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aee77c7e!2sBirmingham!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
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
