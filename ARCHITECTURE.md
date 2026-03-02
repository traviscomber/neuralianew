# Architecture Overview - N3uralia Site v2

## Data Flow Diagram

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                    UNIFIED CONTENT LAYER                    │
├─────────────────────────────────────────────────────────────┤
│  /content/dictionaries.ts    │    /content/caseStudies.ts   │
│  ├─ es: { nav, home, ... }   │    ├─ CASE_STUDIES[]         │
│  ├─ en: { nav, home, ... }   │    ├─ getCaseStudy(slug)     │
│  └─ getDict(locale)          │    └─ t2(locale, bilingualV) │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                  REUSABLE COMPONENTS LAYER                  │
├─────────────────────────────────────────────────────────────┤
│ Nav(locale)  │ Footer(locale) │ Section(title, subtitle)   │
│              │                │ CaseStudyCard(caseStudy)    │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                      PAGE LAYER                             │
├─────────────────────────────────────────────────────────────┤
│ /app/[locale]/                                              │
│  ├─ platform/page.tsx                                       │
│  ├─ agentic-systems/page.tsx                                │
│  ├─ ai-infrastructure/page.tsx                              │
│  ├─ playbooks/page.tsx                                      │
│  ├─ labs/page.tsx                                           │
│  ├─ nodes/page.tsx                                          │
│  ├─ patterns/page.tsx                                       │
│  ├─ security/page.tsx                                       │
│  ├─ case-studies/page.tsx        (list view)                │
│  └─ case-studies/[slug]/page.tsx (detail view)              │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    MIDDLEWARE LAYER                         │
├─────────────────────────────────────────────────────────────┤
│ /middleware.ts                                              │
│  ├─ Locale detection (ES default)                           │
│  ├─ Legacy route rewrite (/case-studies → /es/case-studies)│
│  ├─ Rate limiting                                           │
│  ├─ Security headers                                        │
│  └─ Auth token validation                                   │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## State Management

### Content State
- **Translations**: Static import from `/content/dictionaries.ts`
- **Case Studies**: Static import from `/content/caseStudies.ts`
- **No runtime state**: Everything is static/built-time

### Component State
- **Locale**: Passed via `params.locale` from Next.js routing
- **Case Study Data**: Fetched via `getCaseStudy(slug)` during page render
- **Bilingual Rendering**: Via `t2(locale, { es, en })` helper

## Performance Architecture

