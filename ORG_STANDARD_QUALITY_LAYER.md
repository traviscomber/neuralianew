# Agent Quality Layer - Estándar Organizacional

**Documento**: Decisión organizacional - May 27, 2026  
**Status**: ✅ MANDATORY para todos los desarrollos futuros  
**Owner**: Arquitectura de N3uralia

## Decisión

No más debugging manual. Todo proyecto nuevo o migración de existente DEBE tener la Agent Quality Layer instalada. Esta es una decisión nivel arquitectura.

## Qué es

Un sistema automático que:
- Valida código ANTES de permitir commits
- Ejecuta checks sin intervención manual
- Bloquea código roto/inseguro
- Formatea automáticamente
- Documental estándares en AGENTS.md (human + machine readable)

## Por qué

```
Manual debugging → Tiempo perdido, inconsistencia, bugs en producción
Automated layer → Zero downtime, consistencia garantizada, faster iterations
```

## Cómo aplicar

### Para proyectos nuevos

```bash
# 1. Crea el proyecto normalmente
pnpm create next-app mi-proyecto

# 2. Copia los archivos base desde N3uralia
cp -r n3uralia/scripts mi-proyecto/
cp -r n3uralia/.husky mi-proyecto/
cp n3uralia/.nano-staged.json mi-proyecto/
cp n3uralia/.prettierrc mi-proyecto/
cp n3uralia/.prettierignore mi-proyecto/

# 3. Adapta AGENTS.md a tu proyecto
# (Copia n3uralia/AGENTS.md como template)
cp n3uralia/AGENTS.md mi-proyecto/

# 4. Instala y ejecuta setup
cd mi-proyecto
bash scripts/setup-quality-layer.sh
```

### Para proyectos existentes

```bash
# 1. Navega al proyecto
cd proyecto-existente

# 2. Ejecuta el setup script
bash /path/to/n3uralia/scripts/setup-quality-layer.sh

# 3. Adapta AGENTS.md (crear nuevo)
# 4. Prueba: pnpm agent:check
# 5. Commit: git add -A && git commit
```

## Archivos necesarios

```
project/
├── AGENTS.md                      # Visión + estándares del proyecto
├── AGENT_QUALITY_LAYER.md         # Documentación operativa
├── .nano-staged.json              # Qué validar
├── .prettierrc                    # Cómo formatear
├── .prettierignore                # Qué no formatear
├── .husky/
│   └── pre-commit                 # Hook que corre agent:check
├── scripts/
│   ├── check-design-tokens.js     # Previene colores hardcodeados
│   ├── check-mock-data.js         # Detecta datos mock
│   └── remove-console-logs.js     # Limpia debug statements
└── package.json (con scripts)
```

## package.json - Scripts necesarios

```json
{
  "scripts": {
    "agent:check": "nano-staged --unstaged --quiet --bail",
    "format": "prettier --write .",
    "typecheck": "tsc --noEmit",
    "lint": "next lint"
  },
  "devDependencies": {
    "husky": "^9.0.11",
    "nano-staged": "^1.0.0",
    "prettier": "^3.1.1"
  }
}
```

## AGENTS.md - Template

Cada proyecto debe tener su propio AGENTS.md que documente:

```markdown
# [PROJECT_NAME] - Agent Context

## Visión
[Descripción clara de qué es el proyecto]

## Principios Arquitectónicos
1. [Principio 1]
2. [Principio 2]

## Estándares de Código
- Lenguaje: TypeScript (strict mode)
- Styling: Design tokens + Tailwind
- Componentes: Reutilizables, documentados
- Testing: [Si aplica]

## Validaciones Automáticas
- Colores: Solo design tokens
- Mock data: Detectada y alerta
- Debug: Auto-removido
- Types: Strict validation

## Convenciones
- File naming: kebab-case
- Variables: camelCase
- Constants: UPPER_CASE
```

## Flujo de desarrollo

```
Agent abre IDE
    ↓
Edita código (normalmente)
    ↓
Ejecuta: pnpm agent:check
    ↓
┌─────────────────────────────────────┐
│ ¿Pasan todas las validaciones?      │
└─────────────────────────────────────┘
    ↓                ↓
   SÍ              NO
    ↓               ↓
Hace commit    Lee errores
  (push)       Corrige código
              Repite ↑
```

## Beneficios medibles

| Métrica | Antes | Después |
|---------|-------|---------|
| Errores en main | Frecuentes | Bloqueados |
| Consistency | Manual | 100% |
| PR reviews | Largo (style) | Corto (logic) |
| Hotfixes | Alto | Bajo |
| Deploy confidence | Baja | Alta |

## Customización por proyecto

### N3uralia (SaaS - AI agents)
- Colores: Design tokens de brand
- Design system: Shadcn/ui
- Type safety: Strict
- Secrets: Auto-detect passwords, keys

### Cleaner (Admin tool)
- Colores: Admin-specific palette
- Validations: Business rule checks
- Mock data: Detect seed data

### Mining ERP (Enterprise)
- Colores: Mining industry standard
- Validations: Regulatory compliance checks
- Documentation: Spanish + English

### Tourism SPA
- Colores: Tourism brand palette
- i18n checks: ES/EN parity
- Performance: No console logs

## Support + Troubleshooting

### "nano-staged not found"
```bash
pnpm install nano-staged --save-dev
```

### "husky pre-commit hook not working"
```bash
chmod +x .husky/pre-commit
pnpm husky install
```

### "My validation is too strict"
Edit `.nano-staged.json` to adjust:
```json
{
  "*.tsx": [
    "eslint --max-warnings=5",
    "prettier --write"
  ]
}
```

### "I need to skip validation"
```bash
# Only in emergencies (requires team lead approval)
git commit --no-verify -m "Emergency fix"
```

## Roadmap

- [ ] **Phase 1 (May)**: N3uralia operacional ✅
- [ ] **Phase 2 (Jun)**: Migrar 2 proyectos existentes
- [ ] **Phase 3 (Jul)**: Todos los nuevos proyectos con layer
- [ ] **Phase 4 (Aug)**: Custom rules per project
- [ ] **Phase 5 (Sep)**: Dashboard de quality metrics

## Contacto

- Setup issues: team@n3uralia.com
- AGENTS.md template: architecture@n3uralia.com
- Custom validation rules: devops@n3uralia.com

---

**The future is not writing better prompts. The future is building repositories that govern agents.**
