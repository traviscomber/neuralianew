"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Send, Sparkles, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/hooks/use-auth"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  agentType?: string
}

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
  specificAgent?: string | null
}

const agentConfigs = {
  "ceo-neural-agent": {
    name: "CEO Neural Agent",
    icon: "👔",
    color: "from-blue-600 to-purple-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    description: "Strategic leadership and executive decision-making",
    insights: ["Market Analysis", "Strategic Planning", "Leadership"],
    recommendations: ["Growth Strategy", "Risk Management"],
  },
  "cmo-neural-agent": {
    name: "CMO Neural Agent",
    icon: "📈",
    color: "from-pink-600 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    description: "Marketing strategy and brand management",
    insights: ["Brand Strategy", "Customer Insights", "Campaign ROI"],
    recommendations: ["Digital Marketing", "Brand Positioning"],
  },
  "cto-neural-agent": {
    name: "CTO Neural Agent",
    icon: "⚡",
    color: "from-emerald-600 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "Technology strategy and innovation leadership",
    insights: ["Tech Stack", "Innovation", "Architecture"],
    recommendations: ["Cloud Strategy", "AI Integration"],
  },
  "financial-advisor": {
    name: "Financial Strategy Expert",
    icon: "💰",
    color: "from-emerald-600 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    description: "Financial planning and investment strategy",
    insights: ["Financial Planning", "Investment Strategy", "Risk Assessment"],
    recommendations: ["Budget Optimization", "Portfolio Management"],
  },
  "legal-counsel": {
    name: "Legal Advisory Expert",
    icon: "⚖️",
    color: "from-slate-600 to-gray-600",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    description: "Legal expertise and compliance guidance",
    insights: ["Contract Review", "Compliance", "Legal Research"],
    recommendations: ["Risk Mitigation", "Regulatory Compliance"],
  },
  "operations-manager": {
    name: "Operations Excellence Expert",
    icon: "⚙️",
    color: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    description: "Process optimization and operational efficiency",
    insights: ["Process Optimization", "Supply Chain", "Quality Control"],
    recommendations: ["Efficiency Analysis", "Cost Reduction"],
  },
  "innovation-strategist": {
    name: "Innovation & R&D Expert",
    icon: "🚀",
    color: "from-violet-600 to-purple-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    description: "Innovation strategy and product development",
    insights: ["Product Development", "Innovation Strategy", "Technology Assessment"],
    recommendations: ["Market Research", "R&D Planning"],
  },
}

