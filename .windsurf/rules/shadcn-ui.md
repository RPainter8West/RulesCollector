---
trigger: always_on
---

# Shadcn UI Development Rules

## Always Active

### Component Usage

- Use Shadcn UI components as base building blocks
- Customize components through CSS variables and Tailwind classes
- Follow component composition patterns for complex UIs
- Use proper TypeScript props for all components
- Implement proper accessibility attributes

### Theming

- Use CSS custom properties for consistent theming
- Implement dark/light mode toggle functionality
- Follow design system color palette
- Use semantic color tokens (primary, secondary, destructive, etc.)
- Maintain consistent spacing and typography scales

### Form Components

- Use Shadcn form components with TANStack Forms
- Implement proper form validation styling
- Use consistent error message display patterns
- Follow form accessibility guidelines
- Integrate with Zod validation for error states

### Layout Components

- Use Shadcn layout components for consistent structure
- Implement responsive design patterns
- Use proper grid and flexbox utilities
- Follow mobile-first design principles
- Maintain consistent component spacing

### Customization

- Extend components through className prop
- Use CSS modules for component-specific styles
- Follow BEM methodology for custom CSS
- Use Tailwind utilities for quick styling
- Maintain design system consistency

### Integration

- Integrate with TANStack Query for data-driven components
- Use proper loading states with Shadcn components
- Implement error boundaries with Shadcn error components
- Use Shadcn navigation components with TANStack Router
- Follow component library best practices

Use the latest version of Shadcn to install new components, like this command to add a button component:

```bash
pnpx shadcn@latest add button
```
