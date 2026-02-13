#!/usr/bin/env node

/**
 * Environment Variables Validation Script
 * Run locally before deployment to ensure all required variables are set
 * 
 * Usage: npx ts-node scripts/validate-env.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface EnvVar {
  name: string
  required: boolean
  description: string
  example?: string
  section: 'core' | 'email' | 'analytics' | 'optional'
}

const ENV_VARS: EnvVar[] = [
  // Core Services
  {
    name: 'NEXT_PUBLIC_SUPABASE_URL',
    required: true,
    description: 'Supabase project URL',
    example: 'https://xxxxx.supabase.co',
    section: 'core',
  },
  {
    name: 'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    required: true,
    description: 'Supabase anonymous key',
    section: 'core',
  },
  {
    name: 'SUPABASE_SERVICE_ROLE_KEY',
    required: true,
    description: 'Supabase service role key (should be secret)',
    section: 'core',
  },
  {
    name: 'OPENAI_API_KEY',
    required: true,
    description: 'OpenAI API key for chat and AI features',
    section: 'core',
  },
  {
    name: 'NEXT_PUBLIC_SITE_URL',
    required: true,
    description: 'Public site URL',
    example: 'https://neuralia.ai',
    section: 'core',
  },

  // Email Service
  {
    name: 'RESEND_API_KEY',
    required: false,
    description: 'Resend API key for email sending',
    section: 'email',
  },
  {
    name: 'RESEND_FROM_EMAIL',
    required: false,
    description: 'Email sender address',
    example: 'noreply@neuralia.ai',
    section: 'email',
  },
  {
    name: 'RESEND_FROM_NAME',
    required: false,
    description: 'Email sender name',
    example: 'N3uralia',
    section: 'email',
  },

  // Analytics
  {
    name: 'NEXT_PUBLIC_GA_ID',
    required: false,
    description: 'Google Analytics ID',
    section: 'analytics',
  },

  // Optional
  {
    name: 'SENTRY_DSN',
    required: false,
    description: 'Sentry error tracking DSN',
    section: 'optional',
  },
]

const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
}

function colorize(text: string, color: keyof typeof colors): string {
  return `${colors[color]}${text}${colors.reset}`
}

function loadEnvFiles(): void {
  const envFiles = ['.env.local', '.env', '.env.example']

  for (const file of envFiles) {
    const filePath = path.join(process.cwd(), file)
    if (fs.existsSync(filePath)) {
      console.log(colorize(`✓ Found ${file}`, 'green'))
    }
  }
}

function validateVariables(): { valid: boolean; errors: string[]; warnings: string[] } {
  const errors: string[] = []
  const warnings: string[] = []

  for (const envVar of ENV_VARS) {
    const value = process.env[envVar.name]

    if (envVar.required && !value) {
      errors.push(`Missing required: ${envVar.name}`)
    } else if (!envVar.required && !value) {
      warnings.push(`Optional not set: ${envVar.name}`)
    } else if (value) {
      // Validate format
      if (envVar.name.includes('URL')) {
        try {
          new URL(value)
        } catch {
          errors.push(`Invalid URL for ${envVar.name}: "${value}"`)
        }
      }

      if (envVar.name.includes('EMAIL')) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          errors.push(`Invalid email for ${envVar.name}: "${value}"`)
        }
      }
    }
  }

  return { valid: errors.length === 0, errors, warnings }
}

function printReport(validation: { valid: boolean; errors: string[]; warnings: string[] }): void {
  console.log('\n' + '='.repeat(60))
  console.log(colorize('Environment Variables Validation Report', 'cyan'))
  console.log('='.repeat(60) + '\n')

  // Group by section
  const sections: Record<string, EnvVar[]> = {
    core: [],
    email: [],
    analytics: [],
    optional: [],
  }

  for (const envVar of ENV_VARS) {
    sections[envVar.section].push(envVar)
  }

  for (const [section, vars] of Object.entries(sections)) {
    if (vars.length === 0) continue

    console.log(colorize(`\n${section.toUpperCase()} VARIABLES`, 'blue'))
    console.log('-'.repeat(60))

    for (const envVar of vars) {
      const value = process.env[envVar.name]
      const status = value ? colorize('✓', 'green') : colorize('✗', 'red')
      const required = envVar.required ? ' [REQUIRED]' : ' [OPTIONAL]'

      console.log(
        `${status} ${envVar.name.padEnd(35)} ${envVar.description}${required}`
      )

      if (!value && envVar.example) {
        console.log(`${colorize('→ Example:', 'gray')} ${envVar.example}`)
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  if (validation.valid) {
    console.log(colorize('✓ ALL REQUIRED VARIABLES ARE SET', 'green'))
  } else {
    console.log(colorize(`✗ ${validation.errors.length} ERRORS FOUND`, 'red'))
    validation.errors.forEach((error) => {
      console.log(`  ${colorize('•', 'red')} ${error}`)
    })
  }

  if (validation.warnings.length > 0) {
    console.log(
      `\n${colorize('⚠', 'yellow')} ${validation.warnings.length} optional variables not set`
    )
  }

  console.log('='.repeat(60) + '\n')
}

// Run validation
console.log(colorize('Loading environment files...', 'cyan'))
loadEnvFiles()

const validation = validateVariables()
printReport(validation)

// Exit with appropriate code
process.exit(validation.valid ? 0 : 1)
