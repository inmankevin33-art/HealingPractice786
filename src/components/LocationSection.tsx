"use client";

import { FaMapMarkerAlt, FaDirections, FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function LocationSection() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const clinic = isBirmingham 
    ? {
        name: "Birmingham Clinic",
        district: "Edgbaston Medical Quarter",
        address: "38 Harborne Rd, Edgbaston, B15 3EB",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://www.google.com/maps/search/?api=1&query=38+Harborne+Rd,+Edgbaston,+Birmingham+B15+3EB", 
      }
    : {
        name: "St Albans Clinic",
        district: "City Centre",
        address: "21 Victoria Street, St Albans, AL1 3JJ",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://www.google.com/maps/search/?api=1&query=21+Victoria+Street,+St+Albans,+AL1+3JJ", 
      };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-6 transform-gpu">
      <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* LEFT: CLINICAL DETAILS (Reduced Padding) */}
          <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center bg-white relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#4041d1] animate-pulse" />
                <h4 className="text-[10px] font-bold uppercase text-[#4041d1] tracking-[0.2em] font-inter">
                  Visit Our Clinic
                </h4>
              </div>

              <h3 className="text-2xl lg:text-3xl font-raleway font-bold text-slate-900 mb-1">
                {clinic.name}
              </h3>
              <p className="text-[#4041d1] font-bold text-[11px] mb-6 uppercase tracking-wide font-inter">
                {clinic.district}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[var(--brand-blue-50)] text-[#4041d1] rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 font-inter">Address</p>
                    <p className="text-sm text-slate-700 font-medium leading-tight font-inter">
                      {clinic.address}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                    <FaClock size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5 font-inter">Clinic Hours</p>
                    <p className="text-sm text-slate-600 font-medium font-inter">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>
              </div>

              <a 
                href={clinic.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                // BRAND COLOR LOCK: #4041d1
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#4041d1] text-white rounded-xl font-bold text-xs hover:bg-[#2a2bb8] transition-all shadow-lg shadow-blue-200 group w-full sm:w-fit font-inter"              
              >
                <FaDirections className="group-hover:rotate-12 transition-transform" />
                Get Directions
                <FaExternalLinkAlt size={10} className="ml-1 opacity-40" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT: FIXED CSS MAP (Ensures display without asset errors) */}
          <div className="lg:col-span-5 relative min-h-[220px] lg:min-h-full overflow-hidden bg-slate-50">
            <a 
              href={clinic.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full relative group"
            >
              {/* This CSS pattern mimics a clean medical map grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
              
              {/* Map Centering Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-[#4041d1]/20 rounded-full animate-ping" />
                  <div className="relative bg-white p-3 rounded-full shadow-xl border border-blue-100">
                    <FaMapMarkerAlt className="text-[#4041d1]" size={20} />
                  </div>
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-md border border-slate-100 font-inter">
                    {clinic.name} location map
                  </div>
                </div>
              </div>

              {/* View Map Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold text-slate-900 uppercase tracking-widest font-inter">Open in Maps</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
