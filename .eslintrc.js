module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-undef': 'off',
    'react/button-has-type': 'off',
    'consistent-return': 'off',
    'react/prop-types': 'off',
    'default-case': 'off',
    'no-case-declarations': 'off',
    'no-const-assign': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-this-in-sfc': 'off',
    'no-unused-vars': 'off',
    eqeqeq: 'off',
    'no-fallthrough': 'off',
    'no-plusplus': 'off',
    'no-unneeded-ternary': 'off',
  },
};
