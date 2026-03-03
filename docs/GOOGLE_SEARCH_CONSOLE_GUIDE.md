# Google Search Console & SEO Indexing Guide for N3uralia

## Quick Overview

The N3uralia website now has a **complete SEO infrastructure** optimized for Google indexing across both Spanish (ES) and English (EN) locales.

## Files Created/Updated

### 1. **Dynamic Sitemap Generator** (`/app/sitemap.ts`)
- Auto-generates XML sitemap
- Includes all pages with proper metadata
- Supports hreflang for bilingual content
- Priorities assigned based on page importance
- Automatically updates with new pages

### 2. **Static Sitemap Backup** (`/public/sitemap-static.xml`)
- Manual fallback sitemap
- Core pages with proper hreflang tags
- Useful for situations where dynamic generation fails

### 3. **Robots.txt Configuration** (`/public/robots.txt`)
- Allows all search engine bots
- Specifies sitemap location
- Sets crawl-delay for respectful indexing
- Supports AI crawlers (GPT, Claude, etc.)

### 4. **Metadata Utility** (`/lib/metadata-utils.ts`)
- Centralized metadata generation
- Consistent OpenGraph tags
- Twitter card support
- Structured data generation (schema.org)

## URL Structure

### Spanish URLs (Default)
```
https://n3uralia.com/es
https://n3uralia.com/es/about
https://n3uralia.com/es/capabilities
https://n3uralia.com/es/case-studies
https://n3uralia.com/es/platform
https://n3uralia.com/es/soluciones
https://n3uralia.com/es/contact
... (and all other pages)
```

### English URLs
```
https://n3uralia.com/en
https://n3uralia.com/en/about
https://n3uralia.com/en/capabilities
https://n3uralia.com/en/case-studies
https://n3uralia.com/en/platform
... (same structure)
```

### Root Redirect
```
https://n3uralia.com → Redirects to /es (default language)
```

## Sitemap Strategy

### Pages with Highest Priority (0.9 - 1.0)
- Homepage (`/`)
- About (`/about`)
- Capabilities (`/capabilities`)
- Platform (`/platform`)
- Case Studies (`/case-studies`)

### Pages with High Priority (0.8 - 0.85)
- Soluciones (`/soluciones`)
- Agentic Systems (`/agentic-systems`)
- Living Agents (`/living-agents`)
- Platform sub-pages (security, patterns, nodes)

### Pages with Medium Priority (0.7 - 0.75)
- Services (`/services`)
- Blog (`/blog`)
- Contact (`/contact`)
- Learning Hub (`/learning-hub`)

### Pages with Lower Priority (0.5 - 0.65)
- FAQ (`/faq`)
- Security (`/security`)
- Performance (`/performance`)
- Labs (`/labs`)

## Hreflang Implementation

All pages include proper hreflang tags:

```xml
<xhtml:link rel="alternate" hreflang="es" href="https://n3uralia.com/es/page"/>
<xhtml:link rel="alternate" hreflang="en" href="https://n3uralia.com/en/page"/>
<xhtml:link rel="alternate" hreflang="x-default" href="https://n3uralia.com/page"/>
```

This tells Google:
- Spanish version: `/es/page`
- English version: `/en/page`
- Default version: `/page` (redirects to Spanish)

## Change Frequency

- **Homepage**: Weekly (high update priority)
- **Blog/Learning Hub**: Weekly (content updates)
- **Services/Platform**: Monthly (stable content)
- **Case Studies**: Monthly (updated with new projects)
- **Contact/FAQ**: Monthly (relatively static)
- **Other pages**: Yearly (rarely updated)

## Google Search Console Setup

### 1. Add Property
- Go to: https://search.google.com/search-console
- Add `https://n3uralia.com/` as primary domain
- Google can now discover both `/es` and `/en` variants

### 2. Submit Sitemap
- URL: `https://n3uralia.com/sitemap.xml`
- Status should show "Success"
- Check for any "Error" entries

