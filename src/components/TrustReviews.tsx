"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Add a prop so we can pass different URLs to this component based on the clinic location
interface TrustReviewsProps {
  widgetUrl: string;
}

export default function TrustReviews({ widgetUrl }: TrustReviewsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear the container first to prevent duplicate widgets if React renders twice
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; 
      
      const script = document.createElement("script");
      script.src = widgetUrl; // Uses the dynamic URL passed from the page
      script.defer = true;
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, [widgetUrl]);

  return (
    <section className="py-20 bg-white border-t border-slate-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-[#4041d1]/10 text-[#4041d1] rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          >
            Verified Patient Reviews
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-raleway font-bold text-slate-900"
          >
            Trusted by patients across the UK
          </motion.h2>
        </div>

        {/* The Trustindex widget will securely load inside this exact div */}
        <div ref={containerRef} className="w-full min-h-[250px] flex items-center justify-center" />
        
      </div>
    </section>
  );
}
