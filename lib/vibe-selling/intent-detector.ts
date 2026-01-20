/**
 * Vibe Intake - Silent Intent Detection
 * Infers buyer intent from browsing signals
 */

export interface VibeSignals {
  scrollDepth: number // 0-100%
  timeOnCapabilities: number // ms
  timeOnOutcomes: number // ms
  timeOnAbout: number // ms
  language: "es" | "en"
  assetsClicked: string[] // ['demo', 'datasets', 'code', 'visuals']
  sessionDuration: number // ms
  verticalsFocused: ("heritage" | "dev" | "ai-agents" | "360")[]
}

export interface BuyerIntent {
  intent: "explorer" | "builder" | "buyer" | "partner"
  budgetRange: "startup" | "mid-market" | "enterprise"
  buyerType: "individual" | "startup" | "smb" | "institution" | "agency"
  urgency: "low" | "medium" | "high"
  primaryVertical: string
  confidence: number // 0-1
  suggestedOfferTemplate: string
}

export function detectIntent(signals: VibeSignals): BuyerIntent {
  // Score each dimension
  const explorerScore = signals.scrollDepth > 60 && signals.sessionDuration > 120000 ? 1 : 0
  const builderScore = signals.assetsClicked.includes("code") && signals.timeOnCapabilities > 30000 ? 1 : 0
  const buyerScore = signals.timeOnOutcomes > 20000 ? 1 : 0
  const partnerScore = signals.timeOnAbout > 25000 && signals.sessionDuration > 300000 ? 1 : 0

  // Determine intent
  const intentScores = { explorer: explorerScore, builder: builderScore, buyer: buyerScore, partner: partnerScore }
  const intent = (Object.entries(intentScores).sort((a, b) => b[1] - a[1])[0][0] || "explorer") as BuyerIntent["intent"]

  // Detect budget range
  let budgetRange: BuyerIntent["budgetRange"] = "mid-market"
  if (signals.assetsClicked.includes("visuals")) budgetRange = "enterprise"
  if (signals.assetsClicked.length <= 1) budgetRange = "startup"

  // Detect buyer type
  let buyerType: BuyerIntent["buyerType"] = "individual"
  if (signals.language === "es" && signals.timeOnAbout > 20000) buyerType = "institution"
  if (intent === "builder") buyerType = "agency"
  if (signals.sessionDuration > 300000) buyerType = "smb"

  // Detect urgency
  let urgency: BuyerIntent["urgency"] = "low"
  if (signals.assetsClicked.length > 3) urgency = "high"
  if (signals.timeOnOutcomes > 30000) urgency = "medium"

  // Get primary vertical
  const primaryVertical = signals.verticalsFocused[0] || "ai-agents"

  return {
    intent,
    budgetRange,
    buyerType,
    urgency,
    primaryVertical,
    confidence: Math.max(...Object.values(intentScores)),
    suggestedOfferTemplate: `${intent}-${budgetRange}`,
  }
}

export function generateVibeMessage(intent: BuyerIntent): string {
  const templates = {
    explorer: "Cuéntame, ¿qué te atrapó de esto? ¿Qué anda buscando?",
    builder: "Veo que estás mirando la tech. ¿Qué onda, qué querés construir?",
    buyer: "Dale, perfecto. ¿Qué necesitas y en cuánto tiempo lo querés listo?",
    partner: "Tienes una visión. Hablemos de cómo podemos crecer juntos.",
  }

  return templates[intent.intent]
}
