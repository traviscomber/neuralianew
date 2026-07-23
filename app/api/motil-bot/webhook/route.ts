/**
 * Motil Hotel Management Platform - WhatsApp Sales Agent
 * Uses the reusable Travis library with Motil configuration
 *
 * This endpoint handles incoming WhatsApp messages and generates
 * consultive responses about Motil features, pricing, and capabilities.
 */

import { NextRequest } from "next/server"
import { travisWebhookHandler } from "@/lib/travis/handler"
import { TRAVIS_CONFIG_MOTIL } from "@/lib/travis/configs"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * GET: Health check and verification
 */
export async function GET(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
}

/**
 * POST: Handle incoming WhatsApp messages
 */
export async function POST(request: NextRequest) {
  return travisWebhookHandler(request, TRAVIS_CONFIG_MOTIL)
}
