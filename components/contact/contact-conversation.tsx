"use client"

import React, { useState, useRef, useEffect } from "react"
import { Send, Loader, CheckCircle2, AlertCircle } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
}

interface ContactData {
  name?: string
  email?: string
  company?: string
  message?: string
}

export function ContactConversation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "assistant",
      content: "Hola 👋 Soy el asistente de N3uralia. ¿Cuál es tu nombre?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [contactData, setContactData] = useState<ContactData>({})
  const [currentStep, setCurrentStep] = useState("name") // name, email, company, message
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])

    // Process based on current step
    let nextStep = currentStep
    let assistantResponse = ""

    if (currentStep === "name") {
      setContactData((prev) => ({ ...prev, name: input }))
      assistantResponse = `Mucho gusto, ${input}. ¿Cuál es tu email?`
      nextStep = "email"
    } else if (currentStep === "email") {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input)) {
        assistantResponse = "El email no parece válido. ¿Podrías verificarlo?"
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: assistantResponse,
          },
        ])
        setInput("")
        return
      }
      setContactData((prev) => ({ ...prev, email: input }))
      assistantResponse = "Perfecto. ¿En qué empresa trabajas? (opcional, puedes poner 'No aplica')"
      nextStep = "company"
    } else if (currentStep === "company") {
      const company = input.toLowerCase() === "no aplica" ? "" : input
      setContactData((prev) => ({ ...prev, company }))
      assistantResponse =
        "Excelente. Ahora cuéntame: ¿cuál es tu consulta o qué necesitas construir? (sé específico 💡)"
      nextStep = "message"
    } else if (currentStep === "message") {
      setContactData((prev) => ({ ...prev, message: input }))
      assistantResponse = "Perfecto. Estamos procesando tu mensaje..."
      setIsLoading(true)

      // Send email
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactData.name,
            email: contactData.email,
            company: contactData.company,
            message: input,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to send contact")
        }

        assistantResponse = `✅ Mensaje enviado correctamente, ${contactData.name}.\n\nHemos recibido tu consulta y te responderemos pronto a ${contactData.email}. ¡Gracias por contactar a N3uralia!`
        setSubmitted(true)
      } catch (error) {
        console.error("[v0] Contact error:", error)
        assistantResponse =
          "❌ Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contacta directamente a contacto@n3uralia.com"
      } finally {
        setIsLoading(false)
      }
    }

    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantResponse,
      },
    ])
    setCurrentStep(nextStep)
    setInput("")
  }

  return (
    <div className="space-y-6">
      {/* Chat Container */}
      <div className="border border-border rounded-lg overflow-hidden flex flex-col bg-card shadow-sm">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 h-96">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : message.role === "system"
                      ? "bg-yellow-100 text-yellow-900 rounded-bl-none border border-yellow-300"
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
                <p className="text-sm">Procesando...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu respuesta..."
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
          <div className="border-t border-border p-4 bg-green-50 dark:bg-green-900/20 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p className="text-sm text-green-700 dark:text-green-300">
              Tu mensaje fue enviado correctamente. Nos pondremos en contacto pronto.
            </p>
          </div>
        )}
      </div>

      {/* Help Text */}
      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <p className="text-xs text-muted-foreground">
          💡 <strong>Tip:</strong> Sé específico. Cuéntanos el problema que necesitas resolver, quiénes son tus usuarios
          y cuál es tu timeline ideal.
        </p>
      </div>
    </div>
  )
}
