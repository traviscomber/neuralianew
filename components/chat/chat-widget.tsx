"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { X, Send, User, Brain, Users, TrendingUp, Code, Loader2, Sparkles } from "lucide-react"

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
  selectedExecutive?: string | null
}

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  executive?: string
}

const executives = {
  "neural-director": {
    name: "Neural Director",
    role: "AI Orchestrator",
    icon: Brain,
    color: "bg-purple-500",
    description: "I coordinate all AI systems and optimize business operations.",
    greeting:
      "Hello! I'm the Neural Director. I coordinate all our AI executives and can help you understand how our AI systems work together. What would you like to know?",
  },
  "ai-ceo": {
    name: "AI CEO",
    role: "Strategic Executive",
    icon: Users,
    color: "bg-blue-500",
    description: "I provide strategic leadership and high-level decision making.",
    greeting:
      "Greetings! I'm your AI CEO. I focus on strategic planning, market analysis, and executive decision-making. How can I help with your business strategy?",
  },
  "ai-cmo": {
    name: "AI CMO",
    role: "Marketing Executive",
    icon: TrendingUp,
    color: "bg-green-500",
    description: "I develop marketing strategies and optimize customer engagement.",
    greeting:
      "Hi there! I'm your AI CMO. I specialize in marketing strategy, brand management, and customer acquisition. What marketing challenges can I help you solve?",
  },
  "ai-cto": {
    name: "AI CTO",
    role: "Technology Executive",
    icon: Code,
    color: "bg-orange-500",
    description: "I oversee technology strategy and drive innovation.",
    greeting:
      "Hello! I'm your AI CTO. I handle technology strategy, system architecture, and innovation. What technical challenges are you facing?",
  },
}

export function ChatWidget({ isOpen, onClose, selectedExecutive }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentExecutive, setCurrentExecutive] = useState<string>("neural-director")
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Set executive based on selection
  useEffect(() => {
    if (selectedExecutive && executives[selectedExecutive as keyof typeof executives]) {
      setCurrentExecutive(selectedExecutive)
    }
  }, [selectedExecutive])

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const executive = executives[currentExecutive as keyof typeof executives]
      const welcomeMessage: Message = {
        id: "welcome",
        content: executive.greeting,
        sender: "assistant",
        timestamp: new Date(),
        executive: currentExecutive,
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, currentExecutive, messages.length])

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }, [messages])

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(
      () => {
        const executive = executives[currentExecutive as keyof typeof executives]
        const responses = [
          `As your ${executive.role}, I understand your question about "${userMessage.content}". Let me provide some strategic insights on this matter.`,
          `That's an excellent point. From my perspective as ${executive.name}, I would recommend focusing on the key metrics and strategic alignment with your business objectives.`,
          `Based on my analysis, this relates to several important factors we should consider. Let me break this down for you from a ${executive.role.toLowerCase()} perspective.`,
          `I appreciate you bringing this up. This is exactly the type of strategic thinking that drives successful AI implementation. Here's my recommendation...`,
        ]

        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: responses[Math.floor(Math.random() * responses.length)],
          sender: "assistant",
          timestamp: new Date(),
          executive: currentExecutive,
        }

        setMessages((prev) => [...prev, assistantMessage])
        setIsLoading(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const switchExecutive = (executiveId: string) => {
    setCurrentExecutive(executiveId)
    const executive = executives[executiveId as keyof typeof executives]
    const switchMessage: Message = {
      id: Date.now().toString(),
      content: `Switching to ${executive.name}. ${executive.greeting}`,
      sender: "assistant",
      timestamp: new Date(),
      executive: executiveId,
    }
    setMessages((prev) => [...prev, switchMessage])
  }

  const handleClose = () => {
    setMessages([])
    setInputValue("")
    setIsLoading(false)
    onClose()
  }

  const currentExec = executives[currentExecutive as keyof typeof executives]
  const IconComponent = currentExec.icon

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${currentExec.color} rounded-full flex items-center justify-center`}>
                <IconComponent className="h-5 w-5 text-white" />
              </div>
              <div>
                <DialogTitle className="text-lg">{currentExec.name}</DialogTitle>
                <Badge variant="outline" className="text-xs">
                  {currentExec.role}
                </Badge>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Executive Selector */}
        <div className="px-6 py-3 border-b bg-gray-50">
          <div className="flex space-x-2 overflow-x-auto">
            {Object.entries(executives).map(([id, exec]) => {
              const ExecIcon = exec.icon
              return (
                <Button
                  key={id}
                  variant={currentExecutive === id ? "default" : "outline"}
                  size="sm"
                  onClick={() => switchExecutive(id)}
                  className="flex-shrink-0"
                >
                  <ExecIcon className="h-3 w-3 mr-1" />
                  {exec.name.split(" ")[0]}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Chat Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 px-6">
          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback className={message.sender === "user" ? "bg-blue-100" : currentExec.color}>
                    {message.sender === "user" ? (
                      <User className="h-4 w-4 text-blue-600" />
                    ) : (
                      <IconComponent className="h-4 w-4 text-white" />
                    )}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className={currentExec.color}>
                    <IconComponent className="h-4 w-4 text-white" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-sm text-gray-600">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="px-6 py-4 border-t bg-gray-50">
          <div className="flex space-x-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={`Ask ${currentExec.name} anything...`}
              className="flex-1"
              disabled={isLoading}
            />
            <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            </Button>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xs text-gray-500">Press Enter to send, Shift+Enter for new line</p>
            <div className="flex items-center space-x-1">
              <Sparkles className="h-3 w-3 text-purple-500" />
              <span className="text-xs text-purple-600">AI Demo Mode</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
