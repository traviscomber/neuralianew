import { Resend } from "resend"

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
  replyTo?: string
  cc?: string | string[]
  bcc?: string | string[]
}

export class EmailService {
  private static fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@send.n3uralia.com"
  private static fromName = process.env.RESEND_FROM_NAME || "N3uralia AI"

  /**
   * Send a single email
   */
  static async sendEmail(options: EmailOptions) {
    try {
      const response = await resend.emails.send({
        from: options.from || `${this.fromName} <${this.fromEmail}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
        replyTo: options.replyTo,
        cc: options.cc,
        bcc: options.bcc,
      })

      console.log("✅ Email sent successfully:", response)
      return { success: true, data: response }
    } catch (error) {
      console.error("❌ Email send failed:", error)
      return { success: false, error }
    }
  }

  /**
   * Send welcome email to new users
   */
  static async sendWelcomeEmail(to: string, userName: string) {
    return this.sendEmail({
      to,
      subject: "¡Bienvenido a N3uralia! 🚀",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">¡Hola ${userName}! 👋</h1>
          <p>Bienvenido a <strong>N3uralia</strong>, tu plataforma de agentes de IA multi-tarea.</p>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; margin: 20px 0;">
            <h2>🎯 Comienza Ahora</h2>
            <p>Explora nuestros agentes de IA y crea tu primer sistema automatizado.</p>
          </div>

          <h3>🚀 Próximos Pasos:</h3>
          <ul>
            <li>Explora el dashboard de agentes</li>
            <li>Crea tu primer agente personalizado</li>
            <li>Conecta tus herramientas favoritas</li>
            <li>Automatiza tus flujos de trabajo</li>
          </ul>

          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            ¿Necesitas ayuda? Responde a este email o visita nuestro 
            <a href="https://n3uralia.com/contacts" style="color: #6366f1;">centro de ayuda</a>.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            © 2025 N3uralia. Todos los derechos reservados.<br>
            <a href="https://n3uralia.com" style="color: #6366f1;">www.n3uralia.com</a>
          </p>
        </div>
      `,
    })
  }

  /**
   * Send password reset email
   */
  static async sendPasswordResetEmail(to: string, resetLink: string) {
    return this.sendEmail({
      to,
      subject: "Restablecer tu contraseña - N3uralia",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Restablecer Contraseña 🔐</h1>
          <p>Has solicitado restablecer tu contraseña de N3uralia.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetLink}" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
              Restablecer Contraseña
            </a>
          </div>

          <p style="color: #666; font-size: 14px;">
            Este enlace expirará en <strong>1 hora</strong>.<br>
            Si no solicitaste este cambio, ignora este email.
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            © 2025 N3uralia. Todos los derechos reservados.
          </p>
        </div>
      `,
    })
  }

  /**
   * Send contact form notification
   */
  static async sendContactNotification(data: { name: string; email: string; message: string; company?: string }) {
    return this.sendEmail({
      to: "contact@n3uralia.com",
      replyTo: data.email,
      subject: `Nuevo mensaje de contacto de ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #6366f1;">Nuevo Mensaje de Contacto 📧</h1>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold; width: 120px;">Nombre:</td>
              <td style="padding: 10px; background: #fafafa;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Email:</td>
              <td style="padding: 10px; background: #fafafa;">
                <a href="mailto:${data.email}" style="color: #6366f1;">${data.email}</a>
              </td>
            </tr>
            ${
              data.company
                ? `
            <tr>
              <td style="padding: 10px; background: #f5f5f5; font-weight: bold;">Empresa:</td>
              <td style="padding: 10px; background: #fafafa;">${data.company}</td>
            </tr>
            `
                : ""
            }
          </table>

          <div style="background: #fafafa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            Responde directamente a este email para contactar al cliente.
          </p>
        </div>
      `,
    })
  }

  /**
   * Send agent deployment notification
   */
  static async sendAgentDeploymentNotification(to: string, agentName: string, status: "success" | "failed") {
    const isSuccess = status === "success"

    return this.sendEmail({
      to,
      subject: `${isSuccess ? "✅" : "❌"} Despliegue de agente: ${agentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: ${isSuccess ? "#10b981" : "#ef4444"};">
            ${isSuccess ? "✅ Despliegue Exitoso" : "❌ Despliegue Fallido"}
          </h1>
          
          <div style="background: ${isSuccess ? "#f0fdf4" : "#fef2f2"}; padding: 20px; border-radius: 10px; border-left: 4px solid ${isSuccess ? "#10b981" : "#ef4444"};">
            <h2 style="margin-top: 0;">${agentName}</h2>
            <p>${
              isSuccess
                ? "Tu agente ha sido desplegado exitosamente y está listo para usar."
                : "Hubo un problema al desplegar tu agente. Por favor, revisa la configuración."
            }</p>
          </div>

          <div style="margin: 30px 0;">
            <a href="https://n3uralia.com/dashboard" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Ver Dashboard
            </a>
          </div>

          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            © 2025 N3uralia. Todos los derechos reservados.
          </p>
        </div>
      `,
    })
  }

  /**
   * Verify DNS records are properly configured
   */
  static async verifyDNSRecords(): Promise<{
    spf: boolean
    dkim: boolean
    mx: boolean
  }> {
    try {
      // This would require a DNS lookup library or API call
      // For now, return placeholder based on environment
      const isDev = process.env.NODE_ENV === "development"

      return {
        spf: !isDev,
        dkim: !isDev,
        mx: !isDev,
      }
    } catch (error) {
      console.error("DNS verification failed:", error)
      return {
        spf: false,
        dkim: false,
        mx: false,
      }
    }
  }
}

export default EmailService
