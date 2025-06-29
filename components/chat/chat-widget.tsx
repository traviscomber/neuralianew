"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MessageCircle, Send, Bot, User, Loader2, Sparkles, Database, Phone } from "lucide-react"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ChatWidgetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  solutionType?: "agent" | "system" | "general"
  onSolutionTypeChange?: (type: "agent" | "system" | "general") => void
}

export function ChatWidget({ open, onOpenChange, solutionType = "general", onSolutionTypeChange }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [currentSolutionType, setCurrentSolutionType] = useState(solutionType)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const maxQuestions = 5

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (open !== undefined) {
      setIsOpen(open)
    }
  }, [open])

  useEffect(() => {
    setCurrentSolutionType(solutionType)
  }, [solutionType])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message when chat opens
      const welcomeMessage = getWelcomeMessage()
      setMessages([
        {
          id: Date.now().toString(),
          content: welcomeMessage,
          role: "assistant",
          timestamp: new Date(),
        },
      ])
    }
  }, [isOpen, currentSolutionType])

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  const handleSolutionTypeChange = (type: "agent" | "system" | "general") => {
    setCurrentSolutionType(type)
    onSolutionTypeChange?.(type)

    // Add a system message about the change
    const systemMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: getWelcomeMessage(type),
      role: "assistant",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, systemMessage])
  }

  const getWelcomeMessage = (type?: "agent" | "system" | "general") => {
    const messageType = type || currentSolutionType
    switch (messageType) {
      case "agent":
        return "🤖 Hi! I'm your AI Agent Specialist. I'll help you understand how our conversational AI agents can transform your business operations. What industry are you in, and what's your biggest operational challenge right now?"
      case "system":
        return "🚀 Hello! I'm here to help you build the perfect AI system for your business. Our full-stack solutions include data integration, dashboards, and intelligent insights. What kind of data challenges are you facing, and what systems do you currently use?"
      default:
        return "👋 Welcome to NeuralIA! I'm here to help you discover the perfect AI solution for your business. Whether you need custom agents, complete systems, or specialized tools - I've got you covered. What's your main business challenge that AI could help solve?"
    }
  }

  const getSolutionIcon = () => {
    switch (currentSolutionType) {
      case "agent":
        return <Bot className="w-4 h-4" />
      case "system":
        return <Database className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  const getSolutionTitle = () => {
    switch (currentSolutionType) {
      case "agent":
        return "AI Agent Expert"
      case "system":
        return "AI System Consultant"
      default:
        return "AI Solution Expert"
    }
  }

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    if (questionCount >= maxQuestions) {
      // Redirect to WhatsApp
      const whatsappMessage = encodeURIComponent(
        `Hi! I've been chatting with your AI assistant and would like to continue our conversation about ${getSolutionTitle()}. My question: ${input}`,
      )
      window.open(`https://wa.me/56940946660?text=${whatsappMessage}`, "_blank")
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setQuestionCount((prev) => prev + 1)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input.trim(),
          solutionType: currentSolutionType,
          conversationHistory: messages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I'm having trouble connecting right now. Please try again or contact our support team at +56940946660.",
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
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const remainingQuestions = maxQuestions - questionCount

  // Floating chat button when not controlled by parent
  const ChatContent = () => (
    <div className="flex flex-col h-full">
      <DialogHeader className="p-4 border-b border-slate-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
              {getSolutionIcon()}
            </div>
            <div>
              <DialogTitle className="text-sm">{getSolutionTitle()}</DialogTitle>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>
          <Badge variant={remainingQuestions > 2 ? "default" : remainingQuestions > 0 ? "secondary" : "destructive"}>
            {remainingQuestions > 0 ? `${remainingQuestions} left` : "Limit reached"}
          </Badge>
        </div>
      </DialogHeader>

      {/* Solution Type Selector */}
      <div className="p-4 border-b border-slate-200">
        <Tabs value={currentSolutionType} onValueChange={handleSolutionTypeChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="agent" className="text-xs">
              <Bot className="w-3 h-3 mr-1" />
              Agents
            </TabsTrigger>
            <TabsTrigger value="system" className="text-xs">
              <Database className="w-3 h-3 mr-1" />
              Systems
            </TabsTrigger>
            <TabsTrigger value="general" className="text-xs">
              <Sparkles className="w-3 h-3 mr-1" />
              General
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white"
                    : "bg-slate-100 text-slate-900"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                  </div>
                  {message.role === "user" && (
                    <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-100 rounded-lg p-3 max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={remainingQuestions > 0 ? "Ask me anything about AI solutions..." : "Continue on WhatsApp..."}
            className="flex-1"
            disabled={isLoading || remainingQuestions === 0}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim() || remainingQuestions === 0}
            size="icon"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : remainingQuestions === 0 ? (
              <Phone className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* WhatsApp CTA */}
        {remainingQuestions === 0 && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-xs text-green-700 text-center">
              💬 Continue our conversation on WhatsApp for unlimited support!
            </p>
            <Button
              size="sm"
              onClick={() => {
                const whatsappMessage = encodeURIComponent(
                  `Hi! I'd like to continue our conversation about ${getSolutionTitle()}.`,
                )
                window.open(`https://wa.me/56940946660?text=${whatsappMessage}`, "_blank")
              }}
              className="w-full mt-2 bg-green-600 hover:bg-green-700"
            >
              <Phone className="w-3 h-3 mr-1" />
              Continue on WhatsApp
            </Button>
          </div>
        )}

        {remainingQuestions <= 2 && remainingQuestions > 0 && (
          <div className="mt-2 text-center text-xs text-gray-500">
            <p>Need more help? Continue the conversation on WhatsApp after your questions.</p>
          </div>
        )}
      </div>
    </div>
  )

  if (open === undefined) {
    return (
      <>
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </Button>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-md max-h-[80vh] p-0">
            <ChatContent />
          </DialogContent>
        </Dialog>
      </>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[80vh] p-0">
        <ChatContent />
      </DialogContent>
    </Dialog>
  )
}
