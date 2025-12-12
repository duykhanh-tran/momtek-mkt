'use client';

import { X } from 'lucide-react';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Ngăn click xuyên thấu
        className="bg-white rounded-lg shadow-xl w-full max-w-md m-4"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
}