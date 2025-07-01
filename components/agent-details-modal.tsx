"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Star, Zap, Brain, MessageSquare, Cpu, Network, Database, Shield } from "lucide-react"

interface Agent {
  id: string
  name: string
  description: string
  price: number
  category: string
  rating?: number
  reviews?: number
  features?: string[]
  capabilities?: string[]
  expertise?: string[]
  neuralSpecs?: {
    parameters: string
    architecture: string
    trainingData: string
    processingSpeed: string
    accuracy: string
  }
}

interface AgentDetailsModalProps {
  agent: Agent | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddToCart?: (agent: Agent) => void
}

export function AgentDetailsModal({ agent, open, onOpenChange, onAddToCart }: AgentDetailsModalProps) {
  const { addToCart, items } = useCart()

  if (!agent) return null

  const isInCart = items.some((item) => item.id === agent.id)

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(agent)
    } else {
      addToCart(agent)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="relative">
              <Brain className="h-8 w-8 text-purple-400" />
              <div className="absolute inset-0 h-8 w-8 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            {agent.name}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Detailed specifications and capabilities of this neural network agent
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8">
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                {agent.category}
              </Badge>
              {agent.rating && (
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                  <span className="text-sm text-gray-400">({agent.reviews} neural tests)</span>
                </div>
              )}
            </div>

            <p className="text-gray-300 leading-relaxed text-lg">{agent.description}</p>
          </div>

          {/* Neural Specifications */}
          {agent.neuralSpecs && (
            <>
              <Separator className="bg-purple-500/20" />
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-purple-400" />
                  Neural Network Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Network className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-purple-300">Neural Parameters</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{agent.neuralSpecs.parameters}</div>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-green-400" />
                      <span className="text-sm text-green-300">Accuracy Rate</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{agent.neuralSpecs.accuracy}</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-blue-300">Training Data</span>
                    </div>
                    <div className="text-lg font-bold text-white">{agent.neuralSpecs.trainingData}</div>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-orange-400" />
                      <span className="text-sm text-orange-300">Processing Speed</span>
                    </div>
                    <div className="text-lg font-bold text-white">{agent.neuralSpecs.processingSpeed}</div>
                  </div>
                </div>
                <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-300">Neural Architecture</span>
                  </div>
                  <div className="text-white font-medium">{agent.neuralSpecs.architecture}</div>
                </div>
              </div>
            </>
          )}

          {/* Neural Capabilities */}
          {agent.capabilities && agent.capabilities.length > 0 && (
            <>
              <Separator className="bg-purple-500/20" />
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-purple-400" />
                  Advanced Neural Capabilities
                </h3>
                <div className="grid gap-3">
                  {agent.capabilities.map((capability, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 bg-purple-500/5 border border-purple-500/20 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Expertise Areas */}
          {agent.expertise && agent.expertise.length > 0 && (
            <>
              <Separator className="bg-purple-500/20" />
              <div className="space-y-4">
                <h3 className="font-semibold text-xl flex items-center gap-2">
                  <Zap className="h-5 w-5 text-purple-400" />
                  Neural Expertise Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agent.expertise.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm border-purple-500/50 text-purple-300 bg-purple-500/10"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Pricing & Actions */}
          <Separator className="bg-purple-500/20" />
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">5 Days Free Trial</div>
              <div className="text-lg text-white">Then ${agent.price} USDT for unlimited neural access</div>
              <div className="text-sm text-gray-400">Full neural network capabilities included</div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isInCart}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-3"
            >
              <Brain className="mr-2 h-5 w-5" />
              {isInCart ? "Added to Neural Cart" : "Deploy Neural Network"}
            </Button>
          </div>

          {/* Neural Trial Info */}
          <div className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg">
            <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Neural Network Trial Included
            </h4>
            <p className="text-gray-300">
              Experience the full power of this neural network for 5 days completely free. Access all{" "}
              {agent.neuralSpecs?.parameters} parameters, quantum processing capabilities, and enterprise-grade
              security. Upgrade anytime with USDT for unlimited neural access.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AgentDetailsModal
