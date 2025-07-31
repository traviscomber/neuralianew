"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, Building, Target, AlertCircle, Sparkles } from "lucide-react"
import { supabase } from "@/lib/supabase-browser"
import { useAuth } from "@/hooks/use-auth"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

interface CompanyData {
  name?: string
  industry?: string
  size?: string
  goals?: string[]
  challenges?: string[]
  description?: string
}

interface OrchestratorChatProps {
  isOpen: boolean
  onClose: () => void
}

export function OrchestratorChat({ isOpen, onClose }: OrchestratorChatProps) {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [companyData, setCompanyData] = useState<CompanyData>({})
  const [conversationId, setConversationId] = useState<string | null>(null)

  // Load conversation on open
  useEffect(() => {
    if (isOpen && user) {
      loadConversation()
    }
  }, [isOpen, user])

  const loadConversation = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from("orchestrator_conversations")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single()

      if (error && error.code !== "PGRST116") {
        console.error("Error loading conversation:", error)
        return
      }

      if (data) {
        setConversationId(data.id)
        setMessages(data.messages || [])
        setCompanyData(data.company_data || {})
      } else {
        // Create initial conversation with welcome message
        const welcomeMessage: Message = {
          id: "1",
          content:
            "Hello! I'm your Neural Director. I'll help coordinate all your AI agents and learn about your business. To get started, could you tell me about your company? What's your business name and what industry are you in?",
          sender: "assistant",
          timestamp: new Date(),
        }
        setMessages([welcomeMessage])
      }
    } catch (error) {
      console.error("Error loading conversation:", error)
    }
  }

  const extractCompanyData = (message: string): Partial<CompanyData> => {
    const extracted: Partial<CompanyData> = {}
    const lowerMessage = message.toLowerCase()

    // Extract company name patterns
    const namePatterns = [
      /(?:company|business|startup|firm|organization|corp|inc|llc|ltd)\s+(?:is|called|named)\s+([^.,!?]+)/i,
      /(?:we're|we are|i'm|i am)\s+([^.,!?]+?)(?:\s+(?:company|business|startup|firm|corp|inc|llc|ltd))/i,
      /(?:my|our)\s+(?:company|business|startup|firm)\s+(?:is|called|named)\s+([^.,!?]+)/i,
    ]

    for (const pattern of namePatterns) {
      const match = message.match(pattern)
      if (match && match[1]) {
        extracted.name = match[1].trim()
        break
      }
    }

    // Extract industry
    const industries = [
      "technology",
      "tech",
      "software",
      "saas",
      "fintech",
      "healthcare",
      "education",
      "e-commerce",
      "retail",
      "manufacturing",
      "consulting",
      "marketing",
      "real estate",
      "finance",
      "insurance",
      "logistics",
      "transportation",
      "food",
      "restaurant",
      "hospitality",
      "construction",
      "energy",
    ]

    for (const industry of industries) {
      if (lowerMessage.includes(industry)) {
        extracted.industry = industry
        break
      }
    }

    // Extract company size
    const sizePatterns = [
      /(\d+)\s+(?:employees|people|staff|team members)/i,
      /(?:team|company|startup|business)\s+of\s+(\d+)/i,
      /(small|medium|large|startup|enterprise)\s+(?:company|business|team)/i,
    ]

    for (const pattern of sizePatterns) {
      const match = message.match(pattern)
      if (match && match[1]) {
        if (isNaN(Number(match[1]))) {
          extracted.size = match[1].toLowerCase()
        } else {
          const num = Number.parseInt(match[1])
          if (num < 10) extracted.size = "startup"
          else if (num < 50) extracted.size = "small"
          else if (num < 200) extracted.size = "medium"
          else extracted.size = "large"
        }
        break
      }
    }

    // Extract goals
    const goalKeywords = ["goal", "objective", "aim", "target", "want to", "trying to", "hoping to", "plan to"]
    const goals: string[] = []

    for (const keyword of goalKeywords) {
      if (lowerMessage.includes(keyword)) {
        const sentences = message.split(/[.!?]/)
        for (const sentence of sentences) {
          if (sentence.toLowerCase().includes(keyword)) {
            goals.push(sentence.trim())
          }
        }
      }
    }

    if (goals.length > 0) {
      extracted.goals = goals
    }

    // Extract challenges
    const challengeKeywords = ["challenge", "problem", "issue", "struggle", "difficulty", "pain point"]
    const challenges: string[] = []

    for (const keyword of challengeKeywords) {
      if (lowerMessage.includes(keyword)) {
        const sentences = message.split(/[.!?]/)
        for (const sentence of sentences) {
          if (sentence.toLowerCase().includes(keyword)) {
            challenges.push(sentence.trim())
          }
        }
      }
    }

    if (challenges.length > 0) {
      extracted.challenges = challenges
    }

    return extracted
  }

  const generateResponse = (userMessage: string, currentCompanyData: CompanyData): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Check what data we're missing
    const missingData = []
    if (!currentCompanyData.name) missingData.push("company name")
    if (!currentCompanyData.industry) missingData.push("industry")
    if (!currentCompanyData.size) missingData.push("company size")
    if (!currentCompanyData.goals || currentCompanyData.goals.length === 0) missingData.push("business goals")
    if (!currentCompanyData.challenges || currentCompanyData.challenges.length === 0)
      missingData.push("main challenges")

    // Provide contextual responses
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Great to meet you. I'm here to learn about your business and help coordinate your AI agents effectively. What can you tell me about your company?"
    }

    if (missingData.length === 0) {
      return `Perfect! I now have a comprehensive understanding of ${currentCompanyData.name}. As a ${currentCompanyData.size} ${currentCompanyData.industry} company, I can help coordinate your AI agents to focus on your goals and address your challenges. 

I'll ensure all your deployed agents work together effectively to support your business objectives. Is there anything specific you'd like to discuss about your AI strategy?`
    }

    // Ask for missing information
    if (missingData.length > 0) {
      const responses = [
        `Thanks for that information! To better coordinate your AI agents, I'd also like to know about your ${missingData[0]}. Could you share that with me?`,
        `Great! I'm building a profile of your business. Could you also tell me about your ${missingData[0]}?`,
        `Excellent! To complete your business profile, I'd love to learn about your ${missingData[0]}. What can you share?`,
      ]
      return responses[Math.floor(Math.random() * responses.length)]
    }

    return "Thank you for sharing that information. I'm continuously learning about your business to better coordinate your AI agents. What else would you like to discuss?"
  }

  const handleSend = async () => {
    if (!inputValue.trim() || !user) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Extract company data from user message
      const extractedData = extractCompanyData(userMessage.content)
      const updatedCompanyData = { ...companyData, ...extractedData }
      setCompanyData(updatedCompanyData)

      // Generate AI response
      const aiResponse = generateResponse(userMessage.content, updatedCompanyData)

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "assistant",
        timestamp: new Date(),
      }

      const updatedMessages = [...messages, userMessage, assistantMessage]
      setMessages(updatedMessages)

      // Save to Supabase
      if (conversationId) {
        // Update existing conversation
        await supabase
          .from("orchestrator_conversations")
          .update({
            messages: updatedMessages,
            company_data: updatedCompanyData,
          })
          .eq("id", conversationId)
      } else {
        // Create new conversation
        const { data, error } = await supabase
          .from("orchestrator_conversations")
          .insert({
            user_id: user.id,
            messages: updatedMessages,
            company_data: updatedCompanyData,
          })
          .select()
          .single()

        if (data) {
          setConversationId(data.id)
        }

        if (error) {
          console.error("Error saving conversation:", error)
        }
      }
    } catch (error) {
      console.error("Send error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="flex items-center gap-2 text-purple-600">
            <Bot className="h-6 w-6" />
            Neural Director
          </DialogTitle>
          <DialogDescription className="sr-only">
            Chat with the Neural Director to set up your business profile and coordinate AI agents
          </DialogDescription>
        </DialogHeader>

        <div className="flex h-full">
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex gap-3 max-w-[80%] ${
                        message.sender === "user" ? "flex-row-reverse" : "flex-row"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === "user" ? "bg-blue-500 text-white" : "bg-purple-500 text-white"
                        }`}
                      >
                        {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div
                        className={`rounded-lg p-3 ${
                          message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-500"></div>
                        <span className="text-sm text-gray-600">Thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-6 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tell me about your company..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-purple-500 hover:bg-purple-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Company Profile Sidebar */}
          <div className="w-80 border-l bg-gray-50 p-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-sm">
                  <Building className="h-4 w-4" />
                  Company Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {companyData.name && (
                  <div>
                    <label className="text-xs font-medium text-gray-500">Company Name</label>
                    <p className="text-sm font-medium">{companyData.name}</p>
                  </div>
                )}

                {companyData.industry && (
                  <div>
                    <label className="text-xs font-medium text-gray-500">Industry</label>
                    <Badge variant="secondary" className="mt-1">
                      {companyData.industry}
                    </Badge>
                  </div>
                )}

                {companyData.size && (
                  <div>
                    <label className="text-xs font-medium text-gray-500">Size</label>
                    <p className="text-sm">{companyData.size}</p>
                  </div>
                )}

                {companyData.goals && companyData.goals.length > 0 && (
                  <div>
                    <label className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      Goals
                    </label>
                    <div className="space-y-1 mt-1">
                      {companyData.goals.map((goal, index) => (
                        <p key={index} className="text-xs bg-green-50 text-green-700 p-2 rounded">
                          {goal}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {companyData.challenges && companyData.challenges.length > 0 && (
                  <div>
                    <label className="text-xs font-medium text-gray-500 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      Challenges
                    </label>
                    <div className="space-y-1 mt-1">
                      {companyData.challenges.map((challenge, index) => (
                        <p key={index} className="text-xs bg-red-50 text-red-700 p-2 rounded">
                          {challenge}
                        </p>
                      ))}
                    </div>
                  </div>
                )}

                {Object.keys(companyData).length === 0 && (
                  <div className="text-center py-8">
                    <Sparkles className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">
                      Share your company details in the chat to build your profile
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
