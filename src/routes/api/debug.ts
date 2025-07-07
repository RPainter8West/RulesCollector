import { json } from "@tanstack/react-start";
import { createServerFileRoute } from "@tanstack/react-start/server";

export const ServerRoute = createServerFileRoute("/api/debug").methods({
	GET: async ({ request }) => {
		const debugData = {
			time: new Date().toISOString(),
			requestUrl: request.url,
			requestMethod: request.method,
			requestHeaders: Object.fromEntries(request.headers),
			requestBody: await request.text(),
		};

		return json(debugData);
	},
});
