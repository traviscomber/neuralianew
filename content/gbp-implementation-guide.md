# Google Business Profile Implementation Guide for N3uralia Chile

## Part 1: GBP Setup Checklist

### Account Setup (Week 1)
- [ ] Claim/verify Google Business Profile at https://www.google.com/business/
- [ ] Select category: "IT Services" (primary) + "Artificial Intelligence Services" (secondary)
- [ ] Confirm location: Santiago, Chile (headquarters)

### Basic Information (Week 1)
- [ ] Business name: N3uralia
- [ ] Address: [Your office address in Santiago]
- [ ] Phone: +56 (your number)
- [ ] Website: https://n3uralia.com/es
- [ ] Service areas: All of Chile (nationwide)
- [ ] Hours: 09:00 - 18:00 (Mon-Fri), or 24/7 if applicable
- [ ] Availability: By appointment

### Services (Week 1)
Define service categories:
- Agentes de IA
- Automatización de Procesos
- Soluciones Agenticas
- Transformación Digital
- Implementación ERP + IA

### NAP (Name, Address, Phone) Consistency (Week 2)

**Primary**: Google Business Profile
```
Name: N3uralia
Address: [Santiago address]
Phone: +56-[number]
```

**Secondary Citations** (update all):
- [ ] LinkedIn Company: https://linkedin.com/company/n3uralia
- [ ] GitHub: https://github.com/n3uralia
- [ ] Crunchbase: https://crunchbase.com/organization/n3uralia
- [ ] AngelList: https://angel.co/company/n3uralia
- [ ] Amazon Alexa Skills (if applicable)
- [ ] AppStores (if app exists)

**Chilean Directories** (Week 2-3):
- [ ] CrunchBase Chile
- [ ] StartupChile database
- [ ] Asociación TI Chile (ACTI)
- [ ] SuperPaginas Chile
- [ ] PaginasAmarillas Chile

### Business Photos (Week 2)

Upload 20+ high-quality photos:

**Category**: Office/Team
- [ ] Office exterior with logo/signage
- [ ] Office interior (workspaces)
- [ ] Team photos
- [ ] Meeting rooms

**Category**: Technology/Products
- [ ] Dashboard screenshots
- [ ] Technology stack diagrams
- [ ] Product demos
- [ ] AI visualization

**Category**: Results/Case Studies
- [ ] Client success graphics
- [ ] ROI metrics displays
- [ ] Before/after comparisons
- [ ] Charts and analytics

**Category**: Culture
- [ ] Team events
- [ ] Company culture
- [ ] Achievements
- [ ] Awards/recognition

### Business Description (Week 1)

**200-character summary**:
"N3uralia: Agentes de IA para automatizar procesos empresariales en Chile. Soluciones agenticas, integración ERP, y transformación digital."

**Full description** (500+ characters):
"N3uralia es una plataforma de agentes de IA que construye sistemas inteligentes para empresas chilenas. Nuestros Living Agents aprenden y evolucionan con cada interacción, automatizando procesos complejos sin reemplazar infraestructura existente. 

Servicios principales:
- Agentes de IA personalizados (retail, minería, logística, manufactura, turismo)
- Automatización de procesos empresariales
- Soluciones agenticas multiindustria
- Integración ERP + IA
- Transformación digital para PyMEs

Ubicado en Santiago, servimos a empresas en todo Chile con implementación en 2-4 semanas."

## Part 2: Schema Markup Implementation

### Schema for Money Pages

Add to `/es/agentes-ia-chile` and similar pages:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "N3uralia - Agentes de IA para Empresas en Chile",
  "description": "Plataforma de agentes de IA inteligentes para automatizar procesos empresariales",
  "url": "https://n3uralia.com/es/agentes-ia-chile",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "Contactar para cotización",
    "priceCurrency": "CLP",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "24",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Organization",
    "name": "N3uralia",
    "url": "https://n3uralia.com/es",
    "logo": "https://n3uralia.com/logo.png",
    "sameAs": [
      "https://linkedin.com/company/n3uralia",
      "https://github.com/n3uralia"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL",
      "addressRegion": "Región Metropolitana",
      "addressLocality": "Santiago"
    }
  }
}
```

### Schema for Service Areas

Add to main pages:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "N3uralia",
  "description": "Agentes de IA para empresas chilenas",
  "url": "https://n3uralia.com/es",
  "logo": "https://n3uralia.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Your street]",
    "addressLocality": "Santiago",
    "addressRegion": "Región Metropolitana",
    "postalCode": "[Your postal code]",
    "addressCountry": "CL"
  },
  "telephone": "+56-[your number]",
  "areaServed": "CL",
  "serviceType": "IT Services, AI Solutions"
}
```

