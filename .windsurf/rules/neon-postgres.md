---
trigger: always_on
---

# Neon PostgreSQL Development Rules

## Always Active

### Database Connection

- Use connection pooling for optimal performance
- Implement proper connection string management
- Use environment variables for database credentials
- Handle connection errors gracefully
- Use serverless-friendly connection patterns

### Query Optimization

- Use prepared statements for repeated queries
- Implement proper indexing strategies
- Use EXPLAIN ANALYZE for query performance analysis
- Avoid N+1 query problems
- Use batch operations for bulk data operations

### Schema Management

- Use migrations for schema changes
- Implement proper foreign key constraints
- Use appropriate data types for columns
- Follow PostgreSQL naming conventions
- Use schemas for logical data separation

### Security

- Use parameterized queries to prevent SQL injection
- Implement proper role-based access control
- Use SSL connections for data in transit
- Follow principle of least privilege
- Regularly update database credentials

### Performance

- Use connection pooling with appropriate pool sizes
- Implement query caching where appropriate
- Use read replicas for read-heavy workloads
- Monitor query performance and slow queries
- Use appropriate PostgreSQL extensions

### Integration

- Integrate with Drizzle ORM for type-safe queries
- Use with TANStack Query for client-side caching
- Implement proper error handling for database operations
- Use transactions for data consistency
- Handle database migrations in deployment pipeline
