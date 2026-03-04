"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaArrowRight, 
  FaEnvelope,
  FaGoogle,
  FaStar,
  FaLock
} from "react-icons/fa";
import Link from "next/link";
import ContactCTASection from "@/components/ContactCTASection";
import Footer from "@/components/Footer";
import PRPExplanationSection from "@/components/PRPExplanationSection";
import LocationSection from "@/components/LocationSection";
import TrustReviews from "@/components/TrustReviews";
import DynamicFAQ from "@/components/DynamicFAQ";

// Ensure the type exactly matches what is passed from page.tsx
export interface FaqType {
  question: string;
  answer: string;
}

export interface BirminghamClientProps {
  faqs: FaqType[];
}

export default function BirminghamHomeClient({ faqs }: BirminghamClientProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const section = document.getElementById("contact-form-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Hair Restoration",
      desc: "West Midlands' leading clinic for PRP & Exosome hair therapy. Stimulate regrowth without surgery.",
      link: "/birmingham/hair-restoration",
    },
    {
      title: "Sexual Rejuvenation",
      desc: "Confidential P-Shot® & O-Shot® treatments in Birmingham to restore function and sensitivity.",
      link: "/birmingham/sexual-rejuvenation",
    },
    {
      title: "Joint Injections",
      desc: "Expert joint pain relief for arthritis and sports injuries using regenerative PRP therapy.",
      link: "/birmingham/joint-injections",
    },
    {
      title: "Facial Aesthetics",
      desc: "Vampire Facials & Polynucleotides for natural skin rejuvenation in the heart of the Midlands.",
      link: "/birmingham/facial-aesthetics",
    },
  ];

  return (
    <main className="transform-gpu selection:bg-blue-100">
      {/* --- HERO SECTION --- */}
      <div className="relative md:h-[calc(100vh-4rem)] pb-5 md:pb-0 lg:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center bg-[#0a1128]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/mobilehero.webp" 
            alt="Birmingham Clinic Hero" 
            className="absolute inset-0 w-full h-full object-cover sm:hidden opacity-60"
            // @ts-expect-error - fetchpriority supported by browsers
            fetchpriority="high"
          />
          <img 
            src="/herobg.webp" 
            alt="Birmingham Clinic Hero" 
            className="absolute inset-0 w-full h-full object-cover hidden sm:block opacity-60"
            // @ts-expect-error - fetchpriority supported by browsers
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-4vh]">
          <div className={`inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] mb-6 font-bold uppercase tracking-[0.2em] transition-all duration-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <FaMapMarkerAlt className="inline-block mr-2 mb-0.5" /> Birmingham Clinic
          </div>

          <h1 className={`md:text-5xl text-3xl font-bold font-raleway text-white leading-tight mb-3 tracking-tight transition-all duration-700 delay-100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Natural Regeneration Treatments <br /> in Birmingham
          </h1>

          <h2 className={`mt-1 md:text-lg text-base text-blue-100 font-medium leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Confidential Care by a GMC Registered Experienced Doctor
          </h2>

          <p className={`mt-3 text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Specialist regenerative treatments for Hair Loss, Sexual Wellness, and Joint Pain. 
            Serving Edgbaston, Solihull, and the West Midlands.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <button 
              onClick={handleConsultationClick} 
              className="px-10 py-3.5 flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-xl active:scale-95 gap-2 group font-inter"
            >
              <FaEnvelope className="w-4 h-4 group-hover:rotate-12 transition-transform" /> 
              Book Consultation
            </button>
          </div>
        </div>

        {/* --- HERO TRUST BADGES --- */}
        <div className={`md:block absolute hidden bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-white/10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="px-2 py-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-2 divide-x divide-white/10">
              {/* Google 5-Star Link */}
              <a href="#reviews-section" onClick={(e) => {
                e.preventDefault();
                document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
              }} className="flex justify-center items-center group cursor-pointer px-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform shadow-md">
                    <FaGoogle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="flex text-amber-400 text-[10px] mb-0.5">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <span className="text-white text-[9px] font-bold tracking-widest uppercase opacity-90 group-hover:opacity-100 font-inter">
                      5.0 Patient Rating
                    </span>
                  </div>
                </div>
              </a>

              {/* Experience Badge */}
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md border border-white/10">
                    10+
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Experience</span>
                  </div>
                </div>
              </div>

              {/* GMC Badge */}
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10">
                    GMC
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Registered</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor</span>
                  </div>
                </div>
              </div>

              {/* Privacy Badge */}
              <div className="flex justify-center items-center px-2 opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 shadow-md border border-white/10">
                    <FaLock className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Strictly 1:1</span>
                    <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Discreet Care</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 bg-white contain-paint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-raleway font-bold text-slate-900 tracking-tight">
              Our Birmingham Treatments
            </h2>
            <p className="text-slate-600 text-base mt-4 max-w-3xl mx-auto leading-relaxed">
              Regenerative medicine treatments delivered by an experienced doctor in our West Midlands clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col transform-gpu"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-lg font-raleway font-bold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 font-inter text-xs leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link 
                  href={service.link} 
                  className="inline-flex items-center text-[#4041d1] text-xs font-bold group-hover:gap-2 transition-all"
                >
                  View Details <FaArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PRPExplanationSection />

      {/* --- CTA BAR --- */}
      <section className="py-12 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4">
          
          <Link
            href="/our-doctor"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#0A1128] hover:bg-slate-800 text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            Meet Your Doctor
          </Link>

          <Link
            href="/birmingham/prices"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm bg-[#4041d1] hover:bg-[#2a2bb8] text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 font-inter"
          >
            View Treatment Prices
          </Link>
          
          <Link
            href="/birmingham/faq"
            className="px-8 py-3.5 w-full md:w-max flex items-center justify-center text-sm border-2 border-[#4041d1] text-[#4041d1] hover:bg-blue-50 bg-white rounded-xl font-bold transition-all active:scale-95 gap-2 font-inter"
          >
            View Clinic FAQs
          </Link>
        </div>
      </section>

      <DynamicFAQ faqs={faqs} locationName="Birmingham" />

      {/* Google Reviews */}
      <div id="reviews-section">
        <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?e2cf4a365239367f2a3607c0513" />
      </div>

      <div id="contact-form-section" className="contain-layout">
        <ContactCTASection />
        <LocationSection />
      </div>

      <Footer />
    </main>
  );
}
