import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: "esnext",
    assetsInlineLimit: 4096,
  },
  server: {
    headers: {
      "Content-Type": "application/javascript",
    },
  },
});
