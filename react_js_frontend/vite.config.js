import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// PUBLIC_INTERFACE
export default defineConfig(({ mode }) => {
  /**
   * Load all env vars (no prefix filtering here). Note:
   * - Vite only exposes vars prefixed with VITE_ to client code via import.meta.env.
   * - We still read REACT_APP_PORT to preserve existing container env usage for dev server port.
   */
  const env = loadEnv(mode, process.cwd(), "");

  const port = env.REACT_APP_PORT ? Number(env.REACT_APP_PORT) : 3000;

  return {
    plugins: [react()],
    server: { port },
    preview: { port }
  };
});
