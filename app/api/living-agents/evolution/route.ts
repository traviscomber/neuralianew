import { NextRequest, NextResponse } from "next/server"
import { LivingAgentsService } from "@/lib/living-agents-service"
import { PersonalityEngine } from "@/lib/agent-personality"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const agentId = searchParams.get("agent_id")
    const type = searchParams.get("type") || "full" // full, history, or summary

    if (!agentId) {
      return NextResponse.json({ error: "Missing agent ID" }, { status: 400 })
    }

    const agent = await LivingAgentsService.getAgent(agentId)
    if (!agent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    const evolutionHistory = await LivingAgentsService.getEvolutionHistory(agentId)
    const reflections = await LivingAgentsService.getReflections(agentId)

    const coherence = PersonalityEngine.calculateCoherence(agent.personality_score)
    const summary = PersonalityEngine.generateSummary(agent.personality_score)
    const phase = PersonalityEngine.determinePhase(agent.interaction_count)

    if (type === "history") {
      return NextResponse.json(evolutionHistory)
    }

    if (type === "summary") {
      return NextResponse.json({
        agent_name: agent.name,
        interaction_count: agent.interaction_count,
        phase,
        personality_score: agent.personality_score,
        coherence,
        summary,
      })
    }

    // Full response
    return NextResponse.json({
      agent: {
        id: agent.id,
        name: agent.name,
        interaction_count: agent.interaction_count,
        phase,
        created_at: agent.created_at,
      },
      personality: {
        score: agent.personality_score,
        coherence,
        summary,
      },
      evolution: {
        history: evolutionHistory,
        total_evolutions: evolutionHistory.length,
      },
      reflections: {
        list: reflections,
        total: reflections.length,
      },
    })
  } catch (error) {
    console.error("[living-agents] Error fetching evolution:", error)
    return NextResponse.json({ error: "Failed to fetch evolution" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { agent_id, reflection_text, insight_type } = body

    if (!agent_id || !reflection_text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const agent = await LivingAgentsService.getAgent(agent_id)
    if (!agent) {
      return NextResponse.json({ error: "Agent not found" }, { status: 404 })
    }

    // Calculate reflection insight
    const insight = PersonalityEngine.calculateReflectionInsight(
      agent,
      agent.interaction_count
    )

    // Log reflection
    const reflection = await LivingAgentsService.logReflection(
      agent_id,
      reflection_text,
      insight_type || insight.type,
      insight.score
    )

    // Record evolution from reflection
    if (Object.values(insight.shift).some((val) => val > 0)) {
      await LivingAgentsService.recordEvolution(
        agent_id,
        insight.shift,
        "Reflexión",
        `reflection_${reflection.id}`
      )
    }

    return NextResponse.json(
      {
        reflection,
        insight: insight.type,
        impact_score: insight.score,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("[living-agents] Error creating reflection:", error)
    return NextResponse.json({ error: "Failed to create reflection" }, { status: 500 })
  }
}
