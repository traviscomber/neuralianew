import { type NextRequest, NextResponse } from "next/server"
import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const supabase = createSupabaseClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export async function POST(req: NextRequest) {
  try {
    /* ------------------- auth ------------------- */
    const auth = req.headers.get("authorization") ?? ""
    if (!auth.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401)

    const token = auth.slice(7)
    const { data: userData, error: authError } = await supabase.auth.getUser(token)
    if (authError || !userData.user) return json({ error: "Unauthorized" }, 401)

    /* -------------- parse body safely ----------- */
    let body: any = {}
    try {
      body = await req.json()
    } catch {
      return json({ error: "Invalid JSON body" }, 400)
    }
    const agent = body.agent
    if (!agent?.id) return json({ error: "Missing agent" }, 400)

    /* ------------- pretend deployment ---------- */
    // In prod you'd insert into DB or kick off a job.
    console.log(`Deployed agent ${agent.id} for user ${userData.user.id}`)

    return json({ success: true })
  } catch (err: any) {
    console.error("API /agents/deploy error:", err)
    return json({ error: "Internal server error" }, 500)
  }
}

/* helper – always return valid JSON */
function json(payload: Record<string, unknown>, status = 200) {
  return NextResponse.json(payload, { status })
}
