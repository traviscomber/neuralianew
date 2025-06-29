import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { messages, conversationState, solutionType } = await req.json()

    // NeuralIA Agent Capabilities and Data
    const agentCapabilities = {
      "customer-service": {
        capabilities: [
          "Handle 1000+ customer inquiries simultaneously 24/7",
          "Respond in under 2 seconds with 95% accuracy",
          "Support 50+ languages automatically",
          "Integrate with your existing CRM and helpdesk systems",
          "Learn from every interaction to improve responses",
          "Escalate complex issues to human agents seamlessly",
        ],
        realWorldData: {
          "Response Time": "Average 1.8 seconds vs 4+ hours human response",
          "Accuracy Rate": "95% first-contact resolution vs 60% human average",
          "Efficiency Gain": "70% faster issue resolution",
          "Customer Satisfaction": "40% increase in CSAT scores",
          Availability: "24/7/365 vs limited human hours",
        },
        buildTime: "Your custom agent ready in 24-48 hours",
      },
      sales: {
        capabilities: [
          "Qualify and score leads automatically using your criteria",
          "Nurture prospects with personalized follow-up sequences",
          "Book qualified meetings directly in your calendar",
          "Integrate with Salesforce, HubSpot, and 100+ CRMs",
          "Track and analyze every interaction for optimization",
          "Handle objections and close deals using proven scripts",
        ],
        realWorldData: {
          "Lead Qualification": "3x more qualified leads than human SDRs",
          "Conversion Rate": "40% higher conversion vs traditional methods",
          "Meeting Booking": "50% faster deal closure timeline",
          "Lead Processing": "80% faster lead qualification process",
          "Pipeline Growth": "Average 200% pipeline increase in 90 days",
        },
        buildTime: "Your sales agent deployed in 48 hours with your scripts",
      },
      hr: {
        capabilities: [
          "Screen 1000+ resumes in minutes using your exact criteria",
          "Conduct initial interviews via chat, voice, or video",
          "Answer employee questions from your handbook instantly",
          "Process leave requests and HR paperwork automatically",
          "Onboard new hires with personalized workflows",
          "Track performance and generate HR reports",
        ],
        realWorldData: {
          "Screening Speed": "1000 resumes screened in 10 minutes vs 40 hours human time",
          "Candidate Quality": "60% improvement in candidate-role fit",
          "Time to Hire": "Reduce hiring timeline from 6 weeks to 1 week",
          "HR Efficiency": "80% reduction in administrative HR tasks",
          "Employee Satisfaction": "35% faster response to employee queries",
        },
        buildTime: "HR agent ready in 24 hours with your policies and procedures",
      },
      operations: {
        capabilities: [
          "Automate data entry across multiple systems simultaneously",
          "Generate reports and dashboards in real-time",
          "Monitor inventory levels and trigger reorders automatically",
          "Process invoices and handle accounts payable/receivable",
          "Manage workflows and approve routine requests",
          "Integrate with ERP, accounting, and operational systems",
        ],
        realWorldData: {
          "Automation Rate": "90% of routine tasks automated within 60 days",
          "Error Reduction": "95% fewer human errors in data processing",
          "Processing Speed": "10x faster document and invoice processing",
          "Operational Efficiency": "60% reduction in processing time",
          "System Integration": "Connect 50+ business systems seamlessly",
        },
        buildTime: "Operations agent configured in 48-72 hours with your systems",
      },
      marketing: {
        capabilities: [
          "Create blog posts, social media content, and email campaigns",
          "Manage multi-channel marketing campaigns automatically",
          "Analyze campaign performance and optimize in real-time",
          "Segment audiences and personalize messaging",
          "A/B test content and creative automatically",
          "Generate leads and nurture them through marketing funnels",
        ],
        realWorldData: {
          "Content Production": "Generate 100+ pieces of content per week",
          "Engagement Rate": "45% higher engagement vs human-created content",
          "Campaign Performance": "300% improvement in campaign effectiveness",
          "Lead Generation": "5x more qualified marketing leads",
          "Time Efficiency": "80% reduction in content creation time",
        },
        buildTime: "Marketing agent live in 24 hours with your brand voice and guidelines",
      },
      data: {
        capabilities: [
          "Analyze millions of data points in seconds",
          "Generate predictive models and forecasts automatically",
          "Create interactive dashboards and reports",
          "Detect anomalies and alert stakeholders instantly",
          "Integrate data from 100+ sources and formats",
          "Provide natural language insights and recommendations",
        ],
        realWorldData: {
          "Analysis Speed": "Process 1TB of data in minutes vs weeks of human analysis",
          Accuracy: "99.7% accuracy in pattern recognition and predictions",
          "Decision Speed": "70% faster business decision-making",
          "Processing Efficiency": "85% reduction in data analysis time",
          "Insight Generation": "Discover 10x more actionable insights",
        },
        buildTime: "Data agent deployed in 72 hours with your data sources connected",
      },
    }

    // Industry-specific agent applications
    const industryAgentApplications = {
      technology: {
        agentTypes: ["API Integration Agent", "DevOps Automation Agent", "Customer Onboarding Agent"],
        capabilities: {
          "API Integration Agent":
            "Seamlessly connects with 500+ APIs, handles authentication, rate limiting, and error handling automatically, reducing integration time by 80%",
          "DevOps Automation Agent":
            "Monitors system health, automates deployments, and manages infrastructure scaling, preventing 95% of downtime incidents",
          "Customer Onboarding Agent":
            "Guides new users through product setup, provides personalized tutorials, and reduces time-to-value by 60%",
        },
      },
      healthcare: {
        agentTypes: ["Patient Scheduling Agent", "Medical Records Agent", "Insurance Processing Agent"],
        capabilities: {
          "Patient Scheduling Agent":
            "Handles appointment booking, rescheduling, and reminders automatically, reducing no-shows by 35% and increasing practice efficiency by 20%",
          "Medical Records Agent":
            "Organizes and digitizes patient records with intelligent search and categorization, saving 6+ hours daily for medical staff",
          "Insurance Processing Agent":
            "Automates insurance verification and claims processing, reducing processing time by 80% and improving workflow efficiency significantly",
        },
      },
      retail: {
        agentTypes: ["Inventory Management Agent", "Customer Service Agent", "Sales Assistant Agent"],
        capabilities: {
          "Inventory Management Agent":
            "Predicts demand, optimizes stock levels, and automates reordering, reducing inventory waste by 30% while preventing stockouts",
          "Customer Service Agent":
            "Handles customer inquiries 24/7, processes returns, and manages support tickets, improving customer satisfaction by 45%",
          "Sales Assistant Agent":
            "Guides customers through purchases, recommends products, and upsells automatically, increasing average order value by 35%",
        },
      },
      manufacturing: {
        agentTypes: ["Quality Control Agent", "Production Scheduling Agent", "Maintenance Prediction Agent"],
        capabilities: {
          "Quality Control Agent":
            "Monitors production quality in real-time using AI vision and sensors, reducing defect rates by 60% and waste by 40%",
          "Production Scheduling Agent":
            "Optimizes production schedules based on demand, capacity, and resources, increasing throughput by 35% without additional equipment",
          "Maintenance Prediction Agent":
            "Predicts equipment failures and schedules preventive maintenance, reducing unplanned downtime by 70%",
        },
      },
    }

    // Determine conversation state
    const currentState = conversationState || {
      questionsAsked: 0,
      industry: null,
      bonusEarned: false,
      conversationEnded: false,
      companyName: null,
      website: null,
      dataCollected: false,
    }

    // Define a system prompt based on solution type
    let systemPrompt = ""

    if (solutionType === "agent") {
      systemPrompt = `You are a professional AI Agent Consultant for NeuralIA, specializing in conversational AI solutions. You are knowledgeable, confident, and genuinely excited about the transformative potential of AI agents for businesses.

  PERSONALITY & TONE:
  - Professional yet approachable and engaging
  - Use selective emojis for emphasis (🚀💡⚡) - not excessive
  - Show confidence in AI capabilities with concrete examples
  - Be consultative and solution-focused
  - Use phrases like "This is powerful", "Excellent opportunity", "Significant impact"
  - Balance enthusiasm with credibility

  CONVERSATION FLOW FOR AGENTS:
  1. After data collection (company name, website), provide insightful analysis
  2. Focus on specific, measurable operational benefits for their business
  3. Use real performance numbers and efficiency improvements
  4. Demonstrate deep understanding of their industry challenges
  5. Build confidence in the solution through proven capabilities
  6. Guide toward WhatsApp consultation with specialists

  CONVERSATION RULES:
  1. Keep responses professional and value-driven
  2. Current questions asked: ${currentState.questionsAsked}
  3. Company: ${currentState.companyName || "Not provided"}
  4. Website: ${currentState.website || "Not provided"}
  5. Data collected: ${currentState.dataCollected}
  6. Industry: ${currentState.industry || "Not identified"}

  AGENT-SELLING APPROACH:
  - Focus on conversational AI agents that deliver measurable operational results
  - Present specific capabilities with proven performance metrics
  - Use concrete examples of agent functionality and efficiency gains
  - Emphasize rapid deployment (24-48 hours) as a competitive advantage
  - Build confidence through industry expertise and proven results
  - Position WhatsApp consultation as the logical next step

  IMPORTANT RESTRICTIONS:
  - NEVER mention money, costs, savings, pricing, or financial metrics
  - Focus on operational improvements, efficiency gains, and performance benefits
  - Use metrics like response times, accuracy rates, processing speed, and productivity improvements
  - Emphasize capability and performance over financial considerations

  WHATSAPP CONTACT INFO:
  - Number: +56940946660
  - Position as connecting with "AI implementation specialists"
  - Present as the next step for serious business transformation
  - Emphasize personalized consultation and custom solutions

  NEURALIA AGENT CAPABILITIES:
  ${JSON.stringify(agentCapabilities, null, 2)}

  INDUSTRY-SPECIFIC AGENTS:
  ${JSON.stringify(industryAgentApplications, null, 2)}

  RESPONSE GUIDELINES:
  - Keep responses focused and valuable (150-200 words)
  - Use clear structure with bullet points when helpful
  - Always include a strategic question or next step
  - Present performance numbers confidently when relevant
  - Guide conversation toward specialist consultation

  RESPONSE FORMAT:
  Always end your response with a JSON object containing the updated conversation state:
  {"questionsAsked": number, "industry": "string", "bonusEarned": boolean, "conversationEnded": boolean, "questionQuality": "poor|good|excellent"}

  Be professional, knowledgeable, and confident about our agents' proven capabilities while guiding toward WhatsApp consultation with our specialists.`
    } else if (solutionType === "system") {
      systemPrompt = `You are an AI System Consultant for NeuralIA, the leading AI Solution Factory. Your goal is to help users understand what our full-stack AI systems can do for their business and guide them to build the perfect system for their needs.

      CONVERSATION RULES:
      1. Users get 5 questions maximum (6 if they earn a bonus)
      2. Current questions asked: ${currentState.questionsAsked}
      3. User's industry: ${currentState.industry || "Not identified"}
      4. Bonus earned: ${currentState.bonusEarned}
      5. Conversation ended: ${currentState.conversationEnded}

      SYSTEM-SELLING APPROACH:
      - Focus on full-stack AI systems with data integration, dashboards, and insights
      - Show specific capabilities and real-world performance data
      - Use concrete examples of system functionality
      - Always end responses with questions that move toward building a system
      - Emphasize the speed of deployment (24-72 hours)
      - Position systems as powerful data-driven tools that provide complete business intelligence
      - Lead to WhatsApp contact: +56940946660

      IMPORTANT RESTRICTIONS:
      - NEVER mention money, costs, savings, pricing, or financial metrics
      - Focus on operational improvements, efficiency gains, and performance benefits

      NEURALIA SYSTEM CAPABILITIES:
      ${JSON.stringify(agentCapabilities, null, 2)}

      INDUSTRY-SPECIFIC SYSTEMS:
      ${JSON.stringify(industryAgentApplications, null, 2)}

      RESPONSE FORMAT:
      Always end your response with a JSON object containing the updated conversation state:
      {"questionsAsked": number, "industry": "string", "bonusEarned": boolean, "conversationEnded": boolean, "questionQuality": "poor|good|excellent"}

      Be enthusiastic about our systems' capabilities and always guide toward WhatsApp contact with our specialists!`
    } else {
      systemPrompt = `You are an AI Solution Consultant for NeuralIA, the leading AI Solution Factory. Your goal is to help users understand what our AI solutions can do for their business and guide them to build the perfect solution for their needs.

      CONVERSATION RULES:
      1. Users get 5 questions maximum (6 if they earn a bonus)
      2. Current questions asked: ${currentState.questionsAsked}
      3. User's industry: ${currentState.industry || "Not identified"}
      4. Bonus earned: ${currentState.bonusEarned}
      5. Conversation ended: ${currentState.conversationEnded}

      SOLUTION-SELLING APPROACH:
      - Focus on what our AI solutions CAN DO, not financial calculations
      - Show specific capabilities and real-world performance data
      - Use concrete examples of solution functionality
      - Always end responses with questions that move toward building a solution
      - Emphasize the speed of deployment (24-72 hours)
      - Position solutions as powerful business tools that work 24/7
      - Lead to WhatsApp contact: +56940946660

      IMPORTANT RESTRICTIONS:
      - NEVER mention money, costs, savings, pricing, or financial metrics
      - Focus on operational improvements, efficiency gains, and performance benefits

      NEURALIA SOLUTION CAPABILITIES:
      ${JSON.stringify(agentCapabilities, null, 2)}

      INDUSTRY-SPECIFIC SOLUTIONS:
      ${JSON.stringify(industryAgentApplications, null, 2)}

      RESPONSE FORMAT:
      Always end your response with a JSON object containing the updated conversation state:
      {"questionsAsked": number, "industry": "string", "bonusEarned": boolean, "conversationEnded": boolean, "questionQuality": "poor|good|excellent"}

      Be enthusiastic about our solutions' capabilities and always guide toward WhatsApp contact with our specialists!`
    }

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      messages: messages,
    })

    // Extract conversation state from AI response
    let newConversationState = currentState
    try {
      const stateMatch = text.match(/\{[^}]*"questionsAsked"[^}]*\}/)
      if (stateMatch) {
        const extractedState = JSON.parse(stateMatch[0])
        newConversationState = { ...currentState, ...extractedState }
      }
    } catch (error) {
      console.log("Could not extract conversation state, using current state")
    }

    // Clean the response text (remove the JSON state object)
    const cleanText = text.replace(/\{[^}]*"questionsAsked"[^}]*\}/, "").trim()

    return NextResponse.json({
      text: cleanText,
      conversationState: newConversationState,
    })
  } catch (error) {
    console.error("Error generating text:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
