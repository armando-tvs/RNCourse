module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'comma-dangle': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-use-before-define': 'off'
  },
};
