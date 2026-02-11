import { NextRequest } from 'next/server'
import { createApiRoute, ApiResponse, commonSchemas } from '@/lib/api-guards'
import { z } from 'zod'

/**
 * Example: Create Living Agent - Protected with full validation
 */
const createLivingAgentSchema = z.object({
  name: z.string().min(1).max(100),
  archetype: z.enum(['Curador', 'Tejedora', 'Cronista', 'Visionario', 'Arquitecto']),
  description: z.string().min(10).max(1000),
  personality: z.record(z.number()).optional(),
})

const createLivingAgent = createApiRoute({
  methods: ['POST'],
  auth: true,
  bodySchema: createLivingAgentSchema,
})

export const POST = createLivingAgent(async (req: NextRequest) => {
  try {
    const body = await req.json()

    // Your business logic here
    const newAgent = {
      id: crypto.randomUUID(),
      ...body,
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    // Save to database
    // await db.livingAgents.create(newAgent)

    return ApiResponse.created(newAgent)
  } catch (error) {
    return ApiResponse.serverError('Failed to create living agent')
  }
})

/**
 * Example: List Living Agents - With pagination and filtering
 */
const listLivingAgents = createApiRoute({
  methods: ['GET'],
  auth: false,
  querySchema: z.object({
    limit: z.coerce.number().int().min(1).max(100).default(10),
    offset: z.coerce.number().int().min(0).default(0),
    archetype: z
      .enum(['Curador', 'Tejedora', 'Cronista', 'Visionario', 'Arquitecto'])
      .optional(),
    status: z.enum(['active', 'inactive', 'archived']).optional(),
  }),
})

export const GET = listLivingAgents(async (req: NextRequest) => {
  try {
    const { searchParams } = req.nextUrl
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')
    const archetype = searchParams.get('archetype')
    const status = searchParams.get('status')

    // Build query filter
    // const agents = await db.livingAgents.find({
    //   ...(archetype && { archetype }),
    //   ...(status && { status }),
    // })
    //   .skip(offset)
    //   .limit(limit)

    const agents = [
      // Mock data - replace with actual database query
      {
        id: '1',
        name: 'Agent 1',
        archetype: 'Curador',
        status: 'active',
      },
    ]

    return ApiResponse.success({
      agents,
      total: agents.length,
      limit,
      offset,
    })
  } catch (error) {
    return ApiResponse.serverError('Failed to list living agents')
  }
})

/**
 * Reference: Common Patterns for Routes
 */

/*
// Pattern 1: Simple GET endpoint
const getRoute = createApiRoute({
  methods: ['GET'],
  auth: false,
})

export const GET = getRoute(async (req) => {
  return ApiResponse.success({ data: [] })
})

// Pattern 2: Protected POST with validation
const postRoute = createApiRoute({
  methods: ['POST'],
  auth: true,
  bodySchema: z.object({
    name: z.string(),
    email: z.string().email(),
  }),
})

export const POST = postRoute(async (req) => {
  const body = await req.json()
  return ApiResponse.created({ id: '123', ...body })
})

// Pattern 3: GET with query filtering and pagination
const listRoute = createApiRoute({
  methods: ['GET'],
  auth: false,
  querySchema: z.object({
    search: z.string().optional(),
    limit: z.coerce.number().default(10),
    offset: z.coerce.number().default(0),
  }),
})

export const GET = listRoute(async (req) => {
  const { searchParams } = req.nextUrl
  const search = searchParams.get('search')
  const limit = parseInt(searchParams.get('limit') || '10')
  const offset = parseInt(searchParams.get('offset') || '0')

  return ApiResponse.success({ items: [], total: 0 })
})

// Pattern 4: DELETE with auth
const deleteRoute = createApiRoute({
  methods: ['DELETE'],
  auth: true,
  querySchema: z.object({
    id: commonSchemas.uuid,
  }),
})

export const DELETE = deleteRoute(async (req) => {
  const id = req.nextUrl.searchParams.get('id')
  // Delete logic
  return ApiResponse.success({ deleted: true })
})

// Pattern 5: Error handling
const errorRoute = createApiRoute({
  methods: ['POST'],
  auth: true,
})

export const POST = errorRoute(async (req) => {
  try {
    // Your code
    return ApiResponse.success({ status: 'ok' })
  } catch (error) {
    if (error instanceof NotFoundError) {
      return ApiResponse.notFound('Resource not found')
    }
    if (error instanceof ValidationError) {
      return ApiResponse.validationError('Invalid data', { field: 'name' })
    }
    return ApiResponse.serverError('Something went wrong')
  }
})
*/
