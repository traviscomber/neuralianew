"use client"

import React, { useState, useRef, useEffect } from "react"
import { Send, Loader } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ContactConversation() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error("Chat API error")
      }

      const reader = response.body?.getReader()
      if (!reader) throw new Error("No response body")

      let fullContent = ""
      const assistantMessageId = (Date.now() + 1).toString()

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        fullContent += chunk

        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1]
          if (lastMessage?.role === "assistant" && lastMessage.id === assistantMessageId) {
            return [...prev.slice(0, -1), { ...lastMessage, content: fullContent }]
          }
          return [
            ...prev,
            {
              id: assistantMessageId,
              role: "assistant",
              content: fullContent,
            },
          ]
        })
      }
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Lo siento, hubo un error. Intenta de nuevo.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Chat Container */}
      <div className="border border-border rounded-lg overflow-hidden flex flex-col bg-card shadow-sm">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 h-96">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Hola 👋</p>
                <p className="text-sm text-muted-foreground">¿Cuéntame qué onda con tu proyecto?</p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin" />
                <p className="text-sm">Escribiendo...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="border-t border-border p-4 bg-card flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="flex-1 px-4 py-2 border border-border bg-background text-foreground rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm placeholder-muted-foreground transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* Help Text */}
      <div className="bg-muted/30 border border-border rounded-lg p-4">
        <p className="text-xs text-muted-foreground">
          💡 <strong>Tip:</strong> Sé específico. Cuéntanos sobre el problema que resuelves, quiénes son tus usuarios y cuál es tu timeline ideal.
        </p>
      </div>
    </div>
  )
}
