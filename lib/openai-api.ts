const OPENAI_CHAT_COMPLETIONS_URL = "https://api.openai.com/v1/chat/completions"

export interface OpenAIChatMessage {
  role: "system" | "user" | "assistant"
  content: string
}

interface OpenAIChatOptions {
  maxTokens?: number
  messages: OpenAIChatMessage[]
  model: string
  stream?: boolean
  temperature?: number
}

function getOpenAIHeaders() {
  const apiKey = process.env["OPENAI_API_KEY"]

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not configured")
  }

  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  }
}

async function parseOpenAIError(response: Response) {
  try {
    const payload = await response.json()
    return payload?.error?.message || payload?.message || `OpenAI request failed with status ${response.status}`
  } catch {
    return `OpenAI request failed with status ${response.status}`
  }
}

async function requestOpenAIChat(options: OpenAIChatOptions) {
  const response = await fetch(OPENAI_CHAT_COMPLETIONS_URL, {
    method: "POST",
    headers: getOpenAIHeaders(),
    body: JSON.stringify({
      model: options.model,
      messages: options.messages,
      temperature: options.temperature ?? 0.7,
      max_tokens: options.maxTokens,
      stream: options.stream ?? false,
    }),
  })

  if (!response.ok) {
    throw new Error(await parseOpenAIError(response))
  }

  return response
}

export async function generateOpenAIText(options: OpenAIChatOptions) {
  const response = await requestOpenAIChat({ ...options, stream: false })
  const payload = await response.json()

  return payload?.choices?.[0]?.message?.content ?? ""
}

export async function streamOpenAIText(options: OpenAIChatOptions) {
  const response = await requestOpenAIChat({ ...options, stream: true })

  if (!response.body) {
    throw new Error("OpenAI stream response body is empty")
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) {
            break
          }

          const text = decoder.decode(value, { stream: true })
          const lines = text.split("\n").filter((line) => line.trim())

          for (const line of lines) {
            if (!line.startsWith("data: ")) {
              continue
            }

            const data = line.slice(6)

            if (data === "[DONE]") {
              continue
            }

            try {
              const json = JSON.parse(data)
              const delta = json.choices?.[0]?.delta?.content

              if (delta) {
                controller.enqueue(encoder.encode(delta))
              }
            } catch {
              // Ignore partial SSE frames until the next chunk completes them.
            }
          }
        }

        controller.close()
      } catch (error) {
        controller.error(error)
      } finally {
        reader.releaseLock()
      }
    },
  })

  return new Response(stream, {
    headers: {
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "Content-Type": "text/event-stream",
    },
  })
}
