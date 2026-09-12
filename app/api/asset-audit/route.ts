import { createHash } from "node:crypto"
import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"

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
  const image = sharp(bytes, { failOn: "error" })
  const [metadata, stats, sample] = await Promise.all([
    image.metadata(),
    image.stats(),
    image
      .clone()
      .ensureAlpha()
      .resize(16, 10, { fit: "fill" })
      .raw()
      .toBuffer(),
  ])

  let visibleSamples = 0
  let opaqueSamples = 0
  let chromaticSamples = 0
  let alphaSum = 0
  const sampleHex: string[] = []

  for (let i = 0; i < sample.length; i += 4) {
    const r = sample[i]
    const g = sample[i + 1]
    const b = sample[i + 2]
    const a = sample[i + 3]
    alphaSum += a
    if (a > 12) visibleSamples += 1
    if (a > 242) opaqueSamples += 1
    if (a > 12 && Math.max(r, g, b) - Math.min(r, g, b) > 18) chromaticSamples += 1
    sampleHex.push(
      `${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}${a.toString(16).padStart(2, "0")}`,
    )
  }

  const end = Math.min(bytes.length, offset + length)
  const chunk = bytes.subarray(offset, end)

  return NextResponse.json({
    name,
    contentType: response.headers.get("content-type"),
    byteLength: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    metadata: {
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      space: metadata.space,
      channels: metadata.channels,
      hasAlpha: metadata.hasAlpha,
      isProgressive: metadata.isProgressive,
    },
    stats: {
      entropy: stats.entropy,
      sharpness: stats.sharpness,
      isOpaque: stats.isOpaque,
      dominant: stats.dominant,
      channels: stats.channels.map((channel) => ({
        min: channel.min,
        max: channel.max,
        mean: channel.mean,
        stdev: channel.stdev,
      })),
    },
    sample16x10: {
      visibleFraction: visibleSamples / 160,
      opaqueFraction: opaqueSamples / 160,
      chromaticFraction: chromaticSamples / 160,
      meanAlpha: alphaSum / (160 * 255),
      rgbaHex: sampleHex,
    },
    offset,
    end,
    done: end >= bytes.length,
    base64: chunk.toString("base64"),
  })
}
