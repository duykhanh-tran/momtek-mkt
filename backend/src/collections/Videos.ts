import type { CollectionConfig } from 'payload';

const Videos: CollectionConfig = {
  slug: 'videos',
  admin: {
    useAsTitle: 'title',
    description: 'Nội dung video cho Song, Short Story, Dubbing.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tên Video',
      type: 'text',
      required: true,
    },
    {
      name: 'internalUrl',
      label: 'Đường dẫn Video (Server nội bộ)',
      type: 'text',
      required: true,
      admin: {
        description: 'URL đầy đủ (ví dụ: https://server.com/video.mp4) trỏ đến file video của bạn.',
      },
    },
    {
      name: 'duration',
      label: 'Thời lượng (giây)',
      type: 'number',
      min: 0,
    },
  ],
}

export default Videos