import { existsSync, readFileSync, statSync } from 'node:fs'

const asset = 'public/platform-system-behind-recognition.webp'
const component = 'components/recognition-section04-final.tsx'
const forbiddenPaths = [
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

if (!existsSync(asset)) throw new Error(`Missing canonical Section 04 asset: ${asset}`)
if (statSync(asset).size < 4096) throw new Error(`Section 04 asset is unexpectedly small: ${statSync(asset).size} bytes`)

const bytes = readFileSync(asset)
if (bytes.subarray(0, 4).toString('ascii') !== 'RIFF' || bytes.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Canonical Section 04 asset is not a valid WebP container')
}

const source = readFileSync(component, 'utf8')
if (!source.includes('src="/platform-system-behind-recognition.webp"')) {
  throw new Error('Section 04 component does not reference the canonical public WebP')
}
if (source.includes('data:image/')) throw new Error('Section 04 component contains an embedded data URI')

const leftovers = forbiddenPaths.filter(existsSync)
if (leftovers.length) throw new Error(`Legacy Section 04 paths still exist:\n${leftovers.join('\n')}`)

console.log(`Section 04 asset workflow valid (${statSync(asset).size} bytes)`)
