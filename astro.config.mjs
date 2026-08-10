import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

// Keep in sync with `websiteUrl` in src/config.tsx
export const websiteUrl = "https://portfolio-ambience.vercel.app";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), solidJs()],
  site: websiteUrl,
});
