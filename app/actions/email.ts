"use server"

import { EmailService } from "@/lib/email-service"

export async function sendDirectEmail(senderEmail: string, senderName: string) {
  try {
    console.log("[v0] sendDirectEmail called with:", { senderEmail, senderName })

    // Send a notification to the N3uralia team
    const result = await EmailService.sendContactNotification({
      name: senderName,
      email: senderEmail,
      message: "Interesado en conocer más sobre nuestros servicios de arquitectura de sistemas agenticos.",
    })

    console.log("[v0] Email result:", result)

    if (!result.success) {
      console.error("[v0] Email failed:", result.error)
      return {
        success: false,
        message: "No se pudo enviar el email. Por favor, intenta nuevamente.",
      }
    }

    console.log("[v0] Email sent successfully")
    return {
      success: true,
      message: "Email enviado exitosamente. Nos pondremos en contacto pronto.",
    }
  } catch (error) {
    console.error("[v0] Send email error:", error)
    return {
      success: false,
      message: "Error al enviar el email. Por favor, intenta nuevamente.",
    }
  }
}
