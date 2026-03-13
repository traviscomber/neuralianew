"use client"

// Force rebuild cache invalidation
import React, { useState, useRef, useEffect } from "react"
import { Send, Loader, CheckCircle2, AlertCircle, Edit2, X, MessageSquare, RotateCcw } from "lucide-react"

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
  whatsapp?: string
}

export function ContactConversation() {
  const [isMounted, setIsMounted] = useState(false)
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
  const [currentStep, setCurrentStep] = useState("name")
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [continueConversation, setContinueConversation] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  // Mount check for hydration safety
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-scroll when messages update
  useEffect(() => {
    if (isMounted && messagesContainerRef.current) {
      setTimeout(() => {
        if (messagesContainerRef.current) {
          messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
        }
      }, 100)
    }
  }, [messages, isLoading, isMounted])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])

    let nextStep = currentStep
    let assistantResponse = ""

    if (currentStep === "name") {
      setContactData((prev) => ({ ...prev, name: input }))
      assistantResponse = `Mucho gusto, ${input}. ¿Cuál es tu email?`
      nextStep = "email"
    } else if (currentStep === "email") {
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
      assistantResponse = "Excelente. Ahora cuéntame: ¿cuál es tu consulta o qué necesitas construir?"
      nextStep = "message"
    } else if (currentStep === "message") {
      setContactData((prev) => ({ ...prev, message: input }))
      assistantResponse = "Perfecto. ¿Cuál es tu número de WhatsApp? (ej: 56912345678)"
      nextStep = "whatsapp"
    } else if (currentStep === "whatsapp") {
      const phoneRegex = /^56[9]?\d{8}$/
      const cleanedPhone = input.replace(/\D/g, "")
      if (!phoneRegex.test(cleanedPhone)) {
        assistantResponse = "El número no parece válido. Ingresa un número chileno válido."
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
      setContactData((prev) => ({ ...prev, whatsapp: cleanedPhone }))
      setIsLoading(true)

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactData.name,
            email: contactData.email,
            company: contactData.company,
            message: contactData.message,
            whatsapp: cleanedPhone,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to send contact")
        }

        assistantResponse = `✅ Mensaje enviado correctamente, ${contactData.name}.\n\nHemos recibido tu consulta y te responderemos pronto a ${contactData.email}.\n\nTambién contactamos por WhatsApp: https://wa.me/${cleanedPhone}`
        setSubmitted(true)
      } catch (error) {
        assistantResponse = "❌ Error al enviar. Contacta a info@n3uralia.com"
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

  const handleNewProject = () => {
    setMessages([
      {
        id: "initial",
        role: "assistant",
        content: "Hola 👋 Soy el asistente de N3uralia. ¿Cuál es tu nombre?",
      },
    ])
    setInput("")
    setSubmitted(false)
    setContactData({})
    setCurrentStep("name")
    setContinueConversation(false)
  }

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground px-4 py-2 rounded-lg flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin" />
              <p className="text-sm">Procesando...</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="border-t border-border p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe aquí..."
            className="flex-1 px-3 py-2 border border-border bg-background rounded-lg text-sm"
            disabled={isLoading}
            autoFocus
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="border-t border-border p-4 space-y-3">
          <button
            onClick={handleNewProject}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
          >
            Nuevo proyecto
          </button>
          <a
            href="/"
            className="block w-full px-4 py-2 border border-border text-center rounded-lg hover:bg-muted"
          >
            Cerrar
          </a>
        </div>
      )}
    </div>
  )
}