## Part 3: Review Strategy

### 1. Getting First Reviews (Month 1)

**Week 1-2**: Contact previous clients
- [ ] Email 10-15 clients with results
- [ ] Include direct link to GBP review page
- [ ] Offer small incentive (optional - compliant with Google policy)

**Week 3-4**: Leverage partnerships
- [ ] Ask partners and referral sources to review
- [ ] Contact case study participants
- [ ] Reach out to team members

### 2. Review Request Process

**Template Email**:
```
Subject: ¿Compartirías tu experiencia con N3uralia?

Hola [Client Name],

Nos encantaría que compartieras tu experiencia trabajando con N3uralia en [Project].
Tu feedback nos ayuda a mejorar y ayuda a otras empresas chilenas a tomar decisiones.

Link directo para dejar reseña:
[Your GBP review link]

Gracias!
N3uralia Team
```

### 3. Target Review Metrics (90 Days)

- **Minimum**: 10 reviews (4.5+ stars)
- **Target**: 15-20 reviews (4.8+ stars)
- **Ratings breakdown**:
  - 60% 5-star
  - 30% 4-star
  - 10% 3-star (constructive feedback)

### 4. Review Response Protocol

**For 5-star reviews** (respond within 24 hours):
"¡Gracias [Name]! Nos alegra haber superado expectativas. Seguimos comprometidos con tu éxito."

**For 4-star reviews** (respond within 24 hours):
"Apreciamos tu feedback, [Name]. ¿Hay algo específico que podamos mejorar? Nos encantaría hablar."

**For 1-3 star reviews** (respond within 12 hours):
"Lamentamos tu experiencia, [Name]. Nos gustaría resolverlo. ¿Podemos contactarte para entender qué salió mal?"

## Part 4: GBP Posts Strategy

### Weekly GBP Posts (Content Calendar)

**Week 1**: Announce capability
- Title: "Agentes de IA para automatizar tu negocio chileno"
- Body: Introduce N3uralia and key services
- CTA: "Agendar diagnóstico gratuito"

**Week 2**: Share case study
- Title: "Retail chileno: -60% costos con agentes IA"
- Body: Brief case study with metrics
- CTA: "Ver detalles del caso"

**Week 3**: Highlight service
- Title: "Integración ERP + Agentes IA"
- Body: How it works and benefits
- CTA: "Consulta disponibilidad"

**Week 4**: Blog/content update
- Title: New blog post announcement
- Body: Brief summary
- CTA: "Leer artículo completo"

**Repeating pattern**: Post 1x/week minimum

## Part 5: Local Citation Strategy

### Priority Directories (2-3 weeks)

| Directory | URL | Category | Priority |
|-----------|-----|----------|----------|
| Crunchbase | crunchbase.com | Tech/AI | High |
| LinkedIn | linkedin.com | Professional | High |
| GitHub | github.com | Developer | High |
| Municipalidad Santiago | municipalidad.cl | Local | Medium |
| ACTI Chile | acti.cl | Industry | Medium |
| StartupChile | startupchile.org | Local Startup | Medium |
| SuperPaginas | superpaginas.com.uy | Regional Directory | Low |
| PaginasAmarillas | paginasamarillas.cl | Business Directory | Low |

## Part 6: GBP Metrics to Track (Ongoing)

- Views/searches leading to GBP
- Phone calls generated
- Website clicks from GBP
- Direction requests
- Photo views
- Review count and average rating
- Message responses
- Posts performance

---

## Implementation Timeline

| Week | Task | Owner | Status |
|------|------|-------|--------|
| 1 | Claim/setup GBP, add basic info | Marketing | - |
| 1-2 | Add photos (20+) | Content/Brand | - |
| 2 | Update all directories (NAP) | Admin | - |
| 2-3 | Implement schema markup | Dev | - |
| 3-4 | Launch review campaign | Sales | - |
| Ongoing | Weekly GBP posts | Content | - |
| Ongoing | Monitor and respond to reviews | Customer Success | - |

---

## Expected Impact (90 Days)

- ✓ Verified GBP listing
- ✓ 15-20 reviews (4.8+ avg rating)
- ✓ Top 3 ranking for "agentes ia chile" on Google Maps
- ✓ 50-100 monthly GBP-driven clicks
- ✓ 10-15 phone inquiries from GBP
- ✓ Improved local relevance signals for all Chile pages
