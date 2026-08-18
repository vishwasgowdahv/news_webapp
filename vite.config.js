import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env vars server-side (key never exposed to browser bundle)
  const env = loadEnv(mode, process.cwd(), '')
  const apiKey = env.NEWSAPI_KEY

  return {
    plugins: [react(), tailwindcss()],
    server: {
      host: true,
      proxy: {
        // Rewrite /api/news?category=&page=&pageSize= → newsapi.org top-headlines
        '/api/news': {
          target: 'https://newsapi.org',
          changeOrigin: true,
          rewrite: (path) => {
            const qs = path.split('?')[1] || ''
            const params = new URLSearchParams(qs)
            params.set('country', 'us')
            params.set('apiKey', apiKey)
            return `/v2/top-headlines?${params.toString()}`
          },
        },
        // Rewrite /api/search?q= → newsapi.org top-headlines search
        '/api/search': {
          target: 'https://newsapi.org',
          changeOrigin: true,
          rewrite: (path) => {
            const qs = path.split('?')[1] || ''
            const params = new URLSearchParams(qs)
            params.set('apiKey', apiKey)
            return `/v2/top-headlines?${params.toString()}`
          },
        },
      },
    },
  }
})

