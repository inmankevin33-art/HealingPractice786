"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp, FaGoogle, FaStar, FaLock } from "react-icons/fa"; 
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

  // --- SMART SCALING LOGIC FOR TITLES ---
  const getTitleSizeClasses = (title: string) => {
    if (!title) return "text-3xl md:text-5xl lg:text-[54px]"; 
    const length = title.length;
    
    if (length < 40) return "text-4xl md:text-6xl lg:text-[64px]";
    else if (length < 80) return "text-3xl md:text-5xl lg:text-[54px]";
    else return "text-3xl md:text-4xl lg:text-[44px]";
  };

  // --- UPGRADED: TRUE 50/50 EZRA GRID RENDERER ---
  const renderRichText = (content: RichTextDocument | undefined) => {
    if (!content || !content.content) return null;
    
    // 1. Chunk the article into sections (Image + Associated Paragraphs)
    const sections: { image: RichTextNode | null; text: RichTextNode[] }[] = [];
    let currentText: RichTextNode[] = [];
    let currentImage: RichTextNode | null = null;

    content.content.forEach((node: RichTextNode) => {
      if (node.nodeType === "embedded-asset-block") {
        // If we hit a new image, save the previous chunk and start a new one
        if (currentText.length > 0 || currentImage) {
          sections.push({ image: currentImage, text: currentText });
          currentText = [];
          currentImage = null;
        }
        currentImage = node;
      } else {
        currentText.push(node);
      }
    });

    // Push the final chunk
    if (currentText.length > 0 || currentImage) {
      sections.push({ image: currentImage, text: currentText });
    }

    let imageCounter = 0;

    // 2. Render the chunks
    return sections.map((section, index) => {
      
      // Helper to render the text nodes beautifully
      const renderText = (nodes: RichTextNode[]) => (
        nodes.map((n, i) => {
          if (n.nodeType === "paragraph") {
            return (
              <p key={i} className="mb-6 text-slate-700 leading-relaxed text-base md:text-lg font-light font-inter">
                {n.content?.map((c: RichTextChild) => c.value).join("")}
              </p>
            );
          }
          // Catch all for headings inside the rich text if you ever use them
          if (n.nodeType.includes("heading")) {
             return (
               <h3 key={i} className="text-2xl font-serif text-slate-900 mb-4 mt-8">
                 {n.content?.map((c: RichTextChild) => c.value).join("")}
               </h3>
             )
          }
          return null;
        })
      );

      // --- LAYOUT A: TEXT ONLY (Usually the intro before the first image) ---
      if (!section.image) {
        return (
          <div key={index} className="max-w-3xl mx-auto px-4 sm:px-6 w-full mb-16">
            {renderText(section.text)}
          </div>
        );
      }

      // --- LAYOUT B: THE 50/50 EZRA GRID ---
      imageCounter++;
      const isEven = imageCounter % 2 === 0;
      
      const url = section.image.data?.target?.fields?.file?.url;
      const title = section.image.data?.target?.fields?.title || "Editorial Image";
      const imgUrl = getImageUrl(url);

      return (
        <div key={index} className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* IMAGE COLUMN (Alternates left/right based on even/odd) */}
            <div className={`w-full ${isEven ? "md:order-2" : "md:order-1"}`}>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                {imgUrl && <img src={imgUrl} alt={title} className="w-full h-auto object-cover" />}
              </div>
            </div>

            {/* TEXT COLUMN */}
            <div className={`w-full flex flex-col justify-center ${isEven ? "md:order-1" : "md:order-2"}`}>
              {renderText(section.text)}
            </div>

          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      
      <header className="relative pt-8 md:pt-10 pb-12 md:pb-16 bg-[#0A1128] overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1128]/90 z-10"></div>
          <img src="/hero_img.png" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
        </div>

        {/* --- HORIZON NAVIGATION --- */}
        <div className="relative z-20 max-w-[1200px] mx-auto px-6 mb-8 md:mb-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between">
            <Link href="/blog" className="inline-flex items-center text-[10px] md:text-xs font-semibold text-slate-400 hover:text-white transition-all uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Insights
            </Link>
            
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

            {/* Title: Smart Scaling */}
            <motion.h1 variants={itemVariants} className={`${getTitleSizeClasses(post.title)} font-serif font-normal text-white mb-6 leading-[1.2] mx-auto max-w-4xl transition-all duration-300`}>
              {post.title}
            </motion.h1>

            {/* Author & Date */}
            <motion.div variants={itemVariants} className="mb-10">
              <span className="text-sm md:text-base font-inter text-slate-300">
                Dr. Syed Abdi, {formatDate(post.date)}
              </span>
            </motion.div>

            {/* --- TRUST BAR --- */}
            <motion.div variants={itemVariants} className="max-w-4xl mx-auto bg-[#0f172a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                <div className="flex justify-center items-center group cursor-pointer px-2 pt-2 md:pt-0">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#4285F4] shadow-md shrink-0">
                      <FaGoogle className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex text-amber-400 text-[10px] mb-0.5">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="text-white text-[9px] font-bold tracking-widest uppercase font-inter">5.0 Patient Rating</span>
                    </div>
                  </div>
                </div>

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
      {/* Notice the container is now w-full instead of max-w-3xl! */}
      <article className="flex-grow w-full py-12 md:py-20">
        
        {/* Lead Cover Image (If present) */}
        {post.coverImage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto mb-16 px-4 sm:px-6"
          >
            <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-md">
              <img 
                src={getImageUrl(post.coverImage.url)} 
                alt={post.coverImage.title || "Cover"} 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Excerpt Lead Paragraph */}
        {post.excerpt && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-xl md:text-2xl text-slate-800 font-raleway leading-relaxed mb-12 border-l-2 border-[#4041d1] pl-6">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Contentful Rich Text (Sections) */}
        <div className="w-full">
           {renderRichText(post.content as unknown as RichTextDocument)}
        </div>
      </article>

      {/* --- TRUST INDEX WIDGET --- */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 mb-16 mt-8">
         <TrustReviews widgetUrl="https://cdn.trustindex.io/loader.js?eb147a565c3c36945f26281e586" />
      </div>

      <div className="bg-slate-50 border-t border-slate-100">
        <ContactCTASection />
      </div>

      <Footer />

    </div>
  );
}
