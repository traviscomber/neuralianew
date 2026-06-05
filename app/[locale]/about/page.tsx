import { Zap, Shield, Users, Target, TrendingUp, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { getDict } from "@/content/dictionaries"
import { BillingualSection, SectionHeader, ValueCard, PhilosophyItem } from "@/components/bilingual-section"
import { Footer } from "@/components/layout/footer"
import { generatePageMetadata } from "@/lib/metadata-utils"

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return generatePageMetadata({
    title: isES ? "Acerca de N3uralia - Plataforma de Sistemas Agenticos en Producción" : "About N3uralia - Agentic Systems Platform for Production",
    description: isES
      ? "Conoce la filosofía de N3uralia: por qué construimos una plataforma diferente de sistemas agenticos. Nuestra misión, visión y valores. Inteligencia aumentada para empresas."
      : "Discover N3uralia's philosophy: why we built a different agentic systems platform. Our mission, vision, and values. Augmented intelligence for enterprises.",
    keywords: isES
      ? "acerca de n3uralia, misión, visión, valores, sistemas agenticos, IA aumentada, inteligencia artificial, agentes inteligentes, Chile LATAM"
      : "about n3uralia, mission, vision, values, agentic systems, augmented AI, artificial intelligence, intelligent agents",
    canonical: `https://n3uralia.com/${locale}/about`,
    locale,
  })
}

export default function AboutPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const d = getDict(locale)
  const about = d.about
  const isES = locale === "es"

  const iconArray = [Zap, Users, Shield, Target]

  const team = isES ? [
    {
      name: "Equipo con 12+ años",
      desc: "Implementando sistemas de IA en operaciones críticas. No es nuestro primer rodeo—es nuestra especialidad."
    },
    {
      name: "100% local",
      desc: "Santiago, Chile. Entendemos LATAM, fusoshorarios, regulaciones y realidades de empresas en la región."
    },
    {
      name: "Sin dependencias",
      desc: "Te entregamos el código fuente, la documentación y el conocimiento. Tu equipo es dueño del sistema."
    },
  ] : [
    {
      name: "Team with 12+ years",
      desc: "Implementing AI systems in critical operations. It's not our first rodeo—it's our specialty."
    },
    {
      name: "100% local",
      desc: "Santiago, Chile. We understand LATAM, timezones, regulations and realities of enterprises in the region."
    },
    {
      name: "No dependencies",
      desc: "We deliver you the source code, documentation and knowledge. Your team owns the system."
    },
  ]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        {/* Hero */}
        <section className="py-24 pt-32 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {about.whoWeAre}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground text-balance">{about.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.description}
            </p>
          </div>
        </section>

        {/* Why We Exist */}
        <section className="py-24 px-4 bg-background border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <SectionHeader 
              tag={isES ? "Nuestra Misión" : "Our Mission"}
              title={isES ? "¿Por qué existimos?" : "Why do we exist?"}
            />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {isES
                ? "Porque el mundo confunde agentes IA con chatbots. Porque hace falta una plataforma que REALMENTE integre datos, procesos y decisiones. Porque las empresas merecen IA que funciona en producción, no en demos."
                : "Because the world confuses AI agents with chatbots. Because we need a platform that TRULY integrates data, processes and decisions. Because enterprises deserve AI that works in production, not in demos."}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-primary/30 rounded-lg bg-primary/5">
                <Lightbulb className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {isES ? "El Problema" : "The Problem"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES
                    ? "La IA está fragmentada. Agentes aquí, LLMs allá, datos en otro lado. Ninguno habla con el otro. El resultado: soluciones hermosas que no funcionan en producción."
                    : "AI is fragmented. Agents here, LLMs there, data somewhere else. None talk to each other. Result: beautiful solutions that don't work in production."}
                </p>
              </div>
              <div className="p-6 border border-primary/30 rounded-lg bg-primary/5">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {isES ? "Nuestra Respuesta" : "Our Answer"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isES
                    ? "Infraestructura integrada. Agentes vivos que recuerdan, sistemas conectados, decisiones auditables. Desde el día 1, tus procesos críticos funcionan."
                    : "Integrated infrastructure. Living agents that remember, connected systems, auditable decisions. From day 1, your critical processes work."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <BillingualSection section="workflow">
          <section className="py-24 bg-background border-t border-border px-4">
            <div className="container mx-auto max-w-3xl">
              <div className="mb-20">
                <SectionHeader tag={about.ourWhy} title={about.visionTitle} />
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {about.visionP1}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {about.visionP2}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {about.visionP3}
                </p>
              </div>
            </div>
          </section>
        </BillingualSection>

        {/* Philosophy Section */}
        <BillingualSection section="solutions">
          <section className="py-24 px-4 bg-background border-t border-border">
            <div className="container mx-auto max-w-3xl">
              <div className="mb-20">
                <SectionHeader tag={about.ourPhilosophy} title={about.howWethinkDifferent} />
                <div className="space-y-8">
                  {about.philosophy.map((item, i) => (
                    <PhilosophyItem key={i} title={item.num} description={item.desc} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </BillingualSection>

        {/* Values Section */}
        <BillingualSection section="capabilities" borderPosition="border-t">
          <section className="py-24 px-4 bg-background">
            <div className="container mx-auto">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <SectionHeader
                  tag={about.ourApproach}
                  title={about.howWeWork}
                  subtitle={about.workingDaily}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {about.values.map((value, i) => {
                  const Icon = iconArray[i] || Zap
                  return (
                    <ValueCard
                      key={i}
                      icon={<Icon className="w-10 h-10" />}
                      title={value.title}
                      description={value.desc}
                    />
                  )
                })}
              </div>
            </div>
          </section>
        </BillingualSection>

        {/* Team Section */}
        <section className="py-24 px-4 bg-background border-t border-border">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {isES ? "Quiénes somos" : "Who we are"}
              </h2>
              <p className="text-muted-foreground">
                {isES
                  ? "Un equipo que construye infraestructura operativa, no ilusiones de IA."
                  : "A team that builds operational infrastructure, not AI illusions."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((item, i) => (
                <div key={i} className="p-6 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-4 bg-primary/5 border-t border-border">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {isES ? "Nuestro Impacto" : "Our Impact"}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm font-medium text-foreground">{isES ? "Empresas" : "Companies"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "En producción" : "In production"}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <p className="text-sm font-medium text-foreground">{isES ? "Años" : "Years"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Implementando IA" : "Implementing AI"}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm font-medium text-foreground">{isES ? "Auditable" : "Auditable"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Decisiones verificables" : "Verifiable decisions"}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <p className="text-sm font-medium text-foreground">{isES ? "Downtime" : "Downtime"}</p>
                <p className="text-xs text-muted-foreground">{isES ? "Sistemas 24/7" : "24/7 Systems"}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-24 px-4 bg-background border-t border-border">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              {isES ? "¿Te suena familiar?" : "Does this sound familiar?"}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {about.closing}
            </p>
            <Link href={isES ? "/es/contact" : "/en/contact"} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all font-medium">
              {isES ? "Hablemos de tu operación" : "Let's talk about your operations"}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
