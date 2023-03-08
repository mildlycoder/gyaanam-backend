export default {
    name: 'chapter',
    type: 'document',
    title: 'chapter',
    fields: [
      {
        name: 'Title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'meta',
        type: 'string',
        title: 'description'
      },
      {
        title: 'Chapters',
        name: 'chapters',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'topic'}]}]
      }
    ]
  }