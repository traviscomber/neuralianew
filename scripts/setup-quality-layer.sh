#!/bin/bash
# Agent Quality Layer - Universal Setup Script
# Use this to setup quality layer on ANY project
# 
# Usage: bash scripts/setup-quality-layer.sh [project-name]
#
# This script:
# 1. Installs dependencies (husky, nano-staged, prettier)
# 2. Initializes git hooks
# 3. Creates configuration files
# 4. Sets up validation scripts

set -e

PROJECT_NAME="${1:-.}"
echo "Setting up Agent Quality Layer for: $PROJECT_NAME"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}1. Installing dependencies...${NC}"
if command -v pnpm &> /dev/null; then
  pnpm install husky nano-staged prettier --save-dev
elif command -v npm &> /dev/null; then
  npm install husky nano-staged prettier --save-dev
else
  echo "Error: pnpm or npm not found"
  exit 1
fi

echo -e "${BLUE}2. Initializing husky...${NC}"
if [ ! -d ".husky" ]; then
  pnpm husky install || npm run husky install
fi

echo -e "${BLUE}3. Copying configuration files...${NC}"

# .nano-staged.json
cat > .nano-staged.json << 'EOF'
{
  "**/*.{ts,tsx,js,jsx}": [
    "eslint",
    "prettier --write",
    "node scripts/check-design-tokens.js",
    "node scripts/check-mock-data.js",
    "node scripts/remove-console-logs.js"
  ],
  "**/*.{json,md,css,scss}": [
    "prettier --write"
  ],
  "**/*.{ts,tsx}": [
    "pnpm typecheck || npm run typecheck"
  ]
}
EOF

# .prettierrc
cat > .prettierrc << 'EOF'
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid"
}
EOF

# .prettierignore
cat > .prettierignore << 'EOF'
node_modules
.next
dist
build
coverage
.vercel
.env*
*.lock
*.md
EOF

# .husky/pre-commit
mkdir -p .husky
cat > .husky/pre-commit << 'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm agent:check || npm run agent:check
EOF
chmod +x .husky/pre-commit

echo -e "${BLUE}4. Creating validation scripts...${NC}"
mkdir -p scripts

# check-design-tokens.js
cat > scripts/check-design-tokens.js << 'EOF'
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Hardcoded color patterns to reject (adjust per project)
const FORBIDDEN_COLORS = [
  /bg-red-\d+/,
  /bg-blue-\d+/,
  /bg-green-\d+/,
  /bg-yellow-\d+/,
  /bg-pink-\d+/,
  /text-red-\d+/,
  /text-blue-\d+/,
];

const ALLOWED_COLORS = [
  /bg-primary/,
  /bg-secondary/,
  /bg-background/,
  /text-foreground/,
  /text-muted/,
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let hasErrors = false;

  lines.forEach((line, index) => {
    // Skip comments
    if (line.trim().startsWith('//') || line.trim().startsWith('/*')) return;

    FORBIDDEN_COLORS.forEach(pattern => {
      if (pattern.test(line)) {
        // Check if it's allowed (design token)
        const isAllowed = ALLOWED_COLORS.some(allowed => allowed.test(line));
        if (!isAllowed && !line.includes('// allow-design-color')) {
          console.error(
            `❌ Design token violation in ${filePath}:${index + 1}\n   Use design tokens (bg-primary, text-foreground) instead of hardcoded colors\n   Line: ${line.trim()}`
          );
          hasErrors = true;
        }
      }
    });
  });

  return hasErrors;
}

// Check staged files
const stagedFiles = process.argv.slice(2);
let totalErrors = 0;

stagedFiles.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
    if (checkFile(file)) totalErrors++;
  }
});

if (totalErrors > 0) {
  console.error(`\n⚠️  Found ${totalErrors} design token violations`);
  process.exit(1);
}

console.log('✓ Design tokens check passed');
EOF

# check-mock-data.js
cat > scripts/check-mock-data.js << 'EOF'
#!/usr/bin/env node
const fs = require('fs');

const MOCK_PATTERNS = [
  /const\s+MOCK_/,
  /const\s+TEST_/,
  /password\s*=\s*["'].*["']/,
  /api_key\s*=\s*["'].*["']/,
  /secret\s*=\s*["'].*["']/,
  /\/\/\s*TODO:/,
  /\/\/\s*FIXME:/,
];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let hasWarnings = false;

  lines.forEach((line, index) => {
    MOCK_PATTERNS.forEach(pattern => {
      if (pattern.test(line) && !line.includes('// allow-mock')) {
        console.warn(
          `⚠️  Potential mock/test data in ${filePath}:${index + 1}\n   ${line.trim()}`
        );
        hasWarnings = true;
      }
    });
  });

  return hasWarnings;
}

const stagedFiles = process.argv.slice(2);
let hasWarnings = false;

stagedFiles.forEach(file => {
  if ((file.endsWith('.ts') || file.endsWith('.tsx')) && checkFile(file)) {
    hasWarnings = true;
  }
});

if (hasWarnings) {
  console.log('⚠️  Found potential mock/test data - review before committing');
}
EOF

# remove-console-logs.js
cat > scripts/remove-console-logs.js << 'EOF'
#!/usr/bin/env node
const fs = require('fs');

const CONSOLE_PATTERNS = [
  /console\.log\(\s*\["?\w+"\].*\);?/g,
  /console\.debug\(.*\);?/g,
  /debugger;?/g,
];

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  CONSOLE_PATTERNS.forEach(pattern => {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✓ Cleaned debug statements from ${filePath}`);
  }

  return modified;
}

const stagedFiles = process.argv.slice(2);

stagedFiles.forEach(file => {
  if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx')) {
    cleanFile(file);
  }
});
EOF

echo -e "${BLUE}5. Updating package.json scripts...${NC}"
# This assumes package.json exists - user should verify
if grep -q '"typecheck"' package.json; then
  echo "✓ typecheck script already exists"
else
  echo "⚠️  Add to package.json scripts: \"typecheck\": \"tsc --noEmit\""
fi

if grep -q '"agent:check"' package.json; then
  echo "✓ agent:check script already exists"
else
  echo "⚠️  Add to package.json scripts: \"agent:check\": \"nano-staged --unstaged --quiet --bail\""
fi

echo -e "${GREEN}Setup complete! ✅${NC}"
echo ""
echo "Next steps:"
echo "1. Update package.json - Add missing scripts"
echo "2. Create AGENTS.md - Document your project's vision and standards"
echo "3. Adjust .nano-staged.json - Customize validation rules"
echo "4. Run: pnpm agent:check (test the setup)"
echo ""
echo "Documentation: AGENT_QUALITY_LAYER.md"
