import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/devsono/', // 👈 importante: nombre del repositorio
})
