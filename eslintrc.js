module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
