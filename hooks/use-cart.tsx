"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./use-auth"
import { toast } from "@/hooks/use-toast"

interface CartItem {
  id: string
  type: string
  name: string
  description: string
  price: number
  features: string[]
  icon: string
  color: string
  quantity: number
}

interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  agent_type: string
  name: string
  description: string
  status: "deploying" | "active" | "inactive" | "error"
  deployment_url: string
  configuration: any
  performance_metrics: any
  uptime?: string
  last_active?: string
  created_at: string
  updated_at: string
}

interface CartContextType {
  // Legacy API for compatibility
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number

  // New API
  cartItems: CartItem[]
  deployedAgents: DeployedAgent[]
  addToCart: (agent: any) => void
  removeFromCart: (agentId: string) => void
  deployAgent: (agent: any) => Promise<void>
  isDeploying: boolean
  isAgentInCart: (agentId: string) => boolean
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
  loadUserAgents: () => Promise<void>
  itemCount: number
  notifications: any[]
  dismissNotification: (id: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([])
  const [isDeploying, setIsDeploying] = useState(false)
  const [notifications, setNotifications] = useState<any[]>([])

  const loadUserAgents = async () => {
    // Always reset first
    setDeployedAgents([])

    if (!user) {
      console.log("No user, skipping agent load")
      return
    }

    try {
      // Use the single Supabase client instance
      const { supabase } = await import("@/lib/supabase-browser")

      console.log("Loading agents for user:", user.id)

      // Use created_at instead of deployed_at since that's the actual column name
      const { data, error } = await supabase
        .from("deployed_agents")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Supabase query error:", error)
        throw error
      }

      console.log("Loaded deployed agents:", data)

      // Transform data to include computed fields for display
      const transformedData = (data || []).map((agent) => ({
        ...agent,
        uptime: agent.performance_metrics?.uptime || "100%",
        last_active: agent.updated_at ? new Date(agent.updated_at).toLocaleString() : "Just now",
        icon: getAgentIcon(agent.agent_type),
      }))

      setDeployedAgents(transformedData)
    } catch (err) {
      console.error("Error loading deployed agents:", err)
      // Don't show toast for initial load failures
    }
  }

  const getAgentIcon = (agentType: string) => {
    const iconMap: { [key: string]: string } = {
      "ceo-neural-agent": "🧠",
      "hr-advisory": "👥",
      "sales-coach": "🎯",
      "customer-service": "🎧",
      "technical-support": "🔧",
      marketing: "📢",
      analytics: "📊",
    }
    return iconMap[agentType] || "🤖"
  }

  useEffect(() => {
    if (user) {
      console.log("User changed, loading agents:", user.email)
      loadUserAgents()
    } else {
      console.log("No user, clearing agents")
      setDeployedAgents([])
    }
  }, [user])

  // Legacy API functions
  const addItem = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const newItem: CartItem = {
      ...item,
      type: item.type || item.id,
      description: item.description || "",
      features: item.features || [],
      icon: item.icon || "🤖",
      color: item.color || "bg-blue-600",
      quantity: item.quantity || 1,
    }

    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === newItem.id)
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === newItem.id ? { ...cartItem, quantity: cartItem.quantity + newItem.quantity } : cartItem,
        )
      }
      return [...prev, newItem]
    })

    toast({
      title: "Added to cart",
      description: `${newItem.name} has been added to your cart.`,
    })
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  // New API functions
  const addToCart = (agent: any) => {
    addItem(agent)
  }

  const removeFromCart = (agentId: string) => {
    removeItem(agentId)
  }

  const deployAgent = async (agent: any) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to deploy agents.",
        variant: "destructive",
      })
      return
    }

    setIsDeploying(true)

    try {
      console.log("Deploying agent:", agent.name, "for user:", user.email)

      const response = await fetch("/api/agents/deploy", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agentId: agent.id,
          agentType: agent.id,
          name: agent.name,
          description: agent.description,
          configuration: {
            model: "gpt-4",
            temperature: 0.7,
            maxTokens: 2000,
            systemPrompt: agent.systemPrompt || `You are ${agent.name}, ${agent.description}`,
            features: agent.features || [],
          },
        }),
      })

      const data = await response.json()
      console.log("Deploy response:", response.status, data)

      if (response.ok) {
        // Reload deployed agents to get the latest data
        await loadUserAgents()

        // Remove from cart after successful deployment
        removeFromCart(agent.id)

        toast({
          title: "Agent deployed successfully",
          description: `${agent.name} is now active and ready to use.`,
        })

        // Add notification
        setNotifications((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            type: "success",
            title: "Agent Deployed",
            message: `${agent.name} has been successfully deployed and is now active.`,
            timestamp: new Date().toISOString(),
          },
        ])
      } else {
        throw new Error(data.error || "Failed to deploy agent")
      }
    } catch (error) {
      console.error("Deployment error:", error)
      toast({
        title: "Deployment failed",
        description:
          error instanceof Error ? error.message : "There was an error deploying the agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeploying(false)
    }
  }

  const isAgentInCart = (agentId: string) => {
    return cartItems.some((item) => item.id === agentId)
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.some((agent) => agent.agent_id === agentId && agent.status === "active")
  }

  const isAgentDeploying = (agentId: string) => {
    return deployedAgents.some((agent) => agent.agent_id === agentId && agent.status === "deploying")
  }

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const itemCount = getTotalItems()

  return (
    <CartContext.Provider
      value={{
        // Legacy API
        items: cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,

        // New API
        cartItems,
        deployedAgents,
        addToCart,
        removeFromCart,
        deployAgent,
        isDeploying,
        isAgentInCart,
        isAgentDeployed,
        isAgentDeploying,
        loadUserAgents,
        itemCount,
        notifications,
        dismissNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
