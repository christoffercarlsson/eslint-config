const { remove, outputFile } = require('fs-extra')
const { resolve: resolvePath } = require('path/posix')
const { cwd, exit } = require('process')
const calculateConfigFile = require('../src/calculate-config.js')

const build = async () => {
  const outputDirectory = resolvePath(cwd(), 'dist')
  await remove(outputDirectory)
  const filePath = resolvePath(outputDirectory, 'eslintrc.js')
  const data = await calculateConfigFile()
  await outputFile(filePath, data)
}

build().catch((error) => {
  console.error(error)
  exit(1)
})
