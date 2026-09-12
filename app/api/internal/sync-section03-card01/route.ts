import { NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase-server"

const SOURCE_URL = "https://raw.githubusercontent.com/traviscomber/neuralianew/fix-section03-card01-20260912/public/images/solutions/section03/operational-intelligence.png"
const BUCKET = "site-assets"
const OBJECT_PATH = "solutions/operational-intelligence.png"

async function syncCard01() {
  if (process.env.VERCEL_ENV !== "preview") {
    return new NextResponse("Not found", { status: 404 })
  }

  const source = await fetch(SOURCE_URL, { cache: "no-store" })
  if (!source.ok) {
    return NextResponse.json({ ok: false, stage: "source", status: source.status }, { status: 502 })
  }

  const bytes = new Uint8Array(await source.arrayBuffer())
  const supabase = createServerClient()
  const { error } = await supabase.storage.from(BUCKET).upload(OBJECT_PATH, bytes, {
    contentType: "image/png",
    cacheControl: "60",
    upsert: true,
  })

  if (error) {
    return NextResponse.json({ ok: false, stage: "upload", error: error.message }, { status: 500 })
  }

  const { data } = supabase.storage.from(BUCKET).getPublicUrl(OBJECT_PATH)
  return NextResponse.json({ ok: true, object: `${BUCKET}/${OBJECT_PATH}`, publicUrl: data.publicUrl, size: bytes.byteLength })
}

export async function GET() {
  return syncCard01()
}

export async function POST() {
  return syncCard01()
}
