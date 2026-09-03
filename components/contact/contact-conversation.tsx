"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Loader, MessageSquare, Send, X, MessageCircle } from "lucide-react"
import type { Locale } from "@/lib/get-locale"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ContactData {
  name?: string
  email?: string
  company?: string
  message?: string
  whatsapp?: string
}

type Step = "name" | "email" | "company" | "message" | "whatsapp"

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
    greeting: isES
      ? "Hola. Soy el asistente de N3uralia. ¿Cuál es tu nombre?"
      : "Hi. I am N3uralia's assistant. What is your name?",
    askEmail: (name: string) =>
      isES ? `Mucho gusto, ${name}. ¿Cuál es tu email?` : `Great to meet you, ${name}. What is your email?`,
    invalidEmail: isES
      ? "Ese email no parece válido. ¿Podrías revisarlo?"
      : "That email does not look valid. Could you check it?",
    askCompany: isES
      ? "Perfecto. ¿En qué empresa trabajas? Puedes escribir 'No aplica'."
      : "Great. Which company do you work at? You can write 'Not applicable'.",
    askMessage: isES
      ? "Gracias. Ahora cuéntame qué quieres construir, automatizar o mejorar."
      : "Thanks. Now tell me what you want to build, automate, or improve.",
    askWhatsapp: isES
      ? "Último paso. Si quieres, deja tu WhatsApp para responderte más rápido. Puedes poner tu número chileno o escribir 'omitir'."
      : "Last step. If you want, leave your WhatsApp so we can reply faster. You can enter a Chilean number or type 'skip'.",
    invalidWhatsapp: isES
      ? "No pude validar ese número. Usa un formato como +56 9 1234 5678, 56912345678 o escribe 'omitir'."
      : "I could not validate that number. Use a format like +56 9 1234 5678, 56912345678, or type 'skip'.",
    loading: isES ? "Enviando..." : "Sending...",
    successTitle: isES ? "Mensaje enviado" : "Message sent",
    successBody: (name: string, email: string, whatsapp?: string) =>
      isES
        ? `Gracias, ${name}. Recibimos tu consulta en ${email}. El equipo N3uralia recibirá una notificación automática por WhatsApp y se pondrá en contacto pronto.${whatsapp ? ` También podemos escribirte a +${whatsapp}.` : ""}`
        : `Thanks, ${name}. We received your message at ${email}. The N3uralia team will receive an automatic WhatsApp notification and will be in touch shortly.${whatsapp ? ` We can also reach you at +${whatsapp}.` : ""}`,
    contactWhatsapp: isES ? "Contactar por WhatsApp" : "Contact via WhatsApp",
    whatsappUrl: "https://wa.me/56993826127",
    error: isES
      ? "No pudimos enviar tu mensaje. Intenta otra vez o escríbenos a info@n3uralia.com."
      : "We could not send your message. Please try again or email info@n3uralia.com.",
    inputPlaceholder: isES ? "Escribe tu respuesta..." : "Type your reply...",
    newProject: isES ? "Iniciar nuevo proyecto" : "Start a new project",
    close: isES ? "Volver al inicio" : "Back to home",
    homeHref: `/${locale}`,
    skipWords: isES ? ["omitir", "no", "no aplica"] : ["skip", "not applicable", "na"],
  }
}

