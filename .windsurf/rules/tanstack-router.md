---
trigger: always_on
---

# TANStack Router Development Rules

## Always Active

### Route Definition

- Use file-based routing with proper TypeScript types
- Define route schemas with Zod validation
- Implement proper route guards and authentication
- Use nested routes for hierarchical navigation
- Define search params with proper validation

### Navigation

- Use typed navigation with router.navigate()
- Implement proper loading states during navigation
- Use router hooks for accessing route data
- Handle navigation errors gracefully
- Implement breadcrumbs for complex navigation

### API Routes

- Should be grouped in folders based on the entity type
- Server routes are base on TanStack Start. Documentation here: https://tanstack.com/start/latest/docs/framework/react/server-routes#defining-a-server-route
- Use file based routing - Each endpoint should be a separate file

### Data Loading

- Use route loaders for data fetching
- Implement proper error boundaries
- Use deferred loading for non-critical data
- Cache route data appropriately
- Handle loading states with Suspense

### Type Safety

- Export and use route types throughout the app
- Use router.buildLocation() for type-safe URLs
- Implement proper TypeScript interfaces for route params
- Use router context for accessing route information
- Validate search params with Zod schemas

### Best Practices

- Keep route components focused on presentation
- Use route context for sharing data between nested routes
- Implement proper SEO with meta tags
- Handle 404 and error pages gracefully
- Use code splitting for route-based lazy loading
