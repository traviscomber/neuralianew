import { NextRequest, NextResponse } from 'next/server'
import { LOCALES, DEFAULT_LOCALE } from '@/lib/get-locale'

// Redirect old Spanish route names to new canonical routes (301 permanent)
const REDIRECT_ROUTES: Record<string, string> = {
  '/es/capacidades': '/es/capabilities',
  '/es/casos-de-exito': '/es/case-studies',
  '/es/preguntas-frecuentes': '/es/faq',
  '/es/acerca-de': '/es/about',
  '/es/contactar': '/es/contact',
  '/es/solutions': '/es/soluciones', // /es/solutions should redirect to /es/soluciones (canonical ES path)
}

// Protected API routes that require authentication
const PROTECTED_API_ROUTES = [
  '/api/living-agents/evolution',
  '/api/living-agents/interactions',
  '/api/vibe-selling/compose',
  '/api/analytics',
  '/api/heatmap',
  '/api/conversions',
  '/api/email/test',  // SECURITY: Email test endpoint requires auth to prevent spam abuse
]

// Public API routes (no auth needed)
// SECURITY: Minimized public surface - email endpoints require auth
const PUBLIC_API_ROUTES = [
  '/api/health',        // Minimal health check only
  '/api/chat',          // Chat functionality
  '/api/deployment-status',
  '/api/send-email',    // Contact form - rate limited separately
]

// Strictly rate-limited routes (prevent abuse)
const STRICT_RATE_LIMITED_ROUTES = [
  '/api/send-email',    // 5 requests per minute to prevent spam
  '/api/email/test',    // Should not be public, but add strict limit as fallback
]

const STRICT_RATE_LIMIT_MAX = 5 // 5 requests per minute for email endpoints

// Rate limiting cache (in-memory for single instance, should use Redis in production)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>()
const strictRateLimitCache = new Map<string, { count: number; resetTime: number }>()

// Configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100 // requests per minute

/**
 * Get client IP address
 */
function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

/**
 * Check rate limit
 */
function checkRateLimit(clientIp: string): boolean {
  const now = Date.now()
  const data = rateLimitCache.get(clientIp)

  if (!data || now > data.resetTime) {
    rateLimitCache.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (data.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false
  }

  data.count++
  return true
}

/**
 * Check strict rate limit (for email endpoints)
 */
function checkStrictRateLimit(clientIp: string): boolean {
  const now = Date.now()
  const data = strictRateLimitCache.get(clientIp)

  if (!data || now > data.resetTime) {
    strictRateLimitCache.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return true
  }

  if (data.count >= STRICT_RATE_LIMIT_MAX) {
    return false
  }

  data.count++
  return true
}

/**
 * Get locale from request
 */
function getLocale(pathname: string): string | null {
  const parts = pathname.split('/')
  if (parts.length > 1 && LOCALES.includes(parts[1])) {
    return parts[1]
  }
  return null
}

export async function middleware(request: NextRequest) {
  const { pathname, hostname } = request.nextUrl

  // Redirect non-www to www domain (e.g., n3uralia.com → www.n3uralia.com)
  if (hostname === 'n3uralia.com') {
    return NextResponse.redirect(new URL(`${pathname}${request.nextUrl.search}`, `https://www.n3uralia.com`), {
      status: 301,
    })
  }

  // Check for old Spanish routes that need redirecting
  const redirect = REDIRECT_ROUTES[pathname]
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url), { status: 301 })
  }

  // Skip middleware for static assets, public files, and special files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/public') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname === '/favicon.ico' ||
    /\.(js|css|png|jpg|jpeg|svg|gif|ico|webp)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // Handle locale routing for non-API routes
  if (!pathname.startsWith('/api')) {
    const locale = getLocale(pathname)

    if (!locale) {
      // Get preferred locale from Accept-Language header
      const acceptLanguage = request.headers.get('accept-language') || ''
      const preferredLocale = acceptLanguage
        .split(',')[0]
        .split('-')[0]
        .toLowerCase()

      const validLocale = LOCALES.includes(preferredLocale) ? preferredLocale : DEFAULT_LOCALE

      // Redirect to locale-prefixed path
      request.nextUrl.pathname = `/${validLocale}${pathname}`
      return NextResponse.redirect(request.nextUrl)
    }
  }

  // Rate limiting for API routes only (not page navigation)
  if (pathname.startsWith('/api')) {
    const clientIp = getClientIp(request)
    
    // Check if this is a strictly rate-limited route (email endpoints)
    const isStrictlyLimited = STRICT_RATE_LIMITED_ROUTES.some((route) => pathname.startsWith(route))
    
    if (isStrictlyLimited) {
      if (!checkStrictRateLimit(clientIp)) {
        return NextResponse.json(
          {
            error: 'Too many requests. Email endpoints are limited to 5 requests per minute.',
            retryAfter: RATE_LIMIT_WINDOW_MS / 1000,
          },
          { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_MS / 1000) } }
        )
      }
    } else if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          retryAfter: RATE_LIMIT_WINDOW_MS / 1000,
        },
        { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_MS / 1000) } }
      )
    }
  }

  // Check if route is protected API
  const isProtectedRoute = PROTECTED_API_ROUTES.some((route) => pathname.startsWith(route))
  const isPublicRoute = PUBLIC_API_ROUTES.some((route) => pathname.startsWith(route))

  if (isProtectedRoute && !isPublicRoute) {
    // Get auth token from header
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized. Missing authentication token.' },
        { status: 401 }
      )
    }

    // Validate token against Supabase
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        },
      })

      if (!response.ok) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 })
      }

      const user = await response.json()

      // Add user to request headers for use in API routes
      const requestHeaders = new Headers(request.headers)
      requestHeaders.set('x-user-id', user.id)
      requestHeaders.set('x-user-email', user.email)

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })
    } catch (error) {
      console.error('Token validation error:', error)
      return NextResponse.json(
        { error: 'Failed to validate authentication token' },
        { status: 500 }
      )
    }
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()')

  // Add CSP header
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' https://cdn.vercel-insights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://api.openai.com https://*.supabase.co https://cdn.vercel-insights.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|public).*)',
  ],
}
