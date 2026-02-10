/**
 * API Route Authentication Helpers
 * Provides utilities for protecting API routes with authentication
 */

import { NextRequest, NextResponse } from "next/server"

export interface AuthenticatedUser {
  id: string
  email: string
  role?: string
}

/**
 * Extract user from request headers (set by middleware)
 */
export function getAuthenticatedUser(request: NextRequest): AuthenticatedUser | null {
  const userId = request.headers.get("x-user-id")
  const userEmail = request.headers.get("x-user-email")

  if (!userId || !userEmail) {
    return null
  }

  return {
    id: userId,
    email: userEmail,
  }
}

/**
 * Require authentication - throws if user is not authenticated
 */
export function requireAuth(request: NextRequest): AuthenticatedUser {
  const user = getAuthenticatedUser(request)

  if (!user) {
    throw new Error("Unauthorized: Missing authentication")
  }

  return user
}

/**
 * API Route wrapper with error handling and auth
 */
export function createApiRoute(
  handler: (req: NextRequest, context: any) => Promise<Response>,
  options?: {
    requireAuth?: boolean
    methods?: string[]
  },
) {
  return async (req: NextRequest, context: any) => {
    try {
      // Check HTTP method
      if (options?.methods && !options.methods.includes(req.method)) {
        return NextResponse.json(
          { error: `Method ${req.method} not allowed` },
          { status: 405, headers: { Allow: options.methods.join(", ") } },
        )
      }

      // Check authentication if required
      if (options?.requireAuth) {
        const user = requireAuth(req)
        if (!user) {
          return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }
      }

      // Call handler
      return await handler(req, context)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error"
      const status = message.includes("Unauthorized") ? 401 : message.includes("Not found") ? 404 : 500

      console.error("[API Error]", message)

      return NextResponse.json({ error: message }, { status })
    }
  }
}

/**
 * Type-safe response helper
 */
export function apiResponse<T>(data: T, status = 200) {
  return NextResponse.json(data, { status })
}

/**
 * Error response
 */
export function apiError(message: string, status = 500) {
  return NextResponse.json(
    {
      error: message,
      timestamp: new Date().toISOString(),
    },
    { status },
  )
}
