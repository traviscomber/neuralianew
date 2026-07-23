/**
 * EXAMPLE: Travis Configuration for Motil Project
 * 
 * Copy this file and adapt it to your own project:
 * 1. Replace "MOTIL" with your project name
 * 2. Update agentName, companyName, catalog, pricing
 * 3. Add to configs.ts exports
 * 4. Create endpoint in your project's app/api/whatsapp/webhook/route.ts
 */

import type { TravisConfig } from "./types"

export const TRAVIS_CONFIG_MOTIL: TravisConfig = {
  agentName: "Travis",
  companyName: "Motil by N3uralia",

  systemPromptBase: `Eres "Travis", el asesor de ventas de Motil por WhatsApp. Motil es una plataforma de gestión hotelera integrada que automatiza reservas, housekeeping, facturación y reportes. Tu trabajo es vender de forma natural, consultiva y didáctica: primero entender, después educar, después recomendar. Conoces a fondo cada módulo de Motil y sabes recomendar por tamaño de hotel e industria.`,

  catalogMarkdown: `
## Módulos Motil

### Motil Core
- **Gestión de Reservas**: booking engine, canal manager, tarifas dinámicas
- **Housekeeping**: asignación de cuartos, seguimiento de limpieza, inspecciones
- **Facturación**: invoicing automático, múltiples monedas, integración contable
- Caso real: Hotel La Patagua (50 habitaciones) - 40% reducción en tiempo administrativo

### Motil Analytics
- **Reportes en tiempo real**: ocupancy, RevPAR, KPIs operacionales
- **Dashboards ejecutivos**: rentabilidad por segmento, tendencias
- **Forecasting**: predicción de demanda por estación
- Caso real: Black Swan Financial Services - decisiones basadas en datos

### Integraciones
- PMS existentes (Maroochy, WebRezPro, etc.)
- Accounting (Contafácil, Alegra)
- OTA (Booking, Expedia, Airbnb)
- Custom API para sistemas legacy

## Industrias
- Hoteles 3-5 estrellas (principal)
- Hostales y boutiques
- Resorts y complejos vacacionales
- Cadenas hoteleras (multi-propiedad)
`,

  pricingApproach: `Motil se cotiza según:
- Número de habitaciones (50-500 habitaciones): USD 300-1,500/mes
- Integraciones especiales: USD +200/mes cada una
- Soporte premium: USD +150/mes
- Setup inicial: USD 1,000-3,000

Siempre ofrecemos diagnóstico gratuito de 30 minutos para evaluar:
1. Número y complejidad de propiedades
2. Integraciones actuales que necesitan conectar
3. Flujos operacionales a automatizar
4. Timeline de implementación

No hacemos promesas de precio sin diagnóstico.`,

  teamNotifyPhone: process.env.WHATSAPP_NOTIFY_PHONE || "56993826127",
  openaiModel: "gpt-4o-mini",
  openaiApiKey: process.env.OPENAI_API_KEY,
  greenApiInstanceId: process.env.GREEN_API_INSTANCE_ID,
  greenApiToken: process.env.GREEN_API_TOKEN,
}

/**
 * CÓMO USAR ESTE ARCHIVO:
 * 
 * 1. En tu proyecto Motil, copia lib/travis/ desde neuralianew
 * 
 * 2. En lib/travis/configs.ts, agrega:
 *    import { TRAVIS_CONFIG_MOTIL } from "./EXAMPLE_MOTIL_CONFIG"
 *    export { TRAVIS_CONFIG_MOTIL }
 * 
 * 3. En tu proyecto Motil, crea app/api/whatsapp/webhook/route.ts:
 * 
 *    import { NextRequest } from "next/server"
 *    import { travisWebhookHandler } from "@/lib/travis/handler"
 *    import { TRAVIS_CONFIG_MOTIL } from "@/lib/travis/configs"
 *    
 *    export const runtime = "nodejs"
 *    export const dynamic = "force-dynamic"
 *    
 *    export async function GET(request: NextRequest) {
 *      return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
 *    }
 *    
 *    export async function POST(request: NextRequest) {
 *      return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
 *    }
 * 
 * 4. En .env.local (mismo para todos los proyectos):
 *    OPENAI_API_KEY=sk-proj-...
 *    GREEN_API_INSTANCE_ID=710722691570
 *    GREEN_API_TOKEN=...
 *    WHATSAPP_NOTIFY_PHONE=56993826127
 * 
 * 5. Deploy:
 *    vercel deploy --prod
 * 
 * 6. Configura el webhook en Green-API:
 *    https://7107.api.greenapi.com/waInstance710722691570/setSettings/TOKEN
 *    Body: {"webhookUrl": "https://tu-motil-domain.com/api/whatsapp/webhook", "incomingWebhook": "yes"}
 * 
 * ¡Listo! Travis está operativo en Motil.
 */
