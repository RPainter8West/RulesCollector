import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";
import { db } from "@/db/index";
import { rules, selectRuleSchema, insertRuleSchema, type Rule } from "@/db/schema";

// Type definitions
export type RulesResponse = {
	rules: Rule[];
};

export type CreateRuleResponse = {
	rule: Rule;
};

// Create input schema by omitting auto-generated fields
const createRuleSchema = insertRuleSchema.omit({
	id: true,
	createdAt: true,
	updatedAt: true,
});

// Define the route with TANStack Router
export const ServerRoute = createServerFileRoute("/api/rules/").methods({
	// GET /api/rules - List all rules
	GET: async ({ request }) => {
		try {
			const allRules = await db.select().from(rules);

			const resp: RulesResponse = {
				rules: allRules.map((rule) => ({
					...selectRuleSchema.parse(rule),
					createdAt: new Date(rule.createdAt),
					updatedAt: new Date(rule.updatedAt),
				})),
			}

			return json(resp);
		} catch (error) {
			console.error("Error fetching rules:", error);
			return new Response(JSON.stringify({ error: "Failed to fetch rules" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			})
		}
	},

	// POST /api/rules - Create a new rule
	POST: async ({ request }) => {
		try {
			const body = await request.json();
			const validatedData = createRuleSchema.parse(body);

			const [newRule] = await db
				.insert(rules)
				.values({
					...validatedData,
					createdAt: new Date(),
					updatedAt: new Date(),
				})
				.returning();

			const response: CreateRuleResponse = {
				rule: {
					...selectRuleSchema.parse(newRule),
					createdAt: new Date(newRule.createdAt),
					updatedAt: new Date(newRule.updatedAt),
				},
			}

			return json(response, { status: 201 });
		} catch (error) {
			console.error("Error creating rule:", error);
			return new Response(JSON.stringify({ error: "Failed to create rule" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			})
		}
	},
});
