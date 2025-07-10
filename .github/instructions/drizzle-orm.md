---
applyTo: '**'
---


# Drizzle ORM Development Rules

## Always Active

### Schema Definition
- Define database schemas using Drizzle's schema syntax
- Use proper TypeScript types for all columns
- Implement proper relationships between tables
- Use meaningful table and column names
- Define indexes for query optimization

### Query Building
- Use Drizzle's query builder for type-safe queries
- Implement proper joins for related data
- Use select() for specific column selection
- Handle pagination with limit() and offset()
- Use where() clauses with proper type safety

### Migrations
- Use Drizzle Kit for database migrations
- Keep migrations atomic and reversible
- Test migrations in development environment
- Use proper migration naming conventions
- Handle data migrations separately from schema changes

### Type Safety
- Leverage Drizzle's TypeScript integration
- Use InferModel for type inference from schemas
- Implement proper error handling for database operations
- Use branded types for database IDs
- Export and reuse database types throughout the application

### Performance
- Use prepared statements for repeated queries
- Implement proper connection pooling
- Use batch operations for bulk inserts/updates
- Monitor query performance with logging
- Use appropriate database indexes

### Integration
- Integrate with Neon PostgreSQL for serverless deployment
- Use with TANStack Query for client-side data management
- Implement proper transaction handling
- Use with Zod for runtime validation
- Handle database errors gracefully in the UI
