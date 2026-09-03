"use client"

import { FormEvent, useMemo, useState } from "react"
import { ArrowRight, CheckCircle2, Loader, MessageCircle } from "lucide-react"
import type { Locale } from "@/lib/get-locale"

type DiagnosticAnswers = {
  area: string
  friction: string
  systems: string
  validation: string
  useCase: string
  name: string
  email: string
  company: string
  whatsapp: string
}

type Shortcut = {
  id: string
  en: string
  es: string
}

const shortcuts: Shortcut[] = [
  { id: "ai-assistant", en: "AI assistant", es: "Asistente de IA" },
  { id: "workflow-automation", en: "Workflow automation", es: "Automatización de flujos" },
  { id: "command-center", en: "Dashboard / command center", es: "Dashboard / centro de control" },
  { id: "document-intelligence", en: "Document intelligence", es: "Inteligencia documental" },
  { id: "computer-vision", en: "Recognition / computer vision", es: "Reconocimiento / visión computacional" },
  { id: "internal-platform", en: "Internal platform", es: "Plataforma interna" },
  { id: "data-integration", en: "Data integration", es: "Integración de datos" },
  { id: "not-sure", en: "Not sure yet", es: "Aún no estoy seguro" },
]

function normalizeWhatsapp(input: string) {
  const cleaned = input.replace(/\D/g, "")
  if (!cleaned) return ""
  if (/^569\d{8}$/.test(cleaned)) return cleaned
  if (/^9\d{8}$/.test(cleaned)) return `56${cleaned}`
  if (/^56\d{8}$/.test(cleaned)) return `569${cleaned.slice(2)}`
  return null
}

