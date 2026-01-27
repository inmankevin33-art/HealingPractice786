"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost, getAllBlogPosts } from "@/lib/contentful";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const blogPosts = await getAllBlogPosts();
        setPosts(blogPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={pageVariants}
    >
      {/* Background */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      {/* Hero Section */}
      <section className="relative py-12 border-b border-slate-200 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Pill Style Badge - Consistent with Service Pages */}
            <motion.div
              className="inline-block px-4 py-2 bg-[var(--brand-blue-100)] text-[var(--brand-blue-700)] rounded-full text-xs font-inter font-medium mb-4"
              variants={itemVariants}
            >
              Health & Wellness Blog
            </motion.div>

            {/* MATCHED STYLE: md:text-3xl and font-semibold */}
            <motion.h1
              className="text-2xl md:text-3xl font-raleway font-semibold text-slate-900 mb-4"
              variants={itemVariants}
            >
              Latest Insights on PRP & Regenerative Medicine
              <span className="block mt-1 text-slate-700">Healing-PRP Clinics</span>
            </motion.h1>

            {/* MATCHED STYLE: max-w-3xl prevents zoomed look */}
            <motion.p
              className="text-base font-inter text-slate-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Stay informed about the latest developments in Platelet-Rich
              Plasma treatments, sexual wellness, joint health, and aesthetic
              medicine from our medical experts.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-raleway font-semibold text-slate-900 mb-4">
                No blog posts yet
              </h3>
              <p className="text-slate-600 font-inter">
                Check back soon for the latest insights on PRP treatments.
              </p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {posts.map((post) => (
                <motion.article
                  key={post.slug}
                  className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  variants={itemVariants}
                >
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden border-b border-slate-50">
                      <img
                        src={post.coverImage.url}
                        alt={post.coverImage.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center text-xs font-inter font-medium text-[var(--brand-blue)] mb-3 uppercase tracking-wider">
                      {post.date && (
                        <span>{formatDate(post.date)}</span>
                      )}
                    </div>

                    <h2 className="text-xl font-raleway font-semibold text-slate-900 mb-3 line-clamp-2 leading-snug">
                      {post.title}
                    </h2>

                    {post.excerpt && (
                      <p className="text-sm font-inter text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}

                    {/* Button Style: Matched to extracted Medium Blue typography */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-[var(--brand-blue-50)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white rounded-lg text-xs font-inter font-semibold transition-all duration-300"
                    >
                      Read Article
                      <svg
                        className="w-3 h-3 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
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
