import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Truck, Zap, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes IA para Logística y Supply Chain en Chile | N3uralia',
  description:
    'Soluciones de IA para logística, supply chain y distribución en Chile. Optimiza rutas, gestión de flota, seguimiento de envíos. Reduce costos 35%, mejora entregas 40%, precisión 98%.',
  keywords:
    'agentes ia logística chile, automatización supply chain, ia optimización rutas, gestión flota inteligente, tracking envíos ia',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-logistica-chile',
  },
  openGraph: {
    title: 'Agentes IA para Logística en Chile | N3uralia',
    description: 'Transforma tu cadena de suministro con agentes IA diseñados para logística chilena.',
    url: 'https://n3uralia.com/es/agentes-ia-logistica-chile',
    type: 'website',
  },
}

export default function AgentesIALogisticaChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Agentes de IA para Logística y Supply Chain en Chile
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Automatiza tu cadena de suministro. Optimización de rutas, gestión de flota y tracking en tiempo real.
            <span className="block text-2xl font-semibold text-primary mt-2">Costos -35% • Entregas +40% • Precisión 98%</span>
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
        <h2 className="text-3xl font-bold text-foreground mb-8">¿Por qué Logística necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Truck,
              title: 'Optimización de Rutas',
              description: 'Agentes calculan rutas óptimas considerando tráfico, tiempo, combustible. Ahorra 25% en distancia.'
            },
            {
              icon: Zap,
              title: 'Gestión de Flota Inteligente',
              description: 'Monitoreo de vehículos, mantenimiento predictivo, gestión de combustible y permisos.'
            },
            {
              icon: TrendingUp,
              title: 'Predicción de Demanda',
              description: 'Anticipa volúmenes de envío. Optimiza disponibilidad de vehículos y personal.'
            },
            {
              icon: CheckCircle2,
              title: 'Tracking y Visibilidad',
              description: 'Clientes ven ubicación en tiempo real. Reduce consultas de estado 80%.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Casos de Uso para Logística Chilena</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Optimización de Rutas Last-Mile',
              description: 'Agentes organizan entregas por zona geográfica, densidad de puntos, ventanas de tiempo. Ahorra combustible y tiempos.'
            },
            {
              title: 'Gestión de Devoluciones (Reverse Logistics)',
              description: 'Automatiza logística inversa. Coordina recogidas de productos devueltos con máxima eficiencia.'
            },
            {
              title: 'Consolidación de Envíos',
              description: 'Agrupa paquetes para optimizar carga de vehículos. Reduce costos por unidad 20-30%.'
            },
            {
              title: 'Predicción de Tiempos de Entrega',
              description: 'Estima tiempos reales considerando tráfico, clima, eventos. Reduce incumplimientos de SLA.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Resultados en Logística Chilena</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { metric: '-35%', label: 'Costos Operativos' },
            { metric: '+40%', label: 'Volumen de Entregas' },
            { metric: '98%', label: 'Precisión' },
            { metric: '-25%', label: 'Consumo Combustible' },
            { metric: '+55%', label: 'Eficiencia de Flota' },
            { metric: '-80%', label: 'Consultas de Clientes' }
          ].map((item, i) => (
            <div key={i} className="text-center bg-primary/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes - Logística</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Se conecta con nuestro TMS actual?',
              a: 'Sí. Compatible con sistemas de gestión de transporte populares. API personalizable para cualquier TMS.'
            },
            {
              q: '¿Cómo es la precisión en predicción de tiempos?',
              a: 'MAPE (error promedio) típico: 8-12%. Mejora continuamente con datos de entregas reales.'
            },
            {
              q: '¿Funciona para pequeños operadores logísticos?',
              a: 'Absolutamente. Escalable desde 5 vehículos hasta 500+. Bajo costo inicial.'
            },
            {
              q: '¿Qué pasa con datos de rutas sensibles?',
              a: 'Cumplimos LGPD. Datos encriptados, acceso limitado, auditoría completa. Tú eres dueño de tus datos.'
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
        <h2 className="text-3xl font-bold text-foreground mb-4">Optimiza tu Cadena de Suministro</h2>
        <p className="text-foreground/80 mb-6">
          Especialistas en logística y supply chain chilena. Análisis de tu operación sin costo.
        </p>
        <Link
          href="/es/soluciones-agenticas-chile"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Agendar Diagnóstico <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
