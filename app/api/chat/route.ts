import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { userProfile, type UserProfile } from "./userProfile"

// Chilean market intelligence data
const CHILEAN_MARKET_DATA = {
  economy: {
    gdp: "$317B USD",
    population: "19.1M",
    currency: "CLP (Chilean Peso)",
    inflation: "3% target (Banco Central)",
    mainIndustries: ["Mining (Copper 28% world production)", "Agriculture", "Forestry", "Fishing", "Manufacturing"],
  },
  business: {
    culture: "Formal hierarchy, relationship-based (pituto), respect for seniority",
    workingHours: "9:00-18:00 (with once break 16:00-17:00)",
    seasonality: "Summer vacation Dec-Feb slows business, Fiestas Patrias September",
    keyPlayers: ["Falabella", "LATAM Airlines", "Codelco", "BancoEstado", "Santander Chile"],
  },
  regulations: {
    dataProtection: "Ley 19.628 - Personal Data Protection",
    labor: "Código del Trabajo - Strong worker protections",
    tax: "SII compliance - Monthly VAT reporting required",
    financial: "CMF regulations - Financial services oversight",
  },
  digital: {
    penetration: "Mobile 95%, Internet 87%",
    socialMedia: "Facebook 13.2M, WhatsApp 16M, Instagram 8.5M",
    ecommerce: "Growing 25% annually, dominated by MercadoLibre",
    payments: "Transbank (dominant), Khipu, Flow, WebPay Plus",
  },
}

// Executive personas with Chilean specialization
const EXECUTIVE_PERSONAS = {
  ceo: {
    chilean: `Eres el CEO Neural Orchestrator especializado en el mercado chileno. Tienes profundo conocimiento de:
    - Economía chilena: PIB $317B, volatilidad del peso, industria minera
    - Cultura empresarial: jerarquías formales, importancia del "pituto", respeto por antigüedad
    - Regulaciones: SII, CMF, Código del Trabajo, Ley 19.628
    - Mercado: 19.1M habitantes, 40% en Santiago, Pacific Alliance
    
    Proporciona respuestas detalladas (300-400+ palabras) en español con:
    - Análisis específico del contexto chileno
    - Datos económicos y regulatorios precisos
    - Estrategias adaptadas a la cultura empresarial local
    - Cronogramas de implementación realistas
    - Referencias a empresas chilenas exitosas`,

    global: `You are the CEO Neural Orchestrator with advanced strategic reasoning capabilities. You provide comprehensive business strategy using:
    - Fortune 500 best practices and case studies
    - Advanced frameworks (Porter's Five Forces, Blue Ocean Strategy)
    - Global market intelligence and competitive analysis
    - Cross-cultural business development strategies
    - International regulatory compliance guidance
    
    Deliver detailed analysis with actionable recommendations and implementation timelines.`,
  },

  cmo: {
    chilean: `Eres el CMO Growth Engine especializado en marketing chileno. Dominas:
    - Panorama digital: Facebook 13.2M, WhatsApp 16M, Instagram 8.5M usuarios
    - Comportamiento consumidor: preferencias locales, estacionalidad, poder adquisitivo
    - Canales efectivos: TV abierta, radio, redes sociales, marketing directo
    - Pagos digitales: Transbank, Khipu, Flow, WebPay Plus
    - Regulaciones: SERNAC, protección consumidor, publicidad responsable
    
    Responde en español con estrategias detalladas incluyendo:
    - Presupuestos en pesos chilenos
    - Cronogramas adaptados a ciclos chilenos
    - Tácticas culturalmente relevantes
    - Métricas y KPIs específicos del mercado local`,

    global: `You are the CMO Growth Engine with advanced marketing intelligence. You excel at:
    - Global digital marketing strategies and channel optimization
    - Consumer behavior analysis across different markets
    - Brand positioning and competitive differentiation
    - Performance marketing and attribution modeling
    - Cross-cultural campaign development
    
    Provide comprehensive marketing strategies with detailed implementation plans and ROI projections.`,
  },

  cto: {
    chilean: `Eres el CTO Innovation Architect especializado en tecnología para Chile. Experto en:
    - Infraestructura: AWS Santiago, latencia <20ms, data residency
    - Integraciones locales: APIs bancarias, Transbank, SII, Clave Única
    - Compliance: Ley 19.628, normativas CMF, certificaciones ISO 27001
    - Ecosistema tech: Start-Up Chile, hubs de innovación, talento local
    - Costos: infraestructura en CLP, equipos locales vs. remotos
    
    Responde en español con soluciones técnicas detalladas:
    - Arquitecturas optimizadas para Chile
    - Integraciones con sistemas locales
    - Estrategias de compliance y seguridad
    - Estimaciones de costos en pesos chilenos
    - Cronogramas de desarrollo realistas`,

    global: `You are the CTO Innovation Architect with cutting-edge technical expertise. You specialize in:
    - Scalable cloud architectures and infrastructure optimization
    - Advanced security frameworks and compliance strategies
    - AI/ML integration and automation strategies
    - Global development team management
    - Technology stack optimization and cost management
    
    Deliver comprehensive technical strategies with detailed implementation roadmaps and cost analysis.`,
  },
}

