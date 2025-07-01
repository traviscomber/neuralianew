"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"
import {
  Send,
  X,
  User,
  Crown,
  Brain,
  Users,
  Target,
  Headphones,
  Wrench,
  Megaphone,
  BarChart3,
  AlertCircle,
  Zap,
} from "lucide-react"

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
    icon: Crown,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Executive-level AI orchestrator",
  },
  "hr-advisory": {
    name: "HR Advisory Expert",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    description: "Human resources specialist",
  },
  "sales-coach": {
    name: "Sales Performance Coach",
    icon: Target,
    color: "text-red-600",
    bgColor: "bg-red-50",
    description: "Sales methodology expert",
  },
  "customer-service": {
    name: "Customer Experience Expert",
    icon: Headphones,
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    description: "Customer service specialist",
  },
  "technical-support": {
    name: "Technical Systems Expert",
    icon: Wrench,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    description: "Technical specialist",
  },
  marketing: {
    name: "Marketing Strategy Expert",
    icon: Megaphone,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    description: "Marketing intelligence",
  },
  analytics: {
    name: "Data Intelligence Expert",
    icon: BarChart3,
    color: "text-green-600",
    bgColor: "bg-green-50",
    description: "Analytics specialist",
  },
  orchestrator: {
    name: "AI Orchestrator",
    icon: Brain,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    description: "Central coordination hub",
  },
}

