'use client';

import { AzurePronunciationResult, Word } from '@/types/azure-types';
import { CheckCircle2, XCircle, AlertCircle, Star } from 'lucide-react'; // Thêm Star

interface GradingResultProps {
  result: AzurePronunciationResult;
}

// CẬP NHẬT LOGIC MÀU THEO YÊU CẦU:
// < 50% = Đỏ
// 50% - 75% = Vàng
// > 75% = Xanh
const getScoreColor = (score: number) => {
  if (score > 75) return 'text-green-600';
  if (score >= 50) return 'text-yellow-600';
  return 'text-red-600';
};

// ... (getWordColor giữ nguyên) ...
const getWordColor = (word: Word) => {
  switch (word.PronunciationAssessment.ErrorType) {
    case 'None':
      return 'text-green-600 font-semibold';
    case 'Mispronunciation':
      return 'text-red-600 font-semibold underline decoration-wavy';
    case 'Omission':
      return 'text-gray-400 font-semibold line-through';
    case 'Insertion':
      return 'text-orange-600 font-semibold';
    default:
      return 'text-gray-800';
  }
};

export default function GradingResult({ result }: GradingResultProps) {
  // ... (bestResult giữ nguyên) ...
  const bestResult = result.NBest?.[0];

  if (!bestResult) {
    return <p className="text-red-500">Không nhận diện được giọng nói.</p>;
  }

  const { PronunciationAssessment: scores, Words } = bestResult;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-center text-gray-800">
        Kết quả Chấm điểm
      </h3>
      
      {/* 1. Các điểm số tổng quan */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <ScoreCard 
          title="Điểm Tổng" 
          score={scores.PronScore} 
          // THÊM TIỂU TIẾT: Thêm icon ngôi sao cho điểm tổng
          icon={<Star className={`w-6 h-6 ${getScoreColor(scores.PronScore)}`} />}
        />
        <ScoreCard 
          title="Độ chính xác" 
          score={scores.AccuracyScore} 
        />
        <ScoreCard 
          title="Độ lưu loát" 
          score={scores.FluencyScore} 
        />
        <ScoreCard 
          title="Độ đầy đủ" 
          score={scores.CompletenessScore} 
        />
      </div>

      {/* 2. Hiển thị từ vựng đã chấm */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="text-lg font-medium mb-3">Phân tích chi tiết:</h4>
        <p className="text-2xl leading-relaxed flex flex-wrap gap-x-2">
          {Words.map((word, index) => (
            <span 
              key={index} 
              className={getWordColor(word)}
              title={`Điểm: ${word.PronunciationAssessment.AccuracyScore}`}
            >
              {word.Word}
            </span>
          ))}
        </p>
        <div className="mt-4 space-y-2 text-sm">
           <p className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-600">Đúng</span>
           </p>
           <p className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-red-600" />
            <span className="font-semibold text-red-600">Phát âm sai</span>
           </p>
           <p className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-gray-400" />
            <span className="font-semibold text-gray-400">Bỏ sót từ</span>
           </p>
        </div>
      </div>
    </div>
  );
}

// Component thẻ điểm (ĐÃ CẬP NHẬT)
const ScoreCard = ({ title, score, icon }: { title: string; score: number; icon?: React.ReactNode }) => (
  // THÊM TIỂU TIẾT: Hiệu ứng "hover"
  <div className="bg-white p-4 rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105">
    <div className="flex justify-between items-center">
      <p className="text-sm text-gray-500">{title}</p>
      {/* Thêm icon (nếu có) */}
      {icon}
    </div>
    <p className={`text-3xl font-bold ${getScoreColor(score)}`}>
      {score.toFixed(0)}
    </p>
  </div>
);