// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://coalbanks.com",
  integrations: [mdx(), sitemap(), react()],
  output: "static",
  adapter: cloudflare(),
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  compressHTML: true,
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },
});
