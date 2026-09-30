import { defineField, defineType } from "sanity";

// Singleton document (fixed _id "siteSettings") for site-wide switches.
export default defineType({
  name: "siteSettings",
  type: "document",
  title: "Site settings",
  fields: [
    defineField({
      name: "disableLinkPreviews",
      type: "boolean",
      title: "Disable link previews",
      description:
        "When on, pages omit Open Graph and Twitter/X card tags, so links shared on X and other social sites show as plain links with no preview card.",
      initialValue: false,
    }),
  ],
});
