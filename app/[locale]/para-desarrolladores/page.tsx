import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code2, Lightbulb } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    title: 'APIs para construir agentes reales',
    intro:
      'N3uralia ofrece APIs limpias, SDKs en múltiples lenguajes y documentación completa. Construye agentes inteligentes, sistemas multiagente y arquitecturas complejas sin fricciones innecesarias.',
    primaryCta: 'Solicitar acceso a APIs',
    secondaryCta: 'GitHub repo',
    experienceTitle: 'Developer experience primero',
    experience: [
      {
        icon: Code2,
        title: 'APIs REST simples',
        desc: 'Sin abstracciones innecesarias. Endpoints intuitivos, respuestas JSON claras y errores descriptivos.',
      },
      {
        icon: Lightbulb,
        title: 'SDKs en TypeScript, Python y Go',
        desc: 'Type-safe, autocomplete y menos sorpresas en runtime. Desarrollar es rápido.',
      },
      {
        icon: BookOpen,
        title: 'Documentación completa y ejemplos',
        desc: 'Guías paso a paso, ejemplos reales y patrones comunes resueltos.',
      },
    ],
    buildTitle: 'Lo que puedes construir',
    build: [
      {
        title: 'Agentes de tarea única',
        desc: 'Agentes especializados en tareas específicas. API simple para crear, entrenar y ejecutar.',
      },
      {
        title: 'Sistemas multiagente',
        desc: 'Agentes que coordinan entre sí, con orquestación automática y resolución de conflictos.',
      },
      {
        title: 'Living agents',
        desc: 'Agentes que evolucionan, aprenden y mantienen contexto operativo.',
      },
      {
        title: 'Pipelines inteligentes',
        desc: 'Encadena agentes y workflows para automatización end-to-end.',
      },
    ],
    codeTitle: 'Así de simple es empezar',
    codeCommentCreate: 'Crear un agente',
    codeCommentSend: 'Enviar mensaje',
    codeMessage: '¿Puedes resumir esta documentación?',
    codeDescription: 'Organiza y preserva conocimiento',
    codeOutput: 'Aquí está el resumen principal...',
    finalTitle: 'Empezar a construir',
    finalIntro: 'Documentación completa, ejemplos listos y soporte técnico para tu equipo.',
    docsCta: 'Leer docs',
    contactCta: 'Contactar soporte',
  },
  en: {
    title: 'APIs for building real agents',
    intro:
      'N3uralia provides clean APIs, multi-language SDKs, and complete documentation. Build intelligent agents, multi-agent systems, and complex architectures without unnecessary friction.',
    primaryCta: 'Request API access',
    secondaryCta: 'GitHub repo',
    experienceTitle: 'Developer experience first',
    experience: [
      {
        icon: Code2,
        title: 'Simple REST APIs',
        desc: 'No unnecessary abstractions. Intuitive endpoints, clear JSON responses, and descriptive errors.',
      },
      {
        icon: Lightbulb,
        title: 'SDKs for TypeScript, Python, and Go',
        desc: 'Type-safe, autocomplete-friendly, and fewer runtime surprises. Development stays fast.',
      },
      {
        icon: BookOpen,
        title: 'Complete docs and examples',
        desc: 'Step-by-step guides, real examples, and common implementation patterns.',
      },
    ],
    buildTitle: 'What you can build',
    build: [
      {
        title: 'Single-task agents',
        desc: 'Specialized agents for specific tasks. A simple API to create, train, and run them.',
      },
      {
        title: 'Multi-agent systems',
        desc: 'Agents that coordinate with each other through orchestration and conflict resolution.',
      },
      {
        title: 'Living agents',
        desc: 'Agents that evolve, learn, and maintain operational context.',
      },
      {
        title: 'Intelligent pipelines',
        desc: 'Chain agents and workflows for end-to-end automation.',
      },
    ],
    codeTitle: 'Getting started is this simple',
    codeCommentCreate: 'Create an agent',
    codeCommentSend: 'Send a message',
    codeMessage: 'Can you summarize this documentation?',
    codeDescription: 'Organizes and preserves knowledge',
    codeOutput: 'Here is the main summary...',
    finalTitle: 'Start building',
    finalIntro: 'Complete documentation, ready examples, and technical support for your team.',
    docsCta: 'Read docs',
    contactCta: 'Contact support',
  },
} as const

function localizedHref(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: '/para-desarrolladores',
    type: 'website',
    title:
      locale === 'es'
        ? 'N3uralia para desarrolladores | API IA production-ready'
        : 'N3uralia for developers | Production-ready AI APIs',
    description:
      locale === 'es'
        ? 'N3uralia para devs: APIs limpias, SDKs y documentación para construir agentes inteligentes en producción.'
        : 'N3uralia for developers: clean APIs, SDKs, and documentation for building intelligent agents in production.',
  })
}

export default function ParaDesarrolladores({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const codeSnippet = `import { N3uralia } from '@n3uralia/sdk'

const n3 = new N3uralia({ apiKey: process.env.N3_API_KEY })

// ${page.codeCommentCreate}
const agent = await n3.agents.create({
  name: 'The Curator',
  archetype: 'curator',
  description: '${page.codeDescription}'
})

// ${page.codeCommentSend}
const response = await agent.chat({
  message: '${page.codeMessage}',
  context: { documents: [...] }
})

console.log(response.message)
// Output: "${page.codeOutput}"`

  return (
    <>
      <main className="min-h-screen bg-background pt-16">
        <section className="border-b border-border bg-background px-4 py-20">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="h1-light mb-6 text-foreground">{page.title}</h1>
            <p className="body-lg mb-4 text-muted-foreground">{page.intro}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.primaryCta}
                <Code2 className="h-4 w-4" />
              </Link>
              <Link href="https://github.com/n3uralia" className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="h2 mb-12 text-center text-foreground">{page.experienceTitle}</h2>
            <div className="space-y-6">
              {page.experience.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-6">
                    <Icon className="mt-1 h-8 w-8 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="h2 mb-12 text-center text-foreground">{page.buildTitle}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {page.build.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/40">
                  <h3 className="mb-2 font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background px-4 py-24">
          <div className="container mx-auto max-w-4xl">
            <h2 className="h2 mb-8 text-center text-foreground">{page.codeTitle}</h2>
            <div className="overflow-x-auto rounded-lg border border-border bg-card p-6">
              <pre className="font-mono text-xs text-muted-foreground">{codeSnippet}</pre>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-background px-4 py-20">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="h2 mb-4 text-foreground">{page.finalTitle}</h2>
            <p className="body mb-8 text-muted-foreground">{page.finalIntro}</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={localizedHref(locale, '/learning-hub')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.docsCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={localizedHref(locale, '/contact')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/10">
                {page.contactCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
