"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Brain, Trash2, ShoppingCart, Zap, Clock, CreditCard, Cpu, CheckCircle } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, clearCart, getTotalPrice, deployAgent, loading } = useCart()
  const { user } = useAuth()

  const handleDeploy = async (agentId: string) => {
    if (!user) {
      alert("Please sign in to deploy neural networks")
      return
    }
    await deployAgent(agentId)
  }

  const handleDeployAll = async () => {
    if (!user) {
      alert("Please sign in to deploy neural networks")
      return
    }

    for (const item of cartItems) {
      await deployAgent(item.id)
    }
    onClose()
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
            {cartItems.length > 0 && (
              <Badge className="bg-blue-600">
                {cartItems.length} Neural {cartItems.length === 1 ? "Agent" : "Agents"}
              </Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative mx-auto mb-4">
                <Brain className="h-16 w-16 text-gray-400 mx-auto" />
                <div className="absolute inset-0 h-16 w-16 bg-blue-400/10 rounded-full animate-pulse mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">No Neural Networks Selected</h3>
              <p className="text-gray-500">Add some advanced AI agents to your cart to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
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
                            <Badge variant="outline" className="border-blue-500/50 text-blue-700 text-xs">
                              Neural Executive
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
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-600 font-medium">5 Days Free Trial</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900">${item.price}</div>
                          <div className="text-xs text-gray-500">after trial</div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <Button
                          onClick={() => handleDeploy(item.id)}
                          disabled={loading}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                          <Cpu className="mr-2 h-4 w-4" />
                          {loading ? "Deploying..." : "Deploy Now"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator />

              {/* Total and Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-gray-700">Total after trials:</span>
                  <span className="font-bold text-2xl text-gray-900">${getTotalPrice()}</span>
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
                    disabled={loading || !user}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg"
                  >
                    <Cpu className="mr-2 h-5 w-5" />
                    {user ? (loading ? "Deploying..." : "Deploy All Neural Networks") : "Sign In to Deploy"}
                  </Button>
                </div>

                {!user && (
                  <div className="text-center text-sm text-gray-500">Sign in to deploy your neural network agents</div>
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
