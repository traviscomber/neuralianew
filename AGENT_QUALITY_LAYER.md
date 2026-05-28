# Agent Quality Layer - N3uralia Setup ✅ ACTIVE

**Status**: Fully deployed and operational as of May 27, 2026

Esta es la "capa de calidad de agentes" para N3uralia. Convierte reglas documentadas en **automatizaciones ejecutables** que bloquean commits si el código no cumple standards.

## Cómo funciona

```
Agent edita código → Intenta commitear → Hooks se ejecutan automáticamente
                                        ↓
                            Lint + Format + Typecheck + Custom checks
                                        ↓
                        ✅ PASS → Commit permitido
                        ❌ FAIL → Commit bloqueado + Error detallado
```

## Componentes

### 1. **AGENTS.md** - Contexto Estratégico
Define la visión, principios arquitectónicos y estándares de código de N3uralia. No es un sistema de control, sino contexto para que agentes entiendan qué construir.

### 2. **Herramientas de Calidad**

- `nano-staged`: Corre validaciones solo en archivos modificados
- `husky`: Git hooks que ejecutan validaciones antes de commit
- `prettier`: Formatea código automáticamente
- `eslint`: Detecta errores de estilo y potenciales bugs
- `typescript`: Valida tipos (tsc --noEmit)

### 3. **.codex/hooks.json** - Hooks de Codex
Cuando el agente termina una tarea (Stop event), ejecuta automáticamente:
```
pnpm agent:check
```

Esto garantiza que todo cambio cumple standards antes de ser commiteable.

### 4. **Scripts Personalizados** (/scripts/)

#### check-design-tokens.js
Previene colores hardcodeados fuera del sistema de tokens:
```tsx
// ❌ RECHAZADO
<div className="bg-red-500">Bad</div>

// ✅ PERMITIDO
<div className="bg-primary">Good</div>
```

#### check-mock-data.js
Detecta y alerta sobre datos mock/test en producción:
```tsx
// ⚠️ ALERTA
const MOCK_USER = { id: 1, name: "Test" }
const password = "hardcoded123"
```

#### remove-console-logs.js
Limpia statements de debug antes de producción:
```tsx
// Automáticamente removido
console.log("[v0] Debug info")
```

## Comandos disponibles

```bash
# Verificar código manualmente
pnpm agent:check

# Formatear código
pnpm format

# Validar tipos
pnpm typecheck

# Linter
pnpm lint

# Setup inicial de husky (si es necesario)
pnpm husky init
```

## Flujo para Agentes

1. **Edita código** - Implementa feature o fix
2. **Ejecuta validaciones** - `pnpm agent:check`
3. **Si hay errores** - Ve el reporte, corrige
4. **Si todo pasó** - Haz commit
5. **Codex hook corre automáticamente** - Antes de poder finalizarse la tarea

## Beneficios

✅ **Consistencia** - Todo código sigue estándares  
✅ **Seguridad** - No se comitea código roto o con secretos  
✅ **Velocidad** - Autocorrección de formatting  
✅ **Confianza** - Blocks automáticos previenen regresos  
✅ **Documentación** - AGENTS.md = source of truth

## Para Futuros Proyectos

**IMPORTANTE**: Este setup es MANDATORY para todos los desarrollos.

Lee: `ORG_STANDARD_QUALITY_LAYER.md`

Para aplicar a un nuevo proyecto:
```bash
bash scripts/setup-quality-layer.sh
# Follow the prompts
pnpm agent:check
```

Proyectos que DEBEN tener la layer:
- DTC (Dynamic Training Carousel)
- Cleaner  
- Mining ERP
- CityPlanGo
- Visual Compare
- Todos los futuros

## Referencias

- [Nano-staged docs](https://github.com/usmanyunusov/nano-staged)
- [Husky docs](https://typicode.github.io/husky/)
- [Prettier config](https://prettier.io/docs/en/configuration.html)
- [ESLint custom rules](https://eslint.org/docs/latest/extend/custom-rules)

El futuro no es escribir mejores prompts, es construir repositorios que gobiernan a los agentes. 🚀
