import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginRequire from "vite-plugin-require";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginRequire.default(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        short_name: "Greenplace",
        name: "Greenplace",
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
      },
    }),
  ],
  base: "./react-greenplace/",
  build: {
    manifest: true,
  },
});
