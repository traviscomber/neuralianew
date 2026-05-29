#!/usr/bin/env node

/**
 * Mock Data Detector
 * Prevents fake/mock data from reaching production
 * Looks for TODO, FIXME, mock, fake, hardcoded test data
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const SUSPICIOUS_PATTERNS = [
  { pattern: /\/\/\s*TODO.*mock/i, type: 'TODO mock' },
  { pattern: /\/\/\s*FIXME.*mock/i, type: 'FIXME mock' },
  { pattern: /const\s+MOCK_/i, type: 'MOCK constant' },
  { pattern: /const\s+FAKE_/i, type: 'FAKE constant' },
  { pattern: /password\s*:\s*['"][^'"]*['"](?!.*production|env)/i, type: 'Hardcoded password' },
  { pattern: /test_/i, type: 'Test data in production' },
]

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const errors = []

    SUSPICIOUS_PATTERNS.forEach(({ pattern, type }) => {
      let match
      const regex = new RegExp(pattern.source, 'gm')

      while ((match = regex.exec(content)) !== null) {
        const line = content.substring(0, match.index).split('\n').length
        errors.push({
          file: filePath,
          line,
          type,
          snippet: match[0].substring(0, 50),
        })
      }
    })

    return errors
  } catch {
    return []
  }
}

try {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
    encoding: 'utf-8',
  })

  const files = output.trim().split('\n').filter((f) => f.length > 0)

  let allErrors = []

  files.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    const errors = checkFile(filePath)
    allErrors = allErrors.concat(errors)
  })

  if (allErrors.length > 0) {
    console.error('\n⚠️  Potential mock/test data found:\n')
    allErrors.forEach(({ file, line, type, snippet }) => {
      console.error(`  ${file}:${line} [${type}]`)
      console.error(`    "${snippet}..."\n`)
    })
    console.warn('Review the above before committing to production.\n')
  }

  console.log('✅ Mock data check completed')
} catch (error) {
  console.error('Error running mock data check:', error.message)
  process.exit(1)
}
