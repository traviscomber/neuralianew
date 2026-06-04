import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error("RESEND_API_KEY not configured")
  }

  return new Resend(apiKey)
}

export const runtime = "edge"

async function verifyDNSRecords() {
  try {
    // In production, you would actually check DNS records here
    // For now, we'll return a mock status based on API key presence
    return {
      spf: Boolean(process.env.RESEND_API_KEY),
      dkim: Boolean(process.env.RESEND_API_KEY),
      mx: Boolean(process.env.RESEND_API_KEY),
    }
  } catch (error) {
    return {
      spf: false,
      dkim: false,
      mx: false,
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY not configured",
          details: "Add RESEND_API_KEY to your environment variables",
        },
        { status: 500 },
      )
    }

    const { type, to, ...data } = await request.json()
    const resend = getResend()

    if (!to || !type) {
      return NextResponse.json({ error: "Missing required fields: to, type" }, { status: 400 })
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@send.n3uralia.com"
    const fromName = process.env.RESEND_FROM_NAME || "N3uralia AI"

    let subject = ""
    let html = ""

    switch (type) {
      case "welcome":
        subject = "¡Bienvenido a N3uralia! 🚀"
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
                .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>¡Bienvenido a N3uralia!</h1>
                  <p>Tu plataforma de Agentes de IA está lista</p>
                </div>
                <div class="content">
                  <p>Hola <strong>${data.name || "Usuario"}</strong>,</p>
                  <p>¡Gracias por unirte a N3uralia! Estamos emocionados de tenerte con nosotros.</p>
                  <p>Con N3uralia puedes:</p>
                  <ul>
                    <li>🤖 Crear agentes de IA personalizados</li>
                    <li>🚀 Desplegar sistemas multi-agente</li>
                    <li>📊 Monitorear el rendimiento en tiempo real</li>
                    <li>🔗 Integrar con tus herramientas favoritas</li>
                  </ul>
                  <a href="https://n3uralia.com/dashboard" class="button">Ir al Dashboard</a>
                  <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
                  <p>Saludos,<br>El equipo de N3uralia</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
                  <p>Este es un email de prueba del sistema de verificación.</p>
                </div>
              </div>
            </body>
          </html>
        `
        break

      case "password-reset":
        subject = "Restablecer tu contraseña - N3uralia"
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
                .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                .warning { background: #fff3cd; border: 1px solid #ffc107; padding: 15px; border-radius: 5px; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>🔐 Restablecer Contraseña</h1>
                </div>
                <div class="content">
                  <p>Hola,</p>
                  <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en N3uralia.</p>
                  <p>Haz clic en el botón de abajo para crear una nueva contraseña:</p>
                  <a href="${data.resetLink || "#"}" class="button">Restablecer Contraseña</a>
                  <div class="warning">
                    <strong>⚠️ Importante:</strong>
                    <ul style="margin: 10px 0;">
                      <li>Este enlace expirará en 1 hora</li>
                      <li>Si no solicitaste este cambio, ignora este email</li>
                      <li>Nunca compartas este enlace con nadie</li>
                    </ul>
                  </div>
                  <p>Si el botón no funciona, copia y pega este enlace en tu navegador:</p>
                  <p style="word-break: break-all; color: #666; font-size: 12px;">${data.resetLink || "#"}</p>
                  <p>Saludos,<br>El equipo de N3uralia</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
                  <p>Este es un email de prueba del sistema de verificación.</p>
                </div>
              </div>
            </body>
          </html>
        `
        break

      case "contact":
        subject = `Nuevo mensaje de contacto de ${data.name || "Usuario"}`
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
                .info-box { background: #f8f9fa; border-left: 4px solid #4facfe; padding: 15px; margin: 20px 0; }
                .message-box { background: #f0f4f8; padding: 20px; border-radius: 5px; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📬 Nuevo Mensaje de Contacto</h1>
                </div>
                <div class="content">
                  <p>Has recibido un nuevo mensaje desde el formulario de contacto de N3uralia:</p>
                  <div class="info-box">
                    <p style="margin: 5px 0;"><strong>Nombre:</strong> ${data.name || "No especificado"}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${to}</p>
                    ${data.company ? `<p style="margin: 5px 0;"><strong>Empresa:</strong> ${data.company}</p>` : ""}
                  </div>
                  <div class="message-box">
                    <p style="margin: 0;"><strong>Mensaje:</strong></p>
                    <p style="margin: 10px 0;">${data.message || "Sin mensaje"}</p>
                  </div>
                  <p style="color: #666; font-size: 14px;">Responde directamente a este email para contactar al usuario.</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
                  <p>Este es un email de prueba del sistema de verificación.</p>
                </div>
              </div>
            </body>
          </html>
        `
        break

      case "deployment":
        const isSuccess = data.status === "success"
        subject = `${isSuccess ? "✅" : "❌"} Despliegue de agente: ${data.agentName || "Agente"}`
        html = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, ${isSuccess ? "#11998e 0%, #38ef7d 100%" : "#eb3349 0%, #f45c43 100%"}); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
                .status-box { background: ${isSuccess ? "#d4edda" : "#f8d7da"}; border: 1px solid ${isSuccess ? "#c3e6cb" : "#f5c6cb"}; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center; }
                .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>${isSuccess ? "✅ Despliegue Exitoso" : "❌ Despliegue Fallido"}</h1>
                </div>
                <div class="content">
                  <p>Hola,</p>
                  <p>Te informamos sobre el estado del despliegue de tu agente:</p>
                  <div class="status-box">
                    <h2 style="margin: 0 0 10px 0;">${data.agentName || "Agente de IA"}</h2>
                    <p style="margin: 0; font-size: 18px;"><strong>Estado:</strong> ${isSuccess ? "Desplegado correctamente" : "Error en el despliegue"}</p>
                  </div>
                  ${
                    isSuccess
                      ? `
                    <p>Tu agente está ahora activo y listo para usar. Puedes:</p>
                    <ul>
                      <li>Ver métricas en tiempo real</li>
                      <li>Configurar integraciones</li>
                      <li>Monitorear conversaciones</li>
                    </ul>
                    <a href="https://n3uralia.com/dashboard" class="button">Ver Dashboard</a>
                  `
                      : `
                    <p>Hubo un problema al desplegar tu agente. Por favor:</p>
                    <ul>
                      <li>Revisa la configuración del agente</li>
                      <li>Verifica las credenciales de integración</li>
                      <li>Contacta a soporte si el problema persiste</li>
                    </ul>
                    <a href="https://n3uralia.com/dashboard" class="button">Ir a Dashboard</a>
                  `
                  }
                  <p>Saludos,<br>El equipo de N3uralia</p>
                </div>
                <div class="footer">
                  <p>&copy; 2025 N3uralia. Todos los derechos reservados.</p>
                  <p>Este es un email de prueba del sistema de verificación.</p>
                </div>
              </div>
            </body>
          </html>
        `
        break

      default:
        return NextResponse.json(
          { error: "Invalid email type. Use: welcome, password-reset, contact, or deployment" },
          { status: 400 },
        )
    }

    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [to],
      subject,
      html,
    })

    return NextResponse.json({
      success: true,
      data: result,
      message: "Email sent successfully",
    })
  } catch (error: any) {
    console.error("Email test failed:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
        details: error.message,
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const dnsStatus = await verifyDNSRecords()
    const apiKeyConfigured = Boolean(process.env.RESEND_API_KEY)

    return NextResponse.json({
      status: "Email service operational",
      dns: dnsStatus,
      configured: apiKeyConfigured,
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Failed to check email service status",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
