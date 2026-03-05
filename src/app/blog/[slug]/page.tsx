// src/app/blog/[slug]/page.tsx
import { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/pages/BlogPostClient";
// Make sure getAllPosts is exported from your contentful lib!
import { getBlogPostBySlug, getAllPosts } from "@/lib/contentful"; 

// --- 1. DYNAMIC METADATA GENERATION ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return { title: "Post Not Found | Healing-PRP Clinics" };
  }

  // Fallbacks: If you have specific SEO fields in Contentful, map them here. 
  // Otherwise, it uses the main title and excerpt.
  const seoTitle = `${post.title} | Healing-PRP Clinics UK`;
  const seoDescription = post.excerpt || "Read the latest medical insights and advanced regenerative aesthetic treatments from Dr. Syed Abdi at Healing-PRP Clinics.";
  const canonicalUrl = `https://www.healing-prp.co.uk/blog/${params.slug}`;
  
  // Format the Contentful image URL for OpenGraph
  const imageUrl = post.coverImage?.url 
    ? (post.coverImage.url.startsWith("//") ? `https:${post.coverImage.url}` : post.coverImage.url)
    : "https://www.healing-prp.co.uk/default-og-image.jpg"; // Replace with your actual default OG image if you have one

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
  // Fetch the specific post
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Fetch all posts to determine the "Next Article" link
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p: any) => p.slug === params.slug);
  
  let nextArticle = undefined;

  // If we are not at the very end of the array, grab the next post's slug
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
        "url": "https://www.healing-prp.co.uk/logo.png" // Update to your actual logo path
      }
    },
    "datePublished": post.date,
    "dateModified": post.date, // You can map an updated date here if you track it in Contentful
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.healing-prp.co.uk/blog/${params.slug}`
    }
  };

  return (
    <main>
      {/* Injecting the Dynamic Google Schema */}
      <Script
        id={`article-schema-${params.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Rendering the beautiful Ezra/P-Shot UI */}
      <BlogPostClient post={post} navigation={navigation} />
    </main>
  );
}
