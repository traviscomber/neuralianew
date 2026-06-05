"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Star, Users, Clock, CheckCircle, Zap, Brain, Shield, TrendingUp } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface Agent {
  id: string
  name: string
  displayName: string
  icon: string
  price: number
  category: string
  rating: number
  reviews: number
  description: string
  capabilities: string[]
  metrics: {
    accuracy: string
    responseTime: string
    satisfaction: string
  }
  features: string[]
  expertise: string[]
  neuralSpecs: {
    parameters: string
    architecture: string
    trainingData: string
    processingSpeed: string
    accuracy: string
  }
}

interface AgentDetailsModalProps {
  agent: Agent
  isOpen: boolean
  onClose: () => void
  onAddToCart: () => void
}

export function AgentDetailsModal({ agent, isOpen, onClose, onAddToCart }: AgentDetailsModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { items } = useCart()

  const isInCart = items?.some((item) => item.id === agent.id) || false

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      onAddToCart()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <div className="text-4xl">{agent.icon}</div>
            <div>
              <DialogTitle className="text-2xl">{agent.name}</DialogTitle>
              <DialogDescription className="text-lg mt-1">{agent.description}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">{agent.rating}</div>
                <div className="text-sm text-muted-foreground">{agent.reviews} reviews</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">{agent.metrics.accuracy}</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">{agent.metrics.responseTime}</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">{agent.metrics.satisfaction}</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Information */}
          <Tabs defaultValue="capabilities" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
              <TabsTrigger value="specs">Neural Specs</TabsTrigger>
            </TabsList>

            <TabsContent value="capabilities" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Core Capabilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {agent.capabilities.map((capability, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{capability}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {agent.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="expertise" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Areas of Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {agent.expertise.map((area, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="h-5 w-5 mr-2" />
                    Neural Network Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-semibold text-sm text-foreground">Parameters</div>
                      <div className="text-lg font-bold">{agent.neuralSpecs.parameters}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Processing Speed</div>
                      <div className="text-lg font-bold">{agent.neuralSpecs.processingSpeed}</div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-2">Architecture</div>
                    <div className="text-sm">{agent.neuralSpecs.architecture}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground mb-2">Training Data</div>
                    <div className="text-sm">{agent.neuralSpecs.trainingData}</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Pricing and CTA */}
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-foreground">${agent.price}</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <Badge className="mt-2 bg-primary/10 text-primary">5-Day Free Trial</Badge>
                </div>
                <div className="space-y-2">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleAddToCart}
                    disabled={isLoading || isInCart}
                  >
                    {isLoading ? "Adding..." : isInCart ? "In Cart" : "Start Free Trial"}
                  </Button>
                  <div className="text-xs text-muted-foreground text-center">No credit card required • Cancel anytime</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  )
}
