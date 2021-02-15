module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import',
    'prettier',
    'jest',
    'jest-dom',
    'testing-library',
  ],
  env: {
    browser: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    'react': {
      version: 'detect',
    },
  },
  globals: {
    __CLIENT__: true,
    __SERVER__: true,
    __DEV__: true,
    __APOLLO_STATE__: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-boolean-value': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // 'no-console': [
    //   'error',
    //   {
    //     allow: ['debug', 'time', 'timeEnd', 'trace', 'info', 'warn', 'error'],
    //   },
    // ],
    '@typescript-eslint/no-var-requires': 'off',
  },
};
