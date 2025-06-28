"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  type: "bot" | "user"
  content: string
}

interface QuickOption {
  text: string
  action: string
}

export default function NeuralIALanding() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content:
        "Hi! I'm your AI consultant. I'll help you understand which AI agent would be perfect for your business. What's your main challenge?",
    },
  ])
  const [quickOptions, setQuickOptions] = useState<QuickOption[]>([
    { text: "Too many customer inquiries", action: "Too many customer inquiries" },
    { text: "Need more sales leads", action: "Need more sales leads" },
    { text: "Hiring takes too long", action: "Hiring takes too long" },
    { text: "Manual processes", action: "Manual processes" },
  ])
  const [userInput, setUserInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const categories = [
    {
      id: "customer-service",
      icon: "💬",
      title: "Customer Service",
      description: "24/7 support agents that never sleep",
    },
    { id: "sales", icon: "💰", title: "Sales & Lead Generation", description: "Smart agents that convert prospects" },
    { id: "hr", icon: "👥", title: "HR & Recruitment", description: "Streamline hiring and employee support" },
    {
      id: "operations",
      icon: "⚙️",
      title: "Operations & Automation",
      description: "Automate repetitive business processes",
    },
    { id: "marketing", icon: "📈", title: "Marketing & Content", description: "AI-powered marketing campaigns" },
    { id: "data", icon: "📊", title: "Data Analysis", description: "Turn data into actionable insights" },
  ]

  const categoryNames: { [key: string]: string } = {
    "customer-service": "Customer Service",
    sales: "Sales & Lead Generation",
    hr: "HR & Recruitment",
    operations: "Operations & Automation",
    marketing: "Marketing & Content",
    data: "Data Analysis",
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addBotMessage = (content: string) => {
    setMessages((prev) => [...prev, { type: "bot", content }])
  }

  const addUserMessage = (content: string) => {
    setMessages((prev) => [...prev, { type: "user", content }])
  }

  const sendToAI = async (userMessageContent: string) => {
    setIsSending(true)
    setQuickOptions([]) // Clear quick options once user sends a message

    const conversationHistory = [
      ...messages,
      { type: "user", content: userMessageContent }, // Add current user message to history
    ].map((msg) => ({
      role: msg.type === "bot" ? "assistant" : "user",
      content: msg.content,
    }))

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
    // Guide the AI to use the data it has
    await sendToAI(
      `I'm interested in ${categoryName}. Based on the NeuralIA data you have, please tell me about the benefits, examples, and ROI for this type of AI agent.`,
    )
  }

  const handleQuickResponse = async (response: string) => {
    addUserMessage(response)
    // Guide the AI to use the data it has or respond appropriately
    if (response === "Too many customer inquiries") {
      await sendToAI(
        "My main challenge is too many customer inquiries. How can a NeuralIA customer service AI agent help with this, specifically referencing its benefits and ROI?",
      )
    } else if (response === "Need more sales leads") {
      await sendToAI(
        "My main challenge is needing more sales leads. How can a NeuralIA sales AI agent help with this, specifically referencing its benefits and ROI?",
      )
    } else if (response === "Hiring takes too long") {
      await sendToAI(
        "My main challenge is that hiring takes too long. How can a NeuralIA HR AI agent help with this, specifically referencing its benefits and ROI?",
      )
    } else if (response === "Manual processes") {
      await sendToAI(
        "My main challenge is manual processes. How can a NeuralIA operations AI agent help with this, specifically referencing its benefits and ROI?",
      )
    } else if (response === "Schedule Demo") {
      await sendToAI("I'd like to schedule a demo. What's the best way to do that?")
    } else if (response === "See Pricing") {
      await sendToAI("I'd like to see pricing. Can you tell me about the cost of NeuralIA agents?")
    } else if (response === "Ask Questions") {
      await sendToAI("I have more questions. What else can you tell me about NeuralIA agents?")
    } else {
      await sendToAI(response) // Fallback for other quick responses
    }
  }

  const handleSendMessage = async () => {
    if (userInput.trim()) {
      const messageToSend = userInput.trim()
      setUserInput("")
      await sendToAI(messageToSend)
    }
  }

  const openChat = () => {
    setChatOpen(true)
    // Initial quick options are set by default state
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-700">
      <div className="max-w-6xl mx-auto px-5 py-5">
        {/* Header */}
        <header className="text-center text-white py-10">
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">🤖 NeuralIA</h1>
          <p className="text-xl opacity-90 mb-8">Your AI Agent Factory - Transforming Business with Smart Automation</p>
        </header>

        {/* Main Content */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl mb-8">
          {/* How It Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">How It Works - Simple as 1-2-3</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "1",
                  title: "Choose Your Category",
                  description: "Select the business area where you need AI assistance",
                },
                {
                  number: "2",
                  title: "Chat with Our Expert",
                  description: "Our AI consultant understands your specific needs",
                },
                {
                  number: "3",
                  title: "Get Your Custom Agent",
                  description: "Receive a tailored AI agent that works 24/7 for your business",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl text-white transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">What Can We Build For You?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-green-400 to-cyan-400 text-white border-0 ${
                    selectedCategory === category.id ? "scale-105 shadow-xl" : ""
                  }`}
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg mb-6">Join thousands of companies using AI to boost productivity and drive growth</p>
            <Button
              onClick={openChat}
              className="bg-white text-pink-500 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform duration-300"
            >
              Start Building Your AI Agent
            </Button>
          </section>
        </div>
      </div>

      {/* Chat Toggle Button */}
      <Button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg transform hover:scale-110 transition-all duration-300 z-50"
      >
        {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chatbot Container */}
      {chatOpen && (
        <div className="fixed bottom-32 right-8 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col z-40">
          {/* Chat Header */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 rounded-t-3xl text-center">
            <h3 className="text-lg font-semibold">🤖 AI Consultant</h3>
            <p className="text-sm opacity-90">Let's find the perfect AI solution for you!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.type === "bot" ? "bg-blue-50 text-gray-800" : "bg-indigo-500 text-white ml-auto"
                }`}
              >
                {message.content}
              </div>
            ))}
            {quickOptions.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {quickOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleQuickResponse(option.action)}
                    variant="outline"
                    size="sm"
                    className="bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600 rounded-full text-xs"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Scroll to bottom */}
          </div>

          {/* Input */}
          <div className="p-6 bg-white rounded-b-3xl flex gap-3">
            <Input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !isSending && handleSendMessage()}
              placeholder={isSending ? "AI is typing..." : "Type your message..."}
              className="flex-1 rounded-full border-gray-300"
              disabled={isSending}
            />
            <Button
              onClick={handleSendMessage}
              className="w-10 h-10 rounded-full bg-indigo-500 hover:bg-indigo-600 p-0"
              disabled={isSending}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
