module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {jest: true},
  ignorePatterns: [
    'node_modules/',
    'coverage/',
    'android/',
    'ios/',
    'src/mocks/Setup',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
};