### Build Time
\`\`\`
Next.js Build
├─ generateStaticParams() for all [locale] combinations
├─ generateMetadata() for SEO per locale per page
└─ Static generation of all pages (no runtime overhead)
\`\`\`

### Runtime
\`\`\`
Request → Middleware (locale check) → Page render → Response
         (minimal CPU)               (cached data)
\`\`\`

### Caching Strategy
\`\`\`
/content/dictionaries.ts  → Tree-shaken (only used translations included)
/content/caseStudies.ts   → Single import, filtered per page
Metadata                  → Statically generated at build time
CSS/JS                    → Standard Next.js caching
\`\`\`

## Scaling Patterns

### Adding a Pillar Page (5 minutes)

1. **Create file**: `/app/[locale]/new-page/page.tsx`
2. **Copy template**:
\`\`\`typescript
import type { Locale } from "@/content/dictionaries"
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"

export default function NewPage({ params }: PageProps) {
  const locale = params.locale as Locale
  return (
    <>
      <Nav locale={locale} />
      <main>
        <Section title="Title" subtitle="Subtitle">
          Content here
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  )
}
\`\`\`
3. **Add to nav**: Edit `Nav.tsx` link
4. **Done!** Route works at `/es/new-page` and `/en/new-page`

### Adding a Locale (15 minutes)

1. **Update middleware**: Add locale to `LOCALES` in `/middleware.ts`
2. **Add translations**: Add language object to `DICTS` in `/content/dictionaries.ts`
3. **Add case studies**: Add translations to case studies in `/content/caseStudies.ts`
4. **Done!** All pages now work in new locale

### Adding a Case Study (5 minutes)

1. **Edit**: `/content/caseStudies.ts`
2. **Add to array**:
\`\`\`typescript
{
  slug: "unique-slug",
  title: { es: "Título", en: "Title" },
  summary: { es: "Resumen", en: "Summary" },
  // ... other required fields
}
\`\`\`
3. **Done!** Available at:
   - `/es/case-studies`
   - `/en/case-studies`
   - `/es/case-studies/unique-slug`
   - `/en/case-studies/unique-slug`

## Import Paths

### From Components
\`\`\`typescript
// Translations
import { getDict } from "@/content/dictionaries"
import type { Locale } from "@/content/dictionaries"

// Case Studies
import { getCaseStudy, t2, CASE_STUDIES } from "@/content/caseStudies"
import type { CaseStudy } from "@/content/caseStudies"

// Components
import { Nav } from "@/components/Nav"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/Section"
import { CaseStudyCard } from "@/components/CaseStudyCard"
\`\`\`

### From Pages
\`\`\`typescript
// Type-safe locale handling
import type { Locale } from "@/content/dictionaries"

// In page component
const locale = params.locale as Locale
\`\`\`

## Type Safety

### Locale Type
\`\`\`typescript
export type Locale = "es" | "en"

// TypeScript ensures only valid locales used
const d = getDict(locale) // ✅ OK
const d = getDict("fr")   // ❌ Type error
\`\`\`

### Bilingual Object Type
\`\`\`typescript
type Bilingual = { es: string; en: string }

// Usage
const title: Bilingual = { es: "Título", en: "Title" }
const rendered = t2(locale, title) // ✅ Always safe
\`\`\`

### Case Study Type
\`\`\`typescript
export type CaseStudy = {
  slug: string
  verticalTag: Bilingual
  title: Bilingual
  summary: Bilingual
  industry: Bilingual
  status: Bilingual
  implementation: Bilingual
  highlights: Array<{ label: Bilingual; value: Bilingual }>
  sections: Array<{
    id: string
    heading: Bilingual
    body: Bilingual
    bullets?: Array<Bilingual>
  }>
  stackLine: Bilingual
}
\`\`\`

## Error Handling

### Case Study Not Found
- Page renders 404 message
- Returns friendly error in user's locale
- Links back to case studies list

### Invalid Locale
- Middleware redirects to default (ES)
- `getDict()` safely returns ES translations
- No runtime errors

### Missing Translation Key
- TypeScript type error at compile time
- Cannot accidentally miss a translation
- All languages required for all keys

## Monitoring & Metrics

### What to Monitor

1. **Build Time**
   - Track if adding pages increases build time
   - Should stay <30 seconds even with 20+ pages

2. **Page Load**
   - First Contentful Paint (FCP)
   - Largest Contentful Paint (LCP)
   - Cumulative Layout Shift (CLS)

3. **Search Rankings**
   - Monitor ES and EN keyword rankings separately
   - Check sitemap.xml for both locales
   - Verify hreflang tags working

4. **User Engagement**
   - Track language toggle usage (ES vs EN)
   - Case study detail page visits
   - Pillar page visits by locale

## Future Enhancements

### Phase 2 (Optional)
- [ ] Add case study filtering by industry/tags
- [ ] Add blog/news section
- [ ] Add customer testimonials
- [ ] Add pricing/comparison tables
- [ ] Add API documentation

### Phase 3 (Optional)
- [ ] Multi-language support (ES, EN, FR, PT, etc.)
- [ ] Personalization (remember user's locale preference)
- [ ] Dark mode toggle
- [ ] Analytics integration
- [ ] Contact form integration

### Performance Optimization
- [ ] Image optimization (next/image)
- [ ] Code splitting for large pages
- [ ] Incremental Static Generation (ISR)
- [ ] CDN edge caching headers
