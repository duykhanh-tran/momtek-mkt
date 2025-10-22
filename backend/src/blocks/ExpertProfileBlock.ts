import { Block } from 'payload/types';

export const ExpertProfileBlock: Block = {
  slug: 'expertProfile',
  interfaceName: 'ExpertProfileBlock',
  fields: [
    {
        name: 'profileImage',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
    {
        name: 'title',
        type: 'text',
        required: true,
        defaultValue: 'Chuyên gia Giáo dục Momtek'
    },
    {
        name: 'bio',
        type: 'textarea',
        required: true,
    }
  ],
};
