 module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    'react/react-in-jsx-scope': 0,

    'semi': 0,
    'eol-last': 0,
    'no-shadow': 0,
    'quotes': 0,
    'curly': 0,

    '@typescript-eslint/no-unused-vars': 1,
  },
};
