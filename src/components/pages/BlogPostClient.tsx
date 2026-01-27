"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, Dot, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BlogPost, getBlogPostBySlug, getBlogPostNavigation } from "@/lib/contentful";
import Footer from "@/components/Footer";

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
      year: "numeric", month: "long", day: "numeric",
    });
  };

  const renderRichText = (content: unknown) => {
    if (!content) return null;
    if (typeof content === "string") {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

    if (content && typeof content === "object" && "content" in content) {
      const richContent = content as { content: unknown[] };
      return richContent.content.map((node: any, index: number) => {
        if (node.nodeType === "paragraph") {
          return (
            <p key={index} className="mb-6 text-base md:text-lg text-slate-600 font-inter leading-relaxed">
              {node.content?.map((textNode: any) => textNode.value)}
            </p>
          );
        }
        if (node.nodeType === "heading-2") {
          return (
            <h2 key={index} className="text-2xl md:text-3xl font-raleway font-semibold text-slate-900 mt-12 mb-6 leading-tight">
              {node.content?.map((textNode: any) => textNode.value)}
            </h2>
          );
        }
        return null;
      });
    }
    return null;
  };

  if (notFound || !post) return <div className="min-h-screen bg-white" />;

  return (
    <motion.div initial="hidden" animate={isLoaded ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.05)_0,rgba(0,163,255,0)_50%)]"></div>

      <header className="pt-16 md:pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <Link href="/blog" className="inline-flex items-center text-xs font-inter font-medium text-slate-500 hover:text-[var(--brand-blue)] transition-colors">
                <ArrowLeft className="w-3 h-3 mr-1" /> Back to Insights
              </Link>
              {navigation.next && (
                <Link href={`/blog/${navigation.next.slug}`} className="text-xs font-inter font-medium text-[var(--brand-blue)] hover:underline flex items-center">
                  Next Article <ChevronRight className="w-3 h-3 ml-1" />
                </Link>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-[var(--brand-blue-50)] text-[var(--brand-blue)] rounded-full text-[10px] font-bold uppercase tracking-wider">
                {post.type?.[0] || "Medical Insight"}
              </span>
              <Dot className="text-slate-300" />
              <span className="text-xs font-inter text-slate-500">{formatDate(post.date)}</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-raleway font-semibold text-slate-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </motion.h1>

            {post.excerpt && (
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 font-inter leading-relaxed italic border-l-4 border-[var(--brand-blue-100)] pl-6">
                {post.excerpt}
              </motion.p>
            )}
          </motion.div>
        </div>
      </header>

      {post.coverImage && (
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
              <img src={post.coverImage.url} alt={post.coverImage.title} className="w-full h-[300px] md:h-[500px] object-cover" />
            </motion.div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.article variants={containerVariants} initial="hidden" animate="visible" className="prose prose-slate max-w-none">
            <motion.div variants={itemVariants}>
              {renderRichText(post.content)}
            </motion.div>
          </motion.article>
          
          <motion.div variants={itemVariants} className="mt-16 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-600 font-inter mb-6">Interested in learning more about this treatment?</p>
            <Link href="/contact" className="inline-flex px-8 py-3 bg-[var(--brand-blue)] text-white rounded-lg font-inter font-medium hover:bg-[var(--brand-blue-dark)] transition-all shadow-lg">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
