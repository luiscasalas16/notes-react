import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //establece la base que utiliza github pages, para que la aplicación funcione correctamente.
  base: "/notes-react/",
  build: {
    //cambia el directorio de build a docs, para que github pages funcione correctamente.
    outDir: "docs",
  },
});
