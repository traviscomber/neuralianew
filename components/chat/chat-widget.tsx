"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  MessageCircle,
  X,
  Minimize2,
  Maximize2,
  Send,
  Bot,
  User,
  Settings,
  Brain,
  Users,
  BarChart3,
  Megaphone,
  Headphones,
  Target,
  Wrench,
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

const agentConfigs = {
  "central-orchestrator": {
    name: "Central Orchestrator",
    icon: Brain,
    color: "bg-purple-600",
    description: "Your strategic AI coordinator",
  },
  "hr-advisory": {
    name: "HR Advisory",
    icon: Users,
    color: "bg-blue-600",
    description: "HR policies and employee support",
  },
  analytics: {
    name: "Analytics",
    icon: BarChart3,
    color: "bg-green-600",
    description: "Data insights and reporting",
  },
  marketing: {
    name: "Marketing",
    icon: Megaphone,
    color: "bg-orange-600",
    description: "Marketing strategy and campaigns",
  },
  "customer-service": {
    name: "Customer Service",
    icon: Headphones,
    color: "bg-teal-600",
    description: "Customer support excellence",
  },
  "sales-coach": {
    name: "Sales Coach",
    icon: Target,
    color: "bg-red-600",
    description: "Sales strategy and coaching",
  },
  "technical-support": {
    name: "Technical Support",
    icon: Wrench,
    color: "bg-indigo-600",
    description: "Technical troubleshooting",
  },
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [activeTab, setActiveTab] = useState("central-orchestrator")
  const [conversations, setConversations] = useState<Record<string, Message[]>>({})
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({})
  const [userPreferences, setUserPreferences] = useState<UserPreferences | null>(null)
  const { user } = useAuth()
  const { deployedAgents } = useCart()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [showSettings, setShowSettings] = useState(false)

  // Available agents (deployed + always available ones)
  const availableAgents = [
    "central-orchestrator", // Always available
    ...deployedAgents.filter((agent) => agent.id !== "central-orchestrator").map((agent) => agent.id),
  ]

  useEffect(() => {
    if (user && isOpen && !userPreferences) {
      loadUserPreferences()
    }
  }, [user, isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [conversations, activeTab])

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
      } else {
        // No preferences found, create default preferences using email
        const emailName = user.email?.split("@")[0] || "there"
        const capitalizedName = emailName.charAt(0).toUpperCase() + emailName.slice(1)

        const defaultPreferences = {
          user_id: user.id,
          preferred_name: capitalizedName,
          communication_style: "friendly" as const,
          agent_preferences: {},
        }

        const { error: insertError } = await supabase.from("user_preferences").insert(defaultPreferences)

        if (insertError) {
          console.error("Error creating default preferences:", insertError)
          return
        }

        setUserPreferences(defaultPreferences)

        // Send welcome message from Central Orchestrator
        const welcomeMessage: Message = {
          id: Date.now().toString(),
          content: getWelcomeMessage(capitalizedName, "friendly"),
          sender: "agent",
          timestamp: new Date(),
          agentType: "central-orchestrator",
        }

        setConversations((prev) => ({
          ...prev,
          "central-orchestrator": [welcomeMessage],
        }))

        toast({
          title: "Welcome!",
          description: `Great to meet you, ${capitalizedName}! Your AI agents are ready to help.`,
        })
      }
    } catch (error) {
      console.error("Error loading user preferences:", error)
    }
  }

  const saveUserPreferences = async (name: string, style: "professional" | "friendly" | "casual") => {
    if (!user) return

    try {
      const preferences = {
        user_id: user.id,
        preferred_name: name,
        communication_style: style,
        agent_preferences: {},
      }

      const { error } = await supabase.from("user_preferences").upsert(preferences)

      if (error) throw error

      setUserPreferences(preferences)

      // Send welcome message from Central Orchestrator
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: getWelcomeMessage(name, style),
        sender: "agent",
        timestamp: new Date(),
        agentType: "central-orchestrator",
      }

      setConversations((prev) => ({
        ...prev,
        "central-orchestrator": [welcomeMessage],
      }))

      toast({
        title: "Welcome!",
        description: `Great to meet you, ${name}! Your AI agents are ready to help.`,
      })
    } catch (error) {
      console.error("Error saving preferences:", error)
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      })
    }
  }

  const getWelcomeMessage = (name: string, style: string): string => {
    switch (style) {
      case "professional":
        return `Good day, ${name}. I'm your Central Orchestrator, and I'm here to coordinate your AI workforce and help optimize your business operations. How may I assist you today?`
      case "casual":
        return `Hey ${name}! I'm your Central Orchestrator - think of me as the brain that coordinates all your AI agents. What's on your mind today?`
      default: // friendly
        return `Hello ${name}! I'm your Central Orchestrator and I'm excited to help you get the most out of your AI agents. What would you like to work on today?`
    }
  }

  const sendMessage = async (agentType: string) => {
    const message = inputValues[agentType]?.trim()
    if (!message || isLoading[agentType]) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }

    setConversations((prev) => ({
      ...prev,
      [agentType]: [...(prev[agentType] || []), userMessage],
    }))

    setInputValues((prev) => ({ ...prev, [agentType]: "" }))
    setIsLoading((prev) => ({ ...prev, [agentType]: true }))

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          agentType,
          userPreferences,
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

  const handleKeyPress = (e: React.KeyboardEvent, agentType: string) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage(agentType)
    }
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    )
  }

  return (
    <>
      <Card
        className={`fixed bottom-6 right-6 w-96 shadow-2xl z-50 transition-all duration-300 ${
          isMinimized ? "h-16" : "h-[600px]"
        }`}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <CardTitle className="text-lg">
                {userPreferences ? `Chat with ${userPreferences.preferred_name}` : "AI Agents"}
              </CardTitle>
              {userPreferences && (
                <Badge variant="secondary" className="text-xs">
                  {userPreferences.communication_style}
                </Badge>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Button variant="ghost" size="sm" onClick={() => setShowSettings(!showSettings)} className="h-8 w-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8 p-0">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 h-[calc(100%-80px)]">
            {showSettings ? (
              <div className="p-4 space-y-4">
                <h3 className="font-medium">Chat Settings</h3>
                {userPreferences && (
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Name:</strong> {userPreferences.preferred_name}
                    </p>
                    <p>
                      <strong>Style:</strong> {userPreferences.communication_style}
                    </p>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const emailName = user?.email?.split("@")[0] || "there"
                    const capitalizedName = emailName.charAt(0).toUpperCase() + emailName.slice(1)
                    saveUserPreferences(capitalizedName, userPreferences?.communication_style || "friendly")
                  }}
                  className="w-full"
                >
                  Reset to Email Name
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)} className="w-full">
                  Back to Chat
                </Button>
              </div>
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
                <TabsList className="grid w-full grid-cols-3 mx-4 mt-2">
                  {availableAgents.slice(0, 3).map((agentId) => {
                    const config = agentConfigs[agentId as keyof typeof agentConfigs]
                    const Icon = config.icon
                    return (
                      <TabsTrigger key={agentId} value={agentId} className="text-xs">
                        <Icon className="h-3 w-3 mr-1" />
                        {config.name.split(" ")[0]}
                      </TabsTrigger>
                    )
                  })}
                </TabsList>

                {availableAgents.map((agentId) => {
                  const config = agentConfigs[agentId as keyof typeof agentConfigs]
                  const Icon = config.icon
                  const messages = conversations[agentId] || []

                  return (
                    <TabsContent key={agentId} value={agentId} className="flex-1 flex flex-col m-0">
                      <div className="px-4 py-2 bg-gray-50 border-b">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1 rounded ${config.color}`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{config.name}</h3>
                            <p className="text-xs text-gray-500">{config.description}</p>
                          </div>
                        </div>
                      </div>

                      <ScrollArea className="flex-1 px-4">
                        <div className="space-y-4 py-4">
                          {messages.map((message) => (
                            <div
                              key={message.id}
                              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[80%] p-3 rounded-lg ${
                                  message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                                }`}
                              >
                                <div className="flex items-start space-x-2">
                                  {message.sender === "agent" && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                                  {message.sender === "user" && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                                  <div className="text-sm">{message.content}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                          {isLoading[agentId] && (
                            <div className="flex justify-start">
                              <div className="bg-gray-100 p-3 rounded-lg">
                                <div className="flex items-center space-x-2">
                                  <Bot className="h-4 w-4" />
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

                      <div className="p-4 border-t">
                        <div className="flex space-x-2">
                          <Input
                            placeholder={`Message ${config.name}...`}
                            value={inputValues[agentId] || ""}
                            onChange={(e) => setInputValues((prev) => ({ ...prev, [agentId]: e.target.value }))}
                            onKeyPress={(e) => handleKeyPress(e, agentId)}
                            disabled={isLoading[agentId]}
                            className="flex-1"
                          />
                          <Button
                            onClick={() => sendMessage(agentId)}
                            disabled={!inputValues[agentId]?.trim() || isLoading[agentId]}
                            size="sm"
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                  )
                })}
              </Tabs>
            )}
          </CardContent>
        )}
      </Card>
    </>
  )
}
