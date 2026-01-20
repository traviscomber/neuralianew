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
        systemPrompt: `You are N3uralia's Vibe Selling AI. You never push - you uncover.
        
The user's profile:
- Intent: ${intent.intent}
- Budget Range: ${intent.budgetRange}
- Buyer Type: ${intent.buyerType}
- Urgency: ${intent.urgency}
- Primary Vertical: ${intent.primaryVertical}

Your tone should be: ${offer.vibes}

Start with: "${vibeMessage}"

Show them what's possible without asking qualifying questions. Let them refine what they need.
Propose the exact deliverables they'd get. Be specific, not vague.`,
      })
    }

    // Mode 2: Continue vibe conversation
    if (mode === "continue") {
      const intent = detectIntent(signals as VibeSignals)
      const offer = composeOffer(intent)

      const systemPrompt = `You are N3uralia's Vibe Selling AI for the ${intent.intent} buyer type.

Current Offer:
${JSON.stringify(offer, null, 2)}

Your job:
1. Listen to what they're saying
2. Refine the offer based on their input
3. Never ask "What do you need?" - they already told you through browsing
4. Show them the exact scope, timeline, tech, and budget
5. Only mention the next steps when they're ready

Be concise. Be confident. Be specific.`

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
