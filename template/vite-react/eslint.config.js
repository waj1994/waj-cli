import eslint from '@antfu/eslint-config'

export default eslint({
  formatters: {
    html: true,
    css: true,
    svg: true,
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
  },
  typescript: true,
  vue: false,
  ignores: ['node_modules/**', 'dist/**', 'stats.html'],
  react: {
    overrides: {
      'style/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
          when: 'always',
        },
      ],
      'style/jsx-first-prop-new-line': ['error', 'multiline'],
    },
  },
  rules: {
    'no-console': 'off',
  },
})
