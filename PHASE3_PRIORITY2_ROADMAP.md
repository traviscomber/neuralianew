# Phase 3: Priority 2 Roadmap

## Context
Priority 1 (Social Proof + CTAs) is complete. Now moving to Priority 2: **High-Impact Conversions + Technical SEO**

---

## Priority 2 Breakdown

### 2A: Interactive ROI Calculator (High Impact, High Effort)
**What**: Interactive tool to estimate project ROI
**Where**: Reachable via CTA: "Calcular Mi ROI Potencial"
**Impact**: Qualifies leads, increases engagement, captures intent signals

**Components Needed**:
- Form inputs:
  - Número de empleados
  - Procesos manuales (hours/week)
  - Costo promedio hora
  - Complejidad (1-5)
- Dynamic calculation:
  - Potential savings per month
  - Payback period
  - Year 1 ROI
- CTA: "Agendar Demo con Results"

**Effort**: 3-4 hours
**Pages**: `/roi-calculator`, embedded in capabilities

---

### 2B: Location-Based Pages (Medium Impact, Low Effort)
**What**: City-specific landing pages for SEO
**Where**: New routes: `/ia-santiago`, `/ia-valparaiso`, `/ia-concepcion`
**Impact**: Local SEO wins, city-specific social proof

**For Each City**:
- Hero: "[City] - Sistemas Agenticos Listos"
- Local client testimonial (if available)
- Local case study (if available)
- Local CTA: "Agendar Demo en [City]"
- Schema markup: LocalBusiness + Service

**Effort**: 2-3 hours per city (3 cities = 6-9 hours)
**Cities**: Santiago, Valparaíso, Concepción

---

### 2C: SEO Foundation (Medium Impact, Low Effort)
**What**: Schema markup + meta tags
**Where**: Global + per-page
**Impact**: Better search rankings, rich results

**Technical SEO Additions**:
- Schema.org markup:
  - Organization (N3uralia)
  - LocalBusiness (offices)
  - ProfessionalService (services)
  - SoftwareApplication (platform)
- Meta tags:
  - og:image, og:title, og:description
  - twitter:card, twitter:creator
  - hreflang for language variants

**Effort**: 2-3 hours
**Tools**: next/head, next-seo (optional)

---

## Implementation Timeline

```
Week 1: ROI Calculator
├── Design calculator logic
├── Build components
├── Integrate with data
└── Test & deploy

Week 2: Location Pages + SEO
├── Create city templates
├── SEO setup (schema + meta)
├── Local content customization
└── Deploy & monitor

Total: 2 weeks (14-16 hours)
```

---

## Estimated ROI Impact

### 2A: ROI Calculator
- Lead quality: +25% (pre-qualified by intent)
- Demo requests: +40% (actionable insights)
- Sales cycle: -10 days (faster qualification)

### 2B: Location Pages
- Organic traffic: +30% (local keywords)
- Local leads: +50% (city-specific targeting)
- Conversion: +15% (relevance)

### 2C: SEO Foundation
- Search rankings: +20-30% (rich results)
- CTR from SERP: +15% (better snippets)
- Visibility: +40% (schema benefits)

---

## Content Strategy

### ROI Calculator Content
```typescript
// Input factors
const roiFactors = {
  employeeCount: [1, 10, 50, 100, 500, 1000],
  manualHours: [5, 10, 20, 40, 60], // per week
  hourlyRate: [10, 20, 50, 100], // USD/hour
  complexity: [1, 2, 3, 4, 5], // scale
}

// Calculation formula
const monthlySavings = (manualHours * 4.3 * hourlyRate) * (complexity * 0.2)
const paybackMonths = projectCost / monthlySavings
const yearOneROI = (monthlySavings * 12 - projectCost) / projectCost
```

### Location Pages Content
```markdown
# Santiago
- "80% de empresas de tech en Santiago usan automatización"
- Testimonial: Local CTO
- Case Study: Local company
- CTA: "Agendar Demo en Santiago"

# Valparaíso
- "Retail y logística lideran transformación"
- Testimonial: Local operations manager
- Case Study: Local logistics company
- CTA: "Agendar Demo en Valparaíso"

# Concepción
- "Manufactura e industria transformadas"
- Testimonial: Local CDO
- Case Study: Local manufacturing
- CTA: "Agendar Demo en Concepción"
```

---

## Technical Implementation

### ROI Calculator Stack
```tsx
// New route: app/roi-calculator/page.tsx
"use client"

import { useState } from "react"
import { calculateROI } from "@/lib/roi-calculations"

export default function ROICalculator() {
  const [inputs, setInputs] = useState({...})
  const results = calculateROI(inputs)
  
  return (
    <>
      {/* Input form */}
      {/* Results display */}
      {/* CTA: Agendar Demo */}
    </>
  )
}
```

