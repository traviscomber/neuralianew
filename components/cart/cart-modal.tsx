"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/hooks/use-cart"
import { toast } from "@/hooks/use-toast"
import { ShoppingCart, Copy, CheckCircle, CreditCard, ArrowLeft, Trash2, ExternalLink, Loader2 } from "lucide-react"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

type PaymentStep = "cart" | "payment" | "confirmation"

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, removeItem, clearCart, totalPrice } = useCart()
  const [currentStep, setCurrentStep] = useState<PaymentStep>("cart")
  const [transactionHash, setTransactionHash] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copiedAddress, setCopiedAddress] = useState(false)
  const [copiedAmount, setCopiedAmount] = useState(false)

  // Your USDT deposit address
  const USDT_ADDRESS = "TJi1odaRdVm5e7yKLy3Uck3dwiUKDbmJ4a"

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(USDT_ADDRESS)
      setCopiedAddress(true)
      toast({
        title: "Address Copied!",
        description: "USDT address copied to clipboard",
      })
      setTimeout(() => setCopiedAddress(false), 2000)
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the address manually",
        variant: "destructive",
      })
    }
  }

  const handleCopyAmount = async () => {
    try {
      await navigator.clipboard.writeText(totalPrice.toString())
      setCopiedAmount(true)
      toast({
        title: "Amount Copied!",
        description: "Payment amount copied to clipboard",
      })
      setTimeout(() => setCopiedAmount(false), 2000)
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy the amount manually",
        variant: "destructive",
      })
    }
  }

  const handleProceedToPayment = () => {
    if (items.length === 0) {
      toast({
        title: "Cart Empty",
        description: "Please add items to your cart before proceeding",
        variant: "destructive",
      })
      return
    }
    setCurrentStep("payment")
  }

  const handleConfirmPayment = async () => {
    if (!transactionHash.trim()) {
      toast({
        title: "Transaction Hash Required",
        description: "Please enter your transaction hash to verify payment",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    // Simulate payment verification
    setTimeout(() => {
      setIsProcessing(false)
      setCurrentStep("confirmation")
      toast({
        title: "Payment Confirmed!",
        description: "Your agents are being deployed",
      })
    }, 3000)
  }

  const handleClose = () => {
    setCurrentStep("cart")
    setTransactionHash("")
    onClose()
  }

  const handleBackToCart = () => {
    setCurrentStep("cart")
    setTransactionHash("")
  }

  const handleFinish = () => {
    clearCart()
    handleClose()
  }

  const openTronScan = () => {
    window.open(`https://tronscan.org/#/address/${USDT_ADDRESS}`, "_blank")
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {currentStep === "cart" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Shopping Cart ({items.length})
              </DialogTitle>
              <DialogDescription>Review your selected AI agents before proceeding to payment</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <p className="text-sm text-gray-400">Add some AI agents to get started</p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {items.map((item) => (
                      <Card key={item.id} className="p-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{item.icon}</span>
                              <h4 className="font-medium text-sm">{item.name}</h4>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">{item.description}</p>
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">
                                ${item.price} USDT
                              </Badge>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeItem(item.id)}
                                className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>${totalPrice} USDT</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Network Fee:</span>
                      <span className="text-green-600">Free (TRON TRC20)</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total:</span>
                      <span>${totalPrice} USDT</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" onClick={clearCart} className="flex-1 bg-transparent">
                      Clear Cart
                    </Button>
                    <Button onClick={handleProceedToPayment} className="flex-1">
                      Proceed to Payment
                    </Button>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {currentStep === "payment" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                USDT Payment
              </DialogTitle>
              <DialogDescription>Send USDT to complete your purchase</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <Card className="p-4 bg-blue-50 border-blue-200">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Network:</span>
                    <Badge variant="secondary">TRON (TRC20)</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Amount:</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono">{totalPrice} USDT</span>
                      <Button size="sm" variant="ghost" onClick={handleCopyAmount} className="h-6 w-6 p-0">
                        {copiedAmount ? (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <Label htmlFor="address">Send USDT to this address:</Label>
                <div className="flex items-center gap-2">
                  <Input id="address" value={USDT_ADDRESS} readOnly className="font-mono text-xs" />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyAddress}
                    className="flex-shrink-0 bg-transparent"
                  >
                    {copiedAddress ? <CheckCircle className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span>Verify on TronScan:</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={openTronScan}
                    className="h-auto p-0 text-xs text-blue-600 hover:text-blue-800"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Address
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="txHash">Transaction Hash (after sending):</Label>
                <Input
                  id="txHash"
                  placeholder="Enter transaction hash to verify payment..."
                  value={transactionHash}
                  onChange={(e) => setTransactionHash(e.target.value)}
                />
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-xs text-yellow-800">
                  <strong>Important:</strong> Send exactly {totalPrice} USDT to the address above using TRON (TRC20)
                  network. Any other amount or network will result in loss of funds.
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" onClick={handleBackToCart} className="flex-1 bg-transparent">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Cart
                </Button>
                <Button
                  onClick={handleConfirmPayment}
                  disabled={!transactionHash.trim() || isProcessing}
                  className="flex-1"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    "Confirm Payment"
                  )}
                </Button>
              </div>
            </div>
          </>
        )}

        {currentStep === "confirmation" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Payment Confirmed!
              </DialogTitle>
              <DialogDescription>Your AI agents are being deployed</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="text-center py-6">
                <CheckCircle className="h-16 w-16 mx-auto text-green-600 mb-4" />
                <h3 className="text-lg font-medium mb-2">Deployment Started!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Your AI agents will be ready in 24-48 hours. You'll receive an email with access details.
                </p>
              </div>

              <Card className="p-4 bg-green-50 border-green-200">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Transaction Hash:</span>
                    <span className="font-mono text-xs">{transactionHash.slice(0, 10)}...</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Amount Paid:</span>
                    <span>${totalPrice} USDT</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Agents Purchased:</span>
                    <span>{items.length}</span>
                  </div>
                </div>
              </Card>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Deployed Agents:</h4>
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-2 text-sm">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <Badge variant="secondary" className="ml-auto">
                      Deploying
                    </Badge>
                  </div>
                ))}
              </div>

              <Button onClick={handleFinish} className="w-full">
                Continue to Dashboard
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
