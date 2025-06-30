"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, CreditCard, Wallet, Trash2, Plus, Minus, CheckCircle, Copy, Zap } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useAuth } from "@/hooks/use-auth"
import { toast } from "@/hooks/use-toast"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeItem, updateQuantity, clearCart, total, deployAgents } = useCart()
  const { user } = useAuth()
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStep, setPaymentStep] = useState<"cart" | "payment" | "processing" | "success">("cart")

  // Card payment form
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  })

  // Crypto payment
  const usdtAddress = "TQn9Y2khEsLJW1ChVWFMSMeRDow5KcbLSE"

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
    } else {
      updateQuantity(id, newQuantity)
    }
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(usdtAddress)
    toast({
      title: "Address Copied",
      description: "USDT address has been copied to clipboard",
    })
  }

  const handleCardPayment = async () => {
    setIsProcessing(true)
    setPaymentStep("processing")

    // Simulate card payment processing
    setTimeout(async () => {
      try {
        // Deploy agents after successful payment
        await deployAgents(items)
        setPaymentStep("success")
        toast({
          title: "Payment Successful!",
          description: "Your AI agents are being deployed.",
        })
      } catch (error) {
        console.error("Deployment error:", error)
        toast({
          title: "Deployment Error",
          description: "Payment successful but deployment failed. Please contact support.",
          variant: "destructive",
        })
      } finally {
        setIsProcessing(false)
      }
    }, 3000)
  }

  const handleCryptoPayment = async () => {
    setIsProcessing(true)
    setPaymentStep("processing")

    // Simulate crypto payment verification
    setTimeout(async () => {
      try {
        // Deploy agents after payment confirmation
        await deployAgents(items)
        setPaymentStep("success")
        toast({
          title: "Payment Confirmed!",
          description: "Your AI agents are being deployed.",
        })
      } catch (error) {
        console.error("Deployment error:", error)
        toast({
          title: "Deployment Error",
          description: "Payment confirmed but deployment failed. Please contact support.",
          variant: "destructive",
        })
      } finally {
        setIsProcessing(false)
      }
    }, 5000)
  }

  const handleClose = () => {
    if (paymentStep === "success") {
      setPaymentStep("cart")
    }
    onClose()
  }

  if (!user) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Sign In Required</DialogTitle>
            <DialogDescription>Please sign in to view your cart and purchase AI agents.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button onClick={handleClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            {paymentStep === "cart" && "Your Cart"}
            {paymentStep === "payment" && "Payment"}
            {paymentStep === "processing" && "Processing Payment"}
            {paymentStep === "success" && "Payment Successful"}
          </DialogTitle>
          <DialogDescription>
            {paymentStep === "cart" && "Review your selected AI agents and proceed to payment"}
            {paymentStep === "payment" && "Choose your payment method and complete the purchase"}
            {paymentStep === "processing" && "Please wait while we process your payment"}
            {paymentStep === "success" && "Your AI agents are being deployed to your account"}
          </DialogDescription>
        </DialogHeader>

        {paymentStep === "cart" && (
          <div className="space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-4">Add some AI agents to get started</p>
                <Button onClick={handleClose}>Browse Agents</Button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {items.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl">{item.icon}</div>
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                              <Badge variant="outline" className="mt-1">
                                {item.category}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">${item.price * item.quantity}</div>
                              <div className="text-sm text-gray-500">${item.price} each</div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-700"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-2xl font-bold">${total}</span>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
                      Clear Cart
                    </Button>
                    <Button onClick={() => setPaymentStep("payment")} className="flex-1">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Proceed to Payment
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {paymentStep === "payment" && (
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>

            <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Credit Card
                </TabsTrigger>
                <TabsTrigger value="crypto">
                  <Wallet className="mr-2 h-4 w-4" />
                  USDT (TRC20)
                </TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardForm.cardNumber}
                      onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardholderName">Cardholder Name</Label>
                    <Input
                      id="cardholderName"
                      placeholder="John Doe"
                      value={cardForm.cardholderName}
                      onChange={(e) => setCardForm({ ...cardForm, cardholderName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      placeholder="MM/YY"
                      value={cardForm.expiryDate}
                      onChange={(e) => setCardForm({ ...cardForm, expiryDate: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={cardForm.cvv}
                      onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={handleCardPayment} className="w-full" disabled={isProcessing}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ${total}
                </Button>
              </TabsContent>

              <TabsContent value="crypto" className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">USDT Payment Instructions</h4>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Send exactly ${total} USDT to the address below</li>
                    <li>Use TRC20 network only</li>
                    <li>Payment will be confirmed automatically</li>
                    <li>Your agents will deploy after confirmation</li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>USDT Address (TRC20)</Label>
                    <div className="flex items-center space-x-2 mt-1">
                      <Input value={usdtAddress} readOnly className="font-mono text-sm" />
                      <Button variant="outline" size="icon" onClick={handleCopyAddress}>
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="text-yellow-600">⚠️</div>
                      <div className="text-sm">
                        <strong>Important:</strong> Only send USDT on TRC20 network. Other tokens or networks will
                        result in loss of funds.
                      </div>
                    </div>
                  </div>

                  <Button onClick={handleCryptoPayment} className="w-full" disabled={isProcessing}>
                    <Wallet className="mr-2 h-4 w-4" />
                    I've Sent the Payment
                  </Button>
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex space-x-4">
              <Button variant="outline" onClick={() => setPaymentStep("cart")} className="flex-1">
                Back to Cart
              </Button>
            </div>
          </div>
        )}

        {paymentStep === "processing" && (
          <div className="text-center py-8 space-y-4">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <h3 className="text-lg font-semibold">Processing Payment</h3>
            <p className="text-gray-600">
              {paymentMethod === "card"
                ? "Please wait while we process your card payment..."
                : "Waiting for payment confirmation on the blockchain..."}
            </p>
          </div>
        )}

        {paymentStep === "success" && (
          <div className="text-center py-8 space-y-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold text-green-700">Payment Successful!</h3>
            <p className="text-gray-600">Your AI agents are being deployed to your account.</p>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  Deployment typically takes 2-5 minutes to complete
                </span>
              </div>
            </div>
            <Button onClick={handleClose} className="w-full">
              View My Agents
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
