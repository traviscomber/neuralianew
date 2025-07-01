"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"
import { useAuth } from "@/hooks/use-auth"
import { supabase } from "@/lib/supabase-browser"

export interface CartItem {
  id: string
  name: string
  description: string
  price: number
  category: string
}

interface DeployedAgent {
  id: string
  name: string
  description: string
  avatar?: string
  expertise?: string[]
  pricing?: string
  price?: number
  rating?: number
  reviews?: number
  status: string
  userId: string
  agent_id: string
  deployed_at: string
}

interface CartCtx {
  items: CartItem[]
  deployedAgents: DeployedAgent[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  deployAgent: (agent: CartItem) => Promise<void>
  upgradeAgent: (agentId: string) => void
  getTotalItems: () => number
  getTotalPrice: () => number
  loadDeployedAgents: () => Promise<void>
  // NEW ↓
  isDeploying: boolean
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
}

const CartContext = createContext<CartCtx | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([])
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])
  const { user } = useAuth()

  // --- helper booleans used by Dashboard UI ------------------------------
  const isDeploying = deployingAgents.length > 0

  const isAgentDeploying = (agentId: string) => deployingAgents.includes(agentId)

  const isAgentDeployed = (agentId: string) =>
    deployedAgents.some((agent) => agent.agent_id === agentId || agent.id === agentId)

  useEffect(() => {
    if (user) {
      loadDeployedAgents()
    } else {
      setDeployedAgents([])
    }
  }, [user])

  const loadDeployedAgents = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase.from("deployed_agents").select("*").eq("user_id", user.id)

      if (error) {
        console.error("Error loading deployed agents:", error)
        return
      }

      if (data) {
        setDeployedAgents(data as DeployedAgent[])
      }
    } catch (error) {
      console.error("Error loading deployed agents:", error)
    }
  }

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) {
        toast({
          title: "Already in cart",
          description: `${item.name} is already in your cart.`,
        })
        return prev
      }

      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart.`,
      })

      return [...prev, item]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const deployAgent = async (agent: CartItem) => {
    if (!user) {
      toast({
        title: "Not authenticated",
        description: "You must be signed in to deploy agents.",
        variant: "destructive",
      })
      return
    }

    // mark as deploying
    setDeployingAgents((prev) => [...prev, agent.id])

    try {
      const { data, error } = await supabase
        .from("deployed_agents")
        .insert([
          {
            user_id: user.id,
            agent_id: agent.id,
            agent_name: agent.name,
            agent_description: agent.description,
            agent_type: agent.category,
            status: "active",
            deployed_at: new Date().toISOString(),
          },
        ])
        .select()
        .single()

      if (error) throw error

      setDeployedAgents((prev) => [...prev, data as DeployedAgent])
      setItems((prev) => prev.filter((item) => item.id !== agent.id))
      toast({ title: "Agent deployed", description: `${agent.name} has been successfully deployed.` })
    } catch (err) {
      console.error("Error deploying agent:", err)
      toast({
        title: "Deployment failed",
        description: "There was an error deploying the agent.",
        variant: "destructive",
      })
    } finally {
      // remove from deploying list
      setDeployingAgents((prev) => prev.filter((id) => id !== agent.id))
    }
  }

  const upgradeAgent = (agentId: string) => {
    setDeployedAgents((prev) => prev.map((agent) => (agent.id === agentId ? { ...agent, status: "active" } : agent)))
  }

  const getTotalItems = () => items.length

  const getTotalPrice = () => items.reduce((total, item) => total + item.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        deployedAgents,
        addToCart,
        removeFromCart,
        clearCart,
        deployAgent,
        upgradeAgent,
        getTotalItems,
        getTotalPrice,
        loadDeployedAgents,
        // NEW ↓
        isDeploying,
        isAgentDeployed,
        isAgentDeploying,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside CartProvider")
  return ctx
}
