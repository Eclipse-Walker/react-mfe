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
      filename: "remoteEntryHost.js",
      remotes: {
        welcomePage: "http://localhost:5501/assets/remoteEntry.js",
        // welcomePage2: "http://localhost:5502/assets/remoteEntry.js",
      },
      exposes: {
        "./sharedStore": "./src/store/sharedStore", // Expose Jotai Store
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
});
