export default {
    name: 'team',
    type: 'document',
      title: 'team',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },

      {
        title: 'image',
        name: 'image',
        type: 'image',
      },

      {
        name: 'position',
        type: 'string',
        title: 'position'
      }
    ]
  }