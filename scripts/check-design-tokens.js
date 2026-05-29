#!/usr/bin/env node

/**
 * Design Token Validator
 * Prevents hardcoded colors outside the design system
 * Checks: no bg-{color-name}, no text-{color-name} with arbitrary values
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Colors that are allowed (from design tokens)
const ALLOWED_COLORS = [
  'background',
  'foreground',
  'primary',
  'secondary',
  'destructive',
  'muted',
  'accent',
  'chart',
  // Don't allow arbitrary colors like bg-red-500, text-blue-400, etc.
]

// Patterns to catch
const FORBIDDEN_PATTERNS = [
  /bg-\w+-\d+/g, // bg-red-500, bg-blue-400
  /text-\w+-\d+/g, // text-blue-600, text-gray-700
  /border-\w+-\d+/g, // border-green-300
  /from-\w+-\d+/g, // from-yellow-200
  /to-\w+-\d+/g, // to-purple-400
]

const EXCEPTIONS = [
  'opacity',
  'slate',
  'foreground',
  'background',
  'primary',
]

function checkFile(filePath) {
  if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return []

  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const errors = []

    FORBIDDEN_PATTERNS.forEach((pattern) => {
      let match
      while ((match = pattern.exec(content)) !== null) {
        const color = match[0]
        const isException = EXCEPTIONS.some((exc) => color.includes(exc))

        if (!isException) {
          const line = content.substring(0, match.index).split('\n').length
          errors.push({
            file: filePath,
            line,
            match: color,
            message: `Hardcoded color "${color}" found. Use design tokens instead (bg-primary, text-foreground, etc).`,
          })
        }
      }
    })

    return errors
  } catch {
    return []
  }
}

// Get all modified files
try {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
    encoding: 'utf-8',
  })

  const files = output
    .trim()
    .split('\n')
    .filter((f) => (f.endsWith('.tsx') || f.endsWith('.ts')) && f.length > 0)

  let allErrors = []

  files.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    const errors = checkFile(filePath)
    allErrors = allErrors.concat(errors)
  })

  if (allErrors.length > 0) {
    console.error('\n❌ Design token violations found:\n')
    allErrors.forEach(({ file, line, message }) => {
      console.error(`  ${file}:${line} - ${message}`)
    })
    process.exit(1)
  }

  console.log('✅ Design tokens check passed')
} catch (error) {
  console.error('Error running design token check:', error.message)
  process.exit(1)
}
