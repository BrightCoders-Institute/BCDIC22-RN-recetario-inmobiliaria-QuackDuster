module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es2021: true
    },
    extends: 'standard',
    overrides: [
    ],
    parserOptions: {
      ecmaVersion: 'latest'
    },
    rules: {
      semi: ['error', 'never'],
      indent: ['error', '2']
    }
  }