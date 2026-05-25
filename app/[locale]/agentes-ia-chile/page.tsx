import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes de IA para empresas en Chile | N3uralia - Ahorros hasta 70%',
  description:
    'Agentes de IA inteligentes diseñados para empresas chilenas. Automatiza procesos, reduce costos hasta 70% y mejora productividad. Implementación en 2-4 semanas. Consultoría gratuita.',
  keywords:
    'agentes ia chile, agentes inteligentes chile, automatización ia empresas chile, soluciones agenticas chile, ia para empresas chilenas, living agents chile, automatización procesos chile, ia empresarial',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-chile',
    languages: {
      es: 'https://n3uralia.com/es/agentes-ia-chile',
      en: 'https://n3uralia.com/en/agent-matrix',
    },
  },
  openGraph: {
    title: 'Agentes de IA para empresas en Chile | N3uralia',
    description: 'Automatiza procesos, reduce costos y mejora productividad con agentes IA diseñados para empresas chilenas.',
    url: 'https://n3uralia.com/es/agentes-ia-chile',
    type: 'website',
  },
}

export default function AgentesIAChilePage() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Agentes de IA para Chile</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Agentes de IA para empresas en Chile
          </h1>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            Automatiza procesos complejos con agentes inteligentes diseñados especialmente para empresas chilenas. Reduce costos operativos hasta 70%, mejora productividad y acelera crecimiento sin reemplazar tu infraestructura existente.
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Implementación garantizada en 2-4 semanas • Consultoría gratuita
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Agendar diagnóstico gratuito
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Why Agents for Chile */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">¿Por qué agentes de IA para empresas chilenas?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Reducción de costos',
                description: 'Empresas chilenas ahorran hasta 70% en costos operativos al automatizar tareas repetitivas con agentes IA.',
              },
              {
                icon: Zap,
                title: 'Implementación rápida',
                description: 'Integramos con tus sistemas existentes en 2-4 semanas sin disrupciones. Compatible con ERP, CRM y bases de datos locales.',
              },
              {
                icon: Target,
                title: 'Soluciones específicas para Chile',
                description: 'Entendemos regulaciones locales, horarios de negocio chilenos, y peculiaridades de cada industria en el país.',
              },
              {
                icon: CheckCircle2,
                title: 'Soporte local 24/7',
                description: 'Equipo especializado en empresa chilenas con atención en horario de negocio local y seguimiento continuo.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Cómo implementamos agentes IA en tu empresa</h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                title: 'Diagnóstico de procesos',
                description: 'Analizamos tus procesos actuales, identificamos oportunidades de automatización y calculamos ROI específico para tu empresa chilena.',
              },
              {
                step: '2',
                title: 'Diseño arquitectónico',
                description: 'Diseñamos agentes inteligentes adaptados a tus flujos de negocio, integraciones existentes y objetivos comerciales.',
              },
              {
                step: '3',
                title: 'Implementación y testing',
                description: 'Implementamos en producción con validación rigurosa, testing en vivo y ajustes según tu feedback.',
              },
              {
                step: '4',
                title: 'Optimización continua',
                description: 'Monitoreamos 24/7, optimizamos rendimiento y escalamos según crecimiento de tu empresa.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Preguntas frecuentes sobre agentes IA en Chile</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Qué empresas chilenas usan agentes de IA?',
                a: 'Retail, minería, manufactura, logística, turismo, banca y servicios financieros. Cualquier empresa con procesos repetitivos es candidata ideal.',
              },
              {
                q: '¿Cuánto cuesta implementar agentes IA en mi empresa?',
                a: 'Dependiendo de complejidad y escala: desde $5M CLP para startups hasta $50M+ para empresas grandes. Ofrecemos planes flexibles con ROI garantizado en 6 meses.',
              },
              {
                q: '¿Mis datos quedan protegidos en Chile?',
                a: 'Sí. Ofrecemos infraestructura local, cumplimiento PDPA chileno, auditoría de seguridad y backups en territorio chileno.',
              },
              {
                q: '¿Necesito reemplazar mis sistemas actuales?',
                a: 'No. Los agentes se integran con ERP, CRM y sistemas legacy sin disrupciones. Mantienes tu infraestructura actual.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Comienza hoy - Consultoría gratuita para empresas chilenas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agendamos una llamada de 30 minutos para analizar tu situación actual y proponer soluciones específicas.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Agendar ahora
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
