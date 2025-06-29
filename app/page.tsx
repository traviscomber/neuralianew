"use client"

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
  Square,
  Rocket,
  Building,
  Globe,
  FileText,
  MessageSquare,
  Search,
  Loader2,
  Star,
  Award,
  Briefcase,
  Phone,
  Mail,
  MapPin,
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
      name: "David Kim",
      company: "DataCorp",
      role: "CTO",
      content:
        "Our AI System processes millions of data points and provides real-time insights. What used to take our analysts days now happens in minutes. Revolutionary technology!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "Days of analysis", after: "Minutes of processing", improvement: "Million+ data points" },
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

  // Use cases data
  const useCases = [
    {
      industry: "E-commerce",
      icon: "🛒",
      title: "24/7 Customer Support",
      description:
        "Handle unlimited customer inquiries, process returns, and provide product recommendations instantly.",
      results: ["95% faster response time", "24/7 availability", "Unlimited concurrent chats"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      industry: "Healthcare",
      icon: "🏥",
      title: "Patient Scheduling & Support",
      description: "Automate appointment booking, patient inquiries, and follow-up care coordination.",
      results: ["80% reduction in wait times", "HIPAA compliant", "Automated follow-ups"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      industry: "Real Estate",
      icon: "🏠",
      title: "Lead Qualification & Tours",
      description: "Qualify prospects, schedule property tours, and provide instant property information.",
      results: ["10x more leads processed", "Automated tour booking", "24/7 lead capture"],
      color: "from-orange-500 to-red-500",
    },
    {
      industry: "Finance",
      icon: "💳",
      title: "Client Advisory & Support",
      description: "Provide financial guidance, process applications, and handle client inquiries securely.",
      results: ["Secure data handling", "Instant application processing", "Personalized advice"],
      color: "from-purple-500 to-pink-500",
    },
  ]

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
        {/* SECTION 1: INTRO WITH VIDEO */}
        <section className="min-h-screen flex flex-col">
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
          <div className="flex-1 container mx-auto px-6 py-16 flex flex-col justify-center">
            <div className="text-center mb-16">
              <div
                className={`transform transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: "3s" }} />
                  <span className="text-white font-medium">Transform Your Business with AI</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Build Your Perfect
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    AI Solution
                  </span>
                </h2>

                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                  From custom AI agents to complete systems - we build intelligent solutions that work 24/7, handle
                  unlimited tasks, and transform how your business operates.
                </p>
              </div>
            </div>

            {/* Demo Video Section */}
            <div className="mb-16">
              <div
                className={`transform transition-all duration-1000 delay-400 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">See AI in Action</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                    Watch real AI agents handling customer inquiries, processing leads, and delivering results in
                    real-time
                  </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                  <div className="relative bg-black/60 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 overflow-hidden">
                    {/* Video Container */}
                    <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-500/30">
                      {/* Video Placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=500&width=900&text=Live+AI+Demo+-+Real+Conversations"
                          alt="NeuralIA Live Demo"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-all duration-300 cursor-pointer group">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-300">
                          <div className="w-0 h-0 border-l-10 border-l-white border-t-8 border-t-transparent border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>

                      {/* Live Stats Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                        <div className="bg-black/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-cyan-500/30">
                          <div className="text-cyan-400 text-sm font-semibold">Live Demo</div>
                          <div className="text-white text-lg font-bold">Real Conversations</div>
                        </div>
                        <div className="bg-black/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-emerald-500/30">
                          <div className="text-emerald-400 text-sm font-semibold">Success Rate</div>
                          <div className="text-white text-lg font-bold">98.5%</div>
                        </div>
                        <div className="bg-black/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-purple-500/30">
                          <div className="text-purple-400 text-sm font-semibold">Response Time</div>
                          <div className="text-white text-lg font-bold">1.8s</div>
                        </div>
                      </div>
                    </div>

                    {/* Video Features */}
                    <div className="grid md:grid-cols-3 gap-8 mt-10">
                      {[
                        {
                          icon: <MessageCircle className="w-8 h-8" />,
                          title: "Real AI Conversations",
                          description:
                            "Watch actual AI agents handling complex customer inquiries with human-like responses",
                        },
                        {
                          icon: <BarChart3 className="w-8 h-8" />,
                          title: "Live Performance Metrics",
                          description:
                            "See real-time analytics showing response times, resolution rates, and customer satisfaction",
                        },
                        {
                          icon: <Rocket className="w-8 h-8" />,
                          title: "Rapid Deployment",
                          description: "From initial consultation to live deployment in just 24-48 hours",
                        },
                      ].map((feature, index) => (
                        <div key={index} className="text-center">
                          <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-cyan-400 border border-cyan-500/30">
                            {feature.icon}
                          </div>
                          <h4 className="text-white font-bold text-lg mb-3">{feature.title}</h4>
                          <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
          </div>
        </section>

        {/* SECTION 2: BUILD AGENTS */}
        <section className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <Settings className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Choose Your Path</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">How Do You Want to Build?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Three powerful ways to create your AI solution - from completely custom builds to ready-to-deploy
                systems
              </p>
            </div>

            {/* Three Main Build Options */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* AI Agent from Scratch */}
              <div className="group">
                <Card className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-10 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Settings className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Custom AI Agent</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Build a completely custom AI agent from scratch, tailored to your unique business requirements
                        with unlimited possibilities.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8 flex-1">
                      {[
                        {
                          icon: <Brain className="w-6 h-6" />,
                          text: "Unlimited Customization",
                          desc: "Any workflow, any integration",
                        },
                        {
                          icon: <Target className="w-6 h-6" />,
                          text: "Unique Business Logic",
                          desc: "Built for your specific needs",
                        },
                        {
                          icon: <Users className="w-6 h-6" />,
                          text: "Expert Consultation",
                          desc: "Dedicated AI specialists",
                        },
                        {
                          icon: <Rocket className="w-6 h-6" />,
                          text: "Future-Proof Design",
                          desc: "Scales with your business",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/20"
                        >
                          <div className="text-cyan-400 mt-1">{feature.icon}</div>
                          <div>
                            <div className="text-white font-semibold">{feature.text}</div>
                            <div className="text-gray-400 text-sm">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-cyan-400 text-sm font-semibold">Timeline</div>
                      <div className="text-white text-2xl font-bold">3-7 Days</div>
                    </div>

                    <Button
                      onClick={handleCustomAgent}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Start Custom Build
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-cyan-400/20 rounded-full animate-pulse" />
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse delay-1000" />
                </Card>
              </div>

              {/* AI Agent from Neural Fleet */}
              <div className="group">
                <Card className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-10 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Bot className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Neural Fleet Agent</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Choose from our pre-configured AI agents optimized for specific business functions and ready to
                        deploy instantly.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8 flex-1">
                      {[
                        {
                          icon: <Zap className="w-6 h-6" />,
                          text: "Deploy in 24 Hours",
                          desc: "Ready-to-use templates",
                        },
                        {
                          icon: <Award className="w-6 h-6" />,
                          text: "Industry-Tested",
                          desc: "Proven success across sectors",
                        },
                        {
                          icon: <CheckCircle className="w-6 h-6" />,
                          text: "Pre-Optimized",
                          desc: "Best practices built-in",
                        },
                        {
                          icon: <Settings className="w-6 h-6" />,
                          text: "Customizable",
                          desc: "Adapt to your brand & needs",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20"
                        >
                          <div className="text-emerald-400 mt-1">{feature.icon}</div>
                          <div>
                            <div className="text-white font-semibold">{feature.text}</div>
                            <div className="text-gray-400 text-sm">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-emerald-400 text-sm font-semibold">Timeline</div>
                      <div className="text-white text-2xl font-bold">24-48 Hours</div>
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

              {/* AI System */}
              <div className="group">
                <Card className="relative h-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-10 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <BarChart3 className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Complete AI System</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Full-stack AI-powered systems with data integration, intelligent dashboards, and advanced
                        analytics capabilities.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8 flex-1">
                      {[
                        {
                          icon: <Database className="w-6 h-6" />,
                          text: "Full Data Integration",
                          desc: "Connect all your systems",
                        },
                        {
                          icon: <BarChart3 className="w-6 h-6" />,
                          text: "AI Dashboards",
                          desc: "Intelligent insights & reports",
                        },
                        {
                          icon: <TrendingUp className="w-6 h-6" />,
                          text: "Predictive Analytics",
                          desc: "Forecast trends & outcomes",
                        },
                        {
                          icon: <Shield className="w-6 h-6" />,
                          text: "Enterprise Security",
                          desc: "Bank-level data protection",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-3 rounded-lg bg-purple-500/5 border border-purple-500/20"
                        >
                          <div className="text-purple-400 mt-1">{feature.icon}</div>
                          <div>
                            <div className="text-white font-semibold">{feature.text}</div>
                            <div className="text-gray-400 text-sm">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mb-6">
                      <div className="text-purple-400 text-sm font-semibold">Timeline</div>
                      <div className="text-white text-2xl font-bold">1-2 Weeks</div>
                    </div>

                    <Button
                      onClick={handleCreateSystem}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                    >
                      Build AI System
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>

                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse delay-500" />
                  <div className="absolute bottom-8 left-4 w-6 h-6 bg-pink-400/20 rounded-full animate-pulse delay-1500" />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: BEST SOLUTIONS */}
        <section className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-yellow-500/30">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-medium">Top Performers</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Our Best AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet our champion AI agents - proven solutions delivering exceptional results across thousands of
                businesses worldwide
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
              {/* Customer Service Champion */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Card className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-yellow-500/30 rounded-3xl overflow-hidden">
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    #1 Choice
                  </div>

                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                        💬
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Customer Service Champion</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The ultimate 24/7 customer support solution that handles unlimited conversations with human-like
                        intelligence and never gets tired.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">2000+</div>
                        <div className="text-sm text-gray-300">Daily Inquiries</div>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">1.8s</div>
                        <div className="text-sm text-gray-300">Response Time</div>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">98%</div>
                        <div className="text-sm text-gray-300">Satisfaction</div>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-4 border border-yellow-500/20 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-300">Availability</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {[
                        "Handles unlimited simultaneous conversations",
                        "Multi-language support (50+ languages)",
                        "Integrates with all major platforms",
                        "Learns from every interaction",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handlePreConfiguredAgent("Customer Support Agent")}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Deploy Champion Agent
                      <Rocket className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sales Powerhouse */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Card className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-emerald-500/30 rounded-3xl overflow-hidden">
                  <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    Top ROI
                  </div>

                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                        💰
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Sales Powerhouse</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The ultimate sales machine that qualifies leads, nurtures prospects, and closes deals while you
                        sleep.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20 text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">500+</div>
                        <div className="text-sm text-gray-300">Leads/Day</div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20 text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">40%</div>
                        <div className="text-sm text-gray-300">Higher Conversion</div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20 text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-300">Lead Nurturing</div>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20 text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">3x</div>
                        <div className="text-sm text-gray-300">More Qualified</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {[
                        "Qualifies leads using your exact criteria",
                        "Books meetings automatically",
                        "Handles objections like a pro",
                        "Integrates with all major CRMs",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handlePreConfiguredAgent("Sales Assistant Agent")}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-black font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Deploy Sales Agent
                      <Target className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* HR Genius */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <Card className="relative h-full bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-3xl overflow-hidden">
                  <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    HR Favorite
                  </div>

                  <CardContent className="p-8 relative z-10 h-full flex flex-col">
                    <div className="text-center mb-8">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl shadow-2xl">
                        👥
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">HR Genius</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        The smartest hiring assistant that screens thousands of candidates and finds your perfect match
                        in minutes.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">1000</div>
                        <div className="text-sm text-gray-300">Resumes/10min</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">85%</div>
                        <div className="text-sm text-gray-300">Faster Hiring</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">60%</div>
                        <div className="text-sm text-gray-300">Better Matches</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-300">Screening</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {[
                        "Screens resumes with precision",
                        "Conducts initial interviews",
                        "Ranks candidates automatically",
                        "Handles employee inquiries",
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handlePreConfiguredAgent("HR Recruitment Agent")}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 rounded-xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Deploy HR Agent
                      <Briefcase className="ml-2 w-5 h-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SUCCESS STORIES & USE CASES */}
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 py-20">
          <div className="container mx-auto px-6">
            {/* Success Stories */}
            <div className="mb-20">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-emerald-500/30">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Real Results</span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-6">Success Stories</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses like yours are transforming their operations with NeuralIA AI solutions
                </p>
              </div>

              {/* Testimonial Carousel */}
              <div className="max-w-6xl mx-auto">
                <div className="relative bg-gradient-to-br from-slate-800/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-12 border border-emerald-500/20 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="flex justify-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8 max-w-4xl mx-auto">
                        "{testimonials[currentTestimonial].content}"
                      </blockquote>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          {testimonials[currentTestimonial].name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                          <div className="text-emerald-400 font-semibold">{testimonials[currentTestimonial].role}</div>
                          <div className="text-gray-400">{testimonials[currentTestimonial].company}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                          <div className="text-emerald-400 text-sm font-semibold mb-1">Before</div>
                          <div className="text-white font-bold">{testimonials[currentTestimonial].metrics.before}</div>
                        </div>
                        <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                          <div className="text-emerald-400 text-sm font-semibold mb-1">After</div>
                          <div className="text-white font-bold">{testimonials[currentTestimonial].metrics.after}</div>
                        </div>
                        <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                          <div className="text-emerald-400 text-sm font-semibold mb-1">Result</div>
                          <div className="text-white font-bold">
                            {testimonials[currentTestimonial].metrics.improvement}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? "bg-emerald-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-purple-500/30">
                  <Briefcase className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-400 font-medium">Industry Applications</span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-6">Use Cases Across Industries</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Discover how AI agents are revolutionizing operations across different sectors
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {useCases.map((useCase, index) => (
                  <Card
                    key={index}
                    className="group relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 backdrop-blur-sm overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <CardContent className="p-8 relative z-10 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="text-5xl mb-4">{useCase.icon}</div>
                        <div className="text-purple-400 text-sm font-semibold mb-2">{useCase.industry}</div>
                        <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                      </div>

                      <div className="space-y-3 flex-1">
                        {useCase.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        onClick={openChat}
                        className="w-full mt-6 bg-gradient-to-r from-purple-500/20 to-pink-600/20 hover:from-purple-500/30 hover:to-pink-600/30 text-purple-400 border border-purple-500/30 hover:border-purple-400/50 font-semibold py-3 rounded-xl transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONTACT */}
        <section className="min-h-screen bg-gradient-to-br from-black to-slate-900 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-cyan-500/30">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Get Started Today</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using NeuralIA AI solutions. Start your transformation today.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Contact Options */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-6">Get Your AI Solution</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      Our AI specialists are ready to help you build the perfect solution for your business. Choose how
                      you'd like to get started:
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* WhatsApp Contact */}
                    <div className="group">
                      <Button
                        onClick={openWhatsApp}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 rounded-2xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-4"
                      >
                        <MessageCircle className="w-6 h-6" />
                        <div className="text-left">
                          <div className="font-bold">WhatsApp Consultation</div>
                          <div className="text-sm opacity-90">Instant response from AI specialists</div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* AI Chat */}
                    <div className="group">
                      <Button
                        onClick={openChat}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-6 rounded-2xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-4"
                      >
                        <Bot className="w-6 h-6" />
                        <div className="text-left">
                          <div className="font-bold">AI Consultant Chat</div>
                          <div className="text-sm opacity-90">Get answers about our solutions</div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Build Now */}
                    <div className="group">
                      <Button
                        onClick={handleCreateAgent}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-6 rounded-2xl text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-4"
                      >
                        <Rocket className="w-6 h-6" />
                        <div className="text-left">
                          <div className="font-bold">Start Building Now</div>
                          <div className="text-sm opacity-90">Begin your AI solution journey</div>
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                    <h4 className="text-white font-bold text-xl mb-6">Contact Information</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-gray-300">
                        <Phone className="w-5 h-5 text-cyan-400" />
                        <span>+56 9 4094 6660</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span>hello@neuralia.ai</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-300">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                        <span>Global AI Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-cyan-500/20 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl" />

                    <div className="relative z-10 text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Brain className="w-16 h-16 text-white animate-pulse" />
                      </div>

                      <h4 className="text-3xl font-bold text-white mb-6">Why Choose NeuralIA?</h4>

                      <div className="space-y-6 text-left">
                        {[
                          {
                            icon: <Zap className="w-6 h-6" />,
                            title: "Rapid Deployment",
                            desc: "24-48 hours to live solution",
                          },
                          {
                            icon: <Shield className="w-6 h-6" />,
                            title: "Enterprise Security",
                            desc: "Bank-level data protection",
                          },
                          {
                            icon: <Users className="w-6 h-6" />,
                            title: "Expert Support",
                            desc: "Dedicated AI specialists",
                          },
                          {
                            icon: <TrendingUp className="w-6 h-6" />,
                            title: "Proven Results",
                            desc: "Thousands of successful deployments",
                          },
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20"
                          >
                            <div className="text-cyan-400 mt-1">{feature.icon}</div>
                            <div>
                              <div className="text-white font-semibold mb-1">{feature.title}</div>
                              <div className="text-gray-400 text-sm">{feature.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Agent Configuration Modal */}
      {showAgentConfig && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/30 relative">
            <button
              onClick={() => setShowAgentConfig(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Choose Your Agent Type</h2>
              <p className="text-gray-300 text-lg">
                Select from our pre-configured agents or build a completely custom solution
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Pre-configured Agents */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-6 h-6 text-emerald-400" />
                  Pre-Configured Agents
                </h3>
                <p className="text-gray-300 mb-6">Ready-to-deploy agents optimized for specific business functions</p>

                <div className="space-y-4">
                  {categories.slice(0, 3).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handlePreConfiguredAgent(category.title)}
                      className="w-full p-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/30 rounded-xl hover:border-emerald-400/50 transition-all duration-300 text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{category.icon}</div>
                        <div>
                          <div className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
                            {category.title}
                          </div>
                          <div className="text-gray-400 text-sm">{category.capability}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-emerald-400 ml-auto group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={() => handlePreConfiguredAgent()}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 rounded-xl"
                >
                  View All Pre-Configured Agents
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Custom Agent */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-cyan-400" />
                  Custom Agent
                </h3>
                <p className="text-gray-300 mb-6">
                  Build a completely custom agent tailored to your unique requirements
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <Brain className="w-6 h-6" />,
                      title: "Unlimited Customization",
                      desc: "Any workflow, any integration",
                    },
                    {
                      icon: <Target className="w-6 h-6" />,
                      title: "Unique Business Logic",
                      desc: "Built for your specific needs",
                    },
                    {
                      icon: <Users className="w-6 h-6" />,
                      title: "Expert Consultation",
                      desc: "Dedicated AI specialists",
                    },
                    {
                      icon: <Rocket className="w-6 h-6" />,
                      title: "Future-Proof Design",
                      desc: "Scales with your business",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20"
                    >
                      <div className="text-cyan-400 mt-1">{feature.icon}</div>
                      <div>
                        <div className="text-white font-semibold">{feature.title}</div>
                        <div className="text-gray-400 text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={handleCustomAgent}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 rounded-xl"
                >
                  Build Custom Agent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Not sure which option is right for you?{" "}
                <button onClick={openChat} className="text-cyan-400 hover:text-cyan-300 underline">
                  Chat with our AI consultant
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chat Interface */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl w-full max-w-4xl h-[80vh] flex flex-col border border-cyan-500/30 overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                    {chatMode === "consultant" ? (
                      <MessageCircle className="w-6 h-6 text-white" />
                    ) : chatMode === "agent" ? (
                      <Bot className="w-6 h-6 text-white" />
                    ) : (
                      <BarChart3 className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">
                      {chatMode === "consultant"
                        ? "NeuralIA AI Consultant"
                        : chatMode === "agent"
                          ? "AI Agent Builder"
                          : "AI System Builder"}
                    </h3>
                    <p className="text-cyan-400 text-sm">
                      {chatMode === "consultant"
                        ? "Ask me anything about NeuralIA"
                        : chatMode === "agent"
                          ? "Let's build your perfect AI agent"
                          : "Let's create your AI system"}
                    </p>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-4 ${message.type === "user" ? "justify-end" : "justify-start"} ${
                    message.type === "analysis" ? "justify-center" : ""
                  }`}
                >
                  {message.type === "analysis" ? (
                    <div className="max-w-md mx-auto">
                      <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          {isAnalyzing ? (
                            <Loader2 className="w-8 h-8 text-white animate-spin" />
                          ) : (
                            <CheckCircle className="w-8 h-8 text-white" />
                          )}
                        </div>
                        <div className="text-white whitespace-pre-line">{message.content}</div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {message.type === "bot" && (
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          {chatMode === "consultant" ? (
                            <MessageCircle className="w-5 h-5 text-white" />
                          ) : chatMode === "agent" ? (
                            <Bot className="w-5 h-5 text-white" />
                          ) : (
                            <BarChart3 className="w-5 h-5 text-white" />
                          )}
                        </div>
                      )}
                      <div
                        className={`max-w-md p-4 rounded-2xl ${
                          message.type === "user"
                            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white ml-auto"
                            : "bg-slate-700/50 text-white border border-cyan-500/20"
                        }`}
                      >
                        <div className="whitespace-pre-line">{message.content}</div>
                        <div className="text-xs opacity-70 mt-2">
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </div>
                      </div>
                      {message.type === "user" && (
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-4 justify-start">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {chatMode === "consultant" ? (
                      <MessageCircle className="w-5 h-5 text-white" />
                    ) : chatMode === "agent" ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <BarChart3 className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div className="bg-slate-700/50 border border-cyan-500/20 rounded-2xl p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            {quickOptions.length > 0 && (
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-2">
                  {quickOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(option.action)}
                      className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-600/30 border border-cyan-500/30 hover:border-cyan-400/50 text-cyan-400 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                    >
                      {option.icon}
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-6 border-t border-cyan-500/30 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
              <div className="flex gap-4 items-end">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={userInput + interimTranscript}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && !isSending && handleSendMessage()}
                    placeholder="Type your message..."
                    className="w-full bg-slate-700/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                    disabled={isSending}
                  />
                  {interimTranscript && (
                    <div className="absolute bottom-full left-0 right-0 bg-slate-600/90 text-gray-300 px-4 py-2 rounded-t-xl text-sm">
                      Listening: {interimTranscript}
                    </div>
                  )}
                </div>

                {/* Voice Input Button */}
                {speechSupported && (
                  <button
                    onClick={toggleRecording}
                    disabled={isSending}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isRecording
                        ? "bg-red-500 hover:bg-red-600 text-white animate-pulse"
                        : "bg-gradient-to-r from-purple-500/20 to-pink-600/20 hover:from-purple-500/30 hover:to-pink-600/30 border border-purple-500/30 hover:border-purple-400/50 text-purple-400"
                    }`}
                  >
                    {isRecording ? <Square className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                )}

                <button
                  onClick={handleSendMessage}
                  disabled={!userInput.trim() || isSending}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 animate-pulse"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}
    </div>
  )
}
