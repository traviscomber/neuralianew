import nextPlugin from '@next/eslint-plugin-next';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const intentionalConsoleFiles = [
  'app/actions/**/*.{js,jsx,ts,tsx}',
  'app/api/**/*.{js,jsx,ts,tsx}',
  'components/chat/chat-test.tsx',
  'components/monitoring/**/*.{js,jsx,ts,tsx}',
  'lib/**/*.{js,jsx,ts,tsx}',
];

const intentionalRawImageFiles = [
  'app/**/soluciones/page.tsx',
  'app/case-studies/**/CaseStudyContent.tsx',
  'components/recognition-page.tsx',
  'components/recognition-section04-final.tsx',
  'components/retro-landing.tsx',
  'components/solutions-fit-explorer.tsx',
];

export default [
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'public/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        React: true,
        JSX: true,
      },
    },
    plugins: {
      '@next/next': nextPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': 'off',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-sync-scripts': 'error',
      '@typescript-eslint/no-unused-vars': ['warn', {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
      }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
    },
  },
  {
    files: intentionalConsoleFiles,
    rules: {
      // These modules are diagnostics, monitoring, API handlers, and explicit test utilities.
      // Their console output is intentional operational telemetry rather than stray UI logging.
      'no-console': 'off',
    },
  },
  {
    files: intentionalRawImageFiles,
    rules: {
      // These surfaces intentionally preserve direct canonical asset URLs and exact image behavior.
      // Next/Image optimization would alter delivery semantics for these existing assets.
      '@next/next/no-img-element': 'off',
    },
  },
  {
    files: ['app/layout.tsx'],
    rules: {
      // App Router root layout is the correct global location for the Rajdhani stylesheet.
      '@next/next/no-page-custom-font': 'off',
    },
  },
];
