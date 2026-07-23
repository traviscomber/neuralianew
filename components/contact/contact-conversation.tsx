"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Loader, MessageSquare, Send, X } from "lucide-react"
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
        ? `Gracias, ${name}. Recibimos tu consulta y responderemos a ${email}.${whatsapp ? ` También podemos escribirte a ${whatsapp}.` : ""}`
        : `Thanks, ${name}. We received your message and will reply to ${email}.${whatsapp ? ` We can also reach you at ${whatsapp}.` : ""}`,
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
    <div className="flex h-full min-h-[31rem] flex-col bg-white">
      <div className="flex flex-1 flex-col overflow-hidden">
        <div ref={messagesContainerRef} className="flex-1 space-y-4 overflow-y-auto p-5 scroll-smooth md:p-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs rounded-[1.1rem] px-4 py-3 sm:max-w-md ${
                  message.role === "user"
                    ? "rounded-br-sm bg-[#173634] text-white"
                    : "rounded-bl-sm bg-[#eef5f2] text-[#243331]"
                }`}
              >
                <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading ? (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-[1.1rem] rounded-bl-sm bg-[#eef5f2] px-4 py-2 text-[#243331]">
                <Loader className="h-4 w-4 animate-spin text-[#789b96]" />
                <p className="text-sm">{copy.loading}</p>
              </div>
            </div>
          ) : null}

          <div ref={messagesEndRef} />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[#d8e5e2] bg-[#fbfbfa] p-4">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.inputPlaceholder}
              className="flex-1 rounded-full border border-[#d8e5e2] bg-white px-4 py-3 text-sm text-[#243331] placeholder:text-[#9ba5a2] transition-colors focus:border-[#789b96] focus:outline-none focus:ring-1 focus:ring-[#789b96]"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="grid h-12 w-12 place-items-center rounded-full bg-[#173634] text-white transition-colors hover:bg-[#244946] disabled:cursor-not-allowed disabled:opacity-50"
              aria-label={locale === "es" ? "Enviar respuesta" : "Send reply"}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="space-y-4 border-t border-[#d8e5e2] bg-[#fbfbfa] p-5">
            <div className="flex items-center gap-3 rounded-[1.1rem] bg-[#eef5f2] p-4">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#789b96]" />
              <p className="text-sm font-semibold text-[#173634]">{copy.successTitle}</p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={resetConversation}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#173634] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]"
              >
                <MessageSquare className="h-4 w-4" />
                {copy.newProject}
              </button>

              <Link
                href={copy.homeHref}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#b9d0cb] bg-white px-4 py-3 text-center text-sm font-semibold text-[#526e69] transition-colors hover:bg-[#eef5f2]"
              >
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
