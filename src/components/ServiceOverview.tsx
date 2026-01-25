"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaMarsAndVenus, FaSyringe, FaRunning, FaSmile } from "react-icons/fa";

const services = [
  {
    title: "Sexual Rejuvenation",
    description: "Specialist P-Shot® and O-Shot® treatments to restore intimacy, sensitivity, and function.",
    icon: FaMarsAndVenus,
    link: "/sexual-rejuvenation",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Hair Restoration",
    description: "Stop hair loss and stimulate regrowth with advanced PRP and Exosome therapies.",
    icon: FaSyringe, // Or a hair icon if you have one
    link: "/hair-restoration",
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "Joint Pain Relief",
    description: "Non-surgical injections (PRP, Steroid, Ostenil) for arthritis and sports injuries.",
    icon: FaRunning,
    link: "/joint-injections",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Facial Aesthetics",
    description: "Natural skin rejuvenation using Polynucleotides, Vampire Facials, and Botox.",
    icon: FaSmile,
    link: "/facial-aesthetics",
    color: "bg-rose-50 text-rose-600",
  },
];

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-raleway text-slate-900 mb-4">
            Our Core Treatments
          </h2>
          <p className="text-slate-600 text-lg">
            We specialize in regenerative medicine, using your body's natural healing abilities 
            alongside medically proven aesthetic and pain-relief protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 text-2xl`}>
                <service.icon />
              </div>
              <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors group"
              >
                View Treatments <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
