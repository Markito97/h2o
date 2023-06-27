import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  base: "h2o",
  plugins: [svgr(), react()],
  server: {
    host: "localhost",
    port: 3005,
  },
});
