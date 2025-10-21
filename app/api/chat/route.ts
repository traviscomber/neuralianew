import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const result = await streamText({
      model: openai("gpt-4o"),
      messages,
      system: `You are a helpful AI assistant for N3uralia, an AI automation company. 
      You help answer questions about AI agents, automation, and enterprise solutions.
      Be professional, helpful, and concise in your responses.`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Chat API Error:", error)
    return new Response("Error processing chat", { status: 500 })
  }
}
