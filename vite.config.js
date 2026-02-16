import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project site use base: '/personal-website/'
  base: process.env.GITHUB_PAGES === 'true' ? '/personal-website/' : '/',
})
