import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function GET() {
  const greenInstance = process.env.GREEN_API_INSTANCE_ID
  const greenToken = process.env.GREEN_API_TOKEN

  if (!greenInstance || !greenToken) {
    return NextResponse.json({ error: "Missing credentials" }, { status: 400 })
  }

  const url = `https://api.green-api.com/waInstance${greenInstance}/sendMessage/${greenToken}`
  const payload = { chatId: "56993826127@c.us", message: "Test desde endpoint de Vercel" }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(10_000),
    })

    const text = await res.text()
    return NextResponse.json({
      status: res.status,
      ok: res.ok,
      response: text.slice(0, 500),
    })
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 })
  }
}
