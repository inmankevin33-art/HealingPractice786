"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaVenusMars, FaSyringe, FaRunning, FaSmile } from "react-icons/fa";

const services = [
  {
    title: "Facial Aesthetics",
    description: "Natural skin rejuvenation using Polynucleotides, Vampire Facials, and Botox.",
    icon: FaSmile,
    link: "/facial-aesthetics",
    color: "bg-rose-50 text-rose-600",
  },
  {
    title: "Joint Pain Relief",
    description: "Non-surgical injections (PRP, Steroid, Ostenil) for arthritis and sports injuries.",
    icon: FaRunning,
    link: "/joint-injections",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Hair Restoration",
    description: "Stop hair loss and stimulate regrowth with advanced PRP and Exosome therapies.",
    icon: FaSyringe, 
    link: "/hair-restoration",
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Sexual Rejuvenation",
    description: "Specialist P-Shot® and O-Shot® treatments to restore intimacy, sensitivity, and function.",
    icon: FaVenusMars, 
    link: "/sexual-rejuvenation",
    color: "bg-blue-50 text-[#4041d1]",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-raleway font-bold text-slate-900 mb-6 tracking-tight"
          >
            Our Core Treatments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed font-inter"
          >
            We specialize in regenerative medicine, using your body&apos;s natural healing abilities 
            alongside medically proven aesthetic and pain-relief protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="relative flex items-center h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* INTERACTIVITY: Entire card is now a Link */}
              <Link href={service.link} className="w-full h-full block">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#4041d1]/20 transition-all duration-500 flex flex-col h-full group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 text-2xl transition-transform group-hover:scale-110`}>
                    <service.icon />
                  </div>
                  
                  {/* FONT ADJUSTMENT: Raleway Bold */}
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-4 group-hover:text-[#4041d1] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-inter">
                    {service.description}
                  </p>
                  
                  {/* BRAND COLOR LOCK: #4041d1 */}
                  <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#4041d1] group-hover:gap-3 transition-all">
                    View Treatments <FaArrowRight className="ml-2 w-3 h-3 transition-transform" />
                  </div>
                </motion.div>
              </Link>

              {/* VISUAL ENHANCEMENT: Directional Arrows between cards (Desktop) */}
              {index < services.length - 1 && (
                <div className="hidden lg:flex absolute -right-6 z-10 opacity-20 group-hover:opacity-100 transition-opacity">
                   <FaArrowRight className="text-slate-400 w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
