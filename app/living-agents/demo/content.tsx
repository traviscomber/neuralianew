'use client'

import { useState } from 'react'
import { Send, Sparkles, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'
import { PersonalityRadar } from '@/components/living-agents/personality-radar'

const ARCHETYPES = [
  {
    id: 'sentinel',
    name: 'El Centinela',
    role: 'Cognitive Perception',
    description: 'Entiende y detecta.',
    traits: ['Analítico', 'Observador', 'Reflexivo', 'Detector', 'Crítico', 'Perspicaz', 'Sintetizador', 'Categorizador', 'Inteligencia', 'Contextual'],
  },
  {
    id: 'strategist',
    name: 'El Estratega',
    role: 'Decisive Intelligence',
    description: 'Evalúa y decide.',
    traits: ['Evaluador', 'Simulador', 'Predictivo', 'Decisor', 'Analítico', 'Estratégico', 'Visionario', 'Escenarios', 'Oportunidad', 'Riesgo'],
  },
  {
    id: 'architect',
    name: 'El Arquitecto',
    role: 'Execution Engine',
    description: 'Construye y automatiza.',
    traits: ['Constructor', 'Generador', 'Automatizador', 'Integrador', 'Modular', 'Escalable', 'Robusto', 'Eficiente', 'Creativo', 'Innovador'],
  },
  {
    id: 'guardian',
    name: 'El Guardián',
    role: 'Quality Control',
    description: 'Valida y protege.',
    traits: ['Validador', 'Protector', 'Monitoreador', 'Consistente', 'Riguroso', 'Alerta', 'Seguro', 'Confiable', 'Vigilante', 'Asegurador'],
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
      content: 'Hola. Soy El Centinela. Observo patrones y analizo datos. ¿Con qué puedo ayudarte hoy?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showEvolution, setShowEvolution] = useState(false) // Declared showEvolution variable

  const personalityScores = {
    sentinel: [85, 90, 78, 88, 92, 75, 88, 80, 85, 90],
    strategist: [72, 88, 92, 85, 80, 95, 78, 82, 88, 85],
    architect: [88, 92, 95, 85, 90, 80, 88, 90, 82, 88],
    guardian: [92, 88, 90, 95, 85, 88, 92, 94, 90, 85],
  }

  const handleSendMessage = () => {
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
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2 bg-transparent"
              asChild
            >
              <Link href="/living-agents/evolution">
                <BarChart3 className="w-4 h-4" />
                Evolución
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-h-[calc(100vh-200px)]">
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
            {/* Chat messages will go here */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
