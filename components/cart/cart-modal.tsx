"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { Trash2, ShoppingCart, Zap, CreditCard, Brain, CheckCircle } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items = [], removeFromCart, clearCart, totalPrice, deployAgent, isAgentDeployed, loading } = useCart()
  const { user } = useAuth()

  const handleDeploy = async (agent: any) => {
    if (!user) {
      return
    }
    await deployAgent(agent)
  }

  const handleDeployAll = async () => {
    if (!user || !items.length) {
      return
    }

    for (const agent of items) {
      await deployAgent(agent)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-blue-600" />
              <div className="absolute inset-0 h-6 w-6 bg-blue-400/20 rounded-full animate-pulse"></div>
            </div>
            Neural Network Cart
            {items.length > 0 && (
              <Badge className="bg-blue-600">
                {items.length} Neural {items.length === 1 ? "Agent" : "Agents"}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription>Deploy AI agents with a 5-day free trial. No commitment required.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative mx-auto mb-4">
                <Brain className="h-16 w-16 text-gray-400 mx-auto" />
                <div className="absolute inset-0 h-16 w-16 bg-blue-400/10 rounded-full animate-pulse mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">No Neural Networks Selected</h3>
              <p className="text-gray-500 mb-4">Add some advanced AI agents to your cart to get started</p>
              <Button onClick={onClose}>Browse AI Agents</Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="border-2 border-blue-100">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Brain className="h-8 w-8 text-blue-600" />
                            <div className="absolute inset-0 h-8 w-8 bg-blue-400/20 rounded-full animate-pulse"></div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <CardDescription className="text-sm">{item.description}</CardDescription>
                            <Badge variant="outline" className="border-blue-500/50 text-blue-700 text-xs mt-1">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">5 Days Free Trial</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">${item.price}</div>
                          <div className="text-xs text-gray-500">per month after trial</div>
                        </div>
                      </div>

                      {user ? (
                        <Button
                          onClick={() => handleDeploy(item)}
                          disabled={loading || isAgentDeployed(item.id)}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          {isAgentDeployed(item.id) ? (
                            <>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Already Deployed
                            </>
                          ) : loading ? (
                            <>
                              <Zap className="mr-2 h-4 w-4 animate-spin" />
                              Deploying...
                            </>
                          ) : (
                            <>
                              <Zap className="mr-2 h-4 w-4" />
                              Deploy Now
                            </>
                          )}
                        </Button>
                      ) : (
                        <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
                          Sign In to Deploy
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              {/* Total and Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-gray-700">Total after trials:</span>
                  <span className="font-bold text-2xl text-gray-900">${totalPrice}</span>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-700">Neural Trial Benefits</span>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Full access to all neural network parameters
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Unlimited processing power for 5 days
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Advanced quantum algorithms included
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Enterprise-grade security and encryption
                    </li>
                  </ul>
                </div>

                {user ? (
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="flex-1 border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Clear Cart
                    </Button>
                    <Button
                      onClick={handleDeployAll}
                      disabled={loading || items.length === 0}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      {loading ? "Deploying..." : "Deploy All Neural Networks"}
                    </Button>
                  </div>
                ) : (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 mb-2">Sign in to deploy your neural network agents</p>
                    <Button onClick={onClose}>Sign In</Button>
                  </div>
                )}
              </div>

              {/* USDT Payment Info */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-4 w-4 text-gray-600" />
                  <span className="font-semibold text-gray-700">USDT Upgrade Information</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  After your 5-day free trial, upgrade any neural network with USDT payment for unlimited access.
                </p>
                <div className="text-xs font-mono bg-gray-100 border border-gray-300 p-3 rounded break-all text-gray-700">
                  TQn9Y2khEsLMG73Zyy56JdKHD8rQQzaUvr (TRC20)
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
