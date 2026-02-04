"use client";

import { useEffect, useState } from "react";
import { BlogPost, getBlogPostBySlug } from "@/lib/contentful";
import Footer from "@/components/Footer";
import Link from "next/link";
// FIXED: Changed imports to use 'react-icons/fa' which you have installed
import { FaArrowLeft, FaCalendar, FaClock } from "react-icons/fa";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// ✅ HELPER: Robust image URL fixer
const getImageUrl = (url: string | undefined) => {
  if (!url) return "";
  if (url === "https:undefined") return ""; 
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
};

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-[#4041d1] font-inter font-semibold animate-pulse">Loading Article...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-2xl font-raleway font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-[#4041d1] font-inter hover:underline">Return to Blog</Link>
      </div>
    );
  }

  const validImageUrl = post.coverImage ? getImageUrl(post.coverImage.url) : "";

  return (
    <>
      <article className="bg-white">
        {/* Header Section */}
        <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-50 min-h-[50vh] flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/90 z-10"></div>
          
          {/* Background blurred image effect */}
          {validImageUrl && (
             <div className="absolute inset-0 opacity-15">
                <img 
                  src={validImageUrl} 
                  alt="Background" 
                  className="w-full h-full object-cover blur-sm"
                />
             </div>
          )}
          
          <div className="relative z-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-xs font-bold text-[#4041d1] mb-8 hover:opacity-70 transition-opacity uppercase tracking-widest font-inter"
            >
              <FaArrowLeft className="mr-2 w-3 h-3" /> Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-6 text-sm text-slate-500 font-inter">
              <span className="flex items-center gap-2">
                <FaCalendar className="text-[#4041d1] w-3 h-3" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                 <FaClock className="text-[#4041d1] w-3 h-3" />
                 5 min read
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Main Featured Image */}
          {validImageUrl && (
            <div className="rounded-2xl overflow-hidden shadow-lg mb-12 border border-slate-100">
              <img
                src={validImageUrl}
                alt={post.coverImage?.title || post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Rich Text Content */}
          <div className="prose prose-lg prose-slate max-w-none font-inter headings:font-raleway headings:font-semibold headings:text-slate-900 prose-a:text-[#4041d1]">
             {post.content && documentToReactComponents(post.content)}
          </div>
          
          {/* CTA Footer in Post */}
          <div className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-600 font-inter mb-6 font-medium">Want to discuss this treatment with a specialist?</p>
            <Link 
              href="/contact" 
              onClick={(e) => {
                 // Trigger drawer logic if needed
                 // window.dispatchEvent(new CustomEvent("open-contact-drawer")); 
              }}
              className="inline-flex px-8 py-3 bg-[#4041d1] text-white rounded-lg font-inter font-bold hover:bg-[#2a2bb8] transition-all shadow-md"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
