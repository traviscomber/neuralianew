# SABANA V0 Home - Premium B2B Landing Page

**Status**: ✅ LIVE
**Routes**: `/[locale]/sabana-home` (ES & EN)
**Build Date**: May 31, 2026
**Target Audience**: Decision makers in Chile & LATAM (GM, Operations, Sales, Digital Transformation)

---

## Objective

Create a premium, high-impact B2B landing page for N3uralia focused on operational results, not AI hype. Target audience: senior management and operations leaders in Chile and LATAM who need to automate critical processes while maintaining control.

---

## Design Direction

**Aesthetic**: Corporate modern, clean, editorial style
**Palette**: 
- Base neutral: graphite, off-white
- Accents: petrol green, technical cyan
- No crypto startup look, no visual overload

**Typography**: Professional, distinctive
**Animations**: Discrete section reveals
**Layout**: Highly readable on desktop and mobile

---

## Page Structure (11 Sections)

### 1. HERO SECTION
**Copy Strategy**: Executive, direct, results-focused

- **Eyebrow**: "IA aplicada a operaciones críticas | Chile y LATAM"
- **Title**: "Automatiza procesos críticos sin perder control" (8 words)
- **Subtitle**: "Diseñamos e integramos sistemas inteligentes que reducen errores, aceleran tiempos de respuesta y mantienen supervisión humana en cada decisión relevante." (25 words)
- **CTAs**: 
  - Primary: "Agendar diagnóstico" (bold, primary color)
  - Secondary: "Ver casos reales" (outline, secondary)
- **Micro proofs** (below CTAs):
  - ✓ Implementaciones en 4 semanas
  - ✓ Integración con sistemas existentes
  - ✓ Trazabilidad end-to-end

### 2. QUICK PROOF METRICS
**Purpose**: Social proof + key differentiators

3 metrics in horizontal bar:
- **-40%** tiempo operativo
- **24/7** continuidad
- **100%** integración con stack actual

### 3. PROBLEM SECTION
**Purpose**: Acknowledge pain, build urgency

- **Title**: "Si tu operación depende de planillas y tareas manuales, ya hay riesgo."
- **Body text**: "Los cuellos de botella no vienen por falta de talento. Vienen por procesos fragmentados, errores repetitivos y decisiones sin contexto unificado."
- **4 Pain points** (with bullet indicators):
  - Retrasos en procesos clave
  - Errores sin trazabilidad
  - Dependencia de personas para tareas repetitivas
  - Baja visibilidad para decidir a tiempo

### 4. SOLUTION SECTION
**Purpose**: Introduce N3uralia's approach (infrastructure, not bots)

- **Title**: "No instalamos bots sueltos. Diseñamos infraestructura operativa con IA."
- **Subtitle**: "Conectamos datos, reglas de negocio y agentes especializados para que la operación funcione mejor desde el día uno."
- **4 Pillars** (icon + title + description):
  1. Orquestación de procesos - "Coordinación inteligente de flujos complejos"
  2. Integración con tus sistemas - "Sin cambios disruptivos en tu infraestructura"
  3. Control y gobernanza - "Supervisión humana en decisiones críticas"
  4. Evolución continua del sistema - "Aprendizaje y mejora automática"

### 5. CASE HIGHLIGHT
**Purpose**: Prove with real numbers

- **Title**: "Resultados medibles en operación real"
- **Case**: Hospitality
  - **Before**: 4 horas respuesta promedio
  - **After**: 15 minutos respuesta actual
  - **Impact**: -40% reducción operativa
- **CTA**: "Ver más casos" → `/[locale]/case-studies`

### 6. IMPLEMENTATION ROADMAP
**Purpose**: De-risk with transparency

- **Title**: "De diagnóstico a operación en 4 semanas"
- **Tagline**: "Con acompañamiento de equipo experto y control humano en puntos críticos."
- **4-Week Timeline**:
  1. **Semana 1**: Diagnóstico y alcance
  2. **Semana 2**: Integración de datos y sistemas
  3. **Semana 3**: Orquestación y pruebas
  4. **Semana 4**: Salida a producción con métricas

### 7. INDUSTRIES
**Purpose**: Show breadth of application

- **Title**: "Aplicaciones por industria en Chile y LATAM"
- **6 Industry cards** (clickable):
  1. Retail y e-commerce
  2. Turismo y hospitalidad
  3. Logística y supply chain
  4. Manufactura
  5. Servicios financieros
  6. Minería y operaciones intensivas

### 8. SECURITY & CONTROL
**Purpose**: Address concerns about automation

