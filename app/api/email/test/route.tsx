import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { EmailService } from "@/lib/email-service"
import { checkRateLimit } from "@/lib/rate-limit"

export const runtime = "edge"

const requestSchema = z.object({
  type: z.enum(["welcome", "password-reset", "contact", "deployment"]),
  to: z.string().email().max(254),
  name: z.string().trim().max(100).optional(),
  company: z.string().trim().max(150).optional(),
  message: z.string().trim().max(2000).optional(),
  resetLink: z.string().url().max(2000).optional(),
  agentName: z.string().trim().max(100).optional(),
  status: z.enum(["success", "failed"]).optional(),
})

function isAuthorized(request: NextRequest) {
  const configuredToken = process.env.ADMIN_API_KEY
  const suppliedToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "")
  return Boolean(configuredToken && suppliedToken && suppliedToken === configuredToken)
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service unavailable" }, { status: 503 })
  }

  const limit = await checkRateLimit("admin-email-test", {
    keyPrefix: "rl:email-test:",
    maxRequests: 3,
    windowMs: 60_000,
  })
  if (!limit.allowed) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter || 60) } },
    )
  }

  try {
    const parsed = requestSchema.safeParse(await request.json())
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 })
    }

    const { type, to, ...data } = parsed.data
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
    }

    if (!result.success) {
      console.error("[email-test] Send failed")
      return NextResponse.json({ error: "Failed to send test email" }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[email-test] Request failed:", error)
    return NextResponse.json({ error: "Failed to send test email" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  return NextResponse.json({
    configured: Boolean(process.env.RESEND_API_KEY),
    status: "ok",
  })
}
