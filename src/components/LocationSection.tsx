"use client";

import { FaMapMarkerAlt, FaDirections, FaClock } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function CompactLocationStrip() {
  const pathname = usePathname();
  const isBirmingham = pathname?.startsWith("/birmingham");

  const clinic = isBirmingham 
    ? {
        name: "Birmingham Clinic",
        address: "38 Harborne Rd, Edgbaston, B15 3EB",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://goo.gl/maps/example-birmingham"
      }
    : {
        name: "St Albans Clinic",
        address: "21 Victoria Street, St Albans, AL1 3JJ",
        hours: "Mon-Fri: 9am - 6pm",
        mapLink: "https://goo.gl/maps/example-stalbans"
      };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 transform-gpu">
      <div className="bg-white border border-slate-100 rounded-[2rem] p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Address Info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase text-blue-600 tracking-widest">{clinic.name}</h4>
            <p className="text-sm font-semibold text-slate-900">{clinic.address}</p>
          </div>
        </div>

        {/* Hours Info */}
        <div className="hidden lg:flex items-center gap-4 border-x border-slate-100 px-8">
          <FaClock className="text-slate-300" />
          <p className="text-xs font-medium text-slate-500">{clinic.hours}</p>
        </div>

        {/* Action Button */}
        <a 
          href={clinic.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-blue-600 transition-all group"
        >
          <FaDirections className="group-hover:rotate-12 transition-transform" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
