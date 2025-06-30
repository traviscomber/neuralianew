import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function POST(request: NextRequest) {
  try {
    const { planId, billingCycle } = await request.json()

    // Create Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
        },
      },
    )

    // Get current user
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Define plan pricing
    const planPricing = {
      free: { monthly: 0, yearly: 0 },
      starter: { monthly: 2900, yearly: 29000 }, // $29/month, $290/year
      professional: { monthly: 9900, yearly: 99000 }, // $99/month, $990/year
      enterprise: { monthly: 29900, yearly: 299000 }, // $299/month, $2990/year
    }

    const amount = planPricing[planId as keyof typeof planPricing]?.[billingCycle as keyof typeof planPricing.free]

    if (amount === undefined) {
      return NextResponse.json({ error: "Invalid plan or billing cycle" }, { status: 400 })
    }

    // For free plan, just update the profile
    if (planId === "free") {
      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          subscription_plan: planId,
          subscription_status: "active",
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (updateError) {
        throw updateError
      }

      return NextResponse.json({
        success: true,
        message: "Successfully switched to free plan",
      })
    }

    // For paid plans, create subscription record
    const currentPeriodStart = new Date()
    const currentPeriodEnd = new Date()

    if (billingCycle === "monthly") {
      currentPeriodEnd.setMonth(currentPeriodEnd.getMonth() + 1)
    } else {
      currentPeriodEnd.setFullYear(currentPeriodEnd.getFullYear() + 1)
    }

    // Create subscription
    const { data: subscription, error: subscriptionError } = await supabase
      .from("subscriptions")
      .insert({
        user_id: user.id,
        plan_id: planId,
        status: "active",
        amount_cents: amount,
        currency: "USD",
        billing_cycle: billingCycle,
        current_period_start: currentPeriodStart.toISOString(),
        current_period_end: currentPeriodEnd.toISOString(),
      })
      .select()
      .single()

    if (subscriptionError) {
      throw subscriptionError
    }

    // Update profile
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        subscription_plan: planId,
        subscription_status: "active",
        subscription_start_date: currentPeriodStart.toISOString(),
        subscription_end_date: currentPeriodEnd.toISOString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)

    if (updateError) {
      throw updateError
    }

    // Create initial payment record
    const { error: paymentError } = await supabase.from("payments").insert({
      user_id: user.id,
      subscription_id: subscription.id,
      amount_cents: amount,
      currency: "USD",
      status: "succeeded",
      payment_method: "card",
      description: `${planId} plan - ${billingCycle} billing`,
      paid_at: new Date().toISOString(),
    })

    if (paymentError) {
      console.error("Error creating payment record:", paymentError)
      // Don't fail the subscription creation for this
    }

    return NextResponse.json({
      success: true,
      subscription,
      message: `Successfully subscribed to ${planId} plan`,
    })
  } catch (error) {
    console.error("Subscription creation error:", error)
    return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 })
  }
}
