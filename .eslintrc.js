module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
      ],
    },
    {
      files: ['*.{test,spec}.{ts,tsx}'],
      extends: ['plugin:jest/recommended'],
    },
  ],
}
