import { remove, outputFile } from 'fs-extra'
import { resolve as resolvePath } from 'path/posix'
import { cwd, exit } from 'process'
import calculateConfig from '../src/calculate-config.js'

const build = async () => {
  const outputDirectory = resolvePath(cwd(), 'dist')
  const filePath = resolvePath(outputDirectory, 'eslintrc.json')
  const data = JSON.stringify(await calculateConfig(), null, 2)
  await remove(outputDirectory)
  await outputFile(filePath, data)
}

build().catch((error) => {
  console.error(error)
  exit(1)
})
