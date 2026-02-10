/**
 * Rate Limiting Utility
 * Supports both in-memory (development) and Upstash Redis (production)
 */

const isProduction = process.env.NODE_ENV === 'production'

// In-memory rate limit cache (for development/local testing)
const memoryCache = new Map<string, { count: number; resetTime: number }>()

interface RateLimitConfig {
  windowMs?: number // Time window in milliseconds (default: 60s)
  maxRequests?: number // Max requests per window (default: 100)
  keyPrefix?: string // Key prefix for Redis (default: 'rl:')
}

interface RateLimitResult {
  allowed: boolean
  limit: number
  current: number
  resetTime: number
  retryAfter?: number
}

/**
 * Rate limit store interface
 */
interface RateLimitStore {
  check(key: string, config: Required<RateLimitConfig>): Promise<RateLimitResult>
  reset(key: string): Promise<void>
}

/**
 * In-memory rate limit store (for development)
 */
class MemoryRateLimitStore implements RateLimitStore {
  async check(key: string, config: Required<RateLimitConfig>): Promise<RateLimitResult> {
    const now = Date.now()
    const data = memoryCache.get(key)

    if (!data || now > data.resetTime) {
      // Create new window
      const resetTime = now + config.windowMs
      memoryCache.set(key, { count: 1, resetTime })

      return {
        allowed: true,
        limit: config.maxRequests,
        current: 1,
        resetTime,
      }
    }

    // Check current window
    const allowed = data.count < config.maxRequests
    if (allowed) {
      data.count++
    }

    return {
      allowed,
      limit: config.maxRequests,
      current: data.count,
      resetTime: data.resetTime,
      retryAfter: allowed ? undefined : Math.ceil((data.resetTime - now) / 1000),
    }
  }

  async reset(key: string): Promise<void> {
    memoryCache.delete(key)
  }
}

/**
 * Upstash Redis rate limit store (for production)
 */
class UpstashRateLimitStore implements RateLimitStore {
  private readonly token: string
  private readonly baseUrl: string

  constructor() {
    const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN
    const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL

    if (!upstashRedisRestToken || !upstashRedisRestUrl) {
      throw new Error(
        'Upstash Redis credentials missing. Set UPSTASH_REDIS_REST_TOKEN and UPSTASH_REDIS_REST_URL'
      )
    }

    this.token = upstashRedisRestToken
    this.baseUrl = upstashRedisRestUrl
  }

  private async executeCommand<T>(command: string[]): Promise<T> {
    const response = await fetch(`${this.baseUrl}/multi`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
    })

    if (!response.ok) {
      throw new Error(`Upstash API error: ${response.statusText}`)
    }

    return (await response.json()) as T
  }

  async check(key: string, config: Required<RateLimitConfig>): Promise<RateLimitResult> {
    const now = Date.now()
    const windowStart = now - config.windowMs

    try {
      // Use ZCOUNT to count requests in the window
      const countResult = await this.executeCommand<{ result: [number] }>([
        ['ZCOUNT', key, windowStart, now],
      ])

      const current = countResult.result[0] || 0
      const allowed = current < config.maxRequests
      const resetTime = now + config.windowMs

      if (allowed) {
        // Add current request to the sorted set
        await this.executeCommand([
          ['ZADD', key, now, `${now}-${Math.random()}`],
          ['EXPIRE', key, Math.ceil(config.windowMs / 1000)],
        ])
      }

      return {
        allowed,
        limit: config.maxRequests,
        current: current + (allowed ? 1 : 0),
        resetTime,
        retryAfter: allowed ? undefined : Math.ceil((resetTime - now) / 1000),
      }
    } catch (error) {
      console.error('Rate limit check error:', error)
      // Fail open - allow request if Redis fails
      return {
        allowed: true,
        limit: config.maxRequests,
        current: 0,
        resetTime: now + config.windowMs,
      }
    }
  }

  async reset(key: string): Promise<void> {
    try {
      await this.executeCommand([['DEL', key]])
    } catch (error) {
      console.error('Rate limit reset error:', error)
    }
  }
}

/**
 * Get rate limit store instance
 */
function getRateLimitStore(): RateLimitStore {
  if (isProduction && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return new UpstashRateLimitStore()
  }
  return new MemoryRateLimitStore()
}

/**
 * Check rate limit for a key
 */
export async function checkRateLimit(
  key: string,
  config?: RateLimitConfig
): Promise<RateLimitResult> {
  const store = getRateLimitStore()
  const defaultConfig = {
    windowMs: config?.windowMs ?? 60 * 1000, // 1 minute
    maxRequests: config?.maxRequests ?? 100,
    keyPrefix: config?.keyPrefix ?? 'rl:',
  }

  const fullKey = `${defaultConfig.keyPrefix}${key}`
  return store.check(fullKey, defaultConfig)
}

/**
 * Reset rate limit for a key
 */
export async function resetRateLimit(key: string, prefix = 'rl:'): Promise<void> {
  const store = getRateLimitStore()
  await store.reset(`${prefix}${key}`)
}

/**
 * Rate limit middleware for Next.js API routes
 */
export function createRateLimiter(config?: RateLimitConfig) {
  const defaultConfig = {
    windowMs: config?.windowMs ?? 60 * 1000,
    maxRequests: config?.maxRequests ?? 100,
    keyPrefix: config?.keyPrefix ?? 'rl:',
  }

  return async (key: string) => {
    return checkRateLimit(key, defaultConfig)
  }
}

/**
 * Predefined rate limiters for common scenarios
 */
export const rateLimiters = {
  // Strict: 10 requests per minute (for sensitive operations)
  strict: createRateLimiter({ windowMs: 60000, maxRequests: 10 }),

  // Standard: 60 requests per minute (for most API endpoints)
  standard: createRateLimiter({ windowMs: 60000, maxRequests: 60 }),

  // Generous: 300 requests per minute (for public endpoints)
  generous: createRateLimiter({ windowMs: 60000, maxRequests: 300 }),

  // Per hour: 1000 requests per hour
  hourly: createRateLimiter({ windowMs: 3600000, maxRequests: 1000 }),
}
