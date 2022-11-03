import calculateRules from './calculate-rules.js'

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

const calculateConfigFile =
  async () => `const config = JSON.parse(\`${JSON.stringify(
    await calculateConfig(),
    null,
    2
  )}\`)
  
module.exports = config
`

export default calculateConfigFile
