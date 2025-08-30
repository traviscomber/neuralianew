"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Brain } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Neuralia's AI assistant. Ask me about EcosueloLab, our agentic AI technology, or how our neural executives can transform your business.",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      let response = ""
      const lowerInput = input.toLowerCase()

      if (lowerInput.includes("ecosuelolab") || lowerInput.includes("soil") || lowerInput.includes("agriculture")) {
        response =
          "EcosueloLab is our flagship conversational bot that revolutionizes agriculture through WhatsApp. Farmers send soil photos, and our agentic OpenAI agent fetches data from external agricultural APIs to provide instant, personalized recommendations. It's helped 10,000+ farmers achieve 40% yield increases!"
      } else if (lowerInput.includes("agentic") || lowerInput.includes("agent")) {
        response =
          "Agentic AI means our systems can reason, plan, and take autonomous actions - not just respond to prompts. Our AI executives think strategically, fetch external data, make decisions, and adapt to new situations. It's like having a brilliant executive who works 24/7 with access to unlimited information."
      } else if (lowerInput.includes("whatsapp") || lowerInput.includes("conversational")) {
        response =
          "We specialize in conversational interfaces that make complex AI accessible. WhatsApp integration allows users to interact naturally while our agentic AI handles sophisticated backend operations like API calls, data analysis, and strategic planning. Simple interface, powerful intelligence."
      } else if (lowerInput.includes("api") || lowerInput.includes("integration")) {
        response =
          "Our AI executives excel at external API integration. They can autonomously fetch data from multiple sources, process it contextually, and provide intelligent insights. For EcosueloLab, we integrate with agricultural databases, weather services, and soil analysis APIs in real-time."
      } else {
        response =
          "Our neural AI executives are designed to think and act like human executives but with superhuman capabilities. They handle complex business functions, make strategic decisions, and provide measurable results. Would you like to know more about EcosueloLab or our other AI executives?"
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setInput("")
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      <Card className="shadow-2xl border-2">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              <CardTitle className="text-lg">Neuralia AI Assistant</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-blue-500 text-white rounded-br-none" : "bg-muted rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about EcosueloLab or our AI executives..."
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} size="sm">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
