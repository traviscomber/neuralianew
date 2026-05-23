import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale, Dict } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/section-background"
import { SECTORS } from "@/content/sectors"
import { TieredCtas } from "@/components/tiered-ctas"
import { PositioningSection } from "@/components/positioning-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { AgenticEngineeringSection } from "@/components/agentic-engineering-section"
import { HowWeThinkSection } from "@/components/how-we-think-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { DifferentiatorSection } from "@/components/differentiator-section"
import { ForWhoSection } from "@/components/for-who-section"
import { ClosingSection } from "@/components/closing-section"

// VERCEL CACHE BUSTER: v16.0.0-build-error-fixed
// Fixed: Removed conflicting /app/case-studies/[id] directory
// Routes now unified in /app/[locale]/case-studies/[slug]
// /agent-matrix with visual control layer content, /agent-operations with governance content
// Using Array.isArray() validation, inline core features, fallback values, conditional sections
// Both Spanish and English now have complete 4-principle philosophy arrays
// Added error boundary for missing dictionary content

interface PageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "N3uralia | Sistemas Agenticos en Producción - Automatización Empresarial IA",
  description:
    "N3uralia: Orquestación de sistemas agenticos para empresas. Automatiza procesos con inteligencia aumentada. Soluciones para retail, manufactura, servicios financieros, salud, legal y logística.",
  keywords:
    "sistemas agenticos, IA en producción, automatización empresarial, inteligencia aumentada, agentes inteligentes, orquestación multiagente, n3uralia",
  alternates: {
    canonical: "https://n3uralia.com",
    languages: {
      "es-CL": "https://n3uralia.com/es",
      "es": "https://n3uralia.com/es",
      "en": "https://n3uralia.com/en",
      "en-US": "https://n3uralia.com/en",
    },
  },
  openGraph: {
    title: "N3uralia - Automatización Empresarial con Sistemas Agenticos",
    description: "Orquestación de sistemas agenticos listos para producción. Automatiza tus operaciones con IA que evoluciona.",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
  },
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d: Dict = getDict(locale)
  const isES = locale === "es"

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* HERO Section */}
        <HeroBackground className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
          <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
            <div className="max-w-4xl mx-auto text-center w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{d.home.hero.badge}</span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight text-balance text-foreground">
                {d.home.hero.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {d.home.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
                <Link
                  href={`/${locale}/contact`}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {d.home.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={`/${locale}/capabilities`}
                  className="px-8 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  {d.home.hero.ctaSecondary}
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">40+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isES ? "Procesos Automatizados" : "Automated Processes"}
                  </p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">6</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {isES ? "Industrias Servidas" : "Industries Served"}
                  </p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Operación Continua</p>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* POSITIONING Section */}
        <PositioningSection locale={locale} />

        {/* SOLUTIONS BY INDUSTRY Section */}
        <section className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                {isES ? "Soluciones por Industria" : "Solutions by Industry"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {isES 
                  ? "Sistemas inteligentes diseñados para los desafíos específicos de cada sector"
                  : "Intelligent systems designed for each industry's specific challenges"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SECTORS.map((sector, i) => {
                const Icon = sector.icon
                return (
                  <div key={i} className="group p-8 rounded-xl border border-border/50 bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {isES ? sector.titleES : sector.titleEN}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {isES ? sector.descES : sector.descEN}
                    </p>
                    <Link
                      href={sector.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform"
                    >
                      {isES ? "Explorar" : "Explore"} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* WHAT WE DO Section */}
        <WhatWeDoSection locale={locale} />

        {/* AGENTIC ENGINEERING Section */}
        <AgenticEngineeringSection locale={locale} d={d} />

        {/* HOW WE THINK Section */}
        <HowWeThinkSection locale={locale} />

        {/* ARCHITECTURE Section */}
        <ArchitectureSection locale={locale} />

        {/* DIFFERENTIATOR Section */}
        <DifferentiatorSection locale={locale} />

        {/* FOR WHO Section */}
        <ForWhoSection locale={locale} />

        {/* CLIENTS Section */}
        <section className="py-24 px-4 border-t border-border bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{d.home.clients.title}</h2>
              <p className="text-lg text-muted-foreground">
                {d.home.clients.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Ecosuelolab */}
              <Link href={`/${locale}/case-studies/ecosuelolab`} className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-28 bg-transparent rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/30 transition-colors p-4">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Ecosuelo-Lab-YhDOpB1n3bU46r024IudPBQGVbR9bP.png" 
                      alt="Ecosuelolab logo" 
                      width={100}
                      height={30}
                      className="h-28 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {d.home.clients.ecosuelolab.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {d.home.clients.ecosuelolab.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {isES ? "Ver Caso" : "View Case"} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Despega Tu Carrera */}
              <Link href={`/${locale}/case-studies/despega-tu-carrera`} className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-28 bg-transparent rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/30 transition-colors p-4">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Feb%2026%2C%202026%2C%2009_54_59%20PM-fWTmMDI0CLW6YpTRKICd8gEvwzZHI0.png" 
                      alt="Despega Tu Carrera logo" 
                      width={150}
                      height={150}
                      className="h-28 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {d.home.clients.despega.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {d.home.clients.despega.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {isES ? "Ver Caso" : "View Case"} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Blackswan */}
              <Link href={`/${locale}/case-studies/blackswan-facility-core`} className="group">
                <div className="h-full p-8 rounded-lg border border-border/50 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all hover:shadow-md">
                  <div className="w-full h-28 bg-transparent rounded-lg flex items-center justify-center mb-6 group-hover:bg-muted/30 transition-colors p-4">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bslogo-4dAYU7iH5JIRxGvWqE5k75H5ciyXQ8.png" 
                      alt="Blackswan logo" 
                      width={120}
                      height={100}
                      className="h-28 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {d.home.clients.blackswan.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {d.home.clients.blackswan.desc}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    {isES ? "Ver Caso" : "View Case"} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-16">
              <Link
                href={`/${locale}/case-studies`}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                {d.home.clients.viewAll}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CLOSING Section */}
        <ClosingSection locale={locale} />
      </main>

      <TieredCtas locale={locale} />

      <Footer />
    </>
  )
}
