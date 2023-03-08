export default {
    name: 'subject',
    type: 'document',
      title: 'subject',
    fields: [
      {
        name: 'subject',
        type: 'string',
        title: 'Subject name'
      },
      {
        name: 'meta',
        type: 'string',
        title: 'description'
      },

      {
        name: 'teacher',
        type: 'object',
        fields: [
          {
            title: 'teacher',
            name: 'teacher',
            type: 'reference',
            to: [{type: 'teacher'}]
          }
        ]
      },

      {
        title: 'Chapters',
        name: 'chapters',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'chapter'}]}]
      }
    ]
  }