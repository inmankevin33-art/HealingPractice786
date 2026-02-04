// src/app/blog/[slug]/page.tsx
import BlogPostClient from "@/components/pages/BlogPostClient";

export default function Page({ params }: { params: { slug: string } }) {
  // All the "Keyword" value comes from the content 
  // rendered by this component and the layout's metadata.
  return <BlogPostClient slug={params.slug} />;
}
