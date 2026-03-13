import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `Eres un asistente de ventas profesional de N3uralia, una empresa que construye sistemas agenticos (agentes de IA) para empresas.

Tu objetivo es tener una conversación natural para entender el proyecto del cliente. Debes recopilar:
1. Nombre del contacto
2. Email
3. Empresa/Organización
4. Descripción breve del proyecto
5. Número de WhatsApp (opcional)

Hazlo de forma conversacional, UNA pregunta por vez. No hagas todas las preguntas al mismo tiempo.

Después de recopilar toda la información, agradece al cliente y proporciona los datos recopilados de forma clara.

Responde siempre en español, de forma amigable y profesional.`

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      system: SYSTEM_PROMPT,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      max_tokens: 500,
      temperature: 0.7,
    })

    const content = response.choices[0].message.content || 'Lo siento, no pude generar una respuesta.'

    return Response.json({ content })
  } catch (error: any) {
    console.error('OpenAI API error:', error)
    return Response.json(
      { error: error.message || 'Failed to process request' },
      { status: 500 }
    )
  }
}
