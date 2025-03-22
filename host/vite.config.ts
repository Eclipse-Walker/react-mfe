import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
  },
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        welcomePage: "http://localhost:5501/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
});
