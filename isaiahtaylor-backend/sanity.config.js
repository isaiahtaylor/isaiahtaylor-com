import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./schemas/schema";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  title: "Isaiah Taylor",
  projectId: "tyc9omzx",
  dataset: "production",
  plugins: [deskTool(), ...(isDev ? [visionTool()] : [])],
  schema: {
    types: schemaTypes,
  },
});
