import { NextRequest, NextResponse } from "next/server"
import { escapeHtml, sendResendEmail } from "@/lib/resend-api"
import { z } from "zod"
import { checkRateLimit } from "@/lib/rate-limit"

const requestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(254),
  message: z.string().trim().max(4000).optional(),
  website: z.string().max(0).optional(),
})

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"
}

function buildTeamEmailHtml(name: string, email: string, message?: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
          .header { background: #181e2a; color: white; padding: 32px 24px; text-align: center; }
          .content { padding: 32px 24px; }
          .info-box { background: #f8fafc; border-radius: 6px; padding: 16px; margin: 20px 0; }
          .message-box { background: #f1f5f9; border-radius: 6px; padding: 20px; margin: 20px 0; }
          .cta { display: inline-block; padding: 12px 24px; background: #b1d374; color: #101828; text-decoration: none; border-radius: 5px; }
          .footer { padding: 16px 24px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="card">
            <div class="header">
              <h1>Nuevo contacto</h1>
              <p>Alguien quiere conversar con N3uralia</p>
            </div>
            <div class="content">
              <div class="info-box">
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              </div>
              ${
                message
                  ? `
                <div class="message-box">
                  <p><strong>Proyecto:</strong></p>
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
              `
                  : ""
              }
              <a href="mailto:${email}" class="cta">Responder</a>
            </div>
            <div class="footer">
              <p>Responde a este email para contactar directamente con el lead.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

function buildUserEmailHtml(firstName: string, email: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); }
          .header { background: #181e2a; color: white; padding: 32px 24px; text-align: center; }
          .content { padding: 32px 24px; }
          .status-box { background: #ecfdf5; border-radius: 6px; padding: 16px; margin: 20px 0; }
          .info-box { background: #f8fafc; border-radius: 6px; padding: 16px; margin: 20px 0; }
          .footer { padding: 16px 24px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="card">
            <div class="header">
              <h1>Hola ${firstName}</h1>
              <p>Recibimos tu mensaje</p>
            </div>
            <div class="content">
              <div class="status-box">
                <p>Gracias por escribirnos. Estamos revisando tu proyecto y te responderemos pronto.</p>
              </div>
              <div class="info-box">
                <p><strong>Email de contacto:</strong> ${email}</p>
                <p>Si necesitas agregar contexto, responde directamente a este correo.</p>
              </div>
              <p>Equipo N3uralia</p>
            </div>
            <div class="footer">
              <p>n3uralia.com | info@n3uralia.com</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `
}

export async function POST(request: NextRequest) {
  try {
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
      keyPrefix: "rl:email:",
      maxRequests: 5,
      windowMs: 60_000,
    })
    if (!limit.allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests" },
        { status: 429, headers: { "Retry-After": String(limit.retryAfter || 60) } },
      )
    }

    const { name, email, message } = parsed.data

    if (!process.env["RESEND_API_KEY"]) {
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 },
      )
    }

    const safeName = escapeHtml(String(name))
    const safeEmail = escapeHtml(String(email))
    const safeMessage = message ? escapeHtml(String(message)) : ""
    const firstName = safeName.split(" ")[0] || "amigo"
    const fromName = process.env["RESEND_FROM_NAME"] || "N3uralia"
    const fromEmail = process.env["RESEND_FROM_EMAIL"] || "info@n3uralia.com"
    const teamRecipient = process.env["CONTACT_RECIPIENT_EMAIL"] || "info@n3uralia.com"

    const teamResult = await sendResendEmail({
      from: `${fromName} <${fromEmail}>`,
      html: buildTeamEmailHtml(safeName, safeEmail, safeMessage),
      replyTo: email,
      subject: `Nuevo contacto: ${name} - N3uralia`,
      to: teamRecipient,
    })

    const userResult = await sendResendEmail({
      from: `${fromName} <${fromEmail}>`,
      html: buildUserEmailHtml(firstName, safeEmail),
      subject: "Hemos recibido tu mensaje - N3uralia",
      to: email,
    })

    return NextResponse.json({
      success: true,
      message: "Emails enviados exitosamente",
      teamEmailId: teamResult?.id,
      userEmailId: userResult?.id,
    })
  } catch (error) {
    console.error("[send-email] API route error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    )
  }
}
