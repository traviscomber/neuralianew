"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { ShoppingCart, Trash2, Zap, Plus, Minus, Crown, CheckCircle } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { user } = useAuth()
  const {
    cartItems = [],
    removeFromCart,
    updateQuantity,
    deployAgent,
    isDeploying,
    getTotalPrice,
    getTotalItems,
    clearCart,
  } = useCart()
  const [deployingItems, setDeployingItems] = useState<Set<string>>(new Set())

  const handleDeploy = async (item: any) => {
    if (!user) return

    setDeployingItems((prev) => new Set(prev).add(item.id))
    try {
      await deployAgent(item)
    } finally {
      setDeployingItems((prev) => {
        const newSet = new Set(prev)
        newSet.delete(item.id)
        return newSet
      })
    }
  }

  const handleDeployAll = async () => {
    if (!user || cartItems.length === 0) return

    for (const item of cartItems) {
      await handleDeploy(item)
    }
  }

  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  if (!user) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign In Required</DialogTitle>
            <DialogDescription>Please sign in to view your cart and deploy AI agents.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Your AI Agent Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
          </DialogTitle>
          <DialogDescription>Review and deploy your selected AI experts</DialogDescription>
        </DialogHeader>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-4">Add some AI experts to get started</p>
            <Button onClick={onClose}>Browse Agents</Button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cart Items */}
            <div className="space-y-3">
              {cartItems.map((item) => {
                const isItemDeploying = deployingItems.has(item.id)
                const isCEO = item.type === "ceo-neural-agent"

                return (
                  <Card key={item.id} className={isCEO ? "border-purple-200 bg-purple-50/50" : ""}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${item.color || "bg-gray-500"}`}>
                            <div className="h-5 w-5 text-white">
                              {isCEO ? <Crown className="h-5 w-5" /> : <CheckCircle className="h-5 w-5" />}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium flex items-center">
                              {item.name}
                              {isCEO && <Crown className="ml-2 h-4 w-4 text-purple-600" />}
                            </h4>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            {item.category && (
                              <Badge variant="outline" className="mt-1 text-xs">
                                {item.category}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                              disabled={isItemDeploying}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity || 1}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              disabled={isItemDeploying}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>

                          <div className="text-right">
                            <p className="font-medium">${((item.price || 0) * (item.quantity || 1)).toFixed(2)}</p>
                            {item.quantity && item.quantity > 1 && (
                              <p className="text-xs text-gray-500">${item.price}/each</p>
                            )}
                          </div>

                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleDeploy(item)}
                              disabled={isItemDeploying || isDeploying}
                            >
                              {isItemDeploying ? (
                                "Deploying..."
                              ) : (
                                <>
                                  <Zap className="mr-1 h-3 w-3" />
                                  Deploy
                                </>
                              )}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                              disabled={isItemDeploying}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Separator />

            {/* Cart Summary */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total</span>
                <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex space-x-3">
                <Button onClick={handleDeployAll} className="flex-1" disabled={isDeploying || cartItems.length === 0}>
                  {isDeploying ? (
                    "Deploying..."
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Deploy All ({totalItems})
                    </>
                  )}
                </Button>
                <Button variant="outline" onClick={clearCart} disabled={isDeploying || cartItems.length === 0}>
                  Clear Cart
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Agents will be deployed to your dashboard and ready for use immediately
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
