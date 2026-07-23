import { NextResponse } from "next/server"

export const runtime = "nodejs"

export function GET() {
  const greenInstance = process.env.GREEN_API_INSTANCE_ID
  const greenToken = process.env.GREEN_API_TOKEN
  const callmebotKey = process.env.CALLMEBOT_API_KEY

  return NextResponse.json({
    hasGreenInstance: !!greenInstance,
    greenInstancePrefix: greenInstance ? `${greenInstance.slice(0, 8)}...` : null,
    hasGreenToken: !!greenToken,
    greenTokenPrefix: greenToken ? `${greenToken.slice(0, 10)}...` : null,
    hasCallmebotKey: !!callmebotKey,
    allEnvKeys: Object.keys(process.env)
      .filter(k => k.includes("GREEN") || k.includes("CALLME") || k.includes("WHATSAPP"))
      .map(k => ({ key: k, hasValue: !!process.env[k] })),
  })
}
