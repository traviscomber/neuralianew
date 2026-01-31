import { NextRequest, NextResponse } from "next/server"
import { LivingAgentsService } from "@/lib/living-agents-service"
import { PersonalityEngine } from "@/lib/agent-personality"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { archetype_id, name } = body

    if (!archetype_id || !name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Get initial personality for archetype
    const initialPersonality = PersonalityEngine.getInitialPersonality(archetype_id)

    // Create agent
    const agent = await LivingAgentsService.createAgent(archetype_id, name, initialPersonality)

    return NextResponse.json(agent, { status: 201 })
  } catch (error) {
    console.error("[living-agents] Error creating agent:", error)
    return NextResponse.json({ error: "Failed to create agent" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const agentId = searchParams.get("id")

    if (!agentId) {
      return NextResponse.json({ error: "Missing agent ID" }, { status: 400 })
    }

    const agent = await LivingAgentsService.getAgent(agentId)

    if (!agent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    return NextResponse.json(agent)
  } catch (error) {
    console.error("[living-agents] Error fetching agent:", error)
    return NextResponse.json({ error: "Failed to fetch agent" }, { status: 500 })
  }
}
