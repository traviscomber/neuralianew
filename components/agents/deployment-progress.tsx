"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Zap, Crown } from "lucide-react"

interface DeploymentProgressProps {
  agentName: string
  agentType: string
  onComplete?: () => void
}

const deploymentSteps = [
  { name: "Initializing AI Core", duration: 2000 },
  { name: "Loading Knowledge Base", duration: 3000 },
  { name: "Configuring Neural Networks", duration: 2500 },
  { name: "Establishing Secure Connections", duration: 1500 },
  { name: "Running System Diagnostics", duration: 2000 },
  { name: "Finalizing Deployment", duration: 1000 },
]

export function DeploymentProgress({ agentName, agentType, onComplete }: DeploymentProgressProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const isCEO = agentType === "ceo-neural-agent"

  useEffect(() => {
    if (currentStep >= deploymentSteps.length) {
      setIsComplete(true)
      setProgress(100)
      if (onComplete) {
        setTimeout(onComplete, 1000)
      }
      return
    }

    const step = deploymentSteps[currentStep]
    const stepProgress = (currentStep / deploymentSteps.length) * 100

    setProgress(stepProgress)

    const timer = setTimeout(() => {
      setCurrentStep(currentStep + 1)
    }, step.duration)

    return () => clearTimeout(timer)
  }, [currentStep, onComplete])

  return (
    <Card className={`w-full max-w-md mx-auto ${isCEO ? "border-purple-200 bg-purple-50/50" : ""}`}>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-2">
          {isComplete ? (
            <CheckCircle className="h-8 w-8 text-green-500" />
          ) : (
            <div className="relative">
              <Zap className={`h-8 w-8 ${isCEO ? "text-purple-600" : "text-blue-600"} animate-pulse`} />
              {isCEO && <Crown className="absolute -top-1 -right-1 h-4 w-4 text-purple-600" />}
            </div>
          )}
        </div>
        <CardTitle className={`text-lg ${isCEO ? "text-purple-800" : ""}`}>
          {isComplete ? "Deployment Complete!" : "Deploying AI Agent"}
        </CardTitle>
        <CardDescription>
          {isComplete ? `${agentName} is now ready for use` : `Setting up ${agentName}...`}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-2">
          {deploymentSteps.map((step, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              {index < currentStep ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : index === currentStep ? (
                <Clock className={`h-4 w-4 ${isCEO ? "text-purple-500" : "text-blue-500"} animate-spin`} />
              ) : (
                <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
              )}
              <span
                className={
                  index < currentStep
                    ? "text-green-600"
                    : index === currentStep
                      ? isCEO
                        ? "text-purple-600 font-medium"
                        : "text-blue-600 font-medium"
                      : "text-gray-400"
                }
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>

        {isComplete && (
          <div className="text-center pt-2">
            <Badge className={`${isCEO ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"}`}>
              <CheckCircle className="mr-1 h-3 w-3" />
              Ready to Chat
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
