import { Block } from 'payload/types';

export const RichTextBlock: Block = {
  slug: 'richText',
  interfaceName: 'RichTextBlock',
  fields: [
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
