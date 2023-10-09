export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
        name: 'compant',
        title: 'Company',
        type: 'string',
      },
      {
        name: 'imageurl',
        title: 'Imageurl',
        type: 'image',
        Option:{
            hotspot: true,
        }
      },
      {
        name: 'feedback',
        title: 'Feedback',
        type: 'string',
      },
  ],
}
