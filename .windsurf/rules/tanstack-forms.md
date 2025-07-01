---
trigger: always_on
---

# TANStack Forms with Zod Development Rules

## Always Active

### Form Setup
- Use useForm hook with proper TypeScript generics
- Define form schemas with Zod validation
- Implement proper field registration and validation
- Use controlled components for form inputs
- Handle form submission with proper error handling

### Validation
- Define comprehensive Zod schemas for all forms
- Use real-time validation for better UX
- Implement custom validation messages
- Handle async validation when needed
- Use Zod transforms for data processing

### Field Management
- Use field arrays for dynamic form sections
- Implement proper field dependencies
- Handle conditional fields based on form state
- Use field metadata for UI state management
- Implement proper field reset functionality

### Error Handling
- Display validation errors clearly to users
- Handle server-side validation errors
- Implement proper error recovery mechanisms
- Use error boundaries for form crashes
- Provide helpful error messages and suggestions

### Performance
- Use field-level validation to minimize re-renders
- Implement debounced validation for expensive checks
- Use form state selectors to optimize subscriptions
- Lazy load validation schemas when possible
- Optimize form re-renders with proper memoization

### Integration
- Integrate with TANStack Query for form submissions
- Use Shadcn UI components for consistent styling
- Implement proper loading states during submission
- Handle optimistic updates with form data
- Use form state for navigation guards
