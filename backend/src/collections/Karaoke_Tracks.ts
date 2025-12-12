import type { CollectionConfig } from 'payload';

const KaraokeTracks: CollectionConfig = {
  slug: 'karaokeTracks',
  admin: {
    useAsTitle: 'title',
    description: 'Nội dung cho bài học Karaoke.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tên bài Karaoke',
      type: 'text',
      required: true,
    },
    {
      name: 'audioTrackUrl',
      label: 'Đường dẫn file nhạc (Beat)',
      type: 'text',
      required: true,
      admin: {
        description: 'URL trỏ đến file âm thanh (đã tách lời).',
      },
    },
    {
      name: 'lyricFileUrl',
      label: 'Đường dẫn file Lyrics (.lrc)',
      type: 'text',
      required: true,
      admin: {
        description: 'URL trỏ đến file .lrc hoặc JSON chứa timestamp lời bài hát.',
      },
    },
  ],
}

export default KaraokeTracks