import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: NextRequest) {
  try {
    const { messages, chatType = "general", agentId, systemId } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required" }, { status: 400 })
    }

    // Verify OpenAI API key is available (server-side only)
    if (!process.env.OPENAI_API_KEY) {
      console.error("OpenAI API key not configured")
      return NextResponse.json(
        {
          error: "AI service is currently unavailable. Please try again later.",
        },
        { status: 500 },
      )
    }

    // Configure system prompt based on chat type and agent
    let systemPrompt = "You are a helpful AI assistant for NeuralIA, an AI solutions company."

    if (agentId) {
      switch (agentId) {
        case "sales-coach":
          systemPrompt = `You are the Sales Coach Agent from NeuralIA - a 24/7 AI sales expert with the knowledge and experience of a seasoned sales director. You specialize in:

- Deal strategy and pipeline management
- Objection handling and closing techniques  
- Sales process optimization
- Team coaching and performance improvement
- CRM best practices and sales automation

You have a proven track record of helping teams achieve 40% higher close rates and 25% shorter sales cycles. Respond as an experienced sales professional who understands the challenges of modern sales teams. Be direct, actionable, and results-focused.`
          break
        case "hr-advisory":
          systemPrompt = `You are the HR Advisory Agent from NeuralIA - a 24/7 AI HR expert with the knowledge and experience of a seasoned HR director. You specialize in:

- Employee relations and conflict resolution
- Policy guidance and compliance issues
- Performance management strategies
- Recruitment and onboarding best practices
- Workplace culture and engagement

You have a proven track record of reducing HR escalations by 60% and improving employee satisfaction scores by 45%. Respond as an experienced HR professional who understands the complexities of modern workplace challenges.`
          break
        case "technical-support":
          systemPrompt = `You are the Technical Support Agent from NeuralIA - a 24/7 AI technical expert with the knowledge and experience of a senior technical support specialist. You specialize in:

- Instant troubleshooting and problem resolution
- Technical documentation and knowledge management
- System integration and setup guidance
- Best practices and optimization recommendations
- Escalation protocols and advanced technical support

You have a proven track record of achieving 95% first-call resolution and reducing resolution times by 70%.`
          break
        case "customer-service":
          systemPrompt = `You are a Customer Service Agent for NeuralIA, an AI solutions company. You help customers find the right AI agent for their business needs. You're friendly, helpful, and focused on understanding their challenges to recommend the perfect solution. Keep responses concise and actionable.`
          break
      }
    } else {
      switch (chatType) {
        case "agent":
          systemPrompt = `You are a NeuralIA AI Agent specialist. You help businesses understand how conversational AI experts can transform their operations. Focus on creating 24/7 expert agents for sales, customer success, HR, and technical support. 

Key benefits to highlight:
- 24/7 availability with expert-level knowledge
- 300% faster response times
- 40% higher conversion rates
- Significant cost savings vs human experts
- Neural Fleet templates ready in 24-48 hours

Be consultative and focus on understanding their specific needs. Keep responses concise and actionable.`
          break
        case "system":
          systemPrompt = `You are a NeuralIA AI Systems specialist. You help businesses automate complex workflows and streamline operations through intelligent AI systems.

Key capabilities to highlight:
- Complete workflow automation
- Intelligent data processing and analysis
- Multi-system integration capabilities
- Real-time decision making
- 80% reduction in processing time
- 95% elimination of manual errors
- 300-500% ROI within 6 months

Focus on understanding their manual processes and showing how AI systems can transform their operations.`
          break
        case "general":
        default:
          systemPrompt = `You are a NeuralIA AI Solutions consultant. You help businesses find the perfect AI solution for their needs, whether that's AI Agents, AI Systems, or custom solutions.

Solutions to highlight:
- AI Agents: 24/7 conversational experts (sales, support, HR)
- AI Systems: Complete workflow automation
- Neural Fleet: Ready templates in 24-48 hours
- Custom Solutions: Tailored to specific needs

Success metrics to mention:
- 300% faster customer response
- 40% higher sales close rates  
- 80% reduction in processing time
- Significant ROI and cost savings

Be consultative and help them identify the best solution type for their specific challenges.`
          break
      }
    }

    // Add system message if not present
    const messagesWithSystem = [
      { role: "system", content: systemPrompt },
      ...messages.filter((m: any) => m.role !== "system"),
    ]

    console.log(`Processing ${chatType} chat request with ${messages.length} messages`)

    // Use generateText instead of streamText for simpler handling
    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      messages: messagesWithSystem,
      temperature: 0.7,
      maxTokens: 1000,
    })

    console.log("OpenAI API call successful")
    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API Error:", error)

    // Provide helpful error messages based on error type
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          {
            error: "Authentication failed. Please check your API configuration.",
          },
          { status: 401 },
        )
      }
      if (error.message.includes("quota") || error.message.includes("billing")) {
        return NextResponse.json(
          {
            error: "Service temporarily unavailable due to quota limits.",
          },
          { status: 503 },
        )
      }
      if (error.message.includes("rate limit")) {
        return NextResponse.json(
          {
            error: "Too many requests. Please wait a moment and try again.",
          },
          { status: 429 },
        )
      }
    }

    return NextResponse.json(
      {
        error: "Failed to get response from AI service. Please try again.",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    status: "Chat API is running",
    timestamp: new Date().toISOString(),
    configured: !!process.env.OPENAI_API_KEY,
  })
}
