import path from "node:path";
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: "/svelte-daisyui-demo/",
  build: {
    minify: false,
    sourcemap: true,
  },
  resolve: {
    alias: [
      { find: "$src/", replacement: path.join(__dirname, "src/") },
    ],
  },
  plugins: [
    svelte(),
    tailwindcss(),
  ],
});
