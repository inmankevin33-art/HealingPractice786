"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Dot, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
// Imported ArticleBlock from our upgraded contentful.ts
import { BlogPost, ArticleBlock, getBlogPostBySlug, getBlogPostNavigation } from "@/lib/contentful";
import Footer from "@/components/Footer";

interface RichTextNode {
  nodeType: string;
  value?: string;
  content?: RichTextNode[];
}

interface RichTextContent {
  content: RichTextNode[];
}

const getImageUrl = (url: string | undefined) => {
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

  // Safe Rich Text Renderer
  const renderRichText = (content: unknown) => {
    const richContent = content as RichTextContent;
    if (!richContent || !richContent.content) return null;

    return richContent.content.map((node, index) => {
      if (node.nodeType === "paragraph") {
        return (
          <p key={index} className="mb-6 text-sm md:text-base text-slate-600 font-inter leading-relaxed">
            {node.content?.map((textNode) => textNode.value).join("")}
          </p>
        );
      }
      if (node.nodeType.startsWith("heading-")) {
        return (
          <h2 key={index} className="text-xl md:text-2xl font-raleway font-semibold text-slate-900 mt-10 mb-4 leading-tight">
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
      
      {/* --- AUTHORITY HERO SECTION --- */}
      <header className="relative pt-10 md:pt-14 pb-32 bg-[#0A1128] overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-[#0A1128]/90 to-[#0A1128] z-10"></div>
           <img 
              src="/hero_img.png" 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
           />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            
            {/* Navigation Bar */}
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <Link href="/blog" className="inline-flex items-center text-[10px] md:text-xs font-inter font-bold text-blue-400 hover:text-white transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Insights
              </Link>
              {navigation.next && (
                <Link href={`/blog/${navigation.next.slug}`} className="text-[10px] md:text-xs font-inter font-bold text-blue-400 hover:text-white flex items-center uppercase tracking-widest">
                  Next Article <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              )}
            </motion.div>

            {/* Meta Data */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-900/40 border border-blue-400/30 text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {post.type?.[0] || "Medical Insight"}
              </span>
              <Dot className="text-slate-500" />
              <span className="text-xs font-inter font-medium text-slate-300">{formatDate(post.date)}</span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-raleway font-bold text-white mb-6 leading-tight">
              {post.title}
            </motion.h1>

            {/* Intro / Excerpt */}
            {post.excerpt && (
              <motion.p variants={itemVariants} className="text-sm md:text-base text-slate-300 font-inter leading-relaxed max-w-2xl mx-auto">
                {post.excerpt}
              </motion.p>
            )}
          </motion.div>
        </div>
      </header>
      {/* --- OVERLAPPING COVER IMAGE --- */}
      {post.coverImage && (
        <section className="relative z-20 -mt-20 mb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="rounded-2xl overflow-hidden shadow-2xl bg-white aspect-video md:aspect-[21/9]"
            >
              <img 
                src={getImageUrl(post.coverImage.url)} 
                alt={post.coverImage.title || "Cover Image"} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* --- LEGACY CONTENT (If they didn't use the new blocks) --- */}
      {!!post.content && (!post.articleBlocks || post.articleBlocks.length === 0) && (
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="prose prose-slate max-w-none">
              {renderRichText(post.content)}
            </div>
          </div>
        </section>
      )}

      {/* --- THE EZRA ZIG-ZAG BLOCKS --- */}
      {post.articleBlocks && post.articleBlocks.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {post.articleBlocks.map((block, index) => {
              // Determine layout direction based on Contentful dropdown
              const isImageRight = block.layoutStyle === "Image Right";
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  // This is the magic Tailwind trick that swaps the columns
                  className={`flex flex-col gap-12 lg:gap-20 items-center ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  
                  {/* Image Column */}
                  <div className="w-full md:w-1/2">
                    {block.imageUrl ? (
                      <div className="aspect-[4/3] rounded-sm overflow-hidden bg-slate-100 shadow-xl">
                        <img 
                          src={getImageUrl(block.imageUrl)} 
                          alt={block.imageAlt || "Article Section Image"}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      // Fallback if no image is provided
                      <div className="aspect-[4/3] rounded-sm bg-slate-100 flex items-center justify-center border border-slate-200">
                        <span className="text-slate-400 font-inter text-sm">No Image Provided</span>
                      </div>
                    )}
                  </div>

                  {/* Text Column */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {block.headline && (
                      <h2 className="text-2xl md:text-3xl font-raleway font-bold text-slate-900 mb-6 leading-snug">
                        {block.headline}
                      </h2>
                    )}
                    
                    <div className="prose prose-slate prose-sm md:prose-base">
                      {renderRichText(block.body)}
                    </div>

                    {/* Dynamic Button Injection */}
                    {block.buttonText && block.buttonLink && (
                      <div className="mt-8">
                        <Link 
                          href={block.buttonLink}
                          className="inline-flex items-center px-8 py-3.5 bg-[#0A1128] hover:bg-[#4041d1] text-white rounded-xl font-bold transition-all shadow-lg active:scale-95 gap-2 text-sm font-inter"
                        >
                          {block.buttonText} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* --- FOOTER CTA --- */}
      <section className="pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div variants={itemVariants} className="mt-12 pt-12 border-t border-slate-200 text-center">
            <h3 className="text-xl font-raleway font-bold text-slate-900 mb-4">Want to discuss your treatment plan?</h3>
            <p className="text-slate-600 font-inter mb-8 text-sm md:text-base">
              Book a private consultation with Dr Syed Abdi at our Harley Street, St Albans, or Birmingham clinics.
            </p>
            <Link 
                href="/contact" 
                className="inline-flex items-center px-10 py-4 bg-[#4041d1] text-white rounded-xl font-inter font-bold hover:bg-[#2a2bb8] transition-all shadow-xl text-sm"
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
