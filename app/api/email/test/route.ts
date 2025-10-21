import { type NextRequest, NextResponse } from "next/server"
import EmailService from "@/lib/email-service"

export const runtime = "edge"

export async function POST(request: NextRequest) {
  try {
    const { type, to, ...data } = await request.json()

    if (!to || !type) {
      return NextResponse.json({ error: "Missing required fields: to, type" }, { status: 400 })
    }

    let result

    switch (type) {
      case "welcome":
        result = await EmailService.sendWelcomeEmail(to, data.name || "Usuario")
        break

      case "password-reset":
        result = await EmailService.sendPasswordResetEmail(
          to,
          data.resetLink || "https://n3uralia.com/reset-password?token=test",
        )
        break

      case "contact":
        result = await EmailService.sendContactNotification({
          name: data.name || "Usuario de Prueba",
          email: to,
          message: data.message || "Este es un mensaje de prueba desde N3uralia",
          company: data.company,
        })
        break

      case "deployment":
        result = await EmailService.sendAgentDeploymentNotification(
          to,
          data.agentName || "Test AI Agent",
          data.status || "success",
        )
        break

      default:
        return NextResponse.json(
          { error: "Invalid email type. Use: welcome, password-reset, contact, or deployment" },
          { status: 400 },
        )
    }

    return NextResponse.json(result)
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
    const dnsStatus = await EmailService.verifyDNSRecords()
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
