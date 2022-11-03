const { ESLint, Linter } = require('eslint')

const calculateConfigForThisFile = () =>
  new ESLint().calculateConfigForFile(__filename)

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

module.exports = calculateRules
