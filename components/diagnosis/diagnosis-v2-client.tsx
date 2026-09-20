"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent, useMemo, useState } from "react"
import type { Locale } from "@/lib/get-locale"

type AnswerKey = "operationState" | "operation" | "happening" | "information" | "impact" | "priority"

type DiagnosisAnswers = Record<AnswerKey, string>

type ReviewForm = {
  name: string
  company: string
  email: string
  whatsapp: string
  note: string
}

type PreliminaryRead = {
  pattern: string
  firstSystem: string
  validation: string
  complexity: string
  readiness: string
}

type Question = {
  key: AnswerKey
  title: string
  helper: string
  options?: string[]
}

const WHATSAPP_PHONE = "56993826127"
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_PHONE}`

const visualAssets = [
  "/images/solutions/section03/operational-intelligence.png",
  "/images/solutions/section03/internal-platforms.png",
  "/images/solutions/section03/workflow-automation.png",
  "/images/solutions/section03/governance-human-loop.png",
] as const

const copy = {
  en: {
    heroLabel: "01 / AI DIAGNOSIS",
    heroTitleA: "AI Diagnosis for",
    heroTitleB: "Real Operations.",
    heroBody:
      "Answer a few operational questions. Receive an immediate preliminary operational read. If it makes sense, submit it for a reviewed recommendation from N3uralia.",
    start: "Start diagnosis",
    talk: "Talk to a manager",
    givesLabel: "02 / WHAT THE DIAGNOSIS GIVES YOU",
    givesTitle: "What the diagnosis gives you.",
    givesBody:
      "A short operational diagnosis before submission. A reviewed recommendation after N3uralia receives the context.",
    gives: [
      ["Operational Pattern", "Identify where visibility, coordination or execution breaks."],
      ["First System Layer", "Identify the most valuable operational starting point."],
      ["Validation Direction", "Recommend one practical first validation."],
      ["Reviewed Recommendation", "Receive a reviewed operational recommendation after submission."],
    ],
    consoleLabel: "03 / DIAGNOSTIC CONSOLE",
    consoleTitle: "Map the operation.",
    consoleBody:
      "Answer a few questions. The console will identify the likely operational pattern, generate a preliminary read and prepare a reviewed recommendation.",
    questions: [
      {
        key: "operationState",
        title: "What describes your operation today?",
        helper: "Choose the closest description. Precision comes later.",
        options: [
          "I cannot see the full operation",
          "Too much work is manual",
          "We respond too late",
          "Documents slow us down",
          "Systems are disconnected",
          "Field execution is hard to coordinate",
        ],
      },
      {
        key: "operation",
        title: "What operation do you want to improve?",
        helper: "Name the real process, team or operating area.",
      },
      {
        key: "happening",
        title: "What is happening today?",
        helper: "Describe the friction, delay, rework, exceptions or loss of control.",
      },
      {
        key: "information",
        title: "Where is the information today?",
        helper: "Choose the closest source pattern.",
        options: [
          "Spreadsheets and files",
          "ERP / CRM / internal software",
          "Email and messaging",
          "Cameras / sensors / field signals",
          "Multiple disconnected systems",
        ],
      },
      {
        key: "impact",
        title: "Why does this matter?",
        helper: "Choose the operational consequence that matters most.",
        options: [
          "Lost time and manual effort",
          "Risk or compliance exposure",
          "Slow decisions and response",
          "Service or customer impact",
          "Cost, waste or lost revenue",
        ],
      },
      {
        key: "priority",
        title: "What should improve first?",
        helper: "Choose the first observable change you want.",
        options: [
          "Visibility and control",
          "Automate a recurring workflow",
          "Faster decisions and response",
          "Document control",
          "Connect systems and data",
        ],
      },
    ] as Question[],
    question: "Question",
    of: "of",
    back: "Back",
    continue: "Continue",
    generate: "Generate preliminary read",
    manager: "Talk to a manager",
    readLabel: "PRELIMINARY OPERATIONAL READ",
    readTitle: "A first direction before you submit anything.",
    readNote:
      "This is a preliminary system read based on the context you entered. N3uralia reviews the complete context before recommending an implementation.",
    resultLabels: ["Likely pattern", "Likely first system", "Validation direction", "Complexity", "Readiness"],
    sendReview: "Send for review",
    edit: "Edit answers",
    viaWhatsapp: "Send via WhatsApp",
    reviewLabel: "SEND FOR REVIEW",
    reviewTitle: "Add the minimum context needed for a reviewed recommendation.",
    name: "Name",
    company: "Company",
    email: "Email",
    whatsapp: "WhatsApp",
    note: "Optional note",
    upload: "Optional upload",
    uploadHelp: "PDF, image or document. Maximum 2 MB.",
    sendRequest: "Send diagnosis request",
    sending: "Sending...",
    invalid: "Complete the required fields before sending.",
    fileTooLarge: "The selected file is larger than 2 MB.",
    submitError: "The diagnosis could not be sent. Try again or continue by WhatsApp.",
    receivedLabel: "REQUEST RECEIVED",
    receivedTitle: "Your diagnosis is now with N3uralia.",
    receivedBody: "A reviewed recommendation will arrive within one business day.",
    explore: "Explore solutions",
    nextLabel: "04 / WHAT HAPPENS NEXT",
    nextTitle: "What happens next.",
    nextBody:
      "A reviewed recommendation focuses on the smallest operational move that creates measurable impact.",
    next: [
      ["Operation Review", "We review the context, constraints and operating reality."],
      ["First System Mapping", "We identify the smallest useful system layer."],
      ["Reviewed Recommendation", "You receive a concrete recommendation grounded in your operation."],
      ["First Validation", "We define one measurable first validation before larger implementation."],
    ],
    directLabel: "05 / DIRECT MANAGER PATH",
    directTitleA: "Prefer to",
    directTitleB: "speak directly?",
    directBody:
      "Talk with a N3uralia manager. Start with one sentence describing the operation you want to improve.",
    contactShortcuts: [
      ["whatsapp", "WhatsApp", "Chat directly with our team."],
      ["email", "Email", "Send documents or questions."],
      ["calendar", "Book call", "Arrange a 30 minute conversation."],
    ],
    contactLabel: "06 / CONTACT OPTIONS",
    contactTitle: "Let's move forward.",
    contactBody: "Choose the communication channel that fits your workflow.",
    contacts: [
      ["whatsapp", "WhatsApp", "Direct conversation."],
      ["email", "Email", "Send documents or questions."],
      ["document", "Contact Form", "Describe your operation."],
      ["calendar", "Schedule a Call", "Book a 30 minute conversation."],
    ],
    startAgain: "Start diagnosis",
  },
  es: {
    heroLabel: "01 / DIAGNÓSTICO IA",
    heroTitleA: "Diagnóstico IA para",
    heroTitleB: "Operaciones Reales.",
    heroBody:
      "Responde algunas preguntas operacionales. Recibe una lectura operacional preliminar inmediata. Si hace sentido, envíala para una recomendación revisada por N3uralia.",
    start: "Iniciar diagnóstico",
    talk: "Hablar con un manager",
    givesLabel: "02 / QUÉ TE ENTREGA EL DIAGNÓSTICO",
    givesTitle: "Qué te entrega el diagnóstico.",
    givesBody:
      "Una lectura operacional breve antes de enviar. Una recomendación revisada después de que N3uralia recibe el contexto.",
    gives: [
      ["Patrón Operacional", "Identifica dónde se rompe la visibilidad, coordinación o ejecución."],
      ["Primera Capa de Sistema", "Identifica el punto de partida operacional de mayor valor."],
      ["Dirección de Validación", "Recomienda una primera validación práctica."],
      ["Recomendación Revisada", "Recibe una recomendación operacional revisada después del envío."],
    ],
    consoleLabel: "03 / CONSOLA DE DIAGNÓSTICO",
    consoleTitle: "Mapea la operación.",
    consoleBody:
      "Responde algunas preguntas. La consola identificará el patrón operacional probable, generará una lectura preliminar y preparará una recomendación revisada.",
    questions: [
      {
        key: "operationState",
        title: "¿Qué describe mejor tu operación hoy?",
        helper: "Elige la descripción más cercana. La precisión viene después.",
        options: [
          "No puedo ver la operación completa",
          "Demasiado trabajo es manual",
          "Respondemos demasiado tarde",
          "Los documentos nos frenan",
          "Los sistemas están desconectados",
          "La ejecución en terreno es difícil de coordinar",
        ],
      },
      {
        key: "operation",
        title: "¿Qué operación quieres mejorar?",
        helper: "Nombra el proceso, equipo o área operacional real.",
      },
      {
        key: "happening",
        title: "¿Qué está pasando hoy?",
        helper: "Describe la fricción, demora, reproceso, excepciones o pérdida de control.",
      },
      {
        key: "information",
        title: "¿Dónde está la información hoy?",
        helper: "Elige el patrón de fuentes más cercano.",
        options: [
          "Planillas y archivos",
          "ERP / CRM / software interno",
          "Email y mensajería",
          "Cámaras / sensores / señales de terreno",
          "Múltiples sistemas desconectados",
        ],
      },
      {
        key: "impact",
        title: "¿Por qué importa?",
        helper: "Elige la consecuencia operacional más relevante.",
        options: [
          "Tiempo perdido y trabajo manual",
          "Riesgo o exposición de cumplimiento",
          "Decisiones y respuesta lentas",
          "Impacto en servicio o clientes",
          "Costo, merma o ingresos perdidos",
        ],
      },
      {
        key: "priority",
        title: "¿Qué debería mejorar primero?",
        helper: "Elige el primer cambio observable que quieres lograr.",
        options: [
          "Visibilidad y control",
          "Automatizar un flujo recurrente",
          "Decisiones y respuesta más rápidas",
          "Control documental",
          "Conectar sistemas y datos",
        ],
      },
    ] as Question[],
    question: "Pregunta",
    of: "de",
    back: "Atrás",
    continue: "Continuar",
    generate: "Generar lectura preliminar",
    manager: "Hablar con un manager",
    readLabel: "LECTURA OPERACIONAL PRELIMINAR",
    readTitle: "Una primera dirección antes de enviar tus datos.",
    readNote:
      "Esta es una lectura preliminar basada en el contexto ingresado. N3uralia revisa el contexto completo antes de recomendar una implementación.",
    resultLabels: ["Patrón probable", "Primer sistema probable", "Dirección de validación", "Complejidad", "Preparación"],
    sendReview: "Enviar para revisión",
    edit: "Editar respuestas",
    viaWhatsapp: "Enviar por WhatsApp",
    reviewLabel: "ENVIAR PARA REVISIÓN",
    reviewTitle: "Agrega el contexto mínimo para una recomendación revisada.",
    name: "Nombre",
    company: "Empresa",
    email: "Email",
    whatsapp: "WhatsApp",
    note: "Nota opcional",
    upload: "Archivo opcional",
    uploadHelp: "PDF, imagen o documento. Máximo 2 MB.",
    sendRequest: "Enviar solicitud de diagnóstico",
    sending: "Enviando...",
    invalid: "Completa los campos requeridos antes de enviar.",
    fileTooLarge: "El archivo seleccionado supera 2 MB.",
    submitError: "No pudimos enviar el diagnóstico. Intenta otra vez o continúa por WhatsApp.",
    receivedLabel: "SOLICITUD RECIBIDA",
    receivedTitle: "Tu diagnóstico ya está con N3uralia.",
    receivedBody: "La recomendación revisada llegará dentro de un día hábil.",
    explore: "Ver soluciones",
    nextLabel: "04 / QUÉ PASA DESPUÉS",
    nextTitle: "Qué pasa después.",
    nextBody:
      "Una recomendación revisada se enfoca en el movimiento operacional más pequeño que puede crear impacto medible.",
    next: [
      ["Revisión de Operación", "Revisamos contexto, restricciones y realidad operacional."],
      ["Mapeo del Primer Sistema", "Identificamos la capa de sistema útil más pequeña."],
      ["Recomendación Revisada", "Recibes una recomendación concreta basada en tu operación."],
      ["Primera Validación", "Definimos una primera validación medible antes de una implementación mayor."],
    ],
    directLabel: "05 / RUTA DIRECTA",
    directTitleA: "¿Prefieres",
    directTitleB: "hablar directamente?",
    directBody:
      "Habla con un manager de N3uralia. Comienza con una frase que describa la operación que quieres mejorar.",
    contactShortcuts: [
      ["whatsapp", "WhatsApp", "Conversa directamente con nuestro equipo."],
      ["email", "Email", "Envía documentos o preguntas."],
      ["calendar", "Agendar llamada", "Coordina una conversación de 30 minutos."],
    ],
    contactLabel: "06 / OPCIONES DE CONTACTO",
    contactTitle: "Avancemos.",
    contactBody: "Elige el canal de comunicación que mejor se adapta a tu flujo de trabajo.",
    contacts: [
      ["whatsapp", "WhatsApp", "Conversación directa."],
      ["email", "Email", "Envía documentos o preguntas."],
      ["document", "Formulario", "Describe tu operación."],
      ["calendar", "Agendar llamada", "Reserva una conversación de 30 minutos."],
    ],
    startAgain: "Iniciar diagnóstico",
  },
} as const

function Icon({ kind }: { kind: string }) {
  const base = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  }

  if (kind === "email") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
        <rect x="4.5" y="7.5" width="23" height="17" />
        <path d="m5.5 9 10.5 8 10.5-8" />
      </svg>
    )
  }

  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
        <rect x="5" y="7.5" width="22" height="20" />
        <path d="M10 4.5v6M22 4.5v6M5 13h22M10 18h3M16 18h3M22 18h1M10 22h3M16 22h3" />
      </svg>
    )
  }

  if (kind === "document") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
        <path d="M8 4.5h11l5 5v18H8zM19 4.5v6h5M12 16h8M12 20h8M12 24h5" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base}>
      <path d="M16 5.2c-6 0-10.8 4.4-10.8 9.8 0 2.5 1 4.8 2.8 6.6l-1.3 5.2 5.4-2.1c1.2.4 2.5.7 3.9.7 6 0 10.8-4.4 10.8-9.9S22 5.2 16 5.2Z" />
      <path d="M12.1 11.2c.8 3.4 2.9 5.8 6.8 7.1l2-2.1-2.8-1.3-1.1 1.1c-1.6-.7-2.7-1.8-3.5-3.4l1-1.1-1.2-2.5-1.2 2.2Z" />
    </svg>
  )
}

function buildPreliminaryRead(answers: DiagnosisAnswers, locale: Locale): PreliminaryRead {
  const es = locale === "es"
  const state = answers.operationState.toLowerCase()
  const info = answers.information.toLowerCase()
  const priority = answers.priority.toLowerCase()

  let pattern = es ? "Brecha de visibilidad operacional" : "Operational visibility gap"
  if (state.includes("manual")) pattern = es ? "Fricción de coordinación y trabajo manual" : "Coordination and manual-work friction"
  else if (state.includes("document")) pattern = es ? "Cuello de botella documental" : "Document-flow bottleneck"
  else if (state.includes("desconect") || state.includes("disconnected")) pattern = es ? "Contexto operacional fragmentado" : "Fragmented operational context"
  else if (state.includes("tarde") || state.includes("late")) pattern = es ? "Ciclo de respuesta lento" : "Slow response loop"
  else if (state.includes("terreno") || state.includes("field")) pattern = es ? "Brecha de coordinación en ejecución" : "Execution coordination gap"

  let firstSystem = es ? "Inteligencia operacional" : "Operational Intelligence"
  if (priority.includes("automat") || state.includes("manual")) firstSystem = es ? "Automatización de workflows" : "Workflow Automation"
  else if (priority.includes("document")) firstSystem = es ? "Inteligencia documental" : "Document Intelligence"
  else if (priority.includes("conectar") || priority.includes("connect") || state.includes("desconect") || state.includes("disconnected")) firstSystem = es ? "Integración de datos + capa operacional" : "Data Integration + Operational Layer"
  else if (priority.includes("decisiones") || priority.includes("decisions") || state.includes("tarde") || state.includes("late")) firstSystem = es ? "Inteligencia operacional + asistencia IA" : "Operational Intelligence + AI Assistance"

  let validation = es
    ? "Instrumentar un flujo crítico, definir una métrica base y validar una mejora observable antes de ampliar alcance."
    : "Instrument one critical workflow, define one baseline metric and validate one observable improvement before expanding scope."

  if (firstSystem.includes("Workflow") || firstSystem.includes("workflows")) {
    validation = es
      ? "Elegir un flujo recurrente, eliminar un traspaso manual y medir tiempo de ciclo, excepciones y cumplimiento."
      : "Choose one recurring workflow, remove one manual handoff, and measure cycle time, exceptions and completion."
  } else if (firstSystem.includes("Document")) {
    validation = es
      ? "Comenzar con una clase documental, automatizar extracción y control, y medir tiempo de revisión y excepciones."
      : "Start with one document class, automate extraction and control, and measure review time and exceptions."
  } else if (firstSystem.includes("Data Integration") || firstSystem.includes("Integración")) {
    validation = es
      ? "Conectar las dos fuentes con mayor fricción y validar una vista operacional compartida antes de sumar más sistemas."
      : "Connect the two highest-friction sources and validate one shared operational view before adding more systems."
  } else if (firstSystem.includes("AI Assistance") || firstSystem.includes("asistencia")) {
    validation = es
      ? "Elegir una decisión recurrente, conectar el contexto mínimo necesario y medir tiempo de respuesta y calidad con revisión humana."
      : "Choose one recurring decision, connect the minimum required context, and measure response time and quality with human review."
  }

  const highComplexity = info.includes("multiple") || info.includes("múltiples") || answers.happening.length > 180
  const mediumComplexity =
    highComplexity ||
    info.includes("erp") ||
    info.includes("cameras") ||
    info.includes("cámaras") ||
    info.includes("sensors") ||
    info.includes("sensores")

  const complexity = highComplexity
    ? es
      ? "Alta · múltiples fuentes o dependencias"
      : "High · multiple sources or dependencies"
    : mediumComplexity
      ? es
        ? "Media · integración o señales operacionales"
        : "Moderate · integration or operational signals"
      : es
        ? "Acotada · buen candidato para primera validación"
        : "Contained · good candidate for a first validation"

  const readiness =
    answers.operation.trim().length > 10 && answers.happening.trim().length > 20
      ? es
        ? "Listo para mapear una primera validación"
        : "Ready to map a first validation"
      : es
        ? "Falta precisar contexto antes de validar"
        : "More context needed before validation"

  return { pattern, firstSystem, validation, complexity, readiness }
}

function genericWhatsapp(locale: Locale) {
  const text =
    locale === "es"
      ? "Hola N3uralia. Quiero conversar sobre una operación que necesito mejorar."
      : "Hi N3uralia. I want to discuss an operation I need to improve."
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}

function diagnosisWhatsapp(locale: Locale, answers: DiagnosisAnswers, read: PreliminaryRead) {
  const text =
    locale === "es"
      ? [
          "Hola N3uralia. Completé el diagnóstico preliminar.",
          `Operación: ${answers.operation}`,
          `Patrón probable: ${read.pattern}`,
          `Primer sistema probable: ${read.firstSystem}`,
          `Dirección de validación: ${read.validation}`,
          `Complejidad: ${read.complexity}`,
          `Preparación: ${read.readiness}`,
        ].join("\n")
      : [
          "Hi N3uralia. I completed the preliminary diagnosis.",
          `Operation: ${answers.operation}`,
          `Likely pattern: ${read.pattern}`,
          `Likely first system: ${read.firstSystem}`,
          `Validation direction: ${read.validation}`,
          `Complexity: ${read.complexity}`,
          `Readiness: ${read.readiness}`,
        ].join("\n")

  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}

async function fileToAttachment(file: File | null) {
  if (!file) return undefined
  const dataUrl = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ""))
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })

  const comma = dataUrl.indexOf(",")
  if (comma < 0) return undefined
  return {
    filename: file.name,
    content: dataUrl.slice(comma + 1),
    contentType: file.type || "application/octet-stream",
  }
}

export function DiagnosisV2Client({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const [consoleState, setConsoleState] = useState<"questions" | "read" | "review" | "confirmation">("questions")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<DiagnosisAnswers>({
    operationState: "",
    operation: "",
    happening: "",
    information: "",
    impact: "",
    priority: "",
  })
  const [review, setReview] = useState<ReviewForm>({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    note: "",
  })
  const [attachment, setAttachment] = useState<File | null>(null)
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const question = t.questions[questionIndex] as Question
  const read = useMemo(() => buildPreliminaryRead(answers, locale), [answers, locale])
  const managerUrl = consoleState === "questions" ? genericWhatsapp(locale) : diagnosisWhatsapp(locale, answers, read)

  function setAnswer(value: string) {
    setAnswers((previous) => ({ ...previous, [question.key]: value }))
    setError("")
  }

  function nextQuestion() {
    if (!answers[question.key].trim()) {
      setError(locale === "es" ? "Responde antes de continuar." : "Add an answer before continuing.")
      return
    }

    if (questionIndex === t.questions.length - 1) {
      setConsoleState("read")
      return
    }
    setQuestionIndex((index) => index + 1)
    setError("")
  }

  function previousQuestion() {
    if (questionIndex === 0) return
    setQuestionIndex((index) => index - 1)
    setError("")
  }

  async function submitReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const required = review.name.trim() && review.company.trim() && review.email.trim() && review.whatsapp.trim()
    if (!required || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(review.email)) {
      setError(t.invalid)
      return
    }

    if (attachment && attachment.size > 2 * 1024 * 1024) {
      setError(t.fileTooLarge)
      return
    }

    setSubmitting(true)
    setError("")

    try {
      const upload = await fileToAttachment(attachment)
      const message = [
        "N3uralia Diagnosis V2",
        `Operation state: ${answers.operationState}`,
        `Operation: ${answers.operation}`,
        `What is happening: ${answers.happening}`,
        `Information location: ${answers.information}`,
        `Why it matters: ${answers.impact}`,
        `Priority: ${answers.priority}`,
        "",
        `Likely pattern: ${read.pattern}`,
        `Likely first system: ${read.firstSystem}`,
        `Validation direction: ${read.validation}`,
        `Complexity: ${read.complexity}`,
        `Readiness: ${read.readiness}`,
        review.note.trim() ? `Optional note: ${review.note.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n")

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: review.name.trim(),
          company: review.company.trim(),
          email: review.email.trim(),
          whatsapp: review.whatsapp.replace(/\D/g, ""),
          message,
          attachment: upload,
        }),
      })

      if (!response.ok) throw new Error("request failed")
      setConsoleState("confirmation")
    } catch (submissionError) {
      console.error("[diagnosis-v2] review submission failed", submissionError)
      setError(t.submitError)
    } finally {
      setSubmitting(false)
    }
  }

  function jumpToConsole() {
    document.getElementById("diagnostic-console")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="diagnosis-v2">
      <section className="diagnosis-section diagnosis-hero" aria-labelledby="diagnosis-hero-title">
        <div className="diagnosis-hero-copy">
          <span className="diagnosis-kicker">{t.heroLabel}</span>
          <h1 id="diagnosis-hero-title">
            {t.heroTitleA} <span>{t.heroTitleB}</span>
          </h1>
          <p>{t.heroBody}</p>
          <div className="diagnosis-actions">
            <button type="button" className="diagnosis-button diagnosis-button-primary" onClick={jumpToConsole}>
              {t.start}
              <span aria-hidden="true">→</span>
            </button>
            <a className="diagnosis-button" href={genericWhatsapp(locale)} target="_blank" rel="noopener noreferrer">
              {t.talk}
            </a>
          </div>
        </div>
        <div className="diagnosis-hero-art" aria-hidden="true">
          <Image src="/n3uralia-retro/hero-operations.webp" alt="" fill priority sizes="60vw" />
        </div>
      </section>

      <section className="diagnosis-section diagnosis-gives" aria-labelledby="diagnosis-gives-title">
        <header className="diagnosis-split-heading">
          <div>
            <span className="diagnosis-kicker">{t.givesLabel}</span>
            <h2 id="diagnosis-gives-title">{t.givesTitle}</h2>
          </div>
          <p>{t.givesBody}</p>
        </header>
        <div className="diagnosis-gives-grid">
          {t.gives.map((item, index) => (
            <article key={item[0]} className="diagnosis-invisible-card">
              <div className="diagnosis-card-art" aria-hidden="true">
                <Image src={visualAssets[index]} alt="" fill sizes="25vw" />
              </div>
              <span className="diagnosis-card-number">0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="diagnostic-console" className="diagnosis-section diagnosis-console-section" aria-labelledby="diagnosis-console-title">
        <div className="diagnosis-console-intro">
          <div>
            <span className="diagnosis-kicker">{t.consoleLabel}</span>
            <h2 id="diagnosis-console-title">{t.consoleTitle}</h2>
          </div>
          <p>{t.consoleBody}</p>
        </div>

        <div className="diagnosis-console-frame">
          {consoleState === "questions" ? (
            <div className="diagnosis-console-state">
              <div className="diagnosis-console-top">
                <span>N3 / DIAGNOSTIC CONSOLE</span>
                <span>{String(questionIndex + 1).padStart(2, "0")} / {String(t.questions.length).padStart(2, "0")}</span>
              </div>
              <div className="diagnosis-progress" aria-label={`${questionIndex + 1} ${t.of} ${t.questions.length}`}>
                {t.questions.map((_, index) => (
                  <span key={index} className={index <= questionIndex ? "is-active" : ""} />
                ))}
              </div>

              <div className="diagnosis-question">
                <span className="diagnosis-question-label">{t.question} {questionIndex + 1} {t.of} {t.questions.length}</span>
                <h3>{question.title}</h3>
                <p>{question.helper}</p>

                {question.options ? (
                  <div className="diagnosis-option-list">
                    {question.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        className={answers[question.key] === option ? "is-selected" : ""}
                        onClick={() => setAnswer(option)}
                      >
                        <i aria-hidden="true" />
                        <span>{option}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <textarea
                    value={answers[question.key]}
                    onChange={(event) => setAnswer(event.target.value)}
                    rows={6}
                    placeholder={locale === "es" ? "Describe la operación en términos simples..." : "Describe the operation in simple terms..."}
                  />
                )}

                {error ? <p className="diagnosis-error">{error}</p> : null}
              </div>

              <div className="diagnosis-console-actions">
                <div>
                  {questionIndex > 0 ? (
                    <button type="button" className="diagnosis-text-action" onClick={previousQuestion}>{t.back}</button>
                  ) : null}
                  <a className="diagnosis-text-action" href={genericWhatsapp(locale)} target="_blank" rel="noopener noreferrer">{t.manager}</a>
                </div>
                <button type="button" className="diagnosis-button diagnosis-button-primary" onClick={nextQuestion}>
                  {questionIndex === t.questions.length - 1 ? t.generate : t.continue}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ) : null}

          {consoleState === "read" ? (
            <div className="diagnosis-console-state diagnosis-read-state">
              <span className="diagnosis-kicker">{t.readLabel}</span>
              <h3>{t.readTitle}</h3>
              <p className="diagnosis-read-note">{t.readNote}</p>
              <dl className="diagnosis-read-grid">
                {[read.pattern, read.firstSystem, read.validation, read.complexity, read.readiness].map((value, index) => (
                  <div key={t.resultLabels[index]} className={index === 2 ? "is-wide" : ""}>
                    <dt>{t.resultLabels[index]}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="diagnosis-console-actions diagnosis-read-actions">
                <div>
                  <button type="button" className="diagnosis-text-action" onClick={() => { setConsoleState("questions"); setQuestionIndex(0) }}>{t.edit}</button>
                  <a className="diagnosis-text-action" href={diagnosisWhatsapp(locale, answers, read)} target="_blank" rel="noopener noreferrer">{t.viaWhatsapp}</a>
                </div>
                <button type="button" className="diagnosis-button diagnosis-button-primary" onClick={() => setConsoleState("review")}>
                  {t.sendReview}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          ) : null}

          {consoleState === "review" ? (
            <form className="diagnosis-console-state diagnosis-review-state" onSubmit={submitReview}>
              <span className="diagnosis-kicker">{t.reviewLabel}</span>
              <h3>{t.reviewTitle}</h3>
              <div className="diagnosis-review-grid">
                {([
                  ["name", t.name, "text"],
                  ["company", t.company, "text"],
                  ["email", t.email, "email"],
                  ["whatsapp", t.whatsapp, "tel"],
                ] as const).map(([field, label, type]) => (
                  <label key={field}>
                    <span>{label}</span>
                    <input
                      type={type}
                      value={review[field]}
                      onChange={(event) => setReview((previous) => ({ ...previous, [field]: event.target.value }))}
                      required
                    />
                  </label>
                ))}
                <label className="is-wide">
                  <span>{t.note}</span>
                  <textarea
                    rows={4}
                    value={review.note}
                    onChange={(event) => setReview((previous) => ({ ...previous, note: event.target.value }))}
                  />
                </label>
                <label className="is-wide diagnosis-upload">
                  <span>{t.upload}</span>
                  <input
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xlsx,.csv,.txt"
                    onChange={(event) => {
                      const next = event.target.files?.[0] || null
                      if (next && next.size > 2 * 1024 * 1024) {
                        setAttachment(null)
                        setError(t.fileTooLarge)
                        event.currentTarget.value = ""
                        return
                      }
                      setAttachment(next)
                      setError("")
                    }}
                  />
                  <small>{attachment ? attachment.name : t.uploadHelp}</small>
                </label>
              </div>
              {error ? <p className="diagnosis-error">{error}</p> : null}
              <div className="diagnosis-console-actions">
                <button type="button" className="diagnosis-text-action" onClick={() => setConsoleState("read")}>{t.back}</button>
                <button type="submit" className="diagnosis-button diagnosis-button-primary" disabled={submitting}>
                  {submitting ? t.sending : t.sendRequest}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          ) : null}

          {consoleState === "confirmation" ? (
            <div className="diagnosis-console-state diagnosis-confirmation">
              <span className="diagnosis-kicker">{t.receivedLabel}</span>
              <h3>{t.receivedTitle}</h3>
              <p>{t.receivedBody}</p>
              <div className="diagnosis-actions">
                <a className="diagnosis-button diagnosis-button-primary" href={diagnosisWhatsapp(locale, answers, read)} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <Link className="diagnosis-button" href={`/${locale}/${locale === "es" ? "soluciones" : "solutions"}`}>
                  {t.explore}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="diagnosis-section diagnosis-next" aria-labelledby="diagnosis-next-title">
        <header className="diagnosis-split-heading">
          <div>
            <span className="diagnosis-kicker">{t.nextLabel}</span>
            <h2 id="diagnosis-next-title">{t.nextTitle}</h2>
          </div>
          <p>{t.nextBody}</p>
        </header>
        <div className="diagnosis-next-grid">
          {t.next.map((item, index) => (
            <article key={item[0]}>
              <span>0{index + 1}</span>
              <h3>{item[0]}</h3>
              <p>{item[1]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="diagnosis-section diagnosis-direct" aria-labelledby="diagnosis-direct-title">
        <div className="diagnosis-direct-art" aria-hidden="true">
          <Image src="/n3uralia-retro/operations-team.webp" alt="" fill sizes="100vw" />
        </div>
        <div className="diagnosis-direct-panel">
          <span className="diagnosis-kicker">{t.directLabel}</span>
          <h2 id="diagnosis-direct-title">{t.directTitleA} <span>{t.directTitleB}</span></h2>
          <p>{t.directBody}</p>
          <a className="diagnosis-button diagnosis-button-primary" href={genericWhatsapp(locale)} target="_blank" rel="noopener noreferrer">
            {t.talk}
            <span aria-hidden="true">→</span>
          </a>
          <div className="diagnosis-direct-shortcuts">
            {t.contactShortcuts.map(([kind, title, body]) => (
              <a
                key={title}
                href={
                  kind === "whatsapp"
                    ? genericWhatsapp(locale)
                    : kind === "email"
                      ? "mailto:info@n3uralia.com"
                      : "mailto:info@n3uralia.com?subject=N3uralia%20-%2030%20minute%20call"
                }
                target={kind === "whatsapp" ? "_blank" : undefined}
                rel={kind === "whatsapp" ? "noopener noreferrer" : undefined}
              >
                <Icon kind={kind} />
                <strong>{title}</strong>
                <span>{body}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="diagnosis-section diagnosis-contact" aria-labelledby="diagnosis-contact-title">
        <div className="diagnosis-contact-art" aria-hidden="true">
          <Image src="/n3uralia-retro/final-command.webp" alt="" fill sizes="100vw" />
        </div>
        <div className="diagnosis-contact-panel">
          <div className="diagnosis-contact-head">
            <div>
              <span className="diagnosis-kicker">{t.contactLabel}</span>
              <h2 id="diagnosis-contact-title">{t.contactTitle}</h2>
            </div>
            <p>{t.contactBody}</p>
          </div>
          <div className="diagnosis-contact-grid">
            {t.contacts.map(([kind, title, body]) => {
              const href =
                kind === "whatsapp"
                  ? genericWhatsapp(locale)
                  : kind === "email"
                    ? "mailto:info@n3uralia.com"
                    : kind === "document"
                      ? "#diagnostic-console"
                      : "mailto:info@n3uralia.com?subject=N3uralia%20-%2030%20minute%20call"
              return (
                <a key={title} href={href} target={kind === "whatsapp" ? "_blank" : undefined} rel={kind === "whatsapp" ? "noopener noreferrer" : undefined}>
                  <Icon kind={kind} />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </a>
              )
            })}
          </div>
          <div className="diagnosis-contact-actions">
            <button type="button" className="diagnosis-button diagnosis-button-primary" onClick={jumpToConsole}>{t.startAgain}</button>
            <a className="diagnosis-button" href={genericWhatsapp(locale)} target="_blank" rel="noopener noreferrer">{t.talk}</a>
          </div>
        </div>
      </section>

      <a className="diagnosis-mobile-whatsapp" href={managerUrl} target="_blank" rel="noopener noreferrer" aria-label={t.talk}>
        <Icon kind="whatsapp" />
      </a>
    </main>
  )
}
