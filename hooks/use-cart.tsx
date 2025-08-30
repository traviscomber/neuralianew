"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "@/hooks/use-auth"
import { supabase } from "@/lib/supabase"
import { toast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  icon?: any
  features?: string[]
  color?: string
}

interface CartContextType {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  deployedAgents: string[]
  isAgentDeployed: (agentId: string) => boolean
  deployAgent: (agent: CartItem) => Promise<void>
  removeDeployedAgent: (agentId: string) => Promise<void>
  loading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("neuralia-cart")
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        if (Array.isArray(parsedCart)) {
          setItems(parsedCart)
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
      setItems([])
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("neuralia-cart", JSON.stringify(items))
    } catch (error) {
      console.error("Error saving cart to localStorage:", error)
    }
  }, [items])

  // Load deployed agents when user changes
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
      const { data, error } = await supabase
        .from("deployed_agents")
        .select("agent_name")
        .eq("user_id", user.id)
        .eq("status", "active")

      if (error) {
        console.error("Error loading deployed agents:", error)
        return
      }

      const agentIds = data?.map((agent) => agent.agent_name) || []
      setDeployedAgents(agentIds)
    } catch (error) {
      console.error("Error in loadDeployedAgents:", error)
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

  const removeFromCart = (itemId: string) => {
    setItems((prev) => {
      const item = prev.find((i) => i.id === itemId)
      if (item) {
        toast({
          title: "Removed from cart",
          description: `${item.name} has been removed from your cart.`,
        })
      }
      return prev.filter((i) => i.id !== itemId)
    })
  }

  const clearCart = () => {
    setItems([])
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    })
  }

  const isAgentDeployed = (agentId: string): boolean => {
    return deployedAgents.includes(agentId)
  }

  const deployAgent = async (agent: CartItem) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to deploy agents.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const trialEndDate = new Date()
      trialEndDate.setDate(trialEndDate.getDate() + 5) // 5-day trial

      const { data, error } = await supabase
        .from("deployed_agents")
        .insert({
          user_id: user.id,
          agent_name: agent.id,
          agent_description: agent.description,
          agent_type: agent.category,
          status: "trial",
          deployment_date: new Date().toISOString(),
          trial_start_date: new Date().toISOString(),
          trial_end_date: trialEndDate.toISOString(),
          price: agent.price,
        })
        .select()
        .single()

      if (error) {
        console.error("Error deploying agent:", error)
        toast({
          title: "Deployment failed",
          description: "Failed to deploy the agent. Please try again.",
          variant: "destructive",
        })
        return
      }

      // Update deployed agents list
      setDeployedAgents((prev) => [...prev, agent.id])

      // Remove from cart
      removeFromCart(agent.id)

      toast({
        title: "Agent deployed!",
        description: `${agent.name} has been deployed with a 5-day free trial.`,
      })
    } catch (error) {
      console.error("Error in deployAgent:", error)
      toast({
        title: "Deployment failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const removeDeployedAgent = async (agentId: string) => {
    if (!user) return

    setLoading(true)

    try {
      const { error } = await supabase.from("deployed_agents").delete().eq("user_id", user.id).eq("agent_name", agentId)

      if (error) {
        console.error("Error removing deployed agent:", error)
        toast({
          title: "Removal failed",
          description: "Failed to remove the agent. Please try again.",
          variant: "destructive",
        })
        return
      }

      // Update deployed agents list
      setDeployedAgents((prev) => prev.filter((id) => id !== agentId))

      toast({
        title: "Agent removed",
        description: "The agent has been successfully removed.",
      })
    } catch (error) {
      console.error("Error in removeDeployedAgent:", error)
      toast({
        title: "Removal failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const totalItems = items?.length || 0
  const totalPrice = items?.reduce((sum, item) => sum + item.price, 0) || 0

  const value = {
    items: items || [],
    addToCart,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    deployedAgents: deployedAgents || [],
    isAgentDeployed,
    deployAgent,
    removeDeployedAgent,
    loading,
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
