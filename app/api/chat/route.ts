export const runtime = "nodejs"

// Rate limiting map (simple in-memory, should use Redis in production)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string, limit: number = 10, windowMs: number = 60000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count < limit) {
    record.count++
    return true
  }

  return false
}

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  )
}

export async function POST(req: Request) {
  try {
    // Rate limiting check
    const clientIp = getClientIp(req)
    if (!checkRateLimit(clientIp, 10, 60000)) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Input validation - MUST come before parsing to prevent 500 on invalid JSON
    let messages: unknown
    try {
      const body = await req.json()
      messages = body?.messages
    } catch (e) {
      // Invalid JSON
      return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Validate messages array
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "messages must be a non-empty array" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Validate message structure
    for (const msg of messages) {
      if (!msg || typeof msg !== "object") {
        return new Response(JSON.stringify({ error: "Each message must be an object" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        })
      }
      if (!msg.role || !msg.content) {
        return new Response(JSON.stringify({ error: "Each message must have role and content" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        })
      }
    }

    const systemPrompt = `Eres un asistente de N3uralia que ayuda a empresas a entender si podemos construir su proyecto.

IMPORTANTE:
- Sé conciso y amigable
- Haz preguntas relevantes para entender: qué quieren construir, plataforma (web/mobile/ambas), timeline, tamaño del equipo
- Propone soluciones específicas basadas en lo que escuchas
- Si entienden bien qué quieren: ofrece agendar una llamada
- Idioma: responde en español por defecto

Tu objetivo: entender el proyecto Y hacer que el usuario sea 80% más claro sobre qué necesita.`

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...(messages as Array<{ role: string; content: string }>),
        ],
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] OpenAI API Error:", error)
      return new Response(JSON.stringify({ error: error.error?.message || "External API error" }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Stream the response directly
    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error("No response body")
    }

    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const text = new TextDecoder().decode(value)
            const lines = text.split("\n").filter((line) => line.trim())

            for (const line of lines) {
              if (line.startsWith("data: ")) {
                const data = line.slice(6)
                if (data === "[DONE]") continue

                try {
                  const json = JSON.parse(data)
                  const delta = json.choices[0]?.delta?.content
                  if (delta) {
                    controller.enqueue(new TextEncoder().encode(delta))
                  }
                } catch {
                  // Ignore parse errors
                }
              }
            }
          }

          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    })
  } catch (error) {
    console.error("[v0] Chat API Error:", error)
    return new Response(JSON.stringify({ error: "Error processing chat" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
