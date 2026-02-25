# Professional Background System - N3uralia

## Overview

El nuevo sistema de backgrounds profesionales para N3uralia ofrece:

- **6 patrones únicos** optimizados para diferentes secciones
- **Control de intensidad** (subtle, normal, bold) para personalización
- **Animaciones sutiles** que respetan `prefers-reduced-motion`
- **Colores alineados con brandbook** (Sage, Charcoal, Slate)
- **Rendimiento optimizado** con SVG escalable

## Patrones Disponibles

### 1. Hero (Nodos Conectados)
- **Mejor para:** Hero sections, introducción
- **Color:** Muted Sage (#5CAAA5)
- **Patrón:** Nodos dispersos con conexiones suaves
- **Intensidad por defecto:** Normal

\`\`\`tsx
<SectionBackground section="hero" intensity="normal">
  {/* Your hero content */}
</SectionBackground>
\`\`\`

### 2. Capabilities (Circuitos)
- **Mejor para:** Feature showcase, technical details
- **Color:** Deep Charcoal (#3F2F28)
- **Patrón:** Grid con líneas conectando nodos
- **Intensidad por defecto:** Normal

\`\`\`tsx
<SectionBackground section="capabilities" intensity="bold">
  {/* Your features */}
</SectionBackground>
\`\`\`

### 3. Solutions (Flujo)
- **Mejor para:** Solutions, process, journey
- **Color:** Slate Gray (#697A8A)
- **Patrón:** Curvas fluidas suaves
- **Intensidad por defecto:** Normal

\`\`\`tsx
<SectionBackground section="solutions" intensity="normal">
  {/* Your solutions */}
</SectionBackground>
\`\`\`

### 4. Workflow (Nodos Densos)
- **Mejor para:** Process, methodology, workflows
- **Color:** Muted Sage (#5CAAA5)
- **Patrón:** Nodos densos con múltiples conexiones
- **Intensidad por defecto:** Normal

\`\`\`tsx
<SectionBackground section="workflow" intensity="normal">
  {/* Your workflow steps */}
</SectionBackground>
\`\`\`

### 5. Blog (Grid)
- **Mejor para:** Blog posts, articles, content
- **Color:** Deep Charcoal (#3F2F28)
- **Patrón:** Grid subtil de líneas
- **Intensidad por defecto:** Subtle

\`\`\`tsx
<SectionBackground section="blog" intensity="subtle">
  {/* Your blog content */}
</SectionBackground>
\`\`\`

### 6. FAQ (Nodos Dispersos)
- **Mejor para:** FAQ, Q&A sections
- **Color:** Muted Sage (#5CAAA5)
- **Patrón:** Pocos nodos, muy abierto
- **Intensidad por defecto:** Normal

\`\`\`tsx
<SectionBackground section="faq" intensity="normal">
  {/* Your FAQ items */}
</SectionBackground>
\`\`\`

## Niveles de Intensidad

### Subtle (60% opacity)
- Perfecto para contenido denso
- Mantiene el foco en el texto
- Ideal para blog y artículos

### Normal (100% opacity)
- Balance perfecto entre patrón y contenido
- Opción por defecto para la mayoría de secciones
- Crea presencia sin distraer

### Bold (140% opacity)
- Máximo impacto visual
- Perfecto para hero sections importantes
- Genera energía y dinamismo

## Componentes Especializados

Alternativamente, puedes usar componentes pre-configurados:

\`\`\`tsx
import {
  HeroBackground,
  CapabilitiesBackground,
  SolutionsBackground,
  WorkflowBackground,
  BlogBackground,
  FAQBackground,
} from '@/components/section-background';

// Uso
<HeroBackground intensity="normal">
  {/* content */}
</HeroBackground>
\`\`\`

## Personalización

### Cambiar colores

Edita `/lib/background-patterns.ts`:

\`\`\`typescript
const brandColors = {
  sage: '#5CAAA5',      // Cambiar aquí
  charcoal: '#3F2F28',  // Cambiar aquí
  slate: '#697A8A',     // Cambiar aquí
};
\`\`\`

### Ajustar opacidades

En el mismo archivo, modifica los valores de `opacity` en cada sección:

\`\`\`typescript
hero: {
  svg: generateNodesPattern(brandColors.sage, 12),
  color: brandColors.sage,
  opacity: 0.25,  // Cambiar aquí (0-1)
},
\`\`\`

### Crear nuevo patrón

Agrega una nueva función generadora:

\`\`\`typescript
function generateCustomPattern(color: string): string {
  return `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <!-- Tu SVG aquí -->
    </svg>
  `;
}
\`\`\`

## Testing

Visita `/backgrounds-demo` para ver todos los patrones en tiempo real y ajustar intensidades.

## Características Técnicas

- **SVG Escalable:** Se adapta a cualquier resolución
- **Performance:** Optimizado con `will-change` y `backface-visibility`
- **Animación:** Sutil float animation (20s ease-in-out)
- **Accesibilidad:** Respeta `prefers-reduced-motion`
- **Responsive:** Escala adecuadamente en mobile
- **Dark Mode:** Soporte automático

## Notas de Implementación

1. Todos los backgrounds usan `mix-blend-mode: overlay` para mejor integración
2. Las capas se apilan: gradient base → patrón SVG → accent glow → contenido
3. Los SVG se generan dinámicamente en el cliente (sin impacto en build)
4. Cada sección puede tener su propio `className` para espaciado adicional

## Soporte

Para cambiar backgrounds en toda la aplicación:

\`\`\`tsx
// En cualquier página
<SectionBackground section="hero" intensity="bold" className="py-32">
  <div className="max-w-5xl mx-auto">
    {/* Tu contenido */}
  </div>
</SectionBackground>
\`\`\`

**Los backgrounds ahora son profesionales, personalizables y optimizados. Usa la página demo para ajustar según necesites.**
