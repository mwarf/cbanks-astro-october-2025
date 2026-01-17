# Site Image Requirements

This document outlines all placeholder images in the site, their specifications, and best practices for replacing them with actual content while maintaining optimal performance and visual fidelity.

---

## Quick Reference: Recommended Formats

| Use Case | Preferred Format | Fallback | Notes |
|----------|-----------------|----------|-------|
| Hero/Large photos | `.webp` or `.avif` | `.jpg` | Astro auto-optimizes `.jpg`/`.png` to `.webp` |
| Blog/Portfolio thumbnails | `.webp` | `.jpg` | Keep source as high-quality `.jpg` |
| Logos/Icons | `.svg` | `.png` | SVG for vector graphics |
| Team/Avatar photos | `.webp` or `.jpg` | `.png` | Ensure consistent face positioning |
| OG/Social images | `.jpg` | - | 1200×630 for social compatibility |

> [!TIP]
> **Astro Image Optimization**: Images imported from `src/assets/` are automatically optimized by Astro's Image component. Images in `public/` are served as-is. For best Lighthouse scores, place frequently-used images in `src/assets/` and use the `<Image />` component.

---

## Image Categories

### 1. Hero Image (Homepage)

| Property | Value |
|----------|-------|
| **Path** | `src/assets/images/home/hero-main.png` |
| **Current Dimensions** | 1024 × 1024 px |
| **Recommended Dimensions** | 1920 × 1080 px (16:9 aspect ratio) |
| **File Size Target** | < 200 KB (as WebP) |
| **Format** | `.jpg` or `.png` (Astro converts to WebP) |
| **Usage** | Hero section on homepage |

**Content Guidance:**
- High-impact image showing documentary film crew at work, interview setup, or cinema camera equipment
- Should convey professional, authentic documentary production
- Optimize for `loading="eager"` as this is above-the-fold content

---

### 2. Homepage Features / "Resource" Images

These appear in the "Tell your story without sounding like marketing" bento grid section.

| Image | Path | Recommended Dimensions | Content Suggestion |
|-------|------|----------------------|-------------------|
| Resource 1 | `src/assets/images/home/resource-1.png` | 1024 × 576 px (16:9) | Documentary filming setup / interview scene |
| Resource 2 | `src/assets/images/home/resource-2.png` | 800 × 800 px (1:1) | Portfolio reel montage / film equipment |
| Resource 3 | `src/assets/images/home/resource-3.png` | 1024 × 576 px (16:9) | Analytics/results visualization |
| Resource 4 | `src/assets/images/home/resource-4.png` | 800 × 800 px (1:1) | Southern Alberta landscape / local imagery |

> [!NOTE]
> These images display at aspect-ratio `video` (16:9). Provide source images at minimum 1024px width for crisp display on retina screens.

---

### 3. Homepage Feature Cards

Three feature cards appearing below the hero section.

| Image | Path | Dimensions | Content Theme |
|-------|------|------------|---------------|
| Feature 1 | `src/assets/images/home/feature-1.png` | 600 × 468 px (1.28:1) | Complex operations → compelling stories |
| Feature 2 | `src/assets/images/home/feature-2.png` | 600 × 468 px (1.28:1) | Cinema equipment / documentary craft |
| Feature 3 | `src/assets/images/home/feature-3.png` | 600 × 468 px (1.28:1) | Recruitment/investment/engagement |

**Current:** 1024 × 1024 px  
**Recommended:** 1200 × 936 px minimum (2× for retina, rendered at 600 × 468)

---

### 4. Blog Post Images

Blog post featured images referenced in the frontmatter of each `.md` file in `src/content/blog/`.

| Property | Value |
|----------|-------|
| **Path** | `public/images/blog-placeholder*.png` |
| **Current Dimensions** | 1920 × 1920 px or 1024 × 1024 px |
| **Recommended Dimensions** | 1920 × 1080 px (16:9) |
| **File Size Target** | < 300 KB per image |
| **Format** | `.webp` or `.jpg` (convert to WebP) |

**Current Placeholders:**
- `blog-placeholder.png` (1920×1920) — ~4.1 MB ⚠️
- `blog-placeholder-2.png` (1920×1920) — ~3.7 MB ⚠️
- `blog-placeholder-3.png` (1920×1920) — ~4.1 MB ⚠️
- `blog-placeholder-4.png` (1920×1920) — ~4.5 MB ⚠️
- `blog-placeholder-5.png` (1024×1024) — ~800 KB
- `blog-placeholder-6.png` (1024×1024) — ~700 KB

