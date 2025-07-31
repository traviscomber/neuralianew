"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Send, MessageCircle, Network, Lightbulb } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "orchestrator"
  timestamp: Date
  type?: "greeting" | "response" | "coordination"
}

interface OrchestratorChatProps {
  isOpen: boolean
  onClose: () => void
  maxQuestions?: number
}

const getDirectorResponse = (question: string): string => {
  const lowerQuestion = question.toLowerCase()

  // Coordination and orchestration responses
  if (lowerQuestion.includes("coordinate") || lowerQuestion.includes("orchestrat")) {
    return `🧠 **NEURAL DIRECTOR READY FOR COORDINATION**

I'll coordinate our executive team to address this comprehensively:

**🎯 EXECUTIVE DELEGATION:**
• **CEO**: Strategic framework and leadership oversight
• **CMO**: Customer impact and market positioning  
• **CTO**: Technical architecture and implementation

**📋 COORDINATION PLAN:**
1. **Strategic Alignment** - CEO establishes vision and priorities
2. **Market Integration** - CMO ensures customer-centric approach
3. **Technical Execution** - CTO provides scalable solutions
4. **Unified Delivery** - I synthesize all perspectives for optimal results

**⚡ NEXT STEPS:**
Would you like me to dive deeper into any specific executive's perspective, or shall I provide the complete coordinated strategy across all three domains?

*The power of Neural Director lies in seamless executive orchestration.*`
  }

  // Digital transformation responses
  if (lowerQuestion.includes("digital") && lowerQuestion.includes("transformation")) {
    return `🚀 **COORDINATED DIGITAL TRANSFORMATION STRATEGY**

**NEURAL DIRECTOR ORCHESTRATION:**

**👑 CEO STRATEGIC FRAMEWORK:**
• Change management and organizational readiness
• Investment prioritization and ROI planning
• Stakeholder alignment and communication strategy
• Risk assessment and mitigation planning

**📈 CMO CUSTOMER EXPERIENCE:**
• Omnichannel customer journey mapping
• Digital touchpoint optimization
• Brand positioning in digital landscape
• Customer adoption and engagement strategies

**⚡ CTO TECHNICAL ARCHITECTURE:**
• Legacy system modernization roadmap
• Cloud infrastructure and scalability planning
• Data integration and analytics platform
• Cybersecurity and compliance framework

**🎯 UNIFIED EXECUTION PLAN:**
1. **Phase 1**: Foundation (CEO leads organizational prep, CTO establishes infrastructure)
2. **Phase 2**: Integration (CMO launches customer experience, CTO deploys systems)
3. **Phase 3**: Optimization (All executives collaborate on performance tuning)

**📊 SUCCESS METRICS:**
• 40% faster implementation through coordination
• 95% cross-functional alignment
• $2.3M cost savings through unified approach

Ready to dive deeper into any specific phase or executive perspective?`
  }

  // Market expansion responses
  if (lowerQuestion.includes("market") && lowerQuestion.includes("expansion")) {
    return `🌍 **COORDINATED MARKET EXPANSION STRATEGY**

**NEURAL DIRECTOR ORCHESTRATION:**

**👑 CEO STRATEGIC LEADERSHIP:**
• Market opportunity analysis and prioritization
• Competitive positioning and differentiation
• Partnership and acquisition strategies
• Resource allocation and investment planning

**📈 CMO MARKET PENETRATION:**
• Local market research and customer insights
• Brand localization and messaging strategy
• Channel partner identification and development
• Marketing campaign planning and execution

**⚡ CTO TECHNICAL ENABLEMENT:**
• Infrastructure scaling for new markets
• Localization and compliance requirements
• Integration with local systems and partners
• Performance monitoring and optimization

**🎯 COORDINATED EXECUTION:**
1. **Market Assessment** - CEO analyzes opportunities, CMO researches customers, CTO evaluates technical requirements
2. **Entry Strategy** - CEO finalizes approach, CMO develops go-to-market, CTO prepares infrastructure
3. **Launch Coordination** - All executives execute synchronized market entry
4. **Optimization** - Continuous improvement based on unified feedback

**📊 PROJECTED OUTCOMES:**
• 60% faster market entry through coordination
• 85% higher success rate with unified approach
• $12M revenue potential in first year

Which market or executive perspective would you like me to elaborate on?`
  }

  // Default coordinated response
  return `🧠 **NEURAL DIRECTOR COORDINATION READY**

I'm analyzing your request and preparing a coordinated response from our executive team:

**🎯 EXECUTIVE COORDINATION APPROACH:**
• **CEO**: Strategic framework and leadership perspective
• **CMO**: Customer and market impact analysis  
• **CTO**: Technical implementation and innovation angle

**⚡ COORDINATION CAPABILITIES:**
• Multi-perspective strategic analysis
• Cross-functional solution development
• Unified execution planning
• Real-time executive collaboration

**📋 SUGGESTED COORDINATION AREAS:**
• Digital transformation initiatives
• Market expansion strategies
• Crisis management and recovery
• Product launch coordination
• Competitive analysis and response
• Customer retention optimization

Would you like me to coordinate a specific business challenge across all executives, or dive deeper into any particular area?

*Ask me to "coordinate" any business initiative for comprehensive executive collaboration.*`
}

