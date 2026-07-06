import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema. `.strict()` turns any
  // frontmatter/schema mismatch into a build error instead of silent data loss.
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      image: z.string().optional(),
      author: z.string().optional(),
      tags: z.array(z.string()).default([]),
      // NOTE: routing uses the filename (post.id); this field is accepted but
      // intentionally ignored so existing URLs stay stable.
      slug: z.string().optional(),
    })
    .strict(),
});

const portfolio = defineCollection({
  loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    videoUrl: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
    episodes: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).optional(),
  }),
});

export const collections = { blog, portfolio };
