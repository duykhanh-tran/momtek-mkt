export interface Media {
  id: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  alt: string;
}

export interface User {
  id: string;
  name?: string;
  email?: string;
}

export interface Category {
  id: string;
  name?: string;
  slug?: string;
}

// Định nghĩa cho từng loại Block
export interface RichTextBlock {
  id?: string;
  blockType: 'RichTextBlock';
  content: any[]; // Lexical editor data
}

export interface CtaBlock {
  id?: string;
  blockType: 'CtaBlock';
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ExpertNoteBlock {
  id?: string;
  blockType: 'ExpertNoteBlock';
  note: string;
}

export interface ExpertProfileBlock {
    id?: string;
    blockType: 'ExpertProfileBlock';
    avatar: Media;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

// Kiểu dữ liệu chính cho một bài Post
export interface Post {
  id: string;
  title: string;
  slug: string;
  postImage: Media;
  excerpt: string;
  contentLayout: (RichTextBlock | CtaBlock | ExpertNoteBlock | ExpertProfileBlock)[];
  status: 'draft' | 'published';
  publishedDate: string;
  author: User;
  category: Category;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}
