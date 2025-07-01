---
trigger: glob
globs: **/*.ts
---

# TypeScript Development Rules

## Always Active

### Type Definitions
- Define explicit interfaces for all objects and function parameters
- Use union types instead of any when possible
- Create type aliases for complex types
- Export types from dedicated types files
- Use const assertions for literal types
- Prefer types over interfaces

### Code Quality
- Enable strict mode in tsconfig.json
- Use readonly for immutable data structures
- Implement proper error handling with typed errors
- Use enums for constants with multiple values
- Leverage TypeScript 5.0+ features appropriately

### Function Design
- Define return types explicitly for public functions
- Use generic types for reusable functions
- Implement proper function overloads when needed
- Use type guards for runtime type checking
- Use satisfies operator for type checking without widening

### Import/Export
- Use named imports/exports over default when possible
- Group imports: external libraries, internal modules, types
- Use path mapping for cleaner imports
- Export types and interfaces from index files
- Use type-only imports when appropriate

### Best Practices
- Implement utility types (Pick, Omit, Partial) appropriately
- Document complex types with JSDoc comments
- Use branded types for domain-specific values
- Implement proper error types for API responses
- Use template literal types for string validation