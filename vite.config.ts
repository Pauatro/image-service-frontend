import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
    },
    server: { port: 5173 },
    preview: { port: 4173 },
    plugins: [
      react(),
      svgr({

          include: "**/*.svg?react",
      }),
    ],
    optimizeDeps: {
      include: ["react-dom"],
    },
  };
});
