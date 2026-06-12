"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaVenusMars, FaSyringe, FaRunning, FaSmile } from "react-icons/fa";

export default function ServiceOverview() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");
  const isHampstead = pathname?.startsWith("/hampstead");
  
  const prefix = isBirmingham ? "/birmingham" : isHampstead ? "/hampstead" : "";

  // --- HAMPSTEAD SPECIFIC SERVICES ---
  const hampsteadServices = [
    {
      title: "Men’s Intimate Health",
      description: "Doctor-led assessment and treatment options for erectile dysfunction, Peyronie’s disease, premature ejaculation and selected male intimate health concerns.",
      icon: FaVenusMars, 
      link: `${prefix}/sexual-rejuvenation`,
      color: "bg-blue-50 text-[#4041d1]",
      ctaLabel: "View Men’s Treatments",
      subLinks: [
        { name: "Erectile Dysfunction", href: `${prefix}/erectile-dysfunction` },
        { name: "Peyronie's Disease", href: `${prefix}/peyronies-disease` },
        { name: "Premature Ejaculation", href: `${prefix}/premature-ejaculation` },
        { name: "Shockwave", href: `${prefix}/shockwave-therapy-erectile-dysfunction` },
        { name: "P-Shot", href: `${prefix}/p-shot` },
        { name: "Penis Filler", href: `${prefix}/penis-filler` }
      ]
    },
    {
      title: "Women’s Intimate Health",
      description: "Doctor-led assessment and treatment options for vaginal dryness, reduced sensitivity and selected women’s intimate health concerns, with discreet care tailored to symptoms and treatment goals.",
      icon: FaVenusMars, // Re-using for intimate health, styled with a different color below
      link: `${prefix}/sexual-rejuvenation`,
      color: "bg-rose-50 text-rose-600",
      ctaLabel: "View Women’s Treatments",
      subLinks: [
        { name: "Vaginal Dryness", href: `${prefix}/vaginal-dryness` },
        { name: "Reduced Sensitivity", href: `${prefix}/sexual-rejuvenation` },
        { name: "O-Shot", href: `${prefix}/o-shot` },
        { name: "Vaginal HA", href: `${prefix}/vaginal-dryness` },
        { name: "Vaginal Polynucleotide/HA", href: `${prefix}/vaginal-dryness` }
      ]
    }
  ];

  // --- STANDARD CLINIC SERVICES ---
  const standardServices = [
    {
      title: "Men's & Women's Intimate Health",
      description: "Doctor-led treatment options for erectile dysfunction, Peyronie’s disease, premature ejaculation, and selected women’s sexual wellness concerns.",
      icon: FaVenusMars, 
      link: `${prefix}/sexual-rejuvenation`,
      color: "bg-blue-50 text-[#4041d1]",
      ctaLabel: "View Treatments",
      subLinks: [
        { name: "ED", href: `${prefix}/erectile-dysfunction` },
        { name: "P-Shot", href: `${prefix}/p-shot` },
        { name: "O-Shot", href: `${prefix}/o-shot` },
        { name: "Peyronie's", href: `${prefix}/peyronies-disease` },
        { name: "PE", href: `${prefix}/premature-ejaculation` }
      ]
    },
    {
      title: "Joint Pain Relief",
      description: "Non-surgical injections (PRP, Steroid, Ostenil) for arthritis and sports injuries.",
      icon: FaRunning,
      link: `${prefix}/joint-injections`,
      color: "bg-indigo-50 text-indigo-600",
      ctaLabel: "View Treatments",
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
      ctaLabel: "View Treatments",
      subLinks: [
        { name: "PRP Hair Therapy", href: `${prefix}/hair-restoration` },
        { name: "Exosomes", href: `${prefix}/hair-restoration` }
      ]
    },
    {
      title: "Facial Aesthetics",
      description: "Natural skin rejuvenation using Polynucleotides, Vampire Facials, and Botox.",
      icon: FaSmile,
      link: `${prefix}/facial-aesthetics`,
      color: "bg-rose-50 text-rose-600",
      ctaLabel: "View Treatments",
      subLinks: [
        { name: "Polynucleotides", href: `${prefix}/facial-aesthetics` },
        { name: "Vampire Facials", href: `${prefix}/facial-aesthetics` }
      ]
    }
  ];

  const displayedServices = isHampstead ? hampsteadServices : standardServices;

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
            {isHampstead ? "Our Intimate Health Focus" : "Our Core Treatments"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg leading-relaxed font-inter"
          >
            {isHampstead 
              ? "Our Hampstead clinic focuses on discreet, doctor-led care for men’s and women’s intimate health, with treatment options tailored to symptoms, medical history and individual goals." 
              : "We specialize in regenerative medicine, using your body's natural healing abilities alongside medically proven aesthetic and pain-relief protocols."}
          </motion.p>
        </div>

        {/* Adjust grid dynamically based on the number of cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${!isHampstead && 'lg:grid-cols-4'} gap-8 relative max-w-5xl mx-auto`}>
          {displayedServices.map((service, index) => (
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
                
                <Link href={service.link}>
                  <h3 className="text-xl font-raleway font-bold text-slate-900 mb-3 hover:text-[#4041d1] transition-colors cursor-pointer">
                    {service.title}
                  </h3>
                </Link>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-inter">
                  {service.description}
                </p>

                {/* UPDATED: Valid Tailwind classes for padding (px-4 py-[10px]) and gap-3 */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4">
                  {service.subLinks.map((subLink, idx) => (
                    <Link 
                      key={idx} 
                      href={subLink.href}
                      className={`inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider border px-4 py-[10px] rounded-lg transition-all duration-300 ${
                        isHampstead && index === 1 
                          ? 'bg-rose-50/50 border-rose-200 text-rose-700 hover:bg-rose-600 hover:border-rose-600 hover:text-white hover:shadow-md'
                          : 'bg-blue-50/50 border-blue-200 text-[#4041d1] hover:bg-[#4041d1] hover:border-[#4041d1] hover:text-white hover:shadow-md'
                      }`}
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
                
                {/* Standard Clinic locations keep the bottom text link, Hampstead removes it */}
                {!isHampstead && service.ctaLabel && (
                  <Link href={service.link} className="inline-block text-xs font-bold uppercase tracking-widest transition-colors w-max mt-6 text-[#4041d1] hover:text-[#2a2bb8]">
                    {service.ctaLabel}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
