import { readFile } from 'node:fs/promises'
import path from 'node:path'

export async function GET() {
  const source = path.join(
    process.cwd(),
    'public',
    'recognition-section4-platform-v2.webp.base64.txt',
  )
  const encoded = await readFile(source, 'utf8')
  const body = Buffer.from(encoded.trim(), 'base64')

  return new Response(body, {
    headers: {
      'Content-Type': 'image/webp',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
