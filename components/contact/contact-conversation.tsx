"use client"

import React, { useState, useRef, useEffect } from "react"
import { Send, Loader, CheckCircle2 } from "lucide-react"

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

export function ContactConversation() {
  const [isMounted, setIsMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hola 👋 Soy el asistente de N3uralia. ¿Cuál es tu nombre?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [contactData, setContactData] = useState<ContactData>({})
  const [currentStep, setCurrentStep] = useState("name")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [messages])

  if (!isMounted) {
    return <div className="p-4 text-center text-muted-foreground">Cargando chat...</div>
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    let assistantResponse = ""

    try {
      if (currentStep === "name") {
        setContactData({ ...contactData, name: input })
        setCurrentStep("email")
        assistantResponse = `Gusto en conocerte, ${input}. ¿Cuál es tu email?`
      } else if (currentStep === "email") {
        setContactData({ ...contactData, email: input })
        setCurrentStep("company")
        assistantResponse = `Perfecto, ${input}. ¿De qué empresa eres?`
      } else if (currentStep === "company") {
        setContactData({ ...contactData, company: input })
        setCurrentStep("message")
        assistantResponse = `Excelente, ${input}. Cuéntanos: ¿cuál es tu proyecto o necesidad?`
      } else if (currentStep === "message") {
        setContactData({ ...contactData, message: input })
        setCurrentStep("whatsapp")
        assistantResponse = `Gracias por los detalles. ¿Cuál es tu número de WhatsApp? (con código de país, ej: +56912345678)`
      } else if (currentStep === "whatsapp") {
        const whatsapp = input.replace(/\D/g, "")
        setContactData({ ...contactData, whatsapp })

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: contactData.name,
            email: contactData.email,
            company: contactData.company,
            message: contactData.message,
            whatsapp: whatsapp,
          }),
        })

        if (!response.ok) throw new Error("Error sending contact")

        assistantResponse = `✅ ¡Listo! Hemos recibido tu consulta. Te contactaremos pronto a ${contactData.email} y por WhatsApp. ¡Gracias!`
        setCurrentStep("done")
      }
    } catch (error) {
      console.error("Contact error:", error)
      assistantResponse = "Error al enviar. Intenta de nuevo o contacta info@n3uralia.com"
    } finally {
      setIsLoading(false)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            role: "assistant",
            content: assistantResponse,
          },
        ])
      }, 500)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <div ref={containerRef} className="flex-1 overflow-y-auto space-y-3 p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2">
              <Loader className="w-4 h-4 animate-spin" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe aquí..."
          disabled={isLoading || currentStep === "done"}
          className="flex-1 px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground text-sm"
        />
        <button
          type="submit"
          disabled={isLoading || currentStep === "done"}
          className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  )
}
