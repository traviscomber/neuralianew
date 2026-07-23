/**
 * Transport Certificates - Document Automation WhatsApp Sales Agent
 * Uses the reusable Travis library with Transport Certificates configuration
 */

import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_TRANSPORT_CERTS } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_TRANSPORT_CERTS)
}

export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_TRANSPORT_CERTS)
}
