import Link from "next/link"
import { ArrowRight, ArrowLeft, Briefcase } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Casos de Estudio | Centro de Aprendizaje N3uralia",
  description: "Casos reales de empresas que han transformado sus operaciones con sistemas inteligentes y Agentic AI.",
  keywords: "casos de estudio, empresas, transformación digital, agentic ai, resultados, n3uralia",
  openGraph: {
    title: "Casos de Estudio | N3uralia",
    description: "Ejemplos reales de éxito en implementación de IA",
    type: "website",
    locale: "es_CL",
  },
}

const caseStudies = [
  {
    id: "case-1",
    slug: "production-grade-agentic-systems",
    title: "Sistemas Agentic en Producción Grade",
    company: "Empresa de Tecnología",
    challenge: "Automatizar procesos complejos de orquestación en tiempo real",
    result: "85% reducción en tiempo de procesamiento, 99.9% uptime",
    description:
      "Cómo una empresa líder implementó sistemas agentic autónomos para orquestar miles de procesos diarios con precision enterprise-grade.",
  },
  {
    id: "case-2",
    slug: "integracion-legacy",
    title: "Integración con Sistemas Legacy",
    company: "Banco Regional",
    challenge: "Modernizar infraestructura de 20 años sin disrupciones",
    result: "Migración exitosa, 40% mejora en performance",
    description: "Estrategia probada para integrar IA moderna con sistemas existentes manteniendo continuidad operacional.",
  },
  {
    id: "case-3",
    slug: "manufacturing-automation",
    title: "Automatización en Manufactura",
    company: "Empresa Industrial",
    challenge: "Reducir defectos y optimizar producción",
    result: "32% reducción de defectos, 28% aumento de capacidad",
    description:
      "Sistema de agentes que aprenden de cada ciclo de producción, mejorando continuamente calidad y eficiencia.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-40 pb-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/learning-hub" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Volver al Centro de Aprendizaje
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Casos de Estudio</span>
          </div>

          <h1 className="h1-light mb-6 text-foreground">Resultados en el Mundo Real</h1>
          <p className="body-lg text-muted-foreground max-w-2xl mb-8">
            Descubre cómo empresas de diferentes industrias han transformado sus operaciones con sistemas inteligentes.
            Analiza desafíos, soluciones implementadas y resultados medibles.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/studies/${caseStudy.slug}`}
                className="group p-8 border border-border rounded-lg hover:border-primary/40 bg-card hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>

                <h3 className="h3 text-foreground mb-2">{caseStudy.title}</h3>
                <p className="text-sm font-medium text-primary mb-4">{caseStudy.company}</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Desafío</p>
                    <p className="body text-muted-foreground text-sm">{caseStudy.challenge}</p>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Resultado</p>
                    <p className="body text-foreground text-sm font-medium">{caseStudy.result}</p>
                  </div>
                </div>

                <p className="body text-muted-foreground text-sm mb-6">{caseStudy.description}</p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Leer Caso Completo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request Case Study */}
      <section className="py-20 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">¿Tu Industria No Está Aquí?</h2>
          <p className="body-lg text-muted-foreground mb-8">
            Contacta con nuestro equipo para discutir cómo los sistemas inteligentes pueden transformar tu negocio específico.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium transition-colors"
          >
            Agendar Consulta
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
