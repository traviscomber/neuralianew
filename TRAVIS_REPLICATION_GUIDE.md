# Travis: WhatsApp Sales Agent - Replication Guide

Travis es un agente de ventas de IA consultivo para WhatsApp. Fue diseñado como un **"cañón de conexión" reutilizable** que puedes instalar en cualquier proyecto en 5 minutos.

## ¿Qué hace Travis?

- **Vende de forma consultiva**: descubre dolor → educa → recomienda producto real → cotiza → escala a humano
- **Maneja objeciones duras**: escepticismo, competencia, presión de precio
- **Escalamiento confiable**: detección de leads calificados y notificación al equipo
- **Catálogo flexible**: cada proyecto define sus propios productos/servicios

## Flujo Actual (N3uralia)

```
Cliente escribe en WhatsApp
         ↓
Travis recibe vía webhook (Green-API)
         ↓
Reconstruye contexto de conversación
         ↓
Llama OpenAI con system prompt + catálogo (JSON mode)
         ↓
OpenAI devuelve {"reply": "...", "handoff": true/false}
         ↓
Travis envía respuesta al cliente
Si handoff=true: notifica al equipo con contexto del lead
```

## Estructura Reutilizable

```
lib/travis/
├── types.ts           # Tipos compartidos (GreenApiWebhook, TravisConfig, etc.)
├── handler.ts         # Lógica genérica del webhook (100% reutilizable)
├── configs.ts         # Configuraciones por proyecto
└── README.md          # Documentación técnica

app/api/whatsapp/webhook/route.ts  # Endpoint mínimo (20 líneas, solo importa handler + config)
```

## Replicar Travis en Otro Proyecto (5 minutos)

### Paso 1: Copiar la librería Travis

```bash
# En tu nuevo proyecto:
cp -r ../neuralianew/lib/travis lib/
```

### Paso 2: Definir la configuración del nuevo proyecto

Abre `lib/travis/configs.ts` y agrega una nueva configuración:

```typescript
export const TRAVIS_CONFIG_MOTIL: TravisConfig = {
  agentName: "Travis",
  companyName: "N3uralia - Motil",
  systemPromptBase: `Eres "Travis", especialista en gestión hotelera...`,
  catalogMarkdown: `
## Soluciones Motil
- **Motil Pro**: gestión de reservas + housekeeping
- **Motil Analytics**: reportes en tiempo real
  `,
  pricingApproach: `Motil se cotiza según volumen de habitaciones (50-500 usd/mes aprox)...`,
  teamNotifyPhone: process.env.WHATSAPP_NOTIFY_PHONE || "56993826127",
  openaiModel: "gpt-4o-mini",
  openaiApiKey: process.env.OPENAI_API_KEY,
  greenApiInstanceId: process.env.GREEN_API_INSTANCE_ID,
  greenApiToken: process.env.GREEN_API_TOKEN,
}
```

### Paso 3: Crear el endpoint en tu proyecto

Copia esta estructura a tu proyecto:

```bash
# En tu proyecto Motil:
mkdir -p app/api/whatsapp/webhook
```

Crea `app/api/whatsapp/webhook/route.ts`:

```typescript
import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_MOTIL } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
}

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
}
```

### Paso 4: Configurar variables de entorno

En tu proyecto, necesitas:

```env
OPENAI_API_KEY=sk-proj-...  # Tu clave OpenAI (reutilizable)
GREEN_API_INSTANCE_ID=710722691570  # O el tuyo
GREEN_API_TOKEN=...  # Tu token Green-API
WHATSAPP_NOTIFY_PHONE=56993826127  # Dónde recibir alertas
WHATSAPP_WEBHOOK_SECRET=(opcional)  # Token para validar webhook
```

### Paso 5: Configurar el webhook en Green-API

```bash
INSTANCE="710722691570"
SUB="7107"
TOKEN="..."

curl -X POST "https://${SUB}.api.greenapi.com/waInstance${INSTANCE}/setSettings/${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "webhookUrl": "https://tu-dominio.com/api/whatsapp/webhook",
    "incomingWebhook": "yes"
  }'
```

### Paso 6: Deploy a producción

```bash
vercel deploy --prod
```

**¡Listo! Travis está operativo en tu nuevo proyecto.**

## Customización por Proyecto

### Cambiar nombre del agente

En tu config:

```typescript
systemPromptBase: `Eres "Clara", la asistente de ventas de Motil...`
```

### Agregar productos específicos

En tu config:

```typescript
catalogMarkdown: `
## Nuestras Soluciones
- Motil Pro: $500/mes
- Motil Analytics: $200/mes
- Integraciones custom: cotizar
`,
```

### Cambiar el flujo de venta

El flujo consultivo es el mismo para todos, pero puedes ajustar:
- Tono (formal vs. casual)
- Énfasis en precio vs. características
- Industrias objetivo

Todo se controla en la `systemPromptBase` de la config.

## Dónde Vive la Lógica

- **`handler.ts`**: 100% genérico, NO tocar
  - Recibe webhook
  - Reconstruye contexto
  - Llama OpenAI
  - Maneja handoff
  - Notifica equipo

- **`configs.ts`**: 100% personalizable por proyecto
  - Nombre del agente
  - Catálogo
  - System prompt
  - Team phone
  - Claves API

- **`route.ts`**: 20 líneas, mínimo por proyecto
  - Solo importa handler + config
  - No hay lógica aquí

## Troubleshooting

### Travis no responde
- Verificar que `OPENAI_API_KEY` tiene saldo
- Verificar que Green-API webhook está configurado
- Revisar logs: `vercel logs`

### Las respuestas no son consultivas
- Revisar `systemPromptBase` en la config
- Asegurar que incluye la sección "## CÓMO VENDEMOS"
- Verificar que el `catalogMarkdown` es específico y real

### No llega la alerta al equipo
- Verificar que `WHATSAPP_NOTIFY_PHONE` es correcto
- Confirmar que el cliente NO es el equipo (para evitar loops)
- Revisar logs de Green-API

## Proyectos con Travis (Plantilla)

- ✅ **N3uralia** (actual): Vende Nano Agents, MermasApp, DocuFleet, Clar1ty, Motil
- 🔲 **Motil**: Vende soluciones hoteleras (config en `lib/travis/configs.ts`)
- 🔲 **DocuFleet**: Vende gestión documental de transporte
- 🔲 **MermasApp**: Vende predicción de mermas retail
- 🔲 **Clar1ty**: Vende analítica de datos

**Cada proyecto toma 5 minutos para replicar Travis. Solo cambia la config.**

## Stack

- **Librería**: `lib/travis/` (TypeScript, genérica)
- **API OpenAI**: `gpt-4o-mini` (JSON mode para handoff confiable)
- **WhatsApp**: Green-API (webhooks, historial, envío)
- **Auth**: Opcional (WHATSAPP_WEBHOOK_SECRET)
- **Rate limit**: Incorporado en handler (15 msgs/minuto por chat)

## Preguntas?

Lee `lib/travis/README.md` para detalles técnicos.
Contacta el equipo de N3uralia para soporte.
