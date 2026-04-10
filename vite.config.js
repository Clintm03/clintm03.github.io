import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub project Pages: set VITE_BASE_PATH=/focus-system/ in CI (see .github/workflows)
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
