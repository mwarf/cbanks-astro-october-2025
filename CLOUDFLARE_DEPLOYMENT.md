# Cloudflare Pages Deployment Guide

This guide covers deploying your Astro site to Cloudflare Pages.

## Prerequisites

- Cloudflare account (free tier is sufficient)
- Git repository connected to Cloudflare Pages
- `RESEND_API_KEY` for email functionality

## Local Development

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

The Cloudflare adapter will automatically provide local emulation of the Cloudflare runtime.

### Preview Production Build Locally
```bash
pnpm build && wrangler pages dev ./dist
```

## Deployment Options

### Option 1: Git Integration (Recommended)

1. **Connect Repository to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create Application** → **Pages**
   - Connect your Git repository (GitHub/GitLab)

2. **Configure Build Settings**
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or leave blank)
   - **Node version**: `20` or later

3. **Set Environment Variables**
   - Go to **Settings** → **Environment Variables**
   - Add: `RESEND_API_KEY` = `your_actual_key_here`
   - Apply to: **Production** and **Preview** environments

4. **Deploy**
   - Push to your main branch
   - Cloudflare will automatically build and deploy

### Option 2: Manual Deployment with Wrangler CLI

1. **Install Wrangler** (already in devDependencies)
   ```bash
   pnpm install
   ```

2. **Authenticate with Cloudflare**
   ```bash
   npx wrangler login
   ```

3. **Build and Deploy**
   ```bash
   pnpm build && npx wrangler pages deploy ./dist
   ```

4. **Set Secrets** (for production)
   ```bash
   npx wrangler pages secret put RESEND_API_KEY
   ```
   Enter your Resend API key when prompted.

## Environment Variables

### Local Development
Environment variables for local development are stored in `.dev.vars`:
```
RESEND_API_KEY=your_key_here
```

**⚠️ Important**: `.dev.vars` is gitignored and should NEVER be committed.

### Production
Set environment variables in the Cloudflare Dashboard:
1. Navigate to your Pages project
2. Go to **Settings** → **Environment Variables**
3. Add variables for Production and Preview environments

## Configuration Files

### `wrangler.jsonc`
Cloudflare Pages configuration:
```jsonc
{
  "name": "cbanks-astro-october-2025",
  "compatibility_date": "2026-02-06",
  "main": "dist/_worker.js",
  "assets": {
    "directory": "dist"
  }
}
```

### `astro.config.mjs`
Astro configuration with Cloudflare adapter:
```javascript
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare(),
  output: "static",
  // ... other config
});
```

## Custom Domain Setup

1. In Cloudflare Pages dashboard, go to **Custom Domains**
2. Add your domain: `coalbanks.com`
3. Follow DNS configuration instructions
4. SSL/TLS will be automatically provisioned

## Performance Optimizations

### Caching Headers
Create `public/_headers` to set custom caching rules:
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable
```

### Redirects
Create `public/_redirects` for URL redirects:
```
/old-page  /new-page  301
```

## Troubleshooting

### Build Fails
- Check Node.js version (should be 20+)
- Verify all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### Environment Variables Not Working
- Ensure variables are set in Cloudflare dashboard
- Verify variable names match exactly (case-sensitive)
- Redeploy after adding new variables

### API Routes Not Working
- Verify `output: "static"` in `astro.config.mjs`
- Check that API routes are in `src/pages/api/`
- Review Cloudflare Pages Functions logs

## Monitoring & Analytics

- **Analytics**: Available in Cloudflare Pages dashboard
- **Logs**: View deployment and function logs in dashboard
- **Performance**: Use Cloudflare Web Analytics (free)

## Useful Commands

```bash
# Local development
pnpm dev

# Build for production
pnpm build

# Preview production build locally
pnpm build && wrangler pages dev ./dist

# Deploy manually
pnpm build && npx wrangler pages deploy ./dist

# View deployment logs
npx wrangler pages deployment list

# Tail live logs
npx wrangler pages deployment tail
```

## Resources

- [Astro Cloudflare Deployment Docs](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
