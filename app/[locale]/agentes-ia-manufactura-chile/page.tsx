import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Wrench, Zap, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes IA para Manufactura en Chile | N3uralia',
  description:
    'Soluciones de IA para plantas manufactureras chilenas. Optimiza producción, control de calidad y mantenimiento. Reduce tiempos 40%, aumenta calidad 50%, mejora eficiencia 60%.',
  keywords:
    'agentes ia manufactura chile, automatización plantas industriales, ia control de calidad, optimización producción, predictive maintenance industria',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-manufactura-chile',
  },
  openGraph: {
    title: 'Agentes IA para Manufactura en Chile | N3uralia',
    description: 'Transforma tu planta manufacturera con agentes IA diseñados para industria chilena.',
    url: 'https://n3uralia.com/es/agentes-ia-manufactura-chile',
    type: 'website',
  },
}

export default function AgentesIAManufacturaChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Agentes de IA para Manufactura en Chile
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Automatiza tu planta industrial. Control de calidad, mantenimiento predictivo y planificación de producción inteligente.
            <span className="block text-2xl font-semibold text-primary mt-2">Reduce tiempos 40% • Aumenta calidad 50% • Eficiencia 60%</span>
          </p>
          <Link
            href="/es/automatizacion-ia-empresas-chile#cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Evalúa tu potencial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionBackground>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">¿Por qué Manufactura necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Wrench,
              title: 'Control de Calidad Automático',
              description: 'Inspección 100% con visión por IA. Detecta defectos con 99.2% de precisión.'
            },
            {
              icon: Zap,
              title: 'Mantenimiento Predictivo',
              description: 'Evita paradas de producción analizando vibración, temperatura y consumo energético.'
            },
            {
              icon: TrendingUp,
              title: 'Planificación Optimizada',
              description: 'Agentes planifican producción según demanda, inventario y capacidad disponible.'
            },
            {
              icon: CheckCircle2,
              title: 'Gestión de Inventario',
              description: 'Control automático de materia prima, WIP y productos terminados.'
            }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
                <Icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 bg-foreground/5 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-8">Casos de Uso para Industria Manufacturera</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Control de Calidad Automático',
              description: 'Cámaras + IA inspecciona 100% de piezas. Rechaza defectos antes del empaque. Reduce reclamaciones 75%.'
            },
            {
              title: 'Planificación de Producción Dinámica',
              description: 'Ajusta órdenes de producción según demanda en tiempo real. Reduce lead times 40%.'
            },
            {
              title: 'Monitoreo de Máquinas (IIoT)',
              description: 'Analiza sensores de equipos. Predice fallos con 92% de exactitud. Evita paradas costosas.'
            },
            {
              title: 'Gestión de Turnos y Personal',
              description: 'Asigna operarios según especialización, fatiga y demanda de líneas de producción.'
            }
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Resultados en Manufactura Chilena</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { metric: '-40%', label: 'Lead Times' },
            { metric: '+50%', label: 'Calidad (Defectos -50%)' },
            { metric: '+60%', label: 'Eficiencia OEE' },
            { metric: '-30%', label: 'Paradas no Planeadas' },
            { metric: '-25%', label: 'Costo Materia Prima' },
            { metric: '+35%', label: 'Capacidad sin Inversión' }
          ].map((item, i) => (
            <div key={i} className="text-center bg-primary/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes - Manufactura</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Necesitamos cambiar maquinaria existente?',
              a: 'No. Nuestros agentes se integran con máquinas actuales vía PLCs o IoT gateways. Compatible con equipos antiguos y nuevos.'
            },
            {
              q: '¿Cuánto cuesta implementar en una planta?',
              a: 'Varía por complejidad. Típicamente $50K-$200K USD en equipamiento y software. ROI en 6-9 meses.'
            },
            {
              q: '¿Cómo garantizan 99.2% de precisión en QC?',
              a: 'Combinamos visión por IA (detección de defectos) con muestreo estadístico validado por ingeniería de calidad.'
            },
            {
              q: '¿Funciona con diferentes tipos de productos?',
              a: 'Sí. Reentrenamos modelos para cada producto. Típicamente 2-3 semanas por nuevo producto.'
            }
          ].map((item, i) => (
            <div key={i} className="border border-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-foreground/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 bg-primary/10 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-4">Moderniza tu Planta Manufacturera</h2>
        <p className="text-foreground/80 mb-6">
          Expertos en Industry 4.0 y Lean Manufacturing. Análisis personalizado de tu planta.
        </p>
        <Link
          href="/es/soluciones-agenticas-chile"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Agendar Auditoría <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
