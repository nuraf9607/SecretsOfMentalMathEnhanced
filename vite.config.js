import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vercel can use this directory
    assetsDir: 'assets', // Static files should be placed here in production
  },
})
