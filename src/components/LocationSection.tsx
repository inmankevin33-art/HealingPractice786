"use client";

import { FaMapMarkerAlt, FaDirections, FaClock, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function LocationSection() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  // Centralized Clinic Data
  const clinic = isBirmingham 
    ? {
        name: "Birmingham Clinic",
        district: "Edgbaston Medical Quarter",
        address: "38 Harborne Rd, Edgbaston, B15 3EB",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://goo.gl/maps/example-birmingham",
        // Path to your map screenshot
        staticMap: "/images/maps/birmingham-map-static.webp" 
      }
    : {
        name: "St Albans Clinic",
        district: "City Centre",
        address: "21 Victoria Street, St Albans, AL1 3JJ",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://goo.gl/maps/example-stalbans",
        staticMap: "/images/maps/stalbans-map-static.webp"
      };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-10 transform-gpu">
      <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group/container">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* LEFT: CLINICAL DETAILS (60% width) */}
          <div className="lg:col-span-7 p-10 lg:p-16 flex flex-col justify-center bg-white relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <h4 className="text-[11px] font-bold uppercase text-blue-600 tracking-[0.25em]">
                  Visit Our Clinic
                </h4>
              </div>

              <h3 className="text-3xl lg:text-4xl font-raleway font-bold text-slate-900 mb-2">
                {clinic.name}
              </h3>
              <p className="text-blue-500 font-bold text-sm mb-8 uppercase tracking-wide">
                {clinic.district}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-slate-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Address</p>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                      {clinic.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Clinic Hours</p>
                    <p className="text-base text-slate-600 font-medium">{clinic.hours}</p>
                  </div>
                </div>
              </div>

              <a 
                href={clinic.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#0a1128] text-white rounded-2xl font-bold text-sm hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 group/btn w-full sm:w-fit"
              >
                <FaDirections className="group-hover/btn:rotate-12 transition-transform" />
                Get Directions
                <FaExternalLinkAlt size={10} className="ml-1 opacity-40 group-hover/btn:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: THE VISUAL MAP (40% width) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full overflow-hidden">
            <a 
              href={clinic.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full relative group/map"
            >
              {/* Static Map Image */}
              <img 
                src={clinic.staticMap} 
                alt={`${clinic.name} location map`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/map:scale-110"
                loading="lazy"
              />
              
              {/* Clinical Blue Overlay */}
              <div className="absolute inset-0 bg-blue-900/10 group-hover/map:bg-transparent transition-colors duration-700" />
              
              {/* Modern Location Pin Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping" />
                  <div className="relative bg-white p-3 rounded-full shadow-2xl border border-blue-100">
                    <FaMapMarkerAlt className="text-blue-600" size={24} />
                  </div>
                </div>
              </div>

              {/* View Map Badge */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-white/50 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Open in Maps</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
