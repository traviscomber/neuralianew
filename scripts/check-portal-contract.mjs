import { existsSync, readFileSync } from 'node:fs'

const failures = []

function read(path) {
  return readFileSync(path, 'utf8')
}

function requireIncludes(path, source, values) {
  for (const value of values) {
    if (!source.includes(value)) failures.push(`${path}: missing required contract value: ${value}`)
  }
}

function requireExcludes(path, source, values) {
  for (const value of values) {
    if (source.includes(value)) failures.push(`${path}: contains forbidden legacy value: ${value}`)
  }
}

if (existsSync('.asset-staging/security.b64')) {
  failures.push('.asset-staging/security.b64: obsolete staging payload must not be committed')
}

const retiredRoutes = [
  'app/[locale]/como-funcionamos/page.tsx',
  'app/[locale]/nuestro-enfoque/page.tsx',
  'app/[locale]/nodes/page.tsx',
  'app/[locale]/patterns/page.tsx',
  'app/[locale]/security/page.tsx',
  'app/[locale]/playbooks/page.tsx',
  'app/[locale]/studies/page.tsx',
  'app/[locale]/automatizacion-para-empresas/page.tsx',
  'app/[locale]/automatizacion-ventas-leads/page.tsx',
  'app/[locale]/automatizacion-ia-empresas-chile/page.tsx',
  'app/[locale]/soluciones-agenticas-chile/page.tsx',
  'app/[locale]/agentes-ia-logistica-chile/page.tsx',
  'app/[locale]/agentes-ia-manufactura-chile/page.tsx',
  'app/[locale]/agentes-ia-retail-chile/page.tsx',
  'app/[locale]/agentes-ia-turismo-chile/page.tsx',
  'app/[locale]/agentes-ia-chile/ciudades/page.tsx',
  'app/[locale]/[...slug]/page.tsx',
  'lib/chile-city-pages.ts',
]
for (const path of retiredRoutes) {
  if (existsSync(path)) failures.push(`${path}: retired residual route must remain deleted`)
}

const retiredDeadScaffolding = [
  'app/accessibility-test/loading.tsx',
  'app/advanced-metrics/loading.tsx',
  'app/ai-confidence-monitoring/loading.tsx',
  'app/ai-learning/loading.tsx',
  'app/ai-reasoning-explorer/loading.tsx',
  'app/ai-response-verification/loading.tsx',
  'app/ai-search-simulation/loading.tsx',
  'app/ai-suggestions/loading.tsx',
  'app/analytics-dashboard/loading.tsx',
  'components/monitoring/advanced-ai-suggestions.tsx',
  'components/monitoring/ai-learning-dashboard.tsx',
  'components/monitoring/ai-reasoning-explorer.tsx',
  'components/monitoring/ai-recommendations-panel.tsx',
  'components/monitoring/custom-threshold-wizard.tsx',
  'components/monitoring/enhanced-threshold-wizard.tsx',
  'components/monitoring/high-confidence-ai-panel.tsx',
  'components/monitoring/logo-performance-dashboard.tsx',
  'components/monitoring/performance-alerts-dashboard.tsx',
  'lib/ai-learning-system.ts',
  'lib/ai-threshold-analyzer.ts',
  'lib/logo-performance-monitor.ts',
]
for (const path of retiredDeadScaffolding) {
  if (existsSync(path)) failures.push(`${path}: retired dead scaffolding must remain deleted`)
}

const retiredStudyRoutes = [
  'agentic-ai',
  'agentic-brainstorming',
  'ai-memory',
  'context-engineering',
  'production-grade-agentic-systems',
  'world-engine',
]
for (const slug of retiredStudyRoutes) {
  const path = `app/[locale]/studies/${slug}/page.tsx`
  if (existsSync(path)) failures.push(`${path}: retired studies route must remain deleted`)
}

const retiredBlogRoutes = [
  'agentes-ia-atencion-cliente-chile',
  'agentes-ia-compliance-tributario-chile',
  'agentes-ia-finanzas-chile',
  'agentes-ia-logistica-optimizacion-rutas',
  'agentes-ia-manufactura-produccion',
  'agentes-ia-predictive-analytics-chile',
  'agentes-ia-recursos-humanos-chile',
  'agentes-ia-retail-inventario',
  'agentes-ia-roi-metricas-chile',
  'agentes-ia-servicio-cliente-multilingual',
  'agentes-ia-sii-facturacion',
  'agentes-ia-transformacion-digital-pymes',
  'agentes-ia-turismo-reservas',
  'agentes-ia-vs-outsourcing-chile',
  'automatizacion-invoice-processing-chile',
  'chatbots-vs-agentes-ia',
  'costo-agentes-ia-chile',
  'costo-implementar-agentes-ia-chile',
  'gobernanza-ia-compliance-chile',
  'industrias-agentes-ia',
  'integracion-erp-agentes-ia-chile',
  'integracion-sistemas-erp-chilenos',
  'living-agents-aprendizaje-continuo-chile',
  'que-son-agentes-ia',
  'rpa-vs-agentes-ia-cual-elegir-chile',
  'seguridad-datos-agentes-ia-chile',
  'tiempo-implementacion-ia-chile',
]
for (const slug of retiredBlogRoutes) {
  const path = `app/[locale]/blog/${slug}/page.tsx`
  if (existsSync(path)) failures.push(`${path}: retired SEO article route must remain deleted`)
}

