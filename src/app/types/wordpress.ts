export interface WordPressPost {
  ID: number;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  slug: string;
  author: {
    ID: number;
    name: string;
    email: string;
  };
  featured_image?: string;
  status: string;
  URL: string;
}

export interface WordPressError {
  error: string;
  message: string;
}