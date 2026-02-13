/**
 * Instrumentation Hook - Runs on server startup
 * Validates environment variables and initializes critical services
 */

import { validateEnvironmentVariables, logValidationResults } from '@/lib/env'

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Validate environment variables on startup
    const validation = validateEnvironmentVariables(
      process.env.NODE_ENV as 'development' | 'production'
    )

    logValidationResults(validation, 'Server Startup')

    if (!validation.valid && process.env.NODE_ENV === 'production') {
      console.error('[CRITICAL] Environment validation failed in production. Server will not start.')
      process.exit(1)
    }

    // Log startup info
    console.log(`
╔════════════════════════════════════════════╗
║         N3uralia Server Starting            ║
╠════════════════════════════════════════════╣
║ Environment: ${(process.env.NODE_ENV || 'development').padEnd(25)} ║
║ Region: ${(process.env.VERCEL_REGION || 'local').padEnd(29)} ║
║ Timestamp: ${new Date().toISOString().padEnd(24)} ║
╚════════════════════════════════════════════╝
    `)
  }
}
