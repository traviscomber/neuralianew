# GEO/LLMO Implementation Quick Reference

## For Page Developers

### How to Add GEO Targeting to Your Page

#### Step 1: Import the Enhanced Functions

```typescript
import { generatePageMetadata, generateStructuredData } from "@/lib/metadata-utils"
import type { Locale } from "@/content/dictionaries"
```

#### Step 2: Generate Metadata with GEO

```typescript
interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : DEFAULT_LOCALE
  const isChile = params.locale.includes("CL")
  
  return generatePageMetadata({
    title: "Page Title",
    description: "Page description",
    keywords: "relevant,keywords",
    locale: locale,
    canonical: `https://n3uralia.com/${params.locale}/page-path`,
    // NEW: Add geographic targeting
    geo: {
      region: params.locale.includes("CL") ? "CL" : 
              params.locale.includes("AR") ? "AR" : 
              params.locale.includes("MX") ? "MX" : "GLOBAL",
      country: isChile ? "Chile" : "Argentina", // Fill in based on region
      latitude: isChile ? -33.8688 : undefined,
      longitude: isChile ? -51.2093 : undefined,
    }
  })
}
```

#### Step 3: Add Structured Data (Optional but Recommended)

```typescript
export default function YourPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const isChile = params.locale.includes("CL")
  
  const structuredData = generateStructuredData({
    type: "WebPage",
    title: "Your Page Title",
    description: "Your page description",
    url: `https://n3uralia.com/${locale}/your-path`,
    geo: {
      region: isChile ? "CL" : "AR",
      country: isChile ? "Chile" : "Argentina",
      address: isChile ? {
        streetAddress: "Av. Providencia 1234",
        addressLocality: "Santiago",
        addressRegion: "Santiago Metropolitan",
        postalCode: "750000",
        addressCountry: "CL"
      } : undefined
    }
  })
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Your page content */}
    </>
  )
}
```

### GEO Parameter Reference

```typescript
geo: {
  region?: "CL" | "AR" | "MX" | "CO" | "GLOBAL"  // ISO 3166-1 alpha-2
  country?: "Chile" | "Argentina" | "Mexico" | "Colombia" | "World"
  latitude?: number     // For LocalBusiness schema
  longitude?: number    // For LocalBusiness schema
  address?: {
    streetAddress?: string        // e.g., "Av. Providencia 1234"
    addressLocality?: string      // e.g., "Santiago"
    addressRegion?: string        // e.g., "Santiago Metropolitan"
    postalCode?: string          // e.g., "750000"
    addressCountry?: string      // ISO country code, e.g., "CL"
  }
}
```

### Regional Locale Codes

```
es      = Spanish (generic/global)
es-CL  = Spanish (Chile) - PRIMARY MARKET
es-AR  = Spanish (Argentina) - Secondary
es-MX  = Spanish (Mexico) - Secondary
es-CO  = Spanish (Colombia) - Secondary
en     = English (global)
```

### Priority Multipliers in Sitemap

```
Chile:     1.0x   (Full priority)
Argentina: 0.95x  (95% of Chile priority)
Mexico:    0.95x  (95% of Chile priority)
Colombia:  0.90x  (90% of Chile priority)
Global:    0.75x  (75% of Chile priority)
```

---

## Regional Content Guidelines

### What Should Be Different by Region?

#### Chile (100% customized)
- ✅ Full product descriptions
- ✅ Local case studies & testimonials
- ✅ Local payment methods
- ✅ Santiago office info
- ✅ es-CL dialect variations

#### Argentina, Mexico, Colombia (80% customized)
- ✅ Regional case studies
- ✅ Regional contact info
- ✅ Regional currency/pricing
- ⚠️ Mostly shared English content structure
- ❌ Don't duplicate identical content

#### Global English (40% customized)
- ✅ Core product information
- ✅ International case studies
- ✅ Global contact options
- ❌ Avoid region-specific content

### Content Uniqueness Checklist

For each regional page, aim for 10-15% unique content:

```
✓ Title tag (unique by region)
✓ Meta description (localized)
✓ H1 heading (regional greeting/messaging)
✓ First 2-3 paragraphs (local context)
✓ Contact information (regional)
✓ Case study/testimonial (local examples)
✓ CTA text (region-specific messaging)
✗ But: Keep main content 85-90% the same
```

---

## Testing Your GEO Setup

### 1. Test Hreflang Tags

```bash
# In browser DevTools, check <head> section:
<link rel="alternate" hreflang="es-CL" href="..." />
<link rel="alternate" hreflang="es-AR" href="..." />
<link rel="alternate" hreflang="en" href="..." />
```

### 2. Test Structured Data

Use Google Rich Results Test: https://search.google.com/test/rich-results

### 3. Verify in Google Search Console

1. Go to URL Inspection for a regional page
2. Look for "Alternate pages (hreflang)"
3. Verify all regional variants are listed

### 4. Check Sitemap

Visit: `https://n3uralia.com/sitemap.xml`
Verify entries include language alternates

---

## Common Mistakes to Avoid

❌ **DON'T:** Use same content for all regional variants
✅ **DO:** Add 10-15% unique content per region

❌ **DON'T:** Put hreflang in body (it goes in <head>)
✅ **DO:** Framework automatically adds it via Next.js metadata

❌ **DON'T:** Forget self-referential hreflang tag
✅ **DO:** Each page links to itself + all alternates

❌ **DON'T:** Use country code for language (e.g., es-Chile)
✅ **DO:** Use ISO standards (es-CL for Spanish-Chile)

❌ **DON'T:** Create separate sitemaps manually
✅ **DO:** Use sitemap.ts - it auto-generates everything

---

## Regional Coordinates Reference

```typescript
// For LocalBusiness schema (latitude, longitude)

// Chile - Santiago
CL: { lat: -33.8688, lng: -51.2093 }

// Argentina - Buenos Aires  
AR: { lat: -34.6037, lng: -58.3816 }

// Mexico - Mexico City
MX: { lat: 19.4326, lng: -99.1332 }

// Colombia - Bogotá
CO: { lat: 4.7110, lng: -74.0055 }
```

---

## Support & Questions

For implementation help:
1. Review GEO_LLMO_SEO_STRATEGY.md for detailed strategy
2. Check /lib/metadata-utils.ts for function signatures
3. Review about/page.tsx for a full implementation example
4. Test in Google Search Console

---

**Version:** 1.0
**Last Updated:** 2026-02-26
