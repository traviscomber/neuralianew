import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const runtime = "edge"

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY not configured" },
        { status: 500 },
      )
    }

    const { name, email, company, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: name, email, message" },
        { status: 400 },
      )
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "noreply@n3uralia.com"
    const fromName = process.env.RESEND_FROM_NAME || "N3uralia"
    const recipientEmail = "n3uralia@gmail.com" // Where we receive contact submissions

    // Email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
            .info-box { background: #f8f9fa; border-left: 4px solid #667eea; padding: 15px; margin: 20px 0; border-radius: 4px; }
            .message-box { background: #f0f4f8; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #667eea; }
            .reply-button { display: inline-block; padding: 12px 30px; background: #667eea; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #e0e0e0; }
            p { margin: 10px 0; }
            strong { color: #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 Nuevo Mensaje de Contacto</h1>
            </div>
            <div class="content">
              <p>Has recibido un nuevo mensaje del formulario de contacto de N3uralia:</p>
              <div class="info-box">
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                ${company ? `<p><strong>Empresa:</strong> ${company}</p>` : ""}
              </div>
              <div class="message-box">
                <p><strong>Mensaje:</strong></p>
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>
              <p>Puedes responder directamente a este email o contactar a <strong>${name}</strong> en <a href="mailto:${email}">${email}</a>.</p>
              <a href="mailto:${email}?subject=Re: Tu consulta en N3uralia" class="reply-button">Responder al Usuario</a>
            </div>
            <div class="footer">
              <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Email to user (confirmation)
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
            .checkmark { font-size: 48px; margin-bottom: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #e0e0e0; }
            p { margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="checkmark">✅</div>
              <h1>Mensaje Recibido</h1>
            </div>
            <div class="content">
              <p>Hola <strong>${name}</strong>,</p>
              <p>Gracias por contactar con N3uralia. Hemos recibido tu mensaje y nuestro equipo te responderá en breve.</p>
              <p><strong>Resumen de tu consulta:</strong></p>
              <p style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin: 20px 0;">
                "${message.substring(0, 100)}${message.length > 100 ? "..." : ""}"
              </p>
              <p>Si tienes urgencia, también puedes contactarnos por:</p>
              <ul>
                <li>📧 Email: <a href="mailto:hello@n3uralia.com">hello@n3uralia.com</a></li>
                <li>💬 WhatsApp: <a href="https://wa.me/56993826127">+56 9 9382 6127</a></li>
              </ul>
              <p>Saludos,<br><strong>El equipo de N3uralia</strong></p>
            </div>
            <div class="footer">
              <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
              <p>Este es un email automático, por favor no respondas a este email.</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email to admin
    const adminResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [recipientEmail],
      replyTo: email,
      subject: `📬 Nuevo Contacto de ${name}`,
      html: adminEmailHtml,
    })

    // Send confirmation email to user
    const userResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [email],
      subject: "✅ Hemos recibido tu mensaje - N3uralia",
      html: userEmailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      data: {
        adminEmail: adminResult,
        userEmail: userResult,
      },
    })
  } catch (error: any) {
    console.error("[v0] Contact email error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send contact email",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
