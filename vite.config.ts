import { defineConfig } from 'vite'
import packageJSON from './package.json'
import ViteDTS from 'vite-plugin-dts'

const pkgName = packageJSON.name.replace(/-\w/g, s => s[1].toUpperCase())

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteDTS()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    lib: {
      name: pkgName,
      entry: './src/can-can-word-bug.ts',
      formats: ['cjs', 'es', 'umd', 'iife'],
      fileName: (format, name) => `${name}.${format}.js`
    }
  }
})
