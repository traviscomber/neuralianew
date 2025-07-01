"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Copy, ExternalLink, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"

interface USDTPaymentModalProps {
  isOpen: boolean
  onClose: () => void
  items: Array<{
    id: string
    name: string
    type: string
    price: number
  }>
  onPaymentSuccess: () => void
}

type PaymentStep = "details" | "payment" | "confirmation" | "success"

export function USDTPaymentModal({ isOpen, onClose, items, onPaymentSuccess }: USDTPaymentModalProps) {
  const { user } = useAuth()
  const [currentStep, setCurrentStep] = useState<PaymentStep>("details")
  const [paymentData, setPaymentData] = useState<any>(null)
  const [transactionHash, setTransactionHash] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const totalAmount = items.reduce((sum, item) => sum + item.price, 0)

  const createPayment = async () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to continue with payment.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/payments/create-usdt-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items,
          userId: user.id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment")
      }

      setPaymentData(data)
      setCurrentStep("payment")

      toast({
        title: "Payment created",
        description: "Please send USDT to the provided address.",
      })
    } catch (error) {
      console.error("Create payment error:", error)
      toast({
        title: "Payment creation failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const confirmPayment = async () => {
    if (!transactionHash.trim()) {
      toast({
        title: "Transaction hash required",
        description: "Please enter your transaction hash.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/payments/confirm-usdt-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: paymentData.paymentId,
          transactionHash: transactionHash.trim(),
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to confirm payment")
      }

      setCurrentStep("success")

      toast({
        title: "Payment confirmed!",
        description: data.message || "Your agents are being deployed.",
      })

      // Call success callback after a short delay
      setTimeout(() => {
        onPaymentSuccess()
        onClose()
        resetModal()
      }, 3000)
    } catch (error) {
      console.error("Confirm payment error:", error)
      toast({
        title: "Payment confirmation failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Address copied successfully.",
    })
  }

  const resetModal = () => {
    setCurrentStep("details")
    setPaymentData(null)
    setTransactionHash("")
    setIsLoading(false)
  }

  const handleClose = () => {
    onClose()
    resetModal()
  }

  const renderStepIndicator = () => {
    const steps = [
      { key: "details", label: "Details", icon: "1" },
      { key: "payment", label: "Payment", icon: "2" },
      { key: "confirmation", label: "Confirm", icon: "3" },
      { key: "success", label: "Success", icon: "✓" },
    ]

    return (
      <div className="flex items-center justify-center space-x-4 mb-6">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep === step.key
                  ? "bg-blue-600 text-white"
                  : steps.findIndex((s) => s.key === currentStep) > index
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              {step.icon}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700">{step.label}</span>
            {index < steps.length - 1 && <div className="w-8 h-px bg-gray-300 ml-4" />}
          </div>
        ))}
      </div>
    )
  }

  const renderDetailsStep = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <CardDescription>Review your AI agent purchases</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.type}</p>
              </div>
              <Badge variant="secondary">${item.price}</Badge>
            </div>
          ))}
          <Separator />
          <div className="flex justify-between items-center font-semibold">
            <span>Total</span>
            <span>${totalAmount}</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={createPayment} disabled={isLoading}>
          {isLoading ? "Creating..." : "Continue to Payment"}
        </Button>
      </div>
    </div>
  )

  const renderPaymentStep = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            Send USDT Payment
          </CardTitle>
          <CardDescription>Send exactly {paymentData?.amount} USDT to the address below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="wallet-address">USDT Wallet Address (TRC20)</Label>
            <div className="flex items-center space-x-2 mt-1">
              <Input
                id="wallet-address"
                value={paymentData?.walletAddress || ""}
                readOnly
                className="font-mono text-sm"
              />
              <Button size="sm" variant="outline" onClick={() => copyToClipboard(paymentData?.walletAddress || "")}>
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label>Amount to Send</Label>
            <div className="text-2xl font-bold text-green-600">{paymentData?.amount} USDT</div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-yellow-800">Important:</p>
                <ul className="mt-1 text-yellow-700 space-y-1">
                  <li>• Send exactly {paymentData?.amount} USDT (TRC20 network)</li>
                  <li>• Do not send any other cryptocurrency</li>
                  <li>• Transaction may take 5-10 minutes to confirm</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={() => setCurrentStep("confirmation")}>I've Sent the Payment</Button>
      </div>
    </div>
  )

  const renderConfirmationStep = () => (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Confirm Your Transaction</CardTitle>
          <CardDescription>Enter your transaction hash to verify the payment</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="tx-hash">Transaction Hash</Label>
            <Input
              id="tx-hash"
              placeholder="Enter your USDT transaction hash"
              value={transactionHash}
              onChange={(e) => setTransactionHash(e.target.value)}
              className="font-mono text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">You can find this in your wallet's transaction history</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <ExternalLink className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-800">Need help finding your transaction hash?</p>
                <p className="mt-1 text-blue-700">Check your wallet's transaction history or blockchain explorer</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => setCurrentStep("payment")}>
          Back
        </Button>
        <Button onClick={confirmPayment} disabled={isLoading || !transactionHash.trim()}>
          {isLoading ? "Verifying..." : "Confirm Payment"}
        </Button>
      </div>
    </div>
  )

  const renderSuccessStep = () => (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-600" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-green-800">Payment Successful!</h3>
        <p className="text-gray-600 mt-2">
          Your agents are being deployed automatically. You'll receive a notification once they're ready.
        </p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-green-700">
          🚀 {items.length} agent{items.length > 1 ? "s" : ""} will be available in your dashboard shortly
        </p>
      </div>
    </div>
  )

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Pay with USDT</DialogTitle>
        </DialogHeader>

        {renderStepIndicator()}

        <div className="mt-6">
          {currentStep === "details" && renderDetailsStep()}
          {currentStep === "payment" && renderPaymentStep()}
          {currentStep === "confirmation" && renderConfirmationStep()}
          {currentStep === "success" && renderSuccessStep()}
        </div>
      </DialogContent>
    </Dialog>
  )
}
