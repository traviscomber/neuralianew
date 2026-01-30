import { NextRequest, NextResponse } from "next/server"
import { LivingAgentsService } from "@/lib/living-agents-service"
import { PersonalityEngine } from "@/lib/agent-personality"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { agent_id, user_message, agent_response, context } = body

    if (!agent_id || !user_message || !agent_response) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Log the interaction
    const interaction = await LivingAgentsService.logInteraction(
      agent_id,
      user_message,
      agent_response,
      context || {}
    )

    // Get agent to analyze interaction
    const agent = await LivingAgentsService.getAgent(agent_id)
    if (!agent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    // Calculate personality shift from this interaction
    const shift = PersonalityEngine.calculateInteractionShift(
      user_message,
      agent_response,
      agent.personality_score
    )

    // Check if shift is significant (any dimension > 0.03)
    const hasSignificantShift = Object.values(shift).some((val) => Math.abs(val) > 0.03)

    if (hasSignificantShift) {
      // Record evolution
      const phase = PersonalityEngine.determinePhase(agent.interaction_count + 1)
      await LivingAgentsService.recordEvolution(
        agent_id,
        shift,
        phase,
        `interaction_${interaction.id}`
      )
    }

    return NextResponse.json(
      {
        interaction,
        personality_shift: shift,
        has_evolution: hasSignificantShift,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("[living-agents] Error logging interaction:", error)
    return NextResponse.json({ error: "Failed to log interaction" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const agentId = searchParams.get("agent_id")
    const limit = parseInt(searchParams.get("limit") || "50", 10)

    if (!agentId) {
      return NextResponse.json({ error: "Missing agent ID" }, { status: 400 })
    }

    const interactions = await LivingAgentsService.getInteractions(agentId, limit)

    return NextResponse.json(interactions)
  } catch (error) {
    console.error("[living-agents] Error fetching interactions:", error)
    return NextResponse.json({ error: "Failed to fetch interactions" }, { status: 500 })
  }
}
