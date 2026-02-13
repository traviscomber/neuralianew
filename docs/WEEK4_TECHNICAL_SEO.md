# Week 4: Technical SEO Validation & Hreflang Fixes
## Implementation Checklist

**Objective**: Clean up all technical SEO issues, validate schema.org markup, fix broken hreflang tags

---

## 1. HREFLANG FIX (Chile-First Approach)

### Current Problem
Pages have broken hreflang links pointing to `/en` paths that don't exist.

### Solution: Remove Broken hreflang

**Files to update**:
- `/app/layout.tsx` - Remove hreflang from main layout
- Individual page metadata - Ensure no alternate language tags

**Updated layout.tsx approach**:
\`\`\`tsx
// Remove this (it's broken):
// <link rel="alternate" hreflang="en" href="https://n3uralia.com/en" />

// Keep this (correct):
<html lang="es_CL">  {/* Signals Chile Spanish to search engines */}
\`\`\`

**Why this works**:
- `<html lang="es_CL">` tells Google this is Chilean Spanish
- No hreflang = signals single-language site (correct for now)
- Future LATAM expansion: Add hreflang then

---

## 2. SCHEMA.ORG VALIDATION

### Pages to Validate

**✓ Already Implemented**:
- FAQ Page: `/app/faq/page.tsx` → FAQPage schema
- Enterprise Page: `/app/soluciones/empresas-grandes/page.tsx` → LocalBusiness + BreadcrumbList
- Startup Page: `/app/soluciones/startups/page.tsx` → SoftwareApplication
- Operations Page: `/app/soluciones/operaciones/page.tsx` → LocalBusiness + BreadcrumbList

**TODO: Add to these pages**:

1. **Homepage** (`/app/page.tsx`)
   - Schema: Organization + SoftwareApplication
   - Include: Name, logo, description, URL, contact info, areaServed (CL)
   
2. **Living Agents** (`/app/living-agents/page.tsx`)
   - Schema: BreadcrumbList + Thing (define Living Agent concept)
   - Include: Structured data for each agent archetype
   
3. **Case Studies** (if exists)
   - Schema: NewsArticle or Article
   - Include: Author, datePublished, articleBody, AggregateRating

### Schema Validation Process

**Tool**: Google Rich Results Test
- URL: https://search.google.com/test/rich-results
- Test each page URL
- Fix any errors or warnings
- Screenshot results for records

---

## 3. METADATA AUDIT

### Template for Every Page

\`\`\`html
<!-- Title: max 60 chars, includes primary keyword -->
<title>[Keyword] | N3uralia</title>

<!-- Meta Description: 155-160 chars, keyword at beginning -->
<meta name="description" content="[Action-oriented sentence with keyword]...">

<!-- Open Graph for social sharing -->
<meta property="og:title" content="[Same as title]">
<meta property="og:description" content="[Meta description]">
<meta property="og:image" content="[Path to 1200x630 image]">
<meta property="og:url" content="[Canonical URL]">

<!-- Canonical (self-referential on all pages) -->
<link rel="canonical" href="https://n3uralia.com[current-path]">

<!-- Language tag -->
<html lang="es_CL">
\`\`\`

### Pages to Audit

| Page | Current Title | New Title (Optimized) | Primary Keyword |
|------|---------------|----------------------|-----------------|
| `/` | Homepage | N3uralia: Living Agents para tu Negocio | "Living Agents" + "agentes IA" |
| `/faq` | Preguntas Frecuentes | Preguntas Frecuentes \| N3uralia | "preguntas frecuentes N3uralia" |
| `/living-agents` | Living Agents | Living Agents: Agentes IA que Aprenden \| N3uralia | "agentes IA que aprenden" |
| `/soluciones/empresas-grandes` | Para Empresas | Orquestación de Agentes IA \| N3uralia | "orquestación agentes IA" |
| `/soluciones/startups` | Para Startups | Automatización sin Código \| N3uralia | "automatización sin código" |
| `/soluciones/operaciones` | Para Operaciones | Automatización de Procesos \| N3uralia | "automatización procesos" |

---

## 4. ROBOTS.TXT & CRAWLABILITY

### Updated robots.txt

\`\`\`
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /auth/
Disallow: /dashboard/
Disallow: /*.json$
Disallow: /?*
Disallow: /*?*redirect

Sitemap: https://n3uralia.com/sitemap.xml
Crawl-delay: 2

# Allow major search engines & AI crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: CCBot
Allow: /
\`\`\`

**Why these rules**:
- Disallow API routes (not meant for indexing)
- Disallow query parameters (duplicate content)
- Allow AI crawlers (GPTBot, Claude, etc.)
- Crawl-delay: 2 seconds (be nice to servers)

---

## 5. SITEMAP.XML UPDATES

### Structure

\`\`\`xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Priority 1.0: Core pages -->
  <url>
    <loc>https://n3uralia.com/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
    <lastmod>2026-02-10</lastmod>
  </url>
  
  <!-- Priority 0.9: Main sections -->
  <url>
    <loc>https://n3uralia.com/living-agents</loc>
    <priority>0.9</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Priority 0.8: Landing pages -->
  <url>
    <loc>https://n3uralia.com/soluciones/empresas-grandes</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Priority 0.7: Support pages -->
  <url>
    <loc>https://n3uralia.com/faq</loc>
    <priority>0.7</priority>
    <changefreq>monthly</changefreq>
  </url>
  
  <!-- Priority 0.6: Content (blogs, etc.) -->
  <url>
    <loc>https://n3uralia.com/blog/orquestacion-agentes-ia</loc>
    <priority>0.6</priority>
    <changefreq>never</changefreq>
  </url>
</urlset>
\`\`\`

---

## 6. CORE WEB VITALS CHECK

### Test Tool
Google PageSpeed Insights: https://pagespeed.web.dev/

### Target Metrics
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### If below targets:
1. Optimize images (next/image component)
2. Reduce render-blocking CSS/JS
3. Enable caching headers
4. Use CDN (Vercel already does this)

---

## 7. INTERNAL LINKING AUDIT

### Links Required

**Homepage should link to**:
- `/faq` (3-4 times with descriptive anchor text)
- `/soluciones/empresas-grandes` (for CTO path)
- `/soluciones/startups` (for founder path)
- `/soluciones/operaciones` (for operations path)
- `/living-agents` (main product page)
- `/blog/*` (below the fold, "Read more" section)

**Each landing page should link to**:
- Homepage (logo click, breadcrumb)
- Other landing pages (cross-segment awareness)
- `/faq` (common questions)
- `/contact` (primary CTA)
- Related blog posts (topical relevance)

**Blog posts should link to**:
- Each other (related topics)
- Landing pages (when relevant)
- `/faq` (common questions)
- `/contact` (CTA)

### Anchor Text Guidelines
- ✓ Descriptive: "orquestación de agentes IA"
- ✗ Generic: "click here", "learn more"
- ✓ Keyword-rich: "automatización procesos empresas"
- ✗ Over-optimized: Keyword stuffing looks unnatural

---

## 8. IMAGE OPTIMIZATION

### Guidelines
- All images have descriptive alt text
- Alt text includes relevant keywords (naturally)
- Use next/image component (automatic optimization)
- Image file names are descriptive (seo-benefit-01.jpg not img123.jpg)

### Example
\`\`\`tsx
<Image
  src="/images/enterprise-architecture.png"
  alt="Orquestación de sistemas enterprise con N3uralia Living Agents"
  width={1200}
  height={630}
  priority={true}  // For above-fold images
/>
\`\`\`

---

## 9. MOBILE FRIENDLINESS

### Checklist
- ✓ Responsive design (works on all screen sizes)
- ✓ Tap targets are 48px+ (easy to tap on mobile)
- ✓ Text is readable (16px+ minimum)
- ✓ No horizontal scroll (content fits width)
- ✓ Viewport meta tag present: `<meta name="viewport" content="width=device-width, initial-scale=1">`

---

## 10. MONITORING DASHBOARD SETUP

### Tools to Connect

1. **Google Search Console**
   - Add property: https://n3uralia.com
   - Verify ownership
   - Submit sitemap
   - Monitor: Indexing, coverage, performance

2. **Google Analytics 4**
   - Create GA4 property
   - Track: Organic traffic, bounce rate, conversion rate
   - Create segments: By audience (CTO, Founder, Operations)
   - Setup events: CTA clicks, demo requests, signup

3. **Google PageSpeed Insights**
   - Test homepage monthly
   - Monitor Core Web Vitals
   - Fix issues as they arise

### Weekly Tracking (Google Search Console)
- Top 25 keyword rankings
- Click-through rate (CTR) by keyword
- Pages with highest impressions
- Search appearance (rich results, snippets)

### Monthly Analysis
- Organic traffic trend (GA4)
- Top-performing pages
- Conversion rate by traffic source
- Keyword ranking improvements
- New keywords appearing (opportunity)

---

## 11. SUCCESS METRICS (3-Month & 6-Month)

### 3-Month Targets
- Organic traffic: 3,000-4,000 monthly users
- Keywords in top 10: 5-8
- Keywords in top 20: 15-20
- Avg keyword position: 15-18
- Domain Authority: 30+
- Pages indexed: 250+

### 6-Month Targets
- Organic traffic: 8,000-10,000 monthly users
- Keywords in top 10: 15-20
- Keywords in top 20: 40-50
- Avg keyword position: 8-12
- Domain Authority: 35+
- Pages indexed: 400+
- Conversions from organic: +150%

---

## Implementation Order

\`\`\`
Week 4, Day 1-2:
  - Remove hreflang tags from layout.tsx
  - Add Organization schema to homepage
  - Test all pages with Rich Results Test

Week 4, Day 3-4:
  - Update metadata on all priority pages
  - Verify all pages have canonical tags
  - Check robots.txt is correct

Week 4, Day 5:
  - Update sitemap.xml with new pages
  - Test Core Web Vitals (PageSpeed)
  - Setup monitoring in GSC & GA4

Week 4, Weekend:
  - Final audit checklist
  - Submit updated sitemap to GSC
  - Create initial monitoring dashboard
\`\`\`

---

**Next Step**: Begin monitoring (Week 5+)
