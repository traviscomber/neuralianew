import { createHash } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const ASSETS = new Set([
  "visibility.png",
  "workflow-automation.png",
  "decision-intelligence.png",
  "durable-systems.png",
])

const STORAGE_BASE =
  "https://dptblcvifavtbvngivkb.supabase.co/storage/v1/object/public/site-assets/solutions/section02"

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get("name") || ""
  const offset = Math.max(0, Number(request.nextUrl.searchParams.get("offset") || "0") || 0)
  const requestedLength = Math.max(1, Number(request.nextUrl.searchParams.get("length") || "24000") || 24000)
  const length = Math.min(requestedLength, 48000)

  if (!ASSETS.has(name)) {
    return NextResponse.json({ error: "Unknown asset" }, { status: 400 })
  }

  const response = await fetch(`${STORAGE_BASE}/${name}`, { cache: "no-store" })
  if (!response.ok) {
    return NextResponse.json(
      { error: "Storage fetch failed", status: response.status },
      { status: 502 },
    )
  }

  const bytes = Buffer.from(await response.arrayBuffer())
  const end = Math.min(bytes.length, offset + length)
  const chunk = bytes.subarray(offset, end)

  return NextResponse.json({
    name,
    contentType: response.headers.get("content-type"),
    byteLength: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    offset,
    end,
    done: end >= bytes.length,
    base64: chunk.toString("base64"),
  })
}
