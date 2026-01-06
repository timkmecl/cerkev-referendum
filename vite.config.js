import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/cerkev-referendum/',
  server: {
    host: true,
  },
  build: {
    rollupOptions: {
      output: {
        // This splits large libraries into their own files
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-markdown') || id.includes('remark')) {
              return 'markdown-vendor';
            }
            if (id.includes('leaflet')) {
              return 'leaflet-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})