import BlogClient from "@/components/pages/BlogClient";
import { getAllBlogPosts } from "@/lib/contentful";
import { Metadata } from "next";

// This helps Google index your blog main page correctly
export const metadata: Metadata = {
  title: "Latest Insights on PRP & Regenerative Medicine | Healing-PRP Clinics",
  description: "Stay informed about the latest developments in PRP treatments, joint health, and aesthetic medicine from our medical experts.",
};

// ✅ FIX 1: Add Revalidation so new Contentful posts appear automatically
export const revalidate = 3600; // Revalidate every hour

export default async function Page() {
  // We fetch the posts on the server for faster loading and better SEO
  const posts = await getAllBlogPosts();

  // ✅ FIX 2: Added "|| []" to prevent crash if Contentful returns null
  return <BlogClient initialPosts={posts || []} />;
}