- **Title**: "Automatizar sí. Perder control, no."
- **4 Control pillars** (icon + title + description):
  1. Trazabilidad de decisiones - "Cada acción registrada y auditable"
  2. Políticas de seguridad y acceso - "Control granular de permisos y roles"
  3. Supervisión humana configurable - "Escaladas automáticas a personas clave"
  4. Arquitectura agnóstica, sin lock-in - "Portabilidad total de tu solución"

### 9. FAQ SECTION
**Purpose**: Answer commercial objections

4 questions with collapsible answers:
1. "¿En cuánto tiempo vemos resultados?"
   → "La mayoría de los primeros flujos operativos quedan en producción en 4 semanas."

2. "¿Necesito cambiar mis sistemas actuales?"
   → "No. Diseñamos sobre tu stack actual e integramos por etapas."

3. "¿Qué procesos conviene automatizar primero?"
   → "Los que tienen alta frecuencia, alto costo de error y dependencia manual."

4. "¿Cómo abordan seguridad y privacidad?"
   → "Con trazabilidad, control de accesos, políticas claras y supervisión humana en decisiones críticas."

### 10. FINAL CTA
**Purpose**: Strong closing call-to-action

- **Title**: "Si tu operación no puede fallar, conversemos."
- **Body**: "Agenda un diagnóstico de 30 minutos y te llevas un plan priorizado para automatizar con impacto real."
- **CTA**: "Quiero mi diagnóstico" → `/[locale]/contact`

### 11. FOOTER
- **Message**: "IA aplicada para operaciones reales en Chile y LATAM."
- **Links**: Capabilities, Solutions, Cases, Contact
- Standard N3uralia footer template

---

## Copy Rules (Brand Standards)

- **Maximum 8 words** per headline
- **Maximum 22 words** per paragraph
- **One idea per section**
- **Always include evidence**: metrics, cases, numbers
- **Before → After language** when applicable
- **Short sentences**, minimal jargon in first scroll
- **Focus on customer gain** in each section

---

## Design Implementation

**Colors**:
- Background: `var(--background)` (off-white/charcoal)
- Text Primary: `var(--foreground)`
- Accent: `var(--primary)` (petrol green/cyan)
- Muted: `var(--muted-foreground)`

**Spacing**: Tailwind scale (gap-4, gap-8, py-24, px-4, etc.)
**Grid**: Flexbox for flow, Grid for 2D layouts
**Responsive**: Mobile-first, enhanced for lg screens

**Sections**:
- Hero: Full viewport, centered
- Metrics: Horizontal bar with borders
- Problem/Solution: Left-aligned, card-based
- Roadmap: 4-column grid with arrows
- Industries: 3-column responsive grid
- FAQ: Collapsible details elements
- Final CTA: Centered, high contrast

---

## Bilingual Support

**Spanish (ES)**: Default, full translation
**English (EN)**: Complete parity

Routes:
- `/es/sabana-home`
- `/en/sabana-home`

---

## Analytics & Goals

**Primary CTA**: "Agendar diagnóstico"
**Secondary CTA**: "Ver casos reales"
**Tertiary CTA**: "Quiero mi diagnóstico" (final section)

**Conversion paths**:
1. Hero → Diagnostic booking (primary)
2. Case highlight → Case studies page
3. Industries → Specific industry pages
4. Final CTA → Contact form

---

## A/B Test Headline Variants

Alternative title options (split testing):
- "IA en producción para operaciones que no pueden fallar"
- "Menos tareas manuales, más decisiones con contexto"
- "Automatización empresarial con control humano real"

---

## Technical Details

**File**: `/app/[locale]/sabana-home/page.tsx`
**Build**: SSR + Static generation
**Performance**: <2s load, optimized images, lazy loading
**Accessibility**: Semantic HTML, ARIA labels, sr-only classes
**SEO**: 
- Dynamic meta tags per locale
- hreflang alternates
- Structured data (Organization schema)
- Open Graph tags

---

## Future Enhancements

1. Interactive cost calculator
2. Live demo scheduling widget
3. Customer testimonial carousel
4. Video demo embeds
5. Personalization by industry
6. Multivariate A/B testing

---

## Status

**Development**: ✅ Complete
**Testing**: ✅ Bilingual verified
**Deployment**: ✅ Live on production
**Content**: ✅ Ready for execution

**Next Steps**:
- Link from main homepage
- Set up analytics tracking
- Run A/B headline tests
- Monitor conversion rates
- Iterate based on user behavior
