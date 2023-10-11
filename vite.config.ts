import fs from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'
import viteCompression from 'vite-plugin-compression'

// 生产环境判断
const isEnvProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  server: {
    port: 3002
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
        fs: {
          fileExists: fs.existsSync,
          readFile: file => fs.readFileSync(file, 'utf-8')
        }
      }
    }),
    chunkSplitPlugin({
      strategy: 'single-vendor'
    }),
    isEnvProduction
      ? viteCompression({
          filter: /\.(js|css)$/i,
          // algorithm: 'brotliCompress',
          threshold: 10 * 1024 // 10kb
        })
      : undefined
  ],
  define: {
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
  },
  optimizeDeps: {
    exclude: ['@vue/repl']
  }
})
