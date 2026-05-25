import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Soluciones Agenticas para Chile | N3uralia - Automatización Empresarial IA',
  description:
    'Soluciones agenticas personalizadas para empresas chilenas. Living agents, orquestación multiagente y automatización inteligente. Optimiza operaciones, reduce tiempos, escala sin límites.',
  keywords:
    'soluciones agenticas chile, automatización empresas chile, living agents chile, sistemas inteligentes chile, ia empresarial, plataforma agentes ia, orquestación multiagente',
  alternates: {
    canonical: 'https://n3uralia.com/es/soluciones-agenticas-chile',
    languages: {
      es: 'https://n3uralia.com/es/soluciones-agenticas-chile',
      en: 'https://n3uralia.com/en/solutions',
    },
  },
  openGraph: {
    title: 'Soluciones Agenticas para Chile | N3uralia',
    description: 'Automatización inteligente y escalable para empresas chilenas con agentes vivos y orquestación multiagente.',
    url: 'https://n3uralia.com/es/soluciones-agenticas-chile',
    type: 'website',
  },
}

export default function SolucionesAgenticasChilePage() {

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <SectionBackground />
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Soluciones Agenticas</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
            Soluciones agenticas para empresas en Chile
          </h1>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            Plataforma completa de agentes inteligentes para automatizar tu operación. Living agents que aprenden, se adaptan y mejoran continuamente. Diseñada para empresas chilenas que requieren escalabilidad y confiabilidad.
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Integración con sistemas locales • Datos en Chile • Soporte 24/7
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Solicitar demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Características de nuestras soluciones agenticas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Living Agents',
                description: 'Agentes que evolucionan con cada interacción. Aprenden patrones, mejoran decisiones y se adaptan a nuevos escenarios automáticamente.',
              },
              {
                icon: Zap,
                title: 'Orquestación Multiagente',
                description: 'Múltiples agentes coordinados trabajando en paralelo. Resuelven problemas complejos dividiendo tareas de forma inteligente.',
              },
              {
                icon: Target,
                title: 'Memoria Distribuida',
                description: 'Contexto compartido entre agentes. Cada decisión se basa en historial completo y datos en tiempo real.',
              },
              {
                icon: CheckCircle2,
                title: 'Governance & Control',
                description: 'Panel de supervisión en tiempo real. Auditoría completa, rollback de decisiones, y control total sobre operaciones.',
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

      {/* Use Cases */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Casos de uso para empresas chilenas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Automatización de atención al cliente 24/7',
              'Procesamiento inteligente de órdenes y pagos',
              'Gestión automática de inventario y logística',
              'Análisis de datos y generación de reportes',
              'Validación y cumplimiento normativo local',
              'Integración con sistemas legacy existentes',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">ROI medible para tu empresa</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '-70%',
                label: 'Costos operativos',
                description: 'Automatiza tareas manuales y procesos repetitivos',
              },
              {
                metric: '+300%',
                label: 'Velocidad de procesamiento',
                description: 'Operaciones que tardaban horas, ahora en segundos',
              },
              {
                metric: '+85%',
                label: 'Satisfacción de clientes',
                description: 'Respuestas inmediatas 24/7 en tiempo real',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-foreground">Preguntas sobre soluciones agenticas</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Cuál es la diferencia con bots tradicionales?',
                a: 'Nuestros living agents aprenden y evolucionan. No funcionan solo con reglas predefinidas; mejoran automáticamente con cada interacción y entienden contexto.',
              },
              {
                q: '¿Qué industrias se benefician más?',
                a: 'Retail, minería, manufactura, logística, turismo, banca y seguros. Especialmente sectores con procesos complejos y alto volumen de transacciones.',
              },
              {
                q: '¿Cómo garantizan la seguridad de datos?',
                a: 'Infraestructura en servidores locales, cumplimiento PDPA, encriptación end-to-end, auditoría completa y backups en Chile.',
              },
              {
                q: '¿Cuánto tiempo toma una implementación completa?',
                a: 'Proyectos simples: 2-4 semanas. Complejos con múltiples integraciones: 4-8 semanas. Incluye testing, training y go-live garantizado.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted rounded-lg border border-border">
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
            Transforma tu empresa con soluciones agenticas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Únete a empresas chilenas que ya están automatizando operaciones complejas y mejorando su ROI.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2">
            Agendar consulta
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
