import fs from 'fs/promises'
import path from 'path'
import { build } from 'vite'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const buildDist = async () => {
  await build()

  await fs.rename(
    path.join(__dirname, './vite.config.ts'),
    path.join(__dirname, './vite.config.temp2.ts')
  )

  await fs.rename(
    path.join(__dirname, './vite.config.temp.ts'),
    path.join(__dirname, './vite.config.ts')
  )

  await build()

  await fs.rename(
    path.join(__dirname, './vite.config.ts'),
    path.join(__dirname, './vite.config.temp.ts')
  )

  await fs.rename(
    path.join(__dirname, './vite.config.temp2.ts'),
    path.join(__dirname, './vite.config.ts')
  )
}

buildDist()
