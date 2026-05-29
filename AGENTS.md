# N3uralia Agent Context & Quality Standards

## Product Vision

N3uralia is a production-ready agentic systems platform for enterprises in Chile and LATAM. We build AI that works **with** humans, not replacing them. Our focus is on reliability, scalability, and measurable business impact.

## Core Principles

1. **No mock data in production flows** - All data must be persisted and queryable
2. **Type-safe by default** - TypeScript errors block commits
3. **Accessible & responsive** - All pages tested on mobile, tablet, desktop
4. **Locale-aware** - Spanish (es) and English (en) with proper lang attributes
5. **SEO-first** - Canonical URLs, JSON-LD schemas, proper metadata
6. **Security-hardened** - Rate limiting, auth guards, no secrets in code
7. **Performance-conscious** - Optimized builds, proper image handling, code splitting
8. **Psychologically safe** - For conversational agents (DTC, coaching platforms): behavioral safety protocols, risk detection, no harmful reinforcement

## Architecture Standards

### Database & State
- All user-facing data persists to Supabase
- Session management via Better Auth
- No localStorage for critical data
- Document relationships: user_id → module_id → journey_day → document_id

### API & Routes
- Public routes: `/api/health`, `/api/chat`, `/api/send-email`
- Protected routes require Bearer token authentication
- Rate limiting: 100 req/min (general), 5 req/min (email endpoints)
- All endpoints return proper HTTP status codes

### UI & Components
- Design tokens define all colors, spacing, typography
- No hardcoded colors outside design system
- Responsive design: mobile-first approach
- Accessibility: semantic HTML, ARIA roles, keyboard navigation

### Code Quality
- No TypeScript errors or unused imports
- No ESLint warnings
- Prettier formatting enforced
- Commit messages follow conventional commits

## Automation Rules (Non-Negotiable)

These rules are **executed by hooks**, not just documented:

### Lint & Format
- `eslint` runs on all `.ts` and `.tsx` files
- `prettier` formats code and config files
- `tsc --noEmit` validates all TypeScript

### Pre-Commit Gates
- All staged changes must pass linting
- TypeScript must compile with zero errors
- No console.log debug statements in production
- No sensitive data (API keys, tokens) in commits

### Agent Quality Layer
- Runs automatically when agent task completes
- Blocks commits with linting/type errors
- Auto-fixes formatting issues
- Provides detailed error reports

## When Editing Pages or Components

✅ DO:
- Follow existing component patterns
- Use design tokens for colors/spacing
- Test on mobile viewport
- Write semantic HTML
- Add proper metadata to new pages

❌ DON'T:
- Hardcode colors or spacing values
- Leave TypeScript errors
- Create responsive-only designs (mobile-first)
- Use mock data in production flows
- Leave console.log statements
- Change route structure without updating redirects

## File Structure Standards

```
/app
  /[locale]              # Locale-aware routing
    /layout.tsx          # Root with lang attribute
    /page.tsx            # Homepage
    /api                 # API routes
    /admin               # Protected routes

/components              # Reusable components
  /ui                    # UI primitives
  /layout                # Layout components
  /forms                 # Form components

/lib
  /utils                 # Utilities
  /schema                # Zod schemas
  /supabase              # Database client

/styles
  /globals.css           # Global styles + design tokens
```

## For Agents Working on This Project

1. **Read the code first** - Understand existing patterns before writing new code
2. **Follow the type system** - Use TypeScript interfaces, not `any`
3. **Test responsively** - Check mobile, tablet, desktop layouts
4. **Update documentation** - Keep this file accurate
5. **Run quality checks** - Always run `pnpm agent:check` before completing
6. **Psychology-aware** - For conversational features (chat, coaching), follow DTC_BEHAVIORAL_SAFETY_LAYER standards

The system will **block your commits** if code doesn't meet standards. This is a feature, not a limitation - it ensures production quality.

For behavioral safety details: See `v0_memories/user/DTC_BEHAVIORAL_SAFETY_LAYER.md`
