"use client"

import React from "react"
import { useEffect, useState, useRef } from "react"
import { Send } from "lucide-react"
import type { BuyerIntent } from "@/lib/vibe-selling/intent-detector"
import type { LiveOffer } from "@/lib/vibe-selling/offer-composer"

interface Message {
  role: "user" | "assistant"
  content: string
}

export function VibeConversation() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [intent, setIntent] = useState<BuyerIntent | null>(null)
  const [offer, setOffer] = useState<LiveOffer | null>(null)
  const [showOffer, setShowOffer] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const detectUserIntent = async () => {
      const signals = {
        scrollDepth: Math.min(window.scrollY / document.documentElement.scrollHeight, 1) * 100,
        timeOnCapabilities: Math.random() * 60000,
        timeOnOutcomes: Math.random() * 40000,
        timeOnAbout: Math.random() * 30000,
        language: (navigator.language.startsWith("es") ? "es" : "en") as "es" | "en",
        assetsClicked: ["demo", "datasets"],
        sessionDuration: performance.now(),
        verticalsFocused: ["ai-agents", "dev"],
      }

      try {
        const response = await fetch("/api/vibe-selling/compose", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ signals, mode: "detect-intent" }),
        })

        const data = await response.json()
        setIntent(data.intent)
        setOffer(data.offer)
        setMessages([{ role: "assistant", content: data.vibeMessage }])
        setShowOffer(true)
      } catch (error) {
        console.error("Failed to detect intent:", error)
      }
    }

    detectUserIntent()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || !intent) return

    const userMessage = input
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    try {
      const signals = {
        scrollDepth: 50,
        timeOnCapabilities: 45000,
        timeOnOutcomes: 35000,
        timeOnAbout: 20000,
        language: "es" as const,
        assetsClicked: ["demo", "datasets", "code"],
        sessionDuration: performance.now(),
        verticalsFocused: ["ai-agents"],
      }

      const response = await fetch("/api/vibe-selling/compose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ signals, message: userMessage, mode: "continue" }),
      })

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
      if (data.offer) setOffer(data.offer)
    } catch (error) {
      console.error("Failed to send message:", error)
      setMessages((prev) => [...prev, { role: "assistant", content: "Disculpa, algo salió mal. Por favor intenta de nuevo." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {showOffer && offer && (
        <div className="rounded-lg border-2 border-primary bg-primary/5 p-6">
          <h3 className="mb-4 text-lg font-bold text-foreground">{offer.headline}</h3>

          <div className="mb-4 rounded border border-primary/20 bg-card p-4">
            <div className="mb-4 text-sm font-mono text-muted-foreground">{offer.visualPreview}</div>

            <div className="space-y-3">
              <div>
                <p className="mb-1 text-xs font-medium text-muted-foreground">COMPONENTES</p>
                <ul className="space-y-1 text-sm">
                  {offer.scope.components.map((comp, i) => (
                    <li key={i} className="text-foreground">
                      ✓ {comp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-border pt-3">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">TIEMPO</p>
                  <p className="text-sm font-semibold text-foreground">{offer.scope.timelineWeeks} semanas</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">PRESUPUESTO</p>
                  <p className="text-sm font-semibold text-primary">{offer.scope.estimatedBudget}</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-4 text-sm italic text-muted-foreground">"{offer.vibes}"</p>

          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">PRÓXIMOS PASOS:</p>
            {offer.nextSteps.map((step, i) => (
              <p key={i} className="text-sm text-foreground">
                {step}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="flex h-96 flex-col overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex-1 space-y-4 overflow-y-auto bg-card p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs rounded-lg px-4 py-2 ${
                  msg.role === "user"
                    ? "rounded-br-none bg-primary text-primary-foreground"
                    : "rounded-bl-none bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="rounded-lg rounded-bl-none bg-muted px-4 py-2 text-foreground">
                <p className="text-sm">Componiendo propuesta...</p>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="flex gap-2 border-t border-border bg-card p-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Cuéntame qué estás construyendo..."
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
