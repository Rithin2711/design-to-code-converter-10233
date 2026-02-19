import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite config for the React frontend. */
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true
  }
});
