"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, X, Send, Zap } from "lucide-react"

const chatResponses = [
  {
    trigger: ["hello", "hi", "hey", "hola"],
    responses: [
      "Hey there! 👋 Welcome to the vibe zone! I'm here to help you discover how Neuralia can transform your business with AI that truly gets your energy. What's your vibe today?",
      "¡Hola! 🌟 I love the energy you're bringing! I'm your friendly Neuralia guide, ready to show you how vibe coding can revolutionize your AI experience. What can I help you explore?",
    ],
  },
  {
    trigger: ["vibe", "coding", "what is"],
    responses: [
      "Vibe coding is our revolutionary approach to AI development! 🚀 Instead of just building functional AI, we create AI that understands personality, emotion, and authentic human connection. It's like giving your AI a soul that matches your brand's energy!",
      "Think of vibe coding as the difference between a robot and a friend! 💫 Our AI doesn't just process requests - it vibes with your users, understands their emotions, and responds with genuine personality. It's AI with heart!",
    ],
  },
  {
    trigger: ["help", "support", "question"],
    responses: [
      "I'm totally here for you! 💪 Whether you want to learn about our vibe coding approach, see our success stories, or explore how we can transform your business - just let me know what's on your mind!",
      "¡Por supuesto! I'm here to help you navigate the amazing world of vibe-coded AI. What aspect of Neuralia interests you most? Features? Use cases? Or maybe you want to see a demo?",
    ],
  },
  {
    trigger: ["demo", "example", "show"],
    responses: [
      "You're in for a treat! 🎉 Check out our live demos above - EcosueloLab for career coaching, ParrotfyIA for language learning, and our empathetic customer service AI. Each one shows how vibe coding creates authentic connections!",
      "The demos are where the magic happens! ✨ You can see our AI in action - notice how each response feels natural, caring, and perfectly aligned with the user's needs. That's the power of vibe coding!",
    ],
  },
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "¡Hola! 👋 I'm your Neuralia vibe guide! Ready to explore AI that truly gets your energy? Ask me anything about vibe coding! 🌟",
    },
  ])
  const [input, setInput] = useState("")

  const getResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase()

    for (const responseSet of chatResponses) {
      if (responseSet.trigger.some((trigger) => lowerInput.includes(trigger))) {
        const randomResponse = responseSet.responses[Math.floor(Math.random() * responseSet.responses.length)]
        return randomResponse
      }
    }

    // Default responses
    const defaultResponses = [
      "That's a great question! 🤔 Our vibe coding approach is all about creating AI that connects authentically. Want to see how it works in our live demos above?",
      "I love your curiosity! 💡 Neuralia specializes in AI that understands personality and emotion. Check out our success stories or ask me about specific features!",
      "¡Excelente pregunta! Our AI is designed to match your unique vibe and energy. Would you like to explore our use cases or learn more about implementation?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    const assistantMessage = { role: "assistant", content: getResponse(input) }

    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setInput("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 w-80 h-96 z-50"
          >
            <Card className="h-full flex flex-col shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-sm">Neuralia Vibe Guide</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        Online
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-6 w-6">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] p-2 rounded-lg text-sm ${
                          message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about vibe coding..."
                      className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button size="sm" onClick={handleSend}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="fixed bottom-4 right-4 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 shadow-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>
    </>
  )
}
