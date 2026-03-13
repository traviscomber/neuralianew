'use client'

// Build cache invalidation: 2025-03-13-16:50 - Fixed send button
import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export function ContactConversation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hola, soy el asistente de N3uralia. Cuéntame sobre tu proyecto.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    whatsapp: '',
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Determine what to collect based on conversation flow
      let step = 'name'
      if (formData.name) step = 'email'
      if (formData.name && formData.email) step = 'company'
      if (formData.name && formData.email && formData.company) step = 'message'
      if (formData.name && formData.email && formData.company && formData.message) step = 'whatsapp'

      // Update form data
      const newFormData = { ...formData }
      if (step === 'name') newFormData.name = input
      if (step === 'email') newFormData.email = input
      if (step === 'company') newFormData.company = input
      if (step === 'message') newFormData.message = input
      if (step === 'whatsapp') newFormData.whatsapp = input

      setFormData(newFormData)

      // Generate assistant response based on step
      let assistantContent = ''
      
      if (step === 'name') {
        assistantContent = `¡Hola ${input}! ¿Cuál es tu email de contacto?`
      } else if (step === 'email') {
        assistantContent = `Perfecto ${formData.name}. ¿En qué empresa trabajas?`
      } else if (step === 'company') {
        assistantContent = `Excelente, gracias ${input}. ¿Cuéntame sobre tu proyecto?`
      } else if (step === 'message') {
        assistantContent = `Interesante proyecto. ¿Cuál es tu WhatsApp para poder contactarte directamente?`
      } else if (step === 'whatsapp') {
        // All data collected, send to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: newFormData.name,
            email: newFormData.email,
            company: newFormData.company,
            message: newFormData.message,
            whatsapp: input,
          }),
        })

        if (!response.ok) {
          throw new Error('Failed to send contact')
        }

        assistantContent = `Perfecto ${newFormData.name}. Hemos recibido tu información. Nos pondremos en contacto contigo pronto a través de WhatsApp y email. ¡Gracias!`
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Disculpa, hubo un error. Por favor intenta de nuevo.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="rounded-lg border border-border bg-card h-[500px] flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-muted-foreground px-3 py-2 rounded-lg text-sm">
                Escribiendo...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-border p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              disabled={isLoading}
              placeholder="Escribe tu respuesta..."
              className="flex-1 px-3 py-2 border border-input rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
