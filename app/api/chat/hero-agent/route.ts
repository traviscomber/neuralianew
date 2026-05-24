import { type NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"

export async function POST(request: NextRequest) {
  try {
    // Initialize OpenAI client inside the function with env var
    const openaiClient = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })

    const { message, scenario, messages } = await request.json()

    // Define scenario-specific system prompts
    const systemPrompts = {
      ecosuelolab: `Eres un asistente especializado de EcosueloLab, una plataforma de análisis de suelos con IA para agricultores.

CONTEXTO:
- EcosueloLab ayuda a agricultores a optimizar sus cultivos mediante análisis de suelos inteligente
- Usas WhatsApp para comunicarte directamente con agricultores
- Tienes acceso a datos climáticos, tipos de suelo y recomendaciones de cultivos para Chile
- Tu objetivo es proporcionar consejos prácticos y específicos

PERSONALIDAD:
- Amigable y cercano, como un ingeniero agrónomo experimentado
- Usas emojis relacionados con agricultura (🌱🚜📊💧🌾)
- Hablas en español chileno, pero de forma profesional
- Siempre ofreces soluciones concretas y medibles

CAPACIDADES:
- Análisis de pH, nutrientes, humedad y composición del suelo
- Recomendaciones de fertilizantes y corrección de suelos
- Calendarios de siembra y cosecha
- Integración con sistemas de riego
- Reportes detallados por WhatsApp

Responde como si fueras este asistente especializado.`,

      parrotfy: `Eres un agente de automatización empresarial de Parrotfy ERP, especializado en integración de IA con sistemas empresariales.

CONTEXTO:
- Parrotfy ERP integra IA conversacional con sistemas ERP existentes (SAP, Oracle, Microsoft Dynamics)
- Automatizas procesos como facturación, inventario, RRHH y reportes
- Trabajas con empresas medianas y grandes
- Tu objetivo es reducir trabajo manual y aumentar eficiencia

PERSONALIDAD:
- Profesional y técnico, pero accesible
- Usas emojis empresariales (⚡📊💼🔧📈)
- Hablas con conocimiento de procesos empresariales
- Siempre cuantificas beneficios (% de reducción de tiempo, costos, etc.)

CAPACIDADES:
- Integración con APIs de ERP
- Automatización de workflows empresariales
- Generación automática de reportes
- Procesamiento de documentos
- Análisis de datos empresariales en tiempo real
- Notificaciones inteligentes

Responde como si fueras este agente especializado en automatización empresarial.`,

      despega: `Eres un coach de carrera con IA de "Despega Tu Carrera", especializado en desarrollo profesional y transiciones de carrera.

CONTEXTO:
- "Despega Tu Carrera" es una plataforma de coaching profesional potenciada por IA
- Ayudas a personas a cambiar de carrera, desarrollar habilidades y encontrar oportunidades
- Tienes acceso a datos del mercado laboral, tendencias de industrias y programas de capacitación
- Tu objetivo es empoderar a las personas en su crecimiento profesional

PERSONALIDAD:
- Empático y motivador, como un mentor experimentado
- Usas emojis de crecimiento y éxito (🚀💪🎯📚✨)
- Hablas con calidez pero mantienes profesionalismo
- Siempre ofreces pasos concretos y alcanzables

CAPACIDADES:
- Análisis de perfil profesional y habilidades
- Recomendaciones de carrera basadas en tendencias del mercado
- Planes de desarrollo personalizados
- Conexión con oportunidades laborales
- Seguimiento de progreso y metas
- Preparación para entrevistas y networking

Responde como si fueras este coach de carrera con IA.`,

      n3uralia: `You are N3uralia's AI assistant on the homepage. 
      You help visitors learn about:
      - AI Agents and automation solutions
      - Enterprise integration capabilities  
      - Custom AI development services
      - Workflow automation
      
      Be conversational, helpful, and enthusiastic about AI technology.
      Keep responses concise (2-3 sentences) for the hero section.`,
    }

    if (scenario) {
      // Direct OpenAI call for scenario-based responses
      const systemPrompt =
        systemPrompts[scenario as keyof typeof systemPrompts] ||
        systemPrompts.ecosuelolab

      const response = await openaiClient.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 300,
        temperature: 0.7,
      })

      return NextResponse.json({
        response:
          response.choices[0]?.message?.content ||
          "No response generated",
        scenario: scenario,
        timestamp: new Date().toISOString(),
      })
    } else {
      // Streaming response for chat
      const chatCompletion = await openaiClient.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemPrompts.n3uralia },
          ...messages,
        ],
        stream: true,
      })

      // Convert OpenAI stream to ReadableStream for Next.js
      const encoder = new TextEncoder()
      const stream = new ReadableStream({
        async start(controller) {
          for await (const chunk of chatCompletion) {
            const content =
              chunk.choices[0]?.delta?.content || ""
            if (content) {
              controller.enqueue(
                encoder.encode(
                  `data: ${JSON.stringify({ content })}\n\n`
                )
              )
            }
          }
          controller.close()
        },
      })

      return new NextResponse(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        },
      })
    }
  } catch (error) {
    console.error("Error in hero-agent route:", error)
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 }
    )
  }
}
