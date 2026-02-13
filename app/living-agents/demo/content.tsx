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
    role: 'Observador de Patrones',
    description: 'Detecta y analiza.',
    traits: ['Analítico', 'Observador', 'Reflexivo', 'Detector', 'Historiador', 'Crítico', 'Perspicaz', 'Sintetizador', 'Categorizador', 'Inteligencia'],
  },
  {
    id: 'weaver',
    name: 'El Tejedor',
    role: 'Conector de Contextos',
    description: 'Vincula significados.',
    traits: ['Conectivo', 'Intuitivo', 'Síntesis', 'Puentes', 'Relacional', 'Interdisciplinario', 'Creativo', 'Empático', 'Holístico', 'Emergencia'],
  },
  {
    id: 'historian',
    name: 'El Historiador',
    role: 'Registrador de Cambios',
    description: 'Documenta viajes.',
    traits: ['Narrativa', 'Trazabilidad', 'Detalle', 'Cronológico', 'Testigo', 'Registro', 'Contextual', 'Memoria', 'Evolución', 'Documento'],
  },
  {
    id: 'visionary',
    name: 'El Visionario',
    role: 'Proyector de Futuros',
    description: 'Imagina posibilidades.',
    traits: ['Prospectiva', 'Imaginativa', 'Escenarios', 'Visión', 'Posibilidades', 'Riesgo', 'Oportunidad', 'Futuro', 'Diseño', 'Innovación'],
  },
  {
    id: 'master',
    name: 'El Maestro',
    role: 'Orquestador de Sistemas',
    description: 'Diseña estructuras.',
    traits: ['Sistémica', 'Estructura', 'Escalabilidad', 'Integración', 'Optimización', 'Sostenibilidad', 'Modularidad', 'Robustez', 'Eficiencia', 'Arquitectura'],
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
    weaver: [72, 88, 92, 85, 80, 95, 78, 82, 88, 85],
    historian: [88, 92, 95, 85, 90, 80, 88, 90, 82, 88],
    visionary: [75, 85, 80, 88, 82, 85, 90, 78, 85, 92],
    master: [92, 88, 90, 95, 85, 88, 92, 94, 90, 85],
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
