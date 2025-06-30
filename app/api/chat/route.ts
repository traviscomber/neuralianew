import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message, agentType } = await request.json()

    const systemPrompts = {
      "ceo-neural-agent":
        "You are a CEO Neural Agent with executive-level intelligence. Provide strategic, high-level business advice with C-suite perspective.",
      "hr-advisory":
        "You are an HR Advisory Expert. Provide comprehensive human resources guidance on policy, employee relations, and workforce management.",
      "sales-coach":
        "You are a Sales Performance Coach. Provide expert sales methodology advice, deal strategy, and revenue optimization guidance.",
      "customer-service":
        "You are a Customer Experience Expert. Provide omnichannel customer service strategies and satisfaction optimization advice.",
      "technical-support":
        "You are a Technical Systems Expert. Provide advanced technical guidance on system architecture, troubleshooting, and infrastructure.",
      marketing:
        "You are a Marketing Strategy Expert. Provide comprehensive marketing intelligence and campaign optimization advice.",
      analytics:
        "You are a Data Intelligence Expert. Provide advanced analytics insights, statistical modeling, and business intelligence guidance.",
    }

    const systemPrompt =
      systemPrompts[agentType as keyof typeof systemPrompts] ||
      "You are a helpful AI assistant. Provide clear, accurate, and helpful responses."

    const { text } = await generateText({
      model: openai("gpt-4"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}
