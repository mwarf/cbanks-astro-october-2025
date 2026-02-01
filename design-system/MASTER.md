# Design System - Production Template

## Typography

### Scale
- **H1:** 1.875rem (30px) → 2.25rem (36px) → 3rem (48px) → 3.75rem (60px)
- **H2:** 1.5rem (24px) → 1.875rem (30px) → 2.25rem (36px)
- **H3:** 1.25rem (20px) → 1.5rem (24px) → 1.875rem (30px)
- **H4:** 1.125rem (18px) → 1.25rem (20px)
- **H5:** 1rem (16px) → 1.125rem (18px)
- **H6:** 0.875rem (14px) → 1rem (16px)
- **Body:** 1rem (16px) → 1.125rem (18px) → 1.25rem (20px)

### Font Families
- **Display/Headings:** Playfair Display (serif, weight 700)
- **Body Text:** Outfit (sans-serif, weight 400)
- **Monospace:** IBM Plex Mono

### Usage Rules
- Always use semantic HTML (`<h1>`, `<h2>`, etc.)
- Utility classes (`.h1`, `.h2`) available for non-semantic styling
- All headings include `-0.02em` letter-spacing by default

## Colors

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `oklch(0.618 0.0778 65.5444)` | CTAs, links, brand accents |
| `--secondary` | `oklch(0.8846 0.0302 85.5655)` | Secondary buttons, subtle backgrounds |
| `--accent` | `oklch(0.8348 0.0426 88.8064)` | Hover states, highlights |
| `--background` | `oklch(0.9582 0.0152 90.2357)` | Page background |
| `--foreground` | `oklch(0.376 0.0225 64.3434)` | Primary text |
| `--muted-foreground` | `oklch(0.5391 0.0387 71.1655)` | Secondary text, descriptions |

