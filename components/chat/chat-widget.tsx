"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Send,
  X,
  Crown,
  TrendingUp,
  Zap,
  MessageCircle,
  Sparkles,
  Brain,
  Users,
  Network,
  Command,
  Settings,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  agentName?: string
  agentRole?: string
  delegatedTo?: string[]
  orchestrationLevel?: "coordination" | "delegation" | "synthesis"
}

interface Agent {
  id: string
  name: string
  role: string
  description: string
  icon: React.ReactNode
  color: string
  gradient: string
  expertise: string[]
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

const getOrchestratorResponse = (
  userMessage: string,
): { content: string; delegatedTo?: string[]; orchestrationLevel: "coordination" | "delegation" | "synthesis" } => {
  const message = userMessage.toLowerCase()

  if (message.includes("digital transformation") || message.includes("transformation strategy")) {
    return {
      content:
        "🎯 **COORDINATING DIGITAL TRANSFORMATION ACROSS ALL EXECUTIVES** \n\nI'm orchestrating a comprehensive digital transformation strategy:\n\n**CEO DELEGATION:** Strategic vision, change management, stakeholder alignment, and organizational restructuring to support digital initiatives.\n\n**CMO DELEGATION:** Customer experience transformation, digital marketing strategy, brand positioning in digital channels, and customer journey optimization.\n\n**CTO DELEGATION:** Technical architecture, system integration, cybersecurity framework, and infrastructure modernization.\n\n**MY COORDINATION:** I'm synthesizing their inputs into a unified 18-month roadmap with integrated milestones, cross-functional dependencies, and unified success metrics. This ensures strategic alignment, customer-centric execution, and technical excellence working in harmony.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "coordination",
    }
  }

  if (message.includes("market expansion") || message.includes("expansion strategy")) {
    return {
      content:
        "🌍 **ORCHESTRATING MARKET EXPANSION ACROSS EXECUTIVE TEAM** \n\nI'm coordinating a multi-perspective market expansion approach:\n\n**CEO FOCUS:** Market entry strategy, competitive positioning, regulatory analysis, partnership opportunities, and risk assessment framework.\n\n**CMO FOCUS:** Target audience research, localized marketing strategies, brand adaptation, customer acquisition channels, and market penetration tactics.\n\n**CTO FOCUS:** Technical infrastructure for new markets, localization requirements, scalability planning, and compliance systems.\n\n**UNIFIED ORCHESTRATION:** I'm synthesizing their expertise into a coordinated go-to-market strategy with synchronized execution timelines, integrated resource allocation, and cross-functional success metrics.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "coordination",
    }
  }

  if (message.includes("product launch") || message.includes("launch strategy")) {
    return {
      content:
        "🚀 **DELEGATING PRODUCT LAUNCH ACROSS ALL EXECUTIVES** \n\nI'm orchestrating a comprehensive product launch with clear executive responsibilities:\n\n**CEO RESPONSIBILITIES:** Strategic positioning, investor communications, partnership negotiations, competitive differentiation, and executive stakeholder management.\n\n**CMO RESPONSIBILITIES:** Launch campaign development, customer segmentation, pricing strategy, brand messaging, PR coordination, and customer acquisition funnels.\n\n**CTO RESPONSIBILITIES:** Product readiness, technical support infrastructure, performance monitoring, security protocols, and scalability preparation.\n\n**ORCHESTRATED TIMELINE:** I'm coordinating a 90-day launch sequence with integrated checkpoints, cross-functional dependencies, and unified success tracking across all executive domains.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "delegation",
    }
  }

  if (message.includes("crisis management") || message.includes("crisis plan")) {
    return {
      content:
        "🛡️ **SYNTHESIZING UNIFIED CRISIS MANAGEMENT PLAN** \n\nI'm coordinating all executives for comprehensive crisis response:\n\n**CEO CRISIS ROLE:** Strategic decision-making, stakeholder communications, media relations, organizational stability, and recovery planning.\n\n**CMO CRISIS ROLE:** Brand protection, customer communications, reputation management, crisis messaging, and customer retention strategies.\n\n**CTO CRISIS ROLE:** System stability, data protection, technical continuity, cybersecurity response, and infrastructure resilience.\n\n**INTEGRATED RESPONSE:** I'm synthesizing their crisis protocols into a unified command structure with real-time coordination, escalation procedures, and cross-functional crisis communication channels.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "synthesis",
    }
  }

  if (message.includes("competitive analysis") || message.includes("competition")) {
    return {
      content:
        "🔍 **COORDINATING COMPREHENSIVE COMPETITIVE ANALYSIS** \n\nI'm orchestrating multi-dimensional competitive intelligence:\n\n**CEO ANALYSIS:** Strategic positioning, market share analysis, competitive threats, acquisition opportunities, and strategic response planning.\n\n**CMO ANALYSIS:** Brand positioning comparison, marketing strategy analysis, customer perception studies, pricing analysis, and competitive messaging.\n\n**CTO ANALYSIS:** Technology stack comparison, innovation assessment, technical capabilities analysis, and competitive technical advantages.\n\n**SYNTHESIZED INTELLIGENCE:** I'm integrating their analyses into unified competitive intelligence with strategic recommendations, tactical responses, and coordinated competitive positioning across all business functions.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "coordination",
    }
  }

  if (message.includes("customer retention") || message.includes("retention strategy")) {
    return {
      content:
        "💎 **ORCHESTRATING CUSTOMER RETENTION ACROSS ALL EXECUTIVES** \n\nI'm coordinating a comprehensive customer retention strategy:\n\n**CEO CONTRIBUTION:** Customer success strategy, retention metrics, customer lifetime value optimization, and executive customer relationship management.\n\n**CMO CONTRIBUTION:** Customer journey optimization, loyalty programs, personalized marketing, retention campaigns, and customer experience enhancement.\n\n**CTO CONTRIBUTION:** Customer data analytics, retention prediction models, automated engagement systems, and technical customer support optimization.\n\n**UNIFIED EXECUTION:** I'm synthesizing their approaches into an integrated retention framework with coordinated touchpoints, unified customer data, and cross-functional retention metrics.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "coordination",
    }
  }

  if (message.includes("coordinate") || message.includes("all executives") || message.includes("team")) {
    return {
      content:
        "🎼 **COORDINATING ALL EXECUTIVES FOR UNIFIED STRATEGY** \n\nI'm orchestrating comprehensive executive collaboration:\n\n**CEO COORDINATION:** Strategic framework development, organizational alignment, stakeholder management, and executive decision-making processes.\n\n**CMO COORDINATION:** Market-driven insights, customer-centric strategies, brand alignment, and growth optimization initiatives.\n\n**CTO COORDINATION:** Technical feasibility assessment, innovation integration, system architecture, and digital transformation capabilities.\n\n**ORCHESTRATED OUTCOME:** I'm synthesizing their specialized expertise into unified strategic recommendations with integrated execution plans, cross-functional accountability, and coordinated success metrics.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "coordination",
    }
  }

  if (message.includes("delegate") || message.includes("assign") || message.includes("distribute")) {
    return {
      content:
        "📋 **DELEGATING COMPLEX INITIATIVE ACROSS EXECUTIVE TEAM** \n\nI'm analyzing this initiative and distributing responsibilities:\n\n**CEO DELEGATION:** Strategic oversight, stakeholder alignment, organizational change management, and executive-level decision authority.\n\n**CMO DELEGATION:** Market analysis, customer impact assessment, brand implications, and customer communication strategies.\n\n**CTO DELEGATION:** Technical implementation, system requirements, security considerations, and infrastructure planning.\n\n**COORDINATION FRAMEWORK:** I'm maintaining oversight with integrated project management, cross-functional communication protocols, and unified progress tracking across all executive domains.",
      delegatedTo: ["CEO", "CMO", "CTO"],
      orchestrationLevel: "delegation",
    }
  }

  return {
    content:
      "🧠 **NEURAL ORCHESTRATOR READY FOR COORDINATION** \n\nAs your central command system, I coordinate all AI executives to deliver comprehensive business solutions:\n\n**COORDINATION CAPABILITIES:**\n• Delegate complex initiatives across CEO, CMO, and CTO\n• Synthesize specialized insights from all executives\n• Orchestrate unified strategic recommendations\n• Manage cross-functional project execution\n• Provide integrated business intelligence\n\n**EXECUTIVE TEAM READY:**\n• **CEO:** Strategic leadership and decision-making\n• **CMO:** Marketing strategy and growth optimization  \n• **CTO:** Technology innovation and digital transformation\n\nWhat complex business challenge would you like me to coordinate across the entire executive team?",
    orchestrationLevel: "coordination",
  }
}

const getAgentResponses = (agent: Agent, userMessage: string): string => {
  const message = userMessage.toLowerCase()

  if (agent.id === "orchestrator") {
    const response = getOrchestratorResponse(userMessage)
    return response.content
  }

  if (agent.id === "ceo") {
    if (message.includes("strategy") || message.includes("strategic")) {
      return "As your Chief Executive Officer, I focus on strategic vision and execution. I can help you develop comprehensive business strategies, analyze market opportunities, assess competitive positioning, and make critical executive decisions. My approach combines data-driven insights with strategic foresight to drive sustainable growth and competitive advantage."
    }
    if (message.includes("market") || message.includes("expansion")) {
      return "Market expansion requires careful strategic planning. I analyze market dynamics, competitive landscapes, regulatory environments, and growth opportunities. For international expansion, I evaluate market entry strategies, partnership opportunities, risk assessment, and resource allocation to ensure successful market penetration."
    }
    if (message.includes("leadership") || message.includes("team")) {
      return "Effective leadership is about vision, execution, and people. I help develop leadership strategies, organizational structures, talent acquisition plans, and performance management systems. Building high-performing teams requires clear communication, strategic alignment, and fostering a culture of innovation and accountability."
    }
    return "As your AI Chief Executive Officer, I provide strategic leadership and executive decision-making support. I can help with business strategy, market analysis, organizational development, and strategic planning. What specific executive challenge would you like to discuss?"
  }

  if (agent.id === "cmo") {
    if (message.includes("marketing") || message.includes("campaign")) {
      return "As your Chief Marketing Officer, I specialize in comprehensive marketing strategies that drive growth. I can develop integrated marketing campaigns, optimize customer acquisition funnels, enhance brand positioning, and implement data-driven marketing automation. My focus is on maximizing ROI while building sustainable customer relationships."
    }
    if (message.includes("brand") || message.includes("branding")) {
      return "Brand strategy is fundamental to market success. I help develop compelling brand narratives, visual identity systems, brand positioning frameworks, and brand experience strategies. Effective branding creates emotional connections with customers, differentiates from competitors, and builds long-term brand equity."
    }
    if (message.includes("growth") || message.includes("customer")) {
      return "Customer-centric growth strategies are my specialty. I analyze customer journeys, optimize conversion funnels, implement retention strategies, and develop personalized marketing experiences. By understanding customer behavior and preferences, we can create targeted campaigns that drive sustainable growth."
    }
    return "As your AI Chief Marketing Officer, I drive growth through strategic marketing initiatives. I can help with brand strategy, customer acquisition, digital marketing, campaign optimization, and growth hacking. What marketing challenge can I help you solve?"
  }

  if (agent.id === "cto") {
    if (message.includes("technology") || message.includes("tech")) {
      return "As your Chief Technology Officer, I focus on technology strategy and innovation. I can help architect scalable systems, evaluate emerging technologies, implement digital transformation initiatives, and build robust technical infrastructures. My approach balances innovation with operational excellence and security."
    }
    if (message.includes("security") || message.includes("cybersecurity")) {
      return "Cybersecurity is critical in today's digital landscape. I develop comprehensive security frameworks, implement zero-trust architectures, conduct security assessments, and establish incident response protocols. My approach includes both preventive measures and rapid response capabilities to protect your digital assets."
    }
    if (message.includes("innovation") || message.includes("ai")) {
      return "Innovation drives competitive advantage. I help evaluate emerging technologies like AI, blockchain, IoT, and cloud computing. I can develop innovation strategies, assess technology adoption roadmaps, and implement cutting-edge solutions that transform business operations and create new value propositions."
    }
    return "As your AI Chief Technology Officer, I provide technical leadership and innovation strategy. I can help with technology architecture, digital transformation, cybersecurity, AI implementation, and technical team building. What technology challenge would you like to explore?"
  }

  return "I'm here to help with your business challenges. Could you provide more specific details about what you'd like to discuss?"
}

export function ChatWidget({ agent, isOpen, onClose, maxQuestions = 5 }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { user } = useAuth()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (agent && isOpen) {
      const userName = user?.user_metadata?.full_name || user?.email?.split("@")[0] || "there"
      const initialMessage: Message = {
        id: `welcome-${agent.id}-${Date.now()}`,
        content: `Hello ${userName}! I'm the ${agent.name} AI Executive. ${agent.responses.greeting}`,
        sender: "agent",
        timestamp: new Date(),
        agentName: agent.name,
        agentRole: agent.role,
      }
      setMessages([initialMessage])
      setQuestionCount(0)
    }
  }, [agent, isOpen, maxQuestions, user])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !agent || questionCount >= maxQuestions) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)
    setQuestionCount((prev) => prev + 1)

    setTimeout(() => {
      let agentResponse: Message

      if (agent.id === "orchestrator") {
        const orchestratorResponse = getOrchestratorResponse(inputValue)
        agentResponse = {
          id: `agent-${Date.now()}`,
          content: orchestratorResponse.content,
          sender: "agent",
          timestamp: new Date(),
          agentName: agent.name,
          agentRole: agent.role,
          delegatedTo: orchestratorResponse.delegatedTo,
          orchestrationLevel: orchestratorResponse.orchestrationLevel,
        }
      } else {
        agentResponse = {
          id: `agent-${Date.now()}`,
          content: getAgentResponses(agent, inputValue),
          sender: "agent",
          timestamp: new Date(),
          agentName: agent.name,
          agentRole: agent.role,
        }
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

  if (!agent) return null

  const getAgentIcon = () => {
    switch (agent.id) {
      case "orchestrator":
        return <Network className="h-5 w-5" />
      case "ceo":
        return <Crown className="h-5 w-5" />
      case "cmo":
        return <TrendingUp className="h-5 w-5" />
      case "cto":
        return <Zap className="h-5 w-5" />
      default:
        return <Brain className="h-5 w-5" />
    }
  }

  const remainingQuestions = maxQuestions - questionCount

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[700px] p-0 overflow-hidden">
        <DialogHeader className={`p-4 bg-gradient-to-r ${agent.gradient} text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12 bg-white/20">
                <AvatarFallback className="bg-transparent text-white">{getAgentIcon()}</AvatarFallback>
              </Avatar>
              <div>
                <DialogTitle className="text-white text-xl">{agent.name}</DialogTitle>
                <p className="text-white/90 text-sm">{agent.role}</p>
                {agent.id === "orchestrator" && (
                  <div className="flex items-center space-x-2 mt-1">
                    <Command className="h-3 w-3 text-white/80" />
                    <span className="text-xs text-white/80">Coordinates CEO • CMO • CTO</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MessageCircle className="h-3 w-3 mr-1" />
                {remainingQuestions} questions left
              </Badge>
              <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 flex flex-col h-full">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-lg p-4 ${
                      message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.sender === "agent" && (
                      <div className="flex items-center space-x-2 mb-3">
                        <div
                          className={`w-6 h-6 rounded-full bg-gradient-to-r ${agent.gradient} flex items-center justify-center`}
                        >
                          <div className="text-white text-xs">{getAgentIcon()}</div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">{message.agentName}</span>
                        {message.orchestrationLevel && (
                          <Badge variant="outline" className="text-xs">
                            {message.orchestrationLevel}
                          </Badge>
                        )}
                      </div>
                    )}

                    <p className="text-sm leading-relaxed mb-2">{message.content}</p>

                    {message.delegatedTo && message.delegatedTo.length > 0 && (
                      <div className="mt-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <Settings className="h-4 w-4 text-indigo-600" />
                          <span className="text-xs font-semibold text-indigo-800">Executive Coordination</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {message.delegatedTo.map((exec) => (
                            <Badge key={exec} variant="secondary" className="text-xs bg-indigo-100 text-indigo-700">
                              {exec} Engaged
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-lg p-4 max-w-[85%]">
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className={`w-6 h-6 rounded-full bg-gradient-to-r ${agent.gradient} flex items-center justify-center`}
                      >
                        <div className="text-white text-xs">{getAgentIcon()}</div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        {agent.id === "orchestrator" ? "Coordinating executives..." : `${agent.name} is analyzing...`}
                      </span>
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
              )}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          {/* Suggested Questions Section - Only show for orchestrator and when no user messages yet */}
          {agent.id === "orchestrator" && messages.length === 1 && questionCount === 0 && (
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-t border-indigo-200">
              <div className="flex items-center space-x-2 mb-3">
                <Command className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-800">Try These Coordination Examples:</span>
              </div>
              <div className="grid gap-2">
                {agent.responses.sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-left justify-start text-xs h-auto py-2 px-3 bg-white hover:bg-indigo-50 hover:border-indigo-300 border-indigo-200"
                    onClick={() => {
                      setInputValue(question)
                      setTimeout(() => handleSendMessage(), 100)
                    }}
                  >
                    <MessageCircle className="h-3 w-3 mr-2 text-indigo-600 flex-shrink-0" />
                    <span className="truncate">{question}</span>
                  </Button>
                ))}
              </div>
              <p className="text-xs text-indigo-600 mt-2 text-center">
                Click any question to see how I coordinate CEO, CMO, and CTO
              </p>
            </div>
          )}

          {questionCount >= maxQuestions ? (
            <div className="p-4 bg-gray-50 border-t">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-medium">Demo Complete!</span>
                </div>
                <p className="text-sm text-gray-600">You've reached the maximum number of questions for this demo.</p>
                <Button className={`bg-gradient-to-r ${agent.gradient} hover:opacity-90`} onClick={onClose}>
                  <Users className="h-4 w-4 mr-2" />
                  Get Full Access
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    agent.id === "orchestrator"
                      ? "Ask me to coordinate any complex business initiative..."
                      : `Ask ${agent.name} anything...`
                  }
                  disabled={isTyping}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`bg-gradient-to-r ${agent.gradient} hover:opacity-90`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span>
                  {agent.id === "orchestrator" ? "Press Enter to coordinate executives" : "Press Enter to send"}
                </span>
                <span>{remainingQuestions} questions remaining</span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ChatWidget
