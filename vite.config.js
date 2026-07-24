import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute paths so client routes like /portfolio still load /assets/*
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("three") || id.includes("@react-three")) {
            return "three";
          }
          if (id.includes("framer-motion")) {
            return "framer";
          }
          if (
            id.includes("react-dom") ||
            id.includes("react-router") ||
            id.includes("/react/")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
