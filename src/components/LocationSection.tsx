"use client";

import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaMapMarkerAlt, FaTrain, FaCompass } from "react-icons/fa";

export default function LocationSection() {
  const pathname = usePathname();
  const isBirminghamPage = pathname?.startsWith("/birmingham");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
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
      desc: "Serving patients across the West Midlands from our private consulting hub in Edgbaston Medical Quarter.",
      addressTitle: "Birmingham Clinic",
      street: "Consulting Rooms 38 LTD, 38 Harborne Rd, Edgbaston, B15 3EB",
      nearby: ["Edgbaston", "Harborne", "Moseley", "Selly Oak", "City Centre"],
      access: "Conveniently located in Edgbaston with easy access via public transport and local parking.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.435756475654!2d-1.9213456!3d52.4695423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd0000000000%3A0x0!2zMzg!5e0!3m2!1sen!2suk!4v1700000000000"
    }
  };

  const active = isBirminghamPage ? locationData.birmingham : locationData.stAlbans;

  return (
    <section 
      className="relative py-20 lg:py-28 bg-white overflow-hidden font-inter"
      style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-blue-100"
            variants={itemVariants}
          >
            {active.badge}
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 leading-tight mb-4 tracking-tight"
            variants={itemVariants}
          >
            {active.title}
          </motion.h2>
          
          <motion.p
            className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
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
          <motion.div variants={itemVariants} className="will-change-transform transform-gpu">
            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm h-full flex flex-col justify-between transition-shadow hover:shadow-md duration-300">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                      Clinical Address
                    </h3>
                    <p className="font-raleway font-bold text-slate-900 text-xl">
                      {active.addressTitle}
                    </p>
                  </div>
                </div>

                <p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
                  {active.street}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                      Nearby Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {active.nearby.map((area, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-slate-50 text-slate-600 border border-slate-100 rounded-lg text-[11px] font-semibold"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                      <FaTrain className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 mb-0.5">Accessibility</h4>
                      <p className="text-slate-500 leading-relaxed text-xs">
                        {active.access}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full py-3.5 bg-blue-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-600/15">
                <FaCompass className="w-4 h-4" />
                Get Directions
              </button>
            </div>
          </motion.div>

          <motion.div className="relative min-h-[350px] transform-gpu will-change-transform" variants={itemVariants}>
            <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-full border border-slate-100 bg-slate-100">
              <iframe
                src={active.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
