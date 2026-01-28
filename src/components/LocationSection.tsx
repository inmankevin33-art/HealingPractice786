"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function LocationSection() {
  const pathname = usePathname();
  const isBirminghamPage = pathname?.startsWith("/birmingham");

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Data objects for dynamic rendering
  const locationData = {
    stAlbans: {
      badge: "St Albans Location",
      title: "Visit Us in St Albans",
      desc: "Conveniently located minutes from London with easy access from Hertfordshire and North London.",
      addressTitle: "St Albans Clinic",
      street: "21 Victoria Street, St Albans, AL1 3JJ",
      nearby: ["Watford", "Harpenden", "Luton", "Hertford", "Welwyn Garden City"],
      access: "Short walk from St Albans City station (fast trains to London St Pancras).",
      mapUrl: "http://googleusercontent.com/maps.google.com/4"
    },
    birmingham: {
      badge: "Midlands Location",
      title: "Visit Us in Birmingham",
      desc: "Serving patients across the West Midlands from our private consulting hub in Edgbaston.",
      addressTitle: "Birmingham Clinic",
      street: "Consulting Rooms 38 LTD, 38 Harborne Rd, Edgbaston, B15 3EB",
      nearby: ["Edgbaston", "Harborne", "Moseley", "Selly Oak", "City Centre"],
      access: "Conveniently located in the Edgbaston Medical Quarter with easy access via public transport.",
      mapUrl: "http://googleusercontent.com/maps.google.com/5"
    }
  };

  // Select active data based on route
  const active = isBirminghamPage ? locationData.birmingham : locationData.stAlbans;

  return (
    <section className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden font-inter">
      {/* Background Polish */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,163,255,0.05),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block mb-4 md:px-4 px-3 md:py-2 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] font-bold uppercase tracking-widest"
            variants={itemVariants}
          >
            {active.badge}
          </motion.div>

          <motion.h2
            className="md:text-4xl text-3xl font-raleway font-semibold text-slate-900 leading-tight mb-4"
            variants={itemVariants}
          >
            {active.title}
          </motion.h2>
          
          <motion.p
            className="text-base text-slate-500 md:max-w-2xl max-w-xl mx-auto leading-relaxed font-inter"
            variants={itemVariants}
          >
            {active.desc}
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Info Card */}
          <motion.div variants={itemVariants}>
            <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col justify-center">
              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Clinical Address
                </h3>
                <div className="flex items-start gap-4">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-raleway font-bold text-slate-900 text-xl mb-1">
                      {active.addressTitle}
                    </p>
                    <p className="text-slate-500 leading-relaxed font-inter">
                      {active.street}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 mb-10"></div>

              <div className="mb-10">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Conveniently Located
                </h3>
                <div className="flex flex-wrap gap-2">
                  {active.nearby.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-50 text-slate-600 border border-slate-100 rounded-lg text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-100 mb-10"></div>

              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Accessibility
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-inter">
                  {active.access}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.div className="relative min-h-[450px]" variants={itemVariants}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-full border-4 border-white">
              <iframe
                src={active.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.1)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
