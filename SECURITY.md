# Security Policy

## Overview

N3uralia implements a comprehensive security framework to protect user data, prevent vulnerabilities, and maintain system integrity.

## Security Measures Implemented

### 1. Dependency Management
- All npm dependencies are regularly updated to the latest secure versions
- Vulnerabilities are scanned using npm audit with `audit-level=moderate`
- Legacy peer dependencies are disabled to prevent insecure version resolution
- Critical security patches are applied immediately

### 2. TypeScript & Code Security
- Strict TypeScript compiler settings (`noImplicitAny`, `strictNullChecks`, etc.)
- ESLint rules enforce security best practices
- `eval()` and similar dangerous functions are blocked
- Console statements for logging are restricted to warnings/errors only

### 3. HTTP Headers & Content Security
- **X-Content-Type-Options**: `nosniff` - Prevents MIME-type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **X-XSS-Protection**: `1; mode=block` - Enables XSS protection in older browsers
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer information
- **Permissions-Policy**: Disables camera, microphone, and geolocation access
- **Content-Security-Policy**: Restricts script sources, prevents inline code execution

### 4. Rate Limiting
- All requests are rate-limited to 100 requests per minute per IP
- Rate limit exceeded returns HTTP 429 with retry-after header
- Protects against DDoS and brute force attacks

### 5. Authentication & Authorization
- Protected API routes require Bearer token authentication
- Tokens are validated against Supabase
- Invalid or expired tokens receive HTTP 401 response
- User context is passed securely through request headers

### 6. Image Optimization
- Images are served in WebP/AVIF formats for efficiency
- Remote images from approved domains only (blob.v0.app, hebbkx1anhila5yf.public.blob.vercel-storage.com)
- SVG content requires explicit CSP policy

### 7. Environment Variables
- All sensitive values stored in environment variables
- `.env` files are never committed to repository
- `.env.example` documents all required variables
- Environment validation on production startup

### 8. Internationalization
- Locale-based routing prevents path traversal attacks
- Only valid locales ('es', 'en') are accepted
- Locale detection respects Accept-Language header

## Vulnerability Response

If you discover a security vulnerability, please email security@n3uralia.com with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if available)

We will acknowledge receipt within 24 hours and provide updates on remediation.

## CVSS Score Tracking

All known vulnerabilities are tracked and mitigated:
- Critical (CVSS 9.0-10.0): Fixed within 24 hours
- High (CVSS 7.0-8.9): Fixed within 7 days
- Medium (CVSS 4.0-6.9): Fixed within 30 days
- Low (CVSS 0.1-3.9): Fixed in next release cycle

## Compliance

- SOC 2 Type II ready
- GDPR compliant data handling
- HIPAA compatible encryption
- ISO 27001 alignment

## Dependencies Update Schedule

- Minor/patch updates: Monthly
- Major updates: Quarterly review
- Security patches: Immediate

## Last Updated

February 26, 2026

## Support

For security-related questions, contact: security@n3uralia.com
