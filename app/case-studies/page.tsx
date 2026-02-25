"use client"

import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Users, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "ecosuelolab",
      title: "Ecosuelolab",
      subtitle: "Monitoreo Agrícola Automatizado",
      client: "Ecosuelolab",
      industry: "Agricultura",
      icon: Zap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png",
      challenge:
        "Monitoreo manual de suelo con alertas lentas y procesos desconectados",
      solution:
        "Agentes IA + API Irriwatch + WhatsApp. Alertas satellitales automáticas 24/7 directas al agricultor.",
      results: [
        {
          metric: "100%",
          label: "Automático",
        },
        {
          metric: "24/7",
          label: "Monitoreo",
        },
        {
          metric: "Segundos",
          label: "Latencia",
        },
      ],
      tags: ["Integración API", "Agentes IA", "Agricultura"],
      color: "from-green-500 to-emerald-600",
      href: "/case-studies/ecosuelolab",
    },
    {
      id: "despega-tu-carrera",
      title: "Despega Tu Carrera",
      subtitle: "Plataforma Fullstack de Coaching IA",
      client: "Despega Tu Carrera",
      industry: "Educación & Coaching",
      icon: Users,
      logo: "/logos/despega-tu-carrera-logo.jpg",
      challenge:
        "Coaching personal a escala requería infraestructura completa desde cero",
      solution:
        "Fullstack development: Tests psicométricos + Biblioteca de recursos + Coach IA conversacional. 10,000+ usuarios activos.",
      results: [
        {
          metric: "10K+",
          label: "Usuarios",
        },
        {
          metric: "95%",
          label: "Satisfacción",
        },
        {
          metric: "50K+",
          label: "Tests",
        },
      ],
      tags: ["Fullstack", "Coach IA", "Plataforma SaaS"],
      color: "from-blue-500 to-cyan-600",
      href: "/case-studies/despega-tu-carrera",
    },
    {
      id: "blackswan-facility-core",
      title: "Blackswan Facility Core",
      subtitle: "Sistema Integrado de Gestión",
      client: "Blackswan",
      industry: "Hospitality & Facilities",
      icon: Building2,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bslogo-4dAYU7iH5JIRxGvWqE5k75H5ciyXQ8.png",
      challenge:
        "Múltiples sistemas desconectados (email, sheets, calendarios) causando ineficiencias operativas",
      solution:
        "BFCS integrado: orquestación de todas las operaciones de propiedades de lujo. Automatización end-to-end con 40% de reducción en tiempo operativo.",
      results: [
        {
          metric: "4h → 15min",
          label: "Response time",
        },
        {
          metric: "40%",
          label: "Eficiencia",
        },
        {
          metric: "80%",
          label: "Proyectado",
        },
      ],
      tags: ["Integración", "Orquestación", "Enterprise"],
      color: "from-purple-500 to-indigo-600",
      href: "/case-studies/blackswan-facility-core",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-background">
        <main>
        {/* Hero Section */}
        <section className="pt-32 pb-24 bg-gradient-to-b from-foreground/5 to-background border-b border-border px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Casos de Éxito</span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
                Historias de Éxito Reales
              </h1>

              <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
                Descubre cómo empresas de diferentes industrias transforman sus operaciones con N3uralia. De agricultura a hospitality, de startups a empresas establecidas.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon
                return (
                  <Link key={study.id} href={study.href}>
                    <Card className="h-full border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-6 h-full flex flex-col">
                        {/* Logo */}
                        <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:bg-muted/50 transition-colors p-3">
                          <Image 
                            src={study.logo} 
                            alt={`${study.title} logo`}
                            width={study.id === 'ecosuelolab' ? 80 : 160}
                            height={study.id === 'ecosuelolab' ? 40 : 80}
                            className="h-20 w-auto object-contain"
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-foreground mb-1">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{study.subtitle}</p>

                        {/* Industry Badge */}
                        <div className="flex gap-2 mb-6">
                          <Badge variant="secondary" className="text-xs">
                            {study.industry}
                          </Badge>
                        </div>

                        {/* Challenge */}
                        <div className="mb-6 flex-1">
                          <p className="text-sm font-semibold text-foreground mb-2">Desafío</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{study.challenge}</p>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-t border-b border-border/50">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-lg font-bold text-primary">{result.metric}</div>
                              <div className="text-xs text-muted-foreground">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Leer Caso Completo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5 border-t border-border px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              ¿Tu empresa podría ser el próximo caso de éxito?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Empresas de todas las industrias están transformando sus operaciones con N3uralia. Hablemos sobre tu visión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/capabilities"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-center"
              >
                Ver Soluciones
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Agendar Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
      </div>
    </>
  )
}
