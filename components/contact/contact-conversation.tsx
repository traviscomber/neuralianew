"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
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

  if (!cleaned) {
    return ""
  }

  if (/^569\d{8}$/.test(cleaned)) {
    return cleaned
  }

  if (/^9\d{8}$/.test(cleaned)) {
    return `56${cleaned}`
  }

  if (/^56\d{8}$/.test(cleaned)) {
    return `569${cleaned.slice(2)}`
  }

  return null
}

export function ContactConversation({ locale }: { locale: Locale }) {
  const isES = locale === "es"
  const copy = useMemo(
    () => ({
      greeting: isES
        ? "Hola. Soy el asistente de N3uralia. Cual es tu nombre?"
        : "Hi. I am N3uralia's assistant. What is your name?",
      askEmail: (name: string) =>
        isES ? `Mucho gusto, ${name}. Cual es tu email?` : `Great to meet you, ${name}. What is your email?`,
      invalidEmail: isES
        ? "Ese email no parece valido. Podrias revisarlo?"
        : "That email does not look valid. Could you check it?",
      askCompany: isES
        ? "Perfecto. En que empresa trabajas? Puedes escribir 'No aplica'."
        : "Great. Which company do you work at? You can write 'Not applicable'.",
      askMessage: isES
        ? "Gracias. Ahora cuentame que quieres construir, automatizar o mejorar."
        : "Thanks. Now tell me what you want to build, automate, or improve.",
      askWhatsapp: isES
        ? "Ultimo paso. Si quieres, deja tu WhatsApp para responderte mas rapido. Puedes poner tu numero chileno o escribir 'omitir'."
        : "Last step. If you want, leave your WhatsApp so we can reply faster. You can enter a Chilean number or type 'skip'.",
      invalidWhatsapp: isES
        ? "No pude validar ese numero. Usa un formato como +56 9 1234 5678, 56912345678 o escribe 'omitir'."
        : "I could not validate that number. Use a format like +56 9 1234 5678, 56912345678, or type 'skip'.",
      loading: isES ? "Enviando..." : "Sending...",
      successTitle: isES ? "Mensaje enviado" : "Message sent",
      successBody: (name: string, email: string, whatsapp?: string) =>
        isES
          ? `Gracias, ${name}. Recibimos tu consulta y responderemos a ${email}.${whatsapp ? ` Tambien podemos escribirte a ${whatsapp}.` : ""}`
          : `Thanks, ${name}. We received your message and will reply to ${email}.${whatsapp ? ` We can also reach you at ${whatsapp}.` : ""}`,
      error: isES
        ? "No pudimos enviar tu mensaje. Intenta otra vez o escribenos a info@n3uralia.com."
        : "We could not send your message. Please try again or email info@n3uralia.com.",
      inputPlaceholder: isES ? "Escribe tu respuesta..." : "Type your reply...",
      newProject: isES ? "Iniciar nuevo proyecto" : "Start a new project",
      close: isES ? "Volver al inicio" : "Back to home",
      homeHref: `/${locale}`,
      skipWords: isES ? ["omitir", "no", "no aplica"] : ["skip", "not applicable", "na"],
    }),
    [isES, locale],
  )

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
    setMessages([
      {
        id: "initial",
        role: "assistant",
        content: copy.greeting,
      },
    ])
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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = input.trim()

    if (!value || isLoading) {
      return
    }

    const userMessage: Message = {
      id: `${Date.now()}-user`,
      role: "user",
      content: value,
    }

    setMessages((prev) => [...prev, userMessage])

    let nextStep = currentStep
    let nextData = { ...contactData }
    let assistantResponse = ""

    if (currentStep === "name") {
      nextData.name = value
      assistantResponse = copy.askEmail(value)
      nextStep = "email"
    } else if (currentStep === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        assistantResponse = copy.invalidEmail
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}-assistant`, role: "assistant", content: assistantResponse },
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
        assistantResponse = copy.invalidWhatsapp
        setMessages((prev) => [
          ...prev,
          { id: `${Date.now()}-assistant`, role: "assistant", content: assistantResponse },
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
          body: JSON.stringify({
            name: nextData.name,
            email: nextData.email,
            company: nextData.company,
            message: nextData.message,
            whatsapp: nextData.whatsapp,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to send contact")
        }

        assistantResponse = copy.successBody(
          nextData.name || "",
          nextData.email || "",
          nextData.whatsapp,
        )
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
      {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: assistantResponse,
      },
    ])
    setCurrentStep(nextStep)
    setInput("")
  }

  function resetConversation() {
    setMessages([
      {
        id: "initial",
        role: "assistant",
        content: copy.greeting,
      },
    ])
    setInput("")
    setSubmitted(false)
    setContactData({})
    setCurrentStep("name")
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-hidden flex flex-col bg-card">
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs sm:max-w-md px-4 py-3 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-foreground rounded-bl-none"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin" />
                <p className="text-sm">{copy.loading}</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={copy.inputPlaceholder}
              className="flex-1 px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-muted-foreground transition-colors"
              disabled={isLoading}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="border-t border-border p-4 bg-card space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-border">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="text-sm text-foreground font-medium">{copy.successTitle}</p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={resetConversation}
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                {copy.newProject}
              </button>

              <Link
                href={copy.homeHref}
                className="w-full px-4 py-3 border border-border text-foreground rounded-lg hover:bg-muted transition-colors font-semibold text-center flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                {copy.close}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
