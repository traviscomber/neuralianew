import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'

const component = 'components/recognition-section04-final.tsx'
const artworkStyles = 'components/recognition-section04-final.module.css'
const route = 'app/recognition-section04-platform-final.webp/route.ts'
const assetParts = [0, 1, 2, 3, 4, 5, 6, 7].map((index) => `lib/recognition-section04-final-asset/part${index}.ts`)
const obsoleteInlineArtwork = 'components/recognition-section04-artwork.tsx'
const obsoleteStaticAsset = 'public/recognition-section04-platform-final.webp'
const expectedSha256 = '75964a7b6f33e872a5df62f1af7a55f12a7cd0b8a1c01ea88b608ed51c5f499d'
const legacyPaths = [
  'app/recognition-section04-platform-canonical.webp/route.ts',
  'lib/recognition-section04-asset/part0.ts',
  'lib/recognition-section04-asset/part1.ts',
  'lib/recognition-section04-asset/part2.ts',
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
if (!existsSync(artworkStyles)) throw new Error(`Missing Section 04 artwork styles: ${artworkStyles}`)
if (!existsSync(route)) throw new Error(`Missing Section 04 WebP route: ${route}`)
if (existsSync(obsoleteInlineArtwork)) throw new Error(`Section 04 still contains obsolete inline SVG artwork: ${obsoleteInlineArtwork}`)
if (existsSync(obsoleteStaticAsset)) throw new Error(`Section 04 contains an obsolete/truncated static asset: ${obsoleteStaticAsset}`)

const componentSource = readFileSync(component, 'utf8')
if (!componentSource.includes("const PLATFORM_ARTWORK_SRC = '/recognition-section04-platform-final.webp?v=20260903-7'")) {
  throw new Error('Section 04 does not use the canonical WebP URL')
}
if (!componentSource.includes('<img') || !componentSource.includes('src={PLATFORM_ARTWORK_SRC}')) {
  throw new Error('Section 04 does not render the WebP with a native image element')
}
if (componentSource.includes('RecognitionSection04Artwork') || componentSource.includes('<svg')) {
  throw new Error('Section 04 still depends on inline SVG artwork')
}

const artworkStyleSource = readFileSync(artworkStyles, 'utf8')
if (!artworkStyleSource.includes('aspect-ratio:560/995;')) {
  throw new Error('Section 04 artwork aspect ratio is not aligned with the canonical WebP')
}
if (!artworkStyleSource.includes('background:transparent!important;')) {
  throw new Error('Section 04 artwork container must remain transparent for dissolved WebP edges')
}

const base64 = assetParts.map((path) => {
  if (!existsSync(path)) throw new Error(`Missing Section 04 WebP payload part: ${path}`)
  const source = readFileSync(path, 'utf8')
  const match = source.match(/= '([A-Za-z0-9+/=]+)'/)
  if (!match) throw new Error(`Invalid Section 04 payload part: ${path}`)
  return match[1]
}).join('')

const assetBytes = Buffer.from(base64, 'base64')
if (assetBytes.length !== 67634) throw new Error(`Section 04 WebP byte length mismatch: ${assetBytes.length}`)
if (assetBytes.subarray(0, 4).toString('ascii') !== 'RIFF' || assetBytes.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Section 04 payload is not a valid WebP container')
}
const actualSha256 = createHash('sha256').update(assetBytes).digest('hex')
if (actualSha256 !== expectedSha256) throw new Error(`Section 04 WebP hash mismatch: ${actualSha256}`)

const routeSource = readFileSync(route, 'utf8')
if (!routeSource.includes("'Content-Type': 'image/webp'")) throw new Error('Section 04 route does not return image/webp')
if (!routeSource.includes("'Cache-Control': 'public, max-age=0, must-revalidate'")) throw new Error('Section 04 route cache policy is not refresh-safe')

const leftovers = legacyPaths.filter(existsSync)
if (leftovers.length) throw new Error(`Legacy Section 04 asset paths still exist:\n${leftovers.join('\n')}`)

console.log(`Section 04 WebP workflow valid (${assetBytes.length} bytes, ${actualSha256})`)
