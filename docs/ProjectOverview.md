# Rule Sets Management Website Plan

## Project Overview

A website to create and manage rule sets for coding agents, built with modern TypeScript stack.

## Technology Stack

- **Frontend**: React 19 + TypeScript + TANStack Router + Shadcn UI
- **Forms**: TANStack Forms + Zod validation
- **Data**: TANStack Query for caching/retrieval
- **Database**: PostgreSQL on Neon + Drizzle ORM
- **Bootstrap**: `npx create-ts-router-app@latest`

## Rule Set Data Structure

Each rule set contains:

- **Title**: Name of the rule set
- **Description**: Detailed description of what the rule set does, and maybe where it came from
- **Author**: Creator of the rule set
- **ToolVersion**: Version of the tool this rule set is for
- **ToolName**: Name of the tool (e.g., "Windsurf", "ESLint", etc.)
- **ruleText**: The actual rule content/text
- **File type filter**: Optional glob pattern to specify which files this rule applies to
- **Created/Update date/time**: Timestamp of when the rule set was created and last modified (auto)

## Prototype Features

### 1. List Page (Root Route `/`)

- Shows all rule sets in a table format
- Displays all properties except ruleText (too long for list view)
- "Add New Rule Set" button
- Each row has Edit and Delete buttons
- Delete button shows confirmation prompt

### 2. Details Page (Routes `/rule-set/new` and `/rule-set/:id/edit`)

- Shared form for both creating new and editing existing rule sets
- All rule set fields with proper validation
- Save/Cancel buttons
- Navigation back to list page

### 3. Core Functionality

- Full CRUD operations for rule sets
- Form validation with Zod
- Confirmation dialogs for destructive actions
- Export to Windsurf format

## Version 1 Features (Post-Prototype)

- **GitHub Authentication**: Users must login with GitHub and be linked to "8 West" organization
- **Favorites System**: Users can mark rule sets as favorites for quick access
- Enhanced search and filtering
- Bulk operations
- Advanced export options

## Implementation Steps

### Phase 1: Project Setup

1. **Bootstrap Project**: Run `npx create-ts-router-app@latest`
2. **Database Setup**: Sign up for Neon, create database, get connection string
3. **Configure Drizzle ORM**: Install dependencies, set up config, create schema

### Phase 2: Core Infrastructure

4. **Define Database Schema**: Create `rule_sets` table with TypeScript types
5. **Set up TANStack Router**: Configure routes and data loading

### Phase 3: UI Implementation

6. **Build List Page**: Table component with data fetching and actions
7. **Build Details Page**: Form with validation for create/edit
8. **Add Delete Functionality**: Confirmation dialog and delete mutation

### Phase 4: Features & Polish

9. **Export Functionality**: Windsurf format export
10. **UI Polish**: Consistent theming, loading states, responsive design
11. **Testing & Deployment**: Test all functionality and deploy

## Database Schema (Drizzle)

```typescript
export const ruleSets = pgTable("rule_sets", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  author: text("author").notNull(),
  toolVersion: text("tool_version").notNull(),
  toolName: text("tool_name").notNull(),
  ruleText: text("rule_text").notNull(),
  fileTypeFilter: text("file_type_filter"), // Optional glob pattern
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
```

## Routes Structure

```
/                           // List page
/rule-set/new              // Add new rule set
/rule-set/:id/edit         // Edit existing rule set
```

## Ready for Implementation

The plan is complete and ready to begin implementation starting with Phase 1: Project Setup.
