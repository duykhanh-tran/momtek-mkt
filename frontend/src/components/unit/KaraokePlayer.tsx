'use client';

import { KaraokeTrack } from '@/types/payload-types';
import { Mic2 } from 'lucide-react';

interface KaraokePlayerProps {
  track: KaraokeTrack;
}

export default function KaraokePlayer({ track }: KaraokePlayerProps) {
  return (
    <div className="p-4 border rounded-lg bg-blue-50 text-center">
      <Mic2 className="w-12 h-12 text-blue-500 mx-auto mb-4" />
      <h4 className="text-lg font-bold mb-2">{track.title}</h4>
      <p className="text-sm text-gray-600">
        Tính năng Karaoke sẽ sớm ra mắt (Giai đoạn 4).
      </p>
      <audio 
        controls 
        src={track.audioTrackUrl} 
        className="w-full mt-4"
      >
        Trình duyệt không hỗ trợ audio.
      </audio>
      <p className="text-xs text-gray-500 mt-2">
        Lyric file: {track.lyricFileUrl}
      </p>
    </div>
  );
}