import {
	pgTable,
	serial,
	text,
	timestamp,
	boolean,
	integer,
} from "drizzle-orm/pg-core";

/**
 * Rules table schema
 * Represents a collection rule with metadata
 */
export const rules = pgTable("rules", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	description: text("description"),
	author: text("author").notNull(),
	category: text("category").notNull(),
	isActive: boolean("is_active").default(true),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Type inference for Rules table
 */
export type Rule = typeof rules.$inferSelect;
export type NewRule = typeof rules.$inferInsert;