export function ContactConversation({ locale }: { locale: Locale }) {
  const copy = getCopy(locale)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: copy.greeting,
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [contactData, setContactData] = useState<ContactData>({})
  const [currentStep, setCurrentStep] = useState<Step>("name")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMessages([{ id: "initial", role: "assistant", content: copy.greeting }])
    setInput("")
    setIsLoading(false)
    setSubmitted(false)
    setContactData({})
    setCurrentStep("name")
  }, [copy.greeting])

  useEffect(() => {
    setTimeout(() => {
      if (messagesEndRef.current && messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
      }
    }, 0)
  }, [messages, isLoading])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = input.trim()

    if (!value || isLoading) return

    setMessages((prev) => [...prev, { id: `${Date.now()}-user`, role: "user", content: value }])

    let nextStep = currentStep
    const nextData = { ...contactData }
    let assistantResponse = ""

    if (currentStep === "name") {
      nextData.name = value
      assistantResponse = copy.askEmail(value)
      nextStep = "email"
    } else if (currentStep === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}-assistant`, role: "assistant", content: copy.invalidEmail },
        ])
        setInput("")
        return
      }

      nextData.email = value
      assistantResponse = copy.askCompany
      nextStep = "company"
    } else if (currentStep === "company") {
      nextData.company = copy.skipWords.includes(value.toLowerCase()) ? "" : value
      assistantResponse = copy.askMessage
      nextStep = "message"
    } else if (currentStep === "message") {
      nextData.message = value
      assistantResponse = copy.askWhatsapp
      nextStep = "whatsapp"
    } else {
      const shouldSkip = copy.skipWords.includes(value.toLowerCase())
      const normalized = shouldSkip ? "" : normalizeWhatsapp(value)

      if (normalized === null) {
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}-assistant`, role: "assistant", content: copy.invalidWhatsapp },
        ])
        setInput("")
        return
      }

      nextData.whatsapp = normalized || ""
      setContactData(nextData)
      setIsLoading(true)

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(nextData),
        })

        if (!response.ok) throw new Error("Failed to send contact")

        assistantResponse = copy.successBody(nextData.name || "", nextData.email || "", nextData.whatsapp)
        setSubmitted(true)
      } catch (error) {
        console.error("[contact] send error:", error)
        assistantResponse = copy.error
      } finally {
        setIsLoading(false)
      }
    }

    setContactData(nextData)
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-assistant`, role: "assistant", content: assistantResponse },
    ])
    setCurrentStep(nextStep)
    setInput("")
  }

  function resetConversation() {
    setMessages([{ id: "initial", role: "assistant", content: copy.greeting }])
    setInput("")
    setSubmitted(false)
    setContactData({})
    setCurrentStep("name")
  }

  return (
    <div className="flex h-full min-h-[31rem] flex-col bg-[var(--n3-black)]">
      <div className="flex flex-1 flex-col overflow-hidden">
        <div ref={messagesContainerRef} className="flex-1 space-y-4 overflow-y-auto p-5 scroll-smooth md:p-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs border px-4 py-3 sm:max-w-md ${
                  message.role === "user"
                    ? "border-[var(--n3-teal-soft)] bg-[rgba(168,217,216,.09)] text-[var(--n3-text-light)]"
                    : "border-[rgba(118,214,214,.16)] bg-[var(--n3-dark-surface)] text-[var(--n3-text-muted)]"
                }`}
              >
                <p className="whitespace-pre-wrap text-[12px] leading-6">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading ? (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 border border-[rgba(118,214,214,.16)] bg-[var(--n3-dark-surface)] px-4 py-3 text-[var(--n3-text-muted)]">
                <Loader className="h-4 w-4 animate-spin text-[var(--n3-teal-soft)]" />
                <p className="text-[12px]">{copy.loading}</p>
              </div>
            </div>
          ) : null}

          <div ref={messagesEndRef} />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[rgba(118,214,214,.16)] bg-[var(--n3-deep)] p-4">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.inputPlaceholder}
              className="min-h-12 flex-1 border border-[rgba(168,217,216,.24)] bg-[var(--n3-black)] px-4 py-3 text-[13px] text-[var(--n3-text-light)] placeholder:text-[var(--n3-text-muted)] transition-colors focus:border-[var(--n3-teal)] focus:outline-none focus:ring-1 focus:ring-[var(--n3-teal)]"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="grid h-12 w-12 place-items-center border border-[var(--n3-teal-soft)] bg-[var(--n3-teal-soft)] text-[var(--n3-black)] transition-colors hover:bg-[#c5e8e7] disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={locale === "es" ? "Enviar respuesta" : "Send reply"}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-4 border-t border-[rgba(118,214,214,.16)] bg-[var(--n3-deep)] p-5">
            <div className="flex items-center gap-3 border border-[rgba(168,217,216,.22)] bg-[var(--n3-dark-surface)] p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[var(--n3-teal-soft)]" />
              <p className="font-[var(--font-rajdhani)] text-sm tracking-[.12em] text-[var(--n3-text-light)] uppercase">{copy.successTitle}</p>
            </div>

            <p className="text-[12px] leading-6 text-[var(--n3-text-muted)]">{copy.successBody(contactData.name || "", contactData.email || "", contactData.whatsapp)}</p>

            <div className="flex flex-col gap-2">
              <a
                href={copy.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button retro-button-primary w-full gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {copy.contactWhatsapp}
              </a>

              <button
                type="button"
                onClick={resetConversation}
                className="retro-button w-full gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                {copy.newProject}
              </button>

              <Link href={copy.homeHref} className="retro-button w-full gap-2">
                <X className="h-4 w-4" />
                {copy.close}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
