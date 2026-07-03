import { NextRequest, NextResponse } from 'next/server'
import { z, ZodSchema } from 'zod'
import { requireAuth } from './api-auth'
import { withErrorBoundary } from './sentry-middleware'
import { captureException } from './sentry'

/**
 * Request validation middleware
 * Validates request body against Zod schema
 */
export async function validateRequest<T extends ZodSchema>(
  req: NextRequest,
  schema: T
): Promise<{ valid: true; data: z.infer<T> } | { valid: false; error: string }> {
  try {
    const body = await req.json()
    const result = schema.safeParse(body)

    if (!result.success) {
      const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
      return { valid: false, error: `Validation failed: ${errors}` }
    }

    return { valid: true, data: result.data }
  } catch (error) {
    return { valid: false, error: 'Invalid JSON in request body' }
  }
}

/**
 * Query parameter validation
 */
export function validateQuery<T extends ZodSchema>(
  req: NextRequest,
  schema: T
): { valid: true; data: z.infer<T> } | { valid: false; error: string } {
  try {
    const params = Object.fromEntries(req.nextUrl.searchParams)
    const result = schema.safeParse(params)

    if (!result.success) {
      const errors = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ')
      return { valid: false, error: `Query validation failed: ${errors}` }
    }

    return { valid: true, data: result.data }
  } catch (error) {
    return { valid: false, error: 'Failed to parse query parameters' }
  }
}

/**
 * Method validation middleware
 */
export function validateMethod(req: NextRequest, allowedMethods: string[]): boolean {
  return allowedMethods.includes(req.method)
}

/**
 * Content-Type validation
 */
export function validateContentType(req: NextRequest, expectedType: string): boolean {
  const contentType = req.headers.get('content-type')?.split(';')[0].trim()
  return contentType === expectedType
}

/**
 * Create guarded API route handler
 * Combines auth, validation, error handling
 */
export function createApiRoute(config: {
  methods: string[]
  auth?: boolean
  bodySchema?: ZodSchema
  querySchema?: ZodSchema
  rateLimit?: { points: number; windowMs: number }
}) {
  return (handler: (req: NextRequest, context: Record<string, unknown>) => Promise<NextResponse>) => {
    return withErrorBoundary(async (req: NextRequest) => {
      // Method validation
      if (!validateMethod(req, config.methods)) {
        return NextResponse.json(
          {
            status: 'error',
            message: `Method ${req.method} not allowed. Allowed: ${config.methods.join(', ')}`,
            code: 'METHOD_NOT_ALLOWED',
          },
          { status: 405 }
        )
      }

      // Auth validation
      if (config.auth) {
        try {
          const user = requireAuth(req)
          if (!user) throw new Error("Unauthorized")
        } catch (error) {
          captureException(error, { route: req.nextUrl.pathname, type: 'auth' })
          return NextResponse.json(
            {
              status: 'error',
              message: 'Unauthorized',
              code: 'UNAUTHORIZED',
            },
            { status: 401 }
          )
        }
      }

      // Body validation
      if (config.bodySchema && ['POST', 'PUT', 'PATCH'].includes(req.method)) {
        if (!validateContentType(req, 'application/json')) {
          return NextResponse.json(
            {
              status: 'error',
              message: 'Content-Type must be application/json',
              code: 'INVALID_CONTENT_TYPE',
            },
            { status: 400 }
          )
        }

        const validation = await validateRequest(req, config.bodySchema)
        if (!validation.valid) {
          return NextResponse.json(
            {
              status: 'error',
              message: (validation as any).error,
              code: 'VALIDATION_ERROR',
            },
            { status: 400 }
          )
        }
      }

      // Query validation
      if (config.querySchema) {
        const validation = validateQuery(req, config.querySchema)
        if (!validation.valid) {
          return NextResponse.json(
            {
              status: 'error',
              message: (validation as any).error,
              code: 'QUERY_VALIDATION_ERROR',
            },
            { status: 400 }
          )
        }
      }

      // Call handler
      return handler(req, {})
    })
  }
}

/**
 * Response builder with consistent format
 */
export class ApiResponse {
  static success(data: unknown, statusCode = 200) {
    return NextResponse.json(
      {
        status: 'success',
        data,
        timestamp: new Date().toISOString(),
      },
      { status: statusCode }
    )
  }

  static created(data: unknown) {
    return this.success(data, 201)
  }

  static error(message: string, code: string, statusCode = 400, details?: Record<string, unknown>) {
    return NextResponse.json(
      {
        status: 'error',
        message,
        code,
        details,
        timestamp: new Date().toISOString(),
      },
      { status: statusCode }
    )
  }

  static notFound(message = 'Resource not found') {
    return this.error(message, 'NOT_FOUND', 404)
  }

  static unauthorized(message = 'Unauthorized') {
    return this.error(message, 'UNAUTHORIZED', 401)
  }

  static forbidden(message = 'Forbidden') {
    return this.error(message, 'FORBIDDEN', 403)
  }

  static validationError(message: string, details?: Record<string, unknown>) {
    return this.error(message, 'VALIDATION_ERROR', 400, details)
  }

  static serverError(message = 'Internal server error', code = 'INTERNAL_SERVER_ERROR') {
    return this.error(message, code, 500)
  }
}

/**
 * Common validation schemas
 */
export const commonSchemas = {
  uuid: z.string().uuid(),
  email: z.string().email(),
  pagination: z.object({
    limit: z.number().int().min(1).max(100).default(10),
    offset: z.number().int().min(0).default(0),
  }),
  search: z.object({
    query: z.string().min(1).max(100),
  }),
  dateRange: z.object({
    startDate: z.string().datetime(),
    endDate: z.string().datetime(),
  }),
  agentFilter: z.object({
    archetype: z.enum(['Centinela', 'Tejedor', 'Historiador', 'Visionario', 'Maestro']).optional(),
    status: z.enum(['active', 'inactive', 'archived']).optional(),
  }),
}

/**
 * Example usage in an API route:
 *
 * import { createApiRoute, ApiResponse, z } from '@/lib/api-guards'
 *
 * const createAgent = createApiRoute({
 *   methods: ['POST'],
 *   auth: true,
 *   bodySchema: z.object({
 *     name: z.string().min(1),
 *     archetype: z.enum(['Centinela', 'Tejedor', 'Historiador', 'Visionario', 'Maestro']),
 *   }),
 * })
 *
 * export const POST = createAgent(async (req) => {
 *   const body = await req.json()
 *   // Your logic here
 *   return ApiResponse.created({ id: '123', ...body })
 * })
 */
