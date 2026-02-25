"use server"

import { EmailService } from "@/lib/email-service"

export async function sendDirectEmail(senderEmail: string, senderName: string) {
  try {
    // Send a notification to the N3uralia team
    const result = await EmailService.sendContactNotification({
      name: senderName,
      email: senderEmail,
      message: "Interesado en conocer más sobre nuestros servicios de arquitectura de sistemas agenticos.",
    })

    if (!result.success) {
      return {
        success: false,
        error: "No se pudo enviar el email. Por favor, intenta nuevamente.",
      }
    }

    return {
      success: true,
      message: "Email enviado exitosamente. Nos pondremos en contacto pronto.",
    }
  } catch (error) {
    console.error("[v0] Send email error:", error)
    return {
      success: false,
      error: "Error al enviar el email. Por favor, intenta nuevamente.",
    }
  }
}
