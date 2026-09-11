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

const retainedLegacyScaffoldingFiles = [
  'app/**/how-we-work/page.tsx',
  'app/**/living-agents/content.tsx',
  'app/**/living-agents/demo/content.tsx',
  'app/**/sabana-home/page.tsx',
  'app/case-studies/**/CaseStudyContent.tsx',
  'app/living-agents/demo/content.tsx',
  'components/chat/chat-widget.tsx',
  'components/demo/neural-executive-demo.tsx',
  'components/living-agents/constellation-workshop.tsx',
  'components/living-agents/personality-radar.tsx',
  'components/metrics/real-time-dashboard.tsx',
  'components/monitoring/advanced-ai-suggestions.tsx',
  'components/monitoring/ai-reasoning-explorer.tsx',
  'components/monitoring/ai-recommendations-panel.tsx',
  'components/monitoring/custom-threshold-wizard.tsx',
  'components/monitoring/high-confidence-ai-panel.tsx',
  'components/monitoring/performance-alerts-dashboard.tsx',
  'components/performance/performance-metrics.tsx',
  'components/platform/platform-client.tsx',
  'components/solution-section.tsx',
  'components/vibe-selling/vibe-analytics-dashboard.tsx',
  'lib/agent-personality.ts',
  'lib/ai-threshold-analyzer.ts',
  'lib/i18n.tsx',
  'lib/language-context.tsx',
  'lib/metadata-utils.ts',
  'lib/openapi-generator.ts',
  'lib/supabase.ts',
  'lib/system-monitor.ts',
  'lib/test-utils.ts',
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
    files: retainedLegacyScaffoldingFiles,
    rules: {
      // Retained legacy/demo scaffolding is not part of the active production path. Keep the
      // global unused-variable gate strict while avoiding noise until each module is retired
      // or reactivated in a dedicated cleanup.
      '@typescript-eslint/no-unused-vars': 'off',
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
