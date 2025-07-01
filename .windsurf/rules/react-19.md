---
trigger: always_on
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
- Prefer server components when possible

### Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Use useCallback and useMemo judiciously
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
- Utilize React 19's improved hydration and SSR features
