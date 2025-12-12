'use client';

import { Quiz, QuizQuestion } from '@/types/payload-types';
import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw } from 'lucide-react';
import Image from 'next/image'; // <-- 1. IMPORT IMAGE

const PAYLOAD_SERVER_URL = process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL || 'http://localhost:3000';

interface QuizPlayerProps {
  quizData: Quiz;
}

export default function QuizPlayer({ quizData }: QuizPlayerProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = quizData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  // ... (Tất cả các hàm xử lý: handleOptionSelect, handleNext, v.v... giữ nguyên) ...
  // Hàm xử lý khi chọn 1 đáp án
  const handleOptionSelect = (optionIndex: number) => {
    if (showResults) return;

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: optionIndex,
    });
  };

  // Hàm xử lý khi nhấn "Tiếp theo" hoặc "Hoàn thành"
  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  // Hàm "Chơi lại"
  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  // Hàm tính điểm
  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, qIndex) => {
      const selectedOptionIndex = selectedAnswers[qIndex];
      if (selectedOptionIndex !== undefined) {
        if (question.options[selectedOptionIndex].isCorrect) {
          correctCount++;
        }
      }
    });
    return correctCount;
  };

  // ---- RENDER (ĐÃ CẬP NHẬT) ----

  return (
    // Sửa lại class một chút để giống với ảnh mẫu của bạn (bỏ bg-blue-50)
    <div className="p-4 md:p-6 border rounded-lg bg-white">
      
      {/* 1. Tiêu đề bài Quiz (Luôn hiển thị) */}
      <h3 className="text-xl font-bold mb-1 text-gray-800">{quizData.title}</h3>

      {showResults ? (
        
        // ---- 2a. Render Kết quả (Giữ nguyên logic màu) ----
        <div className="text-center pt-4">
          {(() => {
            const score = calculateScore();
            const total = questions.length;
            const percentage = (score / total) * 100;
            let scoreColorClass = '';
            if (percentage > 75) {
              scoreColorClass = 'text-green-600';
            } else if (percentage >= 50) {
              scoreColorClass = 'text-yellow-600';
            } else {
              scoreColorClass = 'text-red-600';
            }    
            const percentageDisplay = percentage.toFixed(0);
            return (
              <>
                <h3 className={`text-2xl font-bold mb-4 ${scoreColorClass}`}>Hoàn thành!</h3>
                <p className="text-xl mb-2">
                  Kết quả của bạn:
                  <span className={`font-bold ${scoreColorClass}`}> {score} / {total}</span>
                </p>
                <p className={`text-4xl font-bold mb-6 ${scoreColorClass}`}>{percentageDisplay}%</p>
                
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-150 active:scale-[0.98] transform"
                >
                  <RotateCcw className="w-4 h-4" />
                  Chơi lại
                </button>
              </>
            );
          })()}
        </div>

      ) : (

        // ---- 2b. Render Câu hỏi (ĐÃ CẬP NHẬT) ----
        <> 
          <p className="text-sm text-gray-500 mb-4">
            Câu {currentQuestionIndex + 1} / {questions.length}
          </p>
          {/* 2. HIỂN THỊ HÌNH ẢNH (MỚI) */}
          {currentQuestion.questionImage && currentQuestion.questionImage.url && (
            <div className="mb-6 overflow-hidden rounded-xl shadow-md">
              <Image
                // 2. SỬA DÒNG NÀY:
                src={`${PAYLOAD_SERVER_URL}${currentQuestion.questionImage.url}`}
                alt={currentQuestion.questionImage.alt || 'Question Image'}
                // Payload cung cấp width/height gốc, ta dùng nó
                width={currentQuestion.questionImage.width}
                height={currentQuestion.questionImage.height}
                className="w-full h-auto object-cover"
                // Thêm thuộc tính này để ưu tiên tải ảnh
                priority={true} 
              />
            </div>
          )}
          {/* 3. Nội dung câu hỏi (Giữ nguyên) */}
          <p className="text-xl font-semibold text-gray-900 mb-6">
            {currentQuestion.questionText}
          </p>

          {/* 4. Các lựa chọn đáp án (Giữ nguyên) */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestionIndex] === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  className={`
                    w-full text-left p-4 rounded-lg border-2 
                    transition-all duration-150 transform
                    ${isSelected 
                      ? 'bg-blue-100 border-blue-500 ring-2 ring-blue-300' 
                      : 'bg-white border-gray-200 hover:bg-gray-50'}
                    active:scale-[0.98]
                  `}
                >
                  <span className={isSelected ? 'font-bold text-blue-700' : 'text-gray-700'}>
                    {String.fromCharCode(65 + index)}. {option.optionText}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 5. Nút Điều hướng (Giữ nguyên) */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="
                inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white 
                font-bold rounded-lg shadow-md transition-all duration-150
                hover:bg-blue-700
                disabled:bg-gray-300 disabled:cursor-not-allowed
                active:scale-[0.98] transform
              "
            >
              {currentQuestionIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}