> [!WARNING]
> **Current blog images are significantly oversized** (3-4 MB each). They should be resized to 1920×1080 and converted to WebP format to achieve <300 KB each. This will dramatically improve Lighthouse performance scores.

**To Replace:**
1. Update the frontmatter `image:` field in each blog post
2. Example: `image: "/images/my-blog-post-hero.webp"`

---

### 5. Portfolio Project Images

| Property | Value |
|----------|-------|
| **Path** | `public/portfolio/project-*.png` |
| **Current Dimensions** | 1024 × 1024 px |
| **Recommended Dimensions** | 1600 × 900 px (16:9) or 1200 × 800 px (3:2) |
| **File Size Target** | < 200 KB per image (as WebP) |
| **Format** | `.webp` preferred |

**Current Files:**
- `project-1.png` through `project-6.png` (~1.6 MB each) ⚠️

**To Replace:**
1. Add new images to `public/portfolio/`
2. Update references in `src/lib/portfolio-data.ts`
3. Alternatively, update portfolio content files in `src/content/portfolio/`

---

### 6. Testimonial Images

Client/testimonial headshots used in the testimonials carousel.

| Property | Value |
|----------|-------|
| **Path** | `public/testimonials/*.webp` |
| **Current Dimensions** | Varies: 1200×800 to 1200×1812 |
| **Recommended Dimensions** | 400 × 400 px (1:1 square) |
| **File Size Target** | < 50 KB per image |
| **Format** | `.webp` or `.jpg` |

**Current Files:**
- `headshot-david-park.webp` — ~984 KB
- `headshot-jennifer-walsh.webp` — ~999 KB
- `headshot-michael-roberts.webp` — ~57 KB
- `headshot-sarah-chen.webp` — ~55 KB

**To Replace:**
1. Add new headshot images to `public/testimonials/`
2. Update references in `src/components/blocks/testimonials.tsx`

**Guidelines:**
- Professional headshots or candid business photos
- Consistent lighting and framing across all testimonials
- Square crop or ensure face is centered for dynamic cropping

---

### 7. Team Member Images

| Property | Value |
|----------|-------|
| **Path** | `public/team/*.png` |
| **Current Dimensions** | 1024 × 1024 px |
| **Recommended Dimensions** | 800 × 800 px (1:1) |
| **File Size Target** | < 100 KB per image |
| **Format** | `.webp` or `.jpg` |

**Current Files:**
- `1.png` through `4.png` (~550-750 KB each) ⚠️

---

### 8. About Page Images

| Property | Value |
|----------|-------|
| **Path** | `public/about/*.webp` |
| **Current Dimensions** | 1200 × 800 px (3:2) |
| **Recommended** | 1200 × 800 px (current is good) |
| **File Size** | 42-82 KB ✓ (well optimized) |

These images are currently well-sized and optimized.

---

### 9. Contact Page / Building Image

| Property | Value |
|----------|-------|
| **Path** | `src/assets/images/building-placeholder.webp` |
| **Current Dimensions** | 1920 × 1072 px |
| **Recommended** | 1600 × 900 px (16:9) |
| **File Size** | 187 KB (current) |
| **Format** | `.webp` or `.jpg` |

**Content:** Exterior photo of the Coalbanks Creative office building or studio space.

### 10. Service Page Images

Images used on the individual service pages (Drone, Events, Photography, Production).

| Property | Value |
|----------|-------|
| **Path** | `public/services/{service_name}/*.jpg` |
| **Recommended Dimensions** | Hero: 1920 × 1080 px; Gallery/Portfolio: 800 × 600 px (4:3) |
| **File Size Target** | Hero: < 200 KB; Gallery: < 100 KB |
| **Format** | `.jpg` or `.webp` |

**Directory Structure:**
- `public/services/drone/`
- `public/services/events/`
- `public/services/photography/`
- `public/services/production/`

**Content:**
- **Hero Images**: Cinematic wide shots representing the service (e.g., drone aerial, film set).
- **Gallery/Capability Images**: Specific examples of work or capabilities.
- **Portfolio Thumbnails**: Featured project thumbnails for the Production page.

---

### 11. Client Logos

