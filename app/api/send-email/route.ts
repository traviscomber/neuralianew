import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

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

    const resend = new Resend(process.env.RESEND_API_KEY)
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
    const fromName = process.env.RESEND_FROM_NAME || "N3uralia"

    // Email to N3uralia team
    const teamEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 5px; }
            .header p { opacity: 0.9; font-size: 14px; }
            .content { padding: 40px 30px; }
            .info-section { margin-bottom: 30px; }
            .info-item { display: flex; margin-bottom: 15px; }
            .info-label { background: #f3f4f6; padding: 10px 15px; min-width: 120px; font-weight: 600; color: #4f46e5; border-radius: 6px 0 0 6px; }
            .info-value { background: #fafbfc; padding: 10px 15px; flex: 1; border-radius: 0 6px 6px 0; border: 1px solid #e5e7eb; border-left: none; }
            .info-value a { color: #4f46e5; text-decoration: none; }
            .info-value a:hover { text-decoration: underline; }
            .message-section { background: #f8fafc; border-left: 4px solid #4f46e5; padding: 20px; border-radius: 6px; margin: 30px 0; }
            .message-section h3 { color: #4f46e5; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .message-section p { white-space: pre-wrap; word-break: break-word; color: #374151; line-height: 1.7; }
            .cta-section { text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; margin-top: 30px; }
            .cta-button { display: inline-block; background: #4f46e5; color: white; padding: 12px 30px; border-radius: 6px; text-decoration: none; font-weight: 600; transition: background 0.2s; }
            .cta-button:hover { background: #6366f1; }
            .footer { padding: 20px 30px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
            .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <h1>Nuevo Contacto</h1>
                <p>Alguien quiere conocer sobre N3uralia</p>
              </div>
              
              <div class="content">
                <div class="info-section">
                  <div class="info-item">
                    <div class="info-label">Nombre</div>
                    <div class="info-value"><strong>${name}</strong></div>
                  </div>
                  <div class="info-item">
                    <div class="info-label">Email</div>
                    <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                  </div>
                </div>

                ${
                  message
                    ? `
                <div class="message-section">
                  <h3>Su Proyecto</h3>
                  <p>${message.replace(/\n/g, "<br>")}</p>
                </div>
                `
                    : ""
                }

                <div class="cta-section">
                  <a href="mailto:${email}" class="cta-button">Responder a ${name.split(" ")[0]}</a>
                </div>
              </div>

              <div class="footer">
                <p>Responde a este email para contactar directamente con ${name}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    // Email confirmation for the user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1f2937; background: #f3f4f6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; padding: 40px 30px; text-align: center; }
            .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 5px; }
            .header p { opacity: 0.9; font-size: 14px; }
            .content { padding: 40px 30px; }
            .greeting { font-size: 16px; color: #374151; margin-bottom: 20px; line-height: 1.8; }
            .status-box { background: #ecfdf5; border-left: 4px solid #10b981; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .status-box strong { color: #047857; }
            .info-box { background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 20px; border-radius: 6px; margin: 20px 0; }
            .info-box p { color: #0369a1; margin: 8px 0; font-size: 14px; }
            .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
            .next-steps { margin-top: 20px; }
            .next-steps h3 { color: #4f46e5; margin-bottom: 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .next-steps ol { margin-left: 20px; color: #374151; }
            .next-steps li { margin-bottom: 8px; }
            .signature { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
            .signature-name { font-weight: 600; color: #4f46e5; }
            .footer { padding: 20px 30px; background: #f9fafb; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <h1>¡Hola ${name.split(" ")[0]}!</h1>
                <p>Hemos recibido tu mensaje</p>
              </div>
              
              <div class="content">
                <p class="greeting">
                  Gracias por contactar con N3uralia. Hemos recibido tu mensaje y lo estamos revisando.
                </p>

                <div class="status-box">
                  <strong>✓ Mensaje recibido exitosamente</strong>
                  <p style="margin-top: 8px; font-size: 14px;">Nuestro equipo está analizando tu proyecto y nos pondremos en contacto muy pronto.</p>
                </div>

                <div class="info-box">
                  <p><strong>Tu email de contacto:</strong></p>
                  <p>${email}</p>
                  <p style="margin-top: 15px; font-size: 13px; color: #0369a1; opacity: 0.8;">Nos comunicaremos a través de este email</p>
                </div>

                <div class="next-steps">
                  <h3>¿Qué sucede ahora?</h3>
                  <ol>
                    <li>Nuestro equipo revisa tu proyecto y necesidades</li>
                    <li>Te enviaremos una propuesta personalizada</li>
                    <li>Agendaremos una llamada para discutir detalles</li>
                    <li>Comenzamos a trabajar en tu solución</li>
                  </ol>
                </div>

                <div class="signature">
                  <p style="color: #374151; margin-bottom: 10px;">
                    Si tienes preguntas adicionales, puedes responder directamente a este email.
                  </p>
                  <p class="signature-name">Equipo N3uralia</p>
                  <p style="color: #6b7280; font-size: 13px; margin-top: 5px;">Sistemas Agenticos en Producción</p>
                </div>
              </div>

              <div class="footer">
                <p>n3uralia.com | info@n3uralia.com</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `

    console.log("[v0] Sending email via Resend API...")
    // Send email to N3uralia team
    const teamResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: "info@n3uralia.com",
      replyTo: email,
      subject: `Nuevo contacto: ${name} - N3uralia`,
      html: teamEmailHtml,
    })

    console.log("[v0] Team email response:", teamResult)

    if (teamResult.error) {
      console.error("[v0] Team email failed:", teamResult.error)
      return NextResponse.json(
        { success: false, error: teamResult.error.message },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    console.log("[v0] Sending confirmation email to user...")
    const userResult = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: email,
      subject: "Hemos recibido tu mensaje - N3uralia",
      html: userEmailHtml,
    })

    console.log("[v0] User confirmation email response:", userResult)

    if (userResult.error) {
      console.error("[v0] User email failed:", userResult.error)
      // Don't fail completely if user email fails, but log it
    }

    console.log("[v0] Both emails sent successfully")
    return NextResponse.json({
      success: true,
      message: "Emails enviados exitosamente",
      teamEmailId: teamResult.data?.id,
      userEmailId: userResult.data?.id,
    })
  } catch (error) {
    console.error("[v0] API route error:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    )
  }
}
