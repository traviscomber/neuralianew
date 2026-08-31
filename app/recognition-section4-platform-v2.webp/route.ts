import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const runtime = 'nodejs'

export async function GET() {
  const encoded = await readFile(
    path.join(process.cwd(), 'public', 'recognition-section4-platform-v2.webp.base64.txt'),
    'utf8',
  )
  const image = Buffer.from(encoded.trim(), 'base64')

  return new Response(image, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
