import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const paymentId = searchParams.get("paymentId")

    if (!paymentId) {
      return NextResponse.json({ error: "Payment ID is required" }, { status: 400 })
    }

    // Get payment details
    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .select("*")
      .eq("id", paymentId)
      .single()

    if (paymentError) {
      console.error("Payment fetch error:", paymentError)
      return NextResponse.json({ error: "Payment not found" }, { status: 404 })
    }

    // Get associated agent purchases
    const { data: purchases, error: purchasesError } = await supabase
      .from("agent_purchases")
      .select("*")
      .eq("payment_id", paymentId)

    if (purchasesError) {
      console.error("Purchases fetch error:", purchasesError)
    }

    return NextResponse.json({
      payment: payment,
      purchases: purchases || [],
      status: payment.status,
    })
  } catch (error) {
    console.error("Payment status error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
