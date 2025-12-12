'use client'; 

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  if (!url) {
    return (
      <div className="aspect-video w-full bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">Lỗi: Không tìm thấy URL của video.</p>
      </div>
    );
  }
  
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
      <video
        key={url} 
        controls 
        preload="metadata"
        className="w-full h-full"
      >
        <source src={url} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
  );
}