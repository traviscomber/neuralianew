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

const deletedAcquisitionRoutes = [
  'app/[locale]/agentes-ia-santiago-chile/page.tsx',
  'app/[locale]/agentes-ia-valparaiso-chile/page.tsx',
  'app/[locale]/agentes-ia-concepcion-chile/page.tsx',
  'app/[locale]/agentes-ia-antofagasta-chile/page.tsx',
  'app/[locale]/agentes-ia-temuco-chile/page.tsx',
  'app/[locale]/agentes-ia-la-serena-chile/page.tsx',
  'app/[locale]/agentes-ia-iquique-chile/page.tsx',
  'app/[locale]/agentes-ia-rancagua-chile/page.tsx',
  'app/[locale]/agentes-ia-talca-chile/page.tsx',
  'app/[locale]/agentes-ia-puerto-montt-chile/page.tsx',
  'app/[locale]/agentes-ia-punta-arenas-chile/page.tsx',
  'app/[locale]/agentes-ia-mineria-chile/page.tsx',
  'app/[locale]/blog/agentes-ia-mineria-casos-exito/page.tsx',
]
for (const path of deletedAcquisitionRoutes) {
  if (existsSync(path)) failures.push(`${path}: mock/unsupported acquisition route must remain deleted`)
}

const solutionsPath = 'app/[locale]/soluciones/page.tsx'
const solutions = read(solutionsPath)
requireIncludes(solutionsPath, solutions, [
  '/n3uralia-retro/icons/friction-visibility.svg',
  '/n3uralia-retro/icons/friction-coordination.svg',
  '/n3uralia-retro/icons/friction-response.svg',
  '/n3uralia-retro/icons/friction-traceability.svg',
  '/diagnostico',
])
requireExcludes(solutionsPath, solutions, [
  'N3 / ACTIVE SECTION',
  'NODE 0',
  'PRODUCTION PROOF',
  'PROOF /',
])

const focusPath = 'components/solutions-focus.tsx'
const focus = read(focusPath)
requireExcludes(focusPath, focus, ['<style jsx global>', 'n3-friction-scan'])

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
requireExcludes(layoutPath, layout, ['rounded-full'])

const footerPath = 'components/canonical-footer.tsx'
const footer = read(footerPath)
requireIncludes(footerPath, footer, [
  'info@n3uralia.com',
  '+56993826127',
  'https://linkedin.com/company/n3uralia',
  '/diagnostico',
])

const structuredDataPath = 'components/structured-data.tsx'
const structuredData = read(structuredDataPath)
requireIncludes(structuredDataPath, structuredData, [
  'n3uralia-logo-canonical.svg',
  'https://linkedin.com/company/n3uralia',
  'info@n3uralia.com',
])
requireExcludes(structuredDataPath, structuredData, [
  'aggregateRating',
  'reviewCount',
  'ratingValue',
  'twitter.com/n3uralia',
  'github.com/n3uralia',
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
  "2026-09-04T00:00:00.000Z",
])

const solutionRoutesPath = 'lib/sitemap-routes-solutions.ts'
const solutionRoutes = read(solutionRoutesPath)
requireExcludes(solutionRoutesPath, solutionRoutes, [
  '/agentes-ia-antofagasta-chile',
  '/agentes-ia-valparaiso-chile',
  '/agentes-ia-santiago-chile',
  '/agentes-ia-mineria-chile',
])

const llmsPath = 'public/llms.txt'
const llms = read(llmsPath)
requireIncludes(llmsPath, llms, [
  'AI and software systems for real operations',
  '/es/proyectos | https://www.n3uralia.com/en/projects',
  '/es/productos | https://www.n3uralia.com/en/products',
  '/es/reconocimiento | https://www.n3uralia.com/en/recognition',
  'Do not infer customer metrics, ROI, guarantees, awards or outcomes',
])
requireExcludes(llmsPath, llms, ['/es/platform |', '/es/studies |'])

if (failures.length > 0) {
  console.error('Portal contract check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Portal contract check passed.')
