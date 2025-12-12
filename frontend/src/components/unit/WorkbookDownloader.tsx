'use client';

import { Workbook } from '@/types/payload-types';
import { Download } from 'lucide-react';

interface WorkbookDownloaderProps {
  file: Workbook['file']; // Chỉ nhận object 'file'
}

export default function WorkbookDownloader({ file }: WorkbookDownloaderProps) {
  return (
    <div className="p-4 border rounded-lg bg-purple-50 text-center">
      <Download className="w-12 h-12 text-purple-500 mx-auto mb-4" />
      <h4 className="text-lg font-bold mb-2">Tài liệu học tập</h4>
      <p className="text-sm text-gray-600 mb-4">
        Tải về tài liệu (workbook) cho bài học này.
      </p>
      <a
        href={file.url}
        download={file.filename}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Download className="w-4 h-4" />
        Tải về: {file.filename}
      </a>
    </div>
  );
}