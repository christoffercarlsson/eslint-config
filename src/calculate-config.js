const calculateRules = require('./calculate-rules.js')

const config = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  }
}

const calculateConfig = async () => ({
  ...config,
  rules: await calculateRules()
})

const calculateConfigFile = async () => {
  const config = JSON.stringify(await calculateConfig())
  return `const config = JSON.parse('${config}')\nmodule.exports = config`
}

module.exports = calculateConfigFile
