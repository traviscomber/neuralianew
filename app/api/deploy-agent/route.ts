import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

/**
 * Securely deploy an agent for the signed-in user.
 * Body: { agent: { id: string; name: string; description?: string; icon?: string } }
 */
export async function POST(request: NextRequest) {
  try {
    console.log("🚀 Iniciando despliegue de agente...")

    // Obtener datos del request
    const body = await request.json()
    const { agent } = body

    console.log("📦 Datos recibidos:", { agent })

    // Validar datos del agente
    if (!agent || !agent.id || !agent.name) {
      console.error("❌ Datos de agente inválidos:", agent)
      return NextResponse.json({ error: "Faltan datos del agente (id, name requeridos)" }, { status: 400 })
    }

    // Crear cliente Supabase con service-role key
    const supabase = createServerClient()

    // Obtener usuario autenticado
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      console.error("❌ Error de autenticación:", authError)
      return NextResponse.json({ error: "Usuario no autenticado" }, { status: 401 })
    }

    console.log("👤 Usuario autenticado:", user.email)

    // Verificar si el agente ya está desplegado
    const { data: existingAgent } = await supabase
      .from("deployed_agents")
      .select("id")
      .eq("user_id", user.id)
      .eq("agent_id", agent.id)
      .single()

    if (existingAgent) {
      console.log("⚠️ Agente ya desplegado")
      return NextResponse.json({ error: "Este agente ya está desplegado" }, { status: 409 })
    }

    // Preparar datos para inserción
    const now = new Date()
    const trialEnd = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000) // +5 días

    const deploymentData = {
      user_id: user.id,
      agent_id: agent.id,
      name: agent.name,
      agent_name: agent.name,
      description: agent.description || "Agente Ejecutivo IA",
      agent_description: agent.description || "Agente Ejecutivo IA",
      agent_type: agent.agentType || agent.category || "neural-executive",
      icon: agent.icon || "🤖",
      status: "trial",
      deployment_date: now.toISOString(),
      trial_start: now.toISOString(),
      trial_end: trialEnd.toISOString(),
    }

    console.log("💾 Insertando en base de datos:", deploymentData)

    // Insertar agente desplegado
    const { data: deployedAgent, error: insertError } = await supabase
      .from("deployed_agents")
      .insert(deploymentData)
      .select()
      .single()

    if (insertError) {
      console.error("❌ Error insertando agente:", insertError)
      return NextResponse.json({ error: `Error desplegando agente: ${insertError.message}` }, { status: 500 })
    }

    console.log("✅ Agente desplegado exitosamente:", deployedAgent.id)

    return NextResponse.json({
      success: true,
      agent: deployedAgent,
      message: `${agent.name} desplegado con trial de 5 días`,
    })
  } catch (error) {
    console.error("❌ Error inesperado en deploy-agent:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
