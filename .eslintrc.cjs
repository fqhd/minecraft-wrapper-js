module.exports = {
  "env": {
    node: true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "no-unused-vars": ["error", {
      "varsIgnorePattern": "^_.*",
      "argsIgnorePattern": "^_.*"
    }]
  }
};
