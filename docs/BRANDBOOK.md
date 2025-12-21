# N3URALIA BRANDBOOK

## Identidad Visual Empresarial
*Una guía completa para mantener la coherencia visual y los valores de N3uralia en todas las comunicaciones*

---

## I. FILOSOFÍA DE MARCA

**N3uralia** es una orquestación de IA de nivel empresarial diseñada para tomadores de decisiones serios. Nuestra identidad visual refleja:

- **Elegancia**: Diseño refinado, no excesivamente ornamentado
- **Confiabilidad**: Colores sólidos, tipografía clara, jerarquía establecida
- **Innovación**: Movimiento sutil, transiciones suaves, espaciado equilibrado
- **Profesionalismo**: Paleta sober, legibilidad perfecta, proporciones matemáticas

---

## II. PALETA DE COLORES

### Colores Primarios

| Color | Uso | HSL | RGB | Código |
|-------|-----|-----|-----|--------|
| **Deep Charcoal** | Encabezados, CTAs, elementos principales | 15° 17% 25% | #3F2F28 | `--primary` |
| **Cream White** | Fondos, espacios negativos | 0° 0% 98% | #FAFAFA | `--background` |
| **Slate Gray** | Texto secundario, bordes | 215° 14% 50% | #697A8A | `--secondary` |

### Colores de Acento

| Color | Uso | HSL | RGB | Código |
|-------|-----|-----|-----|--------|
| **Muted Sage** | Acciones positivas, botones hover | 160° 25% 50% | #5CAAA5 | `--accent` |
| **Neutral Gray** | Texto terciario, placeholders | 215° 20% 85% | #D8DEE3 | `--muted` |
| **Deep Red** | Alertas, errores | 0° 84% 60% | #DC4A4A | `--destructive` |

### Paleta en Contexto

```
┌─────────────────────────────────────────┐
│  LIGHT MODE (Default)                   │
├─────────────────────────────────────────┤
│ Fondo:     #FAFAFA (Cream White)        │
│ Texto:     #3F2F28 (Deep Charcoal)      │
│ Secundario: #697A8A (Slate Gray)        │
│ Acento:    #5CAAA5 (Muted Sage)         │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  DARK MODE                              │
├─────────────────────────────────────────┤
│ Fondo:     #1F1915 (Deep Charcoal)      │
│ Texto:     #F5F5F5 (Off White)          │
│ Secundario: #9BA8B3 (Light Slate)       │
│ Acento:    #5CAAA5 (Muted Sage)         │
└─────────────────────────────────────────┘
```

---

## III. TIPOGRAFÍA

### Familia de Fuentes

| Uso | Fuente | Peso | Tamaño |
|-----|--------|------|--------|
| **Encabezados H1-H3** | Inter | 700 (Bold) | 32px - 48px |
| **Encabezados H4-H6** | Inter | 600 (SemiBold) | 18px - 24px |
| **Cuerpo de texto** | Inter | 400 (Regular) | 14px - 16px |
| **Etiquetas/Tags** | Inter | 500 (Medium) | 12px - 13px |
| **Código/Terminal** | JetBrains Mono | 400 (Regular) | 12px - 14px |

### Escalas de Tipografía

```
H1: 48px / 1.2 line-height → Títulos principales (héroes)
H2: 36px / 1.3 line-height → Títulos de secciones
H3: 28px / 1.4 line-height → Subtítulos
H4: 24px / 1.5 line-height → Encabezados de tarjeta
Body XL: 18px / 1.6 line-height → Texto destacado
Body: 16px / 1.6 line-height → Párrafos principales
Body SM: 14px / 1.5 line-height → Texto secundario
Label: 13px / 1.5 line-height → Etiquetas y avisos
Caption: 12px / 1.4 line-height → Pie de foto, meta
```

### Directrices de Tipografía

- ✓ Máximo 2 familias de fuentes (Inter para UI, JetBrains Mono para código)
- ✓ Contraste mínimo 4.5:1 para legibilidad WCAG AA
- ✓ Line-height de 1.4 - 1.6 para readability
- ✗ NO usar fuentes decorativas en cuerpo de texto
- ✗ NO usar tamaños menores a 12px

---

## IV. ESPACIADO Y RITMO

### Sistema de Espaciado (Escala de 4px)

```
4px   - Espacios muy compactos (ícono-texto)
8px   - Espacios dentro de componentes
12px  - Espacios entre elementos relacionados
16px  - Espacios entre secciones menores
24px  - Espacios entre secciones
32px  - Espacios entre bloques principales
48px  - Espacios entre secciones principales
64px  - Espacios entre grandes secciones
```

### Márgenes y Paddings

| Componente | Padding | Margin |
|------------|---------|--------|
| Botón | 10px 16px | N/A |
| Card | 24px | 16px |
| Input | 10px 12px | 0 |
| Sección | 48px/24px | 0 |
| Contenedor | 64px | 0 |

---

## V. SOMBRAS Y PROFUNDIDAD

### Sistema de Sombras

```
Sombra Suave (Hover):
box-shadow: 0 4px 12px rgba(0,0,0,0.08)

Sombra Media (Elevada):
box-shadow: 0 8px 24px rgba(0,0,0,0.12)

Sombra Fuerte (Modal):
box-shadow: 0 20px 48px rgba(0,0,0,0.16)

Sombra Interna (Input focus):
box-shadow: inset 0 0 0 2px #5CAAA5
```

---

## VI. BORDES Y RADIUS

### Border Radius

```
Redondeado (Defecto):     8px  (buttons, cards, inputs)
Suave:                    6px  (components)
Muy redondeado:          12px  (large components)
Pillado:                 999px (badges, circular elements)
```

### Bordes

