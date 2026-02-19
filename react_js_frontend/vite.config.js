import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig({
  /** Vite config for the React frontend. */
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    allowedHosts: ["vscode-internal-21828-beta.beta01.cloud.kavia.ai"]
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true
  }
});
