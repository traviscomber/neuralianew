import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Mountain, Zap, TrendingUp, Shield, Gauge } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes IA para Minería y Recursos en Chile | N3uralia',
  description:
    'Soluciones de IA para minería, recursos naturales y extracción en Chile. Optimiza operaciones, cumple regulaciones, mejora seguridad. Reduce costos operativos 45%, aumenta productividad 55%.',
  keywords:
    'agentes ia minería chile, automatización recursos naturales, ia operaciones mineras, monitoreo seguridad minería, predictive maintenance minería',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-mineria-chile',
  },
  openGraph: {
    title: 'Agentes IA para Minería en Chile | N3uralia',
    description: 'Optimiza operaciones mineras con agentes IA diseñados para el sector minero chileno.',
    url: 'https://n3uralia.com/es/agentes-ia-mineria-chile',
    type: 'website',
  },
}

export default function AgentesIAMineriaChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground>
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-4 text-balance">
                Agentes de IA para Minería y Recursos en Chile
              </h1>
              <p className="text-xl text-foreground/80 mb-6">
                Automatiza operaciones mineras. Monitoreo predictivo, cumplimiento normativo y optimización de recursos.
              </p>
              <div className="bg-primary/10 rounded-lg p-6 mb-8">
                <p className="text-2xl font-semibold text-primary">
                  Reduce costos 45% • Aumenta productividad 55%
                </p>
              </div>
              <Link
                href="/es/automatizacion-ia-empresas-chile#cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Evalúa tu potencial <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative w-full h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <Mountain className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                <p className="text-foreground/60 font-semibold">Operaciones Mineras Inteligentes</p>
              </div>
            </div>
          </div>
        </div>
      </SectionBackground>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">¿Por qué Minería necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Mountain,
              title: 'Monitoreo Predictivo',
              description: 'Detecta fallas de equipos 30 días antes. Previene paradas costosas que afecten la rentabilidad.',
              benefit: 'Disponibilidad +40%'
            },
            {
              icon: Zap,
              title: 'Optimización de Recursos',
              description: 'Asignación inteligente de personal, maquinaria y suministros en tiempo real según demanda.',
              benefit: 'Eficiencia +35%'
            },
            {
              icon: Shield,
              title: 'Cumplimiento Normativo',
              description: 'Monitoreo continuo de regulaciones mineras, ambientales y de seguridad laboral chilena.',
              benefit: 'Cumplimiento 100%'
            },
            {
              icon: TrendingUp,
              title: 'Seguridad Mejorada',
              description: 'Agentes monitorean condiciones en tiempo real. Alertan automáticamente sobre riesgos potenciales.',
              benefit: 'Incidentes -35%'
            }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 rounded-xl p-8 hover:border-primary/30 transition-colors">
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{item.description}</p>
                <div className="pt-4 border-t border-foreground/10">
                  <p className="text-sm font-semibold text-primary">{item.benefit}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 bg-foreground/[0.02] rounded-xl">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Casos de Uso para Minería Chilena</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Mantenimiento Predictivo de Equipos',
              description: 'Analiza datos de sensores en excavadoras, perforadoras y equipos de transporte.',
              metrics: ['92% precisión', 'Fallas detectadas 30 días antes', '40% ↑ disponibilidad']
            },
            {
              title: 'Gestión Inteligente de Turnos',
              description: 'Asigna trabajadores según calificaciones, fatiga y demanda de producción actual.',
              metrics: ['Optimización en tiempo real', 'Fatiga detectada automáticamente', 'Seguridad mejorada']
            },
            {
              title: 'Monitoreo Ambiental Continuo',
              description: 'Supervisa emisiones, consumo de agua, residuos y cumplimiento normativo ambiental.',
              metrics: ['100% cumplimiento', 'Alertas automáticas', 'Reportes en tiempo real']
            },
            {
              title: 'Optimización de Producción',
              description: 'Analiza datos de extracción y recomienda ajustes para maximizar toneladas con menor energía.',
              metrics: ['45% reducción costos', 'Producción +55%', 'ROI en 6 meses']
            }
          ].map((item, i) => (
            <div key={i} className="bg-background border border-foreground/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">{item.description}</p>
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                {item.metrics.map((metric, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-foreground/80">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Resultados Comprobados en Minería Chilena</h2>
        <p className="text-center text-foreground/70 mb-12 text-lg max-w-2xl mx-auto">Basado en implementaciones en empresas mineras líderes de Chile</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { metric: '-45%', label: 'Costos Operativos', icon: TrendingUp },
            { metric: '+55%', label: 'Productividad', icon: Gauge },
            { metric: '92%', label: 'Precisión Predictiva', icon: CheckCircle2 },
            { metric: '-30%', label: 'Paradas No Planificadas', icon: Mountain },
            { metric: '-35%', label: 'Incidentes de Seguridad', icon: Shield },
            { metric: '+40%', label: 'Cumplimiento Normativo', icon: CheckCircle2 }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-foreground/80 font-medium">{item.label}</div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Preguntas Frecuentes - Minería</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              q: '¿Funcionan los agentes en zonas remotas sin conectividad?',
              a: 'Sí. Nuestros agentes operan en modo offline con sincronización automática cuando hay conexión. Tecnología robusta diseñada para entornos extremos de la minería chilena.'
            },
            {
              q: '¿Cómo se integran con sistemas existentes (SAP, Oracle)?',
              a: 'Conectamos vía APIs REST o importación segura de datos. Integración típica: 3-4 semanas sin interrumpir operaciones actuales. Zero downtime.'
            },
            {
              q: '¿Qué tan seguros son los datos operacionales?',
              a: 'Cumplimos con ISO 27001, LGPD y regulaciones mineras chilenas. Encriptación end-to-end, auditoría completa, backups automáticos redundantes.'
            },
            {
              q: '¿Necesitamos entrenar a nuestro equipo?',
              a: 'Mínimo. Los agentes trabajan de forma autónoma. Tu equipo recibe alertas y recomendaciones automáticamente. Entrenamientos incluidos en 2-3 sesiones.'
            }
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.05] border border-foreground/10 rounded-xl p-8">
              <h3 className="font-bold text-foreground mb-3 text-lg text-balance">{item.q}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl border border-primary/20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">Optimiza tu Operación Minera Hoy</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Consultores especializados en minería chilena. Análisis personalizado de tus operaciones actuales, propuesta de automatización, y roadmap de implementación de 3 meses.
          </p>
          <Link
            href="/es/soluciones-agenticas-chile"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            Agendar Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
