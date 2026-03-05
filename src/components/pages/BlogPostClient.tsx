"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp, FaGoogle, FaUserMd } from "react-icons/fa"; 
import ContactCTASection from "@/components/ContactCTASection";
import { BlogPost } from "@/lib/contentful";

// --- TYPESCRIPT INTERFACES ---
interface NavItem {
  slug: string;
}

interface NavigationData {
  next?: NavItem;
  prev?: NavItem;
}

interface RichTextChild {
  value: string;
}

interface RichTextNode {
  nodeType: string;
  content?: RichTextChild[];
}

interface RichTextDocument {
  content: RichTextNode[];
}
// -----------------------------

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const getImageUrl = (url: string | undefined) => {
  if (!url) return "";
  return url.startsWith("//") ? `https:${url}` : url;
};

export default function BlogPostClient({ post, navigation }: { post: BlogPost; navigation: NavigationData }) {
  
  const openContactForm = () => {
    window.dispatchEvent(new CustomEvent("open-contact-drawer"));
    const element = document.getElementById("contact-form-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const renderRichText = (content: RichTextDocument | undefined) => {
    if (!content || !content.content) return null;
    
    return content.content.map((node: RichTextNode, i: number) => {
      if (node.nodeType === "paragraph") {
        return (
          <p key={i} className="mb-8 text-slate-700 leading-loose text-base md:text-[17px]">
            {node.content?.map((c: RichTextChild) => c.value).join("")}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-white min-h-screen font-inter">
      
      {/* --- EZRA LAYOUT (WITH BRAND FONTS) --- */}
      <header className="relative pt-20 md:pt-32 pb-24 md:pb-36 bg-[#0A1128] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1128]/90 z-10"></div>
          <img src="/hero_img.png" alt="BG" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>

        {/* --- HORIZON NAVIGATION --- */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center text-[10px] md:text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Insights
            </Link>
            {navigation.next && (
              <Link href={`/blog/${navigation.next.slug}`} className="text-[10px] md:text-xs font-semibold text-slate-400 hover:text-white flex items-center uppercase tracking-widest">
                Next Article <ChevronRight className="w-3 h-3 ml-2" />
              </Link>
            )}
          </motion.div>
        </div>

        {/* --- WIDE TYPOGRAPHY CENTER --- */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Title: Restored to font-raleway but kept the wide 1200px layout */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-[54px] font-raleway font-semibold text-white mb-6 leading-[1.2] mx-auto uppercase tracking-wide">
              {post.title}
            </motion.h1>

            {/* Author & Date: Kept the clean Ezra layout, using font-inter */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-sm md:text-base font-inter text-slate-300">
                Dr. Syed Abdi, {formatDate(post.date)}
              </span>
            </motion.div>

            {/* Trust Badges: Ezra style inline layout */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white">
               <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold">
                  Excellent <FaGoogle className="text-yellow-500 w-4 h-4 ml-1" /> 5.0 Google Review
               </div>
               <span className="opacity-40 hidden md:inline">|</span>
               <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold">
                  <FaUserMd className="text-blue-400 w-4 h-4" /> GMC Registered
               </div>
            </motion.div>

          </motion.div>
        </div>
      </header>

      {/* --- ARTICLE BODY --- */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        
        {/* Clean Break Image */}
        {post.coverImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden bg-slate-50"
          >
            <img 
              src={getImageUrl(post.coverImage.url)} 
              alt={post.coverImage.title || "Cover"} 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* Excerpt Lead Paragraph */}
        {post.excerpt && (
          <p className="text-xl md:text-2xl text-slate-800 font-raleway leading-relaxed mb-12">
            {post.excerpt}
          </p>
        )}

        {/* Main Content */}
        <div className="prose prose-slate prose-p:font-inter max-w-none">
           {renderRichText(post.content as unknown as RichTextDocument)}
        </div>
      </article>

      {/* --- SIGNATURE CONTACT SECTION --- */}
      <div className="mt-12 bg-slate-50 border-t border-slate-100">
        <ContactCTASection />
      </div>

      {/* --- SIGNATURE STICKY CTAs --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
        <a 
          href="https://wa.me/447990364147" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        >
          <FaWhatsapp size={24} />
        </a>

        <button 
          onClick={openContactForm}
          className="flex items-center gap-3 px-6 py-3.5 bg-[#0A1128] text-white rounded-full font-bold text-[11px] shadow-2xl border border-white/10 hover:bg-[#1a1f35] transition-colors group pointer-events-auto uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
          Speak to a Specialist
        </button>
      </div>

    </div>
  );
}
