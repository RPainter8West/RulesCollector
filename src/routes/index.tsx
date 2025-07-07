import { createFileRoute } from "@tanstack/react-router";
import RulesList from "../components/RulesList";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<header className="bg-white shadow-sm py-4">
				<div className="container mx-auto px-4">
					<h1 className="text-xl font-bold text-gray-800">Rules Collector</h1>
				</div>
			</header>
			<main>
				<RulesList />
			</main>
			<footer className="py-4 text-center">
				<a
					className="text-blue-500 hover:underline"
					href="https://tanstack.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by TanStack
				</a>
			</footer>
		</div>
	);
}