### Location Page Template
```tsx
// New route: app/ia-[city]/page.tsx
export default function CityPage({ params }) {
  const cityData = cityContent[params.city]
  
  return (
    <>
      <HeroSection data={cityData.hero} />
      <LocalCaseStudy data={cityData.caseStudy} />
      <TestimonialCarousel testimonials={cityData.testimonials} />
      <ContextualCTA context="location" />
    </>
  )
}
```

### Schema Markup
```tsx
// lib/schema.ts
export const generateSchema = (type, data) => {
  if (type === "LocalBusiness") {
    return {
      "@context": "schema.org",
      "@type": "LocalBusiness",
      "name": "N3uralia Santiago",
      "address": { ... },
      "telephone": "+56 9 XXX XXXX",
      "serviceArea": "Santiago, Chile",
      // ... more fields
    }
  }
}
```

---

## File Structure

### New Files
```
app/
├── roi-calculator/
│   └── page.tsx
├── ia-santiago/
│   └── page.tsx
├── ia-valparaiso/
│   └── page.tsx
└── ia-concepcion/
    └── page.tsx

lib/
├── roi-calculations.ts
├── schema.ts
└── city-content.ts

components/
├── roi/
│   ├── roi-form.tsx
│   └── roi-results.tsx
└── location/
    └── location-hero.tsx
```

---

## Testing Checklist

### ROI Calculator
- [ ] Form inputs work
- [ ] Calculations accurate
- [ ] Results display properly
- [ ] CTA links to demo scheduling
- [ ] Mobile responsive
- [ ] Share results (optional)

### Location Pages
- [ ] Each city page loads
- [ ] Local content displays
- [ ] Local testimonials work
- [ ] Schema markup valid (schema.org)
- [ ] Responsive on mobile
- [ ] hreflang links correct

### SEO
- [ ] Schema markup renders
- [ ] Open Graph tags working
- [ ] Twitter cards display
- [ ] Lighthouse audit 90+
- [ ] Google Search Console indexed
- [ ] Sitemap updated

---

## Success Metrics

### ROI Calculator
- Page views: 100+ per week (target)
- Form completions: 30-40%
- Demo requests from calc: 20-25%
- Average time on page: 3-5 minutes

### Location Pages
- Organic traffic (3 months): 200+ visits
- Conversion rate: 8-12%
- Keyword rankings: Top 10 for local terms
- Local lead volume: 10-15 per month

### SEO Overall
- Domain authority: +5 points (6-12 months)
- Organic visibility: +40%
- SERP CTR: +15%
- Page 1 keywords: +25%

---

## Dependency Chain

```
Priority 1 (Complete)
    ↓
Priority 2A (ROI Calculator) - Week 1
    ├─ Creates interactive engagement
    ├─ Populates demo scheduling requests
    ├─ Qualifies leads (high-intent)
    ↓
Priority 2B (Location Pages) - Week 2
    ├─ Captures local search intent
    ├─ Improves SEO authority
    ├─ Enables local social proof
    ↓
Priority 2C (SEO Foundation) - Week 2
    ├─ Amplifies all above with schema
    ├─ Improves SERP ranking
    ├─ Increases organic visibility
    ↓
Priority 3 (Blog/Resources)
    └─ Content hub for organic traffic
```

---

## Budget Estimate

| Component | Effort | Complexity | Dependencies |
|-----------|--------|-----------|--------------|
| ROI Calculator | 4h | Medium | None |
| Location Pages (3x) | 8h | Low | Content |
| SEO Foundation | 3h | Low | None |
| Testing | 3h | Low | All above |
| **Total** | **18h** | - | - |

---

## Risk Mitigation

### Risk: ROI Calculator inaccurate
**Mitigation**: Validate formulas with CFOs before launch
**Contingency**: Show ranges instead of exact numbers

### Risk: Location pages don't drive traffic
**Mitigation**: Strong local keyword research first
**Contingency**: Combine into region page if needed

### Risk: Schema markup broken
**Mitigation**: Test with Schema.org validator
**Contingency**: Use json-ld-react library

---

## Next Review Point

**After Priority 2 Complete**:
- Review conversion lift from ROI calc
- Analyze location page performance
- Check SEO metric improvements
- Plan Priority 3 (Blog/Resources)

---

## Priority 2 Status: READY FOR PLANNING

**Next Action**: Stakeholder approval for Priority 2 implementation
**Timeline**: 2 weeks
**Expected ROI**: +45-60% lead quality, +30% organic traffic
**Dependencies**: Approved content for location pages

---

# Priority 2 Details Coming Soon...
