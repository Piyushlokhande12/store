import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),          // ✅ Enables React and JSX support
    tailwindcss(),    // ✅ Tailwind CSS
  ],
})
