import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // WHY: Ensures correct asset resolution in Netlify (prevents MIME mismatch)
  base: "/",

  plugins: [
    react(),
    tailwindcss()
  ],

  build: {
    // WHY: Ensures clean, predictable output structure for static hosting
    outDir: "dist",
    assetsDir: "assets",

    // WHY: Avoids edge-case module compatibility issues in some browsers/CDNs
    target: "esnext"
  }
})
