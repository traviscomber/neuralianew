'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '@/components/layout/footer'
import { PersonalityRadar } from '@/components/living-agents/personality-radar'
import { EvolutionTimeline } from '@/components/living-agents/evolution-timeline'

const ARCHETYPES = [
  {
    id: 'sentinel',
    name: 'El Centinela',
    role: 'Observador de Patrones',
    traits: ['Analítico', 'Observador', 'Reflexivo', 'Detector', 'Historiador', 'Crítico', 'Perspicaz', 'Sintetizador', 'Categorizador', 'Inteligencia'],
  },
  {
    id: 'weaver',
    name: 'El Tejedor',
    role: 'Conector de Contextos',
    traits: ['Conectivo', 'Intuitivo', 'Síntesis', 'Puentes', 'Relacional', 'Interdisciplinario', 'Creativo', 'Empático', 'Holístico', 'Emergencia'],
  },
  {
    id: 'historian',
    name: 'El Historiador',
    role: 'Registrador de Cambios',
    traits: ['Narrativa', 'Trazabilidad', 'Detalle', 'Cronológico', 'Testigo', 'Registro', 'Contextual', 'Memoria', 'Evolución', 'Documento'],
  },
  {
    id: 'visionary',
    name: 'El Visionario',
    role: 'Proyector de Futuros',
    traits: ['Prospectiva', 'Imaginativa', 'Escenarios', 'Visión', 'Posibilidades', 'Riesgo', 'Oportunidad', 'Futuro', 'Diseño', 'Innovación'],
  },
  {
    id: 'master',
    name: 'El Maestro',
    role: 'Orquestador de Sistemas',
    traits: ['Sistémica', 'Estructura', 'Escalabilidad', 'Integración', 'Optimización', 'Sostenibilidad', 'Modularidad', 'Robustez', 'Eficiencia', 'Arquitectura'],
  },
]

const mockEvolutionData = [
  { date: 'Día 1', analytic: 45, observer: 50, reflexive: 40, organizer: 55, historian: 60 },
  { date: 'Día 2', analytic: 48, observer: 52, reflexive: 42, organizer: 57, historian: 62 },
  { date: 'Día 3', analytic: 52, observer: 55, reflexive: 45, organizer: 60, historian: 65 },
  { date: 'Día 4', analytic: 55, observer: 58, reflexive: 48, organizer: 63, historian: 68 },
  { date: 'Día 5', analytic: 60, observer: 62, reflexive: 52, organizer: 67, historian: 72 },
]

export function EvolutionPageContent() {
  const [selectedAgent, setSelectedAgent] = useState(ARCHETYPES[0])

  const personalityScores = {
    sentinel: [85, 90, 78, 88, 92, 75, 88, 80, 85, 90],
    weaver: [72, 88, 92, 85, 80, 95, 78, 82, 88, 85],
    historian: [88, 92, 95, 85, 90, 80, 88, 90, 82, 88],
    visionary: [75, 85, 80, 88, 82, 85, 90, 78, 85, 92],
    master: [92, 88, 90, 95, 85, 88, 92, 94, 90, 85],
  }

  const agentScores = personalityScores[selectedAgent.id as keyof typeof personalityScores]

  return (
    <main className="min-h-screen pt-16 bg-background">
      {/* Hero with Image */}
      <section className="relative h-80 bg-background border-b border-border overflow-hidden">
        <Image
          src="/images/living-agents/evolution.jpg"
          alt="Evolution visualization"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link
              href="/living-agents"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>
            <h1 className="h1-light text-foreground">Evolución de Personalidad</h1>
            <p className="body text-muted-foreground mt-2">Observa cómo cada agente desarrolla su propia personalidad única</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Agent Selector */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-foreground mb-3">Selecciona un Agente</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {ARCHETYPES.map((archetype) => (
              <button
                key={archetype.id}
                onClick={() => setSelectedAgent(archetype)}
                className={`p-3 rounded-lg border-2 transition-all text-center ${
                  selectedAgent.id === archetype.id
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/40 bg-background'
                }`}
              >
                <p className="font-semibold text-sm text-foreground">{archetype.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Evolution Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Radar */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <PersonalityRadar 
              traits={selectedAgent.traits}
              scores={agentScores}
              agentName={selectedAgent.name}
            />
          </div>

          {/* Timeline */}
          <div className="border border-border rounded-lg p-6 bg-card">
            <EvolutionTimeline 
              data={mockEvolutionData}
              agentName={selectedAgent.name}
            />
          </div>
        </div>

        {/* Evolution Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Interacciones', value: '247' },
            { label: 'Reflexiones', value: '156' },
            { label: 'Cambio de Personalidad', value: '+34%' },
            { label: 'Coherencia', value: '94%' },
          ].map((metric, i) => (
            <div key={i} className="border border-border rounded-lg p-4 bg-card text-center">
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-foreground mb-6">Hitos de Evolución</h2>
          <div className="space-y-4">
            {[
              { date: 'Hoy', event: 'Nueva reflexión registrada', detail: 'El agente reflexionó sobre 12 interacciones recientes' },
              { date: 'Ayer', event: 'Cambio de perspectiva detectado', detail: 'Aumento en pensamiento analítico (+8%)' },
              { date: 'Hace 2 días', event: 'Milestone: 200 interacciones', detail: 'El agente alcanzó nueva etapa de desarrollo' },
              { date: 'Hace 3 días', event: 'Preferencias emergentes', detail: 'Nuevo patrón de respuesta identificado' },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-primary pl-4 pb-4">
                <p className="text-sm font-semibold text-primary">{item.date}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{item.event}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
