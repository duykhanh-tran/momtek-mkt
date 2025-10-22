import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true, // Cho phép bất kỳ ai cũng có thể đăng ký
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin' || !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Họ và Tên',
      required: true,
    },
    {
      name: 'avatar',
      label: 'Ảnh đại diện',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'dob',
      type: 'date',
      label: 'Ngày tháng năm sinh',
      admin: {
        date: { pickerAppearance: 'dayOnly', displayFormat: 'dd/MM/yyyy' }
      }
    },
    {
      name: 'role',
      label: 'Vai trò',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      defaultValue: 'user',
      required: true,
      admin: { position: 'sidebar' }
    }
  ],
};

export default Users;