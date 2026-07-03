"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import type { Locale } from "@/lib/get-locale"

const FAQS = {
  es: [
    {
      id: "q1",
      question: "Que hace N3uralia?",
      answer:
        "Disenamos, integramos y operamos sistemas de IA y software para equipos que necesitan automatizar trabajo real sin perder control.",
    },
    {
      id: "q2",
      question: "Construyen solo agentes?",
      answer:
        "No. Tambien construimos aplicaciones, APIs, dashboards e integraciones para que la IA viva dentro de una operacion completa.",
    },
    {
      id: "q3",
      question: "Cuanto tarda un proyecto?",
      answer:
        "Depende del alcance. Un piloto bien acotado puede arrancar en pocas semanas. Un sistema con varias integraciones toma mas tiempo y planificacion.",
    },
    {
      id: "q4",
      question: "Trabajan con empresas en Chile?",
      answer:
        "Si. Chile es un foco natural para N3uralia y tambien trabajamos con equipos en LATAM que necesitan automatizacion, software y arquitectura tecnica.",
    },
    {
      id: "q5",
      question: "Necesito cambiar mis sistemas actuales?",
      answer:
        "No necesariamente. Una parte importante del trabajo es integrarnos con lo que ya existe para reducir friccion y riesgo.",
    },
    {
      id: "q6",
      question: "Como partimos?",
      answer:
        "Partimos con una conversacion tecnica para entender objetivos, restricciones y prioridad de negocio. Desde ahi proponemos un plan concreto.",
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
        "No. We also build applications, APIs, dashboards, and integrations so AI can live inside a complete operating system.",
    },
    {
      id: "q3",
      question: "How long does a project take?",
      answer:
        "It depends on scope. A focused pilot can start within a few weeks. A multi-integration system needs a longer delivery plan.",
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
        "Not necessarily. A big part of the work is integrating with what already exists to reduce friction and risk.",
    },
    {
      id: "q6",
      question: "How do we get started?",
      answer:
        "We begin with a technical conversation to understand goals, constraints, and business priority. From there we propose a concrete plan.",
    },
  ],
} as const

export function FaqPageClient({ locale }: { locale: Locale }) {
  const [openId, setOpenId] = useState<string | null>(null)
  const isES = locale === "es"
  const href = (path: string) => `/${locale}${path}`

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">
            {isES ? "Preguntas frecuentes" : "Frequently asked questions"}
          </h1>
          <p className="mb-6 text-muted-foreground">
            {isES ? "Revisa nuestras " : "Explore our "}
            <Link href={href("/capabilities")} className="text-primary hover:underline">
              {isES ? "capacidades" : "capabilities"}
            </Link>
            {isES ? ", como trabajamos y que tipo de sistemas ponemos en produccion." : ", how we work, and the type of systems we put into production."}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 space-y-4">
            {FAQS[locale].map((faq) => (
              <div key={faq.id} className="border border-border rounded-lg bg-card transition-all">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/50 transition-colors"
                >
                  <h2 className="font-semibold text-foreground pr-4">{faq.question}</h2>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="border-t border-border px-6 py-4 bg-muted/20">
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <section className="mt-16 border-t border-border pt-16">
            <div className="rounded-lg bg-muted/50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                {isES ? "Necesitas otra respuesta?" : "Need another answer?"}
              </h2>
              <p className="mb-6 text-muted-foreground">
                {isES
                  ? "Si quieres revisar arquitectura, plazos o una idea concreta, conversemos directo."
                  : "If you want to discuss architecture, timelines, or a concrete idea, let's talk directly."}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row justify-center">
                <Link
                  href={href("/como-trabajamos")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  {isES ? "Ver metodologia" : "View methodology"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={href("/contact")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  {isES ? "Hablar con el equipo" : "Talk to the team"}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
