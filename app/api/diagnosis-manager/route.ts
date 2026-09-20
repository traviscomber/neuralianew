import { diagnosisManagerAsset0 } from "@/lib/diagnosis-manager-asset-0"
import { diagnosisManagerAsset1 } from "@/lib/diagnosis-manager-asset-1"
import { diagnosisManagerAsset2 } from "@/lib/diagnosis-manager-asset-2"
import { diagnosisManagerAsset3 } from "@/lib/diagnosis-manager-asset-3"
import { diagnosisManagerAsset4 } from "@/lib/diagnosis-manager-asset-4"
import { diagnosisManagerAsset5 } from "@/lib/diagnosis-manager-asset-5"
import { diagnosisManagerAsset6 } from "@/lib/diagnosis-manager-asset-6"
import { diagnosisManagerAsset7 } from "@/lib/diagnosis-manager-asset-7"
import { diagnosisManagerAsset8 } from "@/lib/diagnosis-manager-asset-8"
import { diagnosisManagerAsset9 } from "@/lib/diagnosis-manager-asset-9"

export const dynamic = "force-static"
export const runtime = "nodejs"

export async function GET() {
  const bytes = Buffer.from(
    diagnosisManagerAsset0 +
    diagnosisManagerAsset1 +
    diagnosisManagerAsset2 +
    diagnosisManagerAsset3 +
    diagnosisManagerAsset4 +
    diagnosisManagerAsset5 +
    diagnosisManagerAsset6 +
    diagnosisManagerAsset7 +
    diagnosisManagerAsset8 +
    diagnosisManagerAsset9,
    "base64",
  )

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
