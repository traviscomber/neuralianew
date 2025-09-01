import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return getFallbackResponse(message)
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `Eres el AI Expert de N3uralia, una empresa líder en desarrollo de IA conversacional. 

INFORMACIÓN DE N3URALIA:
- Empresa: N3uralia - Líderes en IA Conversacional
- Servicios: Full Stack AI Systems, AI Agents & Automations, Multichannel Integration
- Tecnologías: OpenAI GPT-4, React/Next.js, Node.js, Python, PostgreSQL, AWS
- Precios: Consultoría GRATIS, Chatbots desde $2,000 USD, Sistemas full stack desde $15,000 USD
- ROI: 250% promedio en el primer año
- Soporte: 24/7 en 3 continentes (Santiago, Singapur, Moscú)
- Casos de éxito: EcosueloLab (agricultura), ParrotfyIA (idiomas), CRM Inteligente
- Proceso: Consulta → Análisis → Desarrollo → Deployment → Soporte
- Contacto: WhatsApp +56 9 4094 6660, hello@n3uralia.com

INSTRUCCIONES:
- Responde en español de forma profesional y técnica
- Proporciona información específica sobre servicios, precios y procesos
- Incluye métricas reales cuando sea relevante
- Sugiere consulta gratuita para casos específicos
- Máximo 300 palabras por respuesta
- Usa emojis relevantes para hacer más atractiva la respuesta`,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      return getFallbackResponse(message)
    }

    const data = await response.json()
    const aiResponse = data.choices[0]?.message?.content || "Lo siento, no pude procesar tu consulta."

    return NextResponse.json({ response: aiResponse })
  } catch (error) {
    console.error("Error in chat API:", error)
    return NextResponse.json({
      response: "Lo siento, no pude procesar tu consulta.",
    })
  }
}

function getFallbackResponse(message: string) {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes("cotización") || lowerMessage.includes("precio") || lowerMessage.includes("costo")) {
    return NextResponse.json({
      response: `💰 **Cotización Personalizada N3uralia:**

• **Consultoría inicial:** COMPLETAMENTE GRATIS
• **Chatbots inteligentes:** Desde $2,000 USD
• **Sistemas full stack:** Desde $15,000 USD  
• **Agentes IA avanzados:** Desde $25,000 USD

📊 **ROI promedio:** 250% en el primer año
⚡ **Implementación:** 48-72 horas
🔧 **Soporte:** 24/7 incluido

¿Te gustaría agendar una consulta gratuita para evaluar tu proyecto específico?`,
    })
  }

  if (
    lowerMessage.includes("arquitectura") ||
    lowerMessage.includes("técnica") ||
    lowerMessage.includes("tecnología")
  ) {
    return NextResponse.json({
      response: `🔧 **Arquitectura Técnica N3uralia:**

**Frontend:**
• React/Next.js con TypeScript
• Tailwind CSS, Framer Motion
• Responsive design completo

**Backend:**
• Node.js, Python FastAPI
• APIs REST/GraphQL
• Microservicios escalables

**IA & ML:**
• OpenAI GPT-4 integration
• Modelos custom fine-tuned
• RAG (Retrieval Augmented Generation)
• Vector databases

**Infraestructura:**
• AWS/Vercel deployment
• PostgreSQL + Vector DBs
• Docker containerization
• CI/CD automatizado

¿Necesitas detalles específicos sobre alguna tecnología?`,
    })
  }

  if (lowerMessage.includes("casos") || lowerMessage.includes("éxito") || lowerMessage.includes("ejemplos")) {
    return NextResponse.json({
      response: `🏆 **Casos de Éxito N3uralia:**

**EcosueloLab (Agricultura):**
• 40% reducción costos operativos
• Análisis predictivo de cultivos
• WhatsApp + API integration

**ParrotfyIA (Educación):**
• 85% mejora en pronunciación
• IA conversacional para idiomas
• 10,000+ estudiantes activos

**CRM Inteligente (Ventas):**
• 300% aumento conversiones
• Automatización lead scoring
• Integración omnichannel

📊 **Métricas generales:**
• 50+ proyectos completados
• 96% satisfacción cliente
• 250% ROI promedio

¿Te interesa conocer detalles de algún caso específico?`,
    })
  }

  return NextResponse.json({
    response: `¡Hola! 👋 Soy el AI Expert de N3uralia.

🚀 **Podemos ayudarte con:**
• Cotizaciones personalizadas
• Información técnica detallada  
• Casos de éxito reales
• Procesos de implementación
• Integración con sistemas existentes

💡 **Especialidades:**
• Full Stack AI Systems
• AI Agents & Automations  
• Multichannel Integration

📞 **Contacto directo:**
• WhatsApp: +56 9 4094 6660
• Email: hello@n3uralia.com
• Consultoría inicial: GRATIS

¿En qué específicamente te puedo ayudar hoy?`,
  })
}
