module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      impliedStrict: true
    }
  },
  plugins: ['import', 'node', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:node/recommended',
    'plugin:promise/recommended',
    'standard',
    'prettier'
  ],
  rules: {
    'no-bitwise': 'off',
    'no-restricted-syntax': 'off',
    'node/no-missing-import': 'off'
  }
}
