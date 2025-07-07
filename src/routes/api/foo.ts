import { createServerFileRoute } from "@tanstack/react-start/server";
export const ServerRoute = createServerFileRoute("/api/foo").methods({
	GET: async ({ request }) => {
		return new Response(JSON.stringify(["Alice", "Bob", "Charlie"]), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	},
});
