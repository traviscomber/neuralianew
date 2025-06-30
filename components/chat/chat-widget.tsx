"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  MessageSquare,
  Send,
  User,
  X,
  Brain,
  Users,
  Target,
  Headphones,
  Wrench,
  Megaphone,
  BarChart3,
  Minimize2,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useCart } from "@/hooks/use-cart"

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
  "central-orchestrator": {
    name: "Central Orchestrator",
    icon: Brain,
    color: "bg-purple-600",
    description: "Strategic AI coordinator",
  },
  "ceo-neural-agent": {
    name: "CEO Neural Agent",
    icon: Brain,
    color: "bg-purple-600",
    description: "Executive-level AI orchestrator",
  },
  "hr-advisory": {
    name: "HR Advisory Expert",
    icon: Users,
    color: "bg-blue-600",
    description: "Human resources expertise",
  },
  "sales-coach": {
    name: "Sales Performance Coach",
    icon: Target,
    color: "bg-red-600",
    description: "Sales methodology expert",
  },
  "customer-service": {
    name: "Customer Experience Expert",
    icon: Headphones,
    color: "bg-teal-600",
    description: "Customer service specialist",
  },
  "technical-support": {
    name: "Technical Systems Expert",
    icon: Wrench,
    color: "bg-indigo-600",
    description: "Technical specialist",
  },
  marketing: {
    name: "Marketing Strategy Expert",
    icon: Megaphone,
    color: "bg-orange-600",
    description: "Marketing intelligence",
  },
  analytics: {
    name: "Data Intelligence Expert",
    icon: BarChart3,
    color: "bg-green-600",
    description: "Analytics specialist",
  },
}

