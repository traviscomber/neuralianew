import { type NextRequest, NextResponse } from "next/server"

// Simple fallback responses without AI SDK dependency
const fallbackResponses = {
  cotizacion: `¡Perfecto! Para darte una cotización precisa, necesito conocer más sobre tu proyecto:

📋 **Información que necesito:**
• ¿Qué tipo de negocio tienes?
• ¿Cuántos usuarios/clientes manejas mensualmente?
• ¿Qué procesos quieres automatizar?

💰 **Rangos de inversión:**
• Chatbot básico: $2,000 - $5,000 USD
• Sistema multicanal: $5,000 - $15,000 USD
• Solución enterprise: $15,000+ USD

¿Te gustaría agendar una llamada para revisar tu caso específico?`,

  arquitectura: `🏗️ **Nuestra Arquitectura Técnica:**

**Frontend:**
• React/Next.js con TypeScript
• Tailwind CSS para UI responsiva
• Real-time WebSocket connections

**Backend:**
• Node.js/Python APIs
• PostgreSQL/MongoDB databases
• Redis para caching

**IA & ML:**
• OpenAI GPT-4 integration
• Custom neural networks
• Natural Language Processing

**Infraestructura:**
• AWS/Google Cloud deployment
• Docker containerization
• 99.9% uptime guarantee

¿Hay algún aspecto técnico específico que te interese conocer más?`,

  casos: `🎯 **Casos de Éxito Destacados:**

**EcosueloLab** - AgTech
• 40% reducción en tiempo de análisis
• Automatización de reportes técnicos
• ROI: 300% en 6 meses

**ParrotfyIA** - EdTech
• 85% mejora en engagement
• Personalización de aprendizaje
• 50,000+ usuarios activos

**Despega Tu Carrera** - HR Tech
• 60% más colocaciones exitosas
• Matching inteligente candidato-empresa
• 95% satisfacción de usuarios

¿Te interesa conocer más detalles de algún caso específico?`,

  procesos: `⚙️ **Nuestro Proceso de Implementación:**

**Fase 1: Análisis (1-2 semanas)**
• Auditoría de procesos actuales
• Identificación de oportunidades
• Definición de objetivos y KPIs

**Fase 2: Diseño (2-3 semanas)**
• Arquitectura de la solución
• Prototipo funcional
• Plan de integración

**Fase 3: Desarrollo (4-8 semanas)**
• Desarrollo del sistema
• Entrenamiento de modelos IA
• Testing y optimización

**Fase 4: Despliegue (1-2 semanas)**
• Implementación en producción
• Capacitación del equipo
• Monitoreo y ajustes

¿En qué fase te gustaría profundizar más?`,
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Simple keyword matching for fallback responses
    const lowerMessage = message.toLowerCase()

    let response = ""

    if (lowerMessage.includes("cotiz") || lowerMessage.includes("precio") || lowerMessage.includes("costo")) {
      response = fallbackResponses.cotizacion
    } else if (
      lowerMessage.includes("arquitectura") ||
      lowerMessage.includes("tecnic") ||
      lowerMessage.includes("tecnolog")
    ) {
      response = fallbackResponses.arquitectura
    } else if (
      lowerMessage.includes("caso") ||
      lowerMessage.includes("ejemplo") ||
      lowerMessage.includes("referencia")
    ) {
      response = fallbackResponses.casos
    } else if (
      lowerMessage.includes("proceso") ||
      lowerMessage.includes("metodolog") ||
      lowerMessage.includes("implementa")
    ) {
      response = fallbackResponses.procesos
    } else {
      // Default response
      response = `¡Hola! Soy el AI Expert de N3uralia 🤖

Puedo ayudarte con:
• **Cotizaciones** personalizadas para tu proyecto
• **Arquitectura técnica** de nuestras soluciones
• **Casos de éxito** de clientes reales
• **Procesos** de implementación

¿Sobre qué te gustaría saber más?`
    }

    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Hero agent error:", error)
    return NextResponse.json({ error: "Error processing request" }, { status: 500 })
  }
}
