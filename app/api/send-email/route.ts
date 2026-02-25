import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    console.log("[v0] Email API called:", { name, email, hasMessage: !!message })

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY not set")
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
    const fromName = process.env.RESEND_FROM_NAME || "N3uralia"

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #6366f1; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .info-row { margin: 15px 0; padding: 10px; background: white; border-left: 3px solid #6366f1; }
            .label { font-weight: bold; color: #6366f1; }
            .message-box { margin-top: 20px; padding: 15px; background: white; border: 1px solid #e5e7eb; border-radius: 6px; }
            .footer { margin-top: 20px; font-size: 12px; color: #666; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Nombre:</span> ${name}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
              </div>
              ${
                message
                  ? `
              <div class="message-box">
                <span class="label">Mensaje:</span>
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>
              `
                  : ""
              }
              <div class="footer">
                <p>Para responder, simplemente responde a este email y llegará directamente a ${email}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    console.log("[v0] Sending email via Resend API...")
    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: "info@n3uralia.com",
      replyTo: email,
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: emailHtml,
    })

    console.log("[v0] Resend API response:", result)

    if (result.error) {
      console.error("[v0] Resend error:", result.error)
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 500 }
      )
    }

    console.log("[v0] Email sent successfully with ID:", result.data?.id)
    return NextResponse.json({
      success: true,
      message: "Email enviado exitosamente",
      id: result.data?.id,
    })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
