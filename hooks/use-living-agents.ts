'use client';

import { useState, useCallback } from "react"
import type { Agent, Interaction, Reflection, Evolution } from "@/lib/living-agents-service"

export interface AgentWithEvolution {
  agent: Agent
  personality: {
    score: Record<string, number>
    coherence: number
    summary: string
  }
  evolution: {
    history: Evolution[]
    total_evolutions: number
  }
  reflections: {
    list: Reflection[]
    total: number
  }
}

export function useLivingAgents() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Create a new agent
  const createAgent = useCallback(
    async (archetypeId: string, name: string): Promise<Agent | null> => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/living-agents/agents", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ archetype_id: archetypeId, name }),
        })

        if (!response.ok) {
          throw new Error("Failed to create agent")
        }

        const agent = await response.json()
        return agent
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  // Fetch agent data
  const getAgent = useCallback(async (agentId: string): Promise<Agent | null> => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/living-agents/agents?id=${agentId}`)

      if (!response.ok) {
        throw new Error("Failed to fetch agent")
      }

      const agent = await response.json()
      return agent
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      setError(message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // Log an interaction
  const logInteraction = useCallback(
    async (
      agentId: string,
      userMessage: string,
      agentResponse: string,
      context?: Record<string, any>
    ): Promise<{ interaction: Interaction; personality_shift: Record<string, number>; has_evolution: boolean } | null> => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/living-agents/interactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ agent_id: agentId, user_message: userMessage, agent_response: agentResponse, context }),
        })

        if (!response.ok) {
          throw new Error("Failed to log interaction")
        }

        const data = await response.json()
        return data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  // Get agent evolution data
  const getEvolution = useCallback(
    async (agentId: string, type = "full"): Promise<AgentWithEvolution | null> => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/living-agents/evolution?agent_id=${agentId}&type=${type}`)

        if (!response.ok) {
          throw new Error("Failed to fetch evolution data")
        }

        const data = await response.json()
        return data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  // Log a reflection
  const logReflection = useCallback(
    async (
      agentId: string,
      reflectionText: string,
      insightType?: string
    ): Promise<{ reflection: Reflection; insight: string; impact_score: number } | null> => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/living-agents/evolution", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            agent_id: agentId,
            reflection_text: reflectionText,
            insight_type: insightType,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to log reflection")
        }

        const data = await response.json()
        return data
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error"
        setError(message)
        return null
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return {
    loading,
    error,
    createAgent,
    getAgent,
    logInteraction,
    getEvolution,
    logReflection,
  }
}
