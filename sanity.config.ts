import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

import { schemaTypes } from "./sanity/schema";

// Embedded Studio served from /studio in the Next.js app.
// Editing lives at https://<your-domain>/studio (and http://localhost:3000/studio).
export default defineConfig({
  basePath: "/studio",
  name: "isaiahtaylor",
  title: "Isaiah Taylor",
  projectId: "tyc9omzx",
  dataset: "production",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings"),
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "siteSettings",
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    // Site settings is a singleton, so hide it from "New document".
    templates: (templates) =>
      templates.filter(({ schemaType }) => schemaType !== "siteSettings"),
  },
});
