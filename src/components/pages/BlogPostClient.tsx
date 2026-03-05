"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Dot, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp, FaGoogle, FaUserMd } from "react-icons/fa"; // Using icons for GMC/Google
import ContactCTASection from "@/components/ContactCTASection";
import { getImageUrl } from "@/lib/contentful/image-loader";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BlogPostClient({ post, navigation }: any) {
  
  // TRIGGER THE EXISTING CONTACT DRAWER
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

  return (
    <div className="bg-white min-h-screen font-inter pb-20">
      
      {/* --- AUTHORITY HERO SECTION --- */}
      <header className="relative pt-10 md:pt-12 pb-44 bg-[#0A1128] overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/95 to-[#0A1128] z-10"></div>
          <img src="/hero_img.png" alt="BG" className="w-full h-full object-cover opacity-10" />
        </div>

        {/* --- GRAND HORIZON NAVIGATION --- */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-6 mb-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link href="/blog" className="inline-flex items-center text-[10px] font-bold text-blue-400 hover:text-white transition-all uppercase tracking-[0.25em]">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Insights
            </Link>
            {navigation.next && (
              <Link href={`/blog/${navigation.next.slug}`} className="text-[10px] font-bold text-blue-400 hover:text-white flex items-center uppercase tracking-[0.25em]">
                Next Article <ChevronRight className="w-3 h-3 ml-2" />
              </Link>
            )}
          </motion.div>
        </div>

        {/* --- CENTER CONTENT & AUTHORITY BADGES --- */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            
            {/* STATIC TRUST BADGES */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 mb-8 opacity-60">
               <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                  <FaUserMd className="text-blue-400 w-4 h-4" /> GMC Registered
               </div>
               <div className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest">
                  <FaGoogle className="text-yellow-500 w-3.5 h-3.5" /> 5.0 Google Review
               </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/30 border border-blue-400/20 text-blue-300 rounded-full text-[9px] font-bold uppercase tracking-widest">
                {post.type?.[0] || "Medical Insight"}
              </span>
              <Dot className="text-slate-600" />
              <span className="text-[11px] font-medium text-slate-400 tracking-wide">{formatDate(post.date)}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-2xl md:text-[38px] font-raleway font-bold text-white mb-6 leading-[1.2] tracking-tight max-w-3xl mx-auto">
              {post.title}
            </motion.h1>

            {post.excerpt && (
              <motion.p variants={itemVariants} className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-xl mx-auto opacity-80">
                {post.excerpt}
              </motion.p>
            )}
          </motion.div>
        </div>
      </header>

      {/* --- RISING COVER IMAGE (FULLY VISIBLE) --- */}
      {post.coverImage && (
        <section className="relative z-20 -mt-36 mb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3 }}
              className="rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] bg-white aspect-video md:aspect-[21/8]"
            >
              <img 
                src={getImageUrl(post.coverImage.url)} 
                alt={post.coverImage.title || "Cover"} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* --- MAIN ARTICLE CONTENT --- */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Your rich text / blocks rendering logic goes here */}
        <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed">
           {/* RENDER CONTENT BLOCKS */}
        </div>
      </article>

      {/* --- SIGNATURE CONTACT SECTION (NO MID-TEXT BUTTONS) --- */}
      <div className="mt-24">
        <ContactCTASection />
      </div>

      {/* --- SIGNATURE STICKY CTAs --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
        {/* WHATSAPP BUBBLE */}
        <a 
          href="https://wa.me/447990364147" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>

        {/* SPECIALIST PILL */}
        <button 
          onClick={openContactForm}
          className="flex items-center gap-3 px-6 py-3.5 bg-[#0A1128] text-white rounded-full font-bold text-xs shadow-2xl border border-white/10 hover:bg-blue-900 transition-colors group"
        >
          <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
          Speak to a Specialist
        </button>
      </div>

    </div>
  );
}
