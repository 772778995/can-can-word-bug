import { defineConfig } from 'vite'
import ViteDTS from 'vite-plugin-dts'
import fs from 'fs'
import path from 'path'

const srcPath = path.join(__dirname, './src/')

const readdirSyncDeep = (dirPath: string, partentName = '') => {
  const allFileNames: string[] = []
  const fileNames = fs.readdirSync(dirPath)

  fileNames.map(fileName => {
    const filePath = path.join(dirPath, fileName)
    const isDir = fs.statSync(filePath).isDirectory()
    if (isDir) allFileNames.push(...readdirSyncDeep(filePath, fileName + '/'))
    else allFileNames.push(partentName + fileName)
  })
  return allFileNames
}

const files = readdirSyncDeep(srcPath).filter(fileName => !fileName.startsWith('types/'))
const entry = files.reduce((entry, item) => {
  entry[item.replace(/(\.ts)$/, '')] = './src/' + item
  return entry
}, {})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ViteDTS()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }]
  },
  build: {
    lib: {
      entry,
      formats: ['cjs', 'es']
    },
    emptyOutDir: false
  }
})
