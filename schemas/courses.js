export default {
    name: 'course',
    type: 'document',
      title: 'course',
    fields: [
      {
        name: 'course',
        type: 'string',
        title: 'Course'
      },
      {
        name: 'meta',
        type: 'string',
        title: 'description'
      },
      {
        title: 'Course Image',
        name: 'courseImg',
        type: 'image',
      },
      {
        title: 'Chapters',
        name: 'chapters',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'chapter'}]}]
      }
    ]
  }