```
Estándar:    1px solid #D8DEE3
Fuerte:      2px solid #3F2F28
Focus:       2px solid #5CAAA5
Destructive: 1px solid #DC4A4A
```

---

## VII. ANIMACIONES Y MOVIMIENTO

### Principios de Movimiento

- **Duración**: 200ms - 400ms (no más de 600ms)
- **Easing**: ease-out para entradas, ease-in-out para transiciones
- **Timing**: Reducción de movimiento respetada para accesibilidad

### Transiciones Permitidas

| Acción | Duración | Easing | Ejemplo |
|--------|----------|--------|---------|
| Hover estados | 200ms | ease-out | Button color change |
| Fade in | 300ms | ease-out | Modal open |
| Slide up | 400ms | ease-out | Card entrance |
| Expansion | 300ms | ease-in-out | Accordion |

---

## VIII. COMPONENTES CLAVE

### Botones

**Primario** (CTA Principal)
- Background: #3F2F28 (Deep Charcoal)
- Texto: #FAFAFA (White)
- Hover: #5CAAA5 (Sage, con transición suave)
- Padding: 10px 24px
- Border-radius: 8px

**Secundario** (Acciones alternas)
- Background: transparent
- Borde: 1px solid #D8DEE3
- Texto: #3F2F28
- Hover: Background #F5F5F5

**Tertiary** (Acciones menores)
- Background: transparent
- Texto: #697A8A
- Hover: Texto #3F2F28 + underline

### Cards

- Background: #FFFFFF
- Border: 1px solid #E8ECEF
- Padding: 24px
- Border-radius: 8px
- Shadow: 0 4px 12px rgba(0,0,0,0.08)
- Hover: Shadow aumenta, border-color → #5CAAA5

### Inputs

- Background: #FFFFFF
- Border: 1px solid #D8DEE3
- Padding: 10px 12px
- Border-radius: 8px
- Focus: Border + shadow interna Sage

### Badges

- Pequeña: 12px text, 4px 8px padding
- Mediana: 13px text, 6px 12px padding
- Colores: Sage (default), Gray (muted), Red (destructive)

---

## IX. FOTOGRAFÍA E ILUSTRACIONES

### Estilo de Fotografía

- **Preferencia**: Fotografías reales > Ilustraciones abstractas
- **Tono**: Profesional, corporativo, humano (no tech-forward)
- **Composición**: Planos limpios, fondo desenfocado, sujeto centrado
- **Colores**: Mantener coherencia con paleta de marca

### Ilustraciones (Si se necesitan)

- ✓ Iconografía simple (líneas de 2px)
- ✓ Ilustraciones geométricas suaves
- ✗ Emojis o arte decorativo
- ✗ Gradientes chillones o efectos 3D

---

## X. ICONOGRAFÍA

### Estilo de Iconos

- **Tamaño estándar**: 16px, 20px, 24px
- **Grosor de línea**: 1.5px - 2px
- **Estilo**: Line-based, minimal, profesional
- **Paleta**: Charcoal (#3F2F28), Gray (#697A8A), Sage (#5CAAA5)

### Usos Comunes

```
24px → Iconos principales, headers
20px → Iconos en botones, cards
16px → Iconos de formulario, meta
```

---

## XI. TOKENS DE DISEÑO CSS

### Variables Disponibles

```css
/* Colores */
--background:              0 0% 98%
--foreground:              15 17% 15%
--primary:                 15 17% 25%
--secondary:               215 14% 50%
--accent:                  160 25% 50%
--muted:                   215 20% 85%
--destructive:             0 84% 60%

/* Espaciado */
--radius:                  0.5rem (8px)

/* Dark Mode */
.dark { ... }              (automático)
```

---

## XII. APLICACIONES DE MARCA

### Encabezados Web

```html
<h1 class="text-4xl font-bold text-foreground">
  Orquestación de IA Empresarial
</h1>
<p class="text-lg text-muted-foreground">
  Conecta agentes, flujos de trabajo y datos en una plataforma integrada
</p>
```

### Hero Section

```html
<section class="bg-background">
  <div class="container py-24 lg:py-32">
    <div class="max-w-3xl">
      <h1>Encabezado principal (H1)</h1>
      <p class="text-xl">Subtítulo descriptivo (Body XL)</p>
      <div class="flex gap-4 mt-8">
        <button class="btn-primary">CTA Primaria</button>
        <button class="btn-secondary">CTA Secundaria</button>
      </div>
    </div>
  </div>
</section>
```

### Card Component

```html
<div class="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md">
  <h3 class="text-xl font-semibold text-foreground">Título</h3>
  <p class="text-sm text-muted-foreground mt-2">Descripción</p>
</div>
```

---

## XIII. CASOS DE ERRORES COMUNES

❌ **NO HACER**
- Mezclar múltiples familias de fuentes
- Usar colores no definidos (hex absolutos)
- Exceder velocidad de animación de 600ms
- Usar tamaños inconsistentes de espaciado
- Colocar texto sin suficiente contraste
- Agregar sombras excesivas o complejas

✓ **SÍ HACER**
- Usar tokens CSS para colores
- Mantener escala de 4px en espaciado
- Validar contraste con WCAG AA (4.5:1)
- Usar clases Tailwind estandarizadas
- Respetar `prefers-reduced-motion` para accesibilidad
- Documentar excepciones de marca

---

## XIV. CONTACTO Y SOPORTE

Para preguntas sobre la implementación de este brandbook:
- **Equipo de Diseño**: design@n3uralia.com
- **Repositorio**: github.com/traviscomber/neuralianew
- **Versión**: 1.0 (Enero 2025)

---

**Última actualización**: 21 Diciembre 2024  
**Próxima revisión**: Junio 2025
