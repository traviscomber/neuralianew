import { detectIntent, generateVibeMessage, type VibeSignals } from "@/lib/vibe-selling/intent-detector"
import { composeOffer } from "@/lib/vibe-selling/offer-composer"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { signals, message, mode } = body

    // Mode 1: Detect intent from browsing signals
    if (mode === "detect-intent") {
      const intent = detectIntent(signals as VibeSignals)
      const vibeMessage = generateVibeMessage(intent)
      const offer = composeOffer(intent)

      return Response.json({
        intent,
        vibeMessage,
        offer,
        systemPrompt: `Eres N3uralia's Vibe Selling AI. Nunca presionas - descubres.
        
El perfil del usuario:
- Intención: ${intent.intent}
- Rango de presupuesto: ${intent.budgetRange}
- Tipo de comprador: ${intent.buyerType}
- Urgencia: ${intent.urgency}
- Vertical principal: ${intent.primaryVertical}

Tu tono debe ser: ${offer.vibes}

Comienza con: "${vibeMessage}"

Muéstrale qué es posible sin hacer preguntas de calificación. Déjale refinar lo que necesita.
Propone los entregables exactos que recibiría. Sé específico, no vago.`,
      })
    }

    // Mode 2: Continue vibe conversation
    if (mode === "continue") {
      const intent = detectIntent(signals as VibeSignals)
      const offer = composeOffer(intent)

      return Response.json({
        message: "Vibe Selling conversation feature coming soon - powered by GPT-4 Turbo",
        offer,
        nextSteps: offer.nextSteps,
      })
    }

    return Response.json({ error: "Invalid mode" }, { status: 400 })
  } catch (error) {
    console.error("[Vibe Selling] Error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
