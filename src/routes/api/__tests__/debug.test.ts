import { describe, expect, it } from "vitest";

// Example: Use your preferred HTTP request library (e.g., supertest, undici, fetch)
// Here, we use fetch for demonstration. Adjust baseUrl as needed for your test environment.
const baseUrl = "http://localhost:3000/api/debug";

describe("GET /api/debug", () => {
	it("returns debug info with expected fields", async () => {
		const res = await fetch(baseUrl);
		expect(res.status).toBe(200);
		const data = await res.json();
		expect(data).toHaveProperty("time");
		expect(data).toHaveProperty("requestUrl");
		expect(data).toHaveProperty("requestMethod");
		expect(data).toHaveProperty("requestHeaders");
		expect(data).toHaveProperty("requestBody");
	});
});
