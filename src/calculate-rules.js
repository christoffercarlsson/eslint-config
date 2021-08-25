import { normalize as normalizePath } from 'path/posix'
import { fileURLToPath } from 'url'
import { ESLint, Linter } from 'eslint'

const calculateConfigForThisFile = () => {
  const filePath = normalizePath(fileURLToPath(import.meta.url))
  return new ESLint().calculateConfigForFile(filePath)
}

const calculateRules = async () => {
  const { rules: configuredRules } = await calculateConfigForThisFile()
  const coreRules = new Linter().getRules()
  return Object.entries(configuredRules).reduce((rules, [key, rule]) => {
    if (coreRules.has(key)) {
      return { ...rules, [key]: rule }
    }
    return rules
  }, [])
}

export default calculateRules
