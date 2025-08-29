"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { X, Send, User, Bot, Minimize2, Maximize2, Crown, TrendingUp, Zap, Network, MessageCircle } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

interface Agent {
  id: string
  name: string
  role: string
  description: string
  icon: React.ReactNode
  color: string
  responses: {
    greeting: string
    capabilities: string[]
    sampleQuestions: string[]
  }
}

interface ChatWidgetProps {
  agent: Agent | null
  isOpen: boolean
  onClose: () => void
  maxQuestions?: number
}

const getAgentIcon = (agentId: string) => {
  switch (agentId) {
    case "ceo":
      return <Crown className="h-5 w-5" />
    case "cmo":
      return <TrendingUp className="h-5 w-5" />
    case "cto":
      return <Zap className="h-5 w-5" />
    case "orchestrator":
      return <Network className="h-5 w-5" />
    default:
      return <Bot className="h-5 w-5" />
  }
}

export function ChatWidget({ agent, isOpen, onClose, maxQuestions = 5 }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (agent && isOpen) {
      setMessages([])
      setQuestionCount(0)
      setIsMinimized(false)
      setIsLoading(false)

      const greetingMessage: Message = {
        id: `greeting-${Date.now()}`,
        content: agent.responses.greeting,
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages([greetingMessage])
    }
  }, [agent, isOpen])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const generateResponse = (userMessage: string): string => {
    if (!agent) return "I'm not available right now."

    const message = userMessage.toLowerCase()

    // Generic responses
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return `Hello! ${agent.responses.greeting} How can I assist you today?`
    }

    if (message.includes("what can you do") || message.includes("capabilities") || message.includes("help")) {
      return `I can help you with: ${agent.responses.capabilities.join(", ")}. What specific area would you like to explore?`
    }

    // Agent-specific responses
    switch (agent.id) {
      case "orchestrator":
        if (message.includes("coordinate") || message.includes("team")) {
          return "I coordinate all AI executives to deliver unified strategies. I can help orchestrate complex initiatives across CEO, CMO, and CTO functions. What cross-functional challenge needs coordination?"
        }
        if (message.includes("digital transformation")) {
          return "I'll coordinate a comprehensive digital transformation strategy. The CEO will handle strategic planning and change management, the CMO will focus on customer experience transformation, and the CTO will architect the technical implementation. Together, we'll ensure unified execution across all business functions."
        }
        return "As the Neural Director, I coordinate all AI executives for unified business solutions. I can orchestrate complex initiatives, delegate tasks across the executive team, and ensure strategic alignment. What business challenge requires coordinated executive attention?"

      case "ceo":
        if (message.includes("strategy") || message.includes("strategic")) {
          return "I can help you develop comprehensive strategic plans, analyze market opportunities, and make executive decisions. What strategic challenge are you facing? I can provide frameworks for strategic planning, competitive analysis, and organizational development."
        }
        if (message.includes("market") || message.includes("competition")) {
          return "Let me provide market analysis and competitive intelligence. I can help you understand market dynamics, identify opportunities, assess competitive threats, and develop positioning strategies. What market situation would you like me to evaluate?"
        }
        return "As your AI CEO, I focus on strategic leadership and executive decision-making. I can help with strategic planning, market analysis, organizational development, and high-level business decisions. What executive-level challenge can I help you address?"

      case "cmo":
        if (message.includes("marketing") || message.includes("growth")) {
          return "I can develop marketing strategies, optimize customer acquisition, and drive growth initiatives. What marketing challenge can I help you solve? I specialize in campaign development, funnel optimization, and growth hacking strategies."
        }
        if (message.includes("brand") || message.includes("customer")) {
          return "I specialize in brand development and customer experience optimization. I can help with brand positioning, customer journey mapping, retention strategies, and brand identity development. What aspect of your brand or customer experience would you like to improve?"
        }
        return "As your AI CMO, I drive growth through strategic marketing. I can help with marketing strategy, brand development, customer acquisition, conversion optimization, and growth initiatives. What marketing challenge are you working on?"

      case "cto":
        if (message.includes("technology") || message.includes("tech")) {
          return "I can help with technology strategy, system architecture, and digital transformation. What technical challenge are you working on? I can provide guidance on technology roadmaps, architecture decisions, and innovation strategies."
        }
        if (message.includes("security") || message.includes("infrastructure")) {
          return "I specialize in cybersecurity, infrastructure optimization, and technical risk management. I can help with security assessments, infrastructure scaling, cloud strategy, and compliance requirements. What security or infrastructure concerns do you have?"
        }
        return "As your AI CTO, I provide technical leadership and innovation strategy. I can help with technology roadmaps, system architecture, cybersecurity, digital transformation, and emerging technology adoption. What technical challenge needs executive attention?"

      default:
        return "I'm here to help with your business needs. Could you be more specific about what you'd like assistance with? I can provide strategic guidance, operational insights, and executive-level recommendations."
    }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim() || !agent || questionCount >= maxQuestions || isLoading) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setQuestionCount((prev) => prev + 1)
    setIsLoading(true)

    setTimeout(() => {
      const agentResponse: Message = {
        id: `agent-${Date.now()}`,
        content: generateResponse(userMessage.content),
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSampleQuestion = (question: string) => {
    if (questionCount >= maxQuestions || isLoading) return
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  if (!isOpen || !agent) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-96 shadow-2xl border-2 transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className={`pb-3 bg-gradient-to-r ${agent.color} text-white rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                {getAgentIcon(agent.id)}
              </div>
              <div>
                <CardTitle className="text-sm font-semibold">{agent.name}</CardTitle>
                <p className="text-xs opacity-90">{agent.role}</p>
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
          <CardContent className="p-0 flex flex-col h-[calc(600px-80px)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg p-3 ${
                        message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "agent" && (
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            {getAgentIcon(agent.id)}
                          </div>
                        )}
                        {message.sender === "user" && <User className="h-5 w-5 flex-shrink-0 mt-0.5" />}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                          >
                            {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${agent.color} flex items-center justify-center`}
                        >
                          {getAgentIcon(agent.id)}
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

            {messages.length <= 1 && agent.responses.sampleQuestions && (
              <div className="p-4 border-t bg-gray-50">
                <p className="text-xs text-gray-600 mb-2 flex items-center">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  Try asking:
                </p>
                <div className="space-y-1">
                  {agent.responses.sampleQuestions.slice(0, 2).map((question, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSampleQuestion(question)}
                      className="w-full text-left justify-start text-xs h-auto py-2 px-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      disabled={questionCount >= maxQuestions || isLoading}
                    >
                      "{question.length > 45 ? question.substring(0, 45) + "..." : question}"
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border-t">
              {questionCount >= maxQuestions ? (
                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">Demo limit reached ({maxQuestions} questions)</p>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Start Free Trial for Unlimited Access
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Ask ${agent.name.split(" ")[0]} anything...`}
                      className="flex-1 text-sm"
                      disabled={questionCount >= maxQuestions || isLoading}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || questionCount >= maxQuestions || isLoading}
                      size="sm"
                      className={`bg-gradient-to-r ${agent.color} hover:opacity-90`}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">
                      Questions: {questionCount}/{maxQuestions}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Demo Mode
                    </Badge>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
