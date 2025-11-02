import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(), // Add this field that's being used in the component
    authorImage: z.string().optional(),
    authorName: z.string().optional(),
    slug: z.string().optional(), // Add this to support custom slugs
  }),
});

export const collections = { blog };
