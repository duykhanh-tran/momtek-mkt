import type { CollectionConfig } from 'payload';
import { slugField } from '../fields/slug'

const Units: CollectionConfig = {
  slug: 'units',
  admin: {
    useAsTitle: 'title',
    description: 'Bài học chính, nơi "lắp ráp" các nội dung từ thư viện.',
    defaultColumns: ['title', 'topic', 'level', 'updatedAt', 'isPro'], // Thêm isPro vào cột
  },
  access: {
    read: () => true,
  },
  fields: [
    // --- Thông tin cơ bản ---
    {
      name: 'title',
      label: 'Tên bài học (Unit)',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'description',
      label: 'Mô tả ngắn',
      type: 'richText',
    },
    {
      name: 'thumbnail',
      label: 'Ảnh đại diện Unit',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // --- Sắp xếp & Phân loại ---
    {
      type: 'row',
      fields: [
        {
          name: 'topic',
          label: 'Thuộc Chủ đề (Topic)',
          type: 'relationship',
          relationTo: 'topics',
          required: true,
          hasMany: false,
          admin: {
            width: '50%',
          }
        },
        {
          name: 'level',
          label: 'Cấp độ',
          type: 'select',
          options: [
            { label: 'Level 1', value: 'Level 1' },
            { label: 'Level 2', value: 'Level 2' },
            { label: 'Level 3', value: 'Level 3' },
          ],
          required: true,
          admin: {
            width: '50%',
          }
        },
      ]
    },
    // --- TRƯỜNG MỚI (THEO KẾ HOẠCH GĐ 5) ---
    {
      name: 'isPro',
      label: 'Đây là Unit PRO?',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Nếu chọn, toàn bộ Unit này sẽ bị khóa (hiển thị icon Khóa) cho người dùng thường ở trang danh sách.',
      }
    },
    // --- KẾT THÚC TRƯỜNG MỚI ---
    {
      name: 'tags',
      label: 'Tags (Thẻ)',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    // --- Nội dung bài học (Lessons) ---
    {
      name: 'lessons',
      label: 'Danh sách các Hoạt động (Bài học)',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'title',
          label: 'Tên hiển thị (Tên Bài)',
          type: 'text',
          required: true,
        },
        {
          name: 'lessonType',
          label: 'Loại bài học',
          type: 'select',
          required: true,
          options: [
            { label: 'Song (Video)', value: 'Song' },
            { label: 'Short Story (Video)', value: 'ShortStory' },
            { label: 'Dubbing (Video)', value: 'Dubbing' },
            { label: 'Karaoke', value: 'Karaoke' },
            { label: 'Speech AI (Luyện âm)', value: 'SpeechAI' },
            { label: 'Game/Quiz', value: 'GameQuiz' },
            { label: 'Workbook (Tài liệu)', value: 'Workbook' },
          ],
        },
        {
          name: 'icon',
          label: 'Icon (Tên icon)',
          type: 'text',
          admin: {
            description: 'Tên icon (ví dụ: music, mic, game...)'
          }
        },
        {
          name: 'isPro',
          label: 'Nội dung PRO?',
          type: 'checkbox',
          admin: {
            description: 'Khóa bài học lẻ này.'
          }
        },
        {
          name: 'content',
          label: 'Nội dung gốc',
          type: 'relationship',
          required: true,
          relationTo: [
            'videos',
            'karaokeTracks',
            'pronunciationExercises',
            'quizzes',
            'workbooks',
          ],
        },
        {
          name: 'lyrics',
          label: 'Lời bài hát (Lyrics)',
          type: 'richText',
        },
        {
          name: 'instructions',
          label: 'Hướng dẫn',
          type: 'richText',
        },
      ],
    },
  ],
}

export default Units