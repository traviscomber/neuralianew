/**
 * Rate Limiting Example for API Routes
 * Shows how to implement rate limiting in your endpoints
 */

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { rateLimiters } from '@/lib/rate-limit'
import { requireAuth } from '@/lib/api-auth'

// Example 1: Simple rate limiting by IP
export async function exampleSimpleRateLimit(request: NextRequest) {
  // Get client IP
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  // Check rate limit
  const limit = await rateLimiters.standard(clientIp)

  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please try again later.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(limit.retryAfter),
          'X-RateLimit-Limit': String(limit.limit),
          'X-RateLimit-Remaining': String(Math.max(0, limit.limit - limit.current)),
          'X-RateLimit-Reset': String(Math.ceil(limit.resetTime / 1000)),
        },
      }
    )
  }

  // Continue with your logic
  return NextResponse.json({ message: 'Success' })
}

// Example 2: Rate limiting by authenticated user
export async function exampleUserRateLimit(request: NextRequest) {
  // Get authenticated user
  const user = requireAuth(request)

  // Check rate limit per user
  const limit = await rateLimiters.generous(user.id)

  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      {
        status: 429,
        headers: { 'Retry-After': String(limit.retryAfter) },
      }
    )
  }

  return NextResponse.json({ message: 'Success' })
}

// Example 3: Multiple rate limits (IP + User)
export async function exampleMultipleRateLimits(request: NextRequest) {
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  // Check global IP rate limit (strict)
  const globalLimit = await rateLimiters.strict(clientIp)
  if (!globalLimit.allowed) {
    return NextResponse.json(
      { error: 'Global rate limit exceeded' },
      { status: 429, headers: { 'Retry-After': String(globalLimit.retryAfter) } }
    )
  }

  // For authenticated requests, also check per-user limit
  const authHeader = request.headers.get('authorization')
  if (authHeader) {
    try {
      const user = requireAuth(request)
      const userLimit = await rateLimiters.generous(user.id)

      if (!userLimit.allowed) {
        return NextResponse.json(
          { error: 'User rate limit exceeded' },
          { status: 429, headers: { 'Retry-After': String(userLimit.retryAfter) } }
        )
      }
    } catch {
      // Not authenticated, continue with just IP limit
    }
  }

  return NextResponse.json({ message: 'Success' })
}

// Example 4: Custom rate limit per endpoint
export async function exampleCustomRateLimit(request: NextRequest) {
  const clientIp =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  // Create custom limiter: 5 requests per minute for this endpoint
  const customLimiter = async (key: string) => {
    const { checkRateLimit } = await import('@/lib/rate-limit')
    return checkRateLimit(key, {
      windowMs: 60 * 1000, // 1 minute
      maxRequests: 5,
      keyPrefix: 'custom-endpoint:',
    })
  }

  const limit = await customLimiter(clientIp)

  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded for this operation' },
      {
        status: 429,
        headers: {
          'Retry-After': String(limit.retryAfter),
          'X-RateLimit-Limit': String(limit.limit),
          'X-RateLimit-Remaining': String(Math.max(0, limit.limit - limit.current)),
        },
      }
    )
  }

  return NextResponse.json({ message: 'Success' })
}
