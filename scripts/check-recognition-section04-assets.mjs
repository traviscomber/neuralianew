import { existsSync, readFileSync } from 'node:fs'

const component = 'components/recognition-section04-final.tsx'
const asset = 'public/recognition-section04-platform-final.webp'
const obsoleteInlineArtwork = 'components/recognition-section04-artwork.tsx'
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
if (!existsSync(asset)) throw new Error(`Missing Section 04 WebP: ${asset}`)
if (existsSync(obsoleteInlineArtwork)) throw new Error(`Section 04 still contains obsolete inline SVG artwork: ${obsoleteInlineArtwork}`)

const componentSource = readFileSync(component, 'utf8')
if (!componentSource.includes("const PLATFORM_ARTWORK_SRC = '/recognition-section04-platform-final.webp'")) {
  throw new Error('Section 04 does not use the canonical static WebP asset')
}
if (!componentSource.includes('<img') || !componentSource.includes('src={PLATFORM_ARTWORK_SRC}')) {
  throw new Error('Section 04 does not render the WebP with a native image element')
}
if (componentSource.includes('RecognitionSection04Artwork') || componentSource.includes('<svg')) {
  throw new Error('Section 04 still depends on inline SVG artwork')
}

const assetBytes = readFileSync(asset)
if (assetBytes.length < 20_000) throw new Error(`Section 04 WebP is unexpectedly small: ${assetBytes.length} bytes`)
if (assetBytes.subarray(0, 4).toString('ascii') !== 'RIFF' || assetBytes.subarray(8, 12).toString('ascii') !== 'WEBP') {
  throw new Error('Section 04 asset is not a valid WebP container')
}

const leftovers = legacyPaths.filter(existsSync)
if (leftovers.length) throw new Error(`Legacy Section 04 asset paths still exist:\n${leftovers.join('\n')}`)

console.log(`Section 04 WebP workflow valid (${assetBytes.length} bytes)`)
