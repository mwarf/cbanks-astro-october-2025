# Blog Content Guidelines

This directory contains all blog posts for the website. Follow these guidelines when creating new blog posts.

## File Naming Convention

- Use descriptive names for your markdown files
- Follow the pattern: `YYYY-MM-DD-post-title.md` or create a descriptive name that reflects the content
- Example: `2025-01-15-authentic-storytelling-in-business.md`

## Frontmatter Requirements

All blog posts must include the following fields in the frontmatter:

```markdown
---
title: "Descriptive Title of Your Post"
description: "A compelling description that summarizes the content (used for SEO)"
pubDate: "Oct 31 2025" # Use month day year format
slug: "descriptive-url-friendly-slug" # URL-friendly version of title (optional, defaults to filename)
image: "https://example.com/image.jpg" # Featured image for the post
authorImage: "/avatar/avatar1.png" # Path to author image
authorName: "Author Name" # Name to display for the author
---
```

## URL Structure

- Each post will be accessible at `/blog/{slug}/`
- If no `slug` is provided in frontmatter, the filename will be used as the slug
- Slugs should be descriptive, URL-friendly, and SEO-optimized
- Use hyphens to separate words in slugs (e.g., "my-descriptive-post-title")

## Best Practices

- Write descriptive titles that clearly indicate the content
- Create compelling descriptions for better SEO
- Use descriptive slugs that reflect the content
- Include a featured image for each post
- Follow proper markdown formatting
- Include relevant keywords for SEO
