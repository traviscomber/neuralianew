import { NextRequest, NextResponse } from "next/server"

const LOCALES = ["es", "en"]
const DEFAULT_LOCALE = "es"
const ROOT_METADATA_PATHS = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/favicon.ico",
])

const PROTECTED_API_ROUTES = [
  "/api/living-agents/evolution",
  "/api/living-agents/interactions",
  "/api/vibe-selling/compose",
  "/api/analytics",
  "/api/conversions",
  "/api/heatmap",
]

const PUBLIC_API_ROUTES = [
  "/api/health",
  "/api/chat",
  "/api/deployment-status",
  "/api/email/test",
  "/api/send-email",
]

const rateLimitCache = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 100

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com https://vercel.live",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' https://fonts.gstatic.com data:",
  "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.vercel-insights.com https://vercel.live wss://ws-us3.pusher.com https://*.blob.vercel-storage.com https://*.private.blob.vercel-storage.com https://*.public.blob.vercel-storage.com https://blob.vercel-storage.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ')

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

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

function validateEnvironmentVariables(): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  const requiredVars = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "SUPABASE_SERVICE_ROLE_KEY",
    "OPENAI_API_KEY",
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

function getLocale(pathname: string): string | null {
  const parts = pathname.split("/")
  if (parts.length > 1 && LOCALES.includes(parts[1])) {
    return parts[1]
  }
  return null
}

function buildRequestHeaders(request: NextRequest, locale: string) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-n3uralia-locale", locale)
  return requestHeaders
}

function addSecurityHeaders(response: NextResponse) {
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()")

  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload",
    )
  }

  response.headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY)

  return response
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0].trim().toLowerCase()
  const requestHost = request.headers.get("host")?.split(":")[0].toLowerCase()
  const host = forwardedHost || requestHost || request.nextUrl.hostname.toLowerCase()
  const isRootMetadataFile = ROOT_METADATA_PATHS.has(pathname)
  const isStaticAsset =
    pathname.startsWith("/_next") ||
    pathname.startsWith("/public") ||
    /\.(js|css|png|jpg|jpeg|svg|gif|ico|webp)$/.test(pathname)

  if (host === "n3uralia.com") {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.protocol = "https"
    redirectUrl.hostname = "www.n3uralia.com"

    if (pathname === "/") {
      redirectUrl.pathname = "/en/"
    } else if (!pathname.startsWith("/api") && !isStaticAsset && !isRootMetadataFile && !getLocale(pathname)) {
      const acceptLanguage = request.headers.get("accept-language") || ""
      const preferredLocale = acceptLanguage
        .split(",")[0]
        .split("-")[0]
        .toLowerCase()
      const validLocale = LOCALES.includes(preferredLocale) ? preferredLocale : DEFAULT_LOCALE
      redirectUrl.pathname = `/${validLocale}${pathname}`
    }

    return NextResponse.redirect(redirectUrl, 308)
  }

  if (isStaticAsset || isRootMetadataFile) {
    return NextResponse.next()
  }

  if (!pathname.startsWith("/api")) {
    const locale = getLocale(pathname)

    if (!locale) {
      if (pathname === "/") {
        request.nextUrl.pathname = "/en/"
        return NextResponse.redirect(request.nextUrl)
      }

      const acceptLanguage = request.headers.get("accept-language") || ""
      const preferredLocale = acceptLanguage
        .split(",")[0]
        .split("-")[0]
        .toLowerCase()

      const validLocale = LOCALES.includes(preferredLocale) ? preferredLocale : DEFAULT_LOCALE
      request.nextUrl.pathname = `/${validLocale}${pathname}`
      return NextResponse.redirect(request.nextUrl)
    }
  }

  const clientIp = getClientIp(request)
  if (!checkRateLimit(clientIp)) {
    return NextResponse.json(
      {
        error: "Too many requests. Please try again later.",
        retryAfter: RATE_LIMIT_WINDOW_MS / 1000,
      },
      { status: 429, headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) } },
    )
  }

  if (pathname.startsWith("/api")) {
    const envValidation = validateEnvironmentVariables()
    if (!envValidation.valid) {
      console.error("[MIDDLEWARE] Environment validation failed:", envValidation.errors)
      return NextResponse.json(
        {
          error: "Server configuration error",
          timestamp: new Date().toISOString(),
          details: process.env.NODE_ENV === "development" ? envValidation.errors : undefined,
        },
        { status: 503 },
      )
    }
  }

  const locale = getLocale(pathname) ?? DEFAULT_LOCALE
  const requestHeaders = buildRequestHeaders(request, locale)

  const isProtectedRoute = PROTECTED_API_ROUTES.some((route) => pathname.startsWith(route))
  const isPublicRoute = PUBLIC_API_ROUTES.some((route) => pathname.startsWith(route))
  const isPublicTrackingWrite =
    request.method === "POST" &&
    (pathname.startsWith("/api/analytics") || pathname.startsWith("/api/conversions"))

  if (isProtectedRoute && !isPublicRoute && !isPublicTrackingWrite) {
    const authHeader = request.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized. Missing authentication token." },
        { status: 401 },
      )
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
        },
      })

      if (!response.ok) {
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
      }

      const user = await response.json()
      requestHeaders.set("x-user-id", user.id)
      requestHeaders.set("x-user-email", user.email)

      const protectedResponse = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      })

      return addSecurityHeaders(protectedResponse)
    } catch (error) {
      console.error("[MIDDLEWARE] Token validation error:", error)
      return NextResponse.json(
        { error: "Failed to validate authentication token" },
        { status: 500 },
      )
    }
  }

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return addSecurityHeaders(response)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|public).*)",
  ],
}
