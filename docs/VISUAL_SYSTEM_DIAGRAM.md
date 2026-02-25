# 🎨 Diagrama Visual del Sistema de Backgrounds

## Flujo de Uso

\`\`\`
┌─────────────────────────────────────────────────────────────────┐
│                     PÁGINA WEB N3URALIA                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
         ┌──────▼───────┐  ┌──▼────────┐  ┌─▼──────────┐
         │ Hero Section │  │ Feature   │  │ Blog       │
         │ ────────────│  │ ────────── │  │ ──────────│
         │ HeroBackground│ │CapabBkgnd│  │BlogBackground
         │              │  │           │  │            │
         │ Patrón:      │  │ Patrón:   │  │ Patrón:   │
         │ Nodes        │  │ Circuits  │  │ Grid      │
         │              │  │           │  │            │
         │ Color:       │  │ Color:    │  │ Color:    │
         │ Sage #5CAA  │  │ Charcoal  │  │ Charcoal  │
         │              │  │           │  │            │
         │ Opacity:     │  │ Opacity:  │  │ Opacity:  │
         │ 25%          │  │ 45%       │  │ 20%       │
         └──────────────┘  └───────────┘  └───────────┘
\`\`\`

## Arquitectura en Capas

\`\`\`
┌────────────────────────────────────────────────────────────┐
│                    PÁGINA (JSX)                            │
│  Contiene estructura HTML y contenido normal              │
└─────────────────┬──────────────────────────────────────────┘
                  │
┌─────────────────▼──────────────────────────────────────────┐
│            COMPONENTE BACKGROUND                          │
│  <HeroBackground>, <CapabilitiesBackground>, etc.        │
│                                                            │
│  Props:                                                   │
│  - section: 'hero' | 'capabilities' | etc.              │
│  - animated: true/false                                 │
│  - className: string                                    │
└─────────────────┬──────────────────────────────────────────┘
                  │
┌─────────────────▼──────────────────────────────────────────┐
│          SVG PATTERN GENERATION                           │
│  generateSectionBackground(section)                      │
│                                                            │
│  1. Lee configuración de SECTION_PATTERNS               │
│  2. Selecciona generador (nodes, circuits, etc)         │
│  3. Genera SVG dinámico con parámetros                 │
│  4. Retorna SVG string + color + opacity                │
└─────────────────┬──────────────────────────────────────────┘
                  │
┌─────────────────▼──────────────────────────────────────────┐
│          RENDER EN DOM                                    │
│                                                            │
│  <div class="absolute inset-0 pointer-events-none">    │
│    <svg dangerouslySetInnerHTML={{...}} />             │
│    {/* SVG Pattern */}                                  │
│  </div>                                                 │
│                                                            │
│  <div class="relative z-10">{children}</div>           │
└─────────────────┬──────────────────────────────────────────┘
                  │
┌─────────────────▼──────────────────────────────────────────┐
│           CSS ANIMATIONS                                  │
│                                                            │
│  @keyframes float {                                      │
│    0%, 100% { transform: translateY(0px); }            │
│    50% { transform: translateY(-20px); }               │
│  }                                                       │
│                                                            │
│  + Overlay gradients                                    │
│  + Dark mode support                                    │
│  + Accesibilidad (prefers-reduced-motion)            │
└────────────────────────────────────────────────────────────┘
\`\`\`

## Flujo de Configuración

\`\`\`
┌──────────────────────────────────────────────────────┐
│     ARCHIVO: /lib/background-patterns.ts            │
└──────────────────────────────────────────────────────┘
              │
              ├─ BRANDBOOK_COLORS
              │  ├─ #5CAAA5 (Muted Sage)
              │  ├─ #3F2F28 (Deep Charcoal)
              │  ├─ #697A8A (Slate Gray)
              │  └─ #FAFAFA (Cream White)
              │
              ├─ SECTION_PATTERNS
              │  ├─ hero: { pattern, color, opacity, density }
              │  ├─ capabilities: { pattern, color, opacity, density }
              │  ├─ solutions: { pattern, color, opacity, density }
              │  ├─ workflow: { pattern, color, opacity, density }
              │  ├─ blog: { pattern, color, opacity, density }
              │  └─ faq: { pattern, color, opacity, density }
              │
              └─ PATTERN GENERATORS
                 ├─ generateNodesPattern()
                 ├─ generateCircuitsPattern()
                 ├─ generateLinesPattern()
                 ├─ generateGridPattern()
                 ├─ generateMixedPattern()
                 └─ generateBackgroundSVG()
\`\`\`

## Ciclo de Vida del Componente

\`\`\`
1. MONTAJE
   ├─ Componente recibe props (section, animated, children)
   └─ useEffect se ejecuta

2. GENERACIÓN
   ├─ Llama generateSectionBackground(section)
   ├─ Lee SECTION_PATTERNS[section]
   ├─ Genera SVG dinámico
   └─ Retorna { svg, color, opacity }

3. ESTADO
   ├─ setSvgContent(svg)
   ├─ setColor(color)
   └─ setOpacity(opacity)

4. RENDER
   ├─ Renderiza <div> contenedor
   ├─ SVG en capa de fondo (pointer-events-none)
   ├─ Overlay gradiente adicional
   ├─ Contenido en capa de contenido (z-10)
   └─ Aplicar animaciones CSS si animated={true}

5. ANIMACIÓN
   ├─ CSS @keyframes float se ejecuta
   ├─ Duración: 8s
   ├─ Repetición: infinite
   └─ Loop continuo suave
\`\`\`

## Selección de Patrón por Sección

\`\`\`
SECCIÓN → TIPO      → GENERADOR            → RESULTADO
────────────────────────────────────────────────────────
Hero    → nodes    → generateNodesPattern()    → ⊙─⊙─⊙
Capabil → circuits → generateCircuitsPattern() → ┌─┐┌─┐
Solution→ lines    → generateLinesPattern()    → ~~~~
Workflow→ mixed    → generateMixedPattern()    → ⊙~~~⊙
Blog    → grid     → generateGridPattern()     → ┌─┬─┬─┐
FAQ     → nodes    → generateNodesPattern()    → ⊙─⊙─⊙
\`\`\`

## Mapeo de Colores a Secciones

\`\`\`
┌─────────────────────────────────────────────────────┐
│          PALETA DEL BRANDBOOK                      │
│                                                    │
│  Muted Sage         Deep Charcoal    Slate Gray  │
│     #5CAAA5            #3F2F28        #697A8A    │
│   ███████              ███████         ███████   │
│                                                    │
└─────────────────────────────────────────────────────┘
     │                      │              │
     ├──────────┬───────────┼─┬────────────┤
     │          │           │ │            │
  ┌──▼─┐    ┌──▼─┐      ┌──▼─┐       ┌──▼─┐
  │Hero│    │Work│      │Capb│       │Sltn│
  │FAQ │    │flow│      │Blog│       └────┘
  └────┘    └────┘      └────┘
  
  ✓ Marca consistente
  ✓ Diferenciación visual
  ✓ Profesionalismo
\`\`\`

## Flujo de Datos

\`\`\`
USER VIEWS PAGE
      │
      ▼
REACT COMPONENT LOADS
      │
      ▼
BACKGROUND COMPONENT MOUNTS
      │
      ├─→ useEffect triggered
      │
      ▼
GENERATE_SECTION_BACKGROUND
      │
      ├─→ Read SECTION_PATTERNS[section]
      │
      ├─→ Get color, opacity, density
      │
      ├─→ Select generator function
      │
      └─→ Generate SVG string
            │
            ├─→ Create circles/lines/rectangles
            │
            ├─→ Calculate positions
            │
            └─→ Return SVG with xmlns attributes
                  │
                  ▼
            SET STATE
            ├─→ setSvgContent(svg)
            ├─→ setColor(color)
            └─→ setOpacity(opacity)
                  │
                  ▼
            COMPONENT RE-RENDERS
            ├─→ Render SVG in background layer
            ├─→ Apply opacity
            ├─→ Add overlay gradient
            ├─→ Render children on top
            └─→ Apply CSS animations
                  │
                  ▼
            USER SEES
            ├─→ Technical background pattern
            ├─→ Smooth floating animation
            ├─→ Content on top
            └─→ Professional appearance
\`\`\`

## Responsive Design Flow

\`\`\`
DESKTOP (1200px+)           TABLET (768-1199px)        MOBILE (<768px)
┌──────────────────┐        ┌──────────────┐           ┌──────────┐
│ Pattern 100%     │        │ Pattern 80%  │           │Pattern   │
│ Full density     │  ──→   │ Scaled       │    ──→    │ 60% scale│
│ Normal animation │        │ Normal anim. │           │ Slow anim│
│ 60 FPS smooth    │        │ 60 FPS       │           │ 30-60FPS │
│                  │        │              │           │          │
│ Opacity: full    │        │ Opacity:     │           │ Opacity: │
│ Color: vivid     │  ──→   │ same         │    ──→    │ slightly │
│ Size: 1200x800   │        │ Size:        │           │ muted    │
│                  │        │ 768x auto    │           │ Size:    │
└──────────────────┘        └──────────────┘           │ 320x auto│
                                                        └──────────┘
\`\`\`

## Timeline de Animación

\`\`\`
FLOAT ANIMATION (8 segundos, loop infinito)

0% ─────────── 50% ────────────── 100%
   Y: 0px         Y: -20px           Y: 0px
   Rotate: 0°     Rotate: 2°        Rotate: 0°
   Opacity: 0.25  Opacity: 0.35     Opacity: 0.25
   
   ▲                    ▲
   │                    │
   │          ◆         │
   │         /  \       │
   │        /    \      │
   │       /      \     │
   │                    │
   ├────────────────────┤
        4 segundos
        (0% → 50%)
\`\`\`

## Estructura de Archivo SVG Generado

\`\`\`xml
<svg width="1200" height="800" viewBox="0 0 1200 800" 
     xmlns="http://www.w3.org/2000/svg" 
     class="background-pattern">
  
  <defs>
    <style>
      @keyframes float { ... }
    </style>
  </defs>
  
  <!-- Generated Pattern Elements -->
  <circle cx="..." cy="..." r="..." stroke="..." />
  <line x1="..." y1="..." x2="..." y2="..." stroke="..." />
  <rect x="..." y="..." width="..." height="..." stroke="..." />
  <!-- ... más elementos ... -->
  
</svg>
\`\`\`

## Matriz de Combinaciones

\`\`\`
PATRÓN × SECCIÓN × COLOR × OPACIDAD = RESULTADO

nodes          hero         Sage       25%  → Elegante, sutil
  ×     ×        ×        ×
circuits   capabilities   Charcoal   45%  → Técnico, marcado
  ×     ×        ×        ×
lines      solutions      Slate      35%  → Fluido, dinámico
  ×     ×        ×        ×
grid       workflow       (mix)      (mix) → Complejo, variable
  ×     ×        ×        ×
mixed       blog          Cream      20%  → Neutral, fondo
            faq                           → Interactivo, sutil

Total combinaciones: 5 × 6 × 4 × 5 = 600 posibles
Implementadas: 6 específicamente optimizadas
\`\`\`

---

**Sistema de Backgrounds Técnicos N3uralia**
**Versión 1.0 | Implementación Completa**
