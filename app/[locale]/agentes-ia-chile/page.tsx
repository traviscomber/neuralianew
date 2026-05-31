import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react'
import { isValidLocale, DEFAULT_LOCALE } from '@/lib/get-locale'
import type { Locale } from '@/content/dictionaries'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

interface PageProps {
  params: { locale: string }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return {
    title: isES 
      ? "Agentes de IA para Empresas en Chile | N3uralia - Ahorros hasta 70%"
      : "AI Agents for Businesses in Chile | N3uralia - Up to 70% Savings",
    description: isES
      ? "Automatización inteligente con agentes IA para empresas chilenas. Reduce costos operativos hasta 70%, acelera procesos, escala sin aumentar equipo. Implementación en 6-8 semanas. Diagnóstico gratuito."
      : "Intelligent automation with AI agents for Chilean businesses. Reduce operating costs by up to 70%, accelerate processes, scale without increasing team. 6-8 weeks implementation. Free diagnosis.",
    keywords: isES
      ? "agentes IA Chile, automatización empresas Chile, sistemas agénticos, living agents, IA para pymes Chile, soluciones IA Santiago, agentes inteligentes, automatización procesos"
      : "AI agents Chile, business automation Chile, agentic systems, living agents, AI for Chilean companies, intelligent agents, process automation",
    alternates: {
      canonical: `https://n3uralia.com/${locale}/agentes-ia-chile`,
      languages: {
        es: 'https://n3uralia.com/es/agentes-ia-chile',
        en: 'https://n3uralia.com/en/ai-agents-chile',
      },
    },
    openGraph: {
      title: isES ? "Agentes de IA para Empresas en Chile | N3uralia" : "AI Agents for Businesses in Chile | N3uralia",
      description: isES
        ? "Automatización con ahorros de hasta 70%. Implementación en 6-8 semanas."
        : "Automation with up to 70% savings. Implementation in 6-8 weeks.",
      url: `https://n3uralia.com/${locale}/agentes-ia-chile`,
      type: 'website',
    },
  }
}

