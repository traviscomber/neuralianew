import { Zap, Shield, Users, Target } from "lucide-react"
import type { Metadata } from "next"
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

  const iconArray = [Zap, Users, Shield, Target]

  return (
    <>
      <main className="min-h-screen pt-16 bg-background">
        <BillingualSection section="hero">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 text-center max-w-3xl">
              <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
                {about.whoWeAre}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">{about.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about.description}
              </p>
            </div>
          </section>
        </BillingualSection>

        <BillingualSection section="workflow">
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4 max-w-3xl">
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

        <BillingualSection section="solutions">
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-3xl">
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

        <BillingualSection section="capabilities" borderPosition="border-t">
          <section className="py-24">
            <div className="container mx-auto px-4">
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

        <section className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {about.closing}
            </p>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  )
}
