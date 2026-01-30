'use client'

import { useState } from 'react'
import { Send, Sparkles, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/layout/footer'

const ARCHETYPES = [
  {
    id: 'curator',
    name: 'El Curador',
    role: 'Conservador del Conocimiento',
    color: 'from-blue-500/20 to-blue-500/10',
    borderColor: 'border-blue-200',
    description: 'Organiza y preserva.',
  },
  {
    id: 'weaver',
    name: 'La Tejedora',
    role: 'Conectora de Contextos',
    color: 'from-purple-500/20 to-purple-500/10',
    borderColor: 'border-purple-200',
    description: 'Vincula significados.',
  },
  {
    id: 'chronicler',
    name: 'El Cronista',
    role: 'Narrador de Cambio',
    color: 'from-amber-500/20 to-amber-500/10',
    borderColor: 'border-amber-200',
    description: 'Documenta viajes.',
  },
  {
    id: 'visionary',
    name: 'El Visionario',
    role: 'Proyector de Futuros',
    color: 'from-pink-500/20 to-pink-500/10',
    borderColor: 'border-pink-200',
    description: 'Imagina posibilidades.',
  },
  {
    id: 'architect',
    name: 'El Arquitecto',
    role: 'Constructor de Sistemas',
    color: 'from-green-500/20 to-green-500/10',
    borderColor: 'border-green-200',
    description: 'Diseña estructuras.',
  },
]

interface Message {
  role: 'user' | 'agent'
  content: string
  timestamp: Date
}

export function DemoContent() {
  const [selectedAgent, setSelectedAgent] = useState(ARCHETYPES[0])
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      content: 'Hola. Soy El Curador. Preservo y organizo el conocimiento. ¿Con qué puedo ayudarte hoy?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simular respuesta del agente
    setTimeout(() => {
      const agentResponse: Message = {
        role: 'agent',
        content: `Respuesta de ${selectedAgent.name}: Interesante perspectiva. Voy a reflexionar sobre esto...`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="border-b border-border bg-background sticky top-16 z-40 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Living Agents Demo</h1>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <BarChart3 className="w-4 h-4" />
              Evolución
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Agent Selector */}
          <div className="border border-border rounded-lg p-4 bg-card overflow-y-auto">
            <h2 className="text-sm font-semibold text-foreground mb-4">Elige un Agente</h2>
            <div className="space-y-3">
              {ARCHETYPES.map((archetype) => (
                <button
                  key={archetype.id}
                  onClick={() => setSelectedAgent(archetype)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAgent.id === archetype.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/40 bg-background'
                  }`}
                >
                  <p className="font-semibold text-sm text-foreground">{archetype.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{archetype.role}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3 flex flex-col border border-border rounded-lg bg-card overflow-hidden">
            {/* Agent Info */}
            <div className="border-b border-border p-4 bg-background">
              <h2 className="font-semibold text-foreground">{selectedAgent.name}</h2>
              <p className="text-sm text-muted-foreground">{selectedAgent.role}</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-background border border-border text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-background border border-border px-4 py-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">Reflexionando...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 bg-background">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="gap-2"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
