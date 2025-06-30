import { type NextRequest, NextResponse } from "next/server"
import { OpenAI } from "openai"
import { createClient } from "@/lib/supabase-server"

// Initialize OpenAI with server-side API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages, agentType, userId } = await request.json()

    // Verify user authentication
    const supabase = createClient()
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Validate required fields
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Get agent-specific system prompt
    const systemPrompt = getSystemPrompt(agentType)

    // Create chat completion
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.7,
      max_tokens: 1000,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      return NextResponse.json({ error: "No response generated" }, { status: 500 })
    }

    // Store conversation in database
    await supabase.from("chat_conversations").insert({
      user_id: user.id,
      chat_type: agentType || "general",
      messages: [...messages, { role: "assistant", content: response }],
      title: messages[0]?.content?.substring(0, 50) + "..." || "New Conversation",
    })

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

function getSystemPrompt(agentType: string): string {
  const prompts: Record<string, string> = {
    "ceo-neural-agent": "You are a CEO Neural Agent, providing strategic business guidance and leadership insights.",
    "hr-advisory":
      "You are an HR Advisory Agent, helping with human resources, employee relations, and workplace policies.",
    "sales-coach":
      "You are a Sales Coach Agent, providing sales training, techniques, and performance improvement strategies.",
    "technical-support": "You are a Technical Support Agent, helping users with technical issues and troubleshooting.",
    "customer-service":
      "You are a Customer Service Agent, providing excellent customer support and resolving inquiries.",
    default: "You are a helpful AI assistant, providing accurate and helpful responses to user queries.",
  }

  return prompts[agentType] || prompts.default
}
