"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, Plus, Minus, Trash2, Zap } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { user } = useAuth()
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems, deployAgent, isDeploying } = useCart()

  const handleDeploy = async (item: any) => {
    if (!user) return
    await deployAgent(item)
  }

  const handleDeployAll = async () => {
    if (!user) return
    for (const item of items) {
      await deployAgent(item)
    }
  }

  if (items.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Your Cart
            </DialogTitle>
            <DialogDescription>Your cart is currently empty.</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-8">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center mb-4">No agents in your cart yet.</p>
            <Button onClick={onClose}>Continue Shopping</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart ({getTotalItems()} items)
          </DialogTitle>
          <DialogDescription>Review your selected AI agents before deployment.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[400px] pr-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="secondary">${item.price}</Badge>
                    {item.features && item.features.length > 0 && (
                      <Badge variant="outline">{item.features.length} features</Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator />

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total:</span>
            <span className="text-2xl font-bold">${getTotalPrice()}</span>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Continue Shopping
            </Button>
            <Button onClick={handleDeployAll} disabled={isDeploying || !user} className="flex-1">
              {isDeploying ? (
                <>
                  <Zap className="mr-2 h-4 w-4 animate-pulse" />
                  Deploying...
                </>
              ) : (
                <>
                  <Zap className="mr-2 h-4 w-4" />
                  Deploy All
                </>
              )}
            </Button>
          </div>

          {!user && <p className="text-sm text-gray-500 text-center">Please sign in to deploy agents.</p>}
        </div>
      </DialogContent>
    </Dialog>
  )
}
