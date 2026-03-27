#!/bin/bash
# Fix npm security vulnerabilities
npm audit fix --legacy-peer-deps
echo "✅ npm audit fix completed"
