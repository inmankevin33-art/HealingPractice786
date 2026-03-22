"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight, FaVenusMars, FaSyringe, FaRunning, FaSmile } from "react-icons/fa";

export default function ServiceOverview() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const prefix = isBirmingham ? "/birmingham" : "";

  // We define services inside the component now so they can access the 'prefix' variable dynamically
  const services = [
    {
      title: "Facial Aesthetics",
      description: "Natural skin rejuvenation using Polynucleotides, Vampire Facials, and Botox.",
      icon: FaSmile,
      link: `${prefix}/facial-aesthetics`,
      color: "bg-rose-50 text-rose-600",
      subLinks: [
        { name: "Polynucleotides", href: `${prefix}/facial-aesthetics` },
        { name: "Vampire Facials", href: `${prefix}/facial-aesthetics` }
      ]
    },
    {
      title: "Joint Pain Relief",
      description: "Non-surgical injections (PRP, Steroid, Ostenil) for arthritis and sports injuries.",
      icon: FaRunning,
      link: `${prefix}/joint-injections`,
      color: "bg-indigo-50 text-indigo-600",
      subLinks: [
        { name: "PRP for Joints", href: `${prefix}/joint-injections` },
        { name: "Sports Injuries", href: `${prefix}/joint-injections` }
      ]
    },
    {
      title: "Hair Restoration",
      description: "Stop hair loss and stimulate regrowth with advanced PRP and Exosome therapies.",
      icon: FaSyringe, 
      link: `${prefix}/hair-restoration`,
      color: "bg-teal-50 text-teal-600",
      subLinks: [
        { name: "PRP Hair Therapy", href: `${prefix}/hair-restoration` },
        { name: "Exosomes", href: `${prefix}/hair-restoration` }
      ]
    },
    {
      title: "Sexual Rejuvenation",
      description: "Specialist P-Shot and O-Shot treatments to restore intimacy, sensitivity, and function.",
      icon: FaVenusMars, 
      link: `${prefix}/sexual-rejuvenation`,
      color: "bg-blue-50 text-[#4041d1]",
      // THE SEO GOLDMINE: Direct links to specific YMYL pages
      subLinks: [
        { name: "ED", href: `${prefix}/erectile-dysfunction` },
        { name: "P-Shot", href: `${prefix}/p-shot` },
        { name: "O-Shot", href: `${prefix}/o-shot` },
        { name: "Peyronie's", href: `${prefix}/peyronies-disease` },
        { name: "PE", href: `${prefix}/premature-ejaculation` }
      ]
    },
  ];

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
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#4041d1]/20 transition-all duration-500 flex flex-col h-full group w-full"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-8 text-2xl transition-transform group-hover:scale-110`}>
                  <service.icon />
                </div>
                
                {/* Title is now a link */}
                <Link href={service.link}>
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 hover:text-[#4041d1] transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-inter">
                  {service.description}
                </p>

                {/* NEW SEO SUB-LINKS (The "Pills") */}
                <div className="flex flex-wrap gap-2 mb-8 flex-grow">
                  {service.subLinks.map((subLink, idx) => (
                    <Link 
                      key={idx} 
                      href={subLink.href}
                      className="inline-flex items-center justify-center text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-3 py-1.5 rounded-md hover:bg-[#4041d1] hover:text-white transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
                
                {/* View Treatments Button */}
                <Link href={service.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#4041d1] group-hover:gap-3 transition-all mt-auto w-max">
                  View Treatments <FaArrowRight className="ml-2 w-3 h-3 transition-transform" />
                </Link>
              </motion.div>

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
