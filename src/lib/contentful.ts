import { createClient } from "contentful";

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

// --- NEW INTERFACE FOR OUR ZIG-ZAG BLOCKS ---
export interface ArticleBlock {
  headline?: string;
  body?: unknown; // Rich text node
  imageUrl?: string;
  imageAlt?: string;
  layoutStyle?: string; // "Image Left" or "Image Right"
  buttonText?: string;
  buttonLink?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt?: string;
  content: unknown; // Legacy body content
  articleBlocks?: ArticleBlock[]; // NEW ARRAY FOR OUR ZIG-ZAG BLOCKS
  coverImage?: {
    url: string;
    title: string;
    description?: string;
  };
  date: string;
  type?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

// Helper function to safely extract Image URLs from Contentful's nested object structure
const extractImageUrl = (imageField: unknown): { url: string; title: string } | undefined => {
  if (!imageField) return undefined;
  try {
    const fields = (imageField as Record<string, unknown>).fields as Record<string, unknown>;
    const file = fields?.file as Record<string, unknown>;
    const url = file?.url as string;
    if (!url) return undefined;
    
    return {
      url: url.startsWith("//") ? `https:${url}` : url,
      title: (fields?.title as string) || "Blog Image",
    };
  } catch {
    return undefined;
  }
};

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "post",
    });

    return response.items.map((item: Record<string, unknown>) => {
      const fields = item.fields as Record<string, unknown>;
      return {
        title: fields.title as string,
        slug: fields.slug as string,
        excerpt: fields.excerpt as string,
        content: fields.content,
        coverImage: extractImageUrl(fields.coverImage),
        date: fields.date as string,
        type: (fields.type as string[]) || [],
        seoTitle: fields.seoTitle as string,
        seoDescription: fields.seoDescription as string,
      };
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await contentfulClient.getEntries({
      content_type: "post",
      "fields.slug": slug,
      limit: 1,
      include: 2, // CRITICAL: This tells Contentful to resolve the linked 'Article Blocks'
    });

    if (response.items.length === 0) {
      return null;
    }

    const item = response.items[0] as Record<string, unknown>;
    const fields = item.fields as Record<string, unknown>;

   // Map our new Article Blocks array safely
    let parsedBlocks: ArticleBlock[] = [];
    if (fields.articleBlocks && Array.isArray(fields.articleBlocks)) {
      parsedBlocks = fields.articleBlocks.map((block: unknown) => {
        const safeBlock = block as { fields?: Record<string, unknown> };
        const blockFields = safeBlock.fields || {};
        const imageInfo = extractImageUrl(blockFields.image);

        return {
          headline: blockFields.headline as string | undefined,
          body: blockFields.body, // body stays unknown because it's rich text
          imageUrl: imageInfo?.url,
          imageAlt: imageInfo?.title,
          layoutStyle: (blockFields.layoutStyle as string | undefined) || "Image Left",
          buttonText: blockFields.buttonText as string | undefined,
          buttonLink: blockFields.buttonLink as string | undefined,
        };
      });
    }
    
    return {
      title: fields.title as string,
      slug: fields.slug as string,
      excerpt: fields.excerpt as string,
      content: fields.content,
      articleBlocks: parsedBlocks, // Attach parsed blocks to the final object
      coverImage: extractImageUrl(fields.coverImage),
      date: fields.date as string,
      type: (fields.type as string[]) || [],
      seoTitle: fields.seoTitle as string,
      seoDescription: fields.seoDescription as string,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

export async function getBlogPostNavigation(slug: string): Promise<{
  previous: BlogPost | null;
  next: BlogPost | null;
}> {
  try {
    const allPosts = await getAllBlogPosts();
    const currentIndex = allPosts.findIndex((post) => post.slug === slug);

    if (currentIndex === -1) {
      return { previous: null, next: null };
    }

    return {
      previous: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
      next: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    };
  } catch (error) {
    console.error("Error fetching blog post navigation:", error);
    return { previous: null, next: null };
  }
}
