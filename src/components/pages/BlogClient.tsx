"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost } from "@/lib/contentful";
import Footer from "@/components/Footer";

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

  return (
    <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      {/* Background with subtle brand blue gradient */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.08)_0,rgba(0,163,255,0)_50%)]"></div>

      {/* Hero Section */}
      <section className="relative py-12 border-b border-slate-100 sm:py-16 lg:py-20">
      {/* Add this div wrapper to constrain the width */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" variants={containerVariants}>
             {/* ... your H1 and P tags go here ... */}
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {initialPosts.length === 0 ? (
            <div className="text-center py-20 text-slate-500 font-inter font-medium">No blog posts found.</div>
          ) : (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" variants={containerVariants}>
              {initialPosts.map((post) => (
                <motion.article key={post.slug} className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2" variants={itemVariants}>
                  {post.coverImage && (
                    <div className="aspect-[16/10] overflow-hidden border-b border-slate-50">
                      <img src={post.coverImage.url} alt={post.coverImage.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="text-[10px] font-bold text-[var(--brand-blue)] mb-3 uppercase tracking-widest font-inter">
                      {formatDate(post.date)}
                    </div>
                    <h2 className="text-xl font-raleway font-semibold text-slate-900 mb-3 group-hover:text-[var(--brand-blue)] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm font-inter text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    {/* Read Article Button - Matched to new standard */}
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-xs font-bold text-[var(--brand-blue)] hover:gap-3 transition-all gap-2 uppercase tracking-tight">
                      Read Article <span className="text-lg">→</span>
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
