"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, CreditCard } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { USDTPaymentModal } from "@/components/payment/usdt-payment-modal"

export function CartModal() {
  const { items, removeItem, clearCart, getTotalPrice, getTotalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handlePaymentSuccess = () => {
    clearCart()
    setShowPaymentModal(false)
    setIsOpen(false)
  }

  const handleProceedToPayment = () => {
    if (items.length === 0) return
    setShowPaymentModal(true)
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="relative bg-transparent">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
            {getTotalItems() > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
              >
                {getTotalItems()}
              </Badge>
            )}
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shopping Cart ({getTotalItems()})
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <p className="text-sm text-gray-400">Add some AI agents to get started</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-xs text-gray-500">{item.type}</p>
                        <p className="text-sm font-semibold text-green-600">${item.price}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total:</span>
                    <span className="text-lg text-green-600">${getTotalPrice()}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
                      Clear Cart
                    </Button>
                    <Button onClick={handleProceedToPayment} className="flex-1 bg-green-600 hover:bg-green-700">
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay with USDT
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Agents will be automatically deployed after payment confirmation
                  </p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <USDTPaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        items={items}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  )
}
