// src/app/blog/[slug]/page.tsx
import BlogPostClient from "@/components/pages/BlogPostClient";
import { notFound } from "next/navigation";
// Import your fetching function from your Contentful lib
import { getPostBySlug } from "@/lib/contentful"; 

export default async function Page({ params }: { params: { slug: string } }) {
  // 1. Fetch the data on the Server (Great for SEO & Speed)
  const post = await getPostBySlug(params.slug);

  // 2. If no post is found, return a 404 page
  if (!post) {
    notFound();
  }

  // 3. For now, we will pass an empty navigation object 
  // until we set up the "Next/Prev" fetching logic.
  const navigation = {};

  // 4. Pass the fully fetched data to your Signature Client Component
  return <BlogPostClient post={post} navigation={navigation} />;
}
