"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/get-locale"

const FAQS = {
  es: [
    {
      id: "q1",
      question: "¿Qué hace N3uralia?",
      answer:
        "Diseñamos, integramos y operamos sistemas de IA y software para equipos que necesitan automatizar trabajo real sin perder control.",
    },
    {
      id: "q2",
      question: "¿Construyen solo agentes?",
      answer:
        "No. También construimos aplicaciones, APIs, paneles e integraciones para que la IA viva dentro de un sistema operacional completo.",
    },
    {
      id: "q3",
      question: "¿Cuánto tarda un proyecto?",
      answer:
        "Depende del alcance. Un piloto bien acotado puede arrancar en pocas semanas. Un sistema con varias integraciones requiere un plan de entrega más amplio.",
    },
    {
      id: "q4",
      question: "¿Trabajan con empresas en Chile?",
      answer:
        "Sí. Chile es un foco natural para N3uralia y también trabajamos con equipos en LATAM que necesitan automatización, software y arquitectura técnica.",
    },
    {
      id: "q5",
      question: "¿Necesito cambiar mis sistemas actuales?",
      answer:
        "No necesariamente. Una parte importante del trabajo es integrarnos con lo que ya existe para reducir fricción, riesgo y duplicación de datos.",
    },
    {
      id: "q6",
      question: "¿Cómo partimos?",
      answer:
        "Partimos con un diagnóstico para entender objetivos, restricciones, datos disponibles y prioridad de negocio. Desde ahí proponemos un primer sistema concreto y verificable.",
    },
  ],
  en: [
    {
      id: "q1",
      question: "What does N3uralia build?",
      answer:
        "We design, integrate, and operate AI systems and software for teams that need to automate real work without losing control.",
    },
    {
      id: "q2",
      question: "Do you only build agents?",
      answer:
        "No. We also build applications, APIs, dashboards, and integrations so AI can live inside a complete operational system.",
    },
    {
      id: "q3",
      question: "How long does a project take?",
      answer:
        "It depends on scope. A focused pilot can start within a few weeks. A multi-integration system needs a broader delivery plan.",
    },
    {
      id: "q4",
      question: "Do you work with teams in Chile?",
      answer:
        "Yes. Chile is a natural focus for N3uralia, and we also work with LATAM teams that need automation, software, and technical architecture.",
    },
    {
      id: "q5",
      question: "Do we need to replace our current systems?",
      answer:
        "Not necessarily. A major part of the work is integrating with what already exists to reduce friction, risk, and duplicated data.",
    },
    {
      id: "q6",
      question: "How do we get started?",
      answer:
        "We begin with a diagnosis to understand goals, constraints, available data, and business priority. From there we propose a concrete first system that can be validated.",
    },
  ],
} as const

const pageCopy = {
  es: {
    eyebrow: "PREGUNTAS FRECUENTES",
    title: "Respuestas claras antes de construir.",
    intro: "Arquitectura, plazos, integración, alcance y producción. Lo esencial para decidir si N3uralia encaja con tu operación.",
    capabilities: "Ver expertise",
    sectionLabel: "RESPUESTAS OPERACIONALES",
    ctaLabel: "SIGUIENTE MOVIMIENTO",
    ctaTitle: "¿Tu pregunta depende de tu operación? Hagamos un diagnóstico.",
    ctaBody: "Cuando la respuesta cambia según datos, sistemas, riesgos o prioridades reales, una conversación concreta vale más que otra FAQ.",
    methodology: "Ver cómo trabajamos",
    contact: "Hablar con el equipo",
  },
  en: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Clear answers before we build.",
    intro: "Architecture, timing, integration, scope, and production. The essentials for deciding whether N3uralia fits your operation.",
    capabilities: "View expertise",
    sectionLabel: "OPERATIONAL ANSWERS",
    ctaLabel: "NEXT MOVE",
    ctaTitle: "Does your question depend on your operation? Start with a diagnosis.",
    ctaBody: "When the answer changes with real data, systems, risk, or priorities, a concrete conversation is more useful than another FAQ.",
    methodology: "See how we work",
    contact: "Talk to the team",
  },
} as const

export function FaqPageClient({ locale }: { locale: Locale }) {
  const [openId, setOpenId] = useState<string | null>("q1")
  const t = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`
  const expertiseHref = locale === "es" ? "/es/soluciones" : "/en/solutions"

  return (
    <>
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]" aria-labelledby="faq-title">
        <div className="retro-shell grid gap-12 py-24 lg:grid-cols-[1fr_.72fr] lg:items-end">
          <div>
            <small>{t.eyebrow}</small>
            <h1 id="faq-title" className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{t.title}</h1>
            <p className="mt-7 max-w-2xl text-[16px] text-[var(--n3-text-muted)]">{t.intro}</p>
          </div>
          <div className="lg:justify-self-end">
            <Link href={expertiseHref} className="retro-button gap-2">
              {t.capabilities}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20" aria-labelledby="faq-list-title">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.42fr_1.58fr]">
          <div>
            <small>01 / {t.sectionLabel}</small>
            <h2 id="faq-list-title" className="mt-5 text-[clamp(32px,3.8vw,52px)]">
              {locale === "es" ? "Lo que necesitas saber." : "What you need to know."}
            </h2>
          </div>

          <div className="border-t border-[rgba(118,214,214,.2)]">
            {FAQS[locale].map((faq, index) => {
              const isOpen = openId === faq.id
              const panelId = `faq-panel-${faq.id}`
              const buttonId = `faq-button-${faq.id}`
              return (
                <article key={faq.id} className="border-b border-[rgba(118,214,214,.2)]">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex min-h-[76px] w-full items-center gap-5 py-5 text-left text-[var(--n3-text-light)] transition-colors hover:text-[var(--n3-teal-soft)]"
                    >
                      <span className="telemetry w-9 shrink-0">0{index + 1}</span>
                      <span className="min-w-0 flex-1 font-[var(--font-rajdhani)] text-[clamp(19px,2vw,24px)] font-normal tracking-[.05em] normal-case">
                        {faq.question}
                      </span>
                      <ChevronDown
                        aria-hidden
                        className={`h-5 w-5 shrink-0 text-[var(--n3-teal-soft)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  {isOpen ? (
                    <div id={panelId} role="region" aria-labelledby={buttonId} className="pb-7 pl-14 pr-10 sm:pl-16">
                      <p className="max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{faq.answer}</p>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24" aria-labelledby="faq-next-title">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <small>02 / {t.ctaLabel}</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.82fr] lg:items-end">
            <div>
              <h2 id="faq-next-title" className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{t.ctaTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{t.ctaBody}</p>
            </div>
            <div className="button-row lg:justify-end">
              <Link href={href("/como-trabajamos")} className="retro-button">
                {t.methodology}
              </Link>
              <Link href={href("/contact")} className="retro-button retro-button-primary gap-2">
                {t.contact}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