| Property | Value |
|----------|-------|
| **Path** | `public/logos/*.svg` |
| **Format** | `.svg` (vector, scalable) |
| **Display Size** | 48 × 48 px icons |

**Current Logos:**
- City of Lethbridge
- Government of Alberta
- Castle Mountain
- Galt Museum
- MD of Taber
- Stantec Consulting
- Storyhive
- Sumus
- Snapshot Studios

**Guidelines:**
- Single-color SVG preferred (for dark/light mode compatibility)
- Both `-dark.svg` and `-light.svg` variants recommended
- See `public/logos/replacement/` for the theming pattern

---

### 11. Open Graph / Social Sharing Image

| Property | Value |
|----------|-------|
| **Path** | `public/og-image.jpg` |
| **Current Dimensions** | 1800 × 945 px |
| **Recommended Dimensions** | 1200 × 630 px (standard OG) |
| **File Size Target** | < 150 KB |
| **Format** | `.jpg` (required for social platforms) |

**Content:**
- Brand logo with tagline
- Representative imagery of documentary work
- Text should be minimal but readable at thumbnail size

---

## Best Practices for Lighthouse Performance

### Image Optimization Checklist

- [ ] **Use `src/assets/` for optimized images** — Astro automatically converts and optimizes
- [ ] **Use `public/` for pass-through images** — Only for images that shouldn't be processed
- [ ] **Provide `width` and `height` attributes** — Prevents layout shift (CLS)
- [ ] **Use `loading="lazy"`** — For below-the-fold images
- [ ] **Use `loading="eager"` + `fetchpriority="high"`** — For hero/LCP images
- [ ] **Serve appropriately sized images** — Don't serve 4K images for 400px display areas
- [ ] **Convert to WebP/AVIF** — 25-50% smaller than JPEG at equivalent quality

### Recommended Source Image Sizes

| Display Size | Source Image (2× Retina) |
|--------------|-------------------------|
| 400px width | 800px minimum |
| 800px width | 1600px minimum |
| Full-width hero | 1920px minimum |

### File Size Guidelines

| Image Type | Target Size |
|------------|-------------|
| Hero/Full-width | < 200 KB |
| Blog thumbnails | < 150 KB |
| Portfolio cards | < 150 KB |
| Testimonial headshots | < 50 KB |
| Logos (SVG) | < 20 KB |
| OG Image | < 150 KB |

---

## Image Replacement Workflow

### For images in `src/assets/` (Astro-optimized):

1. Add your new image to the appropriate folder (e.g., `src/assets/images/home/`)
2. Maintain the same filename for drop-in replacement, or:
3. Update the import statement in the component

```astro
// Example: src/pages/index.astro
import heroImage from '@/assets/images/home/hero-main.jpg'; // Your new image
```

### For images in `public/` (static):

1. Add your new image to the appropriate folder
2. Update the path string in the relevant component or content file

```markdown
---
# Example: src/content/blog/my-post.md
image: "/images/blog/my-new-hero.webp"
---
```

---

## Summary Table

| Location | Count | Current Issue | Action Required |
|----------|-------|---------------|-----------------|
| `src/assets/images/home/` | 8 | AI-generated placeholders | Replace with real photos |
| `public/images/blog-placeholder*.png` | 6 | Oversized (3-4 MB) | Resize & convert to WebP |
| `public/portfolio/` | 6 | Oversized (~1.6 MB) | Resize & convert to WebP |
| `public/testimonials/` | 4 | Some oversized | Consider resizing to 400×400 |
| `public/team/` | 4 | Placeholders | Replace with team headshots |
| `public/about/` | 4 | ✓ Well optimized | Good to keep or replace |
| `public/logos/` | 11+ | ✓ Optimized SVGs | Add/update client logos |
| `public/og-image.jpg` | 1 | Slightly oversized | Resize to 1200×630 |
| `src/assets/building-placeholder.webp` | 1 | Placeholder | Replace with office photo |

---

## Tools for Image Optimization

- **[Squoosh](https://squoosh.app/)** — Browser-based compression with WebP/AVIF export
- **[Sharp](https://sharp.pixelplumbing.com/)** — Node.js library (used by Astro internally)
- **[ImageOptim](https://imageoptim.com/)** — macOS app for batch optimization
- **[SVGO](https://svgomg.net/)** — SVG optimization tool
