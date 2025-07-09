import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";
import { db } from "../../db/index";
import { rules, selectRuleSchema, type Rule } from "../../db/schema";

// Type inference with proper Rule[] typing
export type RulesResponse = {
	rules: Rule[];
};

// Define the route with TANStack Router
export const ServerRoute = createServerFileRoute("/api/rules").methods({
	GET: async ({ request }) => {
		try {
			// Fetch all rules from the database
			const allRules = await db.select().from(rules);

			// Parse and validate the response with Zod
			const resp: RulesResponse = {
				rules: allRules.map((rule: Rule) => ({
					...selectRuleSchema.parse(rule),
					// Convert string dates from DB to Date objects
					createdAt: new Date(rule.createdAt),
					updatedAt: new Date(rule.updatedAt),
				})),
			};

			return json(resp);
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
