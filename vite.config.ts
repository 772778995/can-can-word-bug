import { defineConfig } from 'vite'
import packageJSON from './package.json'

const pkgName = packageJSON.name.replace(/-\w/g, s => s[1].toUpperCase())

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    lib: {
      name: pkgName,
      fileName: pkgName,
      entry: './src/index.ts',
      formats: ['cjs', 'es', 'umd', 'iife']
    }
  }
})

