import { CollectionConfig } from 'payload/types'
import { slugify } from '../utils/slugify' 
import { RichTextBlock } from '../blocks/RichTextBlock'
import { ExpertNoteBlock } from '../blocks/ExpertNoteBlock'
import { CtaBlock } from '../blocks/CtaBlock'
import { ExpertProfileBlock } from '../blocks/ExpertProfileBlock'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'status', 'updatedAt'], 
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.title) {
          data.slug = slugify(data.title);
        }
        return data;
      },
    ],
  },
  access: {
    read: ({ req }) => req.user?.role === 'admin' ? true : { status: { equals: 'published' } },
    // Chỉ admin mới có quyền tạo, cập nhật và xóa.
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      label: 'Post Title',
      type: 'text',
      required: true,
    },
    {
        name: 'slug',
        type: 'text',
        required: true,
        unique: true,
        admin: {
            position: 'sidebar',
            readOnly: true,
        }
    },
    {
        name: 'postImage',
        label: 'Featured Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    {
        name: 'excerpt',
        label: 'Excerpt',
        type: 'textarea',
        required: true,
        admin: {
            description: 'A short summary of the post for SEO and list views.',
        }
    },
    {
        name: 'contentLayout',
        label: 'Content Layout',
        type: 'blocks',
        required: true,
        blocks: [
            RichTextBlock,
            ExpertNoteBlock,
            CtaBlock,
            ExpertProfileBlock,
        ]
    },
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Post Details',
                fields: [
                    {
                        name: 'status',
                        type: 'select',
                        options: [
                            { value: 'draft', label: 'Draft' },
                            { value: 'published', label: 'Published' },
                        ],
                        defaultValue: 'draft',
                        admin: { position: 'sidebar' }
                    },
                    {
                        name: 'publishedDate',
                        label: 'Published Date',
                        type: 'date',
                        required: true,
                        admin: {
                            position: 'sidebar',
                            date: {
                                pickerAppearance: 'dayOnly',
                                displayFormat: 'dd/MM/yyyy'
                            }
                        }
                    },
                    {
                        name: 'author',
                        label: 'Author',
                        type: 'relationship',
                        relationTo: 'users',
                        required: true,
                        admin: { position: 'sidebar' }
                    },
                    {
                        name: 'category',
                        label: 'Category',
                        type: 'relationship',
                        relationTo: 'categories',
                        required: true,
                        admin: { position: 'sidebar' }
                    },
                    {
                      name: 'isFeatured',
                      label: 'Bài viết nổi bật?',
                      type: 'checkbox',
                      defaultValue: false,
                      admin: {
                          position: 'sidebar',
                          description: 'Đánh dấu để hiển thị ở khu vực nổi bật trên trang blog.'
                      }
                    },
                ]
            }
        ]
    }
  ],
}

export default Posts