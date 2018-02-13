module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "jest/globals": true
  },
  "plugins": [
    "babel",
    "import",
    "jest"
  ],
  "rules": {
    "no-use-before-define": 0,
    "no-empty": 0,
    "no-restricted-syntax": 0,
    "no-await-in-loop": 0,
    "camelcase": 0,
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "no-confusing-arrow": [
      "error",
      {
        "allowParens": true
      }
    ],

    // Configure import
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,

    // Configure babel
    "babel/new-cap": 1,

    // Configure Jest
    "jest/no-identical-title": "error",

    // Configure Prettier
    "prettier/prettier": ["error", {
      "parser": "babylon",
      "printWidth": 120,
      "semi": true,
      "useTabs": false,
      "singleQuote": true,
      "trailingComma": "es5",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }]
  },
  "settings": {
    "import/resolver": {
      "babel-module": {}
    }
  }
}
