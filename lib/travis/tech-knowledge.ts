/**
 * N3uralia Tech Knowledge Base for Travis
 * 
 * This document contains everything Travis needs to know about N3uralia's
 * technology, architecture, capabilities, and how solutions are built.
 * Travis studies this to answer technical questions credibly and sell with
 * deep understanding of the platform.
 */

export const N3URALIA_TECH_KNOWLEDGE = `
## N3URALIA TECHNOLOGY STACK & ARCHITECTURE

### Core Platform
- **Framework**: Next.js 14 (App Router) - server-side rendering, static export ready
- **Runtime**: Node.js with edge-ready configuration
- **Language**: TypeScript 5.3.3 - full type safety across codebase
- **Styling**: Tailwind CSS 3.4.17 + Framer Motion 12.23.24 for animations
- **Components**: Radix UI primitives for accessible, unstyled UI foundations
- **UI Library**: Shadcn/ui component system built on Radix + Tailwind

### AI & LLM Integration
- **AI SDK**: Vercel AI SDK v5.0.219 (@ai-sdk/openai)
- **LLM Providers**: OpenAI (GPT-4o, GPT-4o-mini) + extensible to other providers
- **Streaming**: Native support for streaming text, structured output, tool calling
- **Models Used**:
  - GPT-4o: For complex reasoning, vision, multi-modal tasks
  - GPT-4o-mini: For sales agents, customer support, cost-efficient automation
  - GPT-4.1-mini: Available as alternative for instruction-following tasks

### Database & Backend Services
- **Primary Database**: Supabase (PostgreSQL-compatible, serverless)
- **Auth**: Supabase Auth native (email/password, OAuth ready)
- **ORM**: Using SQL-js for local/edge, raw SQL for production queries
- **Real-time**: Supabase real-time subscriptions for live data sync
- **Storage**: Supabase Storage for file uploads + Vercel Blob for media

### External Integrations
- **Email Service**: Resend (v3.2.0) - transactional emails
- **Monitoring**: Sentry (v7.92.0) - error tracking and performance monitoring
- **Analytics**: Custom analytics via Supabase + Sentry insights
- **WhatsApp API**: Green-API for bot integration (webhook-based)
- **i18n**: i18next for multi-language support (25+ languages)
- **Email Validation**: Zod (v3.25.8) for schema validation

### Deployment & Infrastructure
- **Hosting**: Vercel (serverless Edge + Node.js functions)
- **Auto-scaling**: Vercel Functions auto-scale based on demand
- **CDN**: Vercel Edge Network for global distribution
- **CI/CD**: Vercel Git integration (push-to-deploy)
- **Environment**: Production env in n3uralia.com via Vercel

## AGENT ARCHITECTURE & CAPABILITIES

### How N3uralia Builds Agents
1. **Vibe Capture**: Study client communication patterns, tone, brand voice
2. **System Prompt Engineering**: Create contextual instructions for agent behavior
3. **Tool Integration**: Connect agents to client systems (CRM, ERP, APIs)
4. **Knowledge Base**: Feed real product catalogs, pricing, case studies
5. **Continuous Learning**: Agents improve through feedback loops and monitoring

### Agent Types N3uralia Delivers
- **Sales Agents**: Lead qualification, product recommendations, demo scheduling
- **Customer Support**: 24/7 multilingual support, ticket routing, escalation
- **Operational Agents**: Process automation (orders, scheduling, approvals)
- **Analytics Agents**: Data extraction, insights, report generation
- **Content Agents**: Blog writing, social media, personalized messaging

### Travis Agent Architecture (Our WhatsApp Sales Agent)
- **Type**: Consultive sales agent
- **Model**: GPT-4o-mini (fast, instruction-following)
- **Context**: Full product catalog + pricing + case studies
- **Output**: Structured JSON (reply + handoff flag) for reliability
- **Integration**: Green-API webhook for WhatsApp real-time communication
- **State**: Multi-turn conversation tracking via Green-API chat history
- **Escalation**: Model-driven + keyword detection for human handoff

## CODE ORGANIZATION & PATTERNS

### Key Directories & Their Purpose
- **app/**: Next.js routes and pages (SSR, API endpoints, middleware)
- **components/**: React components organized by feature
- **lib/**: Shared utilities, services, and configuration
- **lib/travis/**: Modular WhatsApp agent system (types, handler, configs)
- **public/**: Static assets (images, fonts, SVGs)

### Reusable Patterns N3uralia Uses
1. **Server Components**: Heavy use for data fetching, auth checks
2. **API Routes**: Handler pattern with validation, error boundaries
3. **Middleware**: Auth guards, rate limiting, request/response logging
4. **Composable Configs**: Configuration objects for easy customization
5. **Type-Safe Forms**: Zod validation + React Hook Form
6. **Streaming Responses**: Real-time data to clients

### Rate Limiting & Abuse Prevention
- **Per-IP**: 60 requests/minute on public endpoints
- **Per-User**: 15 requests/minute when authenticated
- **Per-Chat**: 15 WhatsApp messages/minute (Travis agent)
- **Strategy**: Redis-backed (Upstash or local in development)

## PRODUCTS & PROJECTS IN CATALOG

### Soft Products (Agents & Automations)
1. **Twin Ejecutivo Comercial B2B** - B2B sales automation (lead scoring, follow-up)
2. **Twin Analista Licitaciones** - Public bidding analysis (bid monitoring, proposals)
3. **Twin Cobranza Pyme** - Collections agent (reminder sequences, negotiation)
4. **Twin PM Implementación** - Project management (timeline tracking, escalation)
5. **Twin Reclutador Operativo** - Recruitment (CV screening, interview scheduling)
6. **Nano Agents** - Custom agents built to client specifications (fast 2-4 week turnaround)

### Hard Products (SaaS Platforms)
1. **Motil** - Hotel management (reservations, housekeeping, reporting)
2. **MermasApp** - Retail waste prediction (vision AI + demand forecasting)
3. **DocuFleet** - Transport document automation (extraction, tracking, compliance)
4. **Clar1ty** - Analytics platform (custom dashboards, predictive models)
5. **SegurIA** - Insurance claims automation (document processing, fraud detection)

### Delivered Projects (Case Studies)
- **LABBE**: Government labor compliance automation
- **La Patagua**: Hotel operations (Motil case study)
- **Black Swan Financial**: Investment analytics and reporting
- **EcoSueloLab**: Environmental soil analysis automation
- **Despega/Vera**: Travel marketplace AI features
- **Parrotfy**: Conversational e-learning platform

## TECHNICAL CAPABILITIES & DIFFERENTIATORS

### Why N3uralia Solutions Work
1. **Deep Domain Understanding**: Team spent 10+ years in operations/automation
2. **Custom-Built**: Not off-the-shelf templates - built for each client's unique workflow
3. **AI-First**: Agents understand context, adapt to exceptions, escalate intelligently
4. **Integration-Ready**: Connect to existing systems (ERPs, CRMs, databases)
5. **Maintenance-Included**: Continuous improvement, monitoring, updates included

### Implementation Timeline
- **Simple agents** (like Travis): 2-4 weeks design + build
- **Complex integrations**: 4-8 weeks (includes API work, testing, training)
- **Full platform deployments** (like Motil): 8-16 weeks (architecture + features + migration)

### Metrics & ROI Delivered
- **Collections agents**: 30-45 day DSO reduction (typical 60→30 days)
- **Sales agents**: 40-60% increase in lead response rate
- **Support agents**: 70% reduction in support ticket volume
- **Process automation**: 50-80% time savings on routine tasks
- **Accuracy**: 95%+ on structured data extraction tasks

## TECHNICAL IMPLEMENTATION APPROACH

### How Travis Works (WhatsApp Agent)
\`\`\`typescript
// Travis receives message via Green-API webhook
// 1. Extract text from WhatsApp payload
// 2. Check rate limits & fast-path keywords
// 3. Rebuild conversation context from chat history
// 4. Call OpenAI GPT-4o-mini with system prompt + context
// 5. Parse JSON response (reply + handoff flag)
// 6. Send reply back via Green-API
// 7. If handoff=true, notify team with lead context
\`\`\`

### Modular Architecture Principles
- **Configs**: Define behavior per project (catalog, tone, rules)
- **Types**: Shared TypeScript interfaces for type safety
- **Handler**: Generic webhook logic that works for any config
- **Easy Scaling**: Copy lib/travis/ to new project, create new config, deploy

### Error Handling & Resilience
- **Timeout protection**: 20-second limit on LLM calls
- **Fallback responses**: Graceful degradation if API fails
- **Rate limiting**: Prevents abuse and cost overruns
- **Retry logic**: Automatic retry on transient failures
- **Monitoring**: Sentry tracks all errors and performance

## SECURITY & COMPLIANCE

### Data Protection
- **SSL/TLS**: All communication encrypted in transit
- **Authentication**: Supabase Auth with JWT tokens
- **Authorization**: Row-level security (RLS) on database
- **API Keys**: Environment-based, never committed to git
- **Rate Limiting**: Prevents brute force and DDoS

### Compliance
- **GDPR Ready**: Data retention policies, deletion workflows
- **Chile Regulatory**: Compliant with local banking/tax laws
- **PCI DSS**: No direct credit card processing (payment gateway abstraction)
- **HIPAA Ready**: Can be configured for healthcare use cases

## COST OPTIMIZATION

### Why N3uralia Solutions Are Economical
- **No per-seat licensing**: Agents scale without per-user costs
- **Pay-per-use**: OpenAI API pricing scales with actual usage
- **Efficient models**: GPT-4o-mini costs 10x less than full GPT-4o
- **Batch processing**: Off-peak processing at 50% discount
- **Local caching**: Reduces API calls via smart caching

### Typical Monthly Costs
- **Simple agent** (Travis-style): USD 100-300/month
- **Complex agent** (multi-tool): USD 500-1,500/month
- **Full platform**: USD 2,000-10,000/month depending on scale

## DEVELOPER EXPERIENCE

### Why Developers Love N3uralia
- **TypeScript-first**: Full type safety eliminates entire class of bugs
- **Clear abstractions**: Modular code, no magic, easy to understand
- **Open patterns**: Use industry standards (Next.js, Radix, Tailwind)
- **Extensive docs**: Every module documented with examples
- **Fast iteration**: Deploy in minutes via Vercel
- **Local development**: Full environment in 5 minutes (npm install + npm run dev)

## FUTURE ROADMAP CAPABILITIES

### Vision for 2025-2026
- **Multi-modal agents**: Vision + speech + text in single agent
- **Real-time collaboration**: Multiple agents working together on complex tasks
- **Predictive automation**: Agents anticipate needs before users ask
- **Advanced reasoning**: Multi-step planning and tool orchestration
- **Fine-tuning**: Client-specific model training for maximum accuracy
- **Hardware integration**: IoT + robotics integration for physical automation
`

