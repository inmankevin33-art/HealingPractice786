// src/app/blog/[slug]/page.tsx
import BlogClient from "@/components/pages/BlogPostClient";

export default function Page({ params }: { params: { slug: string } }) {
  // All the "Keyword" value comes from the content 
  // rendered by this component and the layout's metadata.
  return <BlogClient slug={params.slug} />;
}
