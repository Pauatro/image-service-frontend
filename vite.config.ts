import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
    },
    server: { 
      port: 5173,   
      host: true,
      strictPort: true,
      origin: "http://localhost:5173", 
    },
    preview: {      
      port: 5173,   
      strictPort: true,
    },
    plugins: [
      react(),
      svgr(),
    ],
    optimizeDeps: {
      include: ["react-dom"],
    },
  };
});
