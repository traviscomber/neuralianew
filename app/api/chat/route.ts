export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

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
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[N3uralia] OpenAI API Error:", error)
      return new Response(JSON.stringify({ error: error.error.message }), {
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
    console.error("[N3uralia] Chat API Error:", error)
    return new Response(JSON.stringify({ error: "Error processing chat" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
