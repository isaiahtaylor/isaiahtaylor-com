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
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
