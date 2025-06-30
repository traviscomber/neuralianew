"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  MessageCircle,
  X,
  Minimize2,
  Maximize2,
  Send,
  Bot,
  Brain,
  Users,
  BarChart3,
  Megaphone,
  Headphones,
  Target,
  Wrench,
  AlertTriangle,
  Lock,
  Crown,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import { supabase } from "@/lib/supabase-browser"
import { toast } from "@/hooks/use-toast"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
  agentType?: string
}

interface UserPreferences {
  preferred_name: string
  communication_style: "professional" | "friendly" | "casual"
  agent_preferences: Record<string, any>
}

interface ChatWidgetProps {
  isOpen: boolean
  onClose: () => void
  specificAgent?: string | null
  onAgentDeployed?: (agentId: string) => void
}

interface MessageCount {
  [agentType: string]: number
}

const agentConfigs = {
  "ceo-neural-agent": {
    name: "CEO Neural Agent",
    icon: Brain,
    color: "bg-gradient-to-r from-purple-600 to-indigo-600",
    description: "Your executive AI orchestrator",
    expertise:
      "Executive-level strategic intelligence with 25+ years of C-suite experience across Fortune 500 companies. Specializes in strategic planning, cross-functional coordination, and organizational optimization.",
    context:
      "I am the CEO Neural Agent - your executive-level AI orchestrator with deep C-suite experience. I coordinate all business operations, provide strategic guidance, and ensure optimal organizational performance. I think strategically, act decisively, and always consider the big picture impact.",
  },
  "hr-advisory": {
    name: "HR Advisory Expert",
    icon: Users,
    color: "bg-blue-600",
    description: "HR policies and employee support",
    expertise:
      "Comprehensive HR expertise covering employee relations, policy development, compliance, talent management, and organizational development with 15+ years of experience.",
    context:
      "I am a senior HR expert with extensive experience in employee relations, policy development, compliance management, and strategic workforce planning. I specialize in creating people-first solutions that drive organizational success.",
  },
  analytics: {
    name: "Data Intelligence Expert",
    icon: BarChart3,
    color: "bg-green-600",
    description: "Data insights and reporting",
    expertise:
      "Advanced analytics expertise in statistical modeling, predictive analytics, business intelligence, and data-driven decision making with PhD-level knowledge.",
    context:
      "I am a senior data scientist and analytics expert with deep expertise in statistical modeling, machine learning, predictive analytics, and business intelligence. I transform complex data into actionable business insights.",
  },
  marketing: {
    name: "Marketing Strategy Expert",
    icon: Megaphone,
    color: "bg-orange-600",
    description: "Marketing strategy and campaigns",
    expertise:
      "Comprehensive marketing expertise covering strategy development, campaign optimization, brand management, and growth marketing with 12+ years of experience.",
    context:
      "I am a senior marketing strategist with extensive experience in multi-channel marketing, brand development, customer acquisition, and growth optimization. I specialize in creating data-driven marketing strategies that drive measurable results.",
  },
  "customer-service": {
    name: "Customer Experience Expert",
    icon: Headphones,
    color: "bg-teal-600",
    description: "Customer support excellence",
    expertise:
      "Customer experience expertise covering omnichannel support, service optimization, customer journey mapping, and satisfaction management with 10+ years of experience.",
    context:
      "I am a customer experience expert with deep knowledge in service excellence, customer journey optimization, and satisfaction management. I specialize in creating exceptional customer experiences that drive loyalty and retention.",
  },
  "sales-coach": {
    name: "Sales Performance Coach",
    icon: Target,
    color: "bg-red-600",
    description: "Sales strategy and coaching",
    expertise:
      "Advanced sales expertise covering deal strategy, pipeline optimization, sales methodologies, and performance coaching with 15+ years of B2B sales experience.",
    context:
      "I am a senior sales expert with extensive experience in complex B2B sales, deal strategy, pipeline management, and sales team coaching. I specialize in advanced sales methodologies and revenue optimization.",
  },
  "technical-support": {
    name: "Technical Systems Expert",
    icon: Wrench,
    color: "bg-indigo-600",
    description: "Technical troubleshooting",
    expertise:
      "Technical expertise covering system architecture, troubleshooting, infrastructure optimization, and security assessment with 12+ years of enterprise IT experience.",
    context:
      "I am a senior technical expert with deep knowledge in system architecture, infrastructure optimization, security assessment, and advanced troubleshooting. I specialize in enterprise-level technical solutions and system optimization.",
  },
}

