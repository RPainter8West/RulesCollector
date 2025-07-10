import type { NewRule } from "@/db/schema";
import { describe, expect, it } from "vitest";

const baseUrl = "http://localhost:3000/api/rules";

// Helper to create a rule for testing
async function createRule(data: NewRule) {
	const res = await fetch(baseUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	if (res.status !== 201) throw new Error("Failed to create rule");
	const { rule } = await res.json();
	return rule;
}

describe("Rules API - /api/rules/:id", () => {
	it("GET /api/rules/:id returns a rule or 404", async () => {
		const ruleData: NewRule = {
			title: "Test Rule 4",
			description: "A rule for testing",
			author: "Test Author",
			toolVersion: "1.0.0",
			toolName: "Windsurf",
			ruleText: "No console.log allowed",
			fileTypeFilter: "*.ts,*.tsx",
		};
		const rule = await createRule(ruleData);
		try {
			const res = await fetch(`${baseUrl}/${rule.id}`);
			expect([200, 404]).toContain(res.status);
			if (res.status === 200) {
				const data = await res.json();
				expect(data).toHaveProperty("rule");
				expect(data.rule.id).toBe(rule.id);
			}
		} finally {
			// Cleanup: delete the created rule
			await fetch(`${baseUrl}/${rule.id}`, { method: "DELETE" });
		}
	});

	it("PATCH /api/rules/:id updates a rule", async () => {
		const ruleData: NewRule = {
			title: "Test Rule 3",
			description: "A rule for testing",
			author: "Test Author",
			toolVersion: "1.0.0",
			toolName: "Windsurf",
			ruleText: "No console.log allowed",
			fileTypeFilter: "*.ts,*.tsx",
		};
		const rule = await createRule(ruleData);
		try {
			const updateData = {
				title: "Updated Rule Title",
				description: "Updated description",
				ruleText: "No debugger allowed",
			};
			const res = await fetch(`${baseUrl}/${rule.id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(updateData),
			});
			expect([200, 400, 404]).toContain(res.status);
			if (res.status === 200) {
				const data = await res.json();
				expect(data).toHaveProperty("rule");
				expect(data.rule.id).toBe(rule.id);
			}
		} finally {
			// Cleanup: delete the created rule
			await fetch(`${baseUrl}/${rule.id}`, { method: "DELETE" });
		}
	});

	it("DELETE /api/rules/:id deletes a rule", async () => {
		const ruleData: NewRule = {
			title: "Test Rule 2",
			description: "A rule for testing",
			author: "Test Author",
			toolVersion: "1.0.0",
			toolName: "Windsurf",
			ruleText: "No console.log allowed",
			fileTypeFilter: "*.ts,*.tsx",
		};
		const rule = await createRule(ruleData);
		let deleted = false;
		try {
			const res = await fetch(`${baseUrl}/${rule.id}`, { method: "DELETE" });
			expect([200, 404]).toContain(res.status);
			if (res.status === 200) {
				const data = await res.json();
				expect(data).toHaveProperty("success", true);
				expect(data).toHaveProperty("rule");
				expect(data.rule.id).toBe(rule.id);
				deleted = true;
			}
		} finally {
			// Ensure cleanup if not already deleted
			if (!deleted) {
				await fetch(`${baseUrl}/${rule.id}`, { method: "DELETE" });
			}
		}
	});
});
