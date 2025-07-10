---
applyTo: **/*.ts, **/*.tsx
---


# Zod Validation Development Rules

## Always Active

### Schema Definition
- Define comprehensive schemas for all data structures
- Use descriptive error messages for validation failures
- Implement proper type inference with z.infer<>
- Use schema composition for reusable validation logic
- Define schemas close to their usage context

### Validation Patterns
- Use transform() for data processing during validation
- Implement custom validation with refine() and superRefine()
- Use preprocess() for data normalization
- Handle optional and nullable fields appropriately
- Use discriminated unions for complex object validation

### Error Handling
- Provide clear, user-friendly error messages
- Use path-based error handling for nested objects
- Implement proper error formatting for forms
- Handle validation errors gracefully in UI
- Use safeParse() for non-throwing validation

### Integration
- Integrate with TANStack Forms for form validation
- Use with API route validation for type safety
- Implement database schema validation
- Use for environment variable validation
- Integrate with TANStack Router for search param validation

### Performance
- Use lazy() for recursive schemas
- Implement schema caching for expensive validations
- Use brand() for nominal typing
- Optimize schema parsing for large datasets
- Use partial() and pick() for selective validation

### Best Practices
- Keep schemas DRY with composition
- Use meaningful schema names and descriptions
- Implement proper TypeScript integration
- Use schema versioning for API evolution
- Document complex validation logic
