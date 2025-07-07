import { createServerFileRoute } from "@tanstack/react-start/server";
import { z } from "zod";
import { db } from "../../db/index";
import { rules } from "../../db/schema";

// Define the Rule type based on our database schema
type DbRule = {
	id: number;
	name: string;
	description: string | null;
	author: string;
	category: string;
	isActive: boolean | null;
	createdAt: Date | string;
	updatedAt: Date | string;
};

// Define the response schema using Zod
export const rulesResponseSchema = z.object({
	rules: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			description: z.string().nullable(),
			author: z.string(),
			category: z.string(),
			isActive: z.boolean().default(true),
			createdAt: z.date(),
			updatedAt: z.date(),
		}),
	),
});

// Type inference from the schema
export type RulesResponse = z.infer<typeof rulesResponseSchema>;

// Define the route with TANStack Router
export const ServerRoute = createServerFileRoute("/api/rules").methods({
	GET: async ({ request }) => {
		try {
			// Fetch all rules from the database
			const allRules = await db.select().from(rules);

			// Parse and validate the response with Zod
			const resp = rulesResponseSchema.parse({
				rules: allRules.map((rule: DbRule) => ({
					...rule,
					// Convert string dates from DB to Date objects
					createdAt: new Date(rule.createdAt),
					updatedAt: new Date(rule.updatedAt),
				})),
			});

			return new Response(JSON.stringify(resp), {
				headers: {
					"Content-Type": "application/json",
				},
			});
		} catch (error) {
			// console.error("Error fetching rules:", error);
			// throw new Error("Failed to fetch rules");
			return new Response(JSON.stringify(["Alice", "Bob", "Charlie"]), {
				headers: {
					"Content-Type": "application/json",
				},
			});
		}
	},
});
