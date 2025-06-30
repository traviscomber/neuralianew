"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Check, Zap, Crown, Building } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface BillingHistoryItem {
  id: string
  amount_cents: number
  currency: string
  status: string
  payment_method: string
  description: string
  paid_at: string
  plan_id: string
  billing_cycle: string
}

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Perfect for getting started",
    price: { monthly: 0, yearly: 0 },
    icon: Check,
    features: ["3 AI Agents", "100 conversations/month", "Basic support", "Community access"],
  },
  {
    id: "starter",
    name: "Starter",
    description: "Great for small teams",
    price: { monthly: 29, yearly: 290 },
    icon: Zap,
    features: [
      "10 AI Agents",
      "1,000 conversations/month",
      "Priority support",
      "Advanced analytics",
      "Custom branding",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    description: "For growing businesses",
    price: { monthly: 99, yearly: 990 },
    icon: Crown,
    features: [
      "Unlimited AI Agents",
      "10,000 conversations/month",
      "24/7 support",
      "Advanced integrations",
      "White-label solution",
      "API access",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations",
    price: { monthly: 299, yearly: 2990 },
    icon: Building,
    features: [
      "Everything in Professional",
      "Unlimited conversations",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
  },
]

export function SubscriptionManager() {
  const { user, profile } = useAuth()
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")
  const [billingHistory, setBillingHistory] = useState<BillingHistoryItem[]>([])
  const [loading, setLoading] = useState(false)
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      fetchBillingHistory()
    }
  }, [user])

  const fetchBillingHistory = async () => {
    try {
      const response = await fetch("/api/payments/billing-history")
      const data = await response.json()

      if (response.ok) {
        setBillingHistory(data.billingHistory || [])
      }
    } catch (error) {
      console.error("Error fetching billing history:", error)
    }
  }

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive",
      })
      return
    }

    setLoadingPlan(planId)
    setLoading(true)

    try {
      const response = await fetch("/api/payments/create-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planId,
          billingCycle,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Subscription updated",
          description: data.message,
        })

        // Refresh billing history
        await fetchBillingHistory()

        // Refresh the page to update profile data
        window.location.reload()
      } else {
        throw new Error(data.error || "Failed to update subscription")
      }
    } catch (error) {
      console.error("Subscription error:", error)
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Failed to update subscription",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
      setLoadingPlan(null)
    }
  }

  const formatCurrency = (cents: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(cents / 100)
  }

  const currentPlan = profile?.subscription_plan || "free"

  return (
    <div className="space-y-8">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Current Subscription
          </CardTitle>
          <CardDescription>Manage your subscription plan and billing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold capitalize">{currentPlan} Plan</h3>
              <p className="text-sm text-muted-foreground">
                <Badge variant="secondary" className="capitalize">
                  {profile?.subscription_status || "active"}
                </Badge>
              </p>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                {currentPlan === "free"
                  ? "Free"
                  : formatCurrency(plans.find((p) => p.id === currentPlan)?.price[billingCycle] || 0)}
              </p>
              {currentPlan !== "free" && (
                <p className="text-sm text-muted-foreground">per {billingCycle.slice(0, -2)}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Billing Cycle Toggle */}
      <div className="flex items-center justify-center gap-4">
        <span className={billingCycle === "monthly" ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
        <Select value={billingCycle} onValueChange={(value: "monthly" | "yearly") => setBillingCycle(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
        <span className={billingCycle === "yearly" ? "font-semibold" : "text-muted-foreground"}>
          Yearly
          <Badge variant="secondary" className="ml-2">
            Save 17%
          </Badge>
        </span>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const Icon = plan.icon
          const isCurrentPlan = currentPlan === plan.id
          const price = plan.price[billingCycle]

          return (
            <Card key={plan.id} className={`relative ${isCurrentPlan ? "ring-2 ring-primary" : ""}`}>
              {isCurrentPlan && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2">Current Plan</Badge>
              )}
              <CardHeader className="text-center">
                <Icon className="h-8 w-8 mx-auto mb-2" />
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="text-3xl font-bold">
                  {price === 0 ? "Free" : formatCurrency(price)}
                  {price > 0 && (
                    <span className="text-sm font-normal text-muted-foreground">/{billingCycle.slice(0, -2)}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={isCurrentPlan ? "outline" : "default"}
                  disabled={loading || isCurrentPlan}
                  onClick={() => handleSubscribe(plan.id)}
                >
                  {loadingPlan === plan.id
                    ? "Processing..."
                    : isCurrentPlan
                      ? "Current Plan"
                      : `Subscribe to ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Billing History */}
      {billingHistory.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription>Your recent payments and invoices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {billingHistory.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{item.description}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(item.paid_at).toLocaleDateString()} • {item.payment_method}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatCurrency(item.amount_cents)}</p>
                    <Badge variant={item.status === "succeeded" ? "default" : "destructive"}>{item.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
