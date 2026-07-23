/**
 * N3uralia WhatsApp Bot Webhook
 * Uses the reusable Travis library: lib/travis/handler.ts
 * Configuration: lib/travis/configs.ts (TRAVIS_CONFIG_N3URALIA)
 *
 * To port Travis to another project:
 * 1. Copy lib/travis/ to your project
 * 2. Create a new config in lib/travis/configs.ts
 * 3. Create an endpoint like this one, swapping the config
 */

import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_N3URALIA } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_N3URALIA)
}

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_N3URALIA)
}
