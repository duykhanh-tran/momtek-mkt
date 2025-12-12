import type { Block } from 'payload';

export const ExpertNoteBlock: Block = {
  slug: 'expertNote',
  interfaceName: 'ExpertNoteBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Ghi chú từ Chuyên gia',
    },
    {
      name: 'note',
      type: 'textarea',
      required: true,
    },
  ],
};
