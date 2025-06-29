"use client"

import { Badge } from "@/components/ui/badge"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bot,
  MessageCircle,
  BarChart3,
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Brain,
  Settings,
  Users,
  TrendingUp,
  X,
  Send,
  Clock,
  Target,
  Shield,
  Mic,
  MicOff,
  Square,
  Rocket,
  Building,
  Globe,
  FileText,
  MessageSquare,
  Search,
  Loader2,
} from "lucide-react"
import type React from "react"
import { useRef } from "react"

interface Message {
  type: "bot" | "user" | "analysis"
  content: string
  timestamp: Date
}

interface QuickOption {
  text: string
  action: string
  icon?: React.ReactNode
}

export default function NeuralIALanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [showAgentConfig, setShowAgentConfig] = useState(false)
  const [solutionType, setSolutionType] = useState<"agent" | "system" | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [quickOptions, setQuickOptions] = useState<QuickOption[]>([])
  const [userInput, setUserInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Simplified Speech-to-Text states
  const [isRecording, setIsRecording] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)
  const [interimTranscript, setInterimTranscript] = useState("")

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Conversation state management
  const [conversationState, setConversationState] = useState({
    questionsAsked: 0,
    industry: null,
    bonusEarned: false,
    conversationEnded: false,
    companyName: null,
    website: null,
    dataCollected: false,
  })

  // Add after the existing state declarations
  const [chatMode, setChatMode] = useState<"consultant" | "agent" | "system">("consultant")

  const categories = [
    {
      id: "customer-service",
      icon: "💬",
      title: "Customer Service Agent",
      description: "24/7 support that handles unlimited inquiries simultaneously",
      capability: "Handles unlimited customers at once",
    },
    {
      id: "sales",
      icon: "💰",
      title: "Sales & Lead Agent",
      description: "Smart agents that qualify leads and close deals",
      capability: "Qualifies and nurtures leads 24/7",
    },
    {
      id: "hr",
      icon: "👥",
      title: "HR & Recruitment Agent",
      description: "Screens resumes and conducts interviews instantly",
      capability: "Screens and interviews candidates",
    },
    {
      id: "operations",
      icon: "⚙️",
      title: "Operations Agent",
      description: "Automates routine business processes completely",
      capability: "Automates workflows and processes",
    },
    {
      id: "marketing",
      icon: "📈",
      title: "Marketing Agent",
      description: "Creates content and manages campaigns automatically",
      capability: "Creates content and manages campaigns",
    },
    {
      id: "data",
      icon: "📊",
      title: "Data Analysis Agent",
      description: "Analyzes massive datasets instantly",
      capability: "Processes massive datasets instantly",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Inc",
      role: "CEO",
      content:
        "Our NeuralIA Customer Service Agent handles 2,000+ inquiries daily. It responds in under 2 seconds and our customers love the instant support. We built it in 24 hours!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "4-hour response time", after: "1.8-second response", improvement: "2000+ daily inquiries" },
    },
    {
      name: "Marcus Rodriguez",
      company: "GrowthLabs",
      role: "Sales Director",
      content:
        "The Sales Agent we built with NeuralIA qualifies 500+ leads per day and books meetings automatically. It never sleeps and never misses a follow-up. Game-changer!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "50 leads/day", after: "500 leads/day", improvement: "24/7 lead qualification" },
    },
    {
      name: "Emily Watson",
      company: "InnovateCorp",
      role: "HR Manager",
      content:
        "Our HR Agent screens 1,000 resumes in 10 minutes and conducts initial interviews. What used to take our team 6 weeks now happens in 1 week. Incredible efficiency!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "6 weeks hiring", after: "1 week hiring", improvement: "1000 resumes in 10min" },
    },
    {
      name: "Emily Watson",
      company: "InnovateCorp",
      role: "HR Manager",
      content:
        "Our HR Agent screens 1,000 resumes in 10 minutes and conducts initial interviews. What used to take our team 6 weeks now happens in 1 week. Incredible efficiency!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "6 weeks hiring", after: "1 week hiring", improvement: "1000 resumes in 10min" },
    },
  ]

  const categoryNames: { [key: string]: string } = {
    "customer-service": "Customer Service Agent",
    sales: "Sales & Lead Agent",
    hr: "HR & Recruitment Agent",
    operations: "Operations Agent",
    marketing: "Marketing Agent",
    data: "Data Analysis Agent",
  }

  // Simplified Speech Recognition Setup
  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleCreateAgent = () => {
    // Show agent configuration modal instead of opening chat directly
    setShowAgentConfig(true)
    setSolutionType("agent")
  }

  const handlePreConfiguredAgent = (agentType?: string) => {
    // Open chat with pre-configured agent context
    setChatMode("agent")
    setChatOpen(true)
    setShowAgentConfig(false)

    // Reset conversation state
    setConversationState({
      questionsAsked: 0,
      industry: null,
      bonusEarned: false,
      conversationEnded: false,
      companyName: null,
      website: null,
      dataCollected: false,
    })

    const agentMessage = agentType
      ? `I want to create a ${agentType} for my business. Please help me configure this pre-built agent.`
      : "I want to use one of your pre-configured agents. Please show me the available options and help me choose the best one for my business."

    setMessages([
      {
        type: "bot",
        content: agentType
          ? `Excellent choice! 🚀 You've selected the ${agentType}. This is one of our most popular pre-configured agents.\n\nI'll help you customize this agent for your specific business needs. Let me gather some information to ensure it's perfectly tailored for you.\n\nFirst, what's your company name? This helps me provide personalized recommendations.`
          : "Perfect! 🚀 I'll help you choose from our pre-configured agents and customize it for your business.\n\nOur pre-configured agents are ready-to-deploy solutions that have been optimized for specific business functions. Each one can be customized to match your exact needs.\n\nLet's start with your company name so I can provide personalized recommendations.",
        timestamp: new Date(),
      },
    ])

    // Set initial quick options
    setTimeout(() => {
      setQuickOptions([
        {
          text: "TechCorp Inc",
          action: "My company is TechCorp Inc",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "StartupXYZ",
          action: "My company is StartupXYZ",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "Other Company",
          action: "Let me type my company name",
          icon: <FileText className="w-4 h-4" />,
        },
      ])
    }, 1000)
  }

  const handleCustomAgent = () => {
    // Open chat with custom agent context
    setChatMode("agent")
    setChatOpen(true)
    setShowAgentConfig(false)

    // Reset conversation state
    setConversationState({
      questionsAsked: 0,
      industry: null,
      bonusEarned: false,
      conversationEnded: false,
      companyName: null,
      website: null,
      dataCollected: false,
    })

    setMessages([
      {
        type: "bot",
        content:
          "Fantastic! 🚀 You've chosen to build a completely custom AI Agent from scratch. This means unlimited possibilities!\n\nI'll work with you to design an agent that's perfectly tailored to your unique business requirements. We can create specialized capabilities, custom workflows, and unique integrations that no pre-built solution can offer.\n\nLet's start by understanding your business. What's your company name?",
        timestamp: new Date(),
      },
    ])

    // Set initial quick options
    setTimeout(() => {
      setQuickOptions([
        {
          text: "TechCorp Inc",
          action: "My company is TechCorp Inc",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "StartupXYZ",
          action: "My company is StartupXYZ",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "Other Company",
          action: "Let me type my company name",
          icon: <FileText className="w-4 h-4" />,
        },
      ])
    }, 1000)
  }

  const handleCreateSystem = () => {
    setChatMode("system")
    setChatOpen(true)
    setSolutionType("system")

    // Reset conversation state
    setConversationState({
      questionsAsked: 0,
      industry: null,
      bonusEarned: false,
      conversationEnded: false,
      companyName: null,
      website: null,
      dataCollected: false,
    })

    setMessages([
      {
        type: "bot",
        content:
          "Welcome to the AI System Builder! 🚀\n\nI'm here to help you create a complete AI-powered system with data integration, intelligent dashboards, and advanced analytics capabilities.\n\nLet's start by understanding your business requirements. What's your company name?",
        timestamp: new Date(),
      },
    ])

    // Set initial quick options
    setTimeout(() => {
      setQuickOptions([
        {
          text: "TechCorp Inc",
          action: "My company is TechCorp Inc",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "StartupXYZ",
          action: "My company is StartupXYZ",
          icon: <Building className="w-4 h-4" />,
        },
        {
          text: "Other Company",
          action: "Let me type my company name",
          icon: <FileText className="w-4 h-4" />,
        },
      ])
    }, 1000)
  }

  const simulateAnalysis = async (companyName: string, website?: string) => {
    setIsAnalyzing(true)

    // Add analysis message
    const analysisMessage: Message = {
      type: "analysis",
      content: `🔍 Analyzing ${companyName}${website ? ` and ${website}` : ""}...\n\n⚡ Scanning industry data...\n🎯 Identifying opportunities...\n🚀 Calculating potential impact...`,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, analysisMessage])

    // Simulate analysis time (3-4 seconds)
    await new Promise((resolve) => setTimeout(resolve, 3500))

    setIsAnalyzing(false)

    // Send to AI for real analysis instead of hardcoded response
    const analysisPrompt = `I've just completed analyzing ${companyName}${website ? ` and their website ${website}` : ""}. Please provide a professional analysis of the opportunities for AI transformation, focusing on operational improvements, efficiency gains, and performance benefits. Do not mention any financial metrics. Ask about their industry to provide more specific insights.`

    await sendToAI(analysisPrompt)
  }

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const whatsappNumber = "56940946660"
    const message = encodeURIComponent(
      "Hi! I'm interested in creating an AI Agent for my business. Can you help me get started?",
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

      if (SpeechRecognition) {
        setSpeechSupported(true)
        const recognitionInstance = new SpeechRecognition()

        // Simple configuration for direct input
        recognitionInstance.continuous = true
        recognitionInstance.interimResults = true
        recognitionInstance.lang = "en-US"
        recognitionInstance.maxAlternatives = 1

        recognitionInstance.onstart = () => {
          console.log("Speech recognition started")
          setIsRecording(true)
          setInterimTranscript("")
        }

        recognitionInstance.onresult = (event: any) => {
          let interim = ""
          let final = ""

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript
            if (event.results[i].isFinal) {
              final += transcript
            } else {
              interim += transcript
            }
          }

          setInterimTranscript(interim)

          if (final) {
            // Add final transcript to the input field
            setUserInput((prev) => prev + final)
            setInterimTranscript("")
          }
        }

        recognitionInstance.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error)
          setIsRecording(false)
          setInterimTranscript("")
        }

        recognitionInstance.onend = () => {
          console.log("Speech recognition ended")
          setIsRecording(false)
          setInterimTranscript("")
        }

        setRecognition(recognitionInstance)
      }
    }
  }, [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const addBotMessage = (content: string) => {
    setMessages((prev) => [...prev, { type: "bot", content, timestamp: new Date() }])
  }

  const addUserMessage = (content: string) => {
    setMessages((prev) => [...prev, { type: "user", content, timestamp: new Date() }])
  }

  const simulateTyping = async (duration = 1500) => {
    setIsTyping(true)
    await new Promise((resolve) => setTimeout(resolve, duration))
    setIsTyping(false)
  }

  const sendToAI = async (userMessageContent: string) => {
    setIsSending(true)
    setQuickOptions([])

    const conversationHistory = [...messages, { type: "user", content: userMessageContent, timestamp: new Date() }]
      .filter((msg) => msg.type !== "analysis") // Remove analysis messages from AI context
      .map((msg) => ({
        role: msg.type === "bot" ? "assistant" : "user",
        content: msg.content,
      }))

    await simulateTyping()

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: conversationHistory,
          conversationState: conversationState,
          chatMode: chatMode,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      addBotMessage(data.text)

      // Update conversation state
      if (data.conversationState) {
        setConversationState(data.conversationState)
      }

      // Add contextual quick options based on conversation state and interest level
      setTimeout(() => {
        if (data.conversationState?.conversationEnded || data.conversationState?.questionsAsked >= 4) {
          // Lead to WhatsApp contact
          setQuickOptions([
            {
              text: "Contact Specialist",
              action: "whatsapp_contact",
              icon: <MessageSquare className="w-4 h-4" />,
            },
            {
              text: "More Details",
              action: "I want to know more specific details about implementation",
              icon: <Search className="w-4 h-4" />,
            },
            {
              text: "Technical Info",
              action: "What are the technical requirements and capabilities?",
              icon: <Target className="w-4 h-4" />,
            },
          ])
        } else {
          // Show engagement options
          const industry = data.conversationState?.industry
          if (industry === "technology") {
            setQuickOptions([
              {
                text: "API Integration",
                action: "How does the agent integrate with our existing APIs and systems?",
                icon: <Settings className="w-4 h-4" />,
              },
              {
                text: "Scalability",
                action: "How does the agent scale as our business grows?",
                icon: <TrendingUp className="w-4 h-4" />,
              },
              {
                text: "Contact Specialist",
                action: "whatsapp_contact",
                icon: <MessageSquare className="w-4 h-4" />,
              },
            ])
          } else if (industry === "healthcare") {
            setQuickOptions([
              {
                text: "HIPAA Compliance",
                action: "How does the agent ensure HIPAA compliance and data security?",
                icon: <Shield className="w-4 h-4" />,
              },
              {
                text: "Patient Experience",
                action: "How will this improve our patient experience and satisfaction?",
                icon: <Users className="w-4 h-4" />,
              },
              {
                text: "Contact Specialist",
                action: "whatsapp_contact",
                icon: <MessageSquare className="w-4 h-4" />,
              },
            ])
          } else {
            setQuickOptions([
              {
                text: "Implementation",
                action: "What does the implementation process look like?",
                icon: <Rocket className="w-4 h-4" />,
              },
              {
                text: "Performance",
                action: "What kind of performance improvements can we expect?",
                icon: <Clock className="w-4 h-4" />,
              },
              {
                text: "Contact Specialist",
                action: "whatsapp_contact",
                icon: <MessageSquare className="w-4 h-4" />,
              },
            ])
          }
        }
      }, 1000)
    } catch (error) {
      console.error("Error sending message to AI:", error)
      addBotMessage("Oops! Something went wrong. Please try again or contact our specialists directly on WhatsApp!")

      // Add WhatsApp contact option on error
      setTimeout(() => {
        setQuickOptions([
          {
            text: "Contact on WhatsApp",
            action: "whatsapp_contact",
            icon: <MessageSquare className="w-4 h-4" />,
          },
        ])
      }, 500)
    } finally {
      setIsSending(false)
    }
  }

  const startNewConversation = () => {
    setMessages([
      {
        type: "bot",
        content:
          "Hi! I'm your AI Solution Consultant. I'll help you discover what our powerful AI solutions can do for your business and guide you to build the perfect solution for your needs. What type of business challenge would you like an AI solution to handle for you?",
        timestamp: new Date(),
      },
    ])
    setConversationState({
      questionsAsked: 0,
      industry: null,
      bonusEarned: false,
      conversationEnded: false,
      companyName: null,
      website: null,
      dataCollected: false,
    })
    setQuickOptions([])
    setSolutionType(null)
  }

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId)
    setChatOpen(true)

    const categoryName = categoryNames[categoryId]
    const category = categories.find((c) => c.id === categoryId)
    addUserMessage(`I'm interested in the ${categoryName}`)
    await sendToAI(
      `I'm interested in the ${categoryName}. Please tell me exactly what this agent can do, what specific capabilities it has, and how it would work in my business. I want to understand what makes this agent powerful and how quickly we can build one. The agent capability is: ${category?.capability}.`,
    )
  }

  const handleQuickResponse = async (response: string) => {
    if (response === "whatsapp_contact") {
      openWhatsApp()
      return
    }

    if (response === "Let me type my company name") {
      // Just clear quick options and let user type
      setQuickOptions([])
      return
    }

    if (response === "I'd like to explore different solution types") {
      startNewConversation()
      return
    }

    addUserMessage(response)

    // Check if this is company name collection
    if (response.includes("My company is") && !conversationState.dataCollected) {
      const companyName = response.replace("My company is ", "")

      // Update conversation state
      setConversationState((prev) => ({ ...prev, companyName }))

      // Ask for website
      setTimeout(async () => {
        addBotMessage(
          `Perfect! ${companyName} - I'm excited to help you build something transformative. 💡\n\nDo you have a website I can analyze? This will enable me to provide more targeted insights and demonstrate how an AI agent can specifically benefit your business model.\n\nPlease share your website URL, or let me know if you'd prefer to proceed without it.`,
        )

        setQuickOptions([
          {
            text: "www.example.com",
            action: "Our website is www.example.com",
            icon: <Globe className="w-4 h-4" />,
          },
          {
            text: "No website yet",
            action: "We don't have a website yet",
            icon: <Building className="w-4 h-4" />,
          },
          {
            text: "Let me type URL",
            action: "Let me type our website URL",
            icon: <FileText className="w-4 h-4" />,
          },
        ])
      }, 1000)
      return
    }

    // Check if this is website collection
    if (
      (response.includes("Our website is") || response.includes("We don't have a website")) &&
      conversationState.companyName &&
      !conversationState.dataCollected
    ) {
      const website = response.includes("Our website is") ? response.replace("Our website is ", "") : null

      // Update conversation state
      setConversationState((prev) => ({ ...prev, website, dataCollected: true }))

      // Start analysis
      await simulateAnalysis(conversationState.companyName, website)
      return
    }

    // Regular AI response for other interactions
    await sendToAI(response)
  }

  const handleSendMessage = async () => {
    const messageToSend = userInput.trim()
    if (messageToSend) {
      setUserInput("")
      setInterimTranscript("")
      addUserMessage(messageToSend)

      // Check if we're collecting company data
      if (!conversationState.companyName && (solutionType === "agent" || solutionType === "system")) {
        // This is company name
        setConversationState((prev) => ({ ...prev, companyName: messageToSend }))

        setTimeout(async () => {
          addBotMessage(
            `Perfect! ${messageToSend} - I'm excited to help you build something transformative. 💡\n\nDo you have a website I can analyze? This will enable me to provide more targeted insights and demonstrate how an AI agent can specifically benefit your business model.\n\nPlease share your website URL, or let me know if you'd prefer to proceed without it.`,
          )

          setQuickOptions([
            {
              text: "www.example.com",
              action: "Our website is www.example.com",
              icon: <Globe className="w-4 h-4" />,
            },
            {
              text: "No website yet",
              action: "We don't have a website yet",
              icon: <Building className="w-4 h-4" />,
            },
          ])
        }, 1000)
        return
      }

      if (
        conversationState.companyName &&
        !conversationState.dataCollected &&
        (solutionType === "agent" || solutionType === "system")
      ) {
        // This is website
        const website =
          messageToSend.toLowerCase().includes("no") || messageToSend.toLowerCase().includes("don't")
            ? null
            : messageToSend

        setConversationState((prev) => ({ ...prev, website, dataCollected: true }))

        // Start analysis
        await simulateAnalysis(conversationState.companyName, website)
        return
      }

      // Regular AI conversation
      await sendToAI(messageToSend)
    }
  }

  const startRecording = () => {
    if (recognition && speechSupported) {
      console.log("Starting recording...")
      setInterimTranscript("")

      try {
        recognition.start()
      } catch (error) {
        console.error("Failed to start recognition:", error)
      }
    }
  }

  const stopRecording = () => {
    if (recognition) {
      console.log("Stopping recording...")
      recognition.stop()
      setIsRecording(false)
      setInterimTranscript("")
    }
  }

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const openChat = () => {
    setChatOpen(true)
    if (messages.length === 0) {
      setChatMode("consultant")
      setMessages([
        {
          type: "bot",
          content:
            "Hi! I'm your NeuralIA AI Consultant! 👋\n\nI'm here to answer any questions you have about NeuralIA, our AI solutions, capabilities, pricing, and how we can transform your business.\n\nWhat would you like to know about our AI solutions?",
          timestamp: new Date(),
        },
      ])

      setTimeout(() => {
        setQuickOptions([
          {
            text: "What is NeuralIA?",
            action: "What is NeuralIA and what do you do?",
            icon: <MessageCircle className="w-4 h-4" />,
          },
          {
            text: "AI Agent vs System",
            action: "What's the difference between AI Agent and AI System?",
            icon: <Settings className="w-4 h-4" />,
          },
          {
            text: "Pricing & Timeline",
            action: "What are your pricing and implementation timelines?",
            icon: <Clock className="w-4 h-4" />,
          },
          {
            text: "Build Solution",
            action: "I want to build an AI solution for my business",
            icon: <Rocket className="w-4 h-4" />,
          },
        ])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + Math.sin(Date.now() * 0.001) * 10}%`,
            top: `${10 + Math.cos(Date.now() * 0.001) * 5}%`,
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${15 + Math.cos(Date.now() * 0.0015) * 8}%`,
            bottom: `${20 + Math.sin(Date.now() * 0.0015) * 6}%`,
            animationDuration: "5s",
          }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${60 + Math.sin(Date.now() * 0.0008) * 12}%`,
            top: `${60 + Math.cos(Date.now() * 0.0008) * 8}%`,
            animationDuration: "6s",
          }}
        />

        {/* Interactive mouse follower */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-center">
            <div
              className={`transform transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Brain className="w-7 h-7 text-white animate-pulse" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    NeuralIA
                  </h1>
                  <p className="text-sm text-gray-400">AI-Powered Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div
              className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                <span className="text-white font-medium">Choose Your AI Solution</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Build Your Perfect
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  AI Solution
                </span>
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Build a custom AI agent from scratch, choose from our Neural Fleet of pre-configured agents, or create a
                complete AI-powered system for your business.
              </p>
            </div>
          </div>

          {/* Demo Video Section */}
          <div className="mb-16">
            <div
              className={`transform transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">See How It Works</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Watch how our AI solutions transform businesses in just 60 seconds
                </p>
              </div>

              <div className="max-w-4xl mx-auto relative">
                <div className="relative bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 overflow-hidden">
                  {/* Video Container */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-500/30">
                    {/* Video Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=400&width=700&text=NeuralIA+Demo+Video"
                        alt="NeuralIA Demo Video"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-all duration-300 cursor-pointer group">
                      <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Video Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-cyan-500/30">
                        <div className="text-cyan-400 text-xs font-semibold">Live Demo</div>
                        <div className="text-white text-sm">60 seconds</div>
                      </div>
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-cyan-500/30">
                        <div className="text-cyan-400 text-xs font-semibold">Success Rate</div>
                        <div className="text-white text-sm">98.5%</div>
                      </div>
                    </div>
                  </div>

                  {/* Video Features */}
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {[
                      {
                        icon: <MessageCircle className="w-6 h-6" />,
                        title: "Real Conversations",
                        description: "See actual AI agents handling customer inquiries",
                      },
                      {
                        icon: <BarChart3 className="w-6 h-6" />,
                        title: "Live Analytics",
                        description: "Watch real-time performance metrics and insights",
                      },
                      {
                        icon: <Rocket className="w-6 h-6" />,
                        title: "Quick Setup",
                        description: "From concept to deployment in under 48 hours",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="text-center">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-cyan-400">
                          {feature.icon}
                        </div>
                        <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse delay-1000" />
                </div>
              </div>
            </div>
          </div>

          {/* Three Main Options */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {/* AI Agent from Scratch */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Card className="relative group h-full bg-black/70 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Settings className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">AI Agent from Scratch</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Build a completely custom AI agent tailored to your unique business requirements with unlimited
                      possibilities.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {[
                      { icon: <Brain className="w-5 h-5" />, text: "Unlimited Customization" },
                      { icon: <Settings className="w-5 h-5" />, text: "Unique Business Logic" },
                      { icon: <Target className="w-5 h-5" />, text: "Expert Consultation" },
                      { icon: <Rocket className="w-5 h-5" />, text: "Built for Your Needs" },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="text-cyan-400">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleCustomAgent}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Build from Scratch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse" />
                <div className="absolute bottom-8 left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse delay-1000" />
              </Card>
            </div>

            {/* AI Agent from Neural Fleet */}
            <div
              className={`transform transition-all duration-1000 delay-600 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Card className="relative group h-full bg-black/70 border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Bot className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">AI Agent from Neural Fleet</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Choose from our pre-configured AI agents optimized for specific business functions and ready to
                      deploy.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {[
                      { icon: <Zap className="w-5 h-5" />, text: "Deploy in 24 Hours" },
                      { icon: <CheckCircle className="w-5 h-5" />, text: "Industry-Tested Templates" },
                      { icon: <Users className="w-5 h-5" />, text: "Proven Success Stories" },
                      { icon: <Settings className="w-5 h-5" />, text: "Customizable Features" },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="text-emerald-400">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleCreateAgent}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                  >
                    Browse Neural Fleet
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-400/20 rounded-full animate-pulse delay-300" />
                <div className="absolute bottom-8 left-4 w-6 h-6 bg-teal-400/20 rounded-full animate-pulse delay-1200" />
              </Card>
            </div>

            {/* System Option */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Card className="relative group h-full bg-black/70 border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">AI System</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Full-stack portals with complete data interactions, AI-powered dashboards, and intelligent
                      insights.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8 flex-1">
                    {[
                      { icon: <Database className="w-5 h-5" />, text: "Full Data Integration" },
                      { icon: <BarChart3 className="w-5 h-5" />, text: "AI Dashboards" },
                      { icon: <TrendingUp className="w-5 h-5" />, text: "Smart Insights" },
                      { icon: <Settings className="w-5 h-5" />, text: "Complete Portals" },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <div className="text-purple-400">{feature.icon}</div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleCreateSystem}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    Create System
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse delay-500" />
                <div className="absolute bottom-8 left-4 w-6 h-6 bg-pink-400/20 rounded-full animate-pulse delay-1500" />
              </Card>
            </div>
          </div>

          {/* Original Landing Page Content */}
          <div className="backdrop-blur-sm rounded-3xl p-10 shadow-2xl mb-8 bg-black/60">
            {/* Social Proof Section with Agent Focus */}
            <section className="mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 text-center">Success Stories</h2>
              <p className="text-xl text-gray-300 text-center mb-12">
                See how our AI solutions are transforming businesses every day
              </p>

              <div className="bg-black rounded-2xl p-8 relative overflow-hidden border border-cyan-500/20">
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? "bg-cyan-500 w-8" : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-center max-w-4xl mx-auto">
                    <div className="text-6xl text-cyan-500 mb-4">"</div>
                    <p className="text-xl text-white mb-6 leading-relaxed">
                      {testimonials[currentTestimonial].content}
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-6">
                      <img
                        src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className="w-16 h-16 rounded-full border-4 border-cyan-500 shadow-lg"
                      />
                      <div className="text-left">
                        <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                        <div className="text-cyan-400">{testimonials[currentTestimonial].role}</div>
                        <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                      {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm text-gray-400 capitalize">{key}</div>
                          <div className="font-bold text-cyan-400">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/20 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
              </div>
            </section>

            {/* Enhanced CTA Section */}
            <section className="bg-black text-white p-12 rounded-2xl text-center relative overflow-hidden border border-cyan-500/20">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-cyan-500/30">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium">Solution ready in 24-48 hours</span>
                </div>

                <h2 className="text-4xl font-bold mb-4">Ready to Build Your AI Solution?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                  Join thousands of companies using our AI solutions to automate tasks, serve customers, and grow their
                  business 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button
                    onClick={handleCustomAgent}
                    className="bg-cyan-500 text-black hover:bg-cyan-600 font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Start Building Now <Rocket className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    onClick={openWhatsApp}
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 bg-transparent"
                  >
                    Contact Specialist <MessageSquare className="ml-2 w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>24-48hr deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Works 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-400" />
                    <span>Full support included</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full translate-y-24 -translate-x-24"></div>
            </section>
          </div>

          {/* Bottom Section */}
          <div
            className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span>Instant Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 text-center text-gray-500">
          <p>&copy; 2024 NeuralIA. Powering the future with AI.</p>
        </footer>
      </div>

      {/* Animated grid overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Agent Configuration Modal */}
      {showAgentConfig && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-black/90 backdrop-blur-sm rounded-3xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Configure Your AI Agent</h2>
                <p className="text-gray-300">Choose how you want to build your AI agent</p>
              </div>
              <Button
                onClick={() => setShowAgentConfig(false)}
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-400 hover:bg-gray-800"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Main Choice: Pre-configured vs Custom */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Pre-configured Agents */}
              <Card className="relative group bg-black/70 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Pre-Configured Agents</h3>
                    <p className="text-gray-300">Ready-to-deploy agents optimized for specific business functions</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Deploy in 24 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Industry-tested templates</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>Customizable features</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => handlePreConfiguredAgent()}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl"
                  >
                    Browse Configurations
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Custom Agent */}
              <Card className="relative group bg-black/70 border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Build From Scratch</h3>
                    <p className="text-gray-300">
                      Create a completely custom agent tailored to your unique requirements
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>Unlimited customization</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>Unique business logic</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                      <span>Expert consultation</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleCustomAgent}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 rounded-xl"
                  >
                    Start Custom Build
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pre-configured Agent Types - Categorized */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Pre-Configured Agent Types</h3>

              {/* Office Category */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Office & Operations</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "👥",
                      title: "HR Recruitment Agent",
                      description: "Automated candidate screening and interview scheduling",
                      features: ["Resume screening", "Interview scheduling", "Candidate tracking"],
                      color: "from-orange-500 to-red-500",
                      deployTime: "24 hours",
                    },
                    {
                      icon: "⚙️",
                      title: "Operations Agent",
                      description: "Business process automation and workflow management",
                      features: ["Process automation", "Task scheduling", "System integration"],
                      color: "from-gray-600 to-gray-800",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "📋",
                      title: "Executive Assistant Agent",
                      description: "Calendar management, email handling, and administrative tasks",
                      features: ["Calendar scheduling", "Email management", "Task prioritization"],
                      color: "from-indigo-500 to-purple-500",
                      deployTime: "24 hours",
                    },
                    {
                      icon: "📊",
                      title: "Project Management Agent",
                      description: "Task tracking, deadline management, and team coordination",
                      features: ["Task assignment", "Progress tracking", "Team notifications"],
                      color: "from-green-500 to-emerald-500",
                      deployTime: "36 hours",
                    },
                    {
                      icon: "💰",
                      title: "Finance & Accounting Agent",
                      description: "Invoice processing, expense tracking, and financial reporting",
                      features: ["Invoice automation", "Expense tracking", "Financial reports"],
                      color: "from-yellow-500 to-orange-500",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "🔧",
                      title: "IT Support Agent",
                      description: "Technical troubleshooting and system maintenance guidance",
                      features: ["Ticket routing", "System diagnostics", "User support"],
                      color: "from-slate-500 to-gray-600",
                      deployTime: "36 hours",
                    },
                  ].map((agent, index) => (
                    <Card
                      key={index}
                      className="group relative bg-black/70 border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden cursor-pointer"
                      onClick={() => handlePreConfiguredAgent(agent.title)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="p-6 relative z-10">
                        <div className="text-center mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl`}
                          >
                            {agent.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{agent.title}</h4>
                          <p className="text-sm text-gray-300 mb-4">{agent.description}</p>
                        </div>

                        <div className="space-y-2 mb-4">
                          {agent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {agent.deployTime}
                          </Badge>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-xs px-3 py-1 h-7"
                          >
                            Configure
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>

                      <div className="absolute top-2 right-2 w-4 h-4 bg-cyan-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Card>
                  ))}
                </div>
              </div>

              {/* Experts Category */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Expert Consultants</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "⚖️",
                      title: "Legal Advisor Agent",
                      description: "Contract review, compliance guidance, and legal research",
                      features: ["Contract analysis", "Compliance checks", "Legal research"],
                      color: "from-blue-600 to-indigo-600",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "📈",
                      title: "Marketing Strategist Agent",
                      description: "Campaign planning, content strategy, and market analysis",
                      features: ["Campaign optimization", "Content planning", "Market insights"],
                      color: "from-pink-500 to-rose-500",
                      deployTime: "36 hours",
                    },
                    {
                      icon: "📊",
                      title: "Business Analyst Agent",
                      description: "Data analysis, performance metrics, and strategic insights",
                      features: ["Data visualization", "Performance tracking", "Strategic planning"],
                      color: "from-emerald-500 to-teal-500",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "🔬",
                      title: "Technical Consultant Agent",
                      description: "Architecture guidance, code review, and technical decisions",
                      features: ["Code analysis", "Architecture review", "Tech recommendations"],
                      color: "from-cyan-500 to-blue-500",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "🏭",
                      title: "Industry Expert Agent",
                      description: "Sector-specific knowledge and best practices guidance",
                      features: ["Industry insights", "Best practices", "Trend analysis"],
                      color: "from-violet-500 to-purple-500",
                      deployTime: "72 hours",
                    },
                    {
                      icon: "🛡️",
                      title: "Compliance Officer Agent",
                      description: "Regulatory compliance, audit preparation, and risk assessment",
                      features: ["Compliance monitoring", "Risk assessment", "Audit support"],
                      color: "from-red-500 to-pink-500",
                      deployTime: "48 hours",
                    },
                  ].map((agent, index) => (
                    <Card
                      key={index}
                      className="group relative bg-black/70 border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden cursor-pointer"
                      onClick={() => handlePreConfiguredAgent(agent.title)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="p-6 relative z-10">
                        <div className="text-center mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl`}
                          >
                            {agent.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{agent.title}</h4>
                          <p className="text-sm text-gray-300 mb-4">{agent.description}</p>
                        </div>

                        <div className="space-y-2 mb-4">
                          {agent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {agent.deployTime}
                          </Badge>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-xs px-3 py-1 h-7"
                          >
                            Configure
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>

                      <div className="absolute top-2 right-2 w-4 h-4 bg-purple-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Card>
                  ))}
                </div>
              </div>

              {/* Service Category */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">Customer Service</h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/50 to-transparent"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: "💬",
                      title: "Customer Support Agent",
                      description: "24/7 customer service with unlimited concurrent conversations",
                      features: ["Multi-language support", "Ticket routing", "Knowledge base integration"],
                      color: "from-blue-500 to-cyan-500",
                      deployTime: "24 hours",
                    },
                    {
                      icon: "💰",
                      title: "Sales Assistant Agent",
                      description: "Lead qualification and sales conversation automation",
                      features: ["Lead scoring", "CRM integration", "Meeting booking"],
                      color: "from-emerald-500 to-teal-500",
                      deployTime: "24 hours",
                    },
                    {
                      icon: "📅",
                      title: "Booking & Scheduling Agent",
                      description: "Appointment booking, calendar management, and availability tracking",
                      features: ["Calendar integration", "Automated booking", "Reminder notifications"],
                      color: "from-indigo-500 to-blue-500",
                      deployTime: "24 hours",
                    },
                    {
                      icon: "🔧",
                      title: "Technical Support Agent",
                      description: "Product troubleshooting and technical issue resolution",
                      features: ["Issue diagnosis", "Solution guidance", "Escalation management"],
                      color: "from-orange-500 to-red-500",
                      deployTime: "36 hours",
                    },
                    {
                      icon: "🏨",
                      title: "Concierge Service Agent",
                      description: "Premium customer assistance and personalized recommendations",
                      features: ["Personal assistance", "Recommendations", "VIP support"],
                      color: "from-purple-500 to-pink-500",
                      deployTime: "48 hours",
                    },
                    {
                      icon: "📦",
                      title: "Order Management Agent",
                      description: "Order processing, tracking, and fulfillment coordination",
                      features: ["Order processing", "Shipment tracking", "Return handling"],
                      color: "from-green-500 to-emerald-500",
                      deployTime: "36 hours",
                    },
                  ].map((agent, index) => (
                    <Card
                      key={index}
                      className="group relative bg-black/70 border-white/10 hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden cursor-pointer"
                      onClick={() => handlePreConfiguredAgent(agent.title)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="p-6 relative z-10">
                        <div className="text-center mb-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl`}
                          >
                            {agent.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{agent.title}</h4>
                          <p className="text-sm text-gray-300 mb-4">{agent.description}</p>
                        </div>

                        <div className="space-y-2 mb-4">
                          {agent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
                            <Clock className="w-3 h-3 mr-1" />
                            {agent.deployTime}
                          </Badge>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs px-3 py-1 h-7"
                          >
                            Configure
                            <ArrowRight className="ml-1 w-3 h-3" />
                          </Button>
                        </div>
                      </CardContent>

                      <div className="absolute top-2 right-2 w-4 h-4 bg-emerald-400/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Configuration Process */}
            <div className="bg-black/40 rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Configuration Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "1",
                    title: "Select Type",
                    description: "Choose from pre-configured agents or start from scratch",
                    icon: <Target className="w-6 h-6" />,
                  },
                  {
                    step: "2",
                    title: "Customize",
                    description: "Tailor features, integrations, and behavior to your needs",
                    icon: <Settings className="w-6 h-6" />,
                  },
                  {
                    step: "3",
                    title: "Test & Train",
                    description: "We test your agent and train it with your specific data",
                    icon: <Brain className="w-6 h-6" />,
                  },
                  {
                    step: "4",
                    title: "Deploy",
                    description: "Your agent goes live and starts working 24/7",
                    icon: <Rocket className="w-6 h-6" />,
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                      {step.step}
                    </div>
                    <div className="mb-3 flex justify-center text-cyan-400">{step.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-300">{step.description}</p>

                    {index < 3 && (
                      <ArrowRight className="absolute -right-3 top-6 w-6 h-6 text-cyan-500/50 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        {!chatOpen && (
          <div className="absolute -top-12 right-0 bg-black text-cyan-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce border border-cyan-500/30">
            🤖 Build Your Solution
          </div>
        )}
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black shadow-2xl transform hover:scale-110 transition-all duration-300 relative"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
          {!chatOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Enhanced Chatbot Container */}
      {chatOpen && (
        <div
          className={`fixed bottom-32 right-8 w-96 h-[600px] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col z-40 overflow-hidden ${
            chatMode === "agent"
              ? "border border-cyan-500/30"
              : chatMode === "system"
                ? "border border-purple-500/30"
                : "border border-emerald-500/30"
          }`}
        >
          {/* Enhanced Chat Header */}
          <div
            className={`text-white p-6 rounded-t-3xl relative overflow-hidden border-b ${
              chatMode === "agent"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-500/20"
                : chatMode === "system"
                  ? "bg-gradient-to-r from-purple-500 to-pink-600 border-purple-500/20"
                  : "bg-gradient-to-r from-emerald-500 to-teal-600 border-emerald-500/20"
            }`}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                    chatMode === "agent"
                      ? "bg-cyan-400/20 border-cyan-300/30"
                      : chatMode === "system"
                        ? "bg-purple-400/20 border-purple-300/30"
                        : "bg-emerald-400/20 border-emerald-300/30"
                  }`}
                >
                  {chatMode === "agent" ? (
                    <MessageCircle className="w-5 h-5 text-white" />
                  ) : chatMode === "system" ? (
                    <BarChart3 className="w-5 h-5 text-white" />
                  ) : (
                    <Brain className="w-5 h-5 text-white" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {chatMode === "agent"
                      ? "AI Agent Builder"
                      : chatMode === "system"
                        ? "AI System Builder"
                        : "NeuralIA AI Consultant"}
                  </h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        chatMode === "agent"
                          ? "bg-cyan-300"
                          : chatMode === "system"
                            ? "bg-purple-300"
                            : "bg-emerald-300"
                      }`}
                    ></div>
                    <span>
                      {chatMode === "agent"
                        ? "Online • Ready to build agents"
                        : chatMode === "system"
                          ? "Online • Ready to build systems"
                          : "Online • Ready to help"}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm opacity-90">
                {chatMode === "agent"
                  ? "Let's build the perfect AI agent for your business!"
                  : chatMode === "system"
                    ? "Let's build a complete AI system for your business!"
                    : "Ask me anything about NeuralIA and our AI solutions!"}
              </p>

              {/* Company Info Display */}
              {conversationState.companyName && (
                <div className="mt-3 flex items-center gap-2 text-xs">
                  <Building
                    className={`w-3 h-3 ${
                      chatMode === "agent"
                        ? "text-cyan-300"
                        : chatMode === "system"
                          ? "text-purple-300"
                          : "text-emerald-300"
                    }`}
                  />
                  <span className="opacity-75">{conversationState.companyName}</span>
                  {conversationState.website && (
                    <>
                      <span className="opacity-50">•</span>
                      <Globe
                        className={`w-3 h-3 ${
                          chatMode === "agent"
                            ? "text-cyan-300"
                            : chatMode === "system"
                              ? "text-purple-300"
                              : "text-emerald-300"
                        }`}
                      />
                      <span className="opacity-75">{conversationState.website}</span>
                    </>
                  )}
                </div>
              )}

              {/* Speech Recognition Status */}
              {speechSupported && (
                <div className="mt-2 text-xs opacity-75 flex items-center gap-2">
                  <Mic className="w-3 h-3" />
                  <span>Voice input available • Click mic to speak</span>
                </div>
              )}
            </div>
            <div
              className={`absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 ${
                chatMode === "agent"
                  ? "bg-cyan-400/10"
                  : chatMode === "system"
                    ? "bg-purple-400/10"
                    : "bg-emerald-400/10"
              }`}
            ></div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-4 rounded-2xl relative ${
                  message.type === "bot"
                    ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                    : message.type === "analysis"
                      ? "bg-gradient-to-r from-cyan-50 to-blue-50 text-gray-800 shadow-sm border border-cyan-200 max-w-[90%]"
                      : "bg-black text-white ml-auto shadow-lg border border-cyan-500/20"
                }`}
              >
                {message.type === "analysis" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-4 h-4 text-cyan-600 animate-pulse" />
                    <span className="text-sm font-semibold text-cyan-700">AI Analysis in Progress</span>
                    {isAnalyzing && <Loader2 className="w-4 h-4 text-cyan-600 animate-spin" />}
                  </div>
                )}

                <div className="text-sm whitespace-pre-line">{message.content}</div>
                <div
                  className={`text-xs mt-2 opacity-60 ${
                    message.type === "bot" || message.type === "analysis" ? "text-gray-500" : "text-gray-300"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>

                {message.type === "bot" && (
                  <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
                )}
                {message.type === "analysis" && (
                  <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-cyan-50"></div>
                )}
                {message.type === "user" && (
                  <div className="absolute -right-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="max-w-[80%] p-4 rounded-2xl bg-white text-gray-800 shadow-sm border border-gray-100 relative">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-sm text-gray-500">Building solution specs...</span>
                </div>
                <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
              </div>
            )}

            {/* Simplified Live Speech Recognition Display */}
            {isRecording && (
              <div className="max-w-[90%] p-4 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-300 relative shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-cyan-700 font-semibold">Voice Input Active</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-4 bg-cyan-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-6 bg-cyan-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-1 h-3 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-1 h-5 bg-cyan-500 rounded-full animate-pulse delay-225"></div>
                    <div className="w-1 h-4 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>

                <div className="min-h-[40px] p-3 bg-white rounded-lg border border-cyan-200 mb-3">
                  <div className="text-sm text-gray-800">
                    {interimTranscript ? (
                      <span className="text-cyan-600 italic">{interimTranscript}</span>
                    ) : (
                      <span className="text-gray-400">Listening... speak now</span>
                    )}
                    <span className="inline-block w-1 h-4 bg-cyan-500 ml-1 animate-pulse"></span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-xs text-cyan-600">Speech will be added to your message</div>
                  <Button
                    onClick={stopRecording}
                    size="sm"
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50 text-xs px-3 py-1 h-7 bg-transparent"
                  >
                    <Square className="w-3 h-3 mr-1" />
                    Stop
                  </Button>
                </div>
              </div>
            )}

            {quickOptions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickResponse(option.action)}
                    variant="outline"
                    size="sm"
                    className="bg-white hover:bg-cyan-50 border-cyan-200 text-cyan-700 hover:text-cyan-800 rounded-full text-xs flex items-center gap-2 transition-all duration-200 hover:scale-105"
                  >
                    {option.icon}
                    {option.text}
                  </Button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Simplified Input with Voice Input */}
          <div className="p-6 bg-white/95 backdrop-blur-sm rounded-b-3xl border-t border-gray-100">
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <input
                  value={userInput + (isRecording ? interimTranscript : "")}
                  onChange={(e) => !isRecording && setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !isSending && !isRecording && handleSendMessage()}
                  placeholder={
                    isRecording
                      ? "Listening... (click mic to stop)"
                      : isSending
                        ? "Building solution..."
                        : (solutionType === "agent" || solutionType === "system") && !conversationState.dataCollected
                          ? "Type your company name or website..."
                          : "Ask about our AI capabilities..."
                  }
                  className="w-full rounded-full border-gray-300 pr-12 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  disabled={isSending || isAnalyzing}
                  readOnly={isRecording}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                  {(userInput + (isRecording ? interimTranscript : "")).length}/500
                </div>
              </div>

              {/* Simplified Speech-to-Text Button */}
              {speechSupported && (
                <Button
                  onClick={toggleRecording}
                  className={`w-12 h-12 rounded-full p-0 shadow-lg transform hover:scale-105 transition-all duration-200 ${
                    isRecording
                      ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  }`}
                  disabled={isSending || isAnalyzing}
                  title={isRecording ? "Stop voice input" : "Start voice input"}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
              )}

              <Button
                onClick={handleSendMessage}
                className={`w-12 h-12 rounded-full text-white p-0 shadow-lg transform hover:scale-105 transition-all duration-200 ${
                  chatMode === "agent"
                    ? "bg-cyan-500 hover:bg-cyan-600"
                    : chatMode === "system"
                      ? "bg-purple-500 hover:bg-purple-600"
                      : "bg-emerald-500 hover:bg-emerald-600"
                }`}
                disabled={isSending || !userInput.trim() || isRecording || isAnalyzing}
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
              <Shield className="w-3 h-3 mr-1" />
              Your data is encrypted and secure
              {speechSupported && (
                <>
                  <span className="mx-2">•</span>
                  <Mic className="w-3 h-3 mr-1" />
                  {isRecording ? "Voice input active" : "Voice input ready"}
                </>
              )}
              <span className="mx-2">•</span>
              <MessageSquare className="w-3 h-3 mr-1" />
              <button onClick={openWhatsApp} className="text-cyan-600 hover:text-cyan-700 underline">
                WhatsApp Support
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
