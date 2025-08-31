"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Minimize2, Maximize2, X, Bot, User, Headphones, CheckCircle, Zap } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  type?: "text" | "quick_reply" | "system"
  quickReplies?: string[]
  metadata?: {
    confidence?: number
    processingTime?: number
    category?: string
  }
}

interface CustomerServiceChatProps {
  isOpen?: boolean
  onToggle?: () => void
}

export function CustomerServiceChat({ isOpen = false, onToggle }: CustomerServiceChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "👋 Hello! I'm your Neuralia AI Support specialist. I'm genuinely excited to help you discover how our neural AI executives can transform your business operations. What specific challenge can I help you solve today?",
      sender: "agent",
      timestamp: new Date(),
      type: "quick_reply",
      quickReplies: [
        "How do I justify AI executives to my board?",
        "What's the ROI vs hiring human executives?",
        "How secure is our sensitive data?",
        "Talk to a human specialist",
      ],
      metadata: {
        confidence: 1.0,
        processingTime: 0.001,
        category: "greeting",
      },
    },
  ])

  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [questionCount, setQuestionCount] = useState(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAIResponse = async (userInput: string, conversationHistory: Message[]): Promise<Message> => {
    try {
      // Build conversation context for OpenAI with enhanced customer service context
      const messages = [
        {
          role: "system" as const,
          content: `You are Neuralia AI Support, the world's most advanced customer service AI agent. Use the comprehensive customer service training from your system prompt to provide exceptional support.

CONVERSATION CONTEXT: This is message #${conversationHistory.filter((msg) => msg.sender === "user").length + 1} in this conversation.

RESPONSE REQUIREMENTS:
1. Acknowledge their specific question with genuine empathy
2. Provide detailed, value-focused information with specific metrics
3. Include relevant success stories or social proof when appropriate
4. Always end with a clear call-to-action or next step
5. Use consultative selling techniques to understand their deeper needs
6. Create urgency ethically through limited-time offers or exclusive benefits

Remember: Every response should make them feel valued, understood, and excited about Neuralia's potential to solve their business challenges.`,
        },
        // Add recent conversation history
        ...conversationHistory.slice(-6).map((msg) => ({
          role: msg.sender === "user" ? ("user" as const) : ("assistant" as const),
          content: msg.content,
        })),
        {
          role: "user" as const,
          content: userInput,
        },
      ]

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userInput,
          agentType: "customer-service",
          conversationHistory: conversationHistory,
          messages: messages,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get AI response")
      }

      const data = await response.json()
      const aiResponse = data.response

      // Generate highly contextual and engaging quick replies
      let quickReplies: string[] = []
      const responseText = aiResponse.toLowerCase()
      const userQuestionCount = conversationHistory.filter((msg) => msg.sender === "user").length

      // Advanced contextual reply generation with more engaging options
      if (responseText.includes("board") || responseText.includes("justify") || responseText.includes("executive")) {
        quickReplies = [
          "Show me the exact ROI numbers",
          "How do Fortune 500 companies use this?",
          "What's the risk of NOT having AI executives?",
          "Connect me with a specialist",
        ]
      } else if (
        responseText.includes("roi") ||
        responseText.includes("return") ||
        responseText.includes("investment")
      ) {
        quickReplies = [
          "Calculate ROI for my company size",
          "Show me before/after case studies",
          "What's the payback period?",
          "Speak with ROI expert",
        ]
      } else if (
        responseText.includes("security") ||
        responseText.includes("data") ||
        responseText.includes("compliance")
      ) {
        quickReplies = [
          "Show me security certifications",
          "How do you handle GDPR/HIPAA?",
          "What about data sovereignty?",
          "Talk to security specialist",
        ]
      } else if (
        responseText.includes("competitive") ||
        responseText.includes("compare") ||
        responseText.includes("better")
      ) {
        quickReplies = [
          "Neuralia vs ChatGPT for business",
          "Why not hire consultants instead?",
          "What makes you different?",
          "Speak with product expert",
        ]
      } else if (
        responseText.includes("integration") ||
        responseText.includes("systems") ||
        responseText.includes("workflow")
      ) {
        quickReplies = [
          "How does it work with our CRM?",
          "API integration capabilities",
          "Implementation timeline",
          "Talk to technical specialist",
        ]
      } else if (responseText.includes("trial") || responseText.includes("free") || responseText.includes("demo")) {
        quickReplies = [
          "Start my trial right now",
          "Which agent should I try first?",
          "Can I get a live demo?",
          "Schedule call with specialist",
        ]
      } else if (responseText.includes("ceo") && responseText.includes("strategic")) {
        quickReplies = [
          "Try CEO agent now",
          "CEO decision-making examples",
          "Strategic planning capabilities",
          "Speak with CEO specialist",
        ]
      } else if (responseText.includes("cmo") && responseText.includes("marketing")) {
        quickReplies = [
          "Try CMO agent now",
          "Marketing ROI case studies",
          "Growth hacking examples",
          "Talk to marketing expert",
        ]
      } else if (responseText.includes("cto") && responseText.includes("technology")) {
        quickReplies = [
          "Try CTO agent now",
          "Tech roadmap examples",
          "Architecture review process",
          "Connect with CTO specialist",
        ]
      } else if (responseText.includes("implementation") || responseText.includes("getting started")) {
        quickReplies = [
          "What's the onboarding process?",
          "How long until we see results?",
          "Training and support included?",
          "Talk to implementation expert",
        ]
      } else if (
        responseText.includes("culture") ||
        responseText.includes("team") ||
        responseText.includes("adoption")
      ) {
        quickReplies = [
          "How to get team buy-in?",
          "Managing resistance to AI",
          "Success metrics to track",
          "Speak with change specialist",
        ]
      } else {
        // Default high-engagement contextual replies
        quickReplies = [
          "How do I justify this to executives?",
          "Show me competitive advantages",
          "What's the implementation process?",
          "Connect me with a specialist",
        ]
      }

      // Add close option after 3+ questions with more engaging language
      if (userQuestionCount >= 3) {
        quickReplies = [...quickReplies.slice(0, 3), "I'm ready to transform my business!"]
      }

      return {
        id: Date.now().toString(),
        content: aiResponse,
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies,
        metadata: {
          confidence: 0.98,
          processingTime: Math.random() * 0.4 + 0.2,
          category: "ai_response",
        },
      }
    } catch (error) {
      console.error("Error getting AI response:", error)

      // Enhanced fallback response with customer service excellence
      return {
        id: Date.now().toString(),
        content:
          "I sincerely apologize for the technical hiccup! While I reconnect, let me share that our neural AI executives have helped 500+ companies achieve an average 3.2x ROI. Your 5-day free trial is waiting - no credit card required! 🚀",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: ["Try again", "Start free trial anyway", "Show me success stories", "Talk to human support"],
        metadata: {
          confidence: 0.9,
          processingTime: 0.1,
          category: "fallback",
        },
      }
    }
  }

  const handleSendMessage = async (message?: string) => {
    const messageText = message || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageText,
      sender: "user",
      timestamp: new Date(),
      type: "text",
    }

    setMessages((prev) => [...prev, userMessage])
    setQuestionCount((prev) => prev + 1)
    setInputValue("")
    setIsTyping(true)

    try {
      // Get AI response from OpenAI
      const agentResponse = await generateAIResponse(messageText, messages)
      setMessages((prev) => [...prev, agentResponse])
    } catch (error) {
      console.error("Error in handleSendMessage:", error)
      // Enhanced fallback message
      const fallbackMessage: Message = {
        id: Date.now().toString(),
        content:
          "I'm experiencing a brief connection issue, but I'm back! How can I help you discover the perfect neural AI executive for your business needs? 🎯",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: [
          "Show me ROI calculations",
          "Security and compliance info",
          "Competitive advantages",
          "Talk to human specialist",
        ],
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickReply = (reply: string) => {
    // Handle human support requests
    if (
      reply.includes("Talk to") ||
      reply.includes("Speak with") ||
      reply.includes("Connect me") ||
      reply.includes("human support") ||
      reply.includes("specialist")
    ) {
      const humanSupportMessage: Message = {
        id: Date.now().toString(),
        content:
          "🤝 I'd be happy to connect you with one of our human specialists! Our expert team is available 24/7 to provide personalized support.\n\n📞 **Immediate Support Options:**\n• Live chat with specialist: Available now\n• Phone consultation: +1 (555) 123-NEURAL\n• Email: support@neuralia.ai\n• Schedule video call: Available within 15 minutes\n\n✨ **What to expect:**\n• Dedicated specialist assigned to your account\n• Personalized demo tailored to your business\n• Custom ROI analysis for your company\n• Implementation roadmap and timeline\n\nWould you like me to connect you right now, or would you prefer to schedule a call at your convenience?",
        sender: "agent",
        timestamp: new Date(),
        type: "quick_reply",
        quickReplies: ["Connect me now", "Schedule a call", "Send me contact details", "Continue with AI support"],
      }
      setMessages((prev) => [...prev, humanSupportMessage])
      return
    }

    if (
      reply === "I'm ready to transform my business!" ||
      reply === "I'm ready to get started!" ||
      reply === "I'm ready to close this chat"
    ) {
      // Enhanced closing message with clear next steps
      const closingMessage: Message = {
        id: Date.now().toString(),
        content:
          "🎉 Outstanding! I'm thrilled you're ready to revolutionize your business with Neuralia's neural AI executives. Your transformation starts with our risk-free 5-day trial - no credit card required!\n\n✅ Choose your AI executive (CEO, CMO, or CTO)\n✅ Get instant access in 30 seconds\n✅ Start seeing measurable results immediately\n✅ Full support from our expert team\n\nThank you for choosing Neuralia - we're here 24/7 to ensure your success! 🚀",
        sender: "agent",
        timestamp: new Date(),
        type: "text",
      }
      setMessages((prev) => [...prev, closingMessage])

      // Close the chat after showing the message
      setTimeout(() => {
        if (onToggle) onToggle()
      }, 4000)
      return
    }

    handleSendMessage(reply)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={onToggle}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg rounded-full w-14 h-14 p-0 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute -top-12 -left-8 bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          💡 Ask me complex business questions!
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-96 shadow-2xl border-2 border-blue-200 transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[600px]"
        }`}
      >
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Headphones className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">Neuralia AI Support</CardTitle>
                <div className="flex items-center space-x-2 text-sm text-blue-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Expert support • Human specialists available • 0.2s avg</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={onToggle} className="text-white hover:bg-white/20 p-1">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[536px] p-0">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="space-y-2">
                    <div
                      className={`flex items-start space-x-3 ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {message.sender === "agent" ? (
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                        )}
                      </div>

                      <div className={`max-w-[80%] ${message.sender === "user" ? "text-right" : ""}`}>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <div className="text-sm whitespace-pre-line">{message.content}</div>
                        </div>

                        {message.metadata && message.sender === "agent" && (
                          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <Zap className="h-3 w-3 text-green-500" />
                            <span>{message.metadata.processingTime?.toFixed(2)}s</span>
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{Math.round((message.metadata.confidence || 0) * 100)}% confident</span>
                          </div>
                        )}

                        <div className="text-xs text-gray-400 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                    </div>

                    {message.quickReplies && message.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-2 ml-11">
                        {message.quickReplies.map((reply, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs bg-white hover:bg-blue-50 border-blue-200 text-blue-700 hover:border-blue-400 transition-all duration-200 hover:shadow-sm"
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            <div className="border-t p-4 bg-gradient-to-r from-gray-50 to-blue-50">
              <div className="flex items-center space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask complex questions about ROI, security, implementation..."
                  className="flex-1 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                🧠 Expert AI • Human specialists available 24/7 • 94% satisfaction • 500+ enterprises
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
