# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

cbanks-astro-october-2025 is an Astro 5 website built with shadcn/ui components, Tailwind CSS 4, and React 19. It's a static site with TypeScript support, designed for building modern marketing and content websites.

## Common Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server at http://localhost:3000
npm run build        # Build for production
npm run preview      # Preview production build
```

### Code Quality
```bash
npm run lint         # Run ESLint with auto-fix
npm run format       # Format code with Prettier
```

## Project Architecture

### Directory Structure

- **`src/components/`**
  - `blocks/` - Page section components (hero, navbar, footer, pricing, etc.)
  - `ui/` - shadcn/ui base components (excluded from linting)
  - Shared utility components (theme-toggle, background, etc.)

- **`src/layouts/`**
  - `DefaultLayout.astro` - Standard page layout with navbar and footer
  - `BasicLayout.astro` - Content-focused layout with centered prose container

- **`src/pages/`** - File-based routing (Astro convention)
  - Routes: index, about, pricing, faq, contact, login, signup, blog, privacy
  - RSS feed generated at `/rss.xml`

- **`src/content/`** - Content collections (MDX blog posts)
  - Schema defined in `src/content.config.ts`

- **`src/lib/`** - Utilities
  - `utils.ts` - Contains `cn()` function for className merging

- **`src/styles/global.css`** - Global styles with Tailwind 4, custom CSS variables, and DM Sans font

### Configuration Files

- **`astro.config.mjs`** - Astro configuration with MDX, React, and Sitemap integrations
- **`tsconfig.json`** - Path aliases configured: `@/*`, `@components/*`, `@layouts/*`, `@lib/*`, `@code/*`
- **`eslint.config.mjs`** - Enforces import ordering, configured for Astro and TypeScript files
- **`.prettierrc`** - Prettier with Tailwind plugin, 2-space tabs, double quotes
- **`src/consts.ts`** - Site-wide constants (title, description, metadata, social tags)

### Key Patterns

**Component Architecture:**
- Astro components for layouts and static content (`.astro` files)
- React components for interactive UI (`client:only='react'` directive)
- shadcn/ui components in `src/components/ui/` (do not modify directly)
- Pre-built blocks available in `src/components/blocks/` for common sections

**Styling:**
- Tailwind CSS 4 with `@tailwindcss/vite` plugin
- CSS variables for theming (light/dark mode via `astro-themes`)
- Custom color tokens using OKLCH format
- `cn()` utility from `@/lib/utils` for conditional classes
- DM Sans font family (Regular, Medium, SemiBold, Bold)

**Content:**
- MDX support via `@astrojs/mdx`
- Blog posts use content collections with frontmatter validation (Zod schema)
- Typography styling via `@tailwindcss/typography`

**Theming:**
- Dark/light mode with `astro-themes` package, compatible with tweakcn
- Theme toggle component with client-side interactivity
- CSS custom properties defined in `global.css`

**Animations:**
- Motion library (Framer Motion) for interactive animations
- `tw-animate-css` integration for Tailwind-based animations

**Icons:**
- Lucide React for primary icon set
- React Icons library for additional icons

### Import Conventions

ESLint enforces import ordering:
1. React/Next.js (builtin)
2. External packages
3. Internal imports with `@/` prefix
4. Newlines between groups, alphabetically sorted

Example:
```typescript
import React from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
```

### Deployment

Configured for static site generation (`output: "static"`). Tested and ready for Vercel deployment.
