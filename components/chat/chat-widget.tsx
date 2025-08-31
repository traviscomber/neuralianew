"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, X, Send, Bot, Zap } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content:
        "Hi! I'm your vibe coding AI assistant. I can help you learn more about our AI solutions, answer questions about vibe coding methodology, or connect you with our team. How can I help you today?",
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: "user", content: inputValue }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate AI response with vibe coding
    setTimeout(() => {
      const responses = [
        "That's a great question about vibe coding! Our AI methodology focuses on understanding emotional context and cultural nuances. Would you like me to explain how this applies to your specific use case?",
        "I understand you're interested in our vibe coding solutions. Based on what you've shared, I think EcosueloLab or ParrotfyIA might be perfect for your needs. Shall I connect you with a specialist?",
        "Vibe coding is what makes our AI truly understand human communication. Unlike traditional AI, we process not just words, but emotions, context, and cultural meaning. Would you like a personalized demo?",
        "I can sense you're looking for an AI solution that truly gets it. That's exactly what vibe coding delivers - AI that understands the human experience. Let me show you how this works in practice.",
      ]

      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      const botMessage = { type: "bot", content: randomResponse }
      setMessages((prev) => [...prev, botMessage])
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] z-50">
          <Card className="bg-slate-800 border-slate-700 shadow-2xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-sm">Vibe Coding AI</CardTitle>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-gray-400">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 text-xs">
                    <Zap className="h-3 w-3 mr-1" />
                    Vibe Coding
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.type === "user" ? "bg-blue-600 text-white" : "bg-slate-700 text-gray-100"
                      }`}
                    >
                      {message.type === "bot" && (
                        <div className="flex items-center space-x-1 mb-1">
                          <Bot className="h-3 w-3 text-blue-400" />
                          <span className="text-xs text-blue-400">vibe coding AI</span>
                        </div>
                      )}
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-slate-700">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about vibe coding..."
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                  />
                  <Button onClick={handleSendMessage} size="icon" className="bg-blue-600 hover:bg-blue-700 h-10 w-10">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">Powered by vibe coding AI methodology</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
