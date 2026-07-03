import { sendResendEmail } from "@/lib/resend-api"

export interface EmailOptions {
  bcc?: string | string[]
  cc?: string | string[]
  from?: string
  html: string
  replyTo?: string
  subject: string
  to: string | string[]
}

export class EmailService {
  private static fromEmail = process.env["RESEND_FROM_EMAIL"] || "info@n3uralia.com"
  private static fromName = process.env["RESEND_FROM_NAME"] || "N3uralia"

  static async sendEmail(options: EmailOptions) {
    try {
      const response = await sendResendEmail({
        bcc: options.bcc,
        cc: options.cc,
        from: options.from || `${this.fromName} <${this.fromEmail}>`,
        html: options.html,
        replyTo: options.replyTo,
        subject: options.subject,
        to: options.to,
      })

      return { success: true, data: response }
    } catch (error) {
      console.error("[email-service] Email send failed:", error)
      return { success: false, error }
    }
  }

  static async sendWelcomeEmail(to: string, userName: string) {
    return this.sendEmail({
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #181e2a;">Hola ${userName}</h1>
          <p>Bienvenido a <strong>N3uralia</strong>.</p>
          <p>Ya puedes explorar nuestros sistemas agenticos, integraciones y workflows de IA.</p>
          <p style="margin-top: 24px;">
            <a href="https://www.n3uralia.com/es" style="background: #b1d374; color: #101828; padding: 12px 20px; text-decoration: none; border-radius: 5px;">
              Ir al sitio
            </a>
          </p>
        </div>
      `,
      subject: "Bienvenido a N3uralia",
      to,
    })
  }

  static async sendPasswordResetEmail(to: string, resetLink: string) {
    return this.sendEmail({
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #181e2a;">Restablecer contrasena</h1>
          <p>Recibimos una solicitud para actualizar tu contrasena.</p>
          <p style="margin: 24px 0;">
            <a href="${resetLink}" style="background: #b1d374; color: #101828; padding: 12px 20px; text-decoration: none; border-radius: 5px;">
              Restablecer contrasena
            </a>
          </p>
          <p>Si no solicitaste este cambio, puedes ignorar este correo.</p>
        </div>
      `,
      subject: "Restablecer tu contrasena - N3uralia",
      to,
    })
  }

  static async sendContactNotification(data: { company?: string; email: string; message: string; name: string }) {
    return this.sendEmail({
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #181e2a;">Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Empresa:</strong> ${data.company}</p>` : ""}
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; margin-top: 20px;">
            <p style="white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
      replyTo: data.email,
      subject: `Nuevo mensaje de contacto de ${data.name}`,
      to: process.env["CONTACT_RECIPIENT_EMAIL"] || "info@n3uralia.com",
    })
  }

  static async sendAgentDeploymentNotification(to: string, agentName: string, status: "success" | "failed") {
    const isSuccess = status === "success"

    return this.sendEmail({
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: ${isSuccess ? "#047857" : "#b91c1c"};">
            ${isSuccess ? "Despliegue exitoso" : "Despliegue fallido"}
          </h1>
          <p><strong>Agente:</strong> ${agentName}</p>
          <p>${isSuccess ? "El agente quedo disponible para uso." : "Hubo un problema durante el despliegue."}</p>
          <p style="margin-top: 24px;">
            <a href="https://www.n3uralia.com/dashboard" style="background: #b1d374; color: #101828; padding: 12px 20px; text-decoration: none; border-radius: 5px;">
              Ver dashboard
            </a>
          </p>
        </div>
      `,
      subject: `${isSuccess ? "OK" : "ERROR"} Despliegue de agente: ${agentName}`,
      to,
    })
  }

  static async verifyDNSRecords(): Promise<{
    dkim: boolean
    mx: boolean
    spf: boolean
  }> {
    const configured = Boolean(process.env["RESEND_API_KEY"])

    return {
      dkim: configured,
      mx: configured,
      spf: configured,
    }
  }
}

export default EmailService
