"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./use-auth"
import { supabase } from "@/lib/supabase"
import { useToast } from "./use-toast"

interface CartItem {
  id: string
  name: string
  price: number
  type: "agent" | "upgrade"
}

interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  agent_name: string
  agent_icon: string
  status: "deploying" | "active" | "trial" | "expired"
  deployment_date: string
  trial_start_date?: string
  trial_end_date?: string
  created_at: string
}

interface CartContextType {
  cartItems: CartItem[]
  deployedAgents: DeployedAgent[]
  loading: boolean
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  deployAgent: (agentId: string) => Promise<void>
  upgradeAgent: (agentId: string) => Promise<void>
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
  getAgentStatus: (agentId: string) => string | null
  refreshDeployedAgents: () => Promise<void>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  // Load deployed agents when user changes
  useEffect(() => {
    if (user) {
      refreshDeployedAgents()
    } else {
      setDeployedAgents([])
    }
  }, [user])

  const refreshDeployedAgents = async () => {
    if (!user) return

    try {
      setLoading(true)
      const { data, error } = await supabase
        .from("deployed_agents")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (error) throw error
      setDeployedAgents(data || [])
    } catch (error) {
      console.error("Error fetching deployed agents:", error)
      toast({
        title: "Error",
        description: "Failed to load deployed agents",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        toast({
          title: "Already in cart",
          description: `${item.name} is already in your cart`,
        })
        return prev
      }

      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart`,
      })
      return [...prev, item]
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
    })
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  const deployAgent = async (agentId: string) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to deploy agents",
        variant: "destructive",
      })
      return
    }

    try {
      setLoading(true)

      // Find the agent details
      const cartItem = cartItems.find((item) => item.id === agentId)
      if (!cartItem) {
        throw new Error("Agent not found in cart")
      }

      // Calculate trial dates
      const now = new Date()
      const trialEnd = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000) // 5 days from now

      // Insert into deployed_agents table
      const { error } = await supabase.from("deployed_agents").insert({
        user_id: user.id,
        agent_id: agentId,
        agent_name: cartItem.name,
        agent_icon: getAgentIcon(agentId),
        status: "trial",
        deployment_date: now.toISOString(),
        trial_start_date: now.toISOString(),
        trial_end_date: trialEnd.toISOString(),
      })

      if (error) throw error

      // Remove from cart
      removeFromCart(agentId)

      // Refresh deployed agents
      await refreshDeployedAgents()

      toast({
        title: "Agent deployed!",
        description: `${cartItem.name} is now active with a 5-day free trial`,
      })
    } catch (error) {
      console.error("Error deploying agent:", error)
      toast({
        title: "Deployment failed",
        description: "Failed to deploy agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const upgradeAgent = async (agentId: string) => {
    if (!user) return

    try {
      setLoading(true)

      const { error } = await supabase
        .from("deployed_agents")
        .update({
          status: "active",
          trial_end_date: null,
        })
        .eq("user_id", user.id)
        .eq("agent_id", agentId)

      if (error) throw error

      await refreshDeployedAgents()

      toast({
        title: "Agent upgraded!",
        description: "Your agent is now fully activated",
      })
    } catch (error) {
      console.error("Error upgrading agent:", error)
      toast({
        title: "Upgrade failed",
        description: "Failed to upgrade agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.some((agent) => agent.agent_id === agentId)
  }

  const isAgentDeploying = (agentId: string) => {
    return deployedAgents.some((agent) => agent.agent_id === agentId && agent.status === "deploying")
  }

  const getAgentStatus = (agentId: string) => {
    const agent = deployedAgents.find((agent) => agent.agent_id === agentId)
    return agent?.status || null
  }

  const getAgentIcon = (agentId: string) => {
    const iconMap: Record<string, string> = {
      "ceo-neural-orchestrator": "🧠",
      "cmo-growth-engine": "📈",
      "cto-innovation-architect": "⚡",
    }
    return iconMap[agentId] || "🤖"
  }

  const value = {
    cartItems,
    deployedAgents,
    loading,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    deployAgent,
    upgradeAgent,
    isAgentDeployed,
    isAgentDeploying,
    getAgentStatus,
    refreshDeployedAgents,
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
