/**
 * Green-API WhatsApp helper
 *
 * Green-API uses instance-specific subdomains: the first 4 digits of the
 * instance ID form the subdomain (e.g. 7107 -> https://7107.api.greenapi.com).
 * The generic api.green-api.com domain returns 403 Forbidden.
 *
 * The instance ID is NOT a secret (it appears in the request URL), so it is
 * kept in code. Only the API token is read from the environment.
 */

// Verified N3uralia instance. Kept in code because the stored env var once
// contained a data-entry typo (an extra digit).
const INSTANCE_ID = "710722691570"

function getToken() {
  return process.env["GREEN_API_TOKEN"]
}

function getBaseUrl() {
  const subdomain = INSTANCE_ID.slice(0, 4)
  return `https://${subdomain}.api.greenapi.com/waInstance${INSTANCE_ID}`
}

export function isGreenApiConfigured() {
  return Boolean(getToken())
}

export function normalizePhone(phone: string) {
  return phone.replace(/[^\d]/g, "")
}

export function toChatId(phone: string) {
  const digits = normalizePhone(phone)
  return digits.endsWith("@c.us") ? digits : `${digits}@c.us`
}

/**
 * Send a text message to a WhatsApp chat.
 */
export async function sendWhatsAppMessage(
  chatId: string,
  message: string,
): Promise<{ sent: boolean; reason?: string; idMessage?: string }> {
  const token = getToken()
  if (!token) {
    console.warn("[v0] Green-API token not configured")
    return { sent: false, reason: "not_configured" }
  }

  try {
    const res = await fetch(`${getBaseUrl()}/sendMessage/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId: toChatId(chatId), message }),
      signal: AbortSignal.timeout(10_000),
    })

    const text = await res.text()
    if (!res.ok) {
      console.error("[v0] Green-API sendMessage error:", res.status, text.slice(0, 200))
      return { sent: false, reason: `http_${res.status}` }
    }

    let idMessage: string | undefined
    try {
      idMessage = JSON.parse(text)?.idMessage
    } catch {
      // Non-JSON success body; ignore.
    }
    return { sent: true, idMessage }
  } catch (error) {
    console.error("[v0] Green-API sendMessage failed:", error instanceof Error ? error.message : String(error))
    return { sent: false, reason: "network_error" }
  }
}

export interface ChatHistoryEntry {
  type: "incoming" | "outgoing"
  textMessage?: string
  timestamp?: number
}

/**
 * Fetch the recent chat history for a conversation. Green-API stores the
 * message history per chat, so we can rebuild conversation context without
 * our own database.
 */
export async function getChatHistory(chatId: string, count = 10): Promise<ChatHistoryEntry[]> {
  const token = getToken()
  if (!token) return []

  try {
    const res = await fetch(`${getBaseUrl()}/getChatHistory/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chatId: toChatId(chatId), count }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!res.ok) return []
    const data = (await res.json()) as ChatHistoryEntry[]
    return Array.isArray(data) ? data : []
  } catch (error) {
    console.error("[v0] Green-API getChatHistory failed:", error instanceof Error ? error.message : String(error))
    return []
  }
}
