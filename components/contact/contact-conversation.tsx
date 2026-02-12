"use client"

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
  const [currentStep, setCurrentStep] = useState("name") // name, email, company, message, review
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [continueConversation, setContinueConversation] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Auto-scroll to bottom smoothly whenever messages change
    setTimeout(() => {
      if (messagesEndRef.current && messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight
      }
    }, 0)
  }, [messages, isLoading])

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
      assistantResponse = "Perfecto. Verifiquemos tus datos antes de enviar:"
      nextStep = "review"
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
    
    // Show confirmation dialog when review step is reached
    if (nextStep === "review") {
      setShowConfirmation(true)
    }
    
    setInput("")
  }

  const handleConfirmSubmit = async () => {
    setIsLoading(true)
    setShowConfirmation(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactData.name,
          email: contactData.email,
          company: contactData.company,
          message: contactData.message,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send contact")
      }

      const successMessage = `✅ Mensaje enviado correctamente, ${contactData.name}.\n\nHemos recibido tu consulta y te responderemos pronto a ${contactData.email}. ¡Gracias por contactar a N3uralia!`
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: successMessage,
        },
      ])
      setSubmitted(true)
    } catch (error) {
      console.error("[v0] Contact error:", error)
      const errorMessage =
        "❌ Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contacta directamente a info@n3uralia.com"
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: errorMessage,
        },
      ])
      setShowConfirmation(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEditField = (field: string) => {
    setShowConfirmation(false)
    if (field === "name") {
      setCurrentStep("name")
      setInput(contactData.name || "")
    } else if (field === "email") {
      setCurrentStep("email")
      setInput(contactData.email || "")
    } else if (field === "company") {
      setCurrentStep("company")
      setInput(contactData.company || "")
    } else if (field === "message") {
      setCurrentStep("message")
      setInput(contactData.message || "")
    }
    // Remove the last assistant message to go back
    setMessages((prev) => prev.slice(0, -2))
  }

  const handleContinueConversation = () => {
    setContinueConversation(true)
    setCurrentStep("message")
    setInput("")
    const continueMessage: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: "Excelente. ¿Hay algo más que quieras consultarme? Estoy aquí para ayudarte.",
    }
    setMessages((prev) => [...prev, continueMessage])
  }

  const handleStartNewChat = () => {
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

  return (
    <div className="space-y-6">
      {/* Chat Container */}
      <div className="border border-border rounded-lg overflow-hidden flex flex-col bg-card shadow-sm">
        {/* Messages */}
        <div
          ref={messagesContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 h-96 scroll-smooth"
        >
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

        {/* Input or Success State */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-card flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu respuesta..."
              className="flex-1 px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-muted-foreground transition-colors"
              disabled={isLoading || currentStep === "review"}
              autoFocus
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim() || currentStep === "review"}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        ) : (
          <div className="border-t border-border p-4 bg-green-50 dark:bg-green-900/20 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-300">
                Tu mensaje fue enviado correctamente. Nos pondremos en contacto pronto.
              </p>
            </div>
            
            {/* Action Buttons after submission */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={handleContinueConversation}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                Continuar conversación
              </button>
              <button
                onClick={handleStartNewChat}
                disabled={isLoading}
                className="w-full px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2 text-sm font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Nuevo chat
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Confirmation Dialog Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border border-border rounded-lg shadow-lg max-w-md w-full p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Confirmar información</h3>
              <div className="space-y-4 bg-muted/30 rounded-lg p-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Nombre</p>
                  <p className="text-foreground">{contactData.name}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Email</p>
                  <p className="text-foreground">{contactData.email}</p>
                </div>
                {contactData.company && (
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase">Empresa</p>
                    <p className="text-foreground">{contactData.company}</p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Mensaje</p>
                  <p className="text-foreground text-sm leading-relaxed">{contactData.message}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirmSubmit}
                disabled={isLoading}
                className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                Enviar consulta
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleEditField("name")}
                  className="text-sm px-3 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors flex items-center justify-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  Nombre
                </button>
                <button
                  onClick={() => handleEditField("email")}
                  className="text-sm px-3 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors flex items-center justify-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  Email
                </button>
                {contactData.company && (
                  <button
                    onClick={() => handleEditField("company")}
                    className="text-sm px-3 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors flex items-center justify-center gap-1"
                  >
                    <Edit2 className="w-3 h-3" />
                    Empresa
                  </button>
                )}
                <button
                  onClick={() => handleEditField("message")}
                  className="text-sm px-3 py-2 border border-border text-foreground rounded hover:bg-muted transition-colors flex items-center justify-center gap-1"
                >
                  <Edit2 className="w-3 h-3" />
                  Mensaje
                </button>
              </div>

              <button
                onClick={() => setShowConfirmation(false)}
                className="w-full text-sm px-4 py-2 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

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
