"use client"

import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap } from "lucide-react"

interface DeploymentProgressProps {
  agentName: string
  onComplete?: () => void
}

export function DeploymentProgress({ agentName, onComplete }: DeploymentProgressProps) {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Initializing deployment",
    "Setting up infrastructure",
    "Installing dependencies",
    "Configuring agent",
    "Running tests",
    "Finalizing deployment",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15
        if (newProgress >= 100) {
          clearInterval(interval)
          if (onComplete) {
            setTimeout(onComplete, 500)
          }
          return 100
        }
        return newProgress
      })
    }, 800)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * steps.length)
    setCurrentStep(Math.min(stepIndex, steps.length - 1))
  }, [progress, steps.length])

  return (
    <div className="space-y-3 p-4 bg-blue-50 rounded-lg border">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {progress >= 100 ? (
            <CheckCircle className="h-4 w-4 text-green-500" />
          ) : (
            <Zap className="h-4 w-4 text-blue-500 animate-pulse" />
          )}
          <span className="font-medium text-sm">
            {progress >= 100 ? "Deployment Complete" : `Deploying ${agentName}`}
          </span>
        </div>
        <Badge variant={progress >= 100 ? "default" : "secondary"}>{Math.round(progress)}%</Badge>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Clock className="h-3 w-3" />
        <span>{steps[currentStep]}</span>
      </div>
    </div>
  )
}
