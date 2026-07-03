const RESEND_EMAILS_URL = "https://api.resend.com/emails"

export interface ResendEmailPayload {
  bcc?: string | string[]
  cc?: string | string[]
  from: string
  html: string
  replyTo?: string
  subject: string
  to: string | string[]
}

function getResendApiKey() {
  const apiKey = process.env["RESEND_API_KEY"]

  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured")
  }

  return apiKey
}

function normalizeRecipients(value?: string | string[]) {
  if (!value) {
    return undefined
  }

  return Array.isArray(value) ? value : [value]
}

async function parseResendError(response: Response) {
  try {
    const payload = await response.json()
    return payload?.message || payload?.error || `Resend request failed with status ${response.status}`
  } catch {
    return `Resend request failed with status ${response.status}`
  }
}

export async function sendResendEmail(payload: ResendEmailPayload) {
  const response = await fetch(RESEND_EMAILS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getResendApiKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bcc: normalizeRecipients(payload.bcc),
      cc: normalizeRecipients(payload.cc),
      from: payload.from,
      html: payload.html,
      reply_to: payload.replyTo,
      subject: payload.subject,
      to: normalizeRecipients(payload.to),
    }),
  })

  if (!response.ok) {
    throw new Error(await parseResendError(response))
  }

  return response.json()
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
