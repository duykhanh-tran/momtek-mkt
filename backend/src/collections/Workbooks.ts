import type { CollectionConfig } from 'payload';

const Workbooks: CollectionConfig = {
  slug: 'workbooks',
  admin: {
    useAsTitle: 'title',
    description: 'Nội dung cho bài Workbook (file PDF/tài liệu tải về).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Tên Workbook',
      type: 'text',
      required: true,
    },
    {
      name: 'file',
      label: 'File tài liệu',
      type: 'upload',
      relationTo: 'media', // Giả sử bạn có collection 'media'
      required: true,
      admin: {
        description: 'File PDF hoặc tài liệu cho người dùng tải về.',
      },
    },
  ],
}

export default Workbooks