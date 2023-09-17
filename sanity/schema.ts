import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { generic} from "./generic";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, generic, category],
};
