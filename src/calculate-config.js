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

export default calculateConfig
