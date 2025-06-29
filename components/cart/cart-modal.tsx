"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, X, CreditCard, Wallet, Copy, CheckCircle, Clock, Zap, TrendingUp } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { toast } from "@/hooks/use-toast"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "crypto">("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStep, setPaymentStep] = useState<"cart" | "payment" | "processing" | "success">("cart")
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })
  const [cryptoAddress] = useState("TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE") // USDT TRC20 address
  const [addressCopied, setAddressCopied] = useState(false)

  const { items, removeItem, clearCart, getTotalPrice, deployItems } = useCart()
  const { user } = useAuth()

  const handleRemoveItem = (id: string) => {
    removeItem(id)
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    })
  }

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(cryptoAddress)
      setAddressCopied(true)
      toast({
        title: "Address copied!",
        description: "USDT address has been copied to clipboard.",
      })
      setTimeout(() => setAddressCopied(false), 3000)
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please copy the address manually.",
        variant: "destructive",
      })
    }
  }

  const handlePayment = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to complete your purchase.",
        variant: "destructive",
      })
      return
    }

    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before proceeding.",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)
    setPaymentStep("processing")

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Validate payment details
      if (paymentMethod === "card") {
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
          throw new Error("Please fill in all card details")
        }
      }

      // Process payment (simulate success)
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Deploy items after successful payment
      await deployItems()

      setPaymentStep("success")

      toast({
        title: "Payment successful!",
        description: "Your AI agents are being deployed. You'll receive updates shortly.",
      })

      // Auto-close after success
      setTimeout(() => {
        onClose()
        setPaymentStep("cart")
        setIsProcessing(false)
      }, 3000)
    } catch (error) {
      console.error("Payment error:", error)
      setPaymentStep("payment")
      toast({
        title: "Payment failed",
        description: error instanceof Error ? error.message : "Please try again or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  const resetModal = () => {
    setPaymentStep("cart")
    setIsProcessing(false)
    setCardDetails({ number: "", expiry: "", cvv: "", name: "" })
    setAddressCopied(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" aria-describedby="cart-modal-description">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            {paymentStep === "cart" && "Shopping Cart"}
            {paymentStep === "payment" && "Payment Details"}
            {paymentStep === "processing" && "Processing Payment"}
            {paymentStep === "success" && "Payment Successful"}
          </DialogTitle>
          <DialogDescription id="cart-modal-description">
            {paymentStep === "cart" && "Review your selected AI agents and systems before checkout."}
            {paymentStep === "payment" && "Choose your payment method and complete your purchase."}
            {paymentStep === "processing" && "Please wait while we process your payment and deploy your agents."}
            {paymentStep === "success" && "Your payment was successful and your AI agents are being deployed."}
          </DialogDescription>
        </DialogHeader>

        {paymentStep === "cart" && (
          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some AI agents or systems to get started.</p>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <div className="flex items-center">
                                <Clock className="mr-1 h-3 w-3" />
                                {item.setupTime}
                              </div>
                              <div className="flex items-center">
                                <TrendingUp className="mr-1 h-3 w-3" />
                                {item.roi}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-lg font-bold">${item.price}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Setup & Configuration</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>24/7 Support</span>
                    <span className="text-green-600">Included</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${getTotalPrice()}</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
                    Clear Cart
                  </Button>
                  <Button onClick={() => setPaymentStep("payment")} className="flex-1">
                    Proceed to Payment
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {paymentStep === "payment" && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Amount</span>
                <span className="text-2xl font-bold">${getTotalPrice()}</span>
              </div>
            </div>

            <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as "card" | "crypto")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card" className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Credit Card
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center">
                  <Wallet className="mr-2 h-4 w-4" />
                  USDT (TRC20)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input
                      id="cardName"
                      placeholder="John Doe"
                      value={cardDetails.name}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, name: e.target.value }))}
                    />
                  </div>
                  <div className="col-span-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, number: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, expiry: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails((prev) => ({ ...prev, cvv: e.target.value }))}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">USDT (TRC20) Payment</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Send exactly <strong>${getTotalPrice()} USDT</strong> to the address below:
                  </p>
                  <div className="bg-white p-3 rounded border">
                    <div className="flex items-center justify-between">
                      <code className="text-sm break-all">{cryptoAddress}</code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopyAddress}
                        className="ml-2 flex-shrink-0 bg-transparent"
                      >
                        {addressCopied ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    ⚠️ Only send USDT on the TRC20 network. Other tokens or networks will result in loss of funds.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex space-x-3">
              <Button variant="outline" onClick={() => setPaymentStep("cart")} className="flex-1">
                Back to Cart
              </Button>
              <Button onClick={handlePayment} disabled={isProcessing} className="flex-1">
                {isProcessing ? "Processing..." : `Pay $${getTotalPrice()}`}
              </Button>
            </div>
          </div>
        )}

        {paymentStep === "processing" && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-medium mb-2">Processing Your Payment</h3>
            <p className="text-gray-500 mb-4">Please don't close this window...</p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                🚀 Your AI agents will be deployed automatically after payment confirmation
              </p>
            </div>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Payment Successful!</h3>
            <p className="text-gray-500 mb-4">Your AI agents are being deployed...</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-800">Deployment started! Check "My Agents" section.</span>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
