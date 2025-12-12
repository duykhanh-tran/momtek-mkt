import type { Field } from 'payload';
import { slugify } from '../utils/slugify'

export const slugField = (fieldToUse: string = 'title'): Field => ({
  name: 'slug',
  label: 'Slug (Đường dẫn)',
  type: 'text',
  required: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'Đường dẫn này sẽ được tạo tự động từ tiêu đề. (Bỏ trống để tự tạo)',
  },
  hooks: {
    beforeValidate: [
      (args) => {
        const { value, data } = args

        let slugToFormat: string | undefined

        // Case 1: Người dùng tự nhập slug
        if (typeof value === 'string' && value) {
          slugToFormat = value
        }
        // Case 2: Không nhập slug, lấy từ 'title'
        else if (data?.[fieldToUse]) {
          slugToFormat = data[fieldToUse]
        }

        // 2. Nếu có giá trị, gọi hàm slugify CỦA BẠN
        if (typeof slugToFormat === 'string') {
          return slugify(slugToFormat)
        }

        return value
      },
    ],
  },
})