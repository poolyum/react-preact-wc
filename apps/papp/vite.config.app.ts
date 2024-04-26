import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "preact/jsx-runtime":
        "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js",
    },
  },
});
