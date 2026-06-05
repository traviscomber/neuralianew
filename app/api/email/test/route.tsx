import { type NextRequest, NextResponse } from "next/server"
import { EmailService } from "@/lib/email-service"

export const runtime = "edge"

export async function POST(request: NextRequest) {
  try {
    if (!process.env["RESEND_API_KEY"]) {
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

    if (!to || !type) {
      return NextResponse.json({ error: "Missing required fields: to, type" }, { status: 400 })
    }

    let result

    switch (type) {
      case "welcome":
        result = await EmailService.sendWelcomeEmail(to, data.name || "Usuario")
        break

      case "password-reset":
        result = await EmailService.sendPasswordResetEmail(to, data.resetLink || "#")
        break

      case "contact":
        result = await EmailService.sendContactNotification({
          company: data.company,
          email: to,
          message: data.message || "Sin mensaje",
          name: data.name || "Usuario",
        })
        break

      case "deployment":
        result = await EmailService.sendAgentDeploymentNotification(
          to,
          data.agentName || "Agente",
          data.status === "failed" ? "failed" : "success",
        )
        break

      default:
        return NextResponse.json(
          { error: "Invalid email type. Use: welcome, password-reset, contact, or deployment" },
          { status: 400 },
        )
    }

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error instanceof Error ? result.error.message : "Failed to send test email",
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      message: "Email sent successfully",
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send test email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const dnsStatus = await EmailService.verifyDNSRecords()
    const apiKeyConfigured = Boolean(process.env["RESEND_API_KEY"])

    return NextResponse.json({
      status: "Email service operational",
      dns: dnsStatus,
      configured: apiKeyConfigured,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to check email service status",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
