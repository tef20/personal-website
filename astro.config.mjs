import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";
// import service from "astro/assets/services/squoosh";

// https://astro.build/config
export default defineConfig({
  site: "https://acrylicwebdesigns.netlify.app",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: netlify({ cacheOnDemandPages: true }),
  // image: {
  //   // Example: Enable the Sharp-based image service with a custom config
  //   service: {
  //     entrypoint: "astro/assets/services/sharp",
  //     config: {
  //       limitInputPixels: false,
  //     },
  //   },
  // },
});
