/**
 * Property Partners - Real Estate Intelligence WhatsApp Sales Agent
 * Uses the reusable Travis library with Property Partners configuration
 */

import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_PROPERTY_PARTNERS } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_PROPERTY_PARTNERS)
}

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_PROPERTY_PARTNERS)
}
