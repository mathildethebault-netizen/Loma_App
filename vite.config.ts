// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    base: "./", // ✅ Corrige les chemins sur Vercel
    define: {
      // 🚧 Neutralisation TOTALE de toutes les variables internes Vite/HMR
      __DEFINES__: {},
      __BASE__: JSON.stringify("./"),
      __SERVER_HOST__: JSON.stringify(""),
      __HMR_PROTOCOL__: JSON.stringify(""),
      __HMR_HOSTNAME__: JSON.stringify(""),
      __HMR_PORT__: JSON.stringify(""),
      __HMR_BASE__: JSON.stringify("./"),
      __HMR_CONFIG_NAME__: "{}",
      __HMR_DIRECT_TARGET__: JSON.stringify(""),
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
        onwarn(warning, warn) {
          if (/__HMR_|__BASE__|__DEFINES__/.test(warning.message)) return;
          warn(warning);
        }
      }
    },

    server: { port: 5173 }
  };
});