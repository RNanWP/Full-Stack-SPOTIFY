import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  esbuild: {
    target: mode === "development" ? "esnext" : "es2020",
  },
  build: {
    target: mode === "development" ? "esnext" : "es2020",
  },
}));
