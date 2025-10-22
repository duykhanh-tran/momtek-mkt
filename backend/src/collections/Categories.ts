import { CollectionConfig } from 'payload/types';

const formatSlug = (val: string): string => {
  return val
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, ''); 
};

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
    description: 'Quản lý các danh mục cho bài viết.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Tên danh mục',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'slug',
      label: 'Slug (Đường dẫn)',
      type: 'text',
      required: true,
      unique: true,
      index: true, 
      admin: {
        position: 'sidebar',
        readOnly: true, 
      },
      hooks: {
        beforeValidate: [ 
          ({ value, siblingData, operation }) => {
            if ((operation === 'create' || operation === 'update') && siblingData.name) {
              const newSlug = formatSlug(siblingData.name as string);
              if (newSlug !== value) {
                return newSlug; 
              }
            }
            return value; 
          }
        ]
      }
    }
  ],
};