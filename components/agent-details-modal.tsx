"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Plus, Zap, MessageSquare } from "lucide-react"

interface AgentDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  agentId: string
  onAddToCart: (agent: any) => void
  onDeployAgent: (agent: any) => void
  isInCart: boolean
  isDeployed: boolean
  isDeploying: boolean
}

// Mock agent data - in real app this would come from props or API
const agentDetails = {
  "ceo-neural-agent": {
    id: "ceo-neural-agent",
    name: "CEO Neural Agent",
    description:
      "Executive-level AI orchestrator that manages all business operations with C-suite intelligence and strategic oversight",
    price: 0,
    features: [
      "Executive Strategic Planning",
      "Cross-Functional Orchestration",
      "Performance Optimization",
      "Risk Management & Decision Support",
      "Board-Level Reporting",
      "Strategic Vision Development",
    ],
    capabilities: [
      "Advanced decision-making algorithms",
      "Multi-departmental coordination",
      "Real-time performance analytics",
      "Predictive business modeling",
    ],
  },
  "hr-advisory": {
    id: "hr-advisory",
    name: "HR Advisory Expert",
    description:
      "Comprehensive human resources expertise covering policy development, employee relations, and strategic workforce management",
    price: 299,
    features: [
      "Employee Relations Management",
      "Policy Development & Compliance",
      "Performance Management",
      "Talent Strategy",
      "Compensation Analysis",
      "Training & Development",
    ],
    capabilities: [
      "HR policy automation",
      "Employee sentiment analysis",
      "Compliance monitoring",
      "Talent acquisition optimization",
    ],
  },
}

export function AgentDetailsModal({
  isOpen,
  onClose,
  agentId,
  onAddToCart,
  onDeployAgent,
  isInCart,
  isDeployed,
  isDeploying,
}: AgentDetailsModalProps) {
  const agent = agentDetails[agentId as keyof typeof agentDetails]

  if (!agent) return null

  const getActionButton = () => {
    if (isDeployed) {
      return (
        <Button className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chat Now
        </Button>
      )
    }

    if (isDeploying) {
      return (
        <Button disabled className="w-full">
          Deploying...
        </Button>
      )
    }

    if (isInCart) {
      return (
        <Button onClick={() => onDeployAgent(agent)} className="w-full">
          <Zap className="mr-2 h-4 w-4" />
          Deploy Now
        </Button>
      )
    }

    return (
      <Button onClick={() => onAddToCart(agent)} className="w-full">
        <Plus className="mr-2 h-4 w-4" />
        Add to Cart
      </Button>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {agent.name}
            {agent.price === 0 && <Badge variant="secondary">Free</Badge>}
          </DialogTitle>
          <DialogDescription>{agent.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="grid grid-cols-1 gap-2">
              {agent.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Core Capabilities</h3>
            <div className="grid grid-cols-1 gap-2">
              {agent.capabilities.map((capability, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">{agent.price === 0 ? "Free" : `$${agent.price}`}</span>
            </div>
            {getActionButton()}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
