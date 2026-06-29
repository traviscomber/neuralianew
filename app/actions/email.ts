"use server"

import { EmailService } from "@/lib/email-service"

export async function sendDirectEmail(senderEmail: string, senderName: string, message: string = "") {
  try {
    console.log("[N3uralia] sendDirectEmail called with:", { senderEmail, senderName, hasMessage: !!message })

    // Send a notification to the N3uralia team
    const result = await EmailService.sendContactNotification({
      name: senderName,
      email: senderEmail,
      message: message || "Interesado en conocer más sobre nuestros servicios de arquitectura de sistemas agenticos.",
    })

    console.log("[N3uralia] Email result:", result)

    if (!result.success) {
      console.error("[N3uralia] Email failed:", result.error)
      return {
        success: false,
        message: "No se pudo enviar el email. Por favor, intenta nuevamente.",
      }
    }

    console.log("[N3uralia] Email sent successfully")
    return {
      success: true,
      message: "Email enviado exitosamente. Nos pondremos en contacto pronto.",
    }
  } catch (error) {
    console.error("[N3uralia] Send email error:", error)
    return {
      success: false,
      message: "Error al enviar el email. Por favor, intenta nuevamente.",
    }
  }
}
