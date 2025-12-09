import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// ahttps://vite.dev/config/
export default defineConfig({
  base : '/Jeonaya/praktikum_7/',
  plugins: [react(), tailwindcss(),],
})