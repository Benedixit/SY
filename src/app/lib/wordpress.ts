import { WordPressPost } from "../types/wordpress";



const SITE_URL = 'sabiyou2025.wordpress.com'; // Replace with your site

export async function getPostBySlug(slug: string): Promise<WordPressPost> {
  const response = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}/posts/slug:${slug}`,
    {
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Post not found');
    }
    throw new Error('Failed to fetch post');
  }

  return response.json();
}

export async function getPosts(params?: {
  number?: number;
  offset?: number;
  category?: string;
}): Promise<{ posts: WordPressPost[]; found: number }> {
  const searchParams = new URLSearchParams();
  if (params?.number) searchParams.set('number', params.number.toString());
  if (params?.offset) searchParams.set('offset', params.offset.toString());
  if (params?.category) searchParams.set('category', params.category);

  const response = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_URL}/posts?${searchParams}`,
    {
      next: { revalidate: 3600 }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}