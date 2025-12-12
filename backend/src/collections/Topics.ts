import type { CollectionConfig } from 'payload';
import { slugField } from '../fields/slug'

const Topics: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'title',
    description: 'Chủ đề để nhóm các bài Unit (ví dụ: Phương tiện, Động vật).',
  },
  access: {
    read: () => true, // Cho phép đọc public
  },
  fields: [
    {
      name: 'title',
      label: 'Tên Chủ đề',
      type: 'text',
      required: true,
    },
    slugField(), // Sử dụng 1 slug field (tự động tạo từ title)
    {
      name: 'thumbnail',
      label: 'Ảnh đại diện chủ đề',
      type: 'upload',
      relationTo: 'media', // Giả sử bạn có collection 'media'
      required: true,
    },
    {
      name: 'description',
      label: 'Mô tả Chủ đề',
      type: 'richText', // Dùng richText cho linh hoạt
      admin: {
        description: 'Mô tả ngắn cho chủ đề này, sẽ hiển thị trong banner (Hero Section) của trang danh sách.',
      }
    }
  ],
}

export default Topics