"use client";

import { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear the container first to prevent duplicate widgets if React renders twice
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; 
      
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader-feed.js?0b7a4cc651fb377c3506ad75e05";
      script.defer = true;
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-white border-t border-slate-100 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, branded header for the feed */}
        <div className="text-center mb-10 flex flex-col items-center">
          <a 
            href="https://www.instagram.com/healing_prp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaInstagram className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-raleway font-bold text-slate-900 group-hover:text-[#4041d1] transition-colors">
              Follow our Journey
            </h2>
            <p className="text-slate-500 mt-2 text-sm font-medium">
              @healing_prp
            </p>
          </a>
        </div>

        {/* The Instagram widget will securely load inside this exact div */}
        <div ref={containerRef} className="w-full min-h-[250px] flex items-center justify-center" />
        
      </div>
    </section>
  );
}
