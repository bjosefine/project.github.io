import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  biold: {
    target: 'es2015'
  },
  plugins: [vue()]
})
