import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

import { fileURLToPath, URL } from "node:url";
import { prodUrlPrefix } from "./src/helpers/helpers.js";

export default defineConfig({
  base: prodUrlPrefix,
  plugins: [vue(), svgLoader()],
  test: {
    environment: "happy-dom",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
