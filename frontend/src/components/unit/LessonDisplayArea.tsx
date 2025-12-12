'use client'; // Bắt buộc - Vì nó render các component con

import { Lesson, Video, Quiz, KaraokeTrack, PronunciationExercise, Workbook } from '@/types/payload-types';
import VideoPlayer from './VideoPlayer';
import RichTextRenderer from './RichTextRenderer';
// Import các component MỚI (chúng ta sẽ tạo ở Bước 5)
import QuizPlayer from './QuizPlayer';
import KaraokePlayer from './KaraokePlayer';
import SpeechAIGrader from './SpeechAIGrader';
import WorkbookDownloader from './WorkbookDownloader';

interface LessonDisplayAreaProps {
  lesson: Lesson;
}

export default function LessonDisplayArea({ lesson }: LessonDisplayAreaProps) {
  
  const { lessonType, content, instructions, lyrics, title } = lesson;

  // Hàm render Hướng dẫn và Lời bài hát
  const renderExtras = () => (
    <>
      {instructions && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold text-lg mb-2 text-black">Hướng dẫn</h4>
          <div className="prose prose-sm max-w-none text-black">
            <RichTextRenderer content={instructions} />
          </div>
        </div>
      )}
      {lyrics && (
        <div className="mt-6 p-4 bg-yellow-50 rounded-md">
          <h4 className="font-semibold text-lg mb-2 text-black">Lời bài hát (Lyrics)</h4>
          <div className="prose prose-sm max-w-none text-black">
            <RichTextRenderer content={lyrics} />
          </div>
        </div>
      )}
    </>
  );

  // Task 4: Dùng switch...case để render component [source: 134-135]
  const renderLessonContent = () => {
    // Chúng ta sẽ truy cập vào content.value
    const { value } = content;

    switch (lessonType) {
      case 'Song':
      case 'ShortStory':
      case 'Dubbing':
        // Dòng cũ: (content as Video).internalUrl
        // Dòng mới:
        return <VideoPlayer url={(value as Video).internalUrl} />;
      
      case 'GameQuiz':
        // Dòng cũ: content as Quiz
        // Dòng mới:
        return <QuizPlayer quizData={value as Quiz} />;

      case 'Karaoke':
        // Dòng cũ: content as KaraokeTrack
        // Dòng mới:
        return <KaraokePlayer track={value as KaraokeTrack} />;
      
      case 'SpeechAI':
        // Dòng cũ: content as PronunciationExercise
        // Dòng mới:
        return <SpeechAIGrader exercise={value as PronunciationExercise} />;
        
      case 'Workbook':
        // Dòng cũ: (content as Workbook).file
        // Dòng mới:
        return <WorkbookDownloader file={(value as Workbook).file} />;
        
      default:
        return <p>Loại bài học không xác định: {lessonType}</p>;
    }
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-blue-50 p-4 md:p-6">
      <h3 className="text-xl font-semibold mb-4 text-black">{title}</h3>
      
      {/* Render nội dung chính của bài học */}
      {renderLessonContent()}
      
      {/* Render Hướng dẫn & Lời bài hát (nếu có) */}
      {renderExtras()}
    </div>
  );
}