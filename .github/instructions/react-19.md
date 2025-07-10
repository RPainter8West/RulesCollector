---
applyTo: '**'
---


# React 19 Development Rules

## Always Active

### Component Structure

- Use functional components with hooks exclusively
- Implement proper TypeScript interfaces for all props
- Follow single responsibility principle for components
- Use descriptive component names in PascalCase
- Leverage React 19's new features: use(), useOptimistic(), useFormStatus()

### State Management

- Use useState for local component state
- Use useEffect with proper dependency arrays
- Implement custom hooks for reusable logic
- Use React 19's new concurrent features appropriately

### Performance

- Don't use React.memo as this is no longer necessary in version 19
- Implement proper key props for lists
- Leverage React 19's automatic batching improvements
- Use Suspense boundaries for loading states

### Code Organization

- Group related components in folders
- Separate business logic from presentation
- Use index.ts files for clean imports
- Keep components under 200 lines when possible
- Use React 19's new compiler optimizations

### Best Practices

- Handle loading and error states with Suspense
- Implement proper accessibility attributes
- Use semantic HTML elements
- Follow React naming conventions for event handlers (onXxx)
- Do not use server functions. Use api routes for all queries and mutations.
- Use client side stores based on tanstack query for all api queries and mutations
