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
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      description: 'Markdown post.'
    }
  ]
};