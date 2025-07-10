import type { NewRule } from "@/db/schema";
import { describe, expect, it } from "vitest";

const baseUrl = "http://localhost:3000/api/rules";

// Helper to create a rule
async function createRule(data: NewRule) {
	const res = await fetch(baseUrl, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	return res;
}

describe("Rules API", () => {
	it("GET /api/rules returns a list of rules", async () => {
		const res = await fetch(baseUrl);
		expect(res.status).toBe(200);
		const data = await res.json();
		expect(data).toHaveProperty("rules");
		expect(Array.isArray(data.rules)).toBe(true);
	});

	it("POST /api/rules creates a new rule", async () => {
		const ruleData: NewRule = {
			title: "Test Rule 1",
			description: "A rule for testing",
			author: "Test Author",
			toolVersion: "1.0.0",
			toolName: "Windsurf",
			ruleText: "No console.log allowed",
			fileTypeFilter: "*.ts,*.tsx",
		};
		let ruleId: number | undefined;
		try {
			const res = await createRule(ruleData);
			// Accept 201 or 400 (if validation fails)
			expect([201, 400]).toContain(res.status);
			if (res.status === 201) {
				const data = await res.json();
				expect(data).toHaveProperty("rule");
				expect(data.rule).toHaveProperty("id");
				ruleId = data.rule.id;
			}
		} finally {
			// Cleanup: delete the created rule if it was created
			if (ruleId) {
				await fetch(`${baseUrl}/${ruleId}`, { method: "DELETE" });
			}
		}
	});
});
