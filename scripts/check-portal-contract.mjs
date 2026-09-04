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

if (failures.length > 0) {
  console.error('Portal contract check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Portal contract check passed.')
