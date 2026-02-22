# AGENTS.md - Portfolio Website

## Project Overview

This is a personal portfolio website for Kyne, a cybersecurity student and software developer. Built with Next.js 16 (App Router), Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (subtle animations only)
- **Authentication**: NextAuth.js v4
- **Language**: TypeScript

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Running a Single Test

No test framework is currently configured. To add tests:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Then run tests with:

```bash
npx vitest run
```

## Code Style Guidelines

### TypeScript

- Use explicit types for function parameters and return types
- Prefer interfaces over types for object shapes
- Use `type` for unions, intersections, and primitives

```typescript
// Good
interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

function getProjects(): Promise<Project[]> {
  // ...
}

// Avoid
function getProjects() {
  // ...
}
```

### Component Structure

- Use functional components with explicit prop typing
- Place smaller components in the same file as their parent when used only there
- Export components at the bottom or as named exports

```typescript
// Good
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  // ...
}
```

### Imports

- Use absolute imports with `@/` alias
- Group imports: external, internal, relative
- Sort alphabetically within groups

```typescript
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Button, Card } from '@/components/ui';
import { useTheme } from '@/lib/theme-provider';
import { Project } from '@/types';
import { projects } from '@/data/portfolio';
```

### Tailwind CSS

- Use semantic color tokens from CSS variables (e.g., `bg-primary`, `text-muted-foreground`)
- Prefer utility classes over custom CSS
- Use `md:`, `lg:` prefixes for responsive design (mobile-first)

```html
<div className="flex flex-col md:flex-row gap-4">
  <span className="text-muted-foreground">Content</span>
</div>
```

### Framer Motion

- Use subtle animations only (fade-in, slide-up)
- Avoid excessive motion
- Use `viewport={{ once: true }}` for scroll-triggered animations

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* content */}
</motion.div>
```

### Error Handling

- Use try/catch for async operations
- Return meaningful error messages
- Handle loading and error states in components

```typescript
try {
  const res = await fetch('/api/projects');
  if (!res.ok) throw new Error('Failed to fetch');
  const data = await res.json();
  return data;
} catch (error) {
  console.error('Failed to fetch projects:', error);
  return [];
}
```

### Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection`, `ProjectCard`)
- **Files**: kebab-case (e.g., `project-card.tsx`, `github-section.tsx`)
- **Variables**: camelCase
- **Constants**: SCREAMING_SNAKE_CASE for env vars

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/              # Protected admin dashboard
│   │   ├── login/          # Admin login page
│   │   └── page.tsx       # Admin dashboard
│   ├── api/                # API routes
│   │   ├── auth/           # NextAuth endpoints
│   │   └── projects/       # Project CRUD API
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   └── Section.tsx
│   ├── Navbar.tsx
│   └── Providers.tsx       # Session + Theme providers
├── data/
│   ├── portfolio.ts        # Static site data
│   └── projects.json       # Dynamic projects data
├── lib/
│   ├── auth.ts             # NextAuth configuration
│   ├── projects.ts         # Project data management
│   └── theme-provider.tsx  # Theme context
├── sections/               # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Github.tsx
│   └── Contact.tsx
└── types/
    └── index.ts            # TypeScript interfaces
```

## Environment Variables

Create `.env.local` from `.env.local.example`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-secure-password

NEXT_PUBLIC_GITHUB_TOKEN=your-github-personal-access-token
```

## Adding New Features

### Adding a New Project

1. **Option 1**: Use the Admin Dashboard
   - Go to `/admin/login`
   - Sign in with admin credentials
   - Add new project via the form

2. **Option 2**: Edit `src/data/projects.json` directly

### Adding a New Section

1. Create the section component in `src/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Updating Resume

1. Place your PDF file in `public/resume.pdf`
2. The download button in the Hero section will automatically work

## Deployment

Deploy to Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Design Guidelines

- **Style**: Minimalist & Clean
- **Colors**: Soft neutral palette, no neon/hacker aesthetics
- **Theme**: Light mode default, refined dark mode (deep gray, not pure black)
- **Typography**: Modern sans-serif, generous whitespace
- **Animations**: Subtle fade-in, slide-up only - no excessive motion

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | List all projects (auth required) |
| POST | `/api/projects` | Add project (auth required) |
| PUT | `/api/projects` | Update project (auth required) |
| DELETE | `/api/projects?id={id}` | Delete project (auth required) |

## Notes

- The admin dashboard is protected by NextAuth credentials
- Projects are stored in `src/data/projects.json` for easy migration to a database
- GitHub API integration uses a personal access token for higher rate limits
- All pages use server-side rendering with static generation where possible
