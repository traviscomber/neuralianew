import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Brain, Zap, Shield, TrendingUp } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return {
    title: isES 
      ? "Soluciones Agenticas para Chile | Arquitectura de Agentes IA"
      : "Agentic Solutions for Chile | AI Agent Architecture",
    description: isES
      ? "Arquitectura agentica especializada para empresas chilenas. Sistemas conversacionales inteligentes, orquestación multi-agente, living agents que aprenden. Diseño responsable y culturalmente adaptado."
      : "Specialized agentic architecture for Chilean companies. Intelligent conversational systems, multi-agent orchestration, learning agents. Responsible and culturally adapted design.",
    keywords: isES
      ? "soluciones agenticas, arquitectura agentica Chile, multi-agent systems, living agents, sistemas conversacionales, orquestación de agentes, agentes inteligentes"
      : "agentic solutions, agentic architecture, multi-agent systems, living agents, conversational systems, agent orchestration",
    alternates: {
      canonical: `https://n3uralia.com/${locale}/soluciones-agenticas-chile`,
      languages: {
        es: 'https://n3uralia.com/es/soluciones-agenticas-chile',
        en: 'https://n3uralia.com/en/agentic-solutions-chile',
      },
    },
  }
}

export default function SolucionesAgenticasPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{isES ? "Arquitectura" : "Architecture"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight text-balance">
            {isES ? "Soluciones Agenticas para Chile" : "Agentic Solutions for Chile"}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            {isES
              ? "Arquitectura especializada de agentes inteligentes diseñada para las necesidades únicas de empresas chilenas. Sistemas que no solo automatizan, sino que evolucionan y aprenden."
              : "Specialized intelligent agent architecture designed for unique Chilean business needs. Systems that don't just automate, they evolve and learn."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {isES ? "Consultar solución personalizada" : "Consult personalized solution"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Componentes de nuestra arquitectura" : "Our architecture components"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                titleES: "Orquestación Multi-Agente",
                titleEN: "Multi-Agent Orchestration",
                descES: "Múltiples agentes coordinados trabajando en paralelo, resolviendo problemas complejos con inteligencia colectiva.",
                descEN: "Multiple coordinated agents working in parallel, solving complex problems with collective intelligence.",
              },
              {
                icon: Zap,
                titleES: "Living Agents",
                titleEN: "Living Agents",
                descES: "Agentes que aprenden de cada interacción, mejorando continuamente su desempeño y precisión.",
                descEN: "Agents that learn from each interaction, continuously improving performance and accuracy.",
              },
              {
                icon: Shield,
                titleES: "Seguridad Conductual",
                titleEN: "Behavioral Safety",
                descES: "Sistemas diseñados con protocolos de seguridad psicológica y escalamiento a humano cuando es necesario.",
                descEN: "Systems designed with psychological safety protocols and human escalation when needed.",
              },
              {
                icon: TrendingUp,
                titleES: "Medición de Impacto",
                titleEN: "Impact Measurement",
                descES: "Métricas reales de impacto humano: autoeficacia, confianza, aprendizaje, no solo engagement.",
                descEN: "Real human impact metrics: self-efficacy, trust, learning, not just engagement.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Casos de uso comunes en Chile" : "Common use cases in Chile"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { titleES: "Atención al Cliente 24/7", titleEN: "24/7 Customer Support", descES: "Agentes conversacionales multilingües que entienden contexto chileno", descEN: "Multilingual conversational agents that understand Chilean context" },
              { titleES: "Automatización de RR.HH.", titleEN: "HR Automation", descES: "Reclutamiento, onboarding, gestión de beneficios y capacitación", descEN: "Recruitment, onboarding, benefits management and training" },
              { titleES: "Análisis de Datos en Minería", titleEN: "Mining Data Analysis", descES: "Agentes que procesan datos en tiempo real de operaciones mineras", descEN: "Agents processing real-time mining operations data" },
              { titleES: "Logística y Supply Chain", titleEN: "Logistics & Supply Chain", descES: "Optimización de rutas, predicción de demanda, gestión de inventario", descEN: "Route optimization, demand forecasting, inventory management" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-muted/50 rounded-lg border border-border">
                <h3 className="font-bold mb-2">{isES ? item.titleES : item.titleEN}</h3>
                <p className="text-sm text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {isES ? "¿Listo para soluciones agenticas?" : "Ready for agentic solutions?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Contacta a nuestro equipo especializado en arquitectura agentica para empresas chilenas."
              : "Contact our team specialized in agentic architecture for Chilean companies."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            {isES ? "Agendar consulta" : "Schedule consultation"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
