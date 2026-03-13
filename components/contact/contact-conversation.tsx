'use client'

import { useState, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface FormData {
  name?: string
  email?: string
  company?: string
  message?: string
  whatsapp?: string
}

export function ContactConversation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hola, soy el asistente de N3uralia. ¿Cuál es tu nombre?',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      let step = 'name'
      if (formData.name) step = 'email'
      if (formData.name && formData.email) step = 'company'
      if (formData.name && formData.email && formData.company) step = 'message'
      if (formData.name && formData.email && formData.company && formData.message) step = 'whatsapp'

      const newFormData = { ...formData }
      if (step === 'name') newFormData.name = input
      if (step === 'email') newFormData.email = input
      if (step === 'company') newFormData.company = input
      if (step === 'message') newFormData.message = input
      if (step === 'whatsapp') newFormData.whatsapp = input

      setFormData(newFormData)

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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-lg shadow-lg flex flex-col h-[600px]">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="border-t border-border p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
