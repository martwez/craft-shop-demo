import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://martwez.github.io/craft-shop-demo/ (GitHub Pages project subpath).
export default defineConfig({
  base: '/craft-shop-demo/',
  plugins: [react(), tailwindcss()],
})
