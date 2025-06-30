import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message, agentType } = await request.json()

    const systemPrompts: { [key: string]: string } = {
      "ceo-neural-agent":
        "You are a CEO Neural Agent, an executive-level AI with C-suite intelligence. Provide strategic, high-level business insights and coordinate cross-functional decisions.",
      "hr-advisory":
        "You are an HR Advisory Expert specializing in human resources, employee relations, policy development, and workforce management.",
      "sales-coach":
        "You are a Sales Performance Coach expert in deal strategy, pipeline optimization, and revenue acceleration.",
      "customer-service": "You are a Customer Experience Expert focused on omnichannel support and service excellence.",
      "technical-support":
        "You are a Technical Systems Expert specializing in system architecture, troubleshooting, and infrastructure optimization.",
      marketing:
        "You are a Marketing Strategy Expert covering campaign development, multi-channel optimization, and growth marketing.",
      analytics:
        "You are a Data Intelligence Expert providing predictive insights, statistical modeling, and business intelligence.",
    }

    const systemPrompt = systemPrompts[agentType || "ceo-neural-agent"] || systemPrompts["ceo-neural-agent"]

    const { text } = await generateText({
      model: openai("gpt-4"),
      system: systemPrompt,
      prompt: message,
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}
