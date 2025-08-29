"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Network, Crown, TrendingUp, Zap, Send, User, X, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "orchestrator" | "ceo" | "cmo" | "cto"
  timestamp: Date
  agentName?: string
}

interface OrchestratorChatProps {
  isOpen: boolean
  onClose: () => void
  maxQuestions?: number
}

const executiveInfo = {
  orchestrator: {
    name: "Neural Director",
    icon: <Network className="h-4 w-4" />,
    color: "from-indigo-600 to-purple-700",
  },
  ceo: {
    name: "CEO",
    icon: <Crown className="h-4 w-4" />,
    color: "from-purple-600 to-blue-600",
  },
  cmo: {
    name: "CMO",
    icon: <TrendingUp className="h-4 w-4" />,
    color: "from-green-600 to-teal-600",
  },
  cto: {
    name: "CTO",
    icon: <Zap className="h-4 w-4" />,
    color: "from-orange-600 to-red-600",
  },
}

export function OrchestratorChat({ isOpen, onClose, maxQuestions = 5 }: OrchestratorChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      setMessages([])
      setQuestionCount(0)
      setIsMinimized(false)
      setIsProcessing(false)

      // Add greeting message
      const greetingMessage: Message = {
        id: `greeting-${Date.now()}`,
        content:
          "I am the Neural Director, coordinating your AI executive team. I can orchestrate complex business initiatives by delegating tasks across CEO, CMO, and CTO. What strategic challenge can we tackle together?",
        sender: "orchestrator",
        timestamp: new Date(),
        agentName: "Neural Director",
      }
      setMessages([greetingMessage])
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const generateOrchestratedResponse = async (userMessage: string) => {
    const message = userMessage.toLowerCase()

    // Simulate orchestrator analyzing and delegating
    const orchestratorResponse: Message = {
      id: `orchestrator-${Date.now()}`,
      content: "Let me coordinate our executive team to address this comprehensively...",
      sender: "orchestrator",
      timestamp: new Date(),
      agentName: "Neural Director",
    }

    setMessages((prev) => [...prev, orchestratorResponse])

    // Simulate delay for coordination
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate responses from different executives based on the query
    const responses: Message[] = []

    if (message.includes("strategy") || message.includes("market") || message.includes("business")) {
      responses.push({
        id: `ceo-${Date.now()}`,
        content:
          "From a strategic perspective, I recommend conducting a comprehensive market analysis and developing a multi-phase approach. We should prioritize high-impact initiatives and establish clear success metrics.",
        sender: "ceo",
        timestamp: new Date(),
        agentName: "CEO",
      })
    }

    if (
      message.includes("marketing") ||
      message.includes("customer") ||
      message.includes("growth") ||
      message.includes("brand")
    ) {
      responses.push({
        id: `cmo-${Date.now()}`,
        content:
          "For marketing execution, I suggest developing targeted campaigns that align with our strategic objectives. We should focus on customer acquisition, retention optimization, and brand positioning to maximize market impact.",
        sender: "cmo",
        timestamp: new Date(),
        agentName: "CMO",
      })
    }

    if (
      message.includes("technology") ||
      message.includes("digital") ||
      message.includes("system") ||
      message.includes("tech")
    ) {
      responses.push({
        id: `cto-${Date.now()}`,
        content:
          "From a technology standpoint, I recommend implementing scalable solutions with robust security measures. We should prioritize system integration, data analytics capabilities, and ensure our technical infrastructure supports business growth.",
        sender: "cto",
        timestamp: new Date(),
        agentName: "CTO",
      })
    }

    // If no specific area mentioned, provide general coordination
    if (responses.length === 0) {
      responses.push(
        {
          id: `ceo-${Date.now()}`,
          content: "I'll handle the strategic framework and ensure alignment with our business objectives.",
          sender: "ceo",
          timestamp: new Date(),
          agentName: "CEO",
        },
        {
          id: `cmo-${Date.now()}`,
          content: "I'll develop the marketing approach and customer engagement strategy.",
          sender: "cmo",
          timestamp: new Date(),
          agentName: "CMO",
        },
        {
          id: `cto-${Date.now()}`,
          content: "I'll architect the technical solution and ensure scalable implementation.",
          sender: "cto",
          timestamp: new Date(),
          agentName: "CTO",
        },
      )
    }

    // Add responses with delays
    for (let i = 0; i < responses.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setMessages((prev) => [...prev, responses[i]])
    }

    // Final orchestrator summary
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const summaryResponse: Message = {
      id: `orchestrator-summary-${Date.now()}`,
      content:
        "I've coordinated our executive team's input. This unified approach ensures strategic alignment, effective marketing execution, and robust technical implementation. Would you like me to elaborate on any specific aspect or coordinate additional initiatives?",
      sender: "orchestrator",
      timestamp: new Date(),
      agentName: "Neural Director",
    }

    setMessages((prev) => [...prev, summaryResponse])
    setIsProcessing(false)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || questionCount >= maxQuestions || isProcessing) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setQuestionCount((prev) => prev + 1)
    setIsProcessing(true)

    // Generate orchestrated response
    await generateOrchestratedResponse(userMessage.content)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card
        className={`w-[500px] shadow-2xl border-2 transition-all duration-300 ${isMinimized ? "h-16" : "h-[700px]"}`}
      >
        {/* Header */}
        <CardHeader className="pb-3 bg-gradient-to-r from-indigo-600 to-purple-700 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Network className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">Neural Director</CardTitle>
                <p className="text-xs opacity-90">Orchestrating AI Executive Team</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20 h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(700px-80px)]">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.sender === "user" ? (
                      <div className="flex justify-end">
                        <div className="max-w-[80%] rounded-lg p-3 bg-blue-500 text-white">
                          <div className="flex items-start space-x-2">
                            <User className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <p className="text-sm leading-relaxed">{message.content}</p>
                              <p className="text-xs mt-1 text-blue-100">
                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start">
                        <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-900">
                          <div className="flex items-start space-x-2">
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-r ${executiveInfo[message.sender as keyof typeof executiveInfo].color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                            >
                              {executiveInfo[message.sender as keyof typeof executiveInfo].icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <Badge variant="outline" className="text-xs">
                                  {message.agentName}
                                </Badge>
                              </div>
                              <p className="text-sm leading-relaxed">{message.content}</p>
                              <p className="text-xs mt-1 text-gray-500">
                                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-lg p-3 bg-gray-100 text-gray-900">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
                          <Network className="h-4 w-4 text-white animate-pulse" />
                        </div>
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

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Sample Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t bg-gray-50">
                <p className="text-xs text-gray-600 mb-2">Try coordinated initiatives:</p>
                <div className="space-y-1">
                  {["Coordinate a digital transformation strategy", "How should we approach market expansion?"].map(
                    (question, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        onClick={() => setInputValue(question)}
                        className="w-full text-left justify-start text-xs h-auto py-1 px-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        disabled={questionCount >= maxQuestions || isProcessing}
                      >
                        "{question}"
                      </Button>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              {questionCount >= maxQuestions ? (
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Demo limit reached</p>
                  <Badge variant="outline" className="text-xs">
                    Sign up for unlimited access
                  </Badge>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Describe your business challenge..."
                    className="flex-1 text-sm"
                    disabled={questionCount >= maxQuestions || isProcessing}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || questionCount >= maxQuestions || isProcessing}
                    size="sm"
                    className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:opacity-90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              )}
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">
                  {questionCount}/{maxQuestions} questions used
                </p>
                <Badge variant="outline" className="text-xs">
                  Demo Mode
                </Badge>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
