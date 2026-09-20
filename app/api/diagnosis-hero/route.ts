import { diagnosisHeroAssetA } from "@/lib/diagnosis-hero-asset-a"
import { diagnosisHeroAssetMid } from "@/lib/diagnosis-hero-asset-mid"
import { diagnosisHeroAssetB } from "@/lib/diagnosis-hero-asset-b"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const bytes = Buffer.from(
    diagnosisHeroAssetA + diagnosisHeroAssetMid + diagnosisHeroAssetB,
    "base64",
  )

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
