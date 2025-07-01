import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { paymentId, transactionHash } = await request.json()

    if (!paymentId || !transactionHash) {
      return NextResponse.json({ error: "Payment ID and transaction hash are required" }, { status: 400 })
    }

    console.log("Confirming USDT payment:", { paymentId, transactionHash })

    // In production, verify the transaction on the blockchain
    // For demo purposes, we'll simulate verification
    const isValidTransaction = transactionHash.length >= 10 // Simple validation

    if (!isValidTransaction) {
      return NextResponse.json({ error: "Invalid transaction hash" }, { status: 400 })
    }

    // Update payment record
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .update({
        status: "succeeded",
        usdt_transaction_hash: transactionHash,
        paid_at: new Date().toISOString(),
      })
      .eq("id", paymentId)
      .select()
      .single()

    if (paymentError) {
      console.error("Payment update error:", paymentError)
      return NextResponse.json({ error: "Failed to update payment" }, { status: 500 })
    }

    // Get agent purchases for this payment
    const { data: purchases, error: purchasesError } = await supabase
      .from("agent_purchases")
      .select("*")
      .eq("payment_id", paymentId)

    if (purchasesError) {
      console.error("Failed to get agent purchases:", purchasesError)
      return NextResponse.json({ error: "Failed to get agent purchases" }, { status: 500 })
    }

    // Auto-deploy agents if enabled
    const deployedAgents = []
    for (const purchase of purchases || []) {
      if (purchase.auto_deploy) {
        // Simulate deployment process
        const deploymentUrl = `https://agent-${purchase.agent_id}.neuralia.ai`

        // Update purchase record with deployment info
        await supabase
          .from("agent_purchases")
          .update({
            deployed_at: new Date().toISOString(),
          })
          .eq("id", purchase.id)

        deployedAgents.push({
          id: purchase.agent_id,
          name: purchase.agent_name,
          url: deploymentUrl,
        })
      }
    }

    console.log("Payment confirmed and agents deployed:", deployedAgents)

    return NextResponse.json({
      success: true,
      payment: payment,
      deployedAgents: deployedAgents,
      message: `Payment confirmed! ${deployedAgents.length} agent${deployedAgents.length > 1 ? "s" : ""} deployed successfully.`,
    })
  } catch (error) {
    console.error("Confirm USDT payment error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
