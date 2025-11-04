// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "./", // Corrige les chemins sur Vercel
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["assets/favicon.svg", "assets/luma.svg"],
      manifest: {
        name: "Loma Application",
        short_name: "Loma",
        description: "Application éducative pastel (Lecture • Français • Maths)",
        theme_color: "#fef9c3",
        background_color: "#fef9c3",
        icons: [
          { src: "assets/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "assets/icon-512.png", sizes: "512x512", type: "image/png" }
        ]
      }
    })
  ],
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    // ⛔ Désactive le HMR entièrement (plus de variables __HMR__)
    hmr: false,
  },
});