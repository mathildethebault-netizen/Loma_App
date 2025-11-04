// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: "./", // ✅ Indispensable pour Vercel
    define: {
      // Neutralisation complète des variables internes de Vite
      __DEFINES__: {},
      __HMR_PROTOCOL__: JSON.stringify(""),
      __HMR_HOSTNAME__: JSON.stringify(""),
      __HMR_PORT__: JSON.stringify(""),
      __HMR_CONFIG_NAME__: "{}",
      __SERVER_HOST__: JSON.stringify(""),
      __BASE__: JSON.stringify("./"),
      "process.env.NODE_ENV": JSON.stringify(isProd ? "production" : "development"),
      "import.meta.env.DEV": JSON.stringify(!isProd),
      "import.meta.env.PROD": JSON.stringify(isProd)
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
      rollupOptions: {
        // 👇 Cette ligne évite que Vite casse sur ses propres variables
        onwarn(warning, warn) {
          if (/__BASE__|__DEFINES__|__HMR/.test(warning.message)) return;
          warn(warning);
        }
      }
    },
    server: { port: 5173 }
  };
});