import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

/**
 * Database client setup with Neon PostgreSQL and Drizzle ORM
 */

// Get database connection string from environment variables
const connectionString = process.env.DATABASE_URL || "";

// Create SQL query executor with Neon's serverless driver
const sql = neon(connectionString);

// Create a database connection with Drizzle ORM
// Using neon-http driver which is compatible with serverless environments
export const db = drizzle({ client: sql, schema });

// Export types for use throughout the application
export type DB = typeof db;
export * from "./schema";
