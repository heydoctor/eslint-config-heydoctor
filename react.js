module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['babel', 'jest'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    'jest/globals': true,
  },
  globals: {
    window: true,
    document: true,
  },
  rules: {
    'no-use-before-define': 0,
    'no-empty': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    camelcase: 0,

    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],

    'import/extensions': 0,
    'import/no-unresolved': 0,

    'react/jsx-filename-extension': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'react/jsx-closing-bracket-location': 0,

    'jsx-a11y/anchor-is-valid': 0,

    'babel/new-cap': 1,

    'jest/no-identical-title': 'error',

    'prettier/prettier': [
      'error',
      {
        parser: 'babylon',
        printWidth: 120,
        semi: true,
        useTabs: false,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
  },
};
