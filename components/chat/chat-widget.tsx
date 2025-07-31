"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { X, Send, Minimize2, Maximize2 } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "agent"
  timestamp: Date
}

interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  name: string
  agent_name?: string
  description?: string
  agent_description?: string
  agent_type?: string
  icon?: string
  status: string
  trial_start?: string
  trial_end?: string
}

interface ChatWidgetProps {
  agent: DeployedAgent | null
  onClose: () => void
}

export function ChatWidget({ agent, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (agent && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        content: `Hello! I'm ${agent.agent_name || agent.name}, your ${
          agent.agent_description || agent.description || "AI assistant"
        }. How can I help you today?`,
        sender: "agent",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [agent, messages.length])

  // Don't render if no agent
  if (!agent) {
    return null
  }

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

    // Simulate AI response (replace with actual API call)
    setTimeout(
      () => {
        const agentResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateAgentResponse(inputValue, agent),
          sender: "agent",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, agentResponse])
        setIsLoading(false)
      },
      1000 + Math.random() * 2000,
    )
  }

  const generateAgentResponse = (userInput: string, agent: DeployedAgent): string => {
    const input = userInput.toLowerCase()
    const agentName = agent.agent_name || agent.name
    const agentType = agent.agent_type || "executive"

    // Context-aware responses based on agent type
    if (agentType.includes("ceo") || agentType.includes("executive")) {
      if (input.includes("strategy") || input.includes("vision")) {
        return `As your ${agentName}, I recommend focusing on three key strategic pillars: market expansion, operational excellence, and innovation leadership. Let's discuss how to align these with your current business objectives.`
      }
      if (input.includes("team") || input.includes("leadership")) {
        return `Leadership is about empowering others to achieve extraordinary results. I suggest implementing a structured leadership development program and establishing clear communication channels across all levels.`
      }
      if (input.includes("growth") || input.includes("revenue")) {
        return `For sustainable growth, we need to analyze your current market position, identify untapped opportunities, and develop a comprehensive expansion strategy. What's your current revenue target?`
      }
    }

    if (agentType.includes("cmo") || agentType.includes("marketing")) {
      if (input.includes("marketing") || input.includes("campaign")) {
        return `Let's create a data-driven marketing strategy. I recommend starting with customer segmentation analysis, then developing targeted campaigns across digital channels. What's your primary target audience?`
      }
      if (input.includes("brand") || input.includes("awareness")) {
        return `Brand building requires consistent messaging and strategic positioning. I suggest conducting a brand audit and developing a comprehensive brand strategy that resonates with your target market.`
      }
    }

    if (agentType.includes("cto") || agentType.includes("technology")) {
      if (input.includes("tech") || input.includes("system")) {
        return `From a technology perspective, I recommend evaluating your current infrastructure, identifying scalability bottlenecks, and implementing modern solutions that support your business growth.`
      }
      if (input.includes("ai") || input.includes("automation")) {
        return `AI and automation can significantly improve efficiency. Let's assess your current processes and identify opportunities for intelligent automation that can reduce costs and improve accuracy.`
      }
    }

    // General responses
    const responses = [
      `That's an excellent question. Based on my experience as ${agentName}, I'd recommend taking a strategic approach to this challenge.`,
      `I understand your concern. Let me share some insights that could help you navigate this situation effectively.`,
      `This is a common challenge I've helped many executives address. Here's my recommended approach...`,
      `Great point! As your ${agentName}, I believe we should consider multiple perspectives on this issue.`,
      `I appreciate you bringing this up. Let's break this down into actionable steps you can implement immediately.`,
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Safe access to agent properties
  const agentIcon = agent?.icon || "🤖"
  const agentName = agent?.agent_name || agent?.name || "AI Agent"
  const agentStatus = agent?.status || "active"
  const isTrialActive = agentStatus === "trial"

  return (
    <Card className="fixed bottom-4 right-4 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-2">
          <span className="text-xl">{agentIcon}</span>
          <div>
            <CardTitle className="text-sm font-medium">{agentName}</CardTitle>
            {isTrialActive && (
              <Badge variant="secondary" className="text-xs mt-1 bg-white/20 text-white">
                Trial Active
              </Badge>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-6 w-6 p-0 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="h-3 w-3" /> : <Minimize2 className="h-3 w-3" />}
          </Button>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0 text-white hover:bg-white/20">
            <X className="h-3 w-3" />
          </Button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          <CardContent className="flex-1 p-0">
            <ScrollArea className="h-full p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900 border"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-3 py-2 text-sm border">
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
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={`Message ${agentName}...`}
                disabled={isLoading}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()} size="sm">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}
