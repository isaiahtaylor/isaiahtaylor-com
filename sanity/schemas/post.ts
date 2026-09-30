import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main image",
    }),
    defineField({
      name: "embed",
      type: "string",
      title: "Embed",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Body",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "This text will be used in the meta description for SEO",
    }),
    defineField({
      name: "disableLinkPreview",
      type: "boolean",
      title: "Disable link preview",
      description:
        "Omit Open Graph / Twitter card tags so links to this post show as a plain link on X and other social sites",
      initialValue: false,
    }),
  ],
});
