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

export interface Video {
  id: string;
  title: string;
  internalUrl: string; 
  duration?: number;
  updatedAt: string;
  createdAt: string;
}

export interface KaraokeTrack {
  id: string;
  title: string;
  audioTrackUrl: string; 
  lyricFileUrl: string; 
  updatedAt: string;
  createdAt: string;
}

export interface QuizQuestion {
  id?: string;
  questionImage?: Media;
  questionText: string;
  options: {
    optionText: string;
    isCorrect: boolean;
    id?: string;
  }[];
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  updatedAt: string;
  createdAt: string;
}

export interface PronunciationExercise {
  id: string;
  title: string;
  textToPractice: {
    text: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}

export interface Workbook {
  id: string;
  title: string;
  file: {
    url: string; 
    filename: string;
    mimeType: string;
    filesize: number;
    updatedAt: string;
    createdAt: string;
  };
  updatedAt: string;
  createdAt: string;
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
}

export interface PayloadRichText {
  root: {
    type: string;
    children: {
      type: string;
      format?: string; 
      children: {
        type: string;
        text: string;
        format?: number; 
      }[];
    }[];
  };
}

// Đây là kiểu dữ liệu cho 1 item trong mảng "lessons"
export interface Lesson {
  id?: string;
  title: string; // Ví dụ: "1. Song", "2. Karaoke"
  lessonType: 'Song' | 'ShortStory' | 'Dubbing' | 'Karaoke' | 'SpeechAI' | 'GameQuiz' | 'Workbook';
  isPro: boolean;
  icon?: string; // (Chúng ta sẽ dùng sau)
  
  // Quan trọng: Đây là trường "relationship" đa hình (polymorphic)
  // Sửa lại cho đúng cấu trúc của Payload
  content: {
    relationTo: 'videos' | 'karaokeTracks' | 'quizzes' | 'pronunciationExercises' | 'workbooks';
    value: Video | KaraokeTrack | Quiz | PronunciationExercise | Workbook;
  }; 

  lyrics?: PayloadRichText; // Lời bài hát
  instructions?: PayloadRichText; // Hướng dẫn
}

// Kiểu dữ liệu cho "Unit" (toàn bộ trang)
export interface Unit {
  id: string;
  title: string; // Ví dụ: "The Wheels on the Bus"
  slug: string;
  description?: PayloadRichText;
  topic: Topic; // Đã populate
  level?: string;
  lessons: Lesson[]; // Mảng các hoạt động
  updatedAt: string;
  createdAt: string;
}

// Kiểu dữ liệu cho API response từ Payload
export interface PayloadResponse {
  docs: Unit[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}