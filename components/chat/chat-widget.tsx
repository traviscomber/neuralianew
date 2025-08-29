"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Brain, Users, TrendingUp, Code } from "lucide-react"

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
  selectedExecutive?: string | null
}

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  executive?: string
}

export function ChatWidget({ isOpen, onClose, selectedExecutive }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const executives = {
    "neural-director": {
      name: "Neural Director",
      icon: Brain,
      color: "bg-purple-500",
      greeting:
        "Hello! I'm the Neural Director. I coordinate all AI executives and optimize your business operations. How can I help you today?",
    },
    "ai-ceo": {
      name: "AI CEO",
      icon: Users,
      color: "bg-blue-500",
      greeting:
        "Greetings! I'm your AI CEO. I focus on strategic leadership and high-level decision making. What strategic challenge can I help you with?",
    },
    "ai-cmo": {
      name: "AI CMO",
      icon: TrendingUp,
      color: "bg-green-500",
      greeting:
        "Hi there! I'm your AI CMO. I specialize in marketing strategy, campaigns, and customer engagement. What marketing goals are you working on?",
    },
    "ai-cto": {
      name: "AI CTO",
      icon: Code,
      color: "bg-orange-500",
      greeting:
        "Hello! I'm your AI CTO. I handle technology strategy, development, and innovation. What technical challenges can I help solve?",
    },
  }

  const currentExecutive = selectedExecutive
    ? executives[selectedExecutive as keyof typeof executives]
    : executives["neural-director"]

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add initial greeting message
      const greeting: Message = {
        id: "greeting",
        content: currentExecutive.greeting,
        sender: "ai",
        timestamp: new Date(),
        executive: selectedExecutive || "neural-director",
      }
      setMessages([greeting])
    }
  }, [isOpen, selectedExecutive, currentExecutive.greeting, messages.length])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const generateAIResponse = (userMessage: string, executive: string): string => {
    const responses = {
      "neural-director": [
        "I'll coordinate with the other executives to address this. Let me analyze the situation and provide a comprehensive strategy.",
        "Based on my analysis, I recommend we approach this systematically. I'll delegate specific tasks to our specialized executives.",
        "This requires a multi-faceted approach. I'll ensure all our AI executives work together to optimize this for you.",
      ],
      "ai-ceo": [
        "From a strategic perspective, this aligns with our growth objectives. Let me outline a leadership approach to this challenge.",
        "This decision requires careful consideration of market dynamics and stakeholder impact. Here's my executive recommendation.",
        "I see significant potential here. Let me provide a strategic framework for moving forward.",
      ],
      "ai-cmo": [
        "This is an excellent marketing opportunity! I can help you develop a comprehensive campaign strategy to maximize impact.",
        "From a customer engagement standpoint, we should focus on creating value-driven messaging that resonates with your target audience.",
        "Let me analyze your customer journey and recommend optimization strategies for better conversion rates.",
      ],
      "ai-cto": [
        "From a technical architecture perspective, I recommend we implement a scalable solution that can grow with your needs.",
        "This requires careful consideration of our technology stack. Let me propose an innovative approach to solve this challenge.",
        "I can help you optimize your development processes and implement best practices for better system performance.",
      ],
    }

    const executiveResponses = responses[executive as keyof typeof responses] || responses["neural-director"]
    return executiveResponses[Math.floor(Math.random() * executiveResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(input, selectedExecutive || "neural-director"),
        sender: "ai",
        timestamp: new Date(),
        executive: selectedExecutive || "neural-director",
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const IconComponent = currentExecutive.icon

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${currentExecutive.color} rounded-full flex items-center justify-center`}>
              <IconComponent className="h-5 w-5 text-white" />
            </div>
            <div>
              <span>{currentExecutive.name}</span>
              <Badge variant="secondary" className="ml-2">
                AI Executive
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "ai" && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                    {message.sender === "user" && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                    <div>
                      <p className="text-sm">{message.content}</p>
                      <span className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex-shrink-0 flex space-x-2 pt-4 border-t">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={`Ask ${currentExecutive.name} anything...`}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} disabled={!input.trim() || isTyping}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