export function OrchestratorChat({ isOpen, onClose, maxQuestions = 10 }: OrchestratorChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [questionCount, setQuestionCount] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      // Initialize with greeting message
      setMessages([
        {
          id: "greeting",
          content:
            "I am the Neural Director, your central command system that coordinates all AI executives to deliver comprehensive business solutions.",
          sender: "orchestrator",
          timestamp: new Date(),
          type: "greeting",
        },
      ])
      setQuestionCount(0)
      setInputValue("")
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (!inputValue.trim() || questionCount >= maxQuestions) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setQuestionCount((prev) => prev + 1)

    // Generate Neural Director response
    const agentResponse = getDirectorResponse(inputValue)

    setTimeout(() => {
      const orchestratorMessage: Message = {
        id: `orchestrator-${Date.now()}`,
        content: agentResponse,
        sender: "orchestrator",
        timestamp: new Date(),
        type: "coordination",
      }
      setMessages((prev) => [...prev, orchestratorMessage])
    }, 1000)

    setInputValue("")
  }

  const handleSampleQuestion = (question: string) => {
    if (questionCount >= maxQuestions) return
    setInputValue(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const sampleQuestions = [
    "Coordinate a complete digital transformation strategy across all executives",
    "How should CEO, CMO, and CTO work together on our market expansion?",
    "Delegate our product launch across the executive team with clear responsibilities",
    "Synthesize a unified crisis management plan using all three executives",
    "Coordinate a comprehensive competitive analysis across all business functions",
    "How can all executives collaborate on our customer retention strategy?",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Network className="h-8 w-8" />
              <div>
                <DialogTitle className="text-2xl font-bold">Neural Director</DialogTitle>
                <p className="text-indigo-100">Central Command & Coordination</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                {questionCount}/{maxQuestions} questions
              </Badge>
              {questionCount >= maxQuestions && (
                <Badge variant="destructive" className="bg-red-500/20 text-white border-red-300/30">
                  Limit reached
                </Badge>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="flex flex-col h-[600px]">
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gradient-to-r from-indigo-50 to-purple-50 text-gray-900 border border-indigo-200"
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-2 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="p-6 border-t bg-gray-50">
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Try these coordination examples:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sampleQuestions.slice(0, 4).map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start text-xs h-auto py-3 px-4 bg-white hover:bg-indigo-50 hover:border-indigo-300"
                      onClick={() => handleSampleQuestion(question)}
                      disabled={questionCount >= maxQuestions}
                    >
                      <MessageCircle className="h-3 w-3 mr-2 text-indigo-600 flex-shrink-0" />
                      <span className="truncate">"{question}"</span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  questionCount >= maxQuestions ? "Question limit reached" : "Ask me to coordinate across executives..."
                }
                disabled={questionCount >= maxQuestions}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || questionCount >= maxQuestions}
                className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>

            {questionCount >= maxQuestions && (
              <p className="text-xs text-gray-500 mt-3 text-center">
                You've reached the maximum number of questions for this demo. Sign up for unlimited access!
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
