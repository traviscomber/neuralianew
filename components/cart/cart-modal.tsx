"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { Brain, Trash2, ShoppingCart, Zap, Clock, CreditCard, Cpu } from "lucide-react"

interface CartModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CartModal({ open, onOpenChange }: CartModalProps) {
  const { items, removeFromCart, clearCart, getTotalPrice, deployAgents } = useCart()
  const { user } = useAuth()

  const handleDeploy = () => {
    if (!user) {
      alert("Please sign in to deploy neural networks")
      return
    }
    deployAgents()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto bg-black/95 border-purple-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="relative">
              <ShoppingCart className="h-6 w-6 text-purple-400" />
              <div className="absolute inset-0 h-6 w-6 bg-purple-400/20 rounded-full animate-pulse"></div>
            </div>
            Neural Network Cart
            {items.length > 0 && (
              <Badge className="bg-purple-600">
                {items.length} Neural {items.length === 1 ? "Agent" : "Agents"}
              </Badge>
            )}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Manage your selected neural networks and deploy them to your infrastructure.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="relative mx-auto mb-4">
                <Brain className="h-16 w-16 text-gray-600 mx-auto" />
                <div className="absolute inset-0 h-16 w-16 bg-purple-400/10 rounded-full animate-pulse mx-auto"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-300">No Neural Networks Selected</h3>
              <p className="text-gray-400">Add some advanced AI agents to your cart to get started</p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="bg-purple-500/10 border-purple-500/30">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Brain className="h-8 w-8 text-purple-400" />
                            <div className="absolute inset-0 h-8 w-8 bg-purple-400/20 rounded-full animate-pulse"></div>
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <Badge variant="outline" className="border-purple-500/50 text-purple-300 text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-300 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-green-400">5 Days Free Trial</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-white">${item.price} USDT</div>
                          <div className="text-xs text-gray-400">after trial</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Separator className="bg-purple-500/20" />

              {/* Total and Actions */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="text-gray-300">Total after trials:</span>
                  <span className="font-bold text-2xl text-white">${getTotalPrice()} USDT</span>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-green-400" />
                    <span className="font-semibold text-green-400">Neural Trial Benefits</span>
                  </div>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Full access to all neural network parameters</li>
                    <li>• Unlimited processing power for 5 days</li>
                    <li>• Advanced quantum algorithms included</li>
                    <li>• Enterprise-grade security and encryption</li>
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="flex-1 border-red-500/50 text-red-400 hover:bg-red-500/10 bg-transparent"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Clear Cart
                  </Button>
                  <Button
                    onClick={handleDeploy}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg"
                    disabled={!user}
                  >
                    <Cpu className="mr-2 h-5 w-5" />
                    {user ? "Deploy Neural Networks" : "Sign In to Deploy"}
                  </Button>
                </div>

                {!user && (
                  <div className="text-center text-sm text-gray-400">Sign in to deploy your neural network agents</div>
                )}
              </div>

              {/* USDT Payment Info */}
              <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="h-4 w-4 text-purple-400" />
                  <span className="font-semibold text-purple-300">USDT Upgrade Information</span>
                </div>
                <p className="text-sm text-gray-300 mb-2">
                  After your 5-day free trial, upgrade any neural network with USDT payment for unlimited access.
                </p>
                <div className="text-xs text-purple-300">
                  Payment Address: TQn9Y2khEsLMG73Zyy56JdKHD8rQQzaUvr (TRC20)
                </div>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CartModal
