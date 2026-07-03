"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Briefcase, Heart, MessageCircle } from "lucide-react"

interface NameCollectionModalProps {
  isOpen: boolean
  onComplete: (name: string, style: "professional" | "friendly" | "casual") => void
}

const communicationStyles = [
  {
    id: "professional" as const,
    name: "Professional",
    icon: Briefcase,
    description: "Formal, business-appropriate communication",
    example: "Good day, Sarah. How may I assist you with your business needs today?",
    color: "border-blue-200 bg-blue-50",
  },
  {
    id: "friendly" as const,
    name: "Friendly",
    icon: Heart,
    description: "Warm, approachable, and encouraging",
    example: "Hello Sarah! I'm excited to help you with whatever you need today!",
    color: "border-green-200 bg-green-50",
  },
  {
    id: "casual" as const,
    name: "Casual",
    icon: MessageCircle,
    description: "Relaxed, conversational, and personable",
    example: "Hey Sarah! What's up? How can I help you out today?",
    color: "border-purple-200 bg-purple-50",
  },
]

export function NameCollectionModal({ isOpen, onComplete }: NameCollectionModalProps) {
  const [name, setName] = useState("")
  const [selectedStyle, setSelectedStyle] = useState<"professional" | "friendly" | "casual">("friendly")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!name.trim()) return

    setIsLoading(true)
    try {
      await onComplete(name.trim(), selectedStyle)
    } catch (error) {
      console.error("Error saving preferences:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && name.trim()) {
      handleSubmit()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <User className="mr-2 h-6 w-6 text-purple-600" />
            Let's Personalize Your Experience
          </DialogTitle>
          <DialogDescription>
            Help us create a personalized experience by telling us your preferred name and communication style.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-medium">
              What should we call you?
            </Label>
            <Input
              id="name"
              placeholder="Enter your preferred name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-base"
              autoFocus
            />
            <p className="text-sm text-gray-500">This is how all your AI agents will address you.</p>
          </div>

          {/* Communication Style Selection */}
          <div className="space-y-3">
            <Label className="text-base font-medium">How would you like your agents to communicate?</Label>
            <div className="grid gap-3">
              {communicationStyles.map((style) => {
                const Icon = style.icon
                return (
                  <Card
                    key={style.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedStyle === style.id
                        ? `ring-2 ring-purple-500 ${style.color}`
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedStyle(style.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon className="h-5 w-5 text-gray-600" />
                          <CardTitle className="text-base">{style.name}</CardTitle>
                        </div>
                        {selectedStyle === style.id && <Badge className="bg-purple-600 text-white">Selected</Badge>}
                      </div>
                      <CardDescription className="text-sm">{style.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="bg-white p-3 rounded border-l-4 border-l-gray-300">
                        <p className="text-sm italic text-gray-700">"{style.example}"</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              onClick={handleSubmit}
              disabled={!name.trim() || isLoading}
              className="bg-purple-600 hover:bg-purple-700 px-8"
            >
              {isLoading ? "Setting up..." : "Get Started"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
