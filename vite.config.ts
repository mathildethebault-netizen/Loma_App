// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: "/", // ✅ Nécessaire pour que le site fonctionne sur Vercel
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

    // ✅ Ces options corrigent les problèmes de taille et de bundle
    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      minify: "esbuild"
    },

    // ✅ En dev, tout reste simple
    server: {
      port: 5173
    },

    // ✅ Corrige les erreurs __DEFINES__ ou __HMR_CONFIG_NAME__ en production uniquement
    define: isProd
      ? {
          "process.env.NODE_ENV": JSON.stringify("production"),
          __DEFINES__: {},
          __HMR_CONFIG_NAME__: "{}"
        }
      : {
          "process.env.NODE_ENV": JSON.stringify("development")
        }
  };
});