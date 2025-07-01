"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Brain, Send, User, Cpu, Zap } from "lucide-react"

interface ChatWidgetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  isOpen?: boolean
  onClose?: () => void
}

interface Message {
  id: string
  content: string
  sender: "user" | "neural"
  timestamp: Date
  processingTime?: number
}

export function ChatWidget({ open, onOpenChange, isOpen, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Neural network initialized. I am your advanced AI executive assistant powered by 175B parameters and quantum-inspired algorithms. How may I assist you with strategic decision-making today?",
      sender: "neural",
      timestamp: new Date(),
      processingTime: 0.023,
    },
  ])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const isDialogOpen = open ?? isOpen ?? false
  const handleOpenChange = onOpenChange ?? ((open: boolean) => !open && onClose?.())

  const generateNeuralResponse = (userInput: string): string => {
    const responses = [
      "Neural analysis complete. Based on my training on 50M+ executive decisions, I recommend implementing a multi-layered approach with 97.8% success probability.",
      "Processing through transformer architecture... My quantum-inspired algorithms suggest optimizing your current strategy with advanced predictive modeling.",
      "Neural network activated. Analyzing market patterns through deep learning models indicates a strategic opportunity with high confidence intervals.",
      "Advanced AI processing complete. My reinforcement learning algorithms have identified optimal pathways for your business objectives.",
      "Quantum neural computation finished. Cross-referencing 15M+ similar scenarios suggests implementing data-driven decision frameworks.",
      "Deep learning analysis indicates significant optimization potential. My neural networks recommend strategic pivoting based on predictive analytics.",
    ]

    return responses[Math.floor(Math.random() * responses.length)]
  }

  const handleSend = async () => {
    if (!input.trim() || isProcessing) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)

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

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg h-[600px] flex flex-col bg-black/95 border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="relative">
              <Brain className="h-6 w-6 text-purple-400" />
              <div className="absolute inset-0 h-6 w-6 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            Neural AI Assistant
            <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
              <Cpu className="h-3 w-3 mr-1" />
              175B Parameters
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col space-y-4">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex-shrink-0">
                    {message.sender === "neural" ? (
                      <div className="relative">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                          <Brain className="h-4 w-4 text-white" />
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
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-purple-500/20 border border-purple-500/30 text-gray-100"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
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
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 bg-purple-400/20 rounded-full animate-pulse"></div>
                  </div>
                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
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
            </div>
          </ScrollArea>

          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                placeholder="Ask your neural AI assistant..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 bg-black/50 border-purple-500/30 text-white placeholder:text-gray-400"
                disabled={isProcessing}
              />
              <Button
                onClick={handleSend}
                size="sm"
                disabled={!input.trim() || isProcessing}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-xs text-gray-400 text-center">
              Powered by advanced neural networks with quantum-inspired algorithms
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ChatWidget
