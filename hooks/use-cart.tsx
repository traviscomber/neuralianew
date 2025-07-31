"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"

// Tipos
interface Agent {
  id: string
  name: string
  description: string
  category: string
  type: string
  price: number
  icon: string
  features?: string[]
}

interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  name: string
  agent_name: string
  description: string
  agent_description: string
  agent_type: string
  icon: string
  status: "trial" | "active" | "expired"
  deployment_date: string
  trial_start?: string
  trial_end?: string
  created_at: string
}

interface CartContextType {
  // Cart functionality
  cartItems: Agent[]
  addToCart: (agent: Agent) => void
  removeFromCart: (agentId: string) => void
  clearCart: () => void
  getTotalPrice: () => number

  // Deployment functionality
  deployedAgents: DeployedAgent[]
  deployAgent: (agent: Agent) => Promise<void>
  refreshDeployedAgents: () => Promise<void>
  isDeploying: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Agent[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([])
  const [isDeploying, setIsDeploying] = useState(false)
  const { toast } = useToast()
  const { user } = useAuth()

  // Cargar carrito desde localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("neuralia-cart")
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error cargando carrito:", error)
        localStorage.removeItem("neuralia-cart")
      }
    }
  }, [])

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem("neuralia-cart", JSON.stringify(cartItems))
  }, [cartItems])

  // Cargar agentes desplegados cuando el usuario cambia
  useEffect(() => {
    if (user) {
      refreshDeployedAgents()
    } else {
      setDeployedAgents([])
    }
  }, [user])

  // Funciones del carrito
  const addToCart = (agent: Agent) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === agent.id)
      if (exists) {
        toast({
          title: "Ya está en el carrito",
          description: `${agent.name} ya está en tu carrito.`,
        })
        return prev
      }

      toast({
        title: "Agregado al carrito",
        description: `${agent.name} se agregó a tu carrito.`,
      })

      return [...prev, agent]
    })
  }

  const removeFromCart = (agentId: string) => {
    setCartItems((prev) => {
      const agent = prev.find((item) => item.id === agentId)
      if (agent) {
        toast({
          title: "Removido del carrito",
          description: `${agent.name} se removió de tu carrito.`,
        })
      }
      return prev.filter((item) => item.id !== agentId)
    })
  }

  const clearCart = () => {
    setCartItems([])
    toast({
      title: "Carrito limpiado",
      description: "Se removieron todos los agentes del carrito.",
    })
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  // Función para refrescar agentes desplegados
  const refreshDeployedAgents = async () => {
    if (!user) {
      console.log("👤 No hay usuario autenticado")
      return
    }

    try {
      console.log("🔄 Refrescando agentes desplegados para usuario:", user.email)

      const response = await fetch("/api/deployed-agents", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      console.log("📦 Agentes desplegados recibidos:", data)

      setDeployedAgents(data.agents || [])
    } catch (error) {
      console.error("❌ Error refrescando agentes desplegados:", error)
      toast({
        title: "Error",
        description: "No se pudieron cargar los agentes desplegados.",
        variant: "destructive",
      })
    }
  }

  // Función para desplegar agente
  const deployAgent = async (agent: Agent) => {
    if (!user) {
      toast({
        title: "Error",
        description: "Debes iniciar sesión para desplegar agentes.",
        variant: "destructive",
      })
      return
    }

    // Validar datos del agente
    if (!agent || !agent.id || !agent.name) {
      console.error("❌ Datos de agente inválidos:", agent)
      toast({
        title: "Error",
        description: "Datos del agente inválidos.",
        variant: "destructive",
      })
      return
    }

    // Verificar si ya está desplegado
    const alreadyDeployed = deployedAgents.find((deployed) => deployed.agent_id === agent.id)
    if (alreadyDeployed) {
      toast({
        title: "Ya desplegado",
        description: `${agent.name} ya está desplegado en tu cuenta.`,
        variant: "destructive",
      })
      return
    }

    setIsDeploying(true)
    console.log("🚀 Desplegando agente:", agent.name)
    console.log("📊 Datos del agente:", agent)

    try {
      const response = await fetch("/api/deploy-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agent }),
      })

      console.log("📡 Respuesta del servidor:", response.status, response.statusText)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Error desconocido" }))
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const result = await response.json()
      console.log("✅ Agente desplegado exitosamente:", result)

      toast({
        title: "¡Agente desplegado!",
        description: `${agent.name} se desplegó con un trial de 5 días.`,
      })

      // Remover del carrito si estaba ahí
      removeFromCart(agent.id)

      // Refrescar lista de agentes desplegados
      await refreshDeployedAgents()

      // Disparar evento personalizado para actualizar otros componentes
      window.dispatchEvent(
        new CustomEvent("agentDeployed", {
          detail: { agent, deployedAgent: result.deployedAgent },
        }),
      )
    } catch (error) {
      console.error("❌ Error desplegando agente:", error)
      toast({
        title: "Error en el despliegue",
        description: error instanceof Error ? error.message : "No se pudo desplegar el agente.",
        variant: "destructive",
      })
    } finally {
      setIsDeploying(false)
    }
  }

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    deployedAgents,
    deployAgent,
    refreshDeployedAgents,
    isDeploying,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// Export both named and default for compatibility
export default useCart
