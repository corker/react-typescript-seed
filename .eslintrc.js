module.exports = {
  extends: ['react-app', 'eslint:recommended', 'plugin:prettier/recommended', 'prettier/react'],
  parser: 'babel-eslint',
  plugins: ['babel', 'emotion'],
  rules: {
    quotes: ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off',
    'emotion/jsx-import': 'error',
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
};
