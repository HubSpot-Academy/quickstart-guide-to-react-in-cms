module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['cms-react-project/cms-react-app/dist/*'],
  settings: {
    react: {
      version: '18.1',
    },
  },
};
