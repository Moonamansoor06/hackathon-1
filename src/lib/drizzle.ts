import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";


// Types
import { InferModel } from "drizzle-orm";

export const cartTable = pgTable("carttable", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  size: text("size").notNull(),
  quantity: integer("quantity").notNull(),
  price: integer("price").notNull(),
  title: text("title").notNull(),
  product_image: varchar("product_image", { length: 255 }).notNull(),
  generic_name: text("generic_name").notNull(),
});

export type cartItems = InferModel<typeof cartTable>;
// export type cartItemsNew = InferModel<typeof cartTable, "insert">;

export const db = drizzle(sql);
