import { NextRequest, NextResponse } from 'next/server'

// i18n configuration
const LOCALES = ['es', 'en']
const DEFAULT_LOCALE = 'es'

// Protected API routes that require authentication
const PROTECTED_API_ROUTES = [
  '/api/living-agents/evolution',
  '/api/living-agents/interactions',
  '/api/vibe-selling/compose',
  '/api/analytics',
  '/api/heatmap',
  '/api/conversions',
]

// Public API routes (no auth needed)
const PUBLIC_API_ROUTES = [
  '/api/health',
  '/api/chat',
  '/api/deployment-status',
  '/api/email/test',
  '/api/send-email',
]

// Rate limiting cache (in-memory for single instance, should use Redis in production)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>()

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
 * Validate environment variables
 */
function validateEnvironmentVariables(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const requiredVars = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'OPENAI_API_KEY',
  ]

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      errors.push(`Missing required environment variable: ${varName}`)
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  }
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
  const { pathname } = request.nextUrl

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

  // Rate limiting for all requests
  const clientIp = getClientIp(request)
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      {
        error: 'Too many requests. Please try again later.',
        retryAfter: RATE_LIMIT_WINDOW_MS / 1000,
      },
      { status: 429, headers: { 'Retry-After': String(RATE_LIMIT_WINDOW_MS / 1000) } }
    )
  }

  // Validate environment variables on startup
  if (process.env.NODE_ENV === 'production') {
    const envValidation = validateEnvironmentVariables()
    if (!envValidation.valid) {
      console.error('Environment validation failed:', envValidation.errors)
      return NextResponse.json(
        {
          error: 'Server configuration error',
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
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
