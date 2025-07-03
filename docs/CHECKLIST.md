# Rules Collector Implementation Checklist

## Setup & Configuration

- [ ] Bootstrap project using `npx create-tsrouter-app@latest`
- [ ] Set up Neon Postgres instance (sign up, configure connection)
- [ ] Install and configure Drizzle ORM
- [ ] Define database schema for rule sets (Drizzle)
- [ ] Set up TANStack Router routes (list, add, edit)

## Core Features

- [ ] Build list page (table, actions, fetch from DB)

  - [ ] Display all rule sets (except ruleText)
  - [ ] Add "New Rule Set" button
  - [ ] Add Edit/Delete actions per row
  - [ ] Implement delete confirmation dialog

- [ ] Build details page (form, validation, save to DB)

  - [ ] Shared form for create/edit modes
  - [ ] Form validation with Zod
  - [ ] Save/Cancel functionality
  - [ ] Back to list navigation

- [ ] Implement CRUD operations
  - [ ] Create new rule set
  - [ ] Read/View rule set details
  - [ ] Update existing rule set
  - [ ] Delete rule set with confirmation

## Additional Features

- [ ] Add Windsurf export functionality
- [ ] Polish UI with Shadcn components
- [ ] Implement responsive design
- [ ] Add loading states and error handling
- [ ] Write unit tests
- [ ] Deploy application

## Version 1 (Future)

- [ ] GitHub authentication (8 West org)
- [ ] Favorites system
- [ ] Enhanced search/filtering
- [ ] Bulk operations
