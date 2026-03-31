import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — chargé une seule fois
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          // UI / animation
          "vendor-ui": ["framer-motion", "lucide-react", "@radix-ui/react-dialog", "@radix-ui/react-select", "@radix-ui/react-accordion"],
          // Charting
          "vendor-charts": ["recharts", "chart.js", "react-chartjs-2"],
          // Forms & validation
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          // Data fetching
          "vendor-query": ["@tanstack/react-query"],
          // Utils
          "vendor-utils": ["date-fns", "clsx", "class-variance-authority", "tailwind-merge"],
        },
      },
    },
    // Warn dès 400KB au lieu de 500KB
    chunkSizeWarningLimit: 400,
  },
});