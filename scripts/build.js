import { remove, outputFile } from 'fs-extra'
import { resolve as resolvePath } from 'path/posix'
import { cwd, exit } from 'process'
import calculateConfigFile from '../src/calculate-config.js'

const build = async () => {
  const outputDirectory = resolvePath(cwd(), 'dist')
  await remove(outputDirectory)
  const filePath = resolvePath(outputDirectory, 'eslintrc.cjs')
  const data = await calculateConfigFile()
  await outputFile(filePath, data)
}

build().catch((error) => {
  console.error(error)
  exit(1)
})
