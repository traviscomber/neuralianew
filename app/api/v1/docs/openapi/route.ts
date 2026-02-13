import { generateOpenAPISpec } from '@/lib/openapi-generator'

export async function GET() {
  return Response.json(generateOpenAPISpec(), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  })
}
