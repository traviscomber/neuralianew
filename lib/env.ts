/**
 * Environment Variables Validation Utility
 * Validates that all required environment variables are set and properly configured
 */

export interface EnvValidationResult {
  valid: boolean
  errors: string[]
  warnings: string[]
}

export interface RequiredEnvVar {
  name: string
  required: boolean
  description: string
  example?: string
}

const ENV_VARS: RequiredEnvVar[] = [
  // Core Supabase
  {
    name: 'NEXT_PUBLIC_SUPABASE_URL',
    required: true,
    description: 'Supabase project URL',
    example: 'https://xxxxx.supabase.co',
  },
  {
    name: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    required: true,
    description: 'Supabase anonymous key',
  },
  {
    name: 'SUPABASE_SERVICE_ROLE_KEY',
    required: true,
    description: 'Supabase service role key (secret)',
  },

  // OpenAI
  {
    name: 'OPENAI_API_KEY',
    required: true,
    description: 'OpenAI API key for chat and AI features',
  },

  // Email Service (Resend)
  {
    name: 'RESEND_API_KEY',
    required: false,
    description: 'Resend API key for email sending',
  },
  {
    name: 'RESEND_FROM_EMAIL',
    required: false,
    description: 'Email sender address',
    example: 'noreply@neuralia.ai',
  },
  {
    name: 'RESEND_FROM_NAME',
    required: false,
    description: 'Email sender name',
    example: 'N3uralia',
  },

  // Site Configuration
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    required: true,
    description: 'Public site URL',
    example: 'https://neuralia.ai',
  },

  // Analytics (optional)
  {
    name: 'NEXT_PUBLIC_GA_ID',
    required: false,
    description: 'Google Analytics ID',
  },
]

/**
 * Validate all environment variables
 */
export function validateEnvironmentVariables(
  environment: 'development' | 'production' = process.env.NODE_ENV as 'development' | 'production'
): EnvValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  for (const envVar of ENV_VARS) {
    const value = process.env[envVar.name]

    // Check if required variable is missing
    if (envVar.required && !value) {
      errors.push(`Missing required environment variable: ${envVar.name} - ${envVar.description}`)
    }

    // Check if optional variable is missing in production
    if (!envVar.required && !value && environment === 'production') {
      warnings.push(`Optional environment variable not set: ${envVar.name} - ${envVar.description}`)
    }

    // Validate URL format for SUPABASE_URL and SITE_URL
    if ((envVar.name === 'NEXT_PUBLIC_SUPABASE_URL' || envVar.name === 'NEXT_PUBLIC_SITE_URL') && value) {
      try {
        new URL(value)
      } catch {
        errors.push(`Invalid URL format for ${envVar.name}: "${value}"`)
      }
    }

    // Validate email format for RESEND_FROM_EMAIL
    if (envVar.name === 'RESEND_FROM_EMAIL' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        errors.push(`Invalid email format for ${envVar.name}: "${value}"`)
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  }
}

/**
 * Log validation results
 */
export function logValidationResults(result: EnvValidationResult, context = 'Startup'): void {
  if (result.errors.length > 0) {
    console.error(`[${context}] Environment validation FAILED:`)
    result.errors.forEach((error) => console.error(`  ❌ ${error}`))
  }

  if (result.warnings.length > 0) {
    console.warn(`[${context}] Environment validation WARNINGS:`)
    result.warnings.forEach((warning) => console.warn(`  ⚠️  ${warning}`))
  }

  if (result.valid && result.warnings.length === 0) {
    console.log(`[${context}] ✅ All environment variables validated successfully`)
  }
}

/**
 * Assert environment variables (throws on error)
 */
export function assertEnvironmentVariables(
  environment: 'development' | 'production' = process.env.NODE_ENV as 'development' | 'production'
): void {
  const result = validateEnvironmentVariables(environment)
  logValidationResults(result)

  if (!result.valid) {
    throw new Error(
      `Environment validation failed:\n${result.errors.map((e) => `  - ${e}`).join('\n')}`
    )
  }
}

/**
 * Get env variable with fallback
 */
export function getEnv(name: string, fallback?: string): string {
  const value = process.env[name]
  if (!value) {
    if (fallback !== undefined) {
      return fallback
    }
    throw new Error(`Environment variable ${name} is not set`)
  }
  return value
}

/**
 * Get env variable safely (returns null if not set)
 */
export function getEnvSafe(name: string): string | null {
  return process.env[name] || null
}
