"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface DeploymentProgressProps {
  onAgentReady: (agentId: string) => void
}

export function DeploymentProgress({ onAgentReady }: DeploymentProgressProps) {
  const { deployingAgents, markAgentAsDeployed } = useCart()
  const [agentProgress, setAgentProgress] = useState<Record<string, number>>({})
  const [completedAgents, setCompletedAgents] = useState<Set<string>>(new Set())

  // Memoized callback to handle agent completion
  const handleAgentCompletion = useCallback(
    (agentId: string) => {
      setCompletedAgents((prev) => {
        if (prev.has(agentId)) return prev

        const newCompleted = new Set(prev)
        newCompleted.add(agentId)

        // Schedule state updates for next tick to avoid render cycle issues
        setTimeout(() => {
          markAgentAsDeployed(agentId)
          onAgentReady(agentId)
        }, 0)

        return newCompleted
      })
    },
    [markAgentAsDeployed, onAgentReady],
  )

  useEffect(() => {
    if (deployingAgents.length === 0) return

    const intervals: Record<string, NodeJS.Timeout> = {}

    deployingAgents.forEach((agent) => {
      // Skip if already completed
      if (completedAgents.has(agent.id)) return

      // Initialize progress if not exists
      setAgentProgress((prev) => ({
        ...prev,
        [agent.id]: prev[agent.id] || 0,
      }))

      // Create interval for this agent
      intervals[agent.id] = setInterval(
        () => {
          setAgentProgress((prev) => {
            const currentProgress = prev[agent.id] || 0

            // If already at 100%, don't update
            if (currentProgress >= 100) {
              return prev
            }

            const increment = Math.random() * 15 + 5 // 5-20% increments
            const newProgress = Math.min(currentProgress + increment, 100)

            // If reached 100%, schedule completion
            if (newProgress >= 100) {
              // Clear this interval
              clearInterval(intervals[agent.id])
              delete intervals[agent.id]

              // Handle completion asynchronously
              setTimeout(() => {
                handleAgentCompletion(agent.id)
              }, 500)
            }

            return { ...prev, [agent.id]: newProgress }
          })
        },
        800 + Math.random() * 400,
      ) // Random interval between 800-1200ms
    })

    // Cleanup function
    return () => {
      Object.values(intervals).forEach(clearInterval)
    }
  }, [deployingAgents, completedAgents, handleAgentCompletion])

  if (deployingAgents.length === 0) {
    return null
  }

  const getProgressPhase = (progress: number) => {
    if (progress < 25) return "Initializing"
    if (progress < 50) return "Configuring"
    if (progress < 75) return "Training"
    if (progress < 100) return "Finalizing"
    return "Complete"
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Deployment Progress</h2>
        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
          {deployingAgents.length} Deploying
        </Badge>
      </div>

      <div className="grid gap-4">
        {deployingAgents.map((agent) => {
          const progress = agentProgress[agent.id] || 0
          const phase = getProgressPhase(progress)
          const isComplete = progress >= 100

          return (
            <Card key={agent.id} className="border-l-4 border-l-blue-500">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{agent.icon}</div>
                    <div>
                      <CardTitle className="text-base">{agent.name}</CardTitle>
                      <CardDescription className="text-sm">{agent.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {isComplete ? (
                      <Badge className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        Ready
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <Clock className="mr-1 h-3 w-3" />
                        {phase}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Deployment Progress</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{phase}</span>
                    <span>
                      {isComplete ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Deployment Complete
                        </span>
                      ) : (
                        `ETA: ${Math.max(1, Math.ceil((100 - progress) / 10))} min`
                      )}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
