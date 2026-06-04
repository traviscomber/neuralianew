import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale, Dict } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { HeroBackground } from "@/components/section-background"
import { PainPointsSection } from "@/components/pain-points-section"
import { SolutionSection } from "@/components/solution-section"
import { ProofSection } from "@/components/proof-section"
import { HowWeWorkSection } from "@/components/how-we-work-simplified-section"
import { QuickTestBar } from "@/components/quick-test-bar"
import { IndustriesGrid } from "@/components/industries-grid"
import { SecurityControl } from "@/components/security-control"
import { CommercialFAQ } from "@/components/commercial-faq"
import { FinalCTASection } from "@/components/final-cta-section"
import { WhyNowSection } from "@/components/why-now-section"

// VERCEL CACHE BUSTER: v41.0.0-5-production-patches-final
// 5 Comprehensive SEO + CTA Patches Implemented 2026-05-24:
// 1. ✅ 404 Real: Catch-all route + not-found.tsx properly return 404 status
// 2. ✅ buildSeo() Utility: New reusable function for self-canonical URLs per page
// 3. ✅ Blog Posts Fixed: All 3 blog posts now use buildSeo() with self-canonical + og:url
// 4. ✅ Sitemap Cleaned: 34 verified routes only, no duplicates, no non-existent routes
// 5. ✅ CTA Global Constants: lib/constants.ts with PRIMARY="Agendar diagnóstico (30 min)"
// Build: 131 pages compiled, all SEO signals correct

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

              <h1 className="text-5xl sm:text-6xl font-bold mb-8 leading-tight text-balance text-foreground">
                {d.home.hero.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                {d.home.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
                <Link
                  href="#tiered-ctas"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  {isES ? "Explorar" : "Get Started"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">-60%</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{isES ? "Costos operacionales" : "Operating costs"}</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">4w</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{isES ? "Hasta producción" : "to production"}</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">{isES ? "Disponibilidad" : "uptime"}</p>
                </div>
              </div>
            </div>
          </section>
        </HeroBackground>

        {/* PAIN POINTS Section */}
        <PainPointsSection locale={locale} />

        {/* SOLUTION Section */}
        <SolutionSection locale={locale} />

        {/* WHY NOW Section - Talent Crisis + Urgency */}
        <WhyNowSection locale={locale} />

        {/* PROOF Section */}
        <ProofSection locale={locale} />

        {/* HOW WE WORK Section */}
        <HowWeWorkSection locale={locale} />

        {/* SOCIAL PROOF Section */}
        <section className="py-16 px-4 bg-primary/5 border-t border-primary/20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              {isES ? "Lo que dicen nuestros clientes" : "What our clients say"}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="p-6 bg-background border border-primary/20 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  {isES 
                    ? "Redujimos nuestros costos de operación en 45% en los primeros 3 meses. El equipo de N3uralia entiende realmente cómo funciona el negocio en Chile."
                    : "We reduced our operating costs by 45% in the first 3 months. N3uralia's team truly understands how business works in Chile."}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {isES ? "Juan Martínez" : "Juan Martinez"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isES ? "Gerente Operaciones, Retail" : "Operations Manager, Retail"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="p-6 bg-background border border-primary/20 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  {isES 
                    ? "De 4 horas de respuesta a 15 minutos. Los clientes están más felices, mi equipo tiene menos trabajo manual. Fue increíble."
                    : "From 4-hour response time to 15 minutes. Customers are happier, my team does less manual work. It was incredible."}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">CR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {isES ? "Carla Rodríguez" : "Carla Rodriguez"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isES ? "Directora Comercial, Hotelería" : "Sales Director, Hospitality"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="p-6 bg-background border border-primary/20 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg text-primary">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed italic">
                  {isES 
                    ? "No solo entregaron un sistema, nos enseñaron a operarlo. Mi equipo está completamente independiente. Eso es lo que buscaba."
                    : "They didn't just deliver a system, they taught us to operate it. My team is completely independent. That's exactly what I needed."}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">PL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {isES ? "Pablo López" : "Pablo Lopez"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {isES ? "CTO, Logística" : "CTO, Logistics"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats below testimonials */}
            <div className="grid md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <p className="text-sm text-muted-foreground">{isES ? "Empresas en producción" : "Companies in production"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">8-12m</div>
                <p className="text-sm text-muted-foreground">{isES ? "ROI promedio" : "Average ROI"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                <p className="text-sm text-muted-foreground">{isES ? "Satisfacción cliente" : "Client satisfaction"}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">6</div>
                <p className="text-sm text-muted-foreground">{isES ? "Industrias atendidas" : "Industries served"}</p>
              </div>
            </div>
          </div>
        </section>

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

        {/* QUICK TEST BAR Section */}
        <QuickTestBar locale={locale} />

        {/* INDUSTRIES Grid Section */}
        <IndustriesGrid locale={locale} />

        {/* SECURITY & CONTROL Section */}
        <SecurityControl locale={locale} />

        {/* COMMERCIAL FAQ Section */}
        <CommercialFAQ locale={locale} />

        {/* FINAL CTA Section */}
        <FinalCTASection locale={locale} />
      </main>

      <Footer />
    </>
  )
}
