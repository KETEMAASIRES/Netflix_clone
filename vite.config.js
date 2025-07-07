import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Netflix/",
});

// // vite.config.js
// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/your-repo-name/', // 👈 use your actual GitHub repo name here
// });
