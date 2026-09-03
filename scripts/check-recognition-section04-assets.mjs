import { existsSync, readFileSync } from 'node:fs'

const component = 'components/recognition-section04-final.tsx'
const route = 'app/recognition-section04-platform-canonical.webp/route.ts'
const assetParts = [
  'lib/recognition-section04-asset/part0.ts',
  'lib/recognition-section04-asset/part1.ts',
  'lib/recognition-section04-asset/part2.ts',
]
const canonicalSrc = '/recognition-section04-platform-canonical.webp'
const forbiddenPaths = [
  'public/platform-system-behind-recognition.webp',
  'components/recognition-assets/section-4.ts',
  'app/recognition-section4-platform-v2.webp/route.ts',
  'app/recognition-section04-platform-v4.png/route.ts',
  'app/api/recognition-platform-artwork/route.ts',
  'app/[locale]/recognition-section4.css',
  'app/[locale]/recognition-section4-png.css',
  'components/recognition-section04-v2.module.css',
  'components/recognition-section04-reference-part0.ts',
  'components/recognition-section04-reference-part1a.ts',
  'components/recognition-section04-reference-part1b.ts',
  'components/recognition-section04-reference-part1c.ts',
  'components/recognition-section04-reference-part1d.ts',
  'public/recognition-section04-platform-v2.txt',
  'public/recognition-section04-platform-v4.png',
  'public/recognition-section04-platform-v5.webp',
  'public/recognition-section04-platform-v6.webp',
  'public/recognition-section04-platform.png',
  'public/recognition-section4-platform-v2.webp.base64.txt',
  'public/recognition-section4-platform.webp',
]

if (!existsSync(component)) throw new Error(`Missing Section 04 component: ${component}`)
if (!existsSync(route)) throw new Error(`Missing canonical Section 04 image route: ${route}`)
for (const part of assetParts) {
  if (!existsSync(part)) throw new Error(`Missing canonical Section 04 asset part: ${part}`)
}

const base64 = assetParts.map((part) => {
  const source = readFileSync(part, 'utf8')
  const match = source.match(/export const PART\d = '([^']+)'/s)
  if (!match) throw new Error(`Invalid Section 04 asset part: ${part}`)
  return match[1]
}).join('')

const bytes = Buffer.from(base64, 'base64')
if (bytes.length < 4096) throw new Error(`Section 04 asset is unexpectedly small: ${bytes.length} bytes`)
if (bytes.subarray(0, 4).toString('ascii') !== 'RIFF' || bytes.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Canonical Section 04 asset is not a valid WebP container')
}

const source = readFileSync(component, 'utf8')
if (!source.includes(`src="${canonicalSrc}"`)) {
  throw new Error('Section 04 component does not reference the portrait canonical WebP route')
}
if (source.includes('/platform-system-behind-recognition.webp')) {
  throw new Error('Section 04 component still references the obsolete landscape artwork')
}
if (source.includes('data:image/')) throw new Error('Section 04 component contains an embedded data URI')

const routeSource = readFileSync(route, 'utf8')
if (!routeSource.includes("'Content-Type': 'image/webp'")) {
  throw new Error('Section 04 canonical route does not return image/webp')
}
for (let index = 0; index < assetParts.length; index += 1) {
  if (!routeSource.includes(`PART${index}`)) throw new Error(`Section 04 route does not include PART${index}`)
}

const leftovers = forbiddenPaths.filter(existsSync)
if (leftovers.length) throw new Error(`Legacy Section 04 paths still exist:\n${leftovers.join('\n')}`)

console.log(`Section 04 portrait asset workflow valid (${bytes.length} bytes)`)
