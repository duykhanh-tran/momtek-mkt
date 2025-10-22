import { CollectionConfig } from 'payload/types';
import { APIError } from 'payload';

export const FormSubmissions: CollectionConfig = {
    slug: 'form-submissions',
    admin: {
        useAsTitle: 'email',
        description: 'Các lượt đăng ký từ form trên website.',
    },
    hooks: {
        beforeChange: [
            async ({ data, req, operation }) => {
                if (operation === 'create' && data.email && data.source) {
                    const { email, source } = data;
                    const { docs } = await req.payload.find({
                        collection: 'form-submissions',
                        where: {
                            and: [
                                { email: { equals: email } },
                                { source: { equals: source } },
                            ],
                        },
                        limit: 1,
                    });
                    if (docs.length > 0) {
                        // 2. Sử dụng APIError thay vì Error
                        // Báo lỗi 400 Bad Request
                        throw new APIError(`Email này đã được sử dụng để đăng ký cho form "${source}". Vui lòng sử dụng email khác.`,400 
                        );
                    }
                }
                return data;
            },
        ],
    },
   access: {
    create: () => true, // 
    // read: ({ req: { user } }) => user.role === 'admin', 
    // update: ({ req: { user } }) => user.role === 'admin',
    // delete: ({ req: { user } }) => user.role === 'admin',
},
    fields: [
        {
            name: 'name',
            label: 'Tên người đăng ký',
            type: 'text',
        },
        {
            name: 'email',
            label: 'Email',
            type: 'email',
            required: true,
        },
        {
            name: 'source',
            label: 'Nguồn đăng ký',
            type: 'text',
            admin: {
                readOnly: true,
                description: 'Nguồn này được tự động gán từ frontend.',
            }
        }
    ]
};