export default function AgentesIAChilePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center px-4 pt-32 pb-16 relative overflow-hidden">
        <SectionBackground />
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">{isES ? "Empresas Chile" : "Companies Chile"}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight text-balance">
            {isES 
              ? "Agentes de IA para Empresas en Chile"
              : "AI Agents for Businesses in Chile"}
          </h1>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            {isES
              ? "Automatiza procesos complejos con agentes inteligentes diseñados especialmente para empresas chilenas. Reduce costos operativos hasta 70%, mejora productividad y acelera crecimiento sin reemplazar tu infraestructura existente."
              : "Automate complex processes with intelligent agents designed specifically for Chilean businesses. Reduce operating costs by up to 70%, improve productivity and accelerate growth without replacing your existing infrastructure."}
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            {isES
              ? "Implementación garantizada en 6-8 semanas • Consultoría gratuita • Soporte local"
              : "Guaranteed implementation in 6-8 weeks • Free consultation • Local support"}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 inline-flex items-center gap-2"
          >
            {isES ? "Agendar diagnóstico gratuito" : "Schedule free diagnosis"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "¿Por qué agentes de IA para empresas chilenas?" : "Why AI agents for Chilean businesses?"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                titleES: 'Reducción de costos',
                titleEN: 'Cost Reduction',
                descES: 'Empresas chilenas ahorran hasta 70% en costos operativos al automatizar tareas repetitivas con agentes IA.',
                descEN: 'Chilean companies save up to 70% in operating costs by automating repetitive tasks with AI agents.',
              },
              {
                icon: Zap,
                titleES: 'Implementación rápida',
                titleEN: 'Fast Implementation',
                descES: 'Integramos con tus sistemas existentes en 6-8 semanas sin disrupciones. Compatible con ERP, CRM y bases de datos locales.',
                descEN: 'We integrate with your existing systems in 6-8 weeks without disruptions. Compatible with ERP, CRM and local databases.',
              },
              {
                icon: Target,
                titleES: 'Soluciones específicas para Chile',
                titleEN: 'Chile-Specific Solutions',
                descES: 'Entendemos regulaciones locales, horarios de negocio chilenos, y peculiaridades de cada industria en el país.',
                descEN: 'We understand local regulations, Chilean business hours, and industry-specific nuances in the country.',
              },
              {
                icon: CheckCircle2,
                titleES: 'Soporte local 24/7',
                titleEN: '24/7 Local Support',
                descES: 'Equipo especializado en empresas chilenas con atención en horario de negocio local y seguimiento continuo.',
                descEN: 'Team specialized in Chilean companies with local business hours support and continuous monitoring.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {isES ? item.titleES : item.titleEN}
                </h3>
                <p className="text-muted-foreground">{isES ? item.descES : item.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Cómo implementamos agentes IA en tu empresa" : "How we implement AI agents in your business"}
          </h2>
          <div className="space-y-8">
            {[
              {
                step: '1',
                titleES: 'Diagnóstico de procesos',
                titleEN: 'Process Diagnosis',
                descES: 'Analizamos tus procesos actuales, identificamos oportunidades de automatización y calculamos ROI específico para tu empresa chilena.',
                descEN: 'We analyze your current processes, identify automation opportunities and calculate specific ROI for your Chilean business.',
              },
              {
                step: '2',
                titleES: 'Diseño arquitectónico',
                titleEN: 'Architectural Design',
                descES: 'Diseñamos agentes inteligentes adaptados a tus flujos de negocio, integraciones existentes y objetivos comerciales.',
                descEN: 'We design intelligent agents adapted to your business flows, existing integrations and commercial objectives.',
              },
              {
                step: '3',
                titleES: 'Implementación y testing',
                titleEN: 'Implementation & Testing',
                descES: 'Implementamos en producción con validación rigurosa, testing en vivo y ajustes según tu feedback.',
                descEN: 'We implement in production with rigorous validation, live testing and adjustments based on your feedback.',
              },
              {
                step: '4',
                titleES: 'Optimización continua',
                titleEN: 'Continuous Optimization',
                descES: 'Monitoreamos 24/7, optimizamos rendimiento y escalamos según crecimiento de tu empresa.',
                descEN: 'We monitor 24/7, optimize performance and scale according to your company\'s growth.',
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {isES ? item.titleES : item.titleEN}
                  </h3>
                  <p className="text-muted-foreground">{isES ? item.descES : item.descEN}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Preguntas frecuentes" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-6">
            {[
              {
                qES: '¿Qué empresas chilenas usan agentes de IA?',
                qEN: 'What Chilean companies use AI agents?',
                aES: 'Retail, minería, manufactura, logística, turismo, banca y servicios financieros. Cualquier empresa con procesos repetitivos es candidata ideal.',
                aEN: 'Retail, mining, manufacturing, logistics, tourism, banking and financial services. Any company with repetitive processes is an ideal candidate.',
              },
              {
                qES: '¿Cuánto cuesta implementar agentes IA?',
                qEN: 'How much does it cost to implement AI agents?',
                aES: 'Desde $50K USD para startups hasta $500K+ para empresas grandes. Ofrecemos planes flexibles con ROI garantizado en 6-12 meses.',
                aEN: 'From $50K USD for startups to $500K+ for large companies. We offer flexible plans with guaranteed ROI in 6-12 months.',
              },
              {
                qES: '¿Mis datos quedan protegidos en Chile?',
                qEN: 'Are my data protected in Chile?',
                aES: 'Sí. Ofrecemos infraestructura local en Chile, cumplimiento PDPA, auditoría de seguridad y backups en territorio chileno.',
                aEN: 'Yes. We offer local infrastructure in Chile, PDPA compliance, security audit and backups on Chilean territory.',
              },
              {
                qES: '¿Necesito reemplazar mis sistemas actuales?',
                qEN: 'Do I need to replace my current systems?',
                aES: 'No. Los agentes se integran con ERP, CRM y sistemas legacy sin disrupciones. Mantienes tu infraestructura actual.',
                aEN: 'No. Agents integrate with ERP, CRM and legacy systems without disruptions. You keep your current infrastructure.',
              },
            ].map((item, idx) => (
              <details key={idx} className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors group cursor-pointer">
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {isES ? item.qES : item.qEN}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{isES ? item.aES : item.aEN}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            {isES ? "Industrias que servimos" : "Industries we serve"}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {["Retail & E-commerce", "Minería", "Logística", "Manufactura", "Turismo", "Finanzas"].map((ind, i) => (
              <div key={i} className="p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all">
                <h3 className="font-bold text-foreground">{ind}</h3>
                <p className="text-xs text-muted-foreground mt-1">Automatización especializada para {ind.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-primary/10 border-t border-border">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            {isES ? "Comienza hoy" : "Start Today"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {isES
              ? "Consultoría gratuita para empresas chilenas. 30 minutos que pueden cambiar tu operación."
              : "Free consultation for Chilean companies. 30 minutes that could transform your operation."}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            {isES ? "Agendar ahora" : "Schedule now"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

