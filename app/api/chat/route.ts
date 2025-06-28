import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    // NeuralIA specific data for AI to reference
    const agentResponsesData = {
      "customer-service": {
        benefits:
          "A customer service AI agent can handle 80% of inquiries automatically, reduce response time from hours to seconds, and work 24/7 in multiple languages.",
        examples:
          "Handle FAQs, process returns, schedule appointments, escalate complex issues to humans, and maintain conversation history.",
        roi: "Most clients see 70% reduction in response time and 50% cost savings within the first month.",
      },
      sales: {
        benefits:
          "Sales AI agents can qualify leads automatically, nurture prospects with personalized messaging, and increase conversion rates by 40%.",
        examples:
          "Lead scoring, follow-up sequences, appointment booking, product recommendations, and CRM integration.",
        roi: "Typical results include 3x more qualified leads and 50% faster deal closure.",
      },
      hr: {
        benefits:
          "HR AI agents streamline recruitment, answer employee questions, and handle onboarding processes automatically.",
        examples:
          "Resume screening, interview scheduling, employee handbook queries, leave requests, and performance tracking.",
        roi: "60% faster screening process and 40% improvement in candidate quality.",
      },
      operations: {
        benefits:
          "Operations AI agents automate repetitive tasks, manage workflows, and integrate with existing systems seamlessly.",
        examples: "Data entry, report generation, inventory management, quality control, and process optimization.",
        roi: "Average 50% reduction in manual work and 30% improvement in accuracy.",
      },
      marketing: {
        benefits:
          "Marketing AI agents create content, manage campaigns, and analyze performance to optimize your marketing ROI.",
        examples: "Content creation, social media posting, email campaigns, A/B testing, and audience segmentation.",
        roi: "Typical results show 40% increase in engagement and 25% improvement in conversion rates.",
      },
      data: {
        benefits:
          "Data AI agents analyze complex datasets, generate insights, and create automated reports for better decision-making.",
        examples: "Trend analysis, predictive modeling, automated dashboards, anomaly detection, and custom reporting.",
        roi: "Companies typically see 60% faster decision-making and 35% improvement in forecast accuracy.",
      },
    }

    // Define a system prompt to guide the AI's persona and provide data
    const systemPrompt = `You are an AI consultant for NeuralIA, an AI Agent Factory. Your goal is to help users understand what kind of AI agent would be perfect for their business.
    You have access to the following data about NeuralIA's AI agents:
    ${JSON.stringify(agentResponsesData, null, 2)}

    When a user asks about a specific category (e.g., Customer Service, Sales), use the provided data to explain the benefits, examples, and ROI.
    Be helpful, informative, and guide the user through the process of identifying their needs and how NeuralIA's agents can solve them.
    When asked about pricing, mention that agents start at $299/month with custom pricing based on needs, and most clients see ROI within 30 days.
    When asked about demos or consultations, provide the contact info: +56940946660 or info@neuralia.ai, and offer to connect them with the team.
    Keep responses concise and engaging. If a user asks a general question, try to relate it back to how NeuralIA's agents can help.`

    const { text } = await generateText({
      model: openai("gpt-4o"), // Using OpenAI's GPT-4o model [^1]
      system: systemPrompt,
      messages: messages, // Pass the entire message history for context
    })

    return NextResponse.json({ text })
  } catch (error) {
    console.error("Error generating text:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