### 3. Verify Indexing
Use the URL Inspection tool to verify:
- `https://n3uralia.com` (root redirect)
- `https://n3uralia.com/es` (Spanish homepage)
- `https://n3uralia.com/en` (English homepage)
- Key content pages from each locale

### 4. Monitor Coverage
- Check "Coverage" report regularly
- Resolve any "Error" statuses
- Monitor "Excluded" pages to ensure they should be excluded

### 5. Track Performance
- Use "Performance" report to see:
  - Search impressions
  - Click-through rate (CTR)
  - Average position
  - Compare Spanish vs English performance

## Structured Data

The site includes schema.org structured data for:

### Organization Schema
```json
{
  "@type": "Organization",
  "name": "N3uralia",
  "url": "https://n3uralia.com",
  "description": "Agentic Systems Platform for Enterprise Automation"
}
```

### WebPage Schema
- Applied to all landing pages
- Includes title, description, URL, author

### BreadcrumbList Schema
- Helps Google understand site structure
- Improves breadcrumb appearance in search results

### Article Schema
- Applied to blog/studies pages
- Includes publication date, author, image

## Testing & Validation

### Test Sitemap Validity
```bash
# Check if sitemap is properly formatted
curl https://n3uralia.com/sitemap.xml | head -20
```

### Test Robots.txt
```bash
# Verify robots.txt accessibility
curl https://n3uralia.com/robots.txt
```

### Use Google Tools
1. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
2. **Rich Results Test**: https://search.google.com/test/rich-results
3. **URL Inspection**: https://search.google.com/search-console/about

### Use Third-Party Tools
- Screaming Frog SEO Spider (crawl entire site)
- SEMrush or Ahrefs (competitor analysis)
- Moz Pro (rank tracking)

## Common Issues & Solutions

### Issue: Pages not indexing
**Solution:**
1. Check robots.txt is not blocking the page
2. Use URL Inspection tool in Search Console
3. Request indexing manually
4. Wait 3-7 days for Google to crawl

### Issue: Hreflang errors
**Solution:**
1. Verify alternate URLs exist and are accessible
2. Check hreflang points to correct locale
3. Ensure bidirectional hreflang (ES points to EN, EN points to ES)

### Issue: Duplicate content warnings
**Solution:**
1. Ensure canonical tags point to correct version
2. Use hreflang properly to avoid duplication signals
3. Avoid creating multiple versions of same content

### Issue: Low click-through rate (CTR)
**Solution:**
1. Improve meta descriptions (compelling, action-oriented)
2. Update page titles to be more appealing
3. Add structured data for rich snippets
4. Optimize for featured snippets

## Monthly SEO Checklist

- [ ] Check Search Console for new errors
- [ ] Review sitemap coverage report
- [ ] Analyze search performance metrics
- [ ] Check for crawl errors
- [ ] Verify new pages are indexed
- [ ] Update blog/learning content
- [ ] Monitor keyword rankings
- [ ] Check for indexing issues
- [ ] Review mobile usability
- [ ] Test core web vitals

## Annual SEO Audit

- [ ] Complete site crawl with Screaming Frog
- [ ] Review backlink profile
- [ ] Competitive analysis
- [ ] Keyword strategy review
- [ ] Technical SEO audit
- [ ] Content quality review
- [ ] Mobile performance optimization
- [ ] Page speed improvements
- [ ] Schema.org implementation review
- [ ] Hreflang configuration audit

## Key Performance Metrics to Track

1. **Organic Traffic**: Sessions from Google search
2. **Click-Through Rate (CTR)**: % of impressions that become clicks
3. **Average Position**: Where your pages rank (lower is better)
4. **Impressions**: Times your page appears in search results
5. **Indexed Pages**: Number of pages Google has indexed
6. **Core Web Vitals**: LCP, FID, CLS scores

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Hreflang: The Complete Guide](https://moz.com/learn/seo/hreflang)
- [Schema.org Documentation](https://schema.org)
- [Rich Results Gallery](https://search.google.com/test/rich-results)

---

**Last Updated**: February 26, 2024
**Maintained by**: N3uralia SEO Team
