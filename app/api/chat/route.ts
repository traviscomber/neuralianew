import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(request: NextRequest) {
  try {
    const { message, solutionType, conversationHistory } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key not configured" }, { status: 500 })
    }

    // Create system prompt based on solution type
    let systemPrompt = ""

    switch (solutionType) {
      case "agent":
        systemPrompt = `You are an AI Agent specialist at NeuralIA. You help businesses understand and implement conversational AI agents for customer service, sales, HR, and operations. 

Key points to cover:
- AI agents can handle 24/7 customer support with 95% satisfaction rates
- Lead qualification and sales automation capabilities
- Multi-language support and sentiment analysis
- Integration with existing business systems
- Deployment in 24-48 hours
- Cost reduction of up to 60% compared to human agents

Be enthusiastic, knowledgeable, and focus on practical business benefits. Ask qualifying questions about their industry, current challenges, and team size.`
        break

      case "system":
        systemPrompt = `You are an AI Systems consultant at NeuralIA. You specialize in complete AI-powered business intelligence and automation systems.

Key points to cover:
- Data integration from multiple sources with real-time sync
- Predictive analytics and automated reporting
- Custom dashboards and business intelligence
- Process automation and workflow optimization
- 40% efficiency increases and 85% accuracy rates
- Deployment in 24-72 hours
- Enterprise-grade security and scalability

Focus on data challenges, current systems they use, and how AI can transform their operations. Ask about their data sources, reporting needs, and automation goals.`
        break

      default:
        systemPrompt = `You are an AI solutions expert at NeuralIA. You help businesses discover the perfect AI solution for their needs, whether it's agents, systems, or custom development.

Key points to cover:
- Custom AI solutions tailored to specific business needs
- Industry-specific implementations
- Scalable architecture that grows with their business
- 24/7 monitoring and support
- Enterprise-grade security and compliance
- ROI typically seen within weeks of deployment

Be consultative and help them identify whether they need agents, systems, or custom solutions. Ask about their biggest business challenges, current tech stack, and growth goals.`
        break
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages: [
        ...conversationHistory.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
        {
          role: "user",
          content: message,
        },
      ],
      maxTokens: 500,
      temperature: 0.7,
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to generate response. Please try again." }, { status: 500 })
  }
}
