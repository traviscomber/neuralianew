import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const sourceDir = path.join(ROOT, 'recognition-sources');
const publicDir = path.join(ROOT, 'public');

const assets = [
  ['hero-command-center-cougar.webp', 'hero-command-center-cougar.jpg', 94],
  ['usecase-cougar-clean.webp', 'usecase-cougar-clean.jpg', 94],
  ['usecase-cow-clean.webp', 'usecase-cow-clean.jpg', 94],
  ['usecase-sea-urchin-clean.webp', 'usecase-sea-urchin-clean.jpg', 94],
  ['usecase-security-clean.webp', 'usecase-security-clean.jpg', 94],
  ['value-chain-detection-action.webp', 'value-chain-detection-action.jpg', 94],
  ['platform-system-behind-recognition.webp', 'platform-system-behind-recognition.jpg', 94],
  ['command-center-scale.webp', 'command-center-scale.jpg', 94],
];

for (const [outName, sourceName, quality] of assets) {
  const source = path.join(sourceDir, sourceName);
  const target = path.join(publicDir, outName);
  await fs.access(source).catch(() => { throw new Error(`Missing recognition source: ${sourceName}`); });
  await sharp(source).webp({ quality, effort: 6 }).toFile(target);
  const stat = await fs.stat(target);
  if (stat.size < 4096) throw new Error(`Recognition asset too small: ${outName}`);
  console.log(`generated ${outName} (${stat.size} bytes)`);
}
