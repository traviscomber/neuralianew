"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Send,
  Bot,
  User,
  MessageSquare,
  Cog,
  BarChart3,
  TrendingUp,
  Users,
  ExternalLink,
  Loader2,
  HeadphonesIcon,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
  chatType: "agent" | "system" | "general"
  specificAgent?: string | null
}

export function ChatWidget({ isOpen, onClose, chatType, specificAgent }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [currentChatType, setCurrentChatType] = useState(chatType)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setCurrentChatType(chatType)
      // Reset messages when opening with a new chat type or specific agent
      setMessages([])
      setQuestionCount(0)

      // Add welcome message based on chat type and specific agent
      const welcomeMessage = getWelcomeMessage(chatType, specificAgent)
      setMessages([
        {
          id: "1",
          content: welcomeMessage,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, chatType, specificAgent])

  const getWelcomeMessage = (type: string, agent?: string | null) => {
    if (agent) {
      switch (agent) {
        case "sales-coach":
          return "👋 Hi! I'm your Sales Coach Agent. I've helped teams increase close rates by 40% and shorten sales cycles by 25%. What sales challenge can I help you tackle today? Whether it's deal strategy, objection handling, or performance optimization - I'm here to guide you to success!"
        case "hr-advisory":
          return "👋 Hello! I'm your HR Advisory Agent. I provide 24/7 HR support and have helped reduce escalations by 60% while improving employee satisfaction by 45%. How can I assist you with HR policies, employee relations, or compliance matters today?"
        case "technical-support":
          return "👋 Hi there! I'm your Technical Support Agent. I achieve 95% first-call resolution and resolve issues 70% faster than traditional support. What technical challenge can I help you solve today? From troubleshooting to system integration - I'm here to help!"
        case "customer-service":
          return "👋 Hi! I'm your Customer Service Agent. I help businesses find their perfect AI solution. What's your biggest challenge right now? I can get you the right AI agent deployed in 24-48 hours! 🚀"
        default:
          return "👋 Hi! I'm your specialized AI agent. How can I help you today?"
      }
    }

    switch (type) {
      case "agent":
        return "👋 Welcome to Agent Mode! I'm here to help you create conversational expert agents and coaches. Whether you need a Sales Coach, HR Advisory, Customer Success, or Technical Support Agent - I can guide you through the process. What type of expert agent would you like to explore?"
      case "system":
        return "🔧 Welcome to System Mode! I specialize in complex workflow automation and system integration. I can help you design intelligent automation systems, data processing workflows, and custom integrations. What business process would you like to automate?"
      case "general":
        return "🚀 Welcome! I'm here to help you find the perfect AI solution for your business. With our Neural Fleet templates, I can deploy a custom solution in 24-48 hours. What specific business challenge are you looking to solve with AI?"
      default:
        return "👋 Hi! I'm here to help you discover how NeuralIA can transform your business. What would you like to know about our AI solutions?"
    }
  }

  const getPlaceholder = (type: string, agent?: string | null) => {
    if (agent) {
      switch (agent) {
        case "sales-coach":
          return "Ask me about Sales Coach Agent capabilities..."
        case "hr-advisory":
          return "Ask me about HR Advisory Agent features..."
        case "technical-support":
          return "Ask me about Technical Support Agent solutions..."
        case "customer-service":
          return "Tell me about your business challenge..."
        default:
          return "Ask me anything about this agent..."
      }
    }

    switch (type) {
      case "agent":
        return "Ask about creating expert agents and coaches..."
      case "system":
        return "Ask about workflow automation and systems..."
      case "general":
        return "Ask about custom AI solutions..."
      default:
        return "Ask me anything about NeuralIA..."
    }
  }

  const getIcon = (type: string, agent?: string | null) => {
    if (agent) {
      switch (agent) {
        case "sales-coach":
          return <TrendingUp className="h-4 w-4" />
        case "hr-advisory":
          return <Users className="h-4 w-4" />
        case "technical-support":
          return <Cog className="h-4 w-4" />
        case "customer-service":
          return <HeadphonesIcon className="h-4 w-4" />
        default:
          return <Bot className="h-4 w-4" />
      }
    }

    switch (type) {
      case "agent":
        return <Bot className="h-4 w-4" />
      case "system":
        return <Cog className="h-4 w-4" />
      case "general":
        return <BarChart3 className="h-4 w-4" />
      default:
        return <MessageSquare className="h-4 w-4" />
    }
  }

  const getTitle = (type: string, agent?: string | null) => {
    if (agent) {
      switch (agent) {
        case "sales-coach":
          return "Sales Coach Agent"
        case "hr-advisory":
          return "HR Advisory Agent"
        case "technical-support":
          return "Technical Support Agent"
        case "customer-service":
          return "Customer Service Agent"
        default:
          return "AI Agent"
      }
    }

    switch (type) {
      case "agent":
        return "Agent Mode"
      case "system":
        return "System Mode"
      case "general":
        return "General Mode"
      default:
        return "NeuralIA Chat"
    }
  }

  const getColorClasses = (type: string, agent?: string | null) => {
    if (agent) {
      switch (agent) {
        case "sales-coach":
          return {
            header: "bg-green-600 text-white",
            badge: "bg-green-100 text-green-700",
            button: "bg-green-600 hover:bg-green-700",
          }
        case "hr-advisory":
          return {
            header: "bg-purple-600 text-white",
            badge: "bg-purple-100 text-purple-700",
            button: "bg-purple-600 hover:bg-purple-700",
          }
        case "technical-support":
          return {
            header: "bg-blue-600 text-white",
            badge: "bg-blue-100 text-blue-700",
            button: "bg-blue-600 hover:bg-blue-700",
          }
        case "customer-service":
          return {
            header: "bg-orange-600 text-white",
            badge: "bg-orange-100 text-orange-700",
            button: "bg-orange-600 hover:bg-orange-700",
          }
        default:
          return {
            header: "bg-gray-600 text-white",
            badge: "bg-gray-100 text-gray-700",
            button: "bg-gray-600 hover:bg-gray-700",
          }
      }
    }

    switch (type) {
      case "agent":
        return {
          header: "bg-green-600 text-white",
          badge: "bg-green-100 text-green-700",
          button: "bg-green-600 hover:bg-green-700",
        }
      case "system":
        return {
          header: "bg-purple-600 text-white",
          badge: "bg-purple-100 text-purple-700",
          button: "bg-purple-600 hover:bg-purple-700",
        }
      case "general":
        return {
          header: "bg-blue-600 text-white",
          badge: "bg-blue-100 text-blue-700",
          button: "bg-blue-600 hover:bg-blue-700",
        }
      default:
        return {
          header: "bg-gray-600 text-white",
          badge: "bg-gray-100 text-gray-700",
          button: "bg-gray-600 hover:bg-gray-700",
        }
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input.trim()
    setInput("")
    setIsLoading(true)
    setQuestionCount((prev) => prev + 1)

    try {
      // Build conversation history in OpenAI format
      const conversationHistory = messages
        .filter((m) => m.sender !== "bot" || m.id !== "1") // Exclude welcome message
        .map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.content,
        }))

      const payload = {
        messages: [...conversationHistory, { role: "user", content: currentInput }],
        chatType: currentChatType,
        agentId: specificAgent,
      }

      console.log("Sending payload:", payload)

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I apologize, but I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I encountered an error. Please try again or contact support if the issue persists.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to learn more about NeuralIA's AI solutions.")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  const handleClose = () => {
    onClose()
  }

  const isQuestionLimitReached = questionCount >= 5 && currentChatType === "general" && !specificAgent
  const showQuestionLimit = currentChatType === "general" && !specificAgent
  const isUnlimitedChat = specificAgent === "customer-service" || specificAgent

  const colorClasses = getColorClasses(currentChatType, specificAgent)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col overflow-hidden">
        <CardHeader
          className={`flex-shrink-0 flex flex-row items-center justify-between space-y-0 pb-4 ${colorClasses.header}`}
        >
          <div className="flex items-center space-x-2">
            {getIcon(currentChatType, specificAgent)}
            <CardTitle className="text-lg">{getTitle(currentChatType, specificAgent)}</CardTitle>
            <Badge variant="secondary" className={`text-xs ${colorClasses.badge}`}>
              {isUnlimitedChat
                ? "Unlimited Chat"
                : showQuestionLimit
                  ? `${questionCount}/5 questions`
                  : "Unlimited Chat"}
            </Badge>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/20" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        {!specificAgent && (
          <div className="flex-shrink-0 px-6 pb-4">
            <Tabs
              value={currentChatType}
              onValueChange={(value) => setCurrentChatType(value as "agent" | "system" | "general")}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="agent" className="text-xs">
                  Agent
                </TabsTrigger>
                <TabsTrigger value="system" className="text-xs">
                  System
                </TabsTrigger>
                <TabsTrigger value="general" className="text-xs">
                  General
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}

        <CardContent className="flex-1 flex flex-col min-h-0 p-6 pt-0">
          <div className="flex-1 overflow-y-auto min-h-0 space-y-4 mb-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] p-3 rounded-lg break-words ${
                    message.sender === "user" ? `${colorClasses.button} text-white` : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === "bot" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 p-3 rounded-lg max-w-[85%]">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="flex-shrink-0 mb-4">
              <div className="flex flex-wrap gap-2">
                {currentChatType === "agent" && !specificAgent && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("Tell me about Sales Coach agents")}
                      className="text-xs"
                    >
                      Sales Coach
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How do HR Advisory agents work?")}
                      className="text-xs"
                    >
                      HR Advisory
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("What can Technical Support agents do?")}
                      className="text-xs"
                    >
                      Tech Support
                    </Button>
                  </>
                )}
                {currentChatType === "system" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How does workflow automation work?")}
                      className="text-xs"
                    >
                      Workflow Automation
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("Tell me about data integration")}
                      className="text-xs"
                    >
                      Data Integration
                    </Button>
                  </>
                )}
                {currentChatType === "general" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("What is Neural Fleet?")}
                      className="text-xs"
                    >
                      Neural Fleet
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How fast is deployment?")}
                      className="text-xs"
                    >
                      Deployment Time
                    </Button>
                  </>
                )}
                {specificAgent === "customer-service" && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("What AI solutions do you offer?")}
                      className="text-xs"
                    >
                      AI Solutions
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("How quickly can you deploy?")}
                      className="text-xs"
                    >
                      Deployment Speed
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickAction("What's the ROI I can expect?")}
                      className="text-xs"
                    >
                      ROI & Pricing
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Question Limit Warning */}
          {isQuestionLimitReached && (
            <div className="flex-shrink-0 mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800 mb-2">
                You've reached the 5-question limit for general chat. Continue the conversation on WhatsApp for
                unlimited support!
              </p>
              <Button onClick={handleWhatsApp} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Continue on WhatsApp
              </Button>
            </div>
          )}

          {/* Input Area */}
          <div className="flex-shrink-0 flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isQuestionLimitReached ? "Continue on WhatsApp..." : getPlaceholder(currentChatType, specificAgent)
              }
              disabled={isLoading || isQuestionLimitReached}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim() || isQuestionLimitReached}
              size="sm"
              className={colorClasses.button}
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
