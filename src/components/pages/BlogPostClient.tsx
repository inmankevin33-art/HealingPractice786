"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp, FaGoogle, FaUserMd, FaStar, FaLock } from "react-icons/fa"; 
import ContactCTASection from "@/components/ContactCTASection";
import TrustReviews from "@/components/TrustReviews";
import Footer from "@/components/Footer";
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

interface RichTextData {
  target?: {
    fields?: {
      file?: { url?: string };
      title?: string;
    };
  };
}

interface RichTextNode {
  nodeType: string;
  content?: RichTextChild[];
  data?: RichTextData;
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

  // UPGRADED RENDERER: Now supports paragraphs AND embedded Contentful images
  const renderRichText = (content: RichTextDocument | undefined) => {
    if (!content || !content.content) return null;
    
    return content.content.map((node: RichTextNode, i: number) => {
      // 1. Render Paragraphs
      if (node.nodeType === "paragraph") {
        return (
          <p key={i} className="mb-8 text-slate-700 leading-loose text-base md:text-[17px]">
            {node.content?.map((c: RichTextChild) => c.value).join("")}
          </p>
        );
      }
      
      // 2. Render Embedded Images (Creates the Zig-Zag Layout)
      if (node.nodeType === "embedded-asset-block") {
        const url = node.data?.target?.fields?.file?.url;
        const title = node.data?.target?.fields?.title || "Article Image";
        if (!url) return null;
        
        return (
          <div key={i} className="my-12 rounded-2xl overflow-hidden bg-slate-50 shadow-md border border-slate-100">
            <img src={getImageUrl(url)} alt={title} className="w-full h-auto object-cover" />
          </div>
        );
      }
      return null;
    });
  };

  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      
      {/* --- REFINED EZRA HERO (Shorter Height) --- */}
      <header className="relative pt-20 md:pt-28 pb-12 md:pb-16 bg-[#0A1128] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1128]/90 z-10"></div>
          <img src="/hero_img.png" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>

        {/* --- HORIZON NAVIGATION --- */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 mb-10 md:mb-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center text-[10px] md:text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Insights
            </Link>
            
            {/* Visual Balance: Fallback if no next article */}
            {navigation.next ? (
              <Link href={`/blog/${navigation.next.slug}`} className="text-[10px] md:text-xs font-semibold text-slate-400 hover:text-white flex items-center uppercase tracking-widest transition-colors">
                Next Article <ChevronRight className="w-3 h-3 ml-2" />
              </Link>
            ) : (
              <span className="text-[10px] md:text-xs font-semibold text-slate-600 flex items-center uppercase tracking-widest cursor-default">
                Latest Insight <span className="w-3 h-3 ml-2 block rounded-full bg-slate-700/50"></span>
              </span>
            )}
          </motion.div>
        </div>

        {/* --- EDITORIAL TYPOGRAPHY & TRUST BAR --- */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Title: Ezra Style (Serif, Wide, Elegant) */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-[54px] font-serif font-normal text-white mb-6 leading-[1.2] mx-auto max-w-4xl">
              {post.title}
            </motion.h1>

            {/* Author & Date */}
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-sm md:text-base font-inter text-slate-300">
                Dr. Syed Abdi, {formatDate(post.date)}
              </span>
            </motion.div>

            {/* --- INJECTED P-SHOT TRUST BAR --- */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                {/* 1. Google Review */}
                <div className="flex justify-center items-center group cursor-pointer px-2 pt-2 md:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] shadow-md shrink-0">
                      <FaGoogle className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex text-amber-400 text-[10px] mb-0.5">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="text-white text-[9px] font-bold tracking-widest uppercase font-inter">
                        5.0 Patient Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* 2. Experience */}
                <div className="flex justify-center items-center px-2 pt-4 md:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#4041d1] rounded-full flex items-center justify-center text-white font-bold text-[12px] shadow-md border border-white/10 shrink-0">
                      10+
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Years</span>
                      <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Experience</span>
                    </div>
                  </div>
                </div>

                {/* 3. GMC Registered */}
                <div className="flex justify-center items-center px-2 pt-4 md:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#1f3a68] rounded-full flex items-center justify-center text-white font-bold text-[11px] shadow-md border border-white/10 shrink-0">
                      GMC
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Registered</span>
                      <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Doctor</span>
                    </div>
                  </div>
                </div>

                {/* 4. Privacy */}
                <div className="flex justify-center items-center px-2 pt-4 md:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 shadow-md border border-white/10 shrink-0">
                      <FaLock className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-white text-[9px] font-bold uppercase tracking-widest leading-tight font-inter">Strictly 1:1</span>
                      <span className="text-blue-400 text-[9px] font-semibold tracking-wider uppercase leading-tight mt-0.5 font-inter">Discreet Care</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </header>

      {/* --- MAIN ARTICLE BODY --- */}
      <article className="flex-grow max-w-3xl mx-auto w-full px-4 sm:px-6 py-12 md:py-20">
        
        {/* Lead Cover Image (If present) */}
        {post.coverImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="mb-12 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-md"
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
          <p className="text-xl md:text-2xl text-slate-800 font-raleway leading-relaxed mb-10 border-l-2 border-[#4041d1] pl-6">
            {post.excerpt}
          </p>
        )}

        {/* Contentful Rich Text (Text & Embedded Images) */}
        <div className="prose prose-slate prose-p:font-inter prose-p:font-light max-w-none">
           {renderRichText(post.content as unknown as RichTextDocument)}
        </div>
      </article>

      {/* --- TRUST INDEX WIDGET --- */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16">
         <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
      </div>

      {/* --- SIGNATURE CONTACT SECTION --- */}
      <div className="bg-slate-50 border-t border-slate-100">
        <ContactCTASection />
      </div>

      {/* --- GLOBAL FOOTER --- */}
      <Footer />

      {/* --- SIGNATURE STICKY CTAs --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
        {/* WhatsApp Bubble */}
        <a 
          href="https://wa.me/447990364147" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* Speak to a Specialist Button (Matched to Brand Colors) */}
        <button 
          onClick={openContactForm}
          className="flex items-center gap-3 px-6 py-3.5 bg-[#4041d1] text-white rounded-full font-bold text-[11px] shadow-2xl hover:bg-[#2a2bb8] transition-colors group pointer-events-auto uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
          Speak to a Specialist
        </button>
      </div>

    </div>
  );
}
