import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'
import plugin from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default defineConfig([
  globalIgnores(['dist/**', 'tailwind.config.js']),
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsparser,
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
