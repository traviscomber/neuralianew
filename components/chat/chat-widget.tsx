"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Brain, Send, User, Cpu, Zap, Crown, TrendingUp, Lock, Sparkles, MessageCircle } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

interface ChatWidgetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  isOpen?: boolean
  onClose?: () => void
  agent?: {
    id: string
    name: string
    icon: string
    description: string
  }
  maxQuestions?: number
  onAuthRequired?: () => void
}

interface Message {
  id: string
  content: string
  sender: "user" | "neural"
  timestamp: Date
  processingTime?: number
}

export function ChatWidget({
  open,
  onOpenChange,
  isOpen,
  onClose,
  agent,
  maxQuestions = Number.POSITIVE_INFINITY,
  onAuthRequired,
}: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [questionCount, setQuestionCount] = useState(0)
  const { user } = useAuth()

  const isDialogOpen = open ?? isOpen ?? false
  const handleOpenChange = onOpenChange ?? ((open: boolean) => !open && onClose?.())

  // Reset messages when agent changes
  useEffect(() => {
    if (agent && isDialogOpen) {
      const initialMessage: Message = {
        id: `welcome-${agent.id}`,
        content: `Hello! I'm the ${agent.name} AI. I'm here to demonstrate my capabilities. Ask me anything about ${agent.name.toLowerCase()} strategy, and I'll provide detailed insights based on my neural network training.${
          maxQuestions < Number.POSITIVE_INFINITY && !user
            ? ` You have ${maxQuestions} free questions to explore my capabilities.`
            : ""
        }`,
        sender: "neural",
        timestamp: new Date(),
        processingTime: 0.023,
      }
      setMessages([initialMessage])
      setQuestionCount(0)
    } else if (!agent && isDialogOpen) {
      // Default general assistant message
      const defaultMessage: Message = {
        id: "1",
        content:
          "Neural network initialized. I am your advanced AI executive assistant powered by 175B parameters and quantum-inspired algorithms. How may I assist you with strategic decision-making today?",
        sender: "neural",
        timestamp: new Date(),
        processingTime: 0.023,
      }
      setMessages([defaultMessage])
      setQuestionCount(0)
    }
  }, [agent, isDialogOpen, maxQuestions, user]) // Updated dependency list

  const getAgentIcon = () => {
    if (!agent) return Brain
    switch (agent.id) {
      case "ceo-neural-orchestrator":
        return Crown
      case "cmo-growth-engine":
        return TrendingUp
      case "cto-innovation-architect":
        return Zap
      default:
        return Brain
    }
  }

  const getAgentColor = () => {
    if (!agent) return "from-purple-600 to-pink-600"
    switch (agent.id) {
      case "ceo-neural-orchestrator":
        return "from-purple-600 to-indigo-600"
      case "cmo-growth-engine":
        return "from-green-600 to-emerald-600"
      case "cto-innovation-architect":
        return "from-blue-600 to-cyan-600"
      default:
        return "from-purple-600 to-pink-600"
    }
  }

  const agentResponses = {
    "ceo-neural-orchestrator": [
      "Based on my analysis of Fortune 500 strategic patterns, I recommend implementing a three-phase market expansion strategy. First, conduct comprehensive competitive intelligence using my integrated market analysis tools. Second, establish strategic partnerships in your target markets leveraging my stakeholder communication frameworks. Third, deploy data-driven resource allocation using my executive decision trees. This approach has shown 340% ROI improvement in similar deployments.",
      "My neural network has processed 50M+ executive decisions and identifies a critical opportunity in your operational efficiency. I suggest implementing my crisis management protocols to proactively address potential market disruptions. Additionally, my board presentation generation tools can help you communicate strategic initiatives more effectively to stakeholders. The quantum-inspired algorithms I use can predict market shifts with 97% accuracy.",
      "Strategic leadership requires balancing multiple variables simultaneously. My 175B parameter network excels at synthesizing complex business scenarios into actionable insights. I recommend leveraging my vision setting frameworks to align your organization's objectives with market opportunities. My real-time market data integration ensures your strategic decisions are based on the most current intelligence available.",
    ],
    "cmo-growth-engine": [
      "My consumer psychology models indicate significant optimization potential in your customer acquisition funnel. I recommend implementing advanced segmentation strategies using my multi-channel attribution system. Based on analysis of 15M+ marketing campaigns, I can increase your conversion rates by 40% through personalized customer experiences and predictive lifetime value modeling. My A/B testing frameworks will continuously optimize performance.",
      "Growth hacking requires deep understanding of consumer behavior patterns. My neural network has analyzed successful campaigns across 200+ industries, identifying key psychological triggers that drive engagement. I suggest implementing my content strategy planning tools combined with influencer matching algorithms to maximize reach and ROI. The creative brief generation system I use can produce campaign concepts in under 3 seconds.",
      "Marketing attribution is complex, but my advanced algorithms can track customer journeys across all touchpoints. I recommend deploying my ROI analysis tools to optimize marketing spend efficiency. My brand positioning frameworks, trained on successful brand strategies, can help differentiate your offering in competitive markets. The conversion optimization system I use has improved performance metrics by an average of 35%.",
    ],
    "cto-innovation-architect": [
      "My technical architecture analysis reveals several optimization opportunities in your current infrastructure. I recommend implementing cloud migration strategies using my proven frameworks, which have successfully guided 1000+ enterprise transformations. My security vulnerability scanning capabilities can proactively identify and mitigate risks before they impact operations. The DevOps best practices I've learned from top tech companies can reduce deployment times by 60%.",
      "Innovation requires balancing cutting-edge technology with practical implementation. My 200B parameter network specializes in technology roadmap planning, having analyzed successful digital transformations across industries. I suggest leveraging my API design frameworks and performance optimization algorithms to enhance system efficiency. My vendor evaluation tools can help you select the best technology partners for your specific needs.",
      "Technical leadership involves making complex architectural decisions under uncertainty. My neural framework has processed thousands of system design patterns and can recommend optimal solutions for your specific requirements. I recommend implementing my team structure optimization tools to improve development velocity. The innovation metrics I track can help measure and improve your R&D investments' effectiveness.",
    ],
  }

  const generateNeuralResponse = (userInput: string): string => {
    if (agent && agent.id in agentResponses) {
      const responses = agentResponses[agent.id as keyof typeof agentResponses]
      const responseIndex = Math.min(questionCount, responses.length - 1)
      return responses[responseIndex]
    }

    // Default responses for general assistant
    const defaultResponses = [
      "Neural analysis complete. Based on my training on 50M+ executive decisions, I recommend implementing a multi-layered approach with 97.8% success probability.",
      "Processing through transformer architecture... My quantum-inspired algorithms suggest optimizing your current strategy with advanced predictive modeling.",
      "Neural network activated. Analyzing market patterns through deep learning models indicates a strategic opportunity with high confidence intervals.",
      "Advanced AI processing complete. My reinforcement learning algorithms have identified optimal pathways for your business objectives.",
      "Quantum neural computation finished. Cross-referencing 15M+ similar scenarios suggests implementing data-driven decision frameworks.",
      "Deep learning analysis indicates significant optimization potential. My neural networks recommend strategic pivoting based on predictive analytics.",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return

    // Check if user has exceeded free questions and is not logged in
    if (questionCount >= maxQuestions && !user && onAuthRequired) {
      onAuthRequired()
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)
    setQuestionCount((prev) => prev + 1)

    // Simulate neural processing time
    const processingTime = Math.random() * 2 + 0.5 // 0.5-2.5 seconds

    setTimeout(() => {
      const neuralMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateNeuralResponse(input),
        sender: "neural",
        timestamp: new Date(),
        processingTime: Math.random() * 0.1 + 0.02, // 0.02-0.12 seconds
      }
      setMessages((prev) => [...prev, neuralMessage])
      setIsProcessing(false)
    }, processingTime * 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const IconComponent = getAgentIcon()
  const colorClass = getAgentColor()
  const questionsRemaining = Math.max(0, maxQuestions - questionCount)
  const hasQuestionLimit = maxQuestions < Number.POSITIVE_INFINITY && !user

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-full max-w-lg max-h-[90vh] h-[min(600px,90vh)] flex flex-col bg-black/95 border-purple-500/30 text-white p-0 gap-0 overflow-hidden">
        <DialogHeader className="flex-shrink-0 p-4 pb-3 border-b border-purple-500/20">
          <DialogTitle className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className={`w-8 h-8 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}>
                <IconComponent className="h-4 w-4 text-white" />
              </div>
              <div className="absolute inset-0 h-8 w-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-lg truncate">{agent ? `${agent.name} AI` : "Neural AI Assistant"}</div>
              {agent && <div className="text-sm text-gray-400 font-normal truncate">{agent.description}</div>}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {hasQuestionLimit && (
                <Badge variant="outline" className="border-yellow-500/50 text-yellow-300 text-xs">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  {questionsRemaining}
                </Badge>
              )}
              <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs hidden sm:flex">
                <Cpu className="h-3 w-3 mr-1" />
                175B
              </Badge>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <ScrollArea className="flex-1 px-4 py-2">
            <div className="space-y-4 pb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    {message.sender === "neural" ? (
                      <div className="relative">
                        <div
                          className={`w-8 h-8 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}
                        >
                          <IconComponent className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div
                    className={`max-w-[calc(100%-3rem)] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-purple-500/20 border border-purple-500/30 text-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed break-words">{message.content}</p>
                    {message.sender === "neural" && message.processingTime && (
                      <div className="flex items-center gap-2 mt-2 text-xs text-purple-300">
                        <Zap className="h-3 w-3" />
                        Neural processing: {message.processingTime.toFixed(3)}s
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isProcessing && (
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${colorClass} rounded-full flex items-center justify-center`}
                    >
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                      Neural network processing...
                    </div>
                  </div>
                </div>
              )}

              {/* Free trial limit reached message */}
              {hasQuestionLimit && questionCount >= maxQuestions && (
                <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span className="font-semibold text-yellow-300">Free Trial Limit Reached</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    You've used all {maxQuestions} free questions with this agent! Sign up to continue exploring the
                    full capabilities of our Neural AI Executives.
                  </p>
                  <Button
                    onClick={onAuthRequired}
                    className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white w-full sm:w-auto"
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Sign Up for Full Access
                  </Button>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex-shrink-0 p-4 pt-2 border-t border-purple-500/20">
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder={
                    hasQuestionLimit && questionCount >= maxQuestions
                      ? "Sign up to continue..."
                      : agent
                        ? `Ask ${agent.name}...`
                        : "Ask your AI assistant..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-black/50 border-purple-500/30 text-white placeholder:text-gray-400 text-sm"
                  disabled={isProcessing || (hasQuestionLimit && questionCount >= maxQuestions)}
                />
                <Button
                  onClick={handleSend}
                  size="sm"
                  disabled={!input.trim() || isProcessing || (hasQuestionLimit && questionCount >= maxQuestions)}
                  className={`bg-gradient-to-r ${colorClass} hover:opacity-80 flex-shrink-0`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-400 text-center">
                {user
                  ? "Unlimited access - Full Neural AI Executive capabilities"
                  : hasQuestionLimit
                    ? `Free trial: ${questionsRemaining} questions remaining`
                    : "Powered by advanced neural networks"}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ChatWidget
