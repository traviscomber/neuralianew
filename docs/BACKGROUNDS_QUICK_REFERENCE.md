# 🎨 Backgrounds Técnicos - Referencia Rápida

## Componentes Disponibles

```tsx
// Hero Section - Nodos conectados, Sage
import { HeroBackground } from '@/components/section-background';
<HeroBackground><section>...</section></HeroBackground>

// Capabilities - Circuitos densos, Deep Charcoal
import { CapabilitiesBackground } from '@/components/section-background';
<CapabilitiesBackground><section>...</section></CapabilitiesBackground>

// Solutions - Líneas fluidas, Slate Gray
import { SolutionsBackground } from '@/components/section-background';
<SolutionsBackground><section>...</section></SolutionsBackground>

// Workflow - Patrón mixto dinámico, Sage
import { WorkflowBackground } from '@/components/section-background';
<WorkflowBackground><section>...</section></WorkflowBackground>

// Blog - Grid sutil, Deep Charcoal
import { BlogBackground } from '@/components/section-background';
<BlogBackground><section>...</section></BlogBackground>

// FAQ - Nodos interactivos, Sage
import { FAQBackground } from '@/components/section-background';
<FAQBackground><section>...</section></FAQBackground>

// Genérico
import { SectionBackground } from '@/components/section-background';
<SectionBackground section="hero" animated={true}>
  <section>...</section>
</SectionBackground>
```

## Paleta de Colores

```
Muted Sage (#5CAAA5)      → Hero, Workflow, FAQ
Deep Charcoal (#3F2F28)   → Capabilities, Blog
Slate Gray (#697A8A)      → Solutions
Cream White (#FAFAFA)     → Base background
```

## Personalización Rápida

### Cambiar opacidad de una sección
Edita `/lib/background-patterns.ts`:
```ts
hero: {
  opacity: 0.30, // ← Aumenta (más visible) o disminuye (más sutil)
}
```

### Cambiar color de una sección
```ts
capabilities: {
  color: BRANDBOOK_COLORS.mutedSage, // ← Cambia a otro color
}
```

### Cambiar tipo de patrón
```ts
solutions: {
  pattern: 'mixed', // ← nodes, circuits, lines, grid, mixed
}
```

### Cambiar densidad
```ts
workflow: {
  density: 0.6, // ← 0-1 (más denso = más patrón)
}
```

### Desactivar animaciones
```tsx
<HeroBackground animated={false}>
  {children}
</HeroBackground>
```

## Archivo de Configuración Principal
**`/lib/background-patterns.ts`** - aquí está todo:
- `BRANDBOOK_COLORS` - Colores oficiales
- `SECTION_PATTERNS` - Config por sección
- `generateBackgroundSVG()` - Generador SVG
- `getSectionPatternConfig()` - Obtener config

## Estilos Base
**`/app/globals.css`** - Contiene:
- `.animate-float` - Animación flotante
- `.background-pattern` - Estilos SVG
- `.{section}-overlay` - Overlays gradiente

**`/styles/backgrounds.css`** (opcional, ya incluido en globals)

## Secciones Actualizadas
✅ `/app/page.tsx` (Hero, Capabilities, Workflow, Solutions)

## Próximas a Actualizar
- `/app/capabilities/page.tsx`
- `/app/soluciones/page.tsx`
- `/app/como-trabajamos/page.tsx`
- `/app/blog/page.tsx`
- `/app/faq/page.tsx`

## Características
✅ Responsivo
✅ Dark Mode
✅ Accesible (prefers-reduced-motion)
✅ Performante (CSS puro)
✅ Brandbook compliant
✅ Animaciones sutiles

## Documentación Completa
Ver: `/docs/BACKGROUND_IMPLEMENTATION.md`
Ver: `/docs/BACKGROUND_SYSTEM_SUMMARY.md`

## Troubleshooting

**No se ven los patrones**
→ Aumenta `opacity` en SECTION_PATTERNS

**Rendimiento lento**
→ Reduce `density` o desactiva `animated`

**Colores incorrectos**
→ Verifica `BRANDBOOK_COLORS` en background-patterns.ts

**Animaciones muy rápidas/lentas**
→ Modifica duración en `/app/globals.css` (busca `animation: float`)
