import { Block } from 'payload/types';

export const CtaBlock: Block = {
  slug: 'cta',
  interfaceName: 'CtaBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonText',
          type: 'text',
          required: true,
        },
        {
          name: 'buttonLink',
          type: 'text',
          required: true,
          admin: {
            description: 'Enter a relative path like /courses or an absolute URL like https://google.com'
          }
        },
      ]
    }
  ],
};