import type { SchemaTypeDefinition } from "sanity";

import post from "./schemas/post";
import blockContent from "./schemas/blockContent";

export const schemaTypes: SchemaTypeDefinition[] = [post, blockContent];
