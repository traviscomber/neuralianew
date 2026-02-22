# Implementación de Backgrounds Técnicos - N3uralia

## Resumen
Se han creado sistemas de backgrounds técnicos dinámicos basados en la paleta de colores del brandbook. Cada sección del sitio tendrá un patrón SVG diferenciado con animaciones sutiles.

## Archivos Creados

1. **`/lib/background-patterns.ts`** - Generador de patrones SVG
   - Genera 5 tipos de patrones: nodes, circuits, lines, grid, mixed
   - Configurable por densidad y opacidad
   - Colores del brandbook integrados

2. **`/components/section-background.tsx`** - Componente reutilizable
   - `SectionBackground`: Componente genérico
   - Variantes especializadas: `HeroBackground`, `CapabilitiesBackground`, etc.
   - Soporte para animaciones y temas oscuros

3. **`/styles/backgrounds.css`** - Estilos y animaciones
   - Animaciones: float, pulse-glow, transitions
   - Overlays específicos por sección
   - Accesibilidad (prefers-reduced-motion)

4. **`/app/globals.css`** - Actualizado
   - Integración de estilos CSS de backgrounds

## Configuración por Sección

| Sección | Patrón | Color | Opacidad | Animación |
|---------|--------|-------|----------|-----------|
| Hero | Nodes | Muted Sage (#5CAAA5) | 25% | float |
| Capabilities | Circuits | Deep Charcoal (#3F2F28) | 45% | float |
| Solutions | Lines | Slate Gray (#697A8A) | 35% | float |
| Workflow | Mixed | Muted Sage (#5CAAA5) | 40% | float |
| Blog | Grid | Deep Charcoal (#3F2F28) | 20% | static |
| FAQ | Nodes | Muted Sage (#5CAAA5) | 30% | float |

## Cómo Usar

### Opción 1: Envolver una sección completa

```tsx
import { HeroBackground } from '@/components/section-background';

export function HeroSection() {
  return (
    <HeroBackground className="py-24">
      {/* Tu contenido aquí */}
    </HeroBackground>
  );
}
```

### Opción 2: Usar componente genérico

```tsx
import { SectionBackground } from '@/components/section-background';

export function MySection() {
  return (
    <SectionBackground section="capabilities" animated={true}>
      {/* Tu contenido */}
    </SectionBackground>
  );
}
```

### Opción 3: Envoltura en página

```tsx
import { HeroBackground, CapabilitiesBackground } from '@/components/section-background';

export default function Page() {
  return (
    <>
      <HeroBackground>
        <section className="min-h-screen flex items-center">
          {/* Hero content */}
        </section>
      </HeroBackground>

      <CapabilitiesBackground>
        <section className="py-24">
          {/* Capabilities content */}
        </section>
      </CapabilitiesBackground>
    </>
  );
}
```

## Personalización

### Modificar opacidad de una sección
En `/lib/background-patterns.ts`, actualiza `SECTION_PATTERNS`:

```ts
hero: {
  pattern: 'nodes',
  color: BRANDBOOK_COLORS.mutedSage,
  opacity: 0.35, // ← Aumenta o disminuye
  density: 0.4,
},
```

### Cambiar color de sección
```ts
capabilities: {
  pattern: 'circuits',
  color: BRANDBOOK_COLORS.slateGray, // ← Cambia a otro color
  opacity: 0.45,
  density: 0.6,
},
```

### Agregar nueva sección
1. Añade en `SECTION_PATTERNS`:
```ts
export const SECTION_PATTERNS: Record<SectionType, SectionPatternConfig> = {
  // ... existing
  myCustomSection: {
    pattern: 'mixed',
    color: BRANDBOOK_COLORS.mutedSage,
    opacity: 0.32,
    density: 0.45,
  },
};
```

2. Actualiza el tipo `SectionType` en la misma línea.

3. Usa en componente:
```tsx
<SectionBackground section="myCustomSection" animated={true}>
  {children}
</SectionBackground>
```

## Características

✓ **Responsivo**: Se adapta a móviles y tablets
✓ **Accesible**: Respeta `prefers-reduced-motion`
✓ **Dark Mode**: Soporte automático para modo oscuro
✓ **Performante**: SVG optimizado, animaciones CSS
✓ **Brandbook Compliant**: Usa colores oficiales
✓ **Animado**: Movimiento sutil y elegante

## Próximos Pasos

1. Implementar en `/app/page.tsx` (HomePage) - Hero section
2. Aplicar a `/app/capabilities/page.tsx`
3. Aplicar a `/app/soluciones/page.tsx`
4. Aplicar a `/app/como-trabajamos/page.tsx`
5. Aplicar a `/app/blog/page.tsx`
6. Aplicar a `/app/faq/page.tsx`

## Troubleshooting

**Los patrones no se ven:**
- Verifica que los colores en BRANDBOOK_COLORS sean correctos
- Aumenta la opacidad en SECTION_PATTERNS

**Animaciones lentas:**
- Reduce el valor de `density` en SECTION_PATTERNS
- Disminuye la duración de animación en `/styles/backgrounds.css`

**Rendimiento deficiente:**
- Desactiva animaciones: `animated={false}` en SectionBackground
- Reduce la densidad de patrones
