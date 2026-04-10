import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'
import plugin from '@typescript-eslint/eslint-plugin'

export default defineConfig([
  globalIgnores(['dist/**', 'tailwind.config.js']),
  js.configs.recommended,
  {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': plugin,
    },
    rules: {
      'prefer-const': 'warn',
      'no-undef': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
          'newlines-between': 'ignore',
        },
      ],
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
    },
  },
])
