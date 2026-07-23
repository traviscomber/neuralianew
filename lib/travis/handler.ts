/**
 * Travis Webhook Handler
 * Reusable handler for WhatsApp incoming messages.
 * Usage in your route:
 *
 * import { travisWebhookHandler } from "@/lib/travis/handler"
 * import { TRAVIS_CONFIG_YOUR_PROJECT } from "@/lib/travis/configs"
 *
 * export async function POST(request: NextRequest) {
 *   return travisWebhookHandler(request, TRAVIS_CONFIG_YOUR_PROJECT)
 * }
 */

import { NextRequest, NextResponse } from "next/server"
import { getChatHistory, sendWhatsAppMessage } from "@/lib/green-api"
import { checkRateLimit } from "@/lib/rate-limit"
import type { TravisConfig, WebhookPayload, TravisReply } from "./types"

const HANDOFF_MARKER = "#HANDOFF"

function isInternalNotification(text: string): boolean {
  const t = text.trim().toLowerCase()
  return (
    t.startsWith("handoff solicitado") ||
    t.startsWith("nuevo diagnostico") ||
    t.startsWith("nuevo diagnóstico") ||
    t.startsWith("test instance") ||
    t.startsWith("test de") ||
    t.startsWith("prueba de") ||
    t.startsWith("verificacion final") ||
    t.startsWith("verificación final")
  )
}

async function generateReply(
  config: TravisConfig,
  chatId: string,
  currentText: string,
  chatName?: string
): Promise<TravisReply> {
  const history = await getChatHistory(chatId, 16)

  const chronological = history
    .slice()
    .reverse()
    .filter((h) => h.textMessage?.trim())
    .filter((h) => !(h.type === "outgoing" && isInternalNotification(h.textMessage!)))

  const nameHint = chatName ? `\n\nEl nombre de contacto de WhatsApp es "${chatName}" (úsalo solo si suena natural).` : ""

  const systemPrompt = config.systemPromptPrefix + config.catalogMarkdown + config.pricingApproach

  const historyTurns = chronological.map((h) => ({
    role: h.type === "incoming" ? ("user" as const) : ("assistant" as const),
    content: h.textMessage!.slice(0, 1500),
  }))

  const trimmed = currentText.trim()
  const last = historyTurns[historyTurns.length - 1]
  if (!(last && last.role === "user" && last.content.trim() === trimmed)) {
    historyTurns.push({ role: "user" as const, content: trimmed.slice(0, 1500) })
  }

  const jsonInstruction = `

## FORMATO DE RESPUESTA (obligatorio)
Responde SIEMPRE con un objeto JSON válido, sin texto adicional, con esta forma exacta:
{"reply": "<tu mensaje para el cliente por WhatsApp>", "handoff": <true o false>}
- "reply": el texto que se le enviará al cliente.
- "handoff": true SOLO si corresponde derivar a un humano; en cualquier otro caso, false.
No agregues nada fuera del JSON.`

  const messages = [
    { role: "system" as const, content: systemPrompt + nameHint + jsonInstruction },
    ...historyTurns,
  ]

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      temperature: 0.7,
      max_tokens: 400,
      response_format: { type: "json_object" },
    }),
    signal: AbortSignal.timeout(20_000),
  })

  if (!res.ok) {
    console.error("[travis] OpenAI error:", res.status)
    return {
      reply: `Disculpa, tuve un problema técnico. Le aviso al equipo para que te escriban en breve por aquí.`,
      handoff: true,
    }
  }

  const data = await res.json()
  const raw: string = data?.choices?.[0]?.message?.content?.trim() || ""

  let reply = ""
  let handoff = false
  try {
    const parsed = JSON.parse(raw) as { reply?: string; handoff?: boolean }
    reply = (parsed.reply || "").trim()
    handoff = parsed.handoff === true
  } catch {
    reply = raw.replace(new RegExp(`\\n?\\s*${HANDOFF_MARKER}\\s*`, "g"), "").trim()
    handoff = raw.includes(HANDOFF_MARKER)
  }

  if (!reply) {
    return {
      reply: `Gracias por tu mensaje. En un momento te responde alguien del equipo.`,
      handoff: true,
    }
  }

  return { reply, handoff }
}

async function notifyTeamOfHandoff(
  config: TravisConfig,
  clientPhone: string,
  clientName: string,
  lastMessage: string
): Promise<void> {
  const teamPhone = config.teamNotifyPhone.replace(/[^\d]/g, "")

  if (clientPhone === teamPhone) {
    return // Avoid loops during testing
  }

  const alert = `Handoff solicitado - bot WhatsApp ${config.companyName}
Contacto: ${clientName}
Telefono: +${clientPhone}
Ultimo mensaje: ${lastMessage.slice(0, 200)}`

  await sendWhatsAppMessage(teamPhone, alert)
}

export async function travisWebhookHandler(
  request: NextRequest,
  config: TravisConfig
): Promise<NextResponse> {
  if (request.method === "GET") {
    return NextResponse.json({ ok: true, message: `${config.agentName} is online` })
  }

  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  }

  try {
    const body = (await request.json()) as WebhookPayload

    if (body.typeWebhook !== "incomingMessageReceived") {
      return NextResponse.json({ ok: true })
    }

    const { chatId, sender, chatName } = body.senderData || {}
    const text = body.messageData?.textMessageData?.textMessage || ""

    if (!chatId || !text?.trim()) {
      return NextResponse.json({ ok: true })
    }

    // Rate limit per chat
    const clientPhone = sender?.replace(/[^\d]/g, "") || ""
    const rl = await checkRateLimit(`whatsapp:${clientPhone}`, {
      maxRequests: 15,
      windowMs: 60_000,
    })
    if (!rl.allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 }
      )
    }

    const { reply, handoff } = await generateReply(config, chatId, text, chatName)

    // Send reply to customer
    const sendResult = await sendWhatsAppMessage(clientPhone, reply)

    if (!sendResult.sent) {
      console.error(`[travis] Failed to send reply: ${sendResult.reason}`)
    }

    // If handoff, notify team
    if (handoff && sendResult.sent) {
      try {
        await notifyTeamOfHandoff(config, clientPhone, chatName || "Unknown", text)
      } catch (err) {
        console.error("[travis] Failed to notify team:", err)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[travis] Webhook error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
