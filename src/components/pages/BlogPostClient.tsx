"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// KEEPING YOUR WORKING ICONS
import { ArrowLeft, Dot, ChevronRight } from "lucide-react"; 
import Link from "next/link";
import Image from "next/image"; 
import { BlogPost, getBlogPostBySlug, getBlogPostNavigation } from "@/lib/contentful";
import Footer from "@/components/Footer";

// Specific types to replace 'any'
interface RichTextNode {
  nodeType: string;
  value?: string;
  content?: RichTextNode[];
}

interface RichTextContent {
  content: RichTextNode[];
}

// ✅ 1. NEW HELPER: This fixes the broken "Blue Question Mark" image
const getImageUrl = (url: string) => {
  if (!url) return "";
  if (url.startsWith("//")) {
    return `https:${url}`;
  }
  return url;
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [navigation, setNavigation] = useState<{
    previous: BlogPost | null;
    next: BlogPost | null;
  }>({ previous: null, next: null });
  const [isLoaded, setIsLoaded] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPost = async () => {
      try {
        const [blogPost, nav] = await Promise.all([
          getBlogPostBySlug(slug),
          getBlogPostNavigation(slug),
        ]);

        if (blogPost) {
          setPost(blogPost);
          setNavigation(nav);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setNotFound(true);
      }
    };
    fetchPost();
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, [slug]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderRichText = (content: unknown) => {
    const richContent = content as RichTextContent;
    if (!richContent || !richContent.content) return null;

    return richContent.content.map((node, index) => {
      if (node.nodeType === "paragraph") {
        return (
          <p key={index} className="mb-6 text-base md:text-lg text-slate-600 font-inter leading-relaxed">
            {node.content?.map((textNode) => textNode.value).join("")}
          </p>
        );
      }
      if (node.nodeType.startsWith("heading-")) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-raleway font-semibold text-slate-900 mt-12 mb-6 leading-tight">
            {node.content?.map((textNode) => textNode.value).join("")}
          </h2>
        );
      }
      return null;
    });
  };

  if (notFound || !post) return <div className="min-h-screen bg-white" />;

  return (
    <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      
      {/* ✅ 2. HERO UPDATE: Swapped Radial Gradient for Standard Hero Image to match other pages */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-[-1] overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white z-10"></div>
         <img 
            src="/hero_img.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-60"
         />
      </div>

      <header className="pt-32 md:pt-40 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            
            {/* Navigation Bar */}
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/60">
              <Link href="/blog" className="inline-flex items-center text-xs font-inter font-bold text-[#4041d1] hover:opacity-70 transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Insights
              </Link>
              {navigation.next && (
                <Link href={`/blog/${navigation.next.slug}`} className="text-xs font-inter font-bold text-[#4041d1] hover:underline flex items-center uppercase tracking-widest">
                  Next Article <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              )}
            </motion.div>

            {/* Meta Data */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-[var(--brand-blue-50)] text-[#4041d1] rounded-full text-[10px] font-bold uppercase tracking-wider">
                {post.type?.[0] || "Medical Insight"}
              </span>
              <Dot className="text-slate-300" />
              <span className="text-xs font-inter font-medium text-slate-500">{formatDate(post.date)}</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-raleway font-bold text-slate-900 mb-8 leading-tight">
              {post.title}
            </motion.h1>

            {post.excerpt && (
              <motion.p variants={itemVariants} className="text-lg text-slate-600 font-inter leading-relaxed max-w-2xl mx-auto">
                {post.excerpt}
              </motion.p>
            )}
          </motion.div>
        </div>
      </header>

      {post.coverImage && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-video md:aspect-[21/9]"
            >
              {/* ✅ 3. IMAGE FIX: Using getImageUrl() to add https: */}
              <Image 
                src={getImageUrl(post.coverImage.url)} 
                alt={post.coverImage.title || "Blog Cover"} 
                fill
                priority
                className="object-cover" 
              />
            </motion.div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.article variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
              {renderRichText(post.content)}
            </motion.div>
          </motion.article>
          
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-600 font-inter mb-6 font-medium">Want to discuss this treatment with a specialist?</p>
            <Link 
                href="/contact" 
                // ✅ 4. COLOR FIX: Locked to Brand Blue #4041d1
                className="inline-flex px-8 py-3 bg-[#4041d1] text-white rounded-lg font-inter font-bold hover:bg-[#2a2bb8] transition-all shadow-md"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
