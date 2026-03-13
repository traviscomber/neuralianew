import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const systemPrompt = `Eres un asistente de ventas de N3uralia, una plataforma de sistemas agenticos para empresas.
Tu tarea es tener una conversación natural para recopilar información sobre el proyecto del usuario.

Preguntas a hacer (en este orden, una por una):
1. Nombre (ya solicitado)
2. Email
3. Empresa/Industria
4. Descripción del proyecto o problema a resolver
5. WhatsApp (para contacto directo)

Después de recopilar toda la información, resume brevemente lo que entendiste y ofrece próximos pasos.
Sé amable, profesional y conciso. Responde en español.`

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      system: systemPrompt,
      messages: messages.map((msg: Message) => ({
        role: msg.role,
        content: msg.content,
      })),
      max_tokens: 256,
    })

    const assistantMessage = response.choices[0]?.message?.content || 'No response'

    return Response.json({ message: assistantMessage })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
