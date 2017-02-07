module.exports = {
  "extends": "standard",
  "plugins": [
    "standard",
    "promise",
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "semi": ["error", "always"],
    "padded-blocks": "off",
    "space-before-function-paren": ["error", "never"]
  },
  "globals": {
    "alert": true
  }
};
