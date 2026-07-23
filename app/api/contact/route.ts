import { type NextRequest, NextResponse } from "next/server"
import { escapeHtml, sendResendEmail } from "@/lib/resend-api"
import { z } from "zod"
import { checkRateLimit } from "@/lib/rate-limit"

const requestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10).max(4000),
  whatsapp: z.string().trim().max(20).optional(),
  website: z.string().max(0).optional(),
})

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

export const runtime = "edge"

function buildAdminEmailHtml(params: {
  company?: string
  email: string
  message: string
  name: string
  whatsapp?: string
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #181e2a; color: white; padding: 24px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; }
          .info-box { background: #f8fafc; padding: 16px; margin: 20px 0; border-radius: 6px; }
          .message-box { background: #f1f5f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
          .reply-button { display: inline-block; padding: 12px 24px; background: #b1d374; color: #101828; text-decoration: none; border-radius: 5px; margin-top: 12px; }
          .footer { text-align: center; padding: 16px; color: #666; font-size: 12px; border-top: 1px solid #e5e7eb; }
          p { margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nuevo mensaje de contacto</h1>
          </div>
          <div class="content">
            <p>Has recibido un nuevo mensaje desde el formulario de N3uralia.</p>
            <div class="info-box">
              <p><strong>Nombre:</strong> ${params.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${params.email}">${params.email}</a></p>
              ${params.company ? `<p><strong>Empresa:</strong> ${params.company}</p>` : ""}
              ${params.whatsapp ? `<p><strong>WhatsApp:</strong> <a href="https://wa.me/${params.whatsapp}">+${params.whatsapp}</a></p>` : ""}
            </div>
            <div class="message-box">
              <p><strong>Mensaje:</strong></p>
              <p>${params.message.replace(/\n/g, "<br>")}</p>
            </div>
            <p>Puedes responder directamente a este email para contactar al lead.</p>
            <a href="mailto:${params.email}?subject=Re: Tu consulta en N3uralia" class="reply-button">Responder</a>
          </div>
          <div class="footer">
            <p>&copy; 2026 N3uralia</p>
          </div>
        </div>
      </body>
    </html>
  `
}

function buildUserEmailHtml(params: { email: string; message: string; name: string }) {
  const messagePreview = params.message.length > 140 ? `${params.message.slice(0, 140)}...` : params.message

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #181e2a; color: white; padding: 24px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: white; padding: 24px; border: 1px solid #e5e7eb; border-top: none; }
          .status-box { background: #ecfdf5; padding: 16px; border-radius: 6px; margin: 20px 0; }
          .summary-box { background: #f8fafc; padding: 16px; border-radius: 6px; margin: 20px 0; }
          .footer { text-align: center; padding: 16px; color: #666; font-size: 12px; border-top: 1px solid #e5e7eb; }
          p { margin: 10px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Recibimos tu mensaje</h1>
          </div>
          <div class="content">
            <p>Hola <strong>${params.name}</strong>,</p>
            <div class="status-box">
              <p>Gracias por escribirnos. Nuestro equipo ya recibio tu consulta y te respondera pronto.</p>
            </div>
            <div class="summary-box">
              <p><strong>Email de contacto:</strong> ${params.email}</p>
              <p><strong>Resumen:</strong> "${messagePreview}"</p>
            </div>
            <p>Si necesitas acelerar la conversacion, tambien puedes escribir a <a href="mailto:info@n3uralia.com">info@n3uralia.com</a>.</p>
            <p>Equipo N3uralia</p>
          </div>
          <div class="footer">
            <p>&copy; 2026 N3uralia</p>
          </div>
        </div>
      </body>
    </html>
  `
}

async function sendWhatsAppNotification(params: {
  company?: string
  email: string
  message: string
  name: string
  whatsapp?: string
}) {
  const apiKey = process.env["CALLMEBOT_API_KEY"]
  const phone = process.env["CALLMEBOT_PHONE"] || "+56993826127"
  if (!apiKey) {
    console.log("[contact] CALLMEBOT_API_KEY not set, skipping WhatsApp notification")
    return { sent: false, reason: "not_configured" }
  }

  const lines = [
    "Nuevo diagnostico N3uralia",
    `Nombre: ${params.name}`,
    `Email: ${params.email}`,
    params.company ? `Empresa: ${params.company}` : "",
    params.whatsapp ? `WhatsApp: +${params.whatsapp}` : "",
    `Mensaje: ${params.message.slice(0, 300)}`,
  ].filter(Boolean)

  const url = `https://api.callmebot.com/whatsapp.php?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(lines.join("\n"))}&apikey=${encodeURIComponent(apiKey)}`

  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) })
    if (!res.ok) {
      console.error("[contact] CallMeBot error:", res.status, await res.text().catch(() => ""))
      return { sent: false, reason: `http_${res.status}` }
    }
    return { sent: true }
  } catch (error) {
    console.error("[contact] CallMeBot fetch failed:", error)
    return { sent: false, reason: "network_error" }
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env["RESEND_API_KEY"]) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not configured" },
        { status: 500 },
      )
    }

    const contentLength = Number(request.headers.get("content-length") || "0")
    if (contentLength > 20_000) {
      return NextResponse.json({ success: false, error: "Request too large" }, { status: 413 })
    }

    const parsed = requestSchema.safeParse(await request.json())
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: "Invalid form data" }, { status: 400 })
    }

    if (parsed.data.website) {
      return NextResponse.json({ success: true })
    }

    const limit = await checkRateLimit(getClientIp(request), {
      keyPrefix: "rl:contact:",
      maxRequests: 5,
      windowMs: 60_000,
    })
    if (!limit.allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter || 60) } },
      )
    }

    const { name, email, company, message, whatsapp } = parsed.data

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeCompany = company ? escapeHtml(String(company)) : ""
    const safeMessage = escapeHtml(String(message))
    const safeWhatsapp = whatsapp ? escapeHtml(String(whatsapp)) : ""

    const fromName = process.env["RESEND_FROM_NAME"] || "N3uralia"
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || "info@n3uralia.com"
    const adminRecipient = process.env["CONTACT_RECIPIENT_EMAIL"] || "n3uralia@gmail.com"

    const adminResult = await sendResendEmail({
      from: `${fromName} <${fromEmail}>`,
      html: buildAdminEmailHtml({
        company: safeCompany,
        email: safeEmail,
        message: safeMessage,
        name: safeName,
        whatsapp: safeWhatsapp,
      }),
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      to: adminRecipient,
    })

    const [userResult, whatsappResult] = await Promise.all([
      sendResendEmail({
        from: `${fromName} <${fromEmail}>`,
        html: buildUserEmailHtml({
          email: safeEmail,
          message: safeMessage,
          name: safeName,
        }),
        subject: "Recibimos tu mensaje - N3uralia",
        to: email,
      }),
      sendWhatsAppNotification({
        company: company || undefined,
        email,
        message,
        name,
        whatsapp: whatsapp || undefined,
      }),
    ])

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      data: {
        adminEmail: adminResult,
        userEmail: userResult,
        whatsapp: whatsappResult,
      },
    })
  } catch (error) {
    console.error("[contact] Email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send contact email",
      },
      { status: 500 },
    )
  }
}