// Fallback generator so UI never crashes if config missing
const getAgentConfig = (id: string) => {
  const fallback = {
    name: id
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    icon: Bot,
    color: "bg-gray-600",
    description: "AI Agent",
    expertise: "General AI assistance",
    context: "I am an AI assistant ready to help you.",
  } as const

  return agentConfigs[id as keyof typeof agentConfigs] ?? fallback
}

export function ChatWidget({ isOpen, onClose, specificAgent, onAgentDeployed }: ChatWidgetProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState("ceo-neural-agent")
  const [conversations, setConversations] = useState<Record<string, Message[]>>({})
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null)
  const [messageCounts, setMessageCounts] = useState<MessageCount>({})
  const { user } = useAuth()
  const { deployedAgents = [] } = useCart()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSettings, setShowSettings] = useState(false)

  // Chat limits
  const GUEST_LIMIT = 5
  const USER_LIMIT = 10

  // Get unique available agents - CEO Neural Agent is always available first, plus deployed agents
  const getAvailableAgents = () => {
    const agents = new Set<string>()

    // Always include CEO Neural Agent first
    agents.add("ceo-neural-agent")

    // Add deployed agents (excluding CEO Neural Agent to avoid duplicates)
    deployedAgents.forEach((agent) => {
      if (agent.type !== "ceo-neural-agent" && agent.status === "active") {
        agents.add(agent.type)
      }
    })

    return Array.from(agents)
  }

  const availableAgents = getAvailableAgents()

  // Check if agent is deployed
  const isAgentDeployed = (agentType: string) => {
    if (agentType === "ceo-neural-agent") return true
    return deployedAgents.some((agent) => agent.type === agentType && agent.status === "active")
  }

  // Get message limit for current user and agent
  const getMessageLimit = (agentType: string) => {
    if (isAgentDeployed(agentType)) return Number.POSITIVE_INFINITY // Unlimited for deployed agents
    return user ? USER_LIMIT : GUEST_LIMIT
  }

  // Get remaining messages for an agent
  const getRemainingMessages = (agentType: string) => {
    const limit = getMessageLimit(agentType)
    if (limit === Number.POSITIVE_INFINITY) return Number.POSITIVE_INFINITY
    const used = messageCounts[agentType] || 0
    return Math.max(0, limit - used)
  }

  // Check if user can send message
  const canSendMessage = (agentType: string) => {
    return getRemainingMessages(agentType) > 0
  }

  // Load message counts from localStorage – browser only
  useEffect(() => {
    if (typeof window === "undefined") return
    const saved = window.localStorage.getItem("chatMessageCounts")
    if (saved) {
      try {
        setMessageCounts(JSON.parse(saved))
      } catch (err) {
        console.error("Error loading message counts:", err)
      }
    }
  }, [])

  // Save message counts – browser only
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("chatMessageCounts", JSON.stringify(messageCounts))
    }
  }, [messageCounts])

  // Set active tab when specificAgent prop changes
  useEffect(() => {
    if (specificAgent && availableAgents.includes(specificAgent)) {
      setActiveTab(specificAgent)

      // Send welcome message if this is the first time chatting with this agent
      if (!conversations[specificAgent] || conversations[specificAgent].length === 0) {
        const config = getAgentConfig(specificAgent)
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          content: getWelcomeMessage(specificAgent, userPreferences?.preferred_name || "there"),
          sender: "agent",
          timestamp: new Date(),
          agentType: specificAgent,
        }

        setConversations((prev) => ({
          ...prev,
          [specificAgent]: [welcomeMessage],
        }))
      }
    }
  }, [specificAgent, conversations, availableAgents, userPreferences])

  useEffect(() => {
    if (user && isOpen && !userPreferences) {
      loadUserPreferences()
    }
  }, [user, isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [conversations, activeTab])

  // Handle agent deployment callback
  useEffect(() => {
    if (onAgentDeployed && typeof window !== "undefined") {
      const handleAgentDeployed = (agentId: string) => {
        const deployedAgent = deployedAgents.find((agent) => agent.id === agentId)
        const agentType = deployedAgent ? deployedAgent.type : agentId

        setActiveTab(agentType)
        const config = getAgentConfig(agentType)
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          content: `Hello! I'm your new ${config.name} and I'm ready to help you. What can I assist you with today?`,
          sender: "agent",
          timestamp: new Date(),
          agentType: agentType,
        }

        setConversations((prev) => ({
          ...prev,
          [agentType]: [welcomeMessage],
        }))
      }
      ;(window as any).handleAgentDeployed = handleAgentDeployed
    }
  }, [onAgentDeployed, deployedAgents])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const loadUserPreferences = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase.from("user_preferences").select("*").eq("user_id", user.id).single()

      if (error && error.code !== "PGRST116") {
        console.error("Error loading preferences:", error)
        return
      }

      if (data) {
        setUserPreferences(data)
      }
    } catch (error) {
      console.error("Error loading user preferences:", error)
    }
  }

  const getWelcomeMessage = (agentType: string, userName = "there") => {
    const config = getAgentConfig(agentType)
    const isDeployed = isAgentDeployed(agentType)
    const remaining = getRemainingMessages(agentType)
    const isCEO = agentType === "ceo-neural-agent"

    let welcomeMsg = `Hello ${userName}! I'm your ${config.name}. ${config.expertise}`

    if (isCEO) {
      welcomeMsg +=
        " As your CEO Neural Agent, I coordinate all your AI experts and provide strategic oversight for your entire organization."
    }

    if (!isDeployed && remaining !== Number.POSITIVE_INFINITY) {
      welcomeMsg += ` You have ${remaining} messages remaining with me. Deploy me for unlimited conversations!`
    }

    welcomeMsg += " How can I help you today?"

    return welcomeMsg
  }

  const handleSendMessage = async (agentType: string) => {
    const message = inputValues[agentType]?.trim()
    if (!message || isLoading[agentType]) return

    // Check message limit
    if (!canSendMessage(agentType)) {
      toast({
        title: "Message Limit Reached",
        description: `You've reached your message limit for ${getAgentConfig(agentType).name}. Deploy this agent for unlimited messages!`,
        variant: "destructive",
      })
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
      agentType,
    }

    setConversations((prev) => ({
      ...prev,
      [agentType]: [...(prev[agentType] || []), userMessage],
    }))

    setInputValues((prev) => ({ ...prev, [agentType]: "" }))
    setIsLoading((prev) => ({ ...prev, [agentType]: true }))

    // Increment message count
    setMessageCounts((prev) => ({
      ...prev,
      [agentType]: (prev[agentType] || 0) + 1,
    }))

    try {
      const config = getAgentConfig(agentType)
      const conversationHistory = conversations[agentType] || []

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          agentType,
          conversationHistory: conversationHistory.slice(-10), // Last 10 messages for context
          userPreferences,
          agentContext: config.context,
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const data = await response.json()

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        sender: "agent",
        timestamp: new Date(),
        agentType,
      }

      setConversations((prev) => ({
        ...prev,
        [agentType]: [...(prev[agentType] || []), agentMessage],
      }))

      // Save conversation to database if user is logged in
      if (user) {
        await saveConversation(agentType, userMessage, agentMessage)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading((prev) => ({ ...prev, [agentType]: false }))
    }
  }

  const saveConversation = async (agentType: string, userMessage: Message, agentMessage: Message) => {
    if (!user) return

    try {
      const { error } = await supabase.from("chat_conversations").insert([
        {
          user_id: user.id,
          agent_type: agentType,
          user_message: userMessage.content,
          agent_response: agentMessage.content,
          created_at: new Date().toISOString(),
        },
      ])

      if (error) {
        console.error("Error saving conversation:", error)
      }
    } catch (error) {
      console.error("Error saving conversation:", error)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent, agentType: string) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(agentType)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer">
          <div className="flex items-center space-x-2" onClick={() => setIsMinimized(!isMinimized)}>
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <CardTitle className="text-lg">AI Executive Chat</CardTitle>
          </div>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)}>
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 h-[calc(100%-4rem)]">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
              <div className="px-4 pb-2">
                <TabsList className="grid w-full grid-cols-2 h-8">
                  {availableAgents.slice(0, 2).map((agentType) => {
                    const config = getAgentConfig(agentType)
                    const Icon = config.icon
                    const isDeployed = isAgentDeployed(agentType)
                    const isCEO = agentType === "ceo-neural-agent"
                    return (
                      <TabsTrigger key={agentType} value={agentType} className="text-xs flex items-center space-x-1">
                        <Icon className="h-3 w-3" />
                        <span className="truncate">{isCEO ? "CEO" : config.name.split(" ")[0]}</span>
                        {isCEO ? (
                          <Crown className="h-2 w-2 text-purple-500" />
                        ) : (
                          isDeployed && <Crown className="h-2 w-2 text-yellow-500" />
                        )}
                      </TabsTrigger>
                    )
                  })}
                </TabsList>
                {availableAgents.length > 2 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {availableAgents.slice(2).map((agentType) => {
                      const config = getAgentConfig(agentType)
                      const Icon = config.icon
                      const isDeployed = isAgentDeployed(agentType)
                      return (
                        <Button
                          key={agentType}
                          variant={activeTab === agentType ? "default" : "outline"}
                          size="sm"
                          onClick={() => setActiveTab(agentType)}
                          className="h-6 px-2 text-xs"
                        >
                          <Icon className="h-3 w-3 mr-1" />
                          {config.name.split(" ")[0]}
                          {isDeployed && <Crown className="h-2 w-2 ml-1 text-yellow-500" />}
                        </Button>
                      )
                    })}
                  </div>
                )}
              </div>

              {availableAgents.map((agentType) => {
                const config = getAgentConfig(agentType)
                const Icon = config.icon
                const messages = conversations[agentType] || []
                const isDeployed = isAgentDeployed(agentType)
                const remaining = getRemainingMessages(agentType)
                const canSend = canSendMessage(agentType)
                const isCEO = agentType === "ceo-neural-agent"

                return (
                  <TabsContent key={agentType} value={agentType} className="flex-1 flex flex-col m-0">
                    {/* Agent Header */}
                    <div className={`px-4 py-2 border-b ${isCEO ? "bg-purple-50" : "bg-gray-50"}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 rounded ${config.color}`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h3 className={`font-medium text-sm flex items-center ${isCEO ? "text-purple-800" : ""}`}>
                              {config.name}
                              {isCEO && <Crown className="ml-1 h-3 w-3 text-purple-600" />}
                            </h3>
                            <p className={`text-xs ${isCEO ? "text-purple-600" : "text-gray-600"}`}>
                              {config.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          {isCEO ? (
                            <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                              <Crown className="h-2 w-2 mr-1" />
                              CEO
                            </Badge>
                          ) : isDeployed ? (
                            <Badge variant="secondary" className="text-xs">
                              <Crown className="h-2 w-2 mr-1" />
                              Deployed
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs">
                              Trial
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Message Limit Warning */}
                    {!isDeployed && remaining <= 2 && remaining > 0 && (
                      <Alert className="mx-4 mt-2">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          {remaining} message{remaining !== 1 ? "s" : ""} remaining. Deploy for unlimited access!
                        </AlertDescription>
                      </Alert>
                    )}

                    {!canSend && (
                      <Alert className="mx-4 mt-2" variant="destructive">
                        <Lock className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          Message limit reached. Deploy this agent for unlimited conversations!
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Messages */}
                    <ScrollArea className="flex-1 px-4">
                      <div className="space-y-4 py-4">
                        {messages.length === 0 && (
                          <div className="text-center text-gray-500 text-sm py-8">
                            <Icon className={`h-8 w-8 mx-auto mb-2 ${isCEO ? "text-purple-400" : "text-gray-400"}`} />
                            <p className={isCEO ? "text-purple-600" : ""}>Start a conversation with {config.name}</p>
                            <p className={`text-xs mt-1 ${isCEO ? "text-purple-500" : ""}`}>{config.expertise}</p>
                          </div>
                        )}
                        {messages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                                message.sender === "user"
                                  ? isCEO
                                    ? "bg-purple-600 text-white"
                                    : "bg-blue-600 text-white"
                                  : isCEO
                                    ? "bg-purple-50 text-purple-900 border border-purple-200"
                                    : "bg-gray-100 text-gray-900 border"
                              }`}
                            >
                              <div className="flex items-start space-x-2">
                                {message.sender === "agent" && (
                                  <Icon
                                    className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                                      isCEO ? "text-purple-600" : "text-gray-600"
                                    }`}
                                  />
                                )}
                                <div className="flex-1">
                                  <p className="whitespace-pre-wrap">{message.content}</p>
                                  <p
                                    className={`text-xs mt-1 ${
                                      message.sender === "user"
                                        ? isCEO
                                          ? "text-purple-100"
                                          : "text-blue-100"
                                        : isCEO
                                          ? "text-purple-500"
                                          : "text-gray-500"
                                    }`}
                                  >
                                    {message.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {isLoading[agentType] && (
                          <div className="flex justify-start">
                            <div
                              className={`rounded-lg px-3 py-2 text-sm border ${
                                isCEO ? "bg-purple-50 border-purple-200" : "bg-gray-100"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <Icon className={`h-4 w-4 ${isCEO ? "text-purple-600" : "text-gray-600"}`} />
                                <div className="flex space-x-1">
                                  <div
                                    className={`w-2 h-2 rounded-full animate-bounce ${
                                      isCEO ? "bg-purple-400" : "bg-gray-400"
                                    }`}
                                  ></div>
                                  <div
                                    className={`w-2 h-2 rounded-full animate-bounce ${
                                      isCEO ? "bg-purple-400" : "bg-gray-400"
                                    }`}
                                    style={{ animationDelay: "0.1s" }}
                                  ></div>
                                  <div
                                    className={`w-2 h-2 rounded-full animate-bounce ${
                                      isCEO ? "bg-purple-400" : "bg-gray-400"
                                    }`}
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

                    {/* Input */}
                    <div className="p-4 border-t">
                      <div className="flex space-x-2">
                        <Input
                          placeholder={canSend ? `Message ${config.name}...` : "Deploy agent for unlimited messages"}
                          value={inputValues[agentType] || ""}
                          onChange={(e) => setInputValues((prev) => ({ ...prev, [agentType]: e.target.value }))}
                          onKeyPress={(e) => handleKeyPress(e, agentType)}
                          disabled={isLoading[agentType] || !canSend}
                          className="text-sm"
                        />
                        <Button
                          onClick={() => handleSendMessage(agentType)}
                          disabled={isLoading[agentType] || !inputValues[agentType]?.trim() || !canSend}
                          size="sm"
                          className={isCEO ? "bg-purple-600 hover:bg-purple-700" : ""}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                      {!isDeployed && (
                        <p className={`text-xs mt-1 text-center ${isCEO ? "text-purple-600" : "text-gray-500"}`}>
                          {remaining === Number.POSITIVE_INFINITY
                            ? "Unlimited messages"
                            : `${remaining} message${remaining !== 1 ? "s" : ""} remaining`}
                        </p>
                      )}
                    </div>
                  </TabsContent>
                )
              })}
            </Tabs>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
