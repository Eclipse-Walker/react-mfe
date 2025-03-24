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
  },
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Welcome": "./src/components/Welcome",
        "./Button": "./src/components/Button",
        "./store": "./src/store/Store",
        // "./TodoList": "./src/components/TodoList.tsx",
        "./Todo": "./src/components/Todo",
        "./listStore": "./src/store/ListStore",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
});
