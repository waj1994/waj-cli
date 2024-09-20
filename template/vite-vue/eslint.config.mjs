import antfu from '@antfu/eslint-config'

export default antfu({
  // Type of the project. 'lib' for libraries, the default is 'app'
  type: 'app',

  // customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single' // or 'double'
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: ['node_modules', 'dist'],

  rules: {
    'style/comma-dangle': ['error', 'never'],
    'no-console': 'off'
  }
})
