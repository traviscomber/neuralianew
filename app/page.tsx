import Link from "next/link"
import { ArrowRight, Lightbulb, Zap, Target, Users, Network, Sparkles, Shield, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"
import {
  heroContent,
  corePillars,
  methodologySteps,
  toolsVsArchitecture,
  coreOfferings,
  whatWeBuild,
  whatIsN3uralia,
  callsToAction,
  contextualCTAs,
} from "@/app/constants/content"
import { HomePageClient } from "@/components/home/home-page-client"
import { ValueProposition } from "@/components/home/value-proposition"
import { CTAButton, CTAGroup } from "@/components/cta-button"
import { ClientsSection } from "@/components/home/clients-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ContextualCTA } from "@/components/contextual-cta"
import {
  HeroBackground,
  CapabilitiesBackground,
  SolutionsBackground,
  WorkflowBackground,
} from "@/components/section-background"

export const metadata: Metadata = {
  title: "N3uralia | Sistemas Agenticos en Producción - Automatización Empresarial IA",
  description:
    "N3uralia: Plataforma de sistemas agenticos listos para producción. Automatiza procesos empresariales con inteligencia aumentada. Arquitectura agnóstica, gobernanza, memoria persistente. Para B2B, retail, manufactura. Chile y LATAM.",
  keywords:
    "sistemas agenticos, IA en producción, automatización empresarial, inteligencia aumentada, agentes inteligentes, orquestación multiagente, n3uralia, automatización procesos, IA Chile, LATAM, empresa AI",
  alternates: {
    canonical: "https://n3uralia.com",
    languages: {
      "es-CL": "https://n3uralia.com",
      "es": "https://n3uralia.com",
      "en": "https://n3uralia.com",
      "en-US": "https://n3uralia.com",
    },
  },
  openGraph: {
    title: "N3uralia - Automatización Empresarial y Sistemas Agenticos en Producción",
    description: "Automatización estructural más sistemas agenticos. N3uralia orquesta tus procesos empresariales con inteligencia.",
    type: "website",
    locale: "es_CL",
    localeAlternate: ["en_US", "es_ES"],
    url: "https://n3uralia.com",
    siteName: "N3uralia",
  },
}

const iconMap: Record<string, any> = {
  Lightbulb,
  Zap,
  Target,
  Users,
  Network,
  Sparkles,
  Shield,
  CheckCircle2,
}

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* 1. HERO Section */}
        <HeroBackground className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
          <section className="min-h-screen flex items-center justify-center pt-32 pb-16 px-4">
            <div className="max-w-5xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">{heroContent.badge}</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold mb-8 leading-tight text-balance">
            <span className="text-foreground">{heroContent.heading.line1}</span>
            <br />
            <span className="text-primary">{heroContent.heading.line2}</span>
          </h1>

          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {heroContent.subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
            <ContextualCTA 
              primary={contextualCTAs.hero.primary}
              secondary={contextualCTAs.hero.secondary}
              primaryLink={contextualCTAs.hero.primaryLink}
              secondaryLink={contextualCTAs.hero.secondaryLink}
              context="hero"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
            {heroContent.metrics.map((metric, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <p className="text-xs sm:text-sm text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </HeroBackground>

      {/* NEW: VALUE PROPOSITION Section */}
      <ValueProposition />

      {/* NEW: CLIENTS & RESULTS Section */}
      <ClientsSection />

      {/* 2. CORE PILLARS Section */}
      <CapabilitiesBackground className="py-20 px-4 border-t border-border">
        <section className="py-20 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Por Qué N3uralia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cuatro diferenciadores que nos hacen únicos en el ecosistema de IA empresarial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {corePillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon]
              return (
                <div key={i} className="p-8 rounded-lg border border-border/60 bg-card hover:border-primary/40 hover:bg-primary/2 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      </CapabilitiesBackground>

      {/* 3. METHODOLOGY Section */}
      <WorkflowBackground className="py-20 px-4 border-t border-border">
        <section className="py-20 px-4 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Enfoque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Cinco pasos claros desde estrategia hasta operación sostenible. Cada fase con métricas definidas y comunicación transparente.
            </p>
            <ContextualCTA 
              primary={contextualCTAs.methodology.primary}
              secondary={contextualCTAs.methodology.secondary}
              primaryLink={contextualCTAs.methodology.primaryLink}
              secondaryLink={contextualCTAs.methodology.secondaryLink}
              context="methodology"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {methodologySteps.map((step, i) => (
              <div key={i} className="flex flex-col p-6 rounded-lg border border-border/50 bg-background hover:border-primary/40 hover:bg-primary/3 transition-all duration-300 group">
                <div className="text-3xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">{step.num}</div>
                <h3 className="font-semibold text-sm mb-2 text-foreground leading-snug group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </WorkflowBackground>

      {/* 4. PHILOSOPHY Section */}
      <SolutionsBackground className="py-20 px-4 border-t border-border">
        <section className="py-20 px-4 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Tools vs Architecture */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">{toolsVsArchitecture.leftTitle}</h2>
                <div className="space-y-4">
                  {toolsVsArchitecture.comparison.map((item, i) => (
                    <div key={i} className="pb-4 border-b border-border/30">
                      <p className="text-sm font-semibold text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Our Beliefs */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">{toolsVsArchitecture.rightTitle}</h2>
                <ul className="space-y-3">
                  {toolsVsArchitecture.beliefs.map((belief, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold text-lg">{belief.num}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{belief.title}</p>
                        <p className="text-muted-foreground text-sm">{belief.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </SolutionsBackground>

      {/* 5. CORE OFFERINGS Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Nuestros Pilares
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">Lo Que Construimos</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Dos ofertas complementarias que forman la base de N3uralia: arquitectura que funciona en el mundo real, y agentes que evolucionan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreOfferings.map((offering, i) => {
              const Icon = iconMap[offering.icon]
              return (
                <Link key={i} href={offering.link} className="group">
                  <div className="border-2 border-primary rounded-lg p-10 bg-card hover:bg-primary/5 transition-all h-full cursor-pointer">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="body text-muted-foreground mb-6 leading-relaxed">{offering.description}</p>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                      <CTAButton 
                        href={offering.link}
                        label={offering.linkText}
                        variant="tertiary"
                        icon={true}
                      />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. WHAT WE BUILD DETAILS Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Qué Construimos</h2>
            <p className="body text-muted-foreground">
              No desarrollamos productos aislados. Construimos sistemas de inteligencia que se integran a operaciones existentes y evolucionan con el tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeBuild.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <div key={i} className="border border-border/60 rounded-lg p-8 bg-card hover:border-primary/40 hover:shadow-md hover:bg-primary/2 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. WHAT IS N3URALIA Section + CTA */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">{whatIsN3uralia.mainHeading}</h2>
          <h3 className="text-xl font-semibold text-primary mb-6">{whatIsN3uralia.mainDescription}</h3>
          
          <p className="body text-muted-foreground mb-12">
            {whatIsN3uralia.fullDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {whatIsN3uralia.cards.map((card, i) => (
              <div key={i} className="border border-border/60 rounded-lg p-6 bg-card hover:border-primary/40 hover:bg-primary/2 transition-all duration-300 group">
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{card.title}</h4>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

      {/* NEW: TESTIMONIALS Section */}
      <TestimonialsSection />

      {/* CTA Section */}
          <div className="text-center py-12 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">¿Listo para Construir Diferente?</h2>
            <p className="body text-muted-foreground mb-10">
              Explora nuestras capacidades técnicas o contacta directamente para ver cómo podemos ayudarte.
            </p>
            <ContextualCTA 
              primary={contextualCTAs.footer.primary}
              secondary={contextualCTAs.footer.secondary}
              primaryLink={contextualCTAs.footer.primaryLink}
              secondaryLink={contextualCTAs.footer.secondaryLink}
              context="footer"
            />
          </div>
        </div>
      </section>
    </main>

    <HomePageClient />
    </>
  )
}