export function ChatWidget({ isOpen, onClose, specificAgent }: ChatWidgetProps) {
  const { user } = useAuth()
  const { deployedAgents } = useCart()
  const [messages, setMessages] = useState<Record<string, Message[]>>({})
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("central-orchestrator")
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Set active tab when specific agent is provided
  useEffect(() => {
    if (specificAgent && agentConfigs[specificAgent as keyof typeof agentConfigs]) {
      setActiveTab(specificAgent)
    }
  }, [specificAgent])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, activeTab])

  const getAgentResponse = async (userMessage: string, agentType: string): Promise<string> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const responses = {
      "central-orchestrator": [
        "I'm analyzing your request and coordinating with the appropriate specialists. How can I help optimize your business operations today?",
        "As your strategic coordinator, I can help you integrate multiple AI agents for maximum efficiency. What's your primary business challenge?",
        "I'm here to orchestrate your AI ecosystem. Let me connect you with the right specialists or provide strategic guidance.",
      ],
      "ceo-neural-agent": [
        "From an executive perspective, I recommend focusing on strategic initiatives that drive long-term value. What are your key business objectives?",
        "As your CEO-level AI, I can help with strategic planning, risk assessment, and cross-functional coordination. What decisions are you facing?",
        "Let's discuss your business strategy. I can provide C-suite level insights and coordinate with other departments.",
      ],
      "hr-advisory": [
        "I can help with employee relations, policy development, and talent management. What HR challenge are you facing?",
        "From an HR perspective, I recommend focusing on employee engagement and development. How can I assist with your workforce needs?",
        "I'm here to help with all HR matters - from recruitment to performance management. What would you like to discuss?",
      ],
      "sales-coach": [
        "Let's optimize your sales process! I can help with deal strategy, pipeline management, and revenue forecasting. What's your current challenge?",
        "I'm here to boost your sales performance. Whether it's lead qualification or closing techniques, I can provide expert guidance.",
        "Sales success requires the right methodology. I can help you implement proven strategies to accelerate your revenue growth.",
      ],
      "customer-service": [
        "Excellent customer service is key to retention. I can help optimize your support processes and improve customer satisfaction. What's your main concern?",
        "I'm here to help enhance your customer experience. From support strategies to service quality, how can I assist?",
        "Customer satisfaction drives business growth. Let's discuss how to improve your service delivery and customer relationships.",
      ],
      "technical-support": [
        "I can help with system architecture, troubleshooting, and infrastructure optimization. What technical challenge are you facing?",
        "From a technical perspective, I recommend focusing on scalability and security. What systems need attention?",
        "I'm here to solve your technical challenges. Whether it's infrastructure or security, I can provide expert guidance.",
      ],
      marketing: [
        "Great marketing drives growth! I can help with campaign strategy, brand positioning, and multi-channel optimization. What's your marketing goal?",
        "I'm here to accelerate your marketing efforts. From content strategy to growth marketing, how can I help?",
        "Marketing success requires strategic thinking. Let's discuss how to optimize your campaigns and reach your target audience.",
      ],
      analytics: [
        "Data-driven decisions lead to better outcomes. I can help with predictive analytics, statistical modeling, and business intelligence. What insights do you need?",
        "I'm here to help you understand your data. From visualization to predictive modeling, what analytics challenge are you facing?",
        "Analytics unlock business value. Let's discuss how to leverage your data for strategic advantage and operational efficiency.",
      ],
    }

    const agentResponses = responses[agentType as keyof typeof responses] || responses["central-orchestrator"]
    return agentResponses[Math.floor(Math.random() * agentResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => ({
      ...prev,
      [activeTab]: [...(prev[activeTab] || []), userMessage],
    }))

    setInputValue("")
    setIsLoading(true)

    try {
      const agentResponse = await getAgentResponse(inputValue, activeTab)
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: agentResponse,
        sender: "agent",
        timestamp: new Date(),
        agentType: activeTab,
      }

      setMessages((prev) => ({
        ...prev,
        [activeTab]: [...(prev[activeTab] || []), agentMessage],
      }))
    } catch (error) {
      console.error("Error getting agent response:", error)
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

  const getAvailableAgents = () => {
    const availableAgents = ["central-orchestrator"]

    if (user) {
      deployedAgents.forEach((agent) => {
        if (agent.type !== "central-orchestrator" && agentConfigs[agent.type as keyof typeof agentConfigs]) {
          availableAgents.push(agent.type)
        }
      })
    }

    return availableAgents
  }

  const availableAgents = getAvailableAgents()
  const currentMessages = messages[activeTab] || []
  const currentAgent = agentConfigs[activeTab as keyof typeof agentConfigs] || agentConfigs["central-orchestrator"]
  const IconComponent = currentAgent.icon

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setIsMinimized(false)} className="h-12 w-12 rounded-full shadow-lg" size="sm">
          <MessageSquare className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] h-[600px] flex flex-col p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              AI Chat Assistant
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(true)}>
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 flex flex-col overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
            <div className="px-4 py-2 border-b">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                {availableAgents.slice(0, 4).map((agentType) => {
                  const config = agentConfigs[agentType as keyof typeof agentConfigs]
                  const AgentIcon = config.icon
                  return (
                    <TabsTrigger key={agentType} value={agentType} className="text-xs">
                      <AgentIcon className="h-3 w-3 mr-1" />
                      {config.name.split(" ")[0]}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            {availableAgents.map((agentType) => (
              <TabsContent key={agentType} value={agentType} className="flex-1 flex flex-col m-0">
                <div className="px-4 py-2 border-b bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${currentAgent.color}`}>
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{currentAgent.name}</h3>
                      <p className="text-xs text-gray-500">{currentAgent.description}</p>
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {agentType === "central-orchestrator" ? "Always Available" : "Deployed"}
                    </Badge>
                  </div>
                </div>

                <ScrollArea className="flex-1 px-4">
                  <div className="space-y-4 py-4">
                    {currentMessages.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        <IconComponent className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                        <p className="text-sm">Start a conversation with {currentAgent.name}</p>
                      </div>
                    )}

                    {currentMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.sender === "agent" && (
                          <div className={`p-2 rounded-lg ${currentAgent.color} flex-shrink-0`}>
                            <IconComponent className="h-4 w-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] p-3 rounded-lg ${
                            message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                        </div>
                        {message.sender === "user" && (
                          <div className="p-2 rounded-lg bg-blue-600 flex-shrink-0">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className={`p-2 rounded-lg ${currentAgent.color} flex-shrink-0`}>
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-lg">
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
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={`Message ${currentAgent.name}...`}
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  {!user && (
                    <p className="text-xs text-gray-500 mt-2">
                      Sign in to access all deployed agents and save conversation history.
                    </p>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}
