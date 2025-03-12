import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Define Vite config with environment-specific settings
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: mode === "test" ? 4000 : 3000, // Different ports for different modes
    },
    define: {
      "import.meta.env": env, // Expose environment variables in the app
    },
  };
});
