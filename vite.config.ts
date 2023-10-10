import fs from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
 
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
    })
  ],
  define: { 
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
  },
  optimizeDeps: {
    exclude: ['@vue/repl']
  }
})