function getCopy(locale: Locale) {
  const isES = locale === "es"

  return {
    assistantLabel: isES ? "Diagnóstico guiado" : "Guided diagnosis",
    assistantTitle: isES
      ? "Cinco preguntas para encontrar el primer sistema que vale la pena validar."
      : "Five questions to find the first system worth validating.",
    assistantIntro: isES
      ? "No necesitamos un brief perfecto. Necesitamos contexto suficiente para identificar dónde existe fricción y qué se puede probar primero."
      : "You do not need a perfect brief. We need enough context to identify where friction exists and what should be tested first.",
    stepLabel: isES ? "PASO" : "STEP",
    steps: [
      {
        key: "area" as const,
        question: isES
          ? "¿Qué área de tu operación necesita mejor visibilidad o control?"
          : "Which area of your operation needs better visibility or control?",
        placeholder: isES
          ? "Ej.: producción, operaciones de tienda, logística, servicio al cliente..."
          : "Example: production, store operations, logistics, customer service...",
        suggestions: isES
          ? ["Operaciones", "Producción", "Ventas / servicio", "Administración", "Equipos en terreno"]
          : ["Operations", "Production", "Sales / service", "Administration", "Field teams"],
      },
      {
        key: "friction" as const,
        question: isES
          ? "¿Qué genera hoy más trabajo manual, demora o riesgo?"
          : "What currently creates the most manual work, delay or risk?",
        placeholder: isES
          ? "Describe el cuello de botella, la repetición o el punto donde se pierde control."
          : "Describe the bottleneck, repetition, or point where control is lost.",
        suggestions: isES
          ? ["Aprobaciones manuales", "Reingreso de datos", "Reportes lentos", "Seguimiento perdido", "Poca visibilidad"]
          : ["Manual approvals", "Re-entering data", "Slow reporting", "Missed follow-up", "Low visibility"],
      },
      {
        key: "systems" as const,
        question: isES
          ? "¿Qué herramientas, archivos o sistemas ya participan?"
          : "What tools, files or systems are already involved?",
        placeholder: isES
          ? "Ej.: Excel, ERP, CRM, correo, WhatsApp, PDFs, cámaras, sensores..."
          : "Example: Excel, ERP, CRM, email, WhatsApp, PDFs, cameras, sensors...",
        suggestions: isES
          ? ["Excel / Sheets", "ERP / CRM", "Email / WhatsApp", "PDFs / documentos", "Cámaras / imágenes"]
          : ["Excel / Sheets", "ERP / CRM", "Email / WhatsApp", "PDFs / documents", "Cameras / images"],
      },
      {
        key: "validation" as const,
        question: isES
          ? "¿Qué sería valioso validar en 30–90 días?"
          : "What would be valuable to validate in 30–90 days?",
        placeholder: isES
          ? "Define el cambio que tendría valor: tiempo, riesgo, ingresos, respuesta o visibilidad."
          : "Define the change that would matter: time, risk, revenue, response, or visibility.",
        suggestions: isES
          ? ["Ahorrar tiempo", "Reducir riesgo", "Recuperar ingresos", "Responder más rápido", "Ganar visibilidad"]
          : ["Save time", "Reduce risk", "Recover revenue", "Faster response", "Better visibility"],
      },
    ],
    contactQuestion: isES ? "¿Cuál es tu nombre y mejor contacto?" : "What is your name and best contact?",
    contactIntro: isES
      ? "Usaremos estos datos solo para responder el diagnóstico y coordinar el siguiente paso."
      : "We use these details only to respond to the diagnosis and coordinate the next step.",
    name: isES ? "Nombre" : "Name",
    email: "Email",
    company: isES ? "Empresa (opcional)" : "Company (optional)",
    whatsapp: "WhatsApp (optional)",
    namePlaceholder: isES ? "Tu nombre" : "Your name",
    emailPlaceholder: "you@company.com",
    companyPlaceholder: isES ? "Empresa" : "Company",
    whatsappPlaceholder: "+56 9 1234 5678",
    previous: isES ? "Anterior" : "Previous",
    next: isES ? "Continuar" : "Continue",
    submit: isES ? "Enviar diagnóstico" : "Submit diagnosis",
    submitting: isES ? "Enviando..." : "Submitting...",
    requiredAnswer: isES ? "Agrega una respuesta antes de continuar." : "Add an answer before continuing.",
    invalidName: isES ? "Ingresa tu nombre." : "Enter your name.",
    invalidEmail: isES ? "Ingresa un email válido." : "Enter a valid email.",
    invalidWhatsapp: isES
      ? "Revisa el número o déjalo vacío."
      : "Check the number or leave it blank.",
    submitError: isES
      ? "No pudimos enviar el diagnóstico. Intenta otra vez o escribe a info@n3uralia.com."
      : "We could not submit the diagnosis. Try again or email info@n3uralia.com.",
    selectedDirection: isES ? "Dirección seleccionada" : "Selected direction",
    shortcutLabel: isES ? "Atajos de caso de uso" : "Use-case shortcuts",
    shortcutTitle: isES ? "Si ya tienes una idea, úsala como punto de partida." : "If you already have a direction, use it as the starting point.",
    shortcutText: isES
      ? "Seleccionar una opción no limita el diagnóstico. Solo nos da contexto para empezar más rápido."
      : "Selecting an option does not lock the diagnosis. It simply gives us context to start faster.",
    successLabel: isES ? "DIAGNÓSTICO RECIBIDO" : "DIAGNOSIS RECEIVED",
    successTitle: isES ? "Ya tenemos el contexto inicial." : "We have the initial context.",
    successText: isES
      ? "Revisaremos la operación, la fricción y el objetivo de validación para responder con una primera dirección de sistema."
      : "We will review the operation, friction, and validation goal and respond with an initial system direction.",
    successTiming: isES ? "Respuesta habitual dentro de 1 día hábil." : "Typical response within 1 business day.",
    whatsappCta: isES ? "Continuar por WhatsApp" : "Continue on WhatsApp",
    restart: isES ? "Iniciar otro diagnóstico" : "Start another diagnosis",
    whatsappUrl: "https://wa.me/56993826127",
  }
}

