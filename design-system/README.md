# Design System Overview

This directory contains the design system documentation for the production template.

## Files

- **MASTER.md** - Complete design system specification
- **pages/** - Page-specific overrides (if any deviations from Master)

## Quick Reference

### Typography
```html
<h1>Main Heading</h1>  <!-- 30px → 60px responsive -->
<h2>Section Heading</h2>  <!-- 24px → 36px responsive -->
<p class="text-xl md:text-2xl">Body text</p>
```

### Buttons
```astro
<Button asChild size="lg">  <!-- Hero CTAs -->
<Button asChild>  <!-- Standard CTAs -->
<Button variant="outline">  <!-- Secondary actions -->
```

### Transitions
```html
<button class="transition-ui">UI Element</button>
<img class="transition-image group-hover:scale-105" />
```

### Spacing
Use the 4px base unit: `gap-4` (16px), `gap-8` (32px), `py-28` (112px)

## Usage

Before building a new component:
1. Read `MASTER.md` for design system rules
2. Check if a page-specific override exists in `pages/`
3. Follow the established patterns

## Contributing

When adding new patterns:
1. Document in `MASTER.md`
2. Add code examples
3. Update this README if needed
