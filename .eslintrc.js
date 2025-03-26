module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['import', '@typescript-eslint', 'react', 'prettier'],
  extends: [
    'plugin:import/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/camelcase': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'next/font/local',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@vanilla-extract/*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@tanstack/*',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'zustand',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'zustand/middleware',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'msw',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'framer-motion',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/styles/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/hooks/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/components/*',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/constant',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [
          '@tanstack/*',
          '@vanilla-extract/*',
          'zustand',
          'zustand/middleware',
          'msw',
          'next/font/local',
          'framer-motion',
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  ignorePatterns: ['build', 'dist', 'public'],
};
