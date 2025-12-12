import type { CollectionConfig } from 'payload';

const PronunciationExercises: CollectionConfig = {
  slug: 'pronunciationExercises',
  admin: {
    useAsTitle: 'title',
    description: 'Nội dung cho bài luyện âm (Speech AI).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tên bài luyện tập',
      type: 'text',
      required: true,
    },
    {
      name: 'textToPractice',
      label: 'Các câu/từ cần luyện đọc',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'text',
          label: 'Văn bản',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Mỗi mục là một câu/từ riêng lẻ mà người dùng sẽ đọc.',
      },
    },
  ],
}

export default PronunciationExercises