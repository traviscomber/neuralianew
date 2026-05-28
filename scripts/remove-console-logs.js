#!/usr/bin/env node

/**
 * Console Log Remover
 * Removes debug console.log statements before production build
 * Keeps: console.error, console.warn, console.info (for intentional logging)
 */

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

function removeConsoleLogs(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8')
    const originalContent = content

    // Remove console.log but keep other console methods
    // Pattern: console.log([v0] or just console.log
    content = content.replace(/\s*console\.log\(\["?\[?v0\]?"?[^)]*\);?\n/g, '')
    content = content.replace(/\s*console\.log\([^)]*\);?\n/g, '')

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content)
      return 1
    }
    return 0
  } catch {
    return 0
  }
}

try {
  const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
    encoding: 'utf-8',
  })

  const files = output
    .trim()
    .split('\n')
    .filter((f) => (f.endsWith('.ts') || f.endsWith('.tsx')) && f.length > 0)

  let totalRemoved = 0

  files.forEach((file) => {
    const filePath = path.join(process.cwd(), file)
    const removed = removeConsoleLogs(filePath)
    totalRemoved += removed
  })

  if (totalRemoved > 0) {
    console.log(`✅ Removed ${totalRemoved} console.log() calls`)
  } else {
    console.log('✅ No console.log() calls found')
  }
} catch (error) {
  console.error('Error removing console logs:', error.message)
  process.exit(1)
}