### Dark Mode (Cinematic OLED)
| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `oklch(0.618 0.0778 65.5444)` | Retained for brand consistency |
| `--background` | `oklch(0.12 0.01 28.0)` | Deep, rich warm black (not #000) for OLED-like cinematic feel |
| `--foreground` | `oklch(0.98 0.01 90.0)` | High contrast off-white for readability |
| `--muted-foreground`| `oklch(0.70 0.02 90.0)` | Crisp secondary text |

### Color Palette Philosophy
Warm, earthy tones (beige/brown) for light mode to convey authenticity. 
**Dark mode** switches to a "Cinematic OLED" aesthetic: deep warm blacks (instead of pure gray) to maximize video contrast and reduce eye strain, aligning with the "Enterprise Gateway" pattern for video production sites.

## Spacing

### Base Unit
4px (0.25rem)

### Scale
- `gap-1` / `p-1`: 4px
- `gap-2` / `p-2`: 8px
- `gap-3` / `p-3`: 12px
- `gap-4` / `p-4`: 16px
- `gap-5` / `p-5`: 20px
- `gap-6` / `p-6`: 24px
- `gap-8` / `p-8`: 32px
- `gap-10` / `p-10`: 40px
- `gap-12` / `p-12`: 48px
- `gap-16` / `p-16`: 64px
- `gap-20` / `p-20`: 80px

### Usage Guidelines
- Section padding: `py-28` (mobile) → `lg:py-32` (tablet) → `lg:pt-44` (desktop hero)
- Container padding: `px-6` (1.5rem)
- Component gaps: Typically `gap-4` (16px) for tight spacing, `gap-8` (32px) for breathing room

## Transitions

### Duration Standards
| Type | Duration | Usage |
|------|----------|-------|
| **UI Elements** | 300ms | Buttons, links, nav items, cards |
| **Images** | 700ms | Image scale/transform effects |
| **Navigation** | 300ms | Dropdowns, modals, mobile menus |

### Utility Classes
- `.transition-ui` - 300ms with easing
- `.transition-image` - 700ms with easing

### Easing
All transitions use `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)

### Examples
```html
<!-- Button hover -->
<button class="transition-ui hover:bg-accent">Click me</button>

<!-- Image scale -->
<img class="transition-image group-hover:scale-105" />

<!-- Icon transform -->
<Icon className="transition-ui hover:translate-x-1" />
```

## Shadows

### Scale
```css
--shadow-xs:  2px 3px 5px 0px hsl(28 13% 20% / 0.06)
--shadow-sm:  2px 3px 5px 0px hsl(28 13% 20% / 0.12), ...
--shadow:     2px 3px 5px 0px hsl(28 13% 20% / 0.12), ...
--shadow-md:  2px 3px 5px 0px hsl(28 13% 20% / 0.12), ...
--shadow-lg:  2px 3px 5px 0px hsl(28 13% 20% / 0.12), ...
--shadow-xl:  2px 3px 5px 0px hsl(28 13% 20% / 0.12), ...
--shadow-2xl: 2px 3px 5px 0px hsl(28 13% 20% / 0.3)
```

### Usage
- Cards at rest: `shadow-md`
- Cards on hover: `shadow-lg` or `shadow-xl`
- Modals/dialogs: `shadow-2xl`
- Subtle elements: `shadow-xs` or `shadow-sm`

## Buttons

### Sizes
- **Default:** `h-10 px-4 py-2`
- **Large (`size="lg"`):** `h-11 px-8`
- **Small (`size="sm"`):** `h-9 px-3`
- **Icon (`size="icon"`):** `h-10 w-10`

### Variants
- **Default:** Primary brand color, high contrast
- **Outline:** Border with transparent background
- **Ghost:** No background or border, text only

### Hero CTA Standard
All hero sections should use `size="lg"` for primary CTAs to ensure visual prominence.

## Accessibility

### Reduced Motion
All animations and transitions respect `prefers-reduced-motion: reduce` media query.

### Focus States
- All interactive elements have visible focus states
- Focus ring: 2px solid primary color with 2px offset
- Additional ring: 2px primary/20 for enhanced visibility

### Color Contrast
- Minimum 4.5:1 for body text (WCAG AA)
- Minimum 3:1 for large text and UI components

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus order follows logical reading order
- Skip links available for screen readers

## Component Patterns
### Navigation ("Enterprise Gateway")
- **Structure:** Logo + Solutions Dropdown (Industry/Role) + Resources + Client Logos (Trust)
- **CTAs:**
  - **Primary:** "Contact Sales" / "Start a Project" (High contrast)
  - **Secondary:** "Login" / "Client Portal" (Subtle/Ghost)
- **Mega Menu:** Preferred for services options to reduce clicks.

### Hero Sections
- **Layout:** Two-column (1:1 or 1:2 ratio)
- **Structure:** Headline + description + dual CTAs + features/images
- **Button sizing:** Primary CTA uses `size="lg"`
- **Responsive:** Stack on mobile, side-by-side on tablet+

### Bento Grids
- **Layout:** CSS Grid with varying cell spans
- **Images:** Rounded corners (`rounded-2xl`), shadow-lg
- **Hover:** Scale 1.05 on 700ms transition
- **Mobile:** Single column, maintains aspect ratios

### Card Hover Effects
- **Transform:** Subtle lift (`-translate-y-1` or `-translate-y-2`)
- **Shadow:** Increase from `shadow-md` to `shadow-xl`
- **Duration:** 300ms
- **Easing:** ease-out

## Anti-Patterns (Avoid)
- ❌ **Static Layouts:** Pages that feel like PDF documents. Use motion/video background where appropriate.
- ❌ **Slow Video Players:** Use optimized, lazy-loaded video or lightweight posters.
- ❌ **Low Contrast Dark Mode:** Avoid "gray-on-gray". Use high contrast text on deep black.
- ❌ **Buried Contact:** "Contact" button must be visible in sticky header at all times.

## Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small desktops |
| `xl` | 1280px | Large desktops |
| `2xl` | 1536px | Extra large screens |

### Container
- Mobile (< 1400px): Fluid width with 1.5rem padding
- Desktop (≥ 1400px): Max-width 1220px

## Best Practices

### DO ✅
- Use semantic HTML (`<h1>`, `<button>`, `<nav>`)
- Use Lucide React icons (never emojis)
- Add `cursor-pointer` on all clickable elements
- Include hover states on interactive elements
- Respect aspect ratios on images
- Use Astro's Image component for optimization

### DON'T ❌
- Mix transition durations inconsistently
- Use fixed pixel widths for containers
- Skip responsive testing
- Ignore accessibility (keyboard nav, screen readers)
- Use inline styles instead of Tailwind utilities
- Forget loading states and error handling
