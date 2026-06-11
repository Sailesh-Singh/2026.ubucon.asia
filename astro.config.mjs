// @ts-check
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [mdx(), react()],
  i18n: {
    locales: ["en", "zh-tw"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
