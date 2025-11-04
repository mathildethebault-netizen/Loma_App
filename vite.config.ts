// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 👇 Important pour Vercel : les assets seront bien trouvés
  base: "./",
  
  plugins: [react()],

  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
  },

  // 👇 Neutralisation de toutes les variables fantômes
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "__SERVER_HOST__": JSON.stringify(""),
    "__BASE__": JSON.stringify(""),
    "__DEFINES__": "{}",
    "__HMR_CONFIG_NAME__": "{}",
  },

  server: {
    port: 5173,
  },
});