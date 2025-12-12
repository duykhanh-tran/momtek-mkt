'use client';
import { PronunciationExercise } from '@/types/payload-types';
import { Mic, Loader2, Play, StopCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import { startRecording, stopRecording } from '@/lib/audio-recorder'; 
import { AzurePronunciationResult } from '@/types/azure-types'; 
import GradingResult from './GradingResult';

interface SpeechAIGraderProps {
  exercise: PronunciationExercise;
}

type GradingStatus = 'idle' | 'recording' | 'processing' | 'success' | 'error';

export default function SpeechAIGrader({ exercise }: SpeechAIGraderProps) {
  const [status, setStatus] = useState<GradingStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AzurePronunciationResult | null>(null);

  // 1. Bắt đầu Ghi âm
  const handleStartRecording = async () => {
    setStatus('recording');
    setError(null);
    setResult(null);

    try {
      // SỬA LỖI 1: Gọi hàm trực tiếp
      await startRecording();
    } catch (err) {
      console.error(err);
      setStatus('error');
      setError('Không thể truy cập micro. Vui lòng kiểm tra quyền.');
    }
  };

  // 2. Dừng & Chấm điểm
  const handleStopAndGrade = async () => {
    // SỬA LỖI 1: Xóa 'if (!recorderRef.current)'

    setStatus('processing');
    try {
      // SỬA LỖI 1: Gọi hàm trực tiếp
      const audioBlob = await stopRecording(); 
      const referenceText = exercise.textToPractice.map(t => t.text).join(' ');

      // Tạo FormData để gửi lên API Route (Giai đoạn 4a)
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.wav');
      formData.append('referenceText', referenceText);

      // Gọi API
      const response = await fetch('/api/grade-speech', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Lỗi từ server chấm điểm');
      }

      const resultData: AzurePronunciationResult = await response.json();
      setResult(resultData);
      setStatus('success');

    } catch (err) {
      console.error(err);
      setStatus('error');
      setError((err as Error).message || 'Chấm điểm thất bại.');
    }
  };
  
  // Helper để lấy văn bản hiển thị
  const getReferenceText = () => {
    return exercise.textToPractice.map((item, index) => (
      <p key={index} className="mb-2 last:mb-0">{item.text}</p>
    ));
  };

  return (
    <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-green-800">{exercise.title}</h3>
        <Mic className="w-8 h-8 text-green-500" />
      </div>
      
      <p className="text-gray-700 mb-4">Hãy luyện tập các câu sau:</p>
      <div className="text-left bg-white p-4 rounded-md shadow-sm mb-6 text-gray-800 text-lg">
        {getReferenceText()}
      </div>

      {/* 1. Nút điều khiển Ghi âm */}
      <div className="flex justify-center mb-4">
        {status === 'idle' && (
          <button
            onClick={handleStartRecording}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            <Play className="w-5 h-5" />
            Bắt đầu Ghi âm
          </button>
        )}
        {status === 'recording' && (
          <button
            onClick={handleStopAndGrade}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            <StopCircle className="w-5 h-5" />
            Dừng & Chấm điểm
          </button>
        )}
      </div>

      {/* 2. Hiển thị trạng thái Processing */}
      {status === 'processing' && (
        <div className="flex items-center justify-center gap-2 text-gray-600 font-medium">
          <Loader2 className="w-6 h-6 animate-spin" />
          Đang chấm điểm, vui lòng chờ...
        </div>
      )}

      {/* 3. Hiển thị lỗi (nếu có) */}
      {status === 'error' && (
        <div className="flex items-center gap-2 bg-red-100 text-red-700 p-3 rounded-md">
          <AlertTriangle className="w-5 h-5" />
          <p><strong>Lỗi:</strong> {error}</p>
        </div>
      )}

      {/* 4. Hiển thị Kết quả (nếu có) */}
      {status === 'success' && result && (
        // SỬA LỖI 2: Thêm dấu '!' sau 'result'
        <GradingResult result={result!} />
      )}
    </div>
  );
}