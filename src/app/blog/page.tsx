import BlogClient from "@/components/pages/BlogClient";
import { getAllBlogPosts } from "@/lib/contentful";
import { Metadata } from "next";

// This helps Google index your blog main page correctly
export const metadata: Metadata = {
  title: "Latest Insights on PRP & Regenerative Medicine | Healing-PRP Clinics",
  description: "Stay informed about the latest developments in PRP treatments, joint health, and aesthetic medicine from our medical experts.",
};

export default async function Page() {
  // We fetch the posts on the server for faster loading and better SEO
  const posts = await getAllBlogPosts();

  return <BlogClient initialPosts={posts} />;
}
