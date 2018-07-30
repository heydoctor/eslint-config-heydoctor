module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    es6: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['babel', 'jest'],
  rules: {
    'import/no-unresolved': 0,
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

    // Configure babel
    'babel/new-cap': 1,

    // Configure Jest
    'jest/no-identical-title': 'error',

    // Configure Prettier
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
  settings: {
    'import/ignore': ['.*'],
  },
};
