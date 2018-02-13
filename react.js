module.exports = {
  "extends": [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  "env": {
    "browser": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "react/prop-types": 0,
    "react/jsx-closing-bracket-location": 0,
    "jsx-a11y/anchor-is-valid": 0
  },
  "globals": {
    "window": true,
    "document": true
  },
  "settings": {
    "import/resolver": {
      "babel-module": {
      }
    }
  }
}
