import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  ArrowRight,
  Bot,
  Building2,
  Code2,
  Cpu,
  Package,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react"
import { HeroBackground } from "@/components/section-background"
import { HomePageClient } from "@/components/home/home-page-client"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

type Sector = {
  title: string
  description: string
  icon: typeof Package
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "N3uralia | IA y software para operaciones reales - Chile y LATAM",
    en: "N3uralia | AI and software for real operations - Chile and LATAM",
  }

  const descriptions = {
    es: "N3uralia construye sistemas de IA y software operativo para empresas en Chile y LATAM. Infraestructura, no truco. Automatizacion con control, trazabilidad y resultado real.",
    en: "N3uralia builds AI systems and operational software for teams in Chile and LATAM. Infrastructure, not a trick. Automation with control, traceability, and real outcomes.",
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}`,
      languages: {
        es: "https://www.n3uralia.com/es",
        en: "https://www.n3uralia.com/en",
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `https://www.n3uralia.com/${locale}`,
      locale: locale === "es" ? "es_CL" : "en_US",
    },
  }
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === "es"

  const sectors: Sector[] = [
    {
      title: isES ? "Retail y e-commerce" : "Retail and e-commerce",
      description: isES
        ? "Automatizacion de catalogo, operaciones comerciales y soporte al cliente."
        : "Catalog automation, commercial operations, and customer support.",
      icon: Package,
    },
    {
      title: isES ? "Manufactura" : "Manufacturing",
      description: isES
        ? "Flujos operativos, control de calidad y coordinacion entre sistemas."
        : "Operational flows, quality control, and cross-system coordination.",
      icon: Cpu,
    },
    {
      title: isES ? "Servicios financieros" : "Financial services",
      description: isES
        ? "Validaciones, analisis de riesgo y automatizacion de back office."
        : "Validations, risk analysis, and back-office automation.",
      icon: TrendingUp,
    },
    {
      title: isES ? "Hospitality y turismo" : "Hospitality and tourism",
      description: isES
        ? "Experiencias conversacionales, reservas y operaciones 24/7."
        : "Conversational experiences, reservations, and 24/7 operations.",
      icon: Users,
    },
    {
      title: isES ? "Legal y compliance" : "Legal and compliance",
      description: isES
        ? "Revision documental, trazabilidad y procesos auditables."
        : "Document review, traceability, and auditable workflows.",
      icon: Building2,
    },
    {
      title: isES ? "Logistica" : "Logistics",
      description: isES
        ? "Coordinacion operativa, alertas y decisiones sobre demanda."
        : "Operational coordination, alerts, and demand decisions.",
      icon: Workflow,
    },
  ]

  const caseStudies = [
    {
      href: href(locale, "/case-studies/ecosuelolab"),
      title: isES ? "Monitoreo agricola automatizado" : "Automated agricultural monitoring",
      description: isES
        ? "Alertas satelitales y decisiones operativas activadas en minutos."
        : "Satellite alerts and operational decisions triggered within minutes.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png",
      alt: "Ecosuelolab logo",
      width: 100,
      height: 30,
    },
    {
      href: href(locale, "/case-studies/despega-tu-carrera"),
      title: isES ? "Plataforma de coaching con IA" : "AI coaching platform",
      description: isES
        ? "Producto full-stack con experiencias conversacionales y contenido guiado."
        : "A full-stack product with conversational experiences and guided content.",
      image: "/logos/despega-tu-carrera-logo.jpg",
      alt: "Despega Tu Carrera logo",
      width: 180,
      height: 60,
    },
    {
      href: href(locale, "/case-studies/blackswan-facility-core"),
      title: isES ? "Operacion hotelera integrada" : "Integrated hospitality operations",
      description: isES
        ? "Software operativo para equipos que necesitan coordinar mejor y responder mas rapido."
        : "Operational software for teams that need better coordination and faster response times.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bslogo-4dAYU7iH5JIRxGvWqE5k75H5ciyXQ8.png",
      alt: "Blackswan logo",
      width: 120,
      height: 100,
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroBackground className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
          <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
            <div className="max-w-5xl mx-auto text-center w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">
                  {isES ? "Desde Chile para operaciones reales en LATAM" : "From Chile for real operations in LATAM"}
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight text-balance">
                <span className="text-foreground">
                  {isES ? "IA y software para" : "AI and software for"}
                </span>
                <br />
                <span className="text-primary">
                  {isES ? "operaciones que no pueden fallar" : "operations that cannot fail"}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {isES
                  ? "Disenamos sistemas que integran datos, procesos y decisiones para reducir friccion operativa sin perder control. Menos humo, menos piloto infinito, mas arquitectura y mas produccion real."
                  : "We design systems that connect data, processes, and decisions to reduce operational friction without losing control. Less hype, fewer endless pilots, more architecture, more production delivery."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
                <Link
                  href={href(locale, "/contact")}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {isES ? "Agendar diagnostico" : "Book a diagnosis"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={href(locale, "/soluciones")}
                  className="px-8 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  {isES ? "Ver soluciones" : "View solutions"}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    {isES ? "4 semanas" : "4 weeks"}
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isES ? "para un piloto serio" : "to a serious pilot"}
                  </p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">Chile + LATAM</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isES ? "foco comercial" : "commercial focus"}
                  </p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isES ? "operacion continua" : "continuous operation"}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {isES ? "Que construimos" : "What we build"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isES
                  ? "Arquitectura, integracion y software para automatizar trabajo complejo sin perder control."
                  : "Architecture, integration, and software to automate complex work without losing control."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isES ? "Orquestacion operativa" : "Operational orchestration"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES
                    ? "Flujos que conectan equipos, agentes y sistemas en un mismo circuito."
                    : "Flows that connect teams, agents, and systems inside one operating loop."}
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Bot className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isES ? "Agentes con contexto" : "Context-aware agents"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES
                    ? "Sistemas que recuerdan, validan y escalan con guardrails claros."
                    : "Systems that remember, validate, and scale with clear guardrails."}
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Code2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {isES ? "Software de produccion" : "Production software"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES
                    ? "Aplicaciones, APIs e integraciones listas para operar fuera del laboratorio."
                    : "Applications, APIs, and integrations ready to operate outside the lab."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="soluciones" className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {isES ? "Sectores donde ya hace sentido" : "Sectors where this already makes sense"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {isES
                  ? "Partimos por operaciones con volumen, friccion y datos dispersos."
                  : "We start where volume, friction, and scattered data are already creating drag."}
              </p>
              <Link
                href={href(locale, "/soluciones")}
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {isES ? "Explorar soluciones" : "Explore solutions"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <div
                    key={sector.title}
                    className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{sector.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{sector.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {isES ? "Casos en produccion" : "Production case studies"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {isES
                  ? "Software e IA aplicada en proyectos reales, no en demos aisladas."
                  : "Applied AI and software in real projects, not isolated demos."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <Link href={caseStudy.href} className="group" key={caseStudy.href}>
                  <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                    <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors p-4">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.alt}
                        width={caseStudy.width}
                        height={caseStudy.height}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{caseStudy.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      {isES ? "Ver caso" : "View case"}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href={href(locale, "/case-studies")}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                {isES ? "Ver todos los casos" : "View all case studies"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {isES ? "Si tu operacion no puede fallar, conversemos" : "If your operation cannot fail, let us talk"}
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              {isES
                ? "Agenda un diagnostico y te llevas una conversacion tecnica seria, un foco prioritario y una hoja de ruta concreta."
                : "Book a diagnosis and walk away with a serious technical conversation, a priority focus, and a practical roadmap."}
            </p>
            <Link
              href={href(locale, "/contact")}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {isES ? "Agendar diagnostico" : "Book a diagnosis"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <HomePageClient />
    </>
  )
}
