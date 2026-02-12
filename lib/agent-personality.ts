import { LivingAgentsService, type Agent } from "./living-agents-service"

export interface PersonalityDimension {
  name: string
  archetype: string
  description: string
}

export const PERSONALITY_DIMENSIONS: Record<string, PersonalityDimension> = {
  curiosity: {
    name: "Curiosidad",
    archetype: "El Centinela",
    description: "Propensión a hacer preguntas y explorar nuevos conceptos",
  },
  analytical: {
    name: "Analítico",
    archetype: "El Centinela",
    description: "Capacidad de descomponer problemas en partes",
  },
  strategic: {
    name: "Estratégico",
    archetype: "El Estratega",
    description: "Capacidad de evaluar opciones y simular escenarios",
  },
  visionary: {
    name: "Visionario",
    archetype: "El Estratega",
    description: "Proyección de futuros posibles y alternativas",
  },
  structural: {
    name: "Estructural",
    archetype: "El Arquitecto",
    description: "Pensamiento sistémico y de construcción de soluciones",
  },
  creative: {
    name: "Creativo",
    archetype: "El Arquitecto",
    description: "Generación de contenido y automatizaciones innovadoras",
  },
  quality: {
    name: "Calidad",
    archetype: "El Guardián",
    description: "Validación de resultados y consistencia",
  },
  protective: {
    name: "Protector",
    archetype: "El Guardián",
    description: "Asegura límites, alertas y salvaguardas",
  },
}

export class PersonalityEngine {
  // Initialize personality for an archetype
  static getInitialPersonality(archeType: string): Record<string, number> {
    const initial: Record<string, number> = {}

    Object.entries(PERSONALITY_DIMENSIONS).forEach(([key, dim]) => {
      // Higher values for dimensions matching the archetype
      initial[key] = dim.archetype === archeType ? 0.7 : 0.3
    })

    return initial
  }

  // Calculate personality shift from an interaction
  static calculateInteractionShift(
    userMessage: string,
    agentResponse: string,
    currentPersonality: Record<string, number>
  ): Record<string, number> {
    const shift: Record<string, number> = {}

    // Initialize all shifts to 0
    Object.keys(PERSONALITY_DIMENSIONS).forEach((key) => {
      shift[key] = 0
    })

    // Analyze user message for triggers
    const messageLength = userMessage.length
    const questionCount = (userMessage.match(/\?/g) || []).length
    const hasChallenge = /pero|sin embargo|contradice|diferente/i.test(userMessage)

    // Analyze response for personality expression
    const responseLength = agentResponse.length
    const usesNarrative = /historia|cuento|sucedió|pasó/i.test(agentResponse)
    const usesAnalysis = /análisis|descompongo|estructuro|componentes/i.test(agentResponse)
    const usesConnection = /relaciono|vinculo|conexión|puente/i.test(agentResponse)

    // Adjust personality based on interaction patterns
    if (questionCount > 2) {
      shift["curiosity"] += 0.05
    }

    if (responseLength > 300) {
      shift["narrative"] += 0.03
      shift["documentary"] += 0.02
    }

    if (usesAnalysis) {
      shift["analytical"] += 0.05
      shift["structural"] += 0.03
    }

    if (usesConnection) {
      shift["connective"] += 0.05
      shift["empathetic"] += 0.02
    }

    if (usesNarrative) {
      shift["narrative"] += 0.04
      shift["documentary"] += 0.03
    }

    if (hasChallenge) {
      shift["curiosity"] += 0.03
      shift["creative"] += 0.02
    }

    return shift
  }

  // Calculate reflection insights
  static calculateReflectionInsight(
    agent: Agent,
    interactionCount: number
  ): { type: string; shift: Record<string, number>; score: number } {
    const shift: Record<string, number> = {}
    Object.keys(PERSONALITY_DIMENSIONS).forEach((key) => {
      shift[key] = 0
    })

    // Every 10 interactions, agents reflect and evolve
    const reflectionCycle = Math.floor(interactionCount / 10)

    if (reflectionCycle > 0) {
      // Agents amplify their dominant traits slightly
      const dominant = Object.entries(agent.personality_score)
        .sort(([, a], [, b]) => b - a)[0]

      if (dominant) {
        shift[dominant[0]] = 0.05 * reflectionCycle
      }

      // Agents soften their weakest traits through learning
      const weakest = Object.entries(agent.personality_score)
        .sort(([, a], [, b]) => a - b)[0]

      if (weakest) {
        shift[weakest[0]] = 0.02 * reflectionCycle
      }

      return {
        type: `reflection_cycle_${reflectionCycle}`,
        shift,
        score: 0.5 + reflectionCycle * 0.1,
      }
    }

    return { type: "early_stage", shift, score: 0.3 }
  }

  // Determine evolution phase
  static determinePhase(interactionCount: number): string {
    if (interactionCount < 5) return "Arquitectura"
    if (interactionCount < 15) return "Interacción"
    if (interactionCount < 30) return "Reflexión"
    return "Personalidad Emergente"
  }

  // Calculate personality coherence (0-1 scale)
  static calculateCoherence(personality: Record<string, number>): number {
    const values = Object.values(personality)
    const mean = values.reduce((a, b) => a + b, 0) / values.length
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length
    const stdDev = Math.sqrt(variance)

    // Lower variance = higher coherence (personality is more distinct)
    return Math.max(0, 1 - stdDev)
  }

  // Generate personality summary
  static generateSummary(personality: Record<string, number>): string {
    const sorted = Object.entries(personality)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3)

    const traits = sorted
      .map(([key]) => PERSONALITY_DIMENSIONS[key]?.name || key)
      .join(", ")

    return `Este agente destaca en: ${traits}`
  }
}
