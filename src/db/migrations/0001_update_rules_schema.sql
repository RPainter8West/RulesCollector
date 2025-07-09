ALTER TABLE "rules" RENAME COLUMN "name" TO "title";--> statement-breakpoint
ALTER TABLE "rules" RENAME COLUMN "category" TO "tool_name";--> statement-breakpoint
ALTER TABLE "rules" ADD COLUMN "tool_version" text NOT NULL;--> statement-breakpoint
ALTER TABLE "rules" ADD COLUMN "rule_text" text NOT NULL;--> statement-breakpoint
ALTER TABLE "rules" ADD COLUMN "file_type_filter" text;--> statement-breakpoint
ALTER TABLE "rules" DROP COLUMN "is_active";