# Copilot Agent Instructions for RulesCollector

## Project Overview
- This is a modern full-stack TypeScript/React app using TanStack Router, TanStack Query, Drizzle ORM, Neon PostgreSQL, and Shadcn UI.
- File-based routing is used in `src/routes/` with layouts in `__root.tsx`.
- Data validation is handled with Zod schemas, often colocated with usage.
- State management and data fetching use TanStack Query and Store.
- UI is built with Shadcn components, styled via Tailwind CSS.

## Key Workflows
- **Install dependencies:** `npm install`
- **Start dev server:** `npm run start`
- **Build for production:** `npm run build`
- **Run tests (Vitest):** `npm run test`
- **Lint/format/check (Biome):** `npm run lint`, `npm run format`, `npm run check`
- **Add UI components:** `pnpx shadcn@latest add <component>`
- **Database migrations:** Use Drizzle Kit, see `src/db/migrations/`

## Architecture & Patterns
- **Routing:** File-based, with nested routes and layouts. Use TanStack Router hooks and context for navigation/data.
- **API:** API routes live in `src/routes/api/` and are grouped by entity. Use Zod for input validation.
- **Data:** Use TanStack Query for fetching/mutating, with query keys as constants. Mutations use optimistic updates and error handling.
- **Database:** Drizzle ORM for schema and queries, migrations in `src/db/migrations/`. Neon PostgreSQL for serverless DB.
- **Validation:** Zod schemas for all forms, API, and environment variables. Integrate with TanStack Forms and Router.
- **UI:** Shadcn UI components, customized via Tailwind. Use composition and accessibility best practices.

## Conventions
- TypeScript strict mode, explicit types, and type-only imports.
- Group imports: external, internal, types. Use path mapping.
- Use Drizzle's InferModel for DB types, and Zod's z.infer for validation types.
- Keep schemas and types close to usage.
- Use error boundaries and Suspense for loading/error states.
- Prefer functional React components with hooks.
- Do not use server functions; use API routes for all queries/mutations.
- Use client-side stores (TanStack Query) for all API data.

## Integration Points
- **TanStack Router:** `src/router.tsx`, `src/routes/`
- **TanStack Query:** `src/integrations/tanstack-query/`
- **Drizzle ORM:** `src/db/schema.ts`, `src/db/migrations/`
- **Shadcn UI:** `src/components/ui/`
- **Validation:** `src/db/schema.ts`, Zod schemas in forms/routes

## Examples
- See `src/routes/api/rules/` for API patterns.
- See `src/components/` for UI composition and form validation.
- See `.windsurf/rules/` for detailed dev rules by technology.

## References
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [Shadcn UI Docs](https://ui.shadcn.com/)
- [Zod Docs](https://zod.dev/)

---
For more detailed rules, see `.windsurf/rules/` in the repo.
