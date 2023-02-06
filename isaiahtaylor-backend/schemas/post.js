export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main image',
    },
    {
      name: 'embed',
      type: 'string',
      title: 'Embed',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This text will be used in the meta description for SEO',
    },
  ]
};