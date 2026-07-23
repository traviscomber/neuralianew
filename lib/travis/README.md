# Travis: Reusable WhatsApp Sales Agent

Travis es un agente de IA reutilizable para vender por WhatsApp. Está diseñado para ser fácil de portar a cualquier proyecto.

## 🚀 Quick Start (5 minutos)

### 1. Copiar la librería a tu proyecto
```bash
# En tu proyecto
cp -r lib/travis /ruta/a/tu/proyecto/lib/
```

### 2. Crear endpoint webhook
```typescript
// app/api/whatsapp/webhook/route.ts

import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_N3URALIA } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_N3URALIA)
}

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_N3URALIA)
}
```

### 3. Configurar ambiente
```bash
# .env.local o Vercel project settings
OPENAI_API_KEY=sk-proj-...
GREEN_API_INSTANCE_ID=710722691570
GREEN_API_TOKEN=...
WHATSAPP_NOTIFY_PHONE=56993826127
```

### 4. Activar webhook en Green-API
```bash
curl -X POST "https://7107.api.greenapi.com/waInstance710722691570/setSettings/YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "webhookUrl": "https://tu-dominio.com/api/whatsapp/webhook",
    "incomingWebhook": "yes",
    "outgoingMessageWebhook": "no"
  }'
```

---

## 🎯 Customizar Travis para tu proyecto

### Crear una configuración nueva

**1. Define tu catálogo y pricing:**

```typescript
// lib/my-project-knowledge.ts
export const MY_CATALOG = `## MIS PRODUCTOS
- Producto A: Para X industria, resuelve Y
- Producto B: Para Z industria, resuelve W
`

export const MY_PRICING = `## CÓMO COTIZAMOS
Explicar tu modelo de pricing...
`
```

**2. Crea la configuración:**

```typescript
// lib/travis/configs.ts - agregar esto

import { MY_CATALOG, MY_PRICING } from "@/lib/my-project-knowledge"

export const TRAVIS_CONFIG_MY_PROJECT: TravisConfig = {
  agentName: "Sofia", // o tu nombre preferido
  companyName: "Mi Empresa",
  model: "gpt-4o-mini",
  teamNotifyPhone: process.env.WHATSAPP_NOTIFY_PHONE || "569XXXXXXXX",
  systemPromptPrefix: `Eres "Sofia", la asistente comercial de Mi Empresa por WhatsApp...
[escribe tu system prompt aquí]
`,
  catalogMarkdown: MY_CATALOG,
  pricingApproach: MY_PRICING,
}
```

**3. Usa en tu webhook:**

```typescript
import { TRAVIS_CONFIG_MY_PROJECT } from "@/lib/travis/configs"

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_MY_PROJECT)
}
```

---

## 📦 Estructura de archivos

```
lib/travis/
├── types.ts           # Tipos e interfaces compartidas
├── handler.ts         # Lógica core del webhook (reutilizable)
├── configs.ts         # Configuraciones por proyecto
├── README.md          # Este archivo
└── index.ts           # (opcional) Exportar todo
```

---

## 🔑 Env Vars Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `OPENAI_API_KEY` | Tu clave de OpenAI | `sk-proj-...` |
| `GREEN_API_INSTANCE_ID` | ID de instancia Green-API (12 dígitos) | `710722691570` |
| `GREEN_API_TOKEN` | Token de Green-API | `e1a25a3890ae429c...` |
| `WHATSAPP_NOTIFY_PHONE` | Teléfono del equipo para alertas | `56993826127` |

---

## 🤖 Flujo de conversación

Travis automáticamente:

1. **Descubre** el dolor del cliente → hace 1 pregunta a la vez
2. **Educa** → explica la solución sin jerga
3. **Recomienda** → conecta con tu producto/servicio ideal
4. **Cotiza** → sin inventar precios, invita al diagnóstico
5. **Maneja objeciones** → responde con argumentos sólidos
6. **Escala a humano** → cuando es apropiado, notifica al equipo

---

## 🔌 Integraciones que ya están incluidas

- **Green-API** — Envío/recepción de WhatsApp
- **OpenAI** — Generación de respuestas con `gpt-4o-mini`
- **Rate limiting** — Por teléfono/chat

---

## 📝 Debugging

Revisa los logs en Vercel:

```bash
vercel logs -f  # follow logs en tiempo real
```

Mensajes de debug aparecen con `[travis]`:
- `[travis] OpenAI error: 401` — Clave de OpenAI inválida o sin cuota
- `[travis] Failed to send reply` — Problema con Green-API

---

## 🚨 Troubleshooting

**Bot no responde:**
- ¿Env vars configuradas? → Revisar `OPENAI_API_KEY`, `GREEN_API_TOKEN`
- ¿Cuota de OpenAI? → Cargar saldo en platform.openai.com
- ¿Webhook URL correcta en Green-API?

**No se escala a humano:**
- ¿`WHATSAPP_NOTIFY_PHONE` correcto? → Revisar número del equipo
- ¿Sistema prompt tiene la sección "CUÁNDO PASAR A UN HUMANO"?

**Mensajes lentos:**
- Normal: Travis genera respuesta con OpenAI (~2-5 segundos)
- Si >10s: Revisar latencia de Green-API

---

## 📞 Soporte

Travis está documentado en `lib/travis/`. Para cambios core, revisa `handler.ts` y `types.ts`.

Para customizaciones por proyecto, edita tu config en `configs.ts` o crea una nueva.

Happy selling! 🚀
