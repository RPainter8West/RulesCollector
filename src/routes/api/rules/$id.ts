import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";
import { eq } from "drizzle-orm";
import { db } from "@/db/index";
import {
	rules,
	selectRuleSchema,
	insertRuleSchema,
	type Rule,
} from "@/db/schema";

// Type definitions
export type GetRuleResponse = {
	rule: Rule;
};

export type UpdateRuleResponse = {
	rule: Rule;
};

export type DeleteRuleResponse = {
	success: boolean;
	rule?: Rule;
};

// Create input schema for updates (all fields optional except id)
const updateRuleSchema = insertRuleSchema
	.omit({
		id: true,
		createdAt: true,
		updatedAt: true,
	})
	.partial();

// Define the route with TANStack Router
export const ServerRoute = createServerFileRoute("/api/rules/$id").methods({
	// GET /api/rules/:id - Get a single rule by ID
	GET: async ({ params }) => {
		try {
			const [rule] = await db
				.select()
				.from(rules)
				.where(eq(rules.id, Number(params.id)));

			if (!rule) {
				return new Response(JSON.stringify({ error: "Rule not found" }), {
					status: 404,
					headers: { "Content-Type": "application/json" },
				});
			}

			const response: GetRuleResponse = {
				rule: {
					...selectRuleSchema.parse(rule),
					createdAt: new Date(rule.createdAt),
					updatedAt: new Date(rule.updatedAt),
				},
			};

			return json(response);
		} catch (error) {
			console.error(`Error fetching rule ${params.id}:`, error);
			return new Response(JSON.stringify({ error: "Failed to fetch rule" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}
	},

	// PATCH /api/rules/:id - Update a rule
	PATCH: async ({ params, request }) => {
		try {
			const body = await request.json();
			const updateData = updateRuleSchema.parse(body);

			const [updatedRule] = await db
				.update(rules)
				.set({
					...updateData,
					updatedAt: new Date(),
				})
				.where(eq(rules.id, Number(params.id)))
				.returning();

			if (!updatedRule) {
				return new Response(JSON.stringify({ error: "Rule not found" }), {
					status: 404,
					headers: { "Content-Type": "application/json" },
				});
			}

			const response: UpdateRuleResponse = {
				rule: {
					...selectRuleSchema.parse(updatedRule),
					createdAt: new Date(updatedRule.createdAt),
					updatedAt: new Date(updatedRule.updatedAt),
				},
			};

			return json(response);
		} catch (error) {
			console.error(`Error updating rule ${params.id}:`, error);
			return new Response(JSON.stringify({ error: "Failed to update rule" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}
	},

	// DELETE /api/rules/:id - Delete a rule
	DELETE: async ({ params }) => {
		try {
			// First, get the rule before deleting it to return in the response
			const [rule] = await db
				.select()
				.from(rules)
				.where(eq(rules.id, Number(params.id)));

			if (!rule) {
				return new Response(JSON.stringify({ error: "Rule not found" }), {
					status: 404,
					headers: { "Content-Type": "application/json" },
				});
			}

			// Delete the rule
			await db.delete(rules).where(eq(rules.id, Number(params.id)));

			const response: DeleteRuleResponse = {
				success: true,
				rule: {
					...selectRuleSchema.parse(rule),
					createdAt: new Date(rule.createdAt),
					updatedAt: new Date(rule.updatedAt),
				},
			};

			return json(response);
		} catch (error) {
			console.error(`Error deleting rule ${params.id}:`, error);
			return new Response(JSON.stringify({ error: "Failed to delete rule" }), {
				status: 500,
				headers: { "Content-Type": "application/json" },
			});
		}
	},
});
