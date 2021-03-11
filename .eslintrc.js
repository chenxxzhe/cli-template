module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'eslint:recommended',
  ],
  rules: {
    'array-element-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'semi': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'off',
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'unicode-bom': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
  },
}