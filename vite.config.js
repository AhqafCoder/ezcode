import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 10000,
    strictPort: true,
    allowedHosts: ["ezcode-119ec.firebaseapp.com, ezcode-119ec.web.app,ezcode-xi.vercel.app"], 
  }
})
