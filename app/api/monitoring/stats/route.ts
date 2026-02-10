/**
 * Monitoring Dashboard API
 * Provides statistics about query performance and system health
 * 
 * Usage: GET /api/monitoring/stats
 * Protected: Requires authentication
 */

import { NextRequest, NextResponse } from 'next/server'
import {
  getQueryStats,
  getSlowQueries,
  getFailedQueries,
} from '@/lib/query-monitor'
import { requireAuth } from '@/lib/api-auth'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  try {
    // Require authentication for monitoring endpoint
    const user = requireAuth(request)

    // Get query from URL params
    const searchParams = request.nextUrl.searchParams
    const type = searchParams.get('type') || 'stats'

    switch (type) {
      case 'stats':
        return NextResponse.json(
          {
            timestamp: new Date().toISOString(),
            stats: getQueryStats(),
            user: { id: user.id },
          },
          { status: 200 }
        )

      case 'slow':
        const slowThreshold = parseInt(searchParams.get('threshold') || '1000')
        return NextResponse.json(
          {
            timestamp: new Date().toISOString(),
            threshold: slowThreshold,
            queries: getSlowQueries(slowThreshold).slice(0, 50), // Last 50
            user: { id: user.id },
          },
          { status: 200 }
        )

      case 'errors':
        return NextResponse.json(
          {
            timestamp: new Date().toISOString(),
            errors: getFailedQueries().slice(0, 50), // Last 50
            user: { id: user.id },
          },
          { status: 200 }
        )

      default:
        return NextResponse.json(
          { error: 'Unknown monitoring type' },
          { status: 400 }
        )
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'

    return NextResponse.json(
      { error: message, timestamp: new Date().toISOString() },
      { status: error instanceof Error && message.includes('Unauthorized') ? 401 : 500 }
    )
  }
}