export async function POST(request: NextRequest) {
  try {
    const { message, executiveType = "ceo", userInfo } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Create user profile
    const profile: UserProfile = userInfo
      ? userProfile.create(userInfo.name, userInfo.country, userInfo.website)
      : userProfile.default

    const isChilean = userProfile.isChilean(profile)

    // Select appropriate persona based on user location
    const persona = isChilean
      ? EXECUTIVE_PERSONAS[executiveType as keyof typeof EXECUTIVE_PERSONAS].chilean
      : EXECUTIVE_PERSONAS[executiveType as keyof typeof EXECUTIVE_PERSONAS].global

    // Build context for Chilean users
    let contextualInfo = ""
    if (isChilean) {
      contextualInfo = `
CONTEXTO DEL MERCADO CHILENO:
- Economía: ${CHILEAN_MARKET_DATA.economy.gdp} PIB, ${CHILEAN_MARKET_DATA.economy.population} habitantes
- Industrias principales: ${CHILEAN_MARKET_DATA.economy.mainIndustries.join(", ")}
- Cultura empresarial: ${CHILEAN_MARKET_DATA.business.culture}
- Regulaciones clave: ${Object.values(CHILEAN_MARKET_DATA.regulations).join(", ")}
- Penetración digital: ${CHILEAN_MARKET_DATA.digital.penetration}
- Redes sociales: ${CHILEAN_MARKET_DATA.digital.socialMedia}

Usuario: ${profile.name} desde ${profile.country}
${profile.website ? `Sitio web: ${profile.website}` : ""}
`
    } else {
      contextualInfo = `
GLOBAL BUSINESS CONTEXT:
- User: ${profile.name} from ${profile.country}
- Focus: Advanced strategic analysis using global best practices
- Approach: Comprehensive reasoning with international perspective
${profile.website ? `Website: ${profile.website}` : ""}
`
    }

    // Generate response using OpenAI
    const result = await generateText({
      model: openai("gpt-4o"),
      system: `${persona}

${contextualInfo}

${
  isChilean
    ? "INSTRUCCIONES: Responde SIEMPRE en español con análisis detallado (300-400+ palabras mínimo) específico para el mercado chileno. Incluye datos concretos, cronogramas, presupuestos en CLP, y referencias culturales relevantes."
    : "INSTRUCTIONS: Provide comprehensive strategic analysis with detailed implementation plans, global best practices, and actionable recommendations. Use advanced reasoning and international business intelligence."
}`,
      prompt: message,
      maxTokens: isChilean ? 800 : 600, // More tokens for detailed Chilean responses
    })

    // Generate contextual quick replies
    const quickReplies = await generateQuickReplies(executiveType, isChilean, message)

    return NextResponse.json({
      response: result.text,
      quickReplies,
      executiveType,
      userProfile: profile,
      marketContext: isChilean ? "Chilean" : "Global",
    })
  } catch (error) {
    console.error("Chat API Error:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}

async function generateQuickReplies(executiveType: string, isChilean: boolean, lastMessage: string) {
  const chileanQuickReplies = {
    ceo: [
      "¿Cómo manejamos la volatilidad del peso chileno?",
      "¿Cuál es nuestra estrategia para el Pacific Alliance?",
      "¿Cómo navegamos las regulaciones del SII?",
      "¿Deberíamos expandirnos a regiones o quedarnos en Santiago?",
      "Necesito hablar con soporte humano",
    ],
    cmo: [
      "¿Cuál es nuestra estrategia de WhatsApp Business?",
      "¿Cómo aprovechamos las Fiestas Patrias para marketing?",
      "¿Qué presupuesto necesitamos para redes sociales?",
      "¿Cómo competimos con MercadoLibre?",
      "Necesito hablar con soporte humano",
    ],
    cto: [
      "¿Cómo aprovechamos la región AWS Santiago?",
      "¿Qué integraciones bancarias necesitamos?",
      "¿Cómo cumplimos con la Ley de Protección de Datos?",
      "¿Cuál es el costo de infraestructura en Chile?",
      "Necesito hablar con soporte humano",
    ],
  }

  const globalQuickReplies = {
    ceo: [
      "What's our international expansion strategy?",
      "How do we manage currency risk globally?",
      "What are the key regulatory considerations?",
      "How do we scale operations internationally?",
      "I need to speak with human support",
    ],
    cmo: [
      "What's our global digital marketing strategy?",
      "How do we localize campaigns for different markets?",
      "What's our customer acquisition cost optimization?",
      "How do we compete in saturated markets?",
      "I need to speak with human support",
    ],
    cto: [
      "What's our global cloud architecture strategy?",
      "How do we ensure data compliance across regions?",
      "What's our technology stack optimization plan?",
      "How do we manage distributed development teams?",
      "I need to speak with human support",
    ],
  }

  const replies = isChilean
    ? chileanQuickReplies[executiveType as keyof typeof chileanQuickReplies]
    : globalQuickReplies[executiveType as keyof typeof globalQuickReplies]

  // Return 3 contextual replies + human support option
  return replies.slice(0, 4)
}