function ChatWidget({ isOpen, onClose, specificAgent }: ChatWidgetProps) {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const currentAgent =
    specificAgent && agentConfigs[specificAgent as keyof typeof agentConfigs]
      ? agentConfigs[specificAgent as keyof typeof agentConfigs]
      : agentConfigs["ceo-neural-agent"]

  const maxFreeQuestions = 3
  const isTrialUser = !user
  const questionsRemaining = Math.max(0, maxFreeQuestions - questionCount)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content: `Hello! I'm your ${currentAgent.name}. I'm here to help you with ${currentAgent.description.toLowerCase()}. ${
          isTrialUser
            ? `You have ${maxFreeQuestions} free questions to explore my capabilities. What would you like to know?`
            : "How can I assist you today?"
        }`,
        sender: "agent",
        timestamp: new Date(),
        agentType: specificAgent || "ceo-neural-agent",
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, currentAgent, isTrialUser, specificAgent])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const getAgentResponse = (userMessage: string, agentType: string) => {
    const responses = {
      "ceo-neural-agent": [
        "From a strategic perspective, this requires careful analysis of market dynamics and competitive positioning.",
        "As CEO, I'd recommend focusing on sustainable growth while maintaining operational excellence.",
        "This decision should align with our long-term vision and stakeholder value creation.",
        "Let's consider the strategic implications and potential ROI of this initiative.",
        "Market leadership requires bold decisions backed by data-driven insights.",
      ],
      "cmo-neural-agent": [
        "From a marketing standpoint, we need to understand our target audience's pain points and motivations.",
        "Brand positioning is crucial here - we should differentiate ourselves through authentic storytelling.",
        "Customer acquisition costs and lifetime value metrics will guide our campaign strategy.",
        "Multi-channel marketing approach would maximize reach and engagement.",
        "Data-driven personalization can significantly improve conversion rates.",
      ],
      "cto-neural-agent": [
        "From a technical architecture perspective, scalability and security should be our primary concerns.",
        "We should evaluate cloud-native solutions that offer flexibility and cost optimization.",
        "API-first design will enable better integration and future-proofing of our systems.",
        "Implementing DevOps practices will accelerate our development lifecycle.",
        "AI and machine learning integration could provide significant competitive advantages.",
      ],
      "financial-advisor": [
        "From a financial planning perspective, we need to assess risk tolerance and investment timeline.",
        "Diversification across asset classes will help optimize risk-adjusted returns.",
        "Cash flow analysis indicates we should prioritize liquidity management.",
        "Tax-efficient strategies could significantly impact your net returns.",
        "Regular portfolio rebalancing ensures alignment with your financial goals.",
      ],
      "legal-counsel": [
        "From a legal standpoint, we need to ensure full compliance with applicable regulations.",
        "Contract terms should clearly define responsibilities and liability limitations.",
        "Intellectual property protection is crucial for maintaining competitive advantage.",
        "Risk mitigation strategies should be implemented across all business operations.",
        "Regular legal audits help identify and address potential compliance issues.",
      ],
      "operations-manager": [
        "From an operational efficiency perspective, we should streamline processes and eliminate waste.",
        "Supply chain optimization can significantly reduce costs and improve delivery times.",
        "Quality control measures ensure consistent product/service excellence.",
        "Performance metrics and KPIs will help track operational improvements.",
        "Automation opportunities could enhance productivity and reduce human error.",
      ],
      "innovation-strategist": [
        "From an innovation perspective, we should focus on emerging technologies and market trends.",
        "R&D investment should align with long-term strategic objectives and market opportunities.",
        "Customer feedback and market research will guide product development priorities.",
        "Agile development methodologies enable faster time-to-market and iteration.",
        "Strategic partnerships can accelerate innovation and market penetration.",
      ],
    }

    const agentResponses = responses[agentType as keyof typeof responses] || responses["ceo-neural-agent"]
    return agentResponses[Math.floor(Math.random() * agentResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    if (isTrialUser && questionCount >= maxFreeQuestions) {
      setShowAuthModal(true)
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    if (isTrialUser) {
      setQuestionCount((prev) => prev + 1)
    }

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getAgentResponse(inputValue, specificAgent || "ceo-neural-agent"),
        sender: "agent",
        timestamp: new Date(),
        agentType: specificAgent || "ceo-neural-agent",
      }
      setMessages((prev) => [...prev, agentResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickReplies = [
    "What are your key capabilities?",
    "How can you help my business?",
    "What's your strategic approach?",
  ]

  if (!isOpen) return null

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="p-0 gap-0 max-w-lg w-full h-[min(600px,90vh)] max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className={`${currentAgent.bgColor} ${currentAgent.borderColor} border-b p-4 flex-shrink-0`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${currentAgent.color} flex items-center justify-center text-white text-lg`}
                >
                  {currentAgent.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{currentAgent.name}</h3>
                  <p className="text-sm text-gray-600">{currentAgent.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Trial Status */}
            {isTrialUser && (
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  <Clock className="mr-1 h-3 w-3" />
                  Free Trial: {questionsRemaining} questions left
                </Badge>
                <div className="flex space-x-1">
                  {Array.from({ length: maxFreeQuestions }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i < questionCount ? "bg-blue-500" : "bg-gray-200"}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Insights & Recommendations */}
            <div className="mt-3 flex flex-wrap gap-1">
              {currentAgent.insights.slice(0, 2).map((insight, index) => (
                <Badge key={index} variant="secondary" className="text-xs hidden sm:inline-flex">
                  <Sparkles className="mr-1 h-2 w-2" />
                  {insight}
                </Badge>
              ))}
              {currentAgent.recommendations.slice(0, 1).map((rec, index) => (
                <Badge key={index} variant="outline" className="text-xs hidden md:inline-flex">
                  {rec}
                </Badge>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : `bg-gradient-to-r ${currentAgent.color} text-white`
                        }`}
                      >
                        {message.sender === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <span className="text-sm">{currentAgent.icon}</span>
                        )}
                      </div>
                      <div
                        className={`rounded-lg px-3 py-2 break-words ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white"
                            : `${currentAgent.bgColor} ${currentAgent.borderColor} border text-gray-900`
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentAgent.color} flex items-center justify-center text-white`}
                      >
                        <span className="text-sm">{currentAgent.icon}</span>
                      </div>
                      <div
                        className={`${currentAgent.bgColor} ${currentAgent.borderColor} border rounded-lg px-3 py-2`}
                      >
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
              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <>
                <Separator />
                <div className="p-3">
                  <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {quickReplies.slice(0, 2).map((reply, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 bg-transparent"
                        onClick={() => setInputValue(reply)}
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Input */}
            <div className={`border-t p-4 flex-shrink-0 ${currentAgent.bgColor}`}>
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    isTrialUser && questionCount >= maxFreeQuestions
                      ? "Sign up to continue chatting..."
                      : "Ask me anything..."
                  }
                  disabled={isTrialUser && questionCount >= maxFreeQuestions}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || (isTrialUser && questionCount >= maxFreeQuestions)}
                  className={`bg-gradient-to-r ${currentAgent.color} hover:opacity-90`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {isTrialUser && questionCount >= maxFreeQuestions && (
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-600 mb-2">You've reached your free question limit</p>
                  <Button
                    size="sm"
                    onClick={() => setShowAuthModal(true)}
                    className={`bg-gradient-to-r ${currentAgent.color} hover:opacity-90`}
                  >
                    Sign Up for Unlimited Access
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  )
}

export { ChatWidget }
export default ChatWidget
