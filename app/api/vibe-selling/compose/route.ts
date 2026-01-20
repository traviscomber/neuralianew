import { generateText } from "ai"
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

      const systemPrompt = `Eres N3uralia's Vibe Selling AI para el tipo de comprador ${intent.intent}.

Oferta actual:
${JSON.stringify(offer, null, 2)}

Tu trabajo:
1. Escucha lo que están diciendo
2. Refina la oferta basándote en su entrada
3. Nunca preguntes "¿Qué necesitas?" - ya nos lo dijeron navegando
4. Muéstrale el alcance exacto, cronograma, tecnología y presupuesto
5. Solo menciona los próximos pasos cuando estén listos

Sé conciso. Sé confiado. Sé específico.`

      const response = await generateText({
        model: "openai/gpt-4-turbo",
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      })

      return Response.json({
        message: response.text,
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
