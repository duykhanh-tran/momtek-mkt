'use client';

import { Lesson } from '@/types/payload-types';
import { Lock, PlayCircle, Mic, Gamepad2, BookOpen, Video } from 'lucide-react';

interface LessonSidebarProps {
  lessons: Lesson[];
  activeLessonIndex: number;
  userStatus: { isPro: boolean };
  onLessonSelect: (index: number) => void;
  onProLessonClick: () => void;
}

// ... (Hàm getIcon giữ nguyên) ...
const getIcon = (type: Lesson['lessonType']) => {
  switch (type) {
    case 'Song':
      return <PlayCircle className="w-5 h-5 text-pink-500" />;
    case 'ShortStory':
    case 'Dubbing':
      return <Video className="w-5 h-5 text-blue-500" />;
    case 'Karaoke':
      return <Mic className="w-5 h-5 text-purple-500" />;
    case 'SpeechAI':
      return <Mic className="w-5 h-5 text-green-500" />;
    case 'GameQuiz':
      return <Gamepad2 className="w-5 h-5 text-orange-500" />;
    case 'Workbook':
      return <BookOpen className="w-5 h-5 text-yellow-500" />;
    default:
      return <PlayCircle className="w-5 h-5 text-gray-400" />;
  }
};

export default function LessonSidebar({ 
  lessons, 
  activeLessonIndex,
  userStatus,
  onLessonSelect,
  onProLessonClick 
}: LessonSidebarProps) {
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        Nội dung bài học
      </h3>
      <nav className="space-y-2">
        {lessons.map((lesson, index) => {
          const isActive = index === activeLessonIndex;
          const isPro = lesson.isPro;
          const isLocked = isPro && !userStatus.isPro;

          // Xác định class cho item
          const baseClasses = "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all duration-150 transform";
          const activeClasses = isActive ? "bg-blue-100 text-blue-700 font-semibold" : "";
          const inactiveClasses = isLocked 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "text-gray-600 hover:bg-gray-100";

          return (
            <button
              key={lesson.id}
              onClick={() => {
                if (isLocked) {
                  onProLessonClick(); 
                } else {
                  onLessonSelect(index); 
                }
              }}
              // THÊM TIỂU TIẾT: Hiệu ứng "nhấn"
              className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses} active:scale-[0.97]`}
              disabled={isLocked && !isActive} 
            >
              {/* THÊM TIỂU TIẾT: Hiệu ứng "pop" cho icon */}
              <span className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                {getIcon(lesson.lessonType)}
              </span>
              <span className="flex-grow">{lesson.title}</span>
              {isLocked && <Lock className="w-4 h-4 text-gray-400" />}
            </button>
          );
        })}
      </nav>
    </div>
  );
}