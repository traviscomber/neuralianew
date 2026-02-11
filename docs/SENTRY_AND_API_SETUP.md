# Sentry Error Monitoring & API Documentation Setup

## Quick Start

### 1. Enable Sentry Error Monitoring

**Environment Variables Required:**
```
SENTRY_DSN=your_sentry_dsn_here
NODE_ENV=production  # Enables Sentry in production
```

**Get your DSN:**
1. Go to https://sentry.io
2. Create a new project (Node.js/Next.js)
3. Copy the DSN value
4. Add it to your environment variables

### 2. Sentry Integration Points

The system automatically captures:

**Automatic:**
- Unhandled exceptions
- Unhandled promise rejections
- API route errors
- Database connection issues
- Performance metrics

**Manual:**
Use in your code:
```typescript
import { captureException, setUser, addBreadcrumb } from '@/lib/sentry'

// Track errors
try {
  // your code
} catch (error) {
  captureException(error, { context: 'important_operation' })
}

// Track user actions
setUser('user-123', 'user@example.com', 'username')

// Add breadcrumbs for debugging
addBreadcrumb('User initiated important action', { action: 'deploy' })
```

### 3. API Versioning

All API routes now use versioning: `/api/v1/*`

**Current Endpoints:**
- `GET /api/v1/health` - System health check
- `GET/POST /api/v1/living-agents` - Agent management
- `POST /api/v1/chat` - Conversational AI
- `POST /api/v1/analytics` - Event tracking
- See `/api-docs` for full documentation

**Versioning Strategy:**
- Current version: `v1`
- Breaking changes → new version (`v2`, etc.)
- New features → added to current version
- Deprecations announced in headers

### 4. API Documentation

**Interactive Documentation:**
- URL: `/api-docs`
- Includes endpoint details, examples, and playground

**OpenAPI Schema:**
- URL: `/api/v1/docs/openapi`
- Format: OpenAPI 3.0.0 JSON
- Use for client generation or integration

### 5. Monitor Errors

**Access Error Dashboard:**
- Local: `/error-tracking`
- Production: View in Sentry dashboard

**Error Tracking Metrics:**
- Total errors (lifetime)
- Errors in last 24 hours
- Error rate per 1000 requests
- Recent error details with context

### 6. Route Protection with Error Handling

Example route with error handling:

```typescript
import { withErrorBoundary } from '@/lib/sentry-middleware'
import { withAuth } from '@/lib/api-auth'
import { captureException } from '@/lib/sentry'
import { NextRequest, NextResponse } from 'next/server'

async function handler(req: NextRequest) {
  try {
    const user = await withAuth(req)
    
    // Your logic here
    
    return NextResponse.json({ status: 'success', data: {} })
  } catch (error) {
    captureException(error)
    return NextResponse.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const POST = withErrorBoundary(handler)
```

### 7. Performance Monitoring

Sentry automatically tracks:
- API response times
- Database query duration
- Transaction traces
- Memory usage

**View Performance:**
1. Go to Sentry dashboard
2. Performance → Transactions
3. Click on endpoints to see details

### 8. Production Checklist

Before deploying to production:

- [ ] `SENTRY_DSN` environment variable set
- [ ] Test error capturing: `/api/test-error`
- [ ] Verify API docs at `/api-docs`
- [ ] Check health endpoint: `/api/v1/health`
- [ ] Review error dashboard: `/error-tracking`
- [ ] Set up Sentry alerts and notifications
- [ ] Configure log retention policies
- [ ] Test rate limiting under load

### 9. Useful Sentry Features

**Alerts:**
1. Go to Alerts in Sentry
2. Create alert: "When a new issue is created"
3. Set notification: Email/Slack
4. Done! You'll be notified of new errors

**Release Tracking:**
```typescript
import * as Sentry from '@sentry/nextjs'

Sentry.captureMessage('Deployment v1.2.3', 'info')
```

**Source Maps:**
Already configured for Next.js. Sentry automatically receives and processes them.

### 10. Integration with API Routes

All routes can now use:

```typescript
import { withErrorBoundary } from '@/lib/sentry-middleware'
import { withAuth } from '@/lib/api-auth'

export const GET = withErrorBoundary(async (req) => {
  const user = await withAuth(req)
  // Route logic
})
```

Benefits:
- Automatic error tracking
- Performance monitoring
- Auth validation
- Rate limiting
- Standardized responses

## API Schema Locations

- **Schema definitions**: `/lib/api-schema.ts`
- **OpenAPI generator**: `/lib/openapi-generator.ts`
- **Sentry integration**: `/lib/sentry.ts`
- **Sentry middleware**: `/lib/sentry-middleware.ts`
- **API auth helpers**: `/lib/api-auth.ts`

## Next Steps

1. Add `SENTRY_DSN` to production environment
2. Test error capture with a test route
3. Set up Sentry alerts and notifications
4. Train team on using error tracking dashboard
5. Monitor and optimize based on error patterns
6. After RLS: Add detailed error context for database security
