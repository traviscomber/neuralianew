import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Use service role key to bypass RLS
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items, userId } = body

    console.log("Received payment request:", { items, userId })

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Items are required" }, { status: 400 })
    }

    // Calculate total amount
    const totalCents = items.reduce((sum: number, item: any) => sum + (item.price || 0), 0)
    const usdtAmount = totalCents / 100 // Convert cents to dollars for USDT

    console.log("Calculated amounts:", { totalCents, usdtAmount })

    // Generate a unique USDT wallet address (in production, use a real wallet service)
    const walletAddress = `TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t`

    // Create payment record using service role (bypasses RLS)
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .insert({
        user_id: userId,
        amount_cents: totalCents,
        currency: "USD",
        status: "pending",
        payment_method: "usdt",
        usdt_wallet_address: walletAddress,
        usdt_amount: usdtAmount,
        description: `Payment for ${items.length} AI agent${items.length > 1 ? "s" : ""}`,
      })
      .select()
      .single()

    if (paymentError) {
      console.error("Payment creation error:", paymentError)
      return NextResponse.json(
        {
          error: "Failed to create payment",
          details: paymentError.message,
        },
        { status: 500 },
      )
    }

    console.log("Payment created successfully:", payment)

    // Create agent purchase records
    const agentPurchases = items.map((item: any) => ({
      user_id: userId,
      payment_id: payment.id,
      agent_id: item.id,
      agent_type: item.type || "ai-agent",
      agent_name: item.name,
      price_cents: item.price || 0,
      currency: "USD",
      auto_deploy: true,
    }))

    const { error: purchaseError } = await supabase.from("agent_purchases").insert(agentPurchases)

    if (purchaseError) {
      console.error("Agent purchase creation error:", purchaseError)
      return NextResponse.json(
        {
          error: "Failed to create agent purchases",
          details: purchaseError.message,
        },
        { status: 500 },
      )
    }

    console.log("Agent purchases created successfully")

    return NextResponse.json({
      success: true,
      paymentId: payment.id,
      walletAddress,
      amount: usdtAmount,
      currency: "USDT",
      status: "pending",
      items: items.length,
    })
  } catch (error) {
    console.error("Create USDT payment error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
