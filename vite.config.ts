import { defineConfig } from 'vite'
import packageJSON from './package.json'
import ViteDTS from 'vite-plugin-dts'

const pkgName = packageJSON.name

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteDTS()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    lib: {
      name: pkgName.replace(/-\w/g, s => s[1].toUpperCase()),
      entry: `./src/${pkgName}.ts`,
      formats: ['umd', 'iife'],
      fileName: (format, name) => `${name}.${format}.js`
    },
    emptyOutDir: false
  }
})
