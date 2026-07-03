'use client'

import { useState } from 'react'
import { Send, Sparkles, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { PersonalityRadar } from '@/components/living-agents/personality-radar'
import type { Locale } from '@/lib/get-locale'

type DemoCopy = {
  title: string
  switchLabel: string
  switchText: string
  chooseAgent: string
  evolution: string
  headerTitle: string
  initialMessage: string
  userPlaceholder: string
  send: string
  responsePrefix: string
  responseBody: string
  messages: {
    title: string
    placeholder: string
  }
  radarTitle: string
  evolutionTitle: string
  chatTitle: string
  analyzeButton: string
}

const copy: Record<Locale, DemoCopy> = {
  es: {
    title: 'Living Agents Demo',
    switchLabel: 'Ver evolución',
    switchText: 'Evolución',
    chooseAgent: 'Elige un agente',
    evolution: 'Evolución',
    headerTitle: 'Living Agents Demo',
    initialMessage: 'Hola. Soy El Centinela. Observo patrones y analizo datos. ¿Con qué puedo ayudarte hoy?',
    userPlaceholder: 'Escribe tu mensaje...',
    send: 'Enviar',
    responsePrefix: 'Respuesta de',
    responseBody: 'Interesante perspectiva. Voy a reflexionar sobre esto...',
    messages: {
      title: 'Mensajes',
      placeholder: 'Sin mensajes todavía',
    },
    radarTitle: 'Perfil de personalidad',
    evolutionTitle: 'Evolución',
    chatTitle: 'Chat interactivo',
    analyzeButton: 'Analizar',
  },
  en: {
    title: 'Living Agents Demo',
    switchLabel: 'View evolution',
    switchText: 'Evolution',
    chooseAgent: 'Choose an agent',
    evolution: 'Evolution',
    headerTitle: 'Living Agents Demo',
    initialMessage: 'Hi. I am The Sentinel. I observe patterns and analyze data. How can I help today?',
    userPlaceholder: 'Type your message...',
    send: 'Send',
    responsePrefix: 'Response from',
    responseBody: 'Interesting perspective. I will reflect on this...',
    messages: {
      title: 'Messages',
      placeholder: 'No messages yet',
    },
    radarTitle: 'Personality profile',
    evolutionTitle: 'Evolution',
    chatTitle: 'Interactive chat',
    analyzeButton: 'Analyze',
  },
}

const ARCHETYPES = [
  { id: 'sentinel', name: 'The Sentinel', role: 'Pattern observer', description: 'Detects and analyzes.' },
  { id: 'weaver', name: 'The Weaver', role: 'Context connector', description: 'Links meaning.' },
  { id: 'historian', name: 'The Historian', role: 'Change recorder', description: 'Documents journeys.' },
  { id: 'visionary', name: 'The Visionary', role: 'Future projector', description: 'Imagines possibilities.' },
  { id: 'master', name: 'The Master', role: 'System orchestrator', description: 'Designs structures.' },
]

interface Message {
  role: 'user' | 'agent'
  content: string
  timestamp: Date
}

interface DemoContentProps {
  locale: Locale
}

export function DemoContent({ locale }: DemoContentProps) {
  const text = copy[locale]
  const [selectedAgent, setSelectedAgent] = useState(ARCHETYPES[0])
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'agent',
      content: text.initialMessage,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showEvolution, setShowEvolution] = useState(false)

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input, timestamp: new Date() }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    setTimeout(() => {
      const agentResponse: Message = {
        role: 'agent',
        content: `${text.responsePrefix} ${selectedAgent.name}: ${text.responseBody}`,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-background pt-16">
      <section className="sticky top-16 z-40 border-b border-border bg-background py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">{text.headerTitle}</h1>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
              <Link href={`/${locale}/living-agents/evolution`}>
                <BarChart3 className="h-4 w-4" />
                {text.evolution}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="grid min-h-[calc(100vh-200px)] grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="overflow-y-auto rounded-lg border border-border bg-card p-4">
            <h2 className="mb-4 text-sm font-semibold text-foreground">{text.chooseAgent}</h2>
            <div className="space-y-3">
              {ARCHETYPES.map((archetype) => (
                <button
                  key={archetype.id}
                  onClick={() => setSelectedAgent(archetype)}
                  className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                    selectedAgent.id === archetype.id ? 'border-primary bg-primary/10' : 'border-border bg-background hover:border-primary/40'
                  }`}
                >
                  <p className="text-sm font-semibold text-foreground">{archetype.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{archetype.role}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-card lg:col-span-3">
            <div className="border-b border-border p-4">
              <h2 className="text-sm font-semibold text-foreground">{text.chatTitle}</h2>
            </div>
            <div className="flex min-h-[360px] flex-1 flex-col gap-4 p-4">
              {messages.map((message, index) => (
                <div key={index} className={`max-w-[80%] rounded-lg px-4 py-3 text-sm ${message.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
                  {message.content}
                </div>
              ))}
              {isLoading && <div className="text-sm text-muted-foreground">{text.analyzeButton}...</div>}
            </div>
            <div className="border-t border-border p-4">
              <div className="flex gap-3">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={text.userPlaceholder}
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none"
                />
                <Button onClick={handleSendMessage} className="gap-2">
                  <Send className="h-4 w-4" />
                  {text.send}
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
