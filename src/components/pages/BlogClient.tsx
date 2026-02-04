"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/contentful";
import Footer from "@/components/Footer";
import { FaArrowRight } from "react-icons/fa";

export default function BlogClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric", month: "long", day: "numeric",
    });
  };

  // Helper to ensure Contentful URLs always have a protocol
  const getImageUrl = (url: string) => {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    return url;
  };

  return (
    <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      
      {/* Hero Section - Standardized to 55vh Twin Style */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-10" />
          <img 
            src="/hero_img.png" 
            alt="Blog Background" 
            className="w-full h-full object-cover" 
            loading="eager"
          />
        </div>

        <div className="relative w-full z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-center">
            <motion.div variants={containerVariants}>
              <motion.div 
                className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4 uppercase tracking-wider" 
                variants={itemVariants}
              >
                Health & Wellness Blog
              </motion.div>

              <motion.h1 
                className="text-2xl md:text-3xl font-raleway font-semibold text-slate-900 mb-4 leading-tight" 
                variants={itemVariants}
              >
                Latest Insights on PRP & Regenerative Medicine
                <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
              </motion.h1>

              <motion.p 
                className="text-base font-inter text-slate-600 max-w-2xl mx-auto leading-relaxed" 
                variants={itemVariants}
              >
                Stay informed about the latest developments in Platelet-Rich Plasma treatments, sexual wellness, joint health, and aesthetic medicine from our medical experts.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {initialPosts.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-inter font-medium">No blog posts found.</div>
          ) : (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" variants={containerVariants}>
              {initialPosts.map((post) => (
                <motion.article 
                  key={post.slug} 
                  className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2" 
                  variants={itemVariants}
                >
                  {post.coverImage && (
                    <div className="aspect-[16/10] overflow-hidden border-b border-slate-50">
                      <img 
                        src={getImageUrl(post.coverImage.url)} 
                        alt={post.coverImage.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="text-[10px] font-bold text-[#4041d1] mb-3 uppercase tracking-widest font-inter">
                      {formatDate(post.date)}
                    </div>
                    <h2 className="text-xl font-raleway font-semibold text-slate-900 mb-3 group-hover:text-[#4041d1] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm font-inter text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Read Article Button - Standardized */}
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-xs font-bold text-[#4041d1] hover:text-[#2a2bb8] hover:gap-3 transition-all gap-2 uppercase tracking-tight font-inter"
                    >
                      Read Article <FaArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      
      <Footer />
    </motion.div>
  );
}
