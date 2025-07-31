import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    console.log("📡 API: Obteniendo agentes desplegados...")

    // Crear cliente servidor con cookies
    const supabase = createServerClient()

    // Obtener usuario autenticado
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError) {
      console.error("❌ Error de autenticación:", authError)
      return NextResponse.json({ error: "Error de autenticación", details: authError.message }, { status: 401 })
    }

    if (!user) {
      console.log("👤 No hay usuario autenticado")
      return NextResponse.json({ error: "Usuario no autenticado" }, { status: 401 })
    }

    console.log("👤 Usuario autenticado:", user.email)

    // Obtener agentes desplegados del usuario
    const { data: deployedAgents, error: fetchError } = await supabase
      .from("deployed_agents")
      .select("*")
      .eq("user_id", user.id)
      .order("deployment_date", { ascending: false })

    if (fetchError) {
      console.error("❌ Error obteniendo agentes desplegados:", fetchError)
      return NextResponse.json(
        { error: "Error obteniendo agentes desplegados", details: fetchError.message },
        { status: 500 },
      )
    }

    console.log(`📦 Encontrados ${deployedAgents?.length || 0} agentes desplegados`)

    return NextResponse.json({
      success: true,
      agents: deployedAgents || [],
      count: deployedAgents?.length || 0,
    })
  } catch (error) {
    console.error("❌ Error inesperado en API deployed-agents:", error)
    return NextResponse.json(
      {
        error: "Error interno del servidor",
        details: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
