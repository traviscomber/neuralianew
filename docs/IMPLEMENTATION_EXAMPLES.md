# 📋 Ejemplos de Implementación en Diferentes Páginas

## 1. Capabilities Page - `/app/capabilities/page.tsx`

\`\`\`tsx
'use client';

import { CapabilitiesBackground } from '@/components/section-background';

export default function CapabilitiesPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <CapabilitiesBackground className="min-h-screen flex items-center justify-center py-24">
          <section className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
              6 Pilares de Capacidad
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Plataforma agnóstica, integración legacy-ready, governance garantizado
            </p>
          </section>
        </CapabilitiesBackground>

        {/* Features Grid */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contenido de features */}
          </div>
        </section>
      </main>
    </>
  );
}
\`\`\`

## 2. Solutions Page - `/app/soluciones/page.tsx`

\`\`\`tsx
'use client';

import { SolutionsBackground, HeroBackground } from '@/components/section-background';

export default function SolutionsPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <HeroBackground className="min-h-screen flex items-center justify-center py-24">
          <section className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
              Soluciones Empresariales
            </h1>
          </section>
        </HeroBackground>

        {/* Solutions Grid - Solutions Background */}
        <SolutionsBackground className="py-24 px-4">
          <section className="max-w-5xl mx-auto">
            {/* Contenido de soluciones */}
          </section>
        </SolutionsBackground>
      </main>
    </>
  );
}
\`\`\`

## 3. Blog Page - `/app/blog/page.tsx`

\`\`\`tsx
'use client';

import { BlogBackground, HeroBackground } from '@/components/section-background';

export default function BlogPage() {
  return (
    <>
      <main>
        {/* Hero con animación */}
        <HeroBackground className="min-h-screen flex items-center justify-center py-24">
          <section className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
              Blog & Recursos
            </h1>
          </section>
        </HeroBackground>

        {/* Blog Articles - Patrón sutil sin animación */}
        <BlogBackground className="py-24 px-4">
          <section className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Articles Grid */}
            </div>
          </section>
        </BlogBackground>
      </main>
    </>
  );
}
\`\`\`

## 4. FAQ Page - `/app/faq/page.tsx`

\`\`\`tsx
'use client';

import { FAQBackground, HeroBackground } from '@/components/section-background';

export default function FAQPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <HeroBackground className="min-h-screen flex items-center justify-center py-24">
          <section className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
              Preguntas Frecuentes
            </h1>
          </section>
        </HeroBackground>

        {/* FAQ Content - Nodos interactivos */}
        <FAQBackground className="py-24 px-4">
          <section className="max-w-5xl mx-auto">
            {/* Accordion de FAQ */}
          </section>
        </FAQBackground>
      </main>
    </>
  );
}
\`\`\`

## 5. Workflow Page - `/app/como-trabajamos/page.tsx`

\`\`\`tsx
'use client';

import { WorkflowBackground, HeroBackground } from '@/components/section-background';

export default function WorkflowPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <HeroBackground className="min-h-screen flex items-center justify-center py-24">
          <section className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-6">
              Cómo Trabajamos
            </h1>
          </section>
        </HeroBackground>

        {/* Workflow Steps - Patrón dinámico con movimiento */}
        <WorkflowBackground className="py-24 px-4">
          <section className="max-w-5xl mx-auto">
            <div className="space-y-16">
              {/* Paso 1, 2, 3... */}
            </div>
          </section>
        </WorkflowBackground>
      </main>
    </>
  );
}
\`\`\`

## 6. Custom Landing Page - Combinando múltiples backgrounds

\`\`\`tsx
'use client';

import {
  HeroBackground,
  CapabilitiesBackground,
  SolutionsBackground,
  WorkflowBackground,
  FAQBackground,
} from '@/components/section-background';

export default function CustomLanding() {
  return (
    <>
      <main>
        {/* Section 1: Hero */}
        <HeroBackground>
          <section className="min-h-screen flex items-center justify-center py-24">
            {/* Content */}
          </section>
        </HeroBackground>

        {/* Section 2: Features */}
        <CapabilitiesBackground>
          <section className="py-24">
            {/* Features Grid */}
          </section>
        </CapabilitiesBackground>

        {/* Section 3: Solutions */}
        <SolutionsBackground>
          <section className="py-24">
            {/* Solutions */}
          </section>
        </SolutionsBackground>

        {/* Section 4: Workflow */}
        <WorkflowBackground>
          <section className="py-24">
            {/* Workflow Steps */}
          </section>
        </WorkflowBackground>

        {/* Section 5: FAQ */}
        <FAQBackground>
          <section className="py-24">
            {/* FAQ */}
          </section>
        </FAQBackground>
      </main>
    </>
  );
}
\`\`\`

## 7. Case Studies Page - Con SectionBackground genérico

\`\`\`tsx
'use client';

import { SectionBackground } from '@/components/section-background';

export default function CaseStudiesPage() {
  return (
    <>
      <main>
        {/* Hero - Custom section type */}
        <SectionBackground section="hero" animated={true}>
          <section className="min-h-screen flex items-center justify-center py-24">
            <div className="text-center max-w-5xl mx-auto px-4">
              <h1 className="text-5xl font-bold mb-6">
                Casos de Éxito
              </h1>
              <p className="text-lg text-muted-foreground">
                Transformación real en empresas reales
              </p>
            </div>
          </section>
        </SectionBackground>

        {/* Case Studies Grid */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Case study cards */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
\`\`\`

## 8. Servicio Específico Page - `/app/servicios/[slug].tsx`

\`\`\`tsx
'use client';

import { SectionBackground } from '@/components/section-background';

export default function ServicePage({ params }: { params: { slug: string } }) {
  // Mapear slug a tipo de sección
  const sectionMap: Record<string, any> = {
    'agentes-vivos': 'workflow',
    'inteligencia-conversacional': 'capabilities',
    'orchestration': 'solutions',
  };

  const section = sectionMap[params.slug] || 'hero';

  return (
    <>
      <main>
        {/* Hero */}
        <SectionBackground section="hero" animated={true}>
          <section className="min-h-screen flex items-center justify-center py-24">
            {/* Service Hero */}
          </section>
        </SectionBackground>

        {/* Content - Usa el background apropiado según servicio */}
        <SectionBackground section={section} animated={true}>
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
              {/* Service Details */}
            </div>
          </section>
        </SectionBackground>
      </main>
    </>
  );
}
\`\`\`

## Notas de Implementación

### Estructura Recomendada

\`\`\`
Page
├─ HeroBackground
│  └─ Hero Content
├─ [OtherBackground]
│  └─ Main Content
├─ Regular Section (sin background)
│  └─ Extra Content
└─ FAQBackground
   └─ FAQ Content
\`\`\`

### Clases CSS Útiles

\`\`\`tsx
// Espaciado estándar para secciones
<section className="py-24 px-4">

// Contenedor máximo
<div className="max-w-5xl mx-auto">

// Para mobile responsivo
<section className="py-12 md:py-24 px-4 md:px-0">
\`\`\`

### Props Disponibles

\`\`\`tsx
// Todos los componentes aceptan:
<[Background]
  className="..." // CSS adicional
  animated={true} // true/false (default: true en componentes especializados)
>
  {children}
</[Background]>
\`\`\`

### Animaciones CSS Disponibles

\`\`\`css
.animate-float        /* Flotación suave */
.animate-float-slow   /* Flotación lenta */
.animate-pulse-glow   /* Glow pulsante */
\`\`\`

---

## Checklist para Implementación

Para cada página:
- [ ] Importar componente de background
- [ ] Envolver sección principal con background
- [ ] Verificar visualización en desktop
- [ ] Verificar visualización en tablet
- [ ] Verificar visualización en móvil
- [ ] Verificar en dark mode
- [ ] Verificar accesibilidad (a11y)
- [ ] Medir performance (Lighthouse)
- [ ] Obtener feedback visual

---

**Documentación de Referencia**: Ver `/docs/BACKGROUNDS_QUICK_REFERENCE.md`
