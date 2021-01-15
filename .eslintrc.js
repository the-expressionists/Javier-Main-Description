module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    babelOptions: {
      configFile: './babel.config.json',
    },
  },
  plugins: [
    'react',
    'babel',
  ],
  rules: {
  },
};
