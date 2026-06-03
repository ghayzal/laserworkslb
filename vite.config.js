import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so the same build works on BOTH:
  //   - https://ghayzal.github.io/laserworkslb/  (project subpath)
  //   - https://www.laserworkslb.com/            (custom domain at root)
  base: './',
})
