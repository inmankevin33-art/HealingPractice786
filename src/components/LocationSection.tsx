"use client";

import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaTrain, FaCompass } from "react-icons/fa";

export default function LocationSection() {
  const pathname = usePathname();
  const isBirminghamPage = pathname?.startsWith("/birmingham");

  // Simplified variants for faster rendering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 }, // Reduced y distance
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, // Faster transition
        ease: "easeOut" 
      },
    },
  };

  const locationData = {
    stAlbans: {
      badge: "St Albans Location",
      title: "Visit Us in St Albans",
      desc: "Conveniently located minutes from London with easy access from Hertfordshire and North London.",
      addressTitle: "St Albans Clinic",
      street: "21 Victoria Street, St Albans, AL1 3JJ",
      nearby: ["Watford", "Harpenden", "Luton", "Hertford", "Welwyn Garden City"],
      access: "Short walk from St Albans City station (fast trains to London St Pancras).",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.183416954203!2d-0.3392415234208453!3d51.74885837186981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763f034033b001%3A0x6a0a0a0a0a0a0a0a!2s21%20Victoria%20St%2C%20St%20Albans%20AL1%203JJ!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
    },
    birmingham: {
      badge: "Midlands Location",
      title: "Visit Us in Birmingham",
      desc: "Serving patients across the West Midlands from our private consulting hub in Edgbaston.",
      addressTitle: "Birmingham Clinic",
      street: "Consulting Rooms 38 LTD, 38 Harborne Rd, Edgbaston, B15 3EB",
      nearby: ["Edgbaston", "Harborne", "Moseley", "Selly Oak", "City Centre"],
      access: "Conveniently located in the Edgbaston Medical Quarter with easy access via public transport.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.435756475654!2d-1.9213456!3d52.4695423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd0000000000%3A0x0!2zMzg!5e0!3m2!1sen!2suk!4v1700000000000"
    }
  };

  const active = isBirminghamPage ? locationData.birmingham : locationData.stAlbans;

  return (
    <section 
      className="relative py-24 lg:py-32 bg-white overflow-hidden font-inter"
      // Performance optimization: Using radial-gradient instead of a blur filter div
      style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Faster trigger
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] mb-6 border border-blue-100"
            variants={itemVariants}
          >
            {active.badge}
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-raleway font-bold text-slate-900 leading-tight mb-6 tracking-tight"
            variants={itemVariants}
          >
            {active.title}
          </motion.h2>
          
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {active.desc}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="will-change-transform">
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm h-full flex flex-col justify-between transition-shadow hover:shadow-md duration-300">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      Clinical Address
                    </h3>
                    <p className="font-raleway font-bold text-slate-900 text-2xl">
                      {active.addressTitle}
                    </p>
                  </div>
                </div>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                  {active.street}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Conveniently Located
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {active.nearby.map((area, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-slate-50 text-slate-600 border border-slate-100 rounded-lg text-xs font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                      <FaTrain className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">Accessibility</h4>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {active.access}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-12 w-full py-4 bg-[#0A1128] text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors shadow-xl shadow-blue-900/10">
                <FaCompass className="w-4 h-4" />
                Get Directions
              </button>
            </div>
          </motion.div>

          <motion.div className="relative min-h-[450px] will-change-transform" variants={itemVariants}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-sm h-full border border-slate-100 bg-slate-100">
              {/* Added loading="lazy" and performance classes */}
              <iframe
                src={active.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
