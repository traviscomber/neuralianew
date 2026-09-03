import { part0 } from '@/lib/recognition-section04-final-asset/part0'
import { part1 } from '@/lib/recognition-section04-final-asset/part1'
import { part2 } from '@/lib/recognition-section04-final-asset/part2'
import { part3 } from '@/lib/recognition-section04-final-asset/part3'
import { part4 } from '@/lib/recognition-section04-final-asset/part4'
import { part5 } from '@/lib/recognition-section04-final-asset/part5'
import { part6 } from '@/lib/recognition-section04-final-asset/part6'
import { part7 } from '@/lib/recognition-section04-final-asset/part7'

export const runtime = 'nodejs'
export const dynamic = 'force-static'

const bytes = Buffer.from(part0 + part1 + part2 + part3 + part4 + part5 + part6 + part7, 'base64')

export function GET() {
  return new Response(bytes, {
    status: 200,
    headers: {
      'Content-Type': 'image/webp',
      'Content-Length': String(bytes.length),
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
