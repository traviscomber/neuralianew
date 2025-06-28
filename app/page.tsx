"use client"

import { useEffect } from "react"
import { useRef } from "react"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp,
  Zap,
  Brain,
  Target,
  Shield,
  Mic,
  MicOff,
  Square,
} from "lucide-react"

interface Message {
  type: "bot" | "user"
  content: string
  timestamp: Date
}

interface QuickOption {
  text: string
  action: string
  icon?: React.ReactNode
}

interface ROIMetric {
  label: string
  value: string
  change: string
  icon: React.ReactNode
}

export default function NeuralIALanding() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Hi! I'm your AI consultant. I'll help you understand which AI agent would be perfect for your business. What's your main challenge?",
      timestamp: new Date(),
    },
  ])
  const [quickOptions, setQuickOptions] = useState<QuickOption[]>([])
  const [userInput, setUserInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Simplified Speech-to-Text states
  const [isRecording, setIsRecording] = useState(false)
  const [speechSupported, setSpeechSupported] = useState(false)
  const [recognition, setRecognition] = useState<any>(null)
  const [interimTranscript, setInterimTranscript] = useState("")

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const categories = [
    {
      id: "customer-service",
      icon: "💬",
      title: "Customer Service",
      description: "24/7 support agents that never sleep",
      metrics: { efficiency: "80%", response: "< 2s", satisfaction: "95%" },
    },
    {
      id: "sales",
      icon: "💰",
      title: "Sales & Lead Generation",
      description: "Smart agents that convert prospects",
      metrics: { conversion: "40%", leads: "3x", closure: "50%" },
    },
    {
      id: "hr",
      icon: "👥",
      title: "HR & Recruitment",
      description: "Streamline hiring and employee support",
      metrics: { screening: "60%", quality: "40%", time: "50%" },
    },
    {
      id: "operations",
      icon: "⚙️",
      title: "Operations & Automation",
      description: "Automate repetitive business processes",
      metrics: { automation: "70%", accuracy: "30%", efficiency: "50%" },
    },
    {
      id: "marketing",
      icon: "📈",
      title: "Marketing & Content",
      description: "AI-powered marketing campaigns",
      metrics: { engagement: "40%", reach: "60%", roi: "25%" },
    },
    {
      id: "data",
      icon: "📊",
      title: "Data Analysis",
      description: "Turn data into actionable insights",
      metrics: { speed: "60%", accuracy: "35%", insights: "80%" },
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Inc",
      role: "CEO",
      content:
        "NeuralIA transformed our customer service. We went from 4-hour response times to instant replies. Our customer satisfaction jumped 40%!",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "4h response", after: "Instant", improvement: "40% satisfaction" },
    },
    {
      name: "Marcus Rodriguez",
      company: "GrowthLabs",
      role: "Sales Director",
      content:
        "The sales AI agent qualified 3x more leads than our human team. We closed 50% more deals in the first month alone.",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "100 leads/month", after: "300 leads/month", improvement: "50% more deals" },
    },
    {
      name: "Emily Watson",
      company: "InnovateCorp",
      role: "HR Manager",
      content:
        "Hiring used to take 6 weeks. Now we screen candidates in days and find better matches. Game-changer for our recruitment.",
      avatar: "/placeholder-user.jpg",
      metrics: { before: "6 weeks", after: "1 week", improvement: "Better quality" },
    },
  ]

  const roiMetrics = [
    { label: "Average ROI", value: "340%", change: "+15% this month", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Time Saved", value: "25hrs/week", change: "+8hrs this month", icon: <Clock className="w-5 h-5" /> },
    { label: "Cost Reduction", value: "60%", change: "+12% this month", icon: <Target className="w-5 h-5" /> },
    {
      label: "Customer Satisfaction",
      value: "94%",
      change: "+18% this month",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ]

  const categoryNames: { [key: string]: string } = {
    "customer-service": "Customer Service",
    sales: "Sales & Lead Generation",
    hr: "HR & Recruitment",
    operations: "Operations & Automation",
    marketing: "Marketing & Content",
    data: "Data Analysis",
  }

  // Simplified Speech Recognition Setup
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

    const conversationHistory = [...messages, { type: "user", content: userMessageContent, timestamp: new Date() }].map(
      (msg) => ({
        role: msg.type === "bot" ? "assistant" : "user",
        content: msg.content,
      }),
    )

    await simulateTyping()

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: conversationHistory }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      addBotMessage(data.text)

      // Add contextual quick options based on the conversation
      setTimeout(() => {
        setQuickOptions([
          { text: "Schedule Demo", action: "Schedule Demo", icon: <Shield className="w-4 h-4" /> },
          { text: "See Pricing", action: "See Pricing", icon: <Zap className="w-4 h-4" /> },
          { text: "Ask Questions", action: "Ask Questions", icon: <Brain className="w-4 h-4" /> },
        ])
      }, 1000)
    } catch (error) {
      console.error("Error sending message to AI:", error)
      addBotMessage("Oops! Something went wrong. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  const handleCategorySelect = async (categoryId: string) => {
    setSelectedCategory(categoryId)
    setChatOpen(true)

    const categoryName = categoryNames[categoryId]
    addUserMessage(`I'm interested in ${categoryName}`)
    await sendToAI(
      `I'm interested in ${categoryName}. Based on the NeuralIA data you have, please tell me about the benefits, examples, and ROI for this type of AI agent.`,
    )
  }

  const handleQuickResponse = async (response: string) => {
    addUserMessage(response)

    const responseMap: { [key: string]: string } = {
      "Too many customer inquiries":
        "My main challenge is too many customer inquiries. How can a NeuralIA customer service AI agent help with this, specifically referencing its benefits and ROI?",
      "Need more sales leads":
        "My main challenge is needing more sales leads. How can a NeuralIA sales AI agent help with this, specifically referencing its benefits and ROI?",
      "Hiring takes too long":
        "My main challenge is that hiring takes too long. How can a NeuralIA HR AI agent help with this, specifically referencing its benefits and ROI?",
      "Manual processes":
        "My main challenge is manual processes. How can a NeuralIA operations AI agent help with this, specifically referencing its benefits and ROI?",
      "Schedule Demo": "I'd like to schedule a demo. What's the best way to do that?",
      "See Pricing": "I'd like to see pricing. Can you tell me about the cost of NeuralIA agents?",
      "Ask Questions": "I have more questions. What else can you tell me about NeuralIA agents?",
    }

    await sendToAI(responseMap[response] || response)
  }

  const handleSendMessage = async () => {
    const messageToSend = userInput.trim()
    if (messageToSend) {
      setUserInput("")
      setInterimTranscript("")
      addUserMessage(messageToSend)
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
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Animated background elements - slower and more random */}
      <div className="fixed inset-0 overflow-hidden z-0">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-screen filter blur-xl opacity-10 animate-pulse"
          style={{ animationDuration: "5.5s", animationDelay: "1.7s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-300 rounded-full mix-blend-screen filter blur-xl opacity-5 animate-pulse"
          style={{ animationDuration: "6.2s", animationDelay: "2.9s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-60 h-60 bg-cyan-600 rounded-full mix-blend-screen filter blur-xl opacity-7 animate-pulse"
          style={{ animationDuration: "4.8s", animationDelay: "0.8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-60 h-60 bg-cyan-200 rounded-full mix-blend-screen filter blur-xl opacity-7 animate-pulse"
          style={{ animationDuration: "5.1s", animationDelay: "3.4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-40 h-40 bg-cyan-500 rounded-full mix-blend-screen filter blur-xl opacity-6 animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-2/3 w-50 h-50 bg-cyan-300 rounded-full mix-blend-screen filter blur-xl opacity-8 animate-pulse"
          style={{ animationDuration: "4.3s", animationDelay: "2.1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 py-5 z-10">
        {/* Enhanced Header */}
        <header className="text-center text-white py-16 relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium">Trusted by 10,000+ businesses worldwide</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            🤖{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">NeuralIA</span>
          </h1>
          <p className="text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your AI Agent Factory - Transforming Business with Smart Automation
          </p>

          <Button
            onClick={openChat}
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            Start Building Your AI Agent <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </header>

        {/* Main Content - Now with 60% opacity background */}
        <div className="backdrop-blur-sm rounded-3xl p-10 shadow-2xl mb-8 bg-black/60">
          {/* How It Works Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">How It Works</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Get your custom AI agent up and running in minutes, not months
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Choose Your Category",
                  description: "Select the business area where you need AI assistance",
                  icon: <Target className="w-8 h-8" />,
                  time: "30 seconds",
                },
                {
                  number: "2",
                  title: "Chat with Our Expert",
                  description: "Our AI consultant understands your specific needs",
                  icon: <Brain className="w-8 h-8" />,
                  time: "5 minutes",
                },
                {
                  number: "3",
                  title: "Get Your Custom Agent",
                  description: "Receive a tailored AI agent that works 24/7 for your business",
                  icon: <Zap className="w-8 h-8" />,
                  time: "24 hours",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-8 bg-black text-white rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-xl group border border-cyan-500/20"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  <div className="mb-4 flex justify-center text-cyan-400">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="mb-4 text-gray-300">{step.description}</p>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{step.time}</Badge>

                  {index < 2 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-cyan-500/50 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Proven Results Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Proven Results</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Real metrics from businesses using NeuralIA AI agents
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {roiMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-black text-white rounded-2xl p-6 border border-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300 shadow-xl group"
                >
                  <div className="flex items-center gap-3 mb-4 text-cyan-400">
                    {metric.icon}
                    <span className="text-sm font-medium opacity-80">{metric.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-cyan-400 text-sm">{metric.change}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Enhanced Categories Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">What Can We Build For You?</h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose from our proven AI agent categories, each with real-world results
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black text-white border-cyan-500/20 relative overflow-hidden group ${
                    selectedCategory === category.id ? "scale-105 shadow-2xl ring-4 ring-cyan-500/50" : ""
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <CardContent className="p-6 relative z-10">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-sm opacity-90 mb-4 text-gray-300">{category.description}</p>

                    {/* Metrics Preview */}
                    <div className="space-y-2">
                      {Object.entries(category.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center text-sm">
                          <span className="capitalize opacity-80">{key}:</span>
                          <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">+{value}</Badge>
                        </div>
                      ))}
                    </div>

                    {hoveredCategory === category.id && (
                      <div className="absolute inset-0 bg-cyan-500/10 flex items-center justify-center">
                        <Button className="bg-cyan-500 text-black hover:bg-cyan-600">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>

                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              ))}
            </div>
          </section>

          {/* Social Proof Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Trusted by Industry Leaders</h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              See how businesses like yours are transforming with NeuralIA
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
                  <p className="text-xl text-white mb-6 leading-relaxed">{testimonials[currentTestimonial].content}</p>

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
                <span className="text-sm font-medium">30-day money-back guarantee</span>
              </div>

              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Join thousands of companies using AI to boost productivity and drive growth. Start seeing results in 24
                hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  onClick={openChat}
                  className="bg-cyan-500 text-black hover:bg-cyan-600 font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Start Building Your AI Agent
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 bg-transparent"
                >
                  Watch Demo Video
                </Button>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full translate-y-24 -translate-x-24"></div>
          </section>
        </div>
      </div>

      {/* Enhanced Chat Toggle Button */}
      <div className="fixed bottom-8 right-8 z-50">
        {!chatOpen && (
          <div className="absolute -top-12 right-0 bg-black text-cyan-400 px-3 py-1 rounded-lg text-sm whitespace-nowrap animate-bounce border border-cyan-500/30">
            💬 Chat with AI Expert
          </div>
        )}
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black shadow-2xl transform hover:scale-110 transition-all duration-300 relative"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!chatOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Enhanced Chatbot Container */}
      {chatOpen && (
        <div className="fixed bottom-32 right-8 w-96 h-[600px] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl flex flex-col z-40 border border-cyan-500/20 overflow-hidden">
          {/* Enhanced Chat Header */}
          <div className="bg-black text-white p-6 rounded-t-3xl relative overflow-hidden border-b border-cyan-500/20">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  🤖
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Consultant</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Online • Avg response: 2s</span>
                  </div>
                </div>
              </div>
              <p className="text-sm opacity-90">Let's find the perfect AI solution for you!</p>

              {/* Speech Recognition Status */}
              {speechSupported && (
                <div className="mt-2 text-xs opacity-75 flex items-center gap-2">
                  <Mic className="w-3 h-3" />
                  <span>Voice input available • Click mic to speak</span>
                </div>
              )}
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -translate-y-16 translate-x-16"></div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-4 rounded-2xl relative ${
                  message.type === "bot"
                    ? "bg-white text-gray-800 shadow-sm border border-gray-100"
                    : "bg-black text-white ml-auto shadow-lg border border-cyan-500/20"
                }`}
              >
                <div className="text-sm">{message.content}</div>
                <div
                  className={`text-xs mt-2 opacity-60 ${message.type === "bot" ? "text-gray-500" : "text-gray-300"}`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>

                {message.type === "bot" && (
                  <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white"></div>
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
                  <span className="text-sm text-gray-500">AI is thinking...</span>
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
                        ? "AI is typing..."
                        : "Type your message or use voice..."
                  }
                  className="w-full rounded-full border-gray-300 pr-12 py-3 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  disabled={isSending}
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
                  disabled={isSending}
                  title={isRecording ? "Stop voice input" : "Start voice input"}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </Button>
              )}

              <Button
                onClick={handleSendMessage}
                className="w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black p-0 shadow-lg transform hover:scale-105 transition-all duration-200"
                disabled={isSending || !userInput.trim() || isRecording}
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
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