const solutionsPath = 'app/[locale]/soluciones/page.tsx'
const solutions = read(solutionsPath)
requireIncludes(solutionsPath, solutions, [
  'SolutionsFocus',
  'Operational Intelligence',
  'Workflow Automation',
  'AI Assistants',
  'Document Intelligence',
  'Recognition Systems',
  'Internal Platforms',
  'Governance & Human Review',
  '/diagnostico',
])

const navPath = 'components/navigation.tsx'
const nav = read(navPath)
requireIncludes(navPath, nav, [
  'aria-expanded={open}',
  'aria-controls="primary-navigation"',
  "aria-current={pathname === href ? 'page' : undefined}",
  '/diagnostico',
])

const layoutPath = 'app/[locale]/layout.tsx'
const layout = read(layoutPath)
requireIncludes(layoutPath, layout, ['href="#main-content"', 'id="main-content"'])

const footerPath = 'components/canonical-footer.tsx'
const footer = read(footerPath)
requireIncludes(footerPath, footer, [
  'info@n3uralia.com',
  '+56993826127',
  'https://linkedin.com/company/n3uralia',
  '/diagnostico',
])

const metadataPath = 'lib/page-metadata.ts'
const metadata = read(metadataPath)
requireIncludes(metadataPath, metadata, [
  '"es-CL"',
  '"en-US"',
  '"x-default"',
  '"/soluciones": { es: "/soluciones", en: "/solutions" }',
  '"/como-trabajamos": { es: "/como-trabajamos", en: "/how-we-work" }',
])

const robotsPath = 'app/robots.ts'
const robots = read(robotsPath)
requireIncludes(robotsPath, robots, ['OAI-SearchBot', 'GPTBot', '/sitemap.xml'])

const sitemapPath = 'app/sitemap.ts'
const sitemap = read(sitemapPath)
requireIncludes(sitemapPath, sitemap, [
  "es: '/proyectos', en: '/projects'",
  "es: '/productos', en: '/products'",
  "es: '/reconocimiento', en: '/recognition'",
  "es: '/como-trabajamos', en: '/how-we-work'",
  "'es-CL'",
  "'x-default'",
  "2026-09-19T00:00:00.000Z",
])
requireExcludes(sitemapPath, sitemap, ['chileCityPages', 'cityRouteSlug', 'temporarilyExcludedSamePathRoutes'])

const solutionRoutesPath = 'lib/sitemap-routes-solutions.ts'
const solutionRoutes = read(solutionRoutesPath)
requireIncludes(solutionRoutesPath, solutionRoutes, ["['/agentes-ia-chile', 0.9, 'weekly']", "['/platform/nodes', 0.65, 'monthly']"])
requireExcludes(solutionRoutesPath, solutionRoutes, [
  '/automatizacion-para-empresas',
  '/automatizacion-ventas-leads',
  '/automatizacion-ia-empresas-chile',
  '/soluciones-agenticas-chile',
  '/agentes-ia-logistica-chile',
  '/agentes-ia-manufactura-chile',
  '/agentes-ia-retail-chile',
  '/agentes-ia-turismo-chile',
  '/agentes-ia-chile/ciudades',
])

const knowledgeRoutesPath = 'lib/sitemap-routes-knowledge.ts'
const knowledgeRoutes = read(knowledgeRoutesPath)
requireExcludes(knowledgeRoutesPath, knowledgeRoutes, ['/nodes', '/patterns', '/security', '/nuestro-enfoque', '/playbooks', '/studies'])

const redirectsPath = 'next.config.js'
const redirects = read(redirectsPath)
requireIncludes(redirectsPath, redirects, [
  "source: '/en/como-trabajamos', destination: '/en/how-we-work'",
  "source: '/es/how-we-work', destination: '/es/como-trabajamos'",
  "source: '/:locale(en|es)/nodes', destination: '/:locale/platform/nodes'",
  "source: '/:locale(en|es)/studies/:path*', destination: '/:locale/learning-hub'",
  "source: '/:locale(en|es)/agentes-ia-:scope-chile', destination: '/:locale/agentes-ia-chile'",
])

const llmsPath = 'public/llms.txt'
const llms = read(llmsPath)
requireIncludes(llmsPath, llms, [
  'AI and software systems for real operations',
  'Platform Nodes:',
  'N3uralia does not publish separate city landing pages',
  'Do not infer customer metrics, ROI, availability guarantees, certifications, awards or outcomes',
])
requireExcludes(llmsPath, llms, ['City pages use the pattern'])

if (failures.length > 0) {
  console.error('Portal contract check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Portal contract check passed.')
