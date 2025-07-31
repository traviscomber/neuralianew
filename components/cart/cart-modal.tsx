"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { AuthModal } from "@/components/auth/auth-modal"
import { ShoppingCart, Trash2, Rocket, Star, Clock, CheckCircle, CreditCard, Zap, Shield } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { user } = useAuth()
  const { cartItems, removeFromCart, clearCart, getTotalPrice, deployAgent, loading } = useCart()

  const [showAuthModal, setShowAuthModal] = useState(false)
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])

  const handleDeploy = async (agentId: string) => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    try {
      setDeployingAgents((prev) => [...prev, agentId])
      await deployAgent(agentId)
    } finally {
      setDeployingAgents((prev) => prev.filter((id) => id !== agentId))
    }
  }

  const handleDeployAll = async () => {
    if (!user) {
      setShowAuthModal(true)
      return
    }

    if (cartItems.length === 0) return

    try {
      setDeployingAgents(cartItems.map((item) => item.id))

      // Deploy all agents sequentially
      for (const item of cartItems) {
        await deployAgent(item.id)
      }
    } finally {
      setDeployingAgents([])
    }
  }

  const isDeploying = (agentId: string) => deployingAgents.includes(agentId)
  const isAnyDeploying = deployingAgents.length > 0

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Your Neural Executive Cart</span>
            </DialogTitle>
            <DialogDescription>
              Deploy AI executives with 5-day free trials. No credit card required upfront.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {cartItems.length === 0 ? (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-gray-600 mb-4">Add some AI executives to get started</p>
                  <Button onClick={onClose} variant="outline">
                    Browse Agents
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="relative">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                              {item.id === "ceo-neural-orchestrator"
                                ? "🧠"
                                : item.id === "cmo-growth-engine"
                                  ? "📈"
                                  : item.id === "cto-innovation-architect"
                                    ? "⚡"
                                    : "🤖"}
                            </div>
                            <div>
                              <CardTitle className="text-lg">{item.name}</CardTitle>
                              <CardDescription className="text-blue-600 font-medium">
                                ${item.price} USDT
                              </CardDescription>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3 text-green-500" />
                              5-day free trial
                            </div>
                            <div className="flex items-center">
                              <Shield className="mr-1 h-3 w-3 text-blue-500" />
                              Enterprise security
                            </div>
                          </div>

                          <Button
                            onClick={() => handleDeploy(item.id)}
                            disabled={isDeploying(item.id) || loading}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          >
                            {isDeploying(item.id) ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Deploying...
                              </>
                            ) : (
                              <>
                                <Rocket className="mr-2 h-4 w-4" />
                                Deploy Now
                              </>
                            )}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                {/* Trial Benefits */}
                <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Star className="mr-2 h-5 w-5 text-yellow-500" />
                      5-Day Free Trial Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Full access to all capabilities
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Unlimited conversations
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        Strategic insights & analysis
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                        No credit card required
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Total & Actions */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total after trial:</span>
                    <span className="text-blue-600">${getTotalPrice()} USDT</span>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      disabled={isAnyDeploying}
                      className="flex-1 bg-transparent"
                    >
                      Clear Cart
                    </Button>

                    <Button
                      onClick={handleDeployAll}
                      disabled={isAnyDeploying || loading}
                      className="flex-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {isAnyDeploying ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Deploying All...
                        </>
                      ) : (
                        <>
                          <Zap className="mr-2 h-4 w-4" />
                          Deploy All Agents ({cartItems.length})
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {/* Upgrade Info */}
                <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <CreditCard className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900 mb-1">After your 5-day trial:</p>
                        <p className="text-blue-700">
                          Upgrade with USDT to continue using your neural executives. Payment address will be provided
                          in your dashboard.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Auth Modal */}
      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
    </>
  )
}
