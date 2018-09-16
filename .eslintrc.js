module.exports = {
  parser : "babel-eslint",
  extends: ["airbnb"],
  env : {
    "es6" : true,
    "browser": true
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    },
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "arrow-body-style":0,
    "react/no-unescaped-entities":0,
    "react/jsx-no-bind":0,
    "react/prefer-stateless-function":0,
    "import/prefer-default-export":0,
    "react/self-closing-comp":0,
    "quotes":0,
    "react/prop-types":0
  }
}