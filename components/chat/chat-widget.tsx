"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Send, X, Bot, User, Loader2, TrendingUp, Users, Cog, Sparkles, Phone } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ChatWidgetProps {
  initialType?: "agent" | "system" | "general"
  specificAgent?: string | null
  onClose: () => void
  isCustomerService?: boolean
}

export function ChatWidget({
  initialType = "general",
  specificAgent = null,
  onClose,
  isCustomerService = false,
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentType, setCurrentType] = useState(initialType)
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    // Set initial welcome message based on type and specific agent
    const getWelcomeMessage = () => {
      if (isCustomerService) {
        return "Hi! I'm your Customer Service Agent. I help businesses find their perfect AI solution. What's your biggest challenge right now? I can get you the right AI agent deployed in 24-48 hours! 🚀"
      }

      if (specificAgent) {
        switch (specificAgent) {
          case "Sales Coach Agent":
            return "👋 Hi! I'm your Sales Coach Agent. I'm here to help boost your sales performance with proven strategies and techniques. I've helped teams increase close rates by 40% and reduce sales cycles by 25%. What sales challenge can I help you tackle today?"
          case "HR Advisory Agent":
            return "👋 Hello! I'm your HR Advisory Agent. I provide expert guidance on employee relations, policy questions, compliance, and performance management. I've helped reduce HR escalations by 60% and improve employee satisfaction by 45%. What HR challenge can I assist you with?"
          case "Technical Support Agent":
            return "👋 Hi there! I'm your Technical Support Agent. I specialize in troubleshooting, system integration, and technical optimization. I achieve 95% first-call resolution and reduce resolution times by 70%. What technical challenge can I help solve for you?"
          default:
            return "👋 Hello! I'm an AI Agent ready to help you with expert guidance and support. How can I assist you today?"
        }
      }

      switch (currentType) {
        case "agent":
          return "👋 Welcome! I'm here to help you explore our conversational AI agents. These expert coaches provide 24/7 guidance for sales, HR, customer service, and technical support. What type of expert guidance does your team need?"
        case "system":
          return "👋 Hello! I'm here to discuss AI workflow systems that automate complex processes and handle intelligent data processing. Perfect for operations, finance, and enterprise workflows. What processes would you like to automate?"
        case "general":
          return "👋 Hi! I'm here to help you find the perfect AI solution for your business. Whether you need quick-deploy Neural Fleet templates or custom enterprise solutions, I can guide you to the right fit. What's your biggest business challenge?"
        default:
          return "👋 Hello! How can I help you today?"
      }
    }

    const welcomeMessage: Message = {
      id: "welcome",
      content: getWelcomeMessage(),
      role: "assistant",
      timestamp: new Date(),
    }

    setMessages([welcomeMessage])
  }, [currentType, specificAgent, isCustomerService])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    // Check question limit for non-customer service and non-specific agent chats
    if (!isCustomerService && !specificAgent && questionCount >= 5) {
      const limitMessage: Message = {
        id: Date.now().toString(),
        content:
          "You've reached the 5-question limit for this demo. For unlimited access and expert AI solutions, please contact us on WhatsApp: +1 (555) 123-4567 or get started with our Neural Fleet templates!",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, limitMessage])
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
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
          message: input,
          type: currentType,
          specificAgent: specificAgent,
          isCustomerService: isCustomerService,
          history: messages.slice(-10), // Send last 10 messages for context
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I apologize, but I'm having trouble responding right now. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])

      // Only increment question count for general chats (not customer service or specific agents)
      if (!isCustomerService && !specificAgent) {
        setQuestionCount((prev) => prev + 1)
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I apologize, but I'm having trouble connecting right now. Please try again or contact our support team.",
        role: "assistant",
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

  const getQuickActions = () => {
    if (isCustomerService) {
      return [
        "What AI solutions do you offer?",
        "How quickly can you deploy?",
        "What's the ROI I can expect?",
        "Can you customize for my industry?",
      ]
    }

    if (specificAgent) {
      switch (specificAgent) {
        case "Sales Coach Agent":
          return [
            "How can I improve my close rate?",
            "Help with objection handling",
            "Sales process optimization",
            "Team performance strategies",
          ]
        case "HR Advisory Agent":
          return [
            "Employee performance issues",
            "Policy clarification needed",
            "Compliance questions",
            "Team management guidance",
          ]
        case "Technical Support Agent":
          return [
            "System integration help",
            "Troubleshooting guidance",
            "Performance optimization",
            "Technical documentation",
          ]
        default:
          return []
      }
    }

    switch (currentType) {
      case "agent":
        return [
          "Sales coaching solutions",
          "HR advisory services",
          "Technical support agents",
          "Customer service automation",
        ]
      case "system":
        return ["Workflow automation", "Data processing systems", "Enterprise integration", "Process optimization"]
      case "general":
        return ["Neural Fleet templates", "Custom AI solutions", "ROI and pricing", "Implementation timeline"]
      default:
        return []
    }
  }

  const getPlaceholder = () => {
    if (specificAgent) {
      return `Ask me about ${specificAgent} capabilities...`
    }
    return "Type your message..."
  }

  const getTitle = () => {
    if (isCustomerService) {
      return "Customer Service"
    }
    if (specificAgent) {
      return specificAgent
    }
    switch (currentType) {
      case "agent":
        return "AI Agents"
      case "system":
        return "AI Systems"
      case "general":
        return "AI Solutions"
      default:
        return "AI Chat"
    }
  }

  const getIcon = () => {
    if (isCustomerService) {
      return <Phone className="h-5 w-5" />
    }
    if (specificAgent) {
      switch (specificAgent) {
        case "Sales Coach Agent":
          return <TrendingUp className="h-5 w-5" />
        case "HR Advisory Agent":
          return <Users className="h-5 w-5" />
        case "Technical Support Agent":
          return <Cog className="h-5 w-5" />
        default:
          return <Bot className="h-5 w-5" />
      }
    }
    switch (currentType) {
      case "agent":
        return <Users className="h-5 w-5" />
      case "system":
        return <Cog className="h-5 w-5" />
      case "general":
        return <Sparkles className="h-5 w-5" />
      default:
        return <MessageSquare className="h-5 w-5" />
    }
  }

  const shouldShowTabs = !isCustomerService && !specificAgent
  const isUnlimitedChat = isCustomerService || specificAgent

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl h-[600px] flex flex-col overflow-hidden">
        <CardHeader className="flex-shrink-0 flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center space-x-2">
            {getIcon()}
            <CardTitle className="text-lg">{getTitle()}</CardTitle>
            {isUnlimitedChat && (
              <Badge variant="secondary" className="text-xs">
                Unlimited Chat
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        {shouldShowTabs && (
          <div className="flex-shrink-0 px-6 pb-4">
            <Tabs
              value={currentType}
              onValueChange={(value) => setCurrentType(value as "agent" | "system" | "general")}
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="agent">Agents</TabsTrigger>
                <TabsTrigger value="system">Systems</TabsTrigger>
                <TabsTrigger value="general">Custom</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        )}

        <CardContent className="flex-1 flex flex-col min-h-0 p-6 pt-0">
          <div className="flex-1 overflow-y-auto min-h-0 mb-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2 break-words ${
                    message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.role === "assistant" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.role === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 1 && (
            <div className="flex-shrink-0 mb-4">
              <p className="text-sm text-gray-600 mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {getQuickActions().map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setInput(action)}
                    className="text-xs h-8"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Question Limit Warning */}
          {!isUnlimitedChat && questionCount >= 4 && (
            <div className="flex-shrink-0 mb-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
                  {questionCount === 4
                    ? "1 question remaining in this demo. Contact us for unlimited access!"
                    : "Demo limit reached. Contact us on WhatsApp: +1 (555) 123-4567"}
                </p>
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="flex-shrink-0 flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={getPlaceholder()}
              disabled={isLoading || (!isUnlimitedChat && questionCount >= 5)}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={isLoading || !input.trim() || (!isUnlimitedChat && questionCount >= 5)}
              size="icon"
            >
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
