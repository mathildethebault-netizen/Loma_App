import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: "./",
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
    define: {
      // ✅ Ces deux variables sont neutralisées pour corriger ton erreur
      __DEFINES__: {},
      __HMR_CONFIG_NAME__: "{}",
      "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development")
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
      chunkSizeWarningLimit: 1000
    },
    server: {
      port: 5173
    }
  };
});