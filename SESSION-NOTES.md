# Session Notes - Feb 28, 2026

## Overview

WordPress to Astro migration SEO cleanup and Lighthouse optimization session.

## Key Technical Discoveries

### 1. `<Button asChild>` Pattern Broken in Astro Templates

**Problem:** The `<Button asChild>` pattern using Radix's `Slot` component does NOT work in `.astro` files. The classes are never merged into the child element.

**Solution:** Use `buttonVariants()` directly on the element instead:

```astro
// ❌ Doesn't work in .astro files
<Button asChild size="lg">
  <a href="/contact">Start a Project</a>
</Button>

// ✅ Works correctly
<a href="/contact" class={buttonVariants({ size: "lg" })}>Start a Project</a>
```

**Files affected and fixed:**

- `src/components/blocks/Hero.astro`
- `src/components/blocks/ServiceHero.astro`
- `src/components/blocks/ServiceHeroBento.astro`
- `src/components/blocks/ServiceCTA.astro`
- `src/components/blocks/SocialShare.astro`

**Note:** `asChild` DOES work in `.tsx` files (e.g., `footer.tsx`).

### 2. Cloudflare Workers vs Pages

**Important:** This site is deployed via Cloudflare **Workers** (not Pages).

| Feature             | Workers                  | Pages                 |
| ------------------- | ------------------------ | --------------------- |
| `public/_redirects` | ❌ Not supported         | ✅ Supported          |
| `public/_headers`   | ❌ Not supported         | ✅ Supported          |
| Redirects           | Use Cloudflare Dashboard | Use `_redirects` file |
| Security headers    | Use Dashboard Rules      | Use `_headers` file   |

**Workaround:** Configure redirects and headers in Cloudflare Dashboard → Rules

### 3. Contrast Ratio Fix

Changed `--primary` color in `src/styles/global.css`:

- **Before:** `oklch(0.618 0.0778 65.5444)` → contrast 3.73:1 (fail)
- **After:** `oklch(0.55 0.0778 65.5444)` → contrast 4.94:1 (pass AA)

Applied to 6 locations (lines 24, 32, 33, 40, 45 + dark mode line 104).

---

## SEO Migration Summary

### Redirects Configured (Cloudflare Dashboard)

| Old WordPress URL                                              | New URL                                     |
| -------------------------------------------------------------- | ------------------------------------------- |
| `/news`                                                        | `/blog/`                                    |
| `/contact-us`                                                  | `/contact/`                                 |
| `/about-coalbanks-creative`                                    | `/about/`                                   |
| `/author/mwarf`                                                | `/about/`                                   |
| `/category/featured`                                           | `/portfolio/`                               |
| `/privacy-policy`                                              | `/`                                         |
| `/cookie-policy`                                               | `/`                                         |
| `/terms-of-service`                                            | `/`                                         |
| `/Featured/spotlighting-mycitycares-cinderella-project`        | `/portfolio/cinderella-project-mycitycare/` |
| `/Featured/for-the-love-of-lethbridge-video`                   | `/portfolio/for-the-love-of-lethbridge/`    |
| `/Featured/lethbridge-video-production-team`                   | `/portfolio/team-lethbridge-mission-edl/`   |
| `/Featured/coalbanks-helps-cbc-make-a-strong-first-impression` | `/portfolio/`                               |

Full redirect list saved in: `cloudflare-redirects.csv`

### Google Search Console

- Sitemaps submitted: `sitemap-index.xml`, `sitemap-0.xml`
- Old sitemaps removed
- Request re-indexing for: `/`, `/contact/`, `/about/`

---

## Draft Content (Noindex)

Services pages are currently draft and excluded from search:

- `/services/production/`
- `/services/drone/`
- `/services/events/`
- `/services/photography/`

**To publish when ready:**

1. Remove `noindex={true}` from each services page
2. Remove `Disallow: /services/` from `public/robots.txt`
3. Remove filter from `astro.config.mjs` sitemap config
4. Rebuild, deploy, resubmit sitemap

---

## Lighthouse Scores

| Metric         | Before | After |
| -------------- | ------ | ----- |
| Performance    | 74     | 97    |
| Accessibility  | 91     | 91\*  |
| Best Practices | 100    | 100   |
| SEO            | 100    | 100   |

\*Accessibility should improve to 100 once CDN cache clears with contrast fix.

---

## Deploy Commands

```bash
npm run build
git add -A && git commit -m "message"
git push origin master
npx wrangler deploy
```

---

## Important Files

| File                              | Purpose                                       |
| --------------------------------- | --------------------------------------------- |
| `cloudflare-redirects.csv`        | Redirect list for Cloudflare Dashboard import |
| `public/robots.txt`               | Crawler rules                                 |
| `src/components/BaseHead.astro`   | Meta tags, supports `noindex` prop            |
| `src/layouts/DefaultLayout.astro` | Main layout, passes `noindex` to BaseHead     |
| `astro.config.mjs`                | Sitemap config with services filter           |

---

## Pre-existing TypeScript Errors

The file `src/pages/blog/[...slug].astro` has pre-existing TypeScript errors related to a missing `tags` property in the blog schema. These were not introduced by this session's changes.
