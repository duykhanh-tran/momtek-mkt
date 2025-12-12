'use client'; // Bắt buộc - Đây là Client Component

import { useState } from 'react';
import { Unit, Lesson } from '@/types/payload-types';
import LessonSidebar from './LessonSidebar';
import LessonDisplayArea from './LessonDisplayArea';
import Modal from '@/components/ui/Modal'; // Component Modal (Bước 5)

interface UnitLayoutProps {
  unit: Unit;
  userStatus?: { isPro: boolean }; 
}

export default function UnitLayout({ 
  unit, 
  userStatus = { isPro: false } // Giả lập user chưa phải PRO
}: UnitLayoutProps) {
  
  // Task 2: Thêm useState(selectedLessonIndex) [source: 132]
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [isProModalOpen, setIsProModalOpen] = useState(false);

  // Lấy ra bài học hiện tại dựa trên state
  const currentLesson: Lesson = unit.lessons[selectedLessonIndex];

  // Hàm được gọi từ Sidebar khi chọn bài học
  const handleLessonSelect = (index: number) => {
    setSelectedLessonIndex(index);
  };

  // Hàm được gọi từ Sidebar khi click vào bài PRO [source: 136]
  const handleProLessonClick = () => {
    setIsProModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-4 gap-6 ">
        
        {/* Cột Trái: Main Content */}
        <div className="flex-grow w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-3xl font-bold mb-2">{unit.title}</h1>
          
          {/* Hiển thị nội dung của BÀI HỌC ĐANG CHỌN (currentLesson) */}
          <LessonDisplayArea lesson={currentLesson} />
        </div>

        {/* Cột Phải: Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 md:sticky md:top-4 h-fit">
          {/* Task 3: Truyền các hàm (handler) và state xuống Sidebar
          */}
          <LessonSidebar 
            lessons={unit.lessons} 
            activeLessonIndex={selectedLessonIndex}
            userStatus={userStatus}
            onLessonSelect={handleLessonSelect}
            onProLessonClick={handleProLessonClick}
          />
        </div>
      </div>

      {/* Task 5: Hiển thị Modal khi click vào bài PRO */}
      <Modal 
        isOpen={isProModalOpen} 
        onClose={() => setIsProModalOpen(false)}
        title="Yêu cầu Nâng cấp PRO"
      >
        <div className="p-4">
          <p className="text-gray-700">
            Đây là nội dung dành riêng cho thành viên PRO. Vui lòng nâng cấp
            tài khoản của bạn để truy cập toàn bộ bài học.
          </p>
          <button 
            onClick={() => alert('Chuyển đến trang Nâng cấp!')}
            className="mt-4 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Nâng cấp Ngay
          </button>
        </div>
      </Modal>
    </>
  );
}