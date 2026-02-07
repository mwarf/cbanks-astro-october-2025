# Cloudflare Pages Pre-Launch Checklist

## ✅ Completed Items

### Infrastructure Migration
- [x] **Removed Vercel adapter** - Uninstalled `@astrojs/vercel`
- [x] **Installed Cloudflare adapter** - Added `@astrojs/cloudflare` v12.6.12
- [x] **Installed Wrangler CLI** - Added `wrangler` v4.63.0 to devDependencies
- [x] **Updated astro.config.mjs** - Switched from `vercel()` to `cloudflare()` adapter
- [x] **Created wrangler.jsonc** - Cloudflare Pages configuration file
- [x] **Build verification** - Successfully built project with Cloudflare adapter
- [x] **Updated .gitignore** - Added `.dev.vars` and `.wrangler/` to prevent committing secrets

### Environment Variables
- [x] **Created .dev.vars** - Local development environment file (gitignored)
- [x] **Documented RESEND_API_KEY** - Email API key for contact form

### Documentation
- [x] **Created CLOUDFLARE_DEPLOYMENT.md** - Comprehensive deployment guide
- [x] **Created pre-launch checklist** - This document

---

## ⚠️ Action Required Before Launch

### 1. Environment Variables in Cloudflare Dashboard
**Priority: CRITICAL**

After connecting your repository to Cloudflare Pages, you MUST add environment variables:

1. Navigate to your Cloudflare Pages project
2. Go to **Settings** → **Environment Variables**
3. Add the following variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `[YOUR_RESEND_API_KEY]` (found in .dev.vars or Resend Dashboard)
   - **Environment**: Both **Production** and **Preview**

**⚠️ WARNING**: The contact form will NOT work until this is set!

### 2. Connect Git Repository to Cloudflare Pages
**Priority: CRITICAL**

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create Application** → **Pages**
3. Select **Connect to Git**
4. Choose your repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Node version**: `20` or later

### 3. Custom Domain Configuration
**Priority: HIGH**

1. In Cloudflare Pages, go to **Custom Domains**
2. Add `coalbanks.com` and `www.coalbanks.com`
3. Update DNS records as instructed by Cloudflare
4. Wait for SSL certificate provisioning (automatic, ~5-10 minutes)

### 4. Remove .env from Git History (Security)
**Priority: HIGH**

Your `.env` file contains the API key and should NOT be in git:

```bash
# Remove .env from git tracking
git rm --cached .env

# Commit the change
git add .gitignore
git commit -m "Remove .env from version control"
```

**Note**: The `.env` file is already in `.gitignore`, but if it was previously committed, it's still in git history.

---

## 📋 Optional Enhancements

### Performance Optimizations
- [ ] **Add _headers file** - Create `public/_headers` for custom caching rules
  ```
  /assets/*
    Cache-Control: public, max-age=31536000, immutable
  
  /*.js
    Cache-Control: public, max-age=31536000, immutable
  
  /*.css
    Cache-Control: public, max-age=31536000, immutable
  ```

- [ ] **Add _redirects file** - Create `public/_redirects` if you need URL redirects
  ```
  /old-url  /new-url  301
  ```

### Monitoring & Analytics
- [ ] **Enable Cloudflare Web Analytics** - Free analytics in Cloudflare dashboard
- [ ] **Set up deployment notifications** - Configure email/Slack notifications for deployments
- [ ] **Configure error tracking** - Consider Sentry or similar for error monitoring

### SEO & Social
- [ ] **Verify sitemap** - Check that `https://coalbanks.com/sitemap-index.xml` is accessible
- [ ] **Submit to Google Search Console** - Add and verify your domain
- [ ] **Test social media cards** - Use [Twitter Card Validator](https://cards-dev.twitter.com/validator) and [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] **Test structured data** - Use [Google Rich Results Test](https://search.google.com/test/rich-results)

### Testing
- [ ] **Test contact form** - Verify email sending works in production
- [ ] **Test all pages** - Click through entire site to verify no broken links
- [ ] **Mobile testing** - Test on real mobile devices
- [ ] **Performance audit** - Run Lighthouse audit on production URL
- [ ] **Cross-browser testing** - Test in Chrome, Firefox, Safari, Edge

---

## 🚀 Deployment Steps

### Initial Deployment
1. ✅ Complete all **Action Required** items above
2. Push your code to the main branch
3. Cloudflare will automatically build and deploy
4. Monitor the build logs in Cloudflare dashboard
5. Once deployed, test the live site thoroughly

### Subsequent Deployments
- Simply push to your main branch
- Cloudflare automatically builds and deploys
- Preview deployments are created for pull requests

---

## 🔧 Useful Commands

```bash
# Local development
pnpm dev

# Build for production
pnpm build

# Preview production build locally with Cloudflare runtime
pnpm build && wrangler pages dev ./dist

# Manual deployment (if not using Git integration)
pnpm build && npx wrangler pages deploy ./dist

# View deployment logs
npx wrangler pages deployment list

# Tail live logs
npx wrangler pages deployment tail
```

---

## 📚 Resources

- [Deployment Guide](./CLOUDFLARE_DEPLOYMENT.md) - Full deployment documentation
- [Astro Cloudflare Docs](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/wrangler/)

---

## ✅ Final Pre-Launch Verification

Before going live, verify:
- [ ] All environment variables are set in Cloudflare dashboard
- [ ] Custom domain is configured and SSL is active
- [ ] Contact form sends emails successfully
- [ ] All pages load without errors
- [ ] Mobile experience is smooth
- [ ] Performance is acceptable (Lighthouse score > 90)
- [ ] Analytics are tracking properly
- [ ] Sitemap is accessible

---

**Last Updated**: 2026-02-06
**Migration Status**: ✅ Complete - Ready for deployment
