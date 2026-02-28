#!/bin/bash

# This script cleans up git corruption by removing malformed objects
# Run this locally in your repository to fix the build error

set -e

echo "Starting git corruption cleanup..."

# Remove all reflog entries
git reflog expire --expire=now --all

# Aggressively prune pack files and loose objects
git gc --aggressive --prune=now

# Verify repository integrity
echo "Verifying repository integrity..."
git fsck --full

echo "Git cleanup complete!"
echo "You can now push the cleaned state:"
echo "  git push -f origin v0/travis-2540-dc280fa7"
