"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/hooks/use-cart"
import { Trash2, ShoppingCart } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, getTotalPrice, clearCart, deployAgent } = useCart()

  const handleDeployAll = async () => {
    for (const item of cartItems) {
      await deployAgent(item)
    }
    onClose()
  }

  if (cartItems.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Your Cart
            </DialogTitle>
            <DialogDescription>Your cart is empty. Add some AI agents to get started.</DialogDescription>
          </DialogHeader>
          <div className="text-center py-8">
            <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500">No agents in your cart yet</p>
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
            Your Cart ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
          </DialogTitle>
          <DialogDescription>Review your selected AI agents before deployment.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="text-sm font-medium text-green-600">${item.price === 0 ? "Free" : item.price}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-lg">${getTotalPrice() === 0 ? "Free" : getTotalPrice()}</span>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
              Clear Cart
            </Button>
            <Button onClick={handleDeployAll} className="flex-1">
              Deploy All Agents
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
