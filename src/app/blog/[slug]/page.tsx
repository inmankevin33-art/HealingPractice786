// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/pages/BlogPostClient";
// FIXED: Using your exact function name "getAllBlogPosts"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/contentful"; 

// --- 1. DYNAMIC METADATA GENERATION ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found | Healing-PRP Clinics" };
  }

  const seoTitle = `${post.title} | Healing-PRP Clinics UK`;
  const seoDescription = post.excerpt || "Read the latest medical insights and advanced regenerative aesthetic treatments from Dr. Syed Abdi at Healing-PRP Clinics.";
  const canonicalUrl = `https://www.healing-prp.co.uk/blog/${params.slug}`;
  
  const imageUrl = post.coverImage?.url 
    ? (post.coverImage.url.startsWith("//") ? `https:${post.coverImage.url}` : post.coverImage.url)
    : "https://www.healing-prp.co.uk/default-og-image.jpg";

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "Healing-PRP Clinics",
      locale: "en_GB",
      type: "article",
      publishedTime: post.date,
      authors: ["Dr. Syed Abdi"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: [imageUrl],
    },
  };
}

// --- 2. MAIN PAGE COMPONENT ---
export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // FIXED: Calling "getAllBlogPosts()" instead of "getAllPosts()"
  const allPosts = await getAllBlogPosts();
  
  // FIXED TYPINGS: Replaced 'any' with the specific expected type
  const currentIndex = allPosts.findIndex((p: { slug: string }) => p.slug === params.slug);
  
  let nextArticle = undefined;

  if (currentIndex !== -1 && currentIndex < allPosts.length - 1) {
    nextArticle = {
      slug: allPosts[currentIndex + 1].slug
    };
  }

  const navigation = {
    next: nextArticle
  };

  // --- 3. DYNAMIC JSON-LD SCHEMA ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": post.title,
    "description": post.excerpt || "Medical insight from Healing-PRP Clinics.",
    "image": post.coverImage?.url ? `https:${post.coverImage.url}` : "",
    "author": {
      "@type": "Person",
      "name": "Dr. Syed Abdi",
      "jobTitle": "GMC Registered Doctor",
      "url": "https://www.healing-prp.co.uk" 
    },
    "publisher": {
      "@type": "MedicalClinic",
      "name": "Healing-PRP Clinics",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.healing-prp.co.uk/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.healing-prp.co.uk/blog/${params.slug}`
    }
  };

  return (
    <main>
      <Script
        id={`article-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={post} navigation={navigation} />
    </main>
  );
}
