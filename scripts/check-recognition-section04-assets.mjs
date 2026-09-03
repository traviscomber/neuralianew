import { existsSync, readFileSync } from 'node:fs'

const component = 'components/recognition-section04-final.tsx'
const artwork = 'components/recognition-section04-artwork.tsx'
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
if (!existsSync(artwork)) throw new Error(`Missing Section 04 inline artwork: ${artwork}`)

const componentSource = readFileSync(component, 'utf8')
if (!componentSource.includes("import { RecognitionSection04Artwork } from './recognition-section04-artwork'")) {
  throw new Error('Section 04 does not import the inline artwork component')
}
if (!componentSource.includes('<RecognitionSection04Artwork label={t.artworkAlt} />')) {
  throw new Error('Section 04 does not render the inline artwork component')
}
if (componentSource.includes('<img') || componentSource.includes('platformArtworkSrc')) {
  throw new Error('Section 04 still depends on an external image asset')
}

const artworkSource = readFileSync(artwork, 'utf8')
if (!artworkSource.includes('viewBox="0 0 640 1137"')) {
  throw new Error('Section 04 artwork does not use the canonical portrait viewBox')
}
for (const required of ['REAL-TIME DETECTION', 'COUGAR • 98.7%', 'DECISION', 'ALERT DELIVERY', 'NEW EVENT', 'ACTIVITY TREND', 'API', 'CLOUD', 'ANALYTICS', 'PARTNERS']) {
  if (!artworkSource.includes(required)) throw new Error(`Section 04 artwork is missing required content: ${required}`)
}

const leftovers = legacyPaths.filter(existsSync)
if (leftovers.length) throw new Error(`Legacy Section 04 asset paths still exist:\n${leftovers.join('\n')}`)

console.log('Section 04 inline artwork workflow valid')
