import type { SchemaTypeDefinition } from "sanity";

import post from "./schemas/post";
import blockContent from "./schemas/blockContent";
import siteSettings from "./schemas/siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [post, blockContent, siteSettings];
