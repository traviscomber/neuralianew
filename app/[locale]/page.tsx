import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Package, Cpu, TrendingUp, Users, Building2, Workflow } from "lucide-react"
import type { Metadata } from "next"
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
    es: "N3uralia | Sistemas Agenticos en Producción - Automatización Empresarial IA",
    en: "N3uralia | Agentic Systems in Production - Enterprise AI Automation",
  }

  const descriptions = {
    es: "N3uralia: Orquestación de sistemas agenticos para empresas. Automatiza procesos con inteligencia aumentada. Soluciones para retail, manufactura, servicios financieros, salud, legal y logística.",
    en: "N3uralia: Enterprise agentic systems orchestration. Automate processes with augmented intelligence. Solutions for retail, manufacturing, financial services, healthcare, legal and logistics.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'
  const href = (path: string) => `/${locale}${path}`

  const sectors = {
    es: [
      { title: "Retail & E-commerce", desc: "Recomendaciones personalizadas, gestión de inventario, servicio al cliente 24/7", icon: Package },
      { title: "Manufactura", desc: "Optimización de procesos, control de calidad, mantenimiento predictivo", icon: Cpu },
      { title: "Servicios Financieros", desc: "Análisis de riesgo, detección de fraude, asesoría personalizada", icon: TrendingUp },
      { title: "Salud", desc: "Análisis de documentos, triaje de pacientes, gestión de citas", icon: Users },
      { title: "Legal", desc: "Revisión de contratos, investigación legal, cumplimiento normativo", icon: Building2 },
      { title: "Logística", desc: "Optimización de rutas, predicción de demanda, automatización de almacén", icon: Workflow },
    ],
    en: [
      { title: "Retail & E-commerce", desc: "Personalized recommendations, inventory management, 24/7 customer service", icon: Package },
      { title: "Manufacturing", desc: "Process optimization, quality control, predictive maintenance", icon: Cpu },
      { title: "Financial Services", desc: "Risk analysis, fraud detection, personalized advisory", icon: TrendingUp },
      { title: "Healthcare", desc: "Document analysis, patient triage, appointment management", icon: Users },
      { title: "Legal", desc: "Contract review, legal research, regulatory compliance", icon: Building2 },
      { title: "Logistics", desc: "Route optimization, demand forecasting, warehouse automation", icon: Workflow },
    ],
  }

  const labels = {
    badge: isES ? "Sistemas Agenticos en Producción" : "Agentic Systems in Production",
    line1: isES ? "De la Experimentación" : "From Experimentation",
    line2: isES ? "a la Automatización Empresarial" : "to Enterprise Automation",
    desc: isES 
      ? "Orquestación de sistemas agenticos que integran, escalan y evolucionan. Tu operación con inteligencia aumentada, lista para producción desde el día uno."
      : "Agentic systems orchestration that integrate, scale and evolve. Your operations with augmented intelligence, production-ready from day one.",
    cta1: isES ? "Comenzar" : "Get Started",
    cta2: isES ? "Explorar Soluciones" : "Explore Solutions",
    sectorsTitle: isES ? "Para Todos los Sectores" : "For All Industries",
    sectorsDesc: isES ? "N3uralia funciona en cualquier industria" : "N3uralia works across all industries",
  }

  const currentSectors = isES ? sectors.es : sectors.en

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-16 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{labels.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight text-balance">
            <span className="text-foreground">{labels.line1}</span>
            <br />
            <span className="text-primary">{labels.line2}</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {labels.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
            <Link
              href={href("/contact")}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {labels.cta1} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={href("/soluciones")}
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
            >
              {labels.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24 bg-muted/30 border-y border-border px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{labels.sectorsTitle}</h2>
            <p className="text-xl text-muted-foreground">{labels.sectorsDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSectors.map((sector, i) => {
              const Icon = sector.icon
              return (
                <div key={i} className="p-6 rounded-lg border border-border bg-background hover:border-primary/50 hover:shadow-lg transition-all">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{sector.title}</h3>
                  <p className="text-sm text-muted-foreground">{sector.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
                  Comenzar Hoy
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/capabilities"
                  className="px-8 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  Ver Capacidades
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">40+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Procesos Automatizados</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">6</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Industrias Servidas</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Operación Continua</p>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* 2. WHAT WE DO Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">¿Qué es N3uralia?</h2>
              <p className="text-lg text-muted-foreground">
                Construimos la arquitectura que falta. Un orquestador central que coordina agentes especializados, 
                integra tus sistemas existentes y evoluciona con tu negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Orquestación</h3>
                <p className="text-sm text-muted-foreground">Coordina múltiples agentes y sistemas en un solo flujo inteligente</p>
              </div>

              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Bot className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Agentes Evolucionan</h3>
                <p className="text-sm text-muted-foreground">Aprenden de cada interacción y mejoran automáticamente con el tiempo</p>
              </div>

              <div className="p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 transition-colors">
                <Code2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Integración Total</h3>
                <p className="text-sm text-muted-foreground">Se adapta a tu stack existente sin disrupciones. Zero rewrite.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SECTORS Section - Links to /soluciones */}
        <section id="soluciones" className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Soluciones por Industria</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Automatización especializada para los desafíos únicos de tu sector
              </p>
              <Link 
                href="/soluciones"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Explorar Todas las Soluciones
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.slice(0, 6).map((sector, i) => {
                const Icon = sector.icon
                return (
                  <div key={i} className="p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. CLIENTS Section */}
        <section className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Confían en N3uralia</h2>
              <p className="text-lg text-muted-foreground">
                Empresas líderes transforman sus operaciones con nuestros sistemas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Ecosuelolab */}
              <Link href="/case-studies/ecosuelolab" className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors p-4">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png" 
                      alt="Ecosuelolab logo" 
                      width={100}
                      height={30}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Monitoreo Agrícola Automatizado
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Automatización 100% de alertas satelitales con integración API + WhatsApp. Latencia en segundos.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver Caso <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Despega Tu Carrera */}
              <Link href="/case-studies/despega-tu-carrera" className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors p-4">
                    <Image 
                      src="/logos/despega-tu-carrera-logo.jpg" 
                      alt="Despega Tu Carrera logo" 
                      width={180}
                      height={60}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Plataforma de Coaching IA
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Fullstack development con coach IA conversacional, tests psicométricos y biblioteca de recursos. 10K+ usuarios.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver Caso <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Blackswan */}
              <Link href="/case-studies/blackswan-facility-core" className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-24 bg-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/80 transition-colors p-4">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bslogo-4dAYU7iH5JIRxGvWqE5k75H5ciyXQ8.png" 
                      alt="Blackswan logo" 
                      width={120}
                      height={100}
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Sistema de Gestión Integrado
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    BFCS orquestado para hoteles de lujo. 40% reducción en tiempo operativo. Response time: 4h → 15min.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Ver Caso <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-16">
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                Ver Todos los Casos de Éxito
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-20 px-4 border-t border-border bg-background">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Tu industria requiere automatización?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Hablemos sobre cómo N3uralia puede transformar tus operaciones.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Agendar Conversación
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <HomePageClient />
    </>
  )
}
