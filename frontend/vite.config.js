import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/santo/',   // 👈 very important for subpath deployment
  build: {
    outDir: 'build', // same folder name you used in nginx
  },
})
