module.exports = {
  "extends": [
    "next/core-web-vitals",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 80,
        "tabWidth": 2,
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "semi": false,
        "endOfLine": "auto",
      },
    ]
  }
}
