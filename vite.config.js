import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// hhttps://vite.dev/config/
export default defineConfig({
  base : '/praktikum_7/',
  plugins: [react(), tailwindcss(),],
})

