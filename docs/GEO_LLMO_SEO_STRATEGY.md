# GEO/LLMO SEO Strategy for N3uralia
## Global with Regional Focus (Chile Headquarters)

---

## Executive Summary

This document outlines N3uralia's GEO/LLMO (Geolocation, Localization, Language, Multi-Origin) SEO strategy. We're implementing a **global-first architecture with Chile as the primary market**, supported by secondary markets in Latin America (Argentina, Mexico, Colombia).

**Key Strategy:**
- Chile (CL): Primary market - highest priority, most content, full regional optimization
- Latin America (AR, MX, CO): Secondary markets - key content, regional variants
- Global (EN): Tertiary market - English-speaking regions worldwide

---

## 1. Technical Implementation

### 1.1 Sitemap Structure with GEO Tags

The updated `sitemap.ts` now generates:

```xml
<!-- Main locale variants -->
https://n3uralia.com/es/page          (Spanish - Global default)
https://n3uralia.com/es-CL/page       (Spanish - Chile specific)
https://n3uralia.com/es-AR/page       (Spanish - Argentina)
https://n3uralia.com/es-MX/page       (Spanish - Mexico)
https://n3uralia.com/es-CO/page       (Spanish - Colombia)
https://n3uralia.com/en/page          (English - Global)
```

Each entry includes `hreflang` alternates pointing to regional variants:

```xml
<link rel="alternate" hreflang="es" href="https://n3uralia.com/es/page" />
<link rel="alternate" hreflang="es-CL" href="https://n3uralia.com/es-CL/page" />
<link rel="alternate" hreflang="es-AR" href="https://n3uralia.com/es-AR/page" />
<link rel="alternate" hreflang="es-MX" href="https://n3uralia.com/es-MX/page" />
<link rel="alternate" hreflang="es-CO" href="https://n3uralia.com/es-CO/page" />
<link rel="alternate" hreflang="en" href="https://n3uralia.com/en/page" />
<link rel="alternate" hreflang="x-default" href="https://n3uralia.com/page" />
```

### 1.2 Schema.org Structured Data - GEO Enhanced

The updated `metadata-utils.ts` includes:

#### Organization Schema with Headquarters:
```json
{
  "@type": "Organization",
  "name": "N3uralia",
  "foundingLocation": {
    "name": "Santiago, Chile",
    "address": {
      "addressCountry": "CL",
      "addressLocality": "Santiago"
    }
  },
  "areaServed": [
    { "@type": "Country", "name": "Chile" },
    { "@type": "Country", "name": "Argentina" },
    { "@type": "Country", "name": "Mexico" },
    { "@type": "Country", "name": "Colombia" },
    { "@type": "Country", "name": "World" }
  ]
}
```

#### LocalBusiness Schema (for Chile):
```json
{
  "@type": "LocalBusiness",
  "name": "N3uralia",
  "address": {
    "addressCountry": "CL",
    "addressLocality": "Santiago"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8688,
    "longitude": -51.2093
  },
  "areaServed": "Chile"
}
```

#### WebPage Schema with Geo Coverage:
```json
{
  "@type": "WebPage",
  "spatialCoverage": {
    "@type": "Place",
    "geo": {
      "@type": "GeoShape",
      "areaServed": "CL"  // or AR, MX, CO
    }
  }
}
```

### 1.3 Metadata Generation with Regional Support

```typescript
// Usage example in page components:
generatePageMetadata({
  title: "Nuestras Capacidades",
  description: "Plataforma agentica con soporte en Chile...",
  locale: "es",
  canonical: "https://n3uralia.com/es-CL/capabilities",
  geo: {
    region: "CL",
    country: "Chile",
    latitude: -33.8688,
    longitude: -51.2093
  }
})
```

---

## 2. Geographic Market Prioritization

### 2.1 Priority Matrix

```
Market    | Priority | Locales          | Content Level | Priority Score
----------|----------|------------------|---------------|---------------
Chile     | PRIMARY  | es-CL, es        | Full (100%)   | 1.0x
Argentina | SECONDARY| es-AR, es        | High (80%)    | 0.95x
Mexico    | SECONDARY| es-MX, es        | High (80%)    | 0.95x
Colombia  | SECONDARY| es-CO, es        | Medium (60%)  | 0.90x
Global    | TERTIARY | en               | Core (40%)    | 0.75x
```

### 2.2 Content Adaptation by Region

#### Chile (Primary):
- Full product suite and features
- Chile-specific case studies
- Local payment methods
- Santiago office contact
- Spanish (ES-CL dialect variations)

#### Argentina, Mexico, Colombia (Secondary):
- Core product features
- Regional case studies
- Regional contact information
- Currency/payment localization
- Spanish (regional dialects)

#### Global English (Tertiary):
- Essential features only
- Global case studies
- International contact
- US English variants
- Simplified messaging

---

## 3. Implementation Checklist

### Phase 1: Foundation (Week 1)
- [x] Update sitemap.ts with regional URLs
- [x] Add LocalBusiness schema for Chile
- [x] Enhance metadata-utils.ts with geo support
- [x] Add hreflang tags to all pages
- [ ] Create regional content variations for Chile
- [ ] Set up Google Search Console properties for each locale

### Phase 2: Expansion (Week 2-3)
- [ ] Create Argentina-specific content
- [ ] Create Mexico-specific content
- [ ] Set up regional tracking in Google Analytics 4
- [ ] Submit regional sitemaps to GSC
- [ ] Add regional business information to Google My Business

### Phase 3: Optimization (Week 4+)
- [ ] Monitor regional search performance
- [ ] Adjust priorities based on traffic data
- [ ] Add regional testimonials/case studies
- [ ] Implement regional link-building campaigns
- [ ] A/B test messaging by region

