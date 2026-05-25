import type { Metadata } from 'next'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Automatización IA para empresas en Chile | N3uralia - Transforma tu operación',
  description:
    'Automatización inteligente de procesos empresariales para organizaciones chilenas. Reduce tiempos, elimina errores manuales y escala operaciones sin aumentar costos. ROI garantizado.',
  keywords:
    'automatización ia empresas chile, automatización procesos chile, transformación digital chile, rpa ia chile, automatización inteligente',
  alternates: {
    canonical: 'https://n3uralia.com/es/automatizacion-ia-empresas-chile',
  },
  openGraph: {
    title: 'Automatización IA para empresas en Chile | N3uralia',
    description: 'Transforma tu operación con automatización inteligente de procesos empresariales diseñada para Chile.',
    url: 'https://n3uralia.com/es/automatizacion-ia-empresas-chile',
    type: 'website',
  },
}

interface PageProps {
  params: { locale: string }
}

export default function AutomatizacionIAChilePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Automatización Empresarial</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Automatización IA para empresas en Chile
          </h1>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            Transforma tus procesos operativos con automatización inteligente. Elimina trabajo manual, reduce errores, mejora tiempos de respuesta y escala sin contratar. Solución completa para empresas chilenas de cualquier tamaño.
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Implementación garantizada • Integración sin disrupciones • ROI en 6 meses
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Evalúa tu potencial de automatización
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">El problema en empresas chilenas</h2>
          <div className="space-y-6">
            {[
              {
                title: 'Procesos manuales ineficientes',
                description: 'Tareas que toman horas podrían completarse en minutos. Tus equipos están atrapados en trabajo repetitivo.',
              },
              {
                title: 'Errores humanos costosos',
                description: 'Errores en data entry, procesamiento de órdenes o validaciones causan retrasos, devoluciones y insatisfacción de clientes.',
              },
              {
                title: 'Escalabilidad limitada',
                description: 'No puedes crecer sin contratar más personas. Tus costos crecen proporcionalmente al volumen.',
              },
              {
                title: 'Integración compleja entre sistemas',
                description: 'Tus sistemas legacy no se comunican bien. Información fragmentada entre ERP, CRM y bases de datos.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border flex gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">La solución: Automatización IA inteligente</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Optimización de procesos',
                description: 'Analizamos tu flujo actual, identificamos cuellos de botella y diseñamos automatización específica para tu negocio.',
              },
              {
                icon: Zap,
                title: 'Integración seamless',
                description: 'Nuestros agentes se conectan con ERP, CRM, bases de datos y sistemas legacy sin reemplazarlos.',
              },
              {
                icon: Target,
                title: 'Reducción de costos',
                description: 'Elimina trabajo manual repetitivo. Tus equipos se enfocam en decisiones estratégicas de alto valor.',
              },
              {
                icon: CheckCircle2,
                title: 'Escala sin fricción',
                description: 'Duplica volumen sin duplicar costos. Automatización escala linealmente con tu crecimiento.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted rounded-lg border border-border">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processes We Automate */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Procesos que automatizamos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Procesamiento de órdenes y facturas',
              'Validación y categorización de datos',
              'Atención al cliente y tickets de soporte',
              'Gestión de inventario y reabastecimiento',
              'Reportes automáticos y análisis de datos',
              'Integración entre sistemas y sincronización de datos',
              'Aprobaciones y flujos de workflow',
              'Cumplimiento normativo y auditoría',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start p-4 bg-background rounded-lg border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Resultados típicos para empresas chilenas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                metric: '70%',
                label: 'Reducción de costos',
                details: 'operacionales reducidos en 6 meses',
              },
              {
                metric: '24/7',
                label: 'Operación continua',
                details: 'Sin pausas, sin dependencia de horarios',
              },
              {
                metric: '-80%',
                label: 'Errores eliminados',
                details: 'Precisión 99.8% vs. 85% manual',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-muted rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Preguntas sobre automatización IA</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿La automatización causa despidos?',
                a: 'No. Tus equipos se reasignan a tareas de mayor valor. Atienden casos complejos, mejoran productos y generan ingresos. La productividad aumenta, no disminuye.',
              },
              {
                q: '¿Cuánto tiempo antes de ver ROI?',
                a: 'Típicamente 4-6 meses. Hemos visto ROI en 2 meses para proyectos de alto volumen. Ofrecemos garantía escrita de ROI.',
              },
              {
                q: '¿Funciona con sistemas antiguos?',
                a: 'Sí. Nos especializamos en integración con sistemas legacy. Conectamos ERP viejos, mainframes, bases de datos heredadas sin reemplazarlas.',
              },
              {
                q: '¿Qué pasa si la automatización falla?',
                a: 'Incluimos failover automático, monitoreo 24/7 y alertas en tiempo real. Si hay problema, tus procesos vuelven a manual instantáneamente.',
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
            Automatiza tu operación hoy
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agenda una evaluación gratuita. Analizamos tu operación actual y te mostramos exactamente dónde puedes automatizar y cuál es tu potencial de ahorro.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Evaluar mi empresa
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