export function ChatWidget({ isOpen, onClose, specificAgent }: ChatWidgetProps) {
  const { user } = useAuth()
  const { deployedAgents = [] } = useCart()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("orchestrator")
  const [messageCount, setMessageCount] = useState<Record<string, number>>({})
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Message limits
  const MESSAGE_LIMITS = {
    loggedOut: 3,
    loggedIn: 10,
    deployed: Number.POSITIVE_INFINITY,
  }

  useEffect(() => {
    if (specificAgent && deployedAgents.some((agent) => agent.type === specificAgent)) {
      setActiveTab(specificAgent)
    } else if (specificAgent) {
      setActiveTab("orchestrator")
    }
  }, [specificAgent, deployedAgents])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: "welcome",
        content: getWelcomeMessage(activeTab),
        sender: "agent",
        timestamp: new Date(),
        agentType: activeTab,
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, activeTab])

  const getWelcomeMessage = (agentType: string) => {
    const config = agentConfigs[agentType as keyof typeof agentConfigs]
    if (!config) return "Hello! How can I assist you today?"

    switch (agentType) {
      case "ceo-neural-agent":
        return "Welcome! I'm your CEO Neural Agent. I provide executive-level strategic guidance and coordinate all business operations. How can I help optimize your business strategy today?"
      case "hr-advisory":
        return "Hello! I'm your HR Advisory Expert. I specialize in employee relations, policy development, and talent strategy. What HR challenge can I help you with?"
      case "sales-coach":
        return "Hi there! I'm your Sales Performance Coach. I focus on deal strategy, pipeline optimization, and revenue acceleration. What sales challenge are you facing?"
      case "customer-service":
        return "Welcome! I'm your Customer Experience Expert. I help with omnichannel support strategies and customer satisfaction optimization. How can I improve your customer experience?"
      case "technical-support":
        return "Hello! I'm your Technical Systems Expert. I provide system architecture analysis, troubleshooting, and infrastructure optimization. What technical challenge can I solve?"
      case "marketing":
        return "Hi! I'm your Marketing Strategy Expert. I specialize in campaign development, brand positioning, and growth marketing. What marketing goals are you working on?"
      case "analytics":
        return "Welcome! I'm your Data Intelligence Expert. I provide predictive analytics, statistical modeling, and business intelligence. What data insights do you need?"
      default:
        return "Hello! I'm the AI Orchestrator. I coordinate between all your AI experts and provide general assistance. How can I help you today?"
    }
  }

  const getMessageLimit = (agentType: string) => {
    if (!user) return MESSAGE_LIMITS.loggedOut
    if (deployedAgents.some((agent) => agent.type === agentType)) return MESSAGE_LIMITS.deployed
    return MESSAGE_LIMITS.loggedIn
  }

  const getCurrentMessageCount = (agentType: string) => {
    return messageCount[agentType] || 0
  }

  const canSendMessage = (agentType: string) => {
    const limit = getMessageLimit(agentType)
    const count = getCurrentMessageCount(agentType)
    return count < limit
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const limit = getMessageLimit(activeTab)
    const count = getCurrentMessageCount(activeTab)

    if (count >= limit) {
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
      agentType: activeTab,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    // Update message count
    setMessageCount((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] || 0) + 1,
    }))

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAgentResponse(inputValue, activeTab),
        sender: "agent",
        timestamp: new Date(),
        agentType: activeTab,
      }

      setMessages((prev) => [...prev, agentResponse])
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const generateAgentResponse = (userInput: string, agentType: string) => {
    const responses = {
      "ceo-neural-agent": [
        "From a strategic perspective, I recommend focusing on operational efficiency and market positioning. Let me analyze the key factors...",
        "Based on executive best practices, here's my strategic assessment of your situation...",
        "I'll coordinate with our specialist teams to provide you with comprehensive insights on this matter...",
      ],
      "hr-advisory": [
        "From an HR perspective, this requires careful consideration of employee relations and policy compliance...",
        "I recommend implementing a structured approach that aligns with best practices in talent management...",
        "Let me provide you with HR strategies that have proven effective in similar situations...",
      ],
      "sales-coach": [
        "This is a great opportunity to optimize your sales approach. Here's my recommended strategy...",
        "Based on proven sales methodologies, I suggest focusing on these key areas...",
        "Let me share some advanced techniques that can significantly improve your conversion rates...",
      ],
      "customer-service": [
        "Excellent customer experience starts with understanding your customers' journey. Here's what I recommend...",
        "I can help you implement omnichannel strategies that will enhance customer satisfaction...",
        "Based on customer service best practices, here's how you can improve this situation...",
      ],
      "technical-support": [
        "From a technical architecture standpoint, I see several optimization opportunities...",
        "Let me analyze the system requirements and provide you with a robust solution...",
        "Here's my technical assessment and recommended implementation approach...",
      ],
      marketing: [
        "This presents an interesting marketing challenge. Here's my strategic recommendation...",
        "Based on current market trends and consumer behavior, I suggest this approach...",
        "Let me help you develop a comprehensive marketing strategy for this initiative...",
      ],
      analytics: [
        "The data suggests several interesting patterns. Let me break down the key insights...",
        "Based on statistical analysis, here are the most significant trends I'm observing...",
        "I can provide predictive modeling to help you make data-driven decisions on this matter...",
      ],
      orchestrator: [
        "I'll coordinate with the appropriate specialists to give you the most comprehensive answer...",
        "Based on cross-functional analysis, here's what our expert team recommends...",
        "Let me connect you with the right expertise while providing an integrated perspective...",
      ],
    }

    const agentResponses = responses[agentType as keyof typeof responses] || responses.orchestrator
    return agentResponses[Math.floor(Math.random() * agentResponses.length)]
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    // Add welcome message for new tab if no messages exist for this agent
    const hasMessagesForAgent = messages.some((msg) => msg.agentType === value)
    if (!hasMessagesForAgent) {
      const welcomeMessage: Message = {
        id: `welcome-${value}`,
        content: getWelcomeMessage(value),
        sender: "agent",
        timestamp: new Date(),
        agentType: value,
      }
      setMessages((prev) => [...prev, welcomeMessage])
    }
  }

  if (!isOpen) return null

  const availableAgents = ["orchestrator", ...deployedAgents.map((agent) => agent.type)]
  const currentConfig = agentConfigs[activeTab as keyof typeof agentConfigs] || agentConfigs.orchestrator
  const IconComponent = currentConfig.icon
  const currentMessages = messages.filter((msg) => msg.agentType === activeTab)
  const messageLimit = getMessageLimit(activeTab)
  const currentCount = getCurrentMessageCount(activeTab)
  const canSend = canSendMessage(activeTab)

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[600px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
      {/* Header */}
      <div className={`${currentConfig.bgColor} p-4 rounded-t-lg border-b`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <IconComponent className={`h-5 w-5 ${currentConfig.color}`} />
            <div>
              <h3 className="font-semibold text-gray-900">{currentConfig.name}</h3>
              <p className="text-xs text-gray-600">{currentConfig.description}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Message limit indicator */}
        {messageLimit !== Number.POSITIVE_INFINITY && (
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-gray-600">
              Messages: {currentCount}/{messageLimit}
            </span>
            {!user && (
              <Badge variant="outline" className="text-xs">
                Sign in for more
              </Badge>
            )}
            {user && !deployedAgents.some((agent) => agent.type === activeTab) && activeTab !== "orchestrator" && (
              <Badge variant="outline" className="text-xs">
                <Zap className="mr-1 h-3 w-3" />
                Deploy for unlimited
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Tabs */}
      {availableAgents.length > 1 && (
        <Tabs value={activeTab} onValueChange={handleTabChange} className="flex-1 flex flex-col">
          <TabsList className="grid grid-cols-2 m-2">
            <TabsTrigger value="orchestrator" className="text-xs">
              Orchestrator
            </TabsTrigger>
            {deployedAgents.length > 0 && (
              <TabsTrigger value={deployedAgents[0].type} className="text-xs">
                {agentConfigs[deployedAgents[0].type as keyof typeof agentConfigs]?.name.split(" ")[0] || "Agent"}
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value={activeTab} className="flex-1 flex flex-col m-0 p-0">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {currentMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : `${currentConfig.bgColor} text-gray-900 border`
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === "agent" && (
                          <IconComponent className={`h-4 w-4 mt-0.5 ${currentConfig.color}`} />
                        )}
                        {message.sender === "user" && <User className="h-4 w-4 mt-0.5 text-white" />}
                        <div className="flex-1">
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                          >
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className={`${currentConfig.bgColor} rounded-lg p-3 border`}>
                      <div className="flex items-center space-x-2">
                        <IconComponent className={`h-4 w-4 ${currentConfig.color}`} />
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

            {/* Input */}
            <div className="p-4 border-t">
              {!canSend ? (
                <div className="text-center py-2">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>Message limit reached</span>
                  </div>
                  {!user ? (
                    <p className="text-xs text-gray-500">Sign in to continue chatting</p>
                  ) : (
                    <p className="text-xs text-gray-500">Deploy this agent for unlimited messages</p>
                  )}
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={`Message ${currentConfig.name}...`}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()} size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      )}

      {/* Single agent view */}
      {availableAgents.length === 1 && (
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {currentMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : `${currentConfig.bgColor} text-gray-900 border`
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "agent" && (
                        <IconComponent className={`h-4 w-4 mt-0.5 ${currentConfig.color}`} />
                      )}
                      {message.sender === "user" && <User className="h-4 w-4 mt-0.5 text-white" />}
                      <div className="flex-1">
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`${currentConfig.bgColor} rounded-lg p-3 border`}>
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`h-4 w-4 ${currentConfig.color}`} />
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

          {/* Input */}
          <div className="p-4 border-t">
            {!canSend ? (
              <div className="text-center py-2">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>Message limit reached</span>
                </div>
                {!user ? (
                  <p className="text-xs text-gray-500">Sign in to continue chatting</p>
                ) : (
                  <p className="text-xs text-gray-500">Deploy this agent for unlimited messages</p>
                )}
              </div>
            ) : (
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Message ${currentConfig.name}...`}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