---

## 4. Google Search Console Setup

### 4.1 Create Properties for Each Region

```
Property                          | Type           | Coverage
----------------------------------|----------------|------------------
n3uralia.com                      | Domain         | All regions
n3uralia.com/es-CL/               | URL prefix     | Chile (primary)
n3uralia.com/es-AR/               | URL prefix     | Argentina
n3uralia.com/es-MX/               | URL prefix     | Mexico
n3uralia.com/es-CO/               | URL prefix     | Colombia
n3uralia.com/en/                  | URL prefix     | Global English
```

### 4.2 Regional GSC Targeting

In Google Search Console → Settings → Geographic Targeting:
- **es-CL property**: Target = Chile
- **es-AR property**: Target = Argentina
- **es-MX property**: Target = Mexico
- **es-CO property**: Target = Colombia
- **en property**: No specific targeting (global)

### 4.3 Submit Sitemaps

1. Main sitemap: `https://n3uralia.com/sitemap.xml`
   - Contains ALL regional variants
2. Regional sitemaps (optional, for faster indexing):
   - `https://n3uralia.com/sitemap-cl.xml`
   - `https://n3uralia.com/sitemap-ar.xml`
   - `https://n3uralia.com/sitemap-mx.xml`

---

## 5. Hreflang Implementation

### 5.1 Location: HTML Head

Already implemented in page metadata through:
```typescript
alternates: {
  languages: {
    es: "https://n3uralia.com/es/page",
    "es-CL": "https://n3uralia.com/es-CL/page",
    "es-AR": "https://n3uralia.com/es-AR/page",
    "es-MX": "https://n3uralia.com/es-MX/page",
    en: "https://n3uralia.com/en/page",
    "x-default": "https://n3uralia.com/page"
  }
}
```

### 5.2 Language Codes Used

- `es` = Spanish (default/generic)
- `es-CL` = Spanish (Chile)
- `es-AR` = Spanish (Argentina)
- `es-MX` = Spanish (Mexico)
- `es-CO` = Spanish (Colombia)
- `en` = English (default)
- `x-default` = Default version (used when no language match)

### 5.3 Verification

Test your hreflang implementation:
1. Use Google Search Console → URL Inspection tool
2. Check: Enhanced Results → Alternate pages (hreflang links should appear)
3. Verify all regional URLs are listed

---

## 6. Expected Search Performance Timeline

### Month 1: Indexing Phase
- All regional URLs indexed
- Initial search impressions (50-100 impressions/day)
- Focus: Branded searches + core keywords

### Month 2-3: Ranking Phase
- Regional keywords start ranking
- Chilean searches dominate initial traffic
- Secondary markets gaining traction

### Month 4-6: Optimization Phase
- Content refinement based on search data
- Regional ranking improvements
- Secondary market growth

### Month 6+: Scale Phase
- Expanded keyword coverage
- Consistent regional traffic
- Organic growth acceleration

---

## 7. Monitoring & Maintenance

### Weekly Checks:
- [ ] Google Search Console: Coverage status
- [ ] Search Analytics: New queries, click-through rates
- [ ] Crawl errors: Any issues to fix?

### Monthly Review:
- [ ] Regional traffic distribution
- [ ] Keyword rankings by region
- [ ] Top performing pages by region
- [ ] Content opportunity gaps

### Quarterly Optimization:
- [ ] Content updates for high-traffic regions
- [ ] Link-building campaigns by region
- [ ] UX improvements based on regional behavior
- [ ] New regional content creation

---

## 8. Regional Keyword Strategy

### Chile (Primary Market)
- "sistemas agenticos Chile"
- "automatización empresarial Santiago"
- "IA para empresas Chile"
- "agentes inteligentes Chile"

### Argentina (Secondary)
- "sistemas agenticos Argentina"
- "automatización empresarial Buenos Aires"
- "IA para PYMES Argentina"

### Mexico (Secondary)
- "sistemas agenticos México"
- "automatización empresarial CDMX"
- "IA para empresas México"

### Global (Tertiary)
- "agentic systems"
- "AI automation platform"
- "enterprise AI agents"
- "living agents platform"

---

## 9. Troubleshooting Common GEO/LLMO Issues

### Issue: Hreflang errors in Google Search Console
**Solution:**
- Verify all hreflang URLs are canonicalized
- Ensure self-referential hreflang tags exist
- Check for circular redirects

### Issue: Wrong content ranking in wrong region
**Solution:**
- Review and adjust priority scores in sitemap
- Add explicit geo-targeting in GSC
- Strengthen regional internal linking

### Issue: Duplicate content warnings
**Solution:**
- Ensure each regional URL has unique content (10%+ differences minimum)
- Add regional variations in titles/descriptions
- Use canonical tags appropriately (self-referential for regional variants)

### Issue: Slow indexing of regional pages
**Solution:**
- Submit separate regional sitemaps to GSC
- Build internal links from primary regions to secondary regions
- Increase crawl budget through site optimization

---

## 10. Next Steps

1. **Immediate (This Week):**
   - Create Google Search Console properties for Chile
   - Verify new sitemap structure
   - Test hreflang implementation

2. **Short-term (Next 2 Weeks):**
   - Create Chile-specific case studies
   - Add local business information
   - Submit to Google Search Console

3. **Medium-term (Next Month):**
   - Expand to Argentina content
   - Build regional link profile
   - Monitor performance metrics

---

## Resources

- [Google Hreflang Documentation](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Search Console International Targeting](https://support.google.com/webmasters/answer/189077)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [W3C Language Tags](https://www.w3.org/International/questions/qa-what-lang-need)

---

**Last Updated:** 2026-02-26
**Strategy Owner:** N3uralia SEO Team
**Review Cycle:** Monthly
