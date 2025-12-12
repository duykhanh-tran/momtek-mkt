import type { CollectionConfig } from 'payload';

const Quizzes: CollectionConfig = {
  slug: 'quizzes',
  admin: {
    useAsTitle: 'title',
    description: 'Nội dung cho bài Game/Quiz trắc nghiệm.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tên bài Quiz',
      type: 'text',
      required: true,
    },
    {
      name: 'questions',
      label: 'Danh sách câu hỏi',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'questionImage',
          label: 'Ảnh câu hỏi (Tùy chọn)',
          type: 'upload',
          relationTo: 'media', 
          required: false,
        },
        {
          name: 'questionText',
          label: 'Nội dung câu hỏi',
          type: 'text',
          required: true,
        },
        {
          name: 'options',
          label: 'Các lựa chọn',
          type: 'array',
          minRows: 2,
          maxRows: 6,
          fields: [
            {
              name: 'optionText',
              label: 'Nội dung lựa chọn',
              type: 'text',
              required: true,
            },
            {
              name: 'isCorrect',
              label: 'Là đáp án đúng?',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}

export default Quizzes