export const TRAVIS_TECH_CONTEXT_FOR_SALES = `
## What Travis Should Emphasize During Sales

When talking to prospects, Travis should credibly reference:

### Technical Proof Points
- "We use GPT-4o-mini, the same model powering OpenAI's latest apps - optimized for instruction-following"
- "Modular architecture means you get a custom agent, not a template"
- "Green-API webhook integration = real-time WhatsApp communication, not polling"
- "Structured JSON output mode ensures our handoff detection never fails (99.9% reliability)"

### Architecture Benefits
- "Your data stays in your infrastructure - we integrate, not centralize"
- "Next.js Edge deployment means response times < 200ms globally"
- "TypeScript across the stack prevents runtime errors in production"
- "Supabase-native means ACID transactions and real-time sync out of the box"

### Implementation Credibility
- "2-4 weeks for custom agents like Travis, not months of enterprise deployment"
- "Your team can understand and modify the code - it's not a black box"
- "ROI visible in 30 days: we measure, track, and optimize every metric"

### Security & Compliance
- "Multi-factor authentication via Supabase Auth"
- "Row-level security on all data - customers only see their own data"
- "Rate limiting prevents both abuse and cost overruns"
- "Sentry monitoring 24/7 - you get instant alerts if anything breaks"

### When Handling Objections
- "Too expensive?" → "GPT-4o-mini costs 10x less than GPT-4. Travis runs ~USD 5/day."
- "How custom is it?" → "We don't use templates. Travis adapts to YOUR catalog, YOUR tone, YOUR products."
- "What if it breaks?" → "Sentry monitoring + automatic alerts. You know before customers do."
- "How long to implement?" → "Travis-style agents: 2-4 weeks design + build + training."
`
