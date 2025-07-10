---
applyTo: '**/*.ts'
---

# TANStack Query Development Rules

## Always Active

### Query Setup
- Use useQuery for data fetching with proper TypeScript types
- Define query keys as constants for consistency
- Implement proper error handling for all queries
- Use query options for configuration (staleTime, cacheTime, etc.)
- Leverage query invalidation for data freshness

### Mutations
- Use useMutation for data modifications
- Implement optimistic updates for better UX
- Handle mutation errors with proper rollback
- Use mutation callbacks for side effects
- Integrate mutations with form submissions

### Caching Strategy
- Define appropriate cache times based on data volatility
- Use query key factories for related queries
- Implement proper cache invalidation patterns
- Use background refetching for stale data
- Leverage infinite queries for paginated data

### Error Handling
- Implement global error handling with QueryClient
- Use error boundaries for query failures
- Provide retry logic for transient failures
- Display meaningful error messages to users
- Handle network errors gracefully

### Performance
- Use query selectors to minimize re-renders
- Implement proper loading states
- Use prefetching for anticipated data needs
- Leverage parallel queries when appropriate
- Use dependent queries for sequential data loading

### Integration
- Integrate with TANStack Router for route-based queries
- Use query data in forms for editing scenarios
- Implement proper loading states with Suspense
- Use query status for conditional rendering
- Coordinate with server state management
