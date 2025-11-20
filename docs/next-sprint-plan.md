# Next Sprint Plan: Finishing the Coalbanks Website

## Overview

This document outlines the plan for the next sprint to complete the Coalbanks website. The current project is an Astro-based site for "Coalbanks - Documentary-Style Films for Brands" that needs several missing pages and components implemented.

## Current State Analysis

- **Project**: Coalbanks - Documentary-Style Films for Brands
- **Framework**: Astro with React components
- **UI Components**: Using shadcn/ui with Tailwind CSS
- **Current Pages**: Home, About, Contact, Blog, FAQ, Login, Signup, 404
- **Missing Pages**: Portfolio, Pricing (referenced but not implemented)
- **Key Components**: Hero, Features, Testimonials, FAQ, Pricing components exist but not used in pages

## Sprint Goals

1. Implement missing pages (Portfolio and Pricing)
2. Update navigation to include new pages
3. Ensure proper routing and SEO for all pages
4. Complete site functionality and user flow
5. Review and fix any broken references

## Detailed Tasks

### 1. Create Portfolio Page

- **Objective**: Create a portfolio page to showcase film work
- **Components Needed**:
  - Portfolio gallery component
  - Project cards with film examples
  - Filtering/sorting capabilities
- Video display components
- **Content Requirements**:
  - Sample film projects
  - Project descriptions
  - Client testimonials
- **SEO Considerations**:
  - Proper meta tags
  - Structured data for video content
  - Canonical URLs

### 2. Create Pricing Page

- **Objective**: Create a pricing page using existing pricing components
- **Components to Use**:
  - `src/components/blocks/pricing.tsx`
  - `src/components/blocks/pricing-table.tsx`
- **Content Requirements**:
  - Pricing plans: Brand Documentary, Story Package, Custom Project
  - Detailed feature comparisons
  - Call-to-action buttons
- **SEO Considerations**:
- Proper meta tags
- Clear pricing structured data

### 3. Update Navigation

- **Objective**: Add missing portfolio and pricing links to navigation
- **Files to Update**:
- `src/components/blocks/navbar.tsx`
- Navigation items array in the navbar component
- **Considerations**:
- Mobile and desktop navigation
- Dropdown menu structure
- Active link highlighting

### 4. Implement Proper Routing

- **Objective**: Ensure all site sections have proper routing
- **Tasks**:
  - Create `src/pages/portfolio.astro`
  - Create `src/pages/pricing.astro`
  - Verify all internal links work correctly
- Check dynamic routing for portfolio items

### 5. Review and Fix Broken Links/References

- **Objective**: Identify and fix any broken links or references
- **Known Issues**:
  - Portfolio link in hero component points to non-existent page
  - Pricing page referenced in WARP.md but doesn't exist
- **Tasks**:
  - Audit all internal links
  - Verify navigation functionality
  - Test all page transitions

### 6. SEO and Meta Tags Implementation

- **Objective**: Ensure all pages have proper metadata and SEO
- **Requirements**:
  - Proper title tags
  - Meta descriptions
  - Open Graph tags
  - Twitter cards
  - Canonical URLs
  - Structured data (especially for portfolio videos)

### 7. User Flow Testing

- **Objective**: Test site navigation and user flow
- **Tasks**:
  - Test all navigation paths
  - Verify contact form functionality
  - Test blog navigation
  - Ensure all CTAs work properly
  - Mobile responsiveness testing

## Astro Best Practices Applied

### Project Structure

Following Astro's recommended project structure:

- `src/pages/` for routing
- `src/components/` for reusable components
- `src/layouts/` for page layouts
- `public/` for static assets
- Proper use of `astro.config.mjs`

### SEO Implementation

- Use of `Astro.url` for canonical URLs instead of deprecated `Astro.canonicalURL`
- Proper meta tag implementation
- Structured data for video content (important for portfolio)
- Proper heading hierarchy

### Component Architecture

- Using Astro's component script and template structure
- Proper use of `client:only` directives for interactive components
- Efficient component organization

## Timeline and Priorities

### High Priority (Week 1)

1. Create portfolio and pricing pages
2. Update navigation with new links
3. Implement basic routing

### Medium Priority (Week 2)

1. SEO implementation for new pages
2. Content population for portfolio and pricing
3. User flow testing

### Low Priority (Week 3)

1. Advanced portfolio filtering
2. Additional UI enhancements
3. Performance optimization

## Success Criteria

- [ ] Portfolio page created and functional
- [ ] Pricing page created using existing components
- [ ] Navigation updated with new links
- [ ] All internal links working properly
- [ ] SEO implemented on all pages
- [ ] User flow tested and verified
- [ ] Site ready for deployment

## Resources and References

- Astro documentation for project structure and best practices
- Existing component library in `src/components/blocks/`
- Style guide in `AAA Style Guide - Coalbanks.md`
- Current site structure for consistency

## Notes

- The site already has a comprehensive component library that should be leveraged
- Existing blog content shows the brand voice and style to maintain
- The site targets documentary-style film clients in Southern Alberta
- SEO is particularly important for this business (local SEO, video content SEO)