export function DiagnosisFunnelClient({ locale }: { locale: Locale }) {
  const copy = useMemo(() => getCopy(locale), [locale])
  const [currentStep, setCurrentStep] = useState(0)
  const [draft, setDraft] = useState("")
  const [answers, setAnswers] = useState<DiagnosticAnswers>({
    area: "",
    friction: "",
    systems: "",
    validation: "",
    useCase: "",
    name: "",
    email: "",
    company: "",
    whatsapp: "",
  })
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const totalSteps = 5
  const isContactStep = currentStep === 4
  const currentQuestion = !isContactStep ? copy.steps[currentStep] : null

  function selectSuggestion(value: string) {
    setDraft((existing) => (existing.trim() ? `${existing.trim()}, ${value}` : value))
    setError("")
  }

  function continueStep() {
    if (!currentQuestion) return
    const value = draft.trim()
    if (!value) {
      setError(copy.requiredAnswer)
      return
    }

    setAnswers((previous) => ({ ...previous, [currentQuestion.key]: value }))
    setCurrentStep((step) => step + 1)
    setDraft("")
    setError("")
  }

  function previousStep() {
    if (currentStep === 0) return
    const previousIndex = currentStep - 1
    const previousQuestion = copy.steps[previousIndex]
    setCurrentStep(previousIndex)
    setDraft(answers[previousQuestion.key])
    setError("")
  }

  function chooseShortcut(shortcut: Shortcut) {
    const label = locale === "es" ? shortcut.es : shortcut.en
    setAnswers((previous) => ({ ...previous, useCase: label }))
    setError("")
    window.requestAnimationFrame(() => {
      document.getElementById("diagnosis-assistant")?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  async function submitDiagnosis(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const name = answers.name.trim()
    const email = answers.email.trim()
    const whatsapp = normalizeWhatsapp(answers.whatsapp)

    if (name.length < 2) {
      setError(copy.invalidName)
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(copy.invalidEmail)
      return
    }

    if (whatsapp === null) {
      setError(copy.invalidWhatsapp)
      return
    }

    const message = [
      "N3uralia Diagnosis Intake",
      `Area: ${answers.area}`,
      `Friction: ${answers.friction}`,
      `Systems / files: ${answers.systems}`,
      `30-90 day validation: ${answers.validation}`,
      answers.useCase ? `Use-case direction: ${answers.useCase}` : "",
    ]
      .filter(Boolean)
      .join("\n")

    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company: answers.company.trim(),
          whatsapp: whatsapp || "",
          message,
        }),
      })

      if (!response.ok) throw new Error("Diagnosis submission failed")
      setSubmitted(true)
    } catch (submissionError) {
      console.error("[diagnosis] submission error:", submissionError)
      setError(copy.submitError)
    } finally {
      setIsSubmitting(false)
    }
  }

  function resetDiagnosis() {
    setCurrentStep(0)
    setDraft("")
    setAnswers({
      area: "",
      friction: "",
      systems: "",
      validation: "",
      useCase: "",
      name: "",
      email: "",
      company: "",
      whatsapp: "",
    })
    setError("")
    setSubmitted(false)
  }

  return (
    <>
      <section id="diagnosis-assistant" className="scroll-mt-28 border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <small>04 / {copy.assistantLabel}</small>
            <h2 className="mt-5 max-w-xl text-[clamp(34px,4vw,56px)]">{copy.assistantTitle}</h2>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[var(--n3-text-muted)]">{copy.assistantIntro}</p>

            {answers.useCase ? (
              <div className="mt-8 border-l border-[var(--n3-teal-soft)] pl-4">
                <span className="telemetry">{copy.selectedDirection}</span>
                <p className="mt-2 text-[14px] text-[var(--n3-text-light)]">{answers.useCase}</p>
              </div>
            ) : null}
          </div>

          <div className="relative border border-[rgba(168,217,216,.24)] bg-[var(--n3-dark-surface)] p-4 sm:p-5 md:p-7">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>

            {!submitted ? (
              <>
                <div className="flex items-center justify-between gap-4 border-b border-[rgba(118,214,214,.16)] pb-5">
                  <div>
                    <span className="telemetry">N3 / DIAGNOSTIC INTAKE</span>
                    <p className="mt-2 font-[var(--font-rajdhani)] text-[15px] uppercase tracking-[.12em] text-[var(--n3-text-light)]">
                      {copy.stepLabel} {String(currentStep + 1).padStart(2, "0")} / 05
                    </p>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[var(--n3-teal)]" aria-hidden />
                </div>

                <div className="mt-5 grid grid-cols-5 gap-1" aria-label={`${currentStep + 1} of ${totalSteps}`}>
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-1 ${index <= currentStep ? "bg-[var(--n3-teal)]" : "bg-[rgba(168,217,216,.14)]"}`}
                      aria-hidden
                    />
                  ))}
                </div>

                {!isContactStep && currentQuestion ? (
                  <div className="mt-8">
                    <h3 className="max-w-2xl text-[clamp(26px,3.1vw,40px)]">{currentQuestion.question}</h3>

                    <div className="mt-7 flex flex-wrap gap-2" aria-label={locale === "es" ? "Respuestas sugeridas" : "Suggested answers"}>
                      {currentQuestion.suggestions.map((suggestion) => (
                        <button
                          key={suggestion}
                          type="button"
                          onClick={() => selectSuggestion(suggestion)}
                          className="min-h-11 border border-[rgba(168,217,216,.2)] bg-[var(--n3-black)] px-4 py-2 text-left text-[13px] text-[var(--n3-text-muted)] transition-colors hover:border-[var(--n3-teal-soft)] hover:text-[var(--n3-text-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)]"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>

                    <label className="mt-7 block">
                      <span className="sr-only">{currentQuestion.question}</span>
                      <textarea
                        value={draft}
                        onChange={(event) => {
                          setDraft(event.target.value)
                          setError("")
                        }}
                        placeholder={currentQuestion.placeholder}
                        rows={5}
                        className="w-full resize-none border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 py-4 text-[15px] leading-7 text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                      />
                    </label>

                    {error ? <p className="mt-3 text-[13px] text-[var(--n3-teal-soft)]">{error}</p> : null}

                    <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      {currentStep > 0 ? (
                        <button type="button" onClick={previousStep} className="retro-button w-full sm:w-auto">
                          {copy.previous}
                        </button>
                      ) : <span />}
                      <button type="button" onClick={continueStep} className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                        {copy.next}
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={submitDiagnosis} className="mt-8">
                    <h3 className="max-w-2xl text-[clamp(26px,3.1vw,40px)]">{copy.contactQuestion}</h3>
                    <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{copy.contactIntro}</p>

                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">{copy.name}</span>
                        <input
                          type="text"
                          value={answers.name}
                          onChange={(event) => {
                            setAnswers((previous) => ({ ...previous, name: event.target.value }))
                            setError("")
                          }}
                          placeholder={copy.namePlaceholder}
                          className="min-h-12 w-full border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 text-[15px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">{copy.email}</span>
                        <input
                          type="email"
                          value={answers.email}
                          onChange={(event) => {
                            setAnswers((previous) => ({ ...previous, email: event.target.value }))
                            setError("")
                          }}
                          placeholder={copy.emailPlaceholder}
                          className="min-h-12 w-full border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 text-[15px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">{copy.company}</span>
                        <input
                          type="text"
                          value={answers.company}
                          onChange={(event) => setAnswers((previous) => ({ ...previous, company: event.target.value }))}
                          placeholder={copy.companyPlaceholder}
                          className="min-h-12 w-full border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 text-[15px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)]">{copy.whatsapp}</span>
                        <input
                          type="tel"
                          value={answers.whatsapp}
                          onChange={(event) => {
                            setAnswers((previous) => ({ ...previous, whatsapp: event.target.value }))
                            setError("")
                          }}
                          placeholder={copy.whatsappPlaceholder}
                          className="min-h-12 w-full border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 text-[15px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
                        />
                      </label>
                    </div>

                    {error ? <p className="mt-4 text-[13px] text-[var(--n3-teal-soft)]">{error}</p> : null}

                    <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <button type="button" onClick={previousStep} className="retro-button w-full sm:w-auto" disabled={isSubmitting}>
                        {copy.previous}
                      </button>
                      <button type="submit" className="retro-button retro-button-primary w-full gap-2 sm:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? <Loader className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
                        {isSubmitting ? copy.submitting : copy.submit}
                      </button>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <div className="py-8 md:py-12">
                <CheckCircle2 className="h-8 w-8 text-[var(--n3-teal-soft)]" />
                <p className="telemetry mt-7">{copy.successLabel}</p>
                <h3 className="mt-4 max-w-2xl text-[clamp(30px,3.5vw,46px)]">{copy.successTitle}</h3>
                <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[var(--n3-text-muted)]">{copy.successText}</p>
                <p className="mt-5 text-[13px] text-[var(--n3-teal-soft)]">{copy.successTiming}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={copy.whatsappUrl} target="_blank" rel="noopener noreferrer" className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                    <MessageCircle className="h-4 w-4" />
                    {copy.whatsappCta}
                  </a>
                  <button type="button" onClick={resetDiagnosis} className="retro-button w-full sm:w-auto">
                    {copy.restart}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell">
          <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>05 / {copy.shortcutLabel}</small>
            <div>
              <h2 className="text-[clamp(34px,4vw,56px)]">{copy.shortcutTitle}</h2>
              <p className="mt-5 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{copy.shortcutText}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {shortcuts.map((shortcut) => {
              const label = locale === "es" ? shortcut.es : shortcut.en
              const selected = answers.useCase === label

              return (
                <button
                  key={shortcut.id}
                  type="button"
                  onClick={() => chooseShortcut(shortcut)}
                  aria-pressed={selected}
                  className={`min-h-12 border px-4 py-3 text-left font-[var(--font-rajdhani)] text-[13px] uppercase tracking-[.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--n3-teal)] ${
                    selected
                      ? "border-[var(--n3-teal-soft)] bg-[var(--n3-teal-soft)] text-[var(--n3-black)]"
                      : "border-[rgba(168,217,216,.22)] bg-[var(--n3-black)] text-[var(--n3-text-muted)] hover:border-[var(--n3-teal-soft)] hover:text-[var(--n3-text-light)]"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
