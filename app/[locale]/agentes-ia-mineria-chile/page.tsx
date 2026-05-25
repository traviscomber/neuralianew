import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Mountain, Zap, TrendingUp } from 'lucide-react'
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
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Agentes de IA para Minería y Recursos en Chile
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Automatiza operaciones mineras. Monitoreo predictivo, cumplimiento normativo y optimización de recursos.
            <span className="block text-2xl font-semibold text-primary mt-2">Reduce costos 45% • Aumenta productividad 55%</span>
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
        <h2 className="text-3xl font-bold text-foreground mb-8">¿Por qué Minería necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Mountain,
              title: 'Monitoreo Predictivo',
              description: 'Detecta fallas de equipos 30 días antes. Previene paradas costosas.'
            },
            {
              icon: Zap,
              title: 'Optimización de Recursos',
              description: 'Asignación inteligente de personal, maquinaria y suministros en tiempo real.'
            },
            {
              icon: TrendingUp,
              title: 'Cumplimiento Normativo',
              description: 'Monitoreo continuo de regulaciones mineras, ambientales y de seguridad.'
            },
            {
              icon: CheckCircle2,
              title: 'Seguridad Mejorada',
              description: 'Agentes monitorean condiciones de seguridad. Alertan sobre riesgos automáticamente.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Casos de Uso para Minería Chilena</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Mantenimiento Predictivo',
              description: 'Analiza datos de sensores en excavadoras, perforadoras y equipos de transporte. Predice fallas con 92% de precisión.'
            },
            {
              title: 'Gestión de Personal y Turnos',
              description: 'Asigna trabajadores según calificaciones, fatiga y demanda de producción.'
            },
            {
              title: 'Monitoreo Ambiental',
              description: 'Agentes supervisan emisiones, consumo de agua y residuos. Cumple normas medioambientales automáticamente.'
            },
            {
              title: 'Optimización de Producción',
              description: 'Analiza datos de extracción. Recomienda ajustes para maximizar toneladas con menor energía.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Resultados en Minería Chilena</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { metric: '-45%', label: 'Costos Operativos' },
            { metric: '+55%', label: 'Productividad' },
            { metric: '92%', label: 'Precisión Predictiva' },
            { metric: '-30%', label: 'Paradas No Planificadas' },
            { metric: '-35%', label: 'Incidentes de Seguridad' },
            { metric: '+40%', label: 'Cumplimiento Normativo' }
          ].map((item, i) => (
            <div key={i} className="text-center bg-primary/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes - Minería</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Funcionan los agentes en zonas remotas sin conectividad?',
              a: 'Sí. Operan en modo offline con sincronización cuando hay conexión disponible. Tecnología robusta para entornos extremos.'
            },
            {
              q: '¿Cómo se integran con sistemas existentes (SAP, Oracle)?',
              a: 'Conectamos vía APIs o importación de datos. Integración típica en 3-4 semanas sin interrumpir operaciones.'
            },
            {
              q: '¿Qué tan seguros son los datos operacionales?',
              a: 'Cumplimos con estándares ISO, LGPD y regulaciones mineras chilenas. Encriptación end-to-end, auditoría completa.'
            },
            {
              q: '¿Necesitamos entrenar a nuestro equipo?',
              a: 'Mínimo. Los agentes trabajan sin intervención. Tu equipo recibe alertas y recomendaciones automáticamente.'
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
        <h2 className="text-3xl font-bold text-foreground mb-4">Optimiza tu Operación Minera Hoy</h2>
        <p className="text-foreground/80 mb-6">
          Consultores especializados en minería chilena. Análisis personalizado de tus operaciones.
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
