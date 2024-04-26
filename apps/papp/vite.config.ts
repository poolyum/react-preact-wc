import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "dist",
    sourcemap: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/lib.ts"),
      name: "PreactComponents",
      formats: ["es", "umd"],
      fileName: (format) => `preact-component.${format}.js`,
    },
  },
  resolve: {
    alias: {
      "preact/jsx-runtime":
        "./node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js",
    },
  },
});
