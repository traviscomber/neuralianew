import { PART0 } from '@/lib/recognition-section04-asset/part0'
import { PART1 } from '@/lib/recognition-section04-asset/part1'
import { PART2 } from '@/lib/recognition-section04-asset/part2'

const IMAGE_BYTES = Buffer.from(PART0 + PART1 + PART2, 'base64')

export const dynamic = 'force-static'

export async function GET() {
  return new Response(IMAGE_BYTES, {
    headers: {
      'Content-Type': 'image/webp',
      'Content-Length': String(IMAGE_BYTES.length),
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
