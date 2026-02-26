import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Zap, Users, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/layout/footer"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Casos de Éxito - Sistemas Agenticos en Producción | N3uralia",
    en: "Case Studies - Agentic Systems in Production | N3uralia",
  }

  const descriptions = {
    es: "Descubre cómo empresas líderes transformaron sus operaciones con N3uralia. Ecosuelolab: 100% automatización agrícola. Despega Tu Carrera: 10K+ usuarios.",
    en: "Discover how leading companies transformed their operations with N3uralia. Real results: 100% automation, 10K+ users, 40% efficiency.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function CaseStudiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const caseStudies = [
    {
      id: "ecosuelolab",
      titleES: "Ecosuelolab",
      titleEN: "Ecosuelolab",
      subtitleES: "Monitoreo Agrícola Automatizado",
      subtitleEN: "Automated Agricultural Monitoring",
      client: "Ecosuelolab",
      industryES: "Agricultura",
      industryEN: "Agriculture",
      icon: Zap,
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png",
      challengeES: "Monitoreo manual de suelo con alertas lentas y procesos desconectados",
      challengeEN: "Manual soil monitoring with slow alerts and disconnected processes",
      solutionES: "Agentes IA + API Irriwatch + WhatsApp. Alertas satellitales automáticas 24/7 directas al agricultor.",
      solutionEN: "AI Agents + Irriwatch API + WhatsApp. Automated 24/7 satellite alerts directly to farmers.",
      results: [
        {
          metric: "100%",
          labelES: "Automático",
          labelEN: "Automated",
        },
        {
          metric: "24/7",
          labelES: "Monitoreo",
          labelEN: "Monitoring",
        },
        {
          metric: isES ? "Segundos" : "Seconds",
          labelES: "Latencia",
          labelEN: "Latency",
        },
      ],
      tagsES: ["Integración API", "Agentes IA", "Agricultura"],
      tagsEN: ["API Integration", "AI Agents", "Agriculture"],
      color: "from-green-500 to-emerald-600",
      href: href("/case-studies/ecosuelolab"),
    },
    {
      id: "despega-tu-carrera",
      titleES: "Despega Tu Carrera",
      titleEN: "Despega Tu Carrera",
      subtitleES: "Plataforma Fullstack de Coaching IA",
      subtitleEN: "Full-Stack AI Coaching Platform",
      client: "Despega Tu Carrera",
      industryES: "Educación & Coaching",
      industryEN: "Education & Coaching",
      icon: Users,
      logo: "/logos/despega-tu-carrera-logo.jpg",
      challengeES: "Coaching personal a escala requería infraestructura completa desde cero",
      challengeEN: "Personal coaching at scale required complete infrastructure from scratch",
      solutionES: "Fullstack development: Tests psicométricos + Biblioteca de recursos + Coach IA conversacional. 10,000+ usuarios activos.",
      solutionEN: "Full-stack development: Psychometric tests + Resource library + Conversational AI coach. 10,000+ active users.",
      results: [
        {
          metric: "10K+",
          labelES: "Usuarios",
          labelEN: "Users",
        },
        {
          metric: "95%",
          labelES: "Satisfacción",
          labelEN: "Satisfaction",
        },
        {
          metric: isES ? "Semanas" : "Weeks",
          labelES: "Implementación",
          labelEN: "Deployment",
        },
      ],
      tagsES: ["Fullstack", "Coaching IA", "Educación"],
      tagsEN: ["Full-stack", "AI Coaching", "Education"],
      color: "from-blue-500 to-cyan-600",
      href: href("/case-studies/despega-tu-carrera"),
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero */}
      <section className="px-4 mb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            {isES ? "Casos de Éxito" : "Case Studies"}
          </h1>
          <p className="text-xl text-muted-foreground">
            {isES 
              ? "Cómo empresas reales transforman con sistemas agenticos"
              : "How real companies transform with agentic systems"}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.id} href={study.href}>
              <Card className="group cursor-pointer hover:shadow-lg transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {isES ? study.titleES : study.titleEN}
                    </h3>
                    <p className="text-muted-foreground">
                      {isES ? study.subtitleES : study.subtitleEN}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {isES ? "Desafío" : "Challenge"}
                      </p>
                      <p className="text-sm">
                        {isES ? study.challengeES : study.challengeEN}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-2">
                        {isES ? "Solución" : "Solution"}
                      </p>
                      <p className="text-sm">
                        {isES ? study.solutionES : study.solutionEN}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-3">
                        {isES ? "Resultados" : "Results"}
                      </p>
                      <div className="grid grid-cols-3 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center">
                            <p className="font-bold text-lg text-primary">{result.metric}</p>
                            <p className="text-xs text-muted-foreground">
                              {isES ? result.labelES : result.labelEN}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {(isES ? study.tagsES : study.tagsEN).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    {isES ? "Ver caso completo" : "View full case"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
