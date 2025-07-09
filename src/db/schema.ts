import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createSelectSchema, createInsertSchema } from 'drizzle-zod';

/**
 * Rules table schema
 * Represents a rule set with metadata as defined in project overview
 */
export const rules = pgTable("rules", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(), // Name of the rule set
	description: text("description"), // Detailed description
	author: text("author").notNull(), // Creator of the rule set
	toolVersion: text("tool_version").notNull(), // Version of the tool
	toolName: text("tool_name").notNull(), // Name of the tool (e.g., "Windsurf", "ESLint")
	ruleText: text("rule_text").notNull(), // The actual rule content/text
	fileTypeFilter: text("file_type_filter"), // Optional glob pattern for file types
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

/**
 * Type inference for Rules table
 */
export type Rule = typeof rules.$inferSelect;
export type NewRule = typeof rules.$inferInsert;

export const selectRuleSchema = createSelectSchema(rules);
export const insertRuleSchema = createInsertSchema(rules);
