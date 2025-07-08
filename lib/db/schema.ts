import { pgTable, text, integer, uuid, boolean, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";


export const files = pgTable("files", {
  id: uuid("id").defaultRandom().primaryKey(),

  // Basic file/folder information
  name: text("name").notNull(),
  path: text("path").notNull(), 
  size: integer("size").notNull(), 
  type: text("type").notNull(),

  // Storage information
  fileUrl: text("file_url").notNull(), 
  thumbnailUrl: text("thumbnail_url"), 

  // Ownership and hierarchy
  userId: text("user_id").notNull(), 
  parentId: uuid("parent_id"), // Parent folder ID (null for root items)

  // File/folder flags
  isFolder: boolean("is_folder").default(false).notNull(), // Whether this is a folder
  isStarred: boolean("is_starred").default(false).notNull(), // Starred/favorite items
  isTrash: boolean("is_trash").default(false).notNull(), // Items in trash

  // Timestamps
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const filesRelations = relations(files, ({one, many}) => ({
    parent: one(files, {
        fields : [files.parentId],
        references: [files.id],
    }),


    //relationship
    children: many(files),
}));

// Type Defintitons

export type File = typeof files.$inferSelect;
export type NewFile = typeof files.$inferInsert;