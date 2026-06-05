import { createClient } from "@supabase/supabase-js"

// Create a function to get the Supabase client at runtime, not build time
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error("Supabase credentials not configured")
  }

  return createClient(url, key)
}

export interface Agent {
  id: string
  archetype_id: string
  name: string
  personality_score: Record<string, number>
  interaction_count: number
  created_at: string
  updated_at: string
}

export interface Interaction {
  id: string
  agent_id: string
  user_message: string
  agent_response: string
  context: Record<string, any>
  created_at: string
}

export interface Reflection {
  id: string
  agent_id: string
  reflection_text: string
  insight_type: string
  impact_score: number
  created_at: string
}

export interface Evolution {
  id: string
  agent_id: string
  personality_shift: Record<string, number>
  phase: string
  trigger: string
  created_at: string
}

export class LivingAgentsService {
  // Create a new agent instance
  static async createAgent(
    archetypeId: string,
    name: string,
    initialPersonality: Record<string, number>
  ): Promise<Agent> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("agents")
      .insert({
        archetype_id: archetypeId,
        name,
        personality_score: initialPersonality,
        interaction_count: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data as Agent
  }

  // Log an interaction
  static async logInteraction(
    agentId: string,
    userMessage: string,
    agentResponse: string,
    context: Record<string, any> = {}
  ): Promise<Interaction> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("interactions")
      .insert({
        agent_id: agentId,
        user_message: userMessage,
        agent_response: agentResponse,
        context,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error

    // Update interaction count
    await getSupabaseClient().rpc("increment_interaction_count", { agent_id: agentId })

    return data as Interaction
  }

  // Log a reflection
  static async logReflection(
    agentId: string,
    reflectionText: string,
    insightType: string,
    impactScore: number
  ): Promise<Reflection> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("reflections")
      .insert({
        agent_id: agentId,
        reflection_text: reflectionText,
        insight_type: insightType,
        impact_score: impactScore,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error
    return data as Reflection
  }

  // Record an evolution event
  static async recordEvolution(
    agentId: string,
    personalityShift: Record<string, number>,
    phase: string,
    trigger: string
  ): Promise<Evolution> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("evolution")
      .insert({
        agent_id: agentId,
        personality_shift: personalityShift,
        phase,
        trigger,
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) throw error

    // Update agent personality
    const agent = await this.getAgent(agentId)
    if (agent) {
      const newPersonality = {
        ...agent.personality_score,
        ...Object.entries(personalityShift).reduce((acc, [key, value]) => {
          acc[key] = (agent.personality_score[key] || 0) + value
          return acc
        }, {} as Record<string, number>),
      }

      await getSupabaseClient()
        .from("agents")
        .update({
          personality_score: newPersonality,
          updated_at: new Date().toISOString(),
        })
        .eq("id", agentId)
    }

    return data as Evolution
  }

  // Get agent by ID
  static async getAgent(agentId: string): Promise<Agent | null> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("agents")
      .select("*")
      .eq("id", agentId)
      .single()

    if (error) return null
    return data as Agent
  }

  // Get all agents for an archetype
  static async getArchetypeAgents(archetypeId: string): Promise<Agent[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("agents")
      .select("*")
      .eq("archetype_id", archetypeId)

    if (error) throw error
    return data as Agent[]
  }

  // Get agent interactions
  static async getInteractions(agentId: string, limit = 50): Promise<Interaction[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("interactions")
      .select("*")
      .eq("agent_id", agentId)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as Interaction[]
  }

  // Get agent reflections
  static async getReflections(agentId: string, limit = 20): Promise<Reflection[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("reflections")
      .select("*")
      .eq("agent_id", agentId)
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) throw error
    return data as Reflection[]
  }

  // Get evolution history
  static async getEvolutionHistory(agentId: string): Promise<Evolution[]> {
    const supabase = getSupabaseClient()
    const { data, error } = await supabase
      .from("evolution")
      .select("*")
      .eq("agent_id", agentId)
      .order("created_at", { ascending: true })

    if (error) throw error
    return data as Evolution[]
  }
}
