"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Loader } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ContactConversation() {
  const [isMounted, setIsMounted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hola! Soy el asistente de N3uralia. Cuéntame tu nombre para comenzar.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState("name")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  if (!isMounted) {
    return <div className="flex items-center justify-center h-full text-muted-foreground">Cargando...</div>
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate assistant response
    setTimeout(() => {
      let assistantMessage = ""

      if (step === "name") {
        assistantMessage = `Mucho gusto, ${input}! Cuál es tu correo?`
        setStep("email")
      } else if (step === "email") {
        assistantMessage = `Perfecto, ${input}. Cuál es el nombre de tu empresa?`
        setStep("company")
      } else if (step === "company") {
        assistantMessage = `Excelente, ${input}. Cuéntame sobre tu proyecto en pocas palabras.`
        setStep("message")
      } else {
        assistantMessage =
          "Gracias por la información! Nos pondremos en contacto pronto a través de email. También puedes contactarnos por WhatsApp: +56 9 9382 6127 o email: info@n3uralia.com"
        setStep("done")
      }

      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: assistantMessage,
      }

      setMessages((prev) => [...prev, response])
      setIsLoading(false)
    }, 500)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted p-3 rounded-lg">
              <Loader className="w-4 h-4 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu respuesta..."
            disabled={isLoading || step === "done"}
            className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim() || step === "done"}
            className="px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  )
}
