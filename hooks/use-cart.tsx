"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useAuth } from "./use-auth"
import { supabase } from "@/lib/supabase-browser"
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
  type: string
  name: string
  description: string
  status: "deploying" | "active" | "inactive"
  deployedAt: string
  uptime: string
  lastActive: string
  isOrchestrator?: boolean
  icon?: string
  progress?: number
}

interface CartContextType {
  // Legacy API for CartModal compatibility
  items: CartItem[]
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  total: number
  deployAgents: () => Promise<void>

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
    // Always include Central Orchestrator
    const baseAgents: DeployedAgent[] = [
      {
        id: "central-orchestrator",
        type: "central-orchestrator",
        name: "Central Orchestrator",
        description: "Your strategic AI coordinator",
        status: "active",
        deployedAt: new Date().toISOString(),
        uptime: "100%",
        lastActive: "Just now",
        isOrchestrator: true,
        icon: "🧠",
      },
    ]

    if (!user) {
      setDeployedAgents(baseAgents)
      return
    }

    try {
      const { data, error } = await supabase.from("ai_agents").select("*").eq("user_id", user.id).eq("status", "active")

      if (error) {
        console.error("Error loading user agents:", error)
        setDeployedAgents(baseAgents)
        return
      }

      const userAgents: DeployedAgent[] = (data || []).map((agent) => ({
        id: agent.id,
        type: agent.agent_type || agent.type || agent.id,
        name: agent.name,
        description: agent.description,
        status: "active",
        deployedAt: agent.created_at,
        uptime: "100%",
        lastActive: "Just now",
        icon: getAgentIcon(agent.agent_type || agent.type || agent.id),
      }))

      setDeployedAgents([...baseAgents, ...userAgents])
    } catch (error) {
      console.error("Error loading user agents:", error)
      setDeployedAgents(baseAgents)
    }
  }

  const getAgentIcon = (agentType: string): string => {
    const icons: Record<string, string> = {
      "central-orchestrator": "🧠",
      "hr-advisory": "👥",
      "customer-service": "🎧",
      "sales-coach": "🎯",
      marketing: "📢",
      analytics: "📊",
      "technical-support": "🔧",
    }
    return icons[agentType] || "🤖"
  }

  useEffect(() => {
    loadUserAgents()
  }, [user])

  const addToCart = (agent: any) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === agent.id)
      if (existing) {
        return prev.map((item) => (item.id === agent.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...agent, quantity: 1 }]
    })
    toast({
      title: "Added to cart",
      description: `${agent.name} has been added to your cart.`,
    })
  }

  const removeFromCart = (agentId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== agentId))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
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
      // Simulate deployment
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Add to deployed agents
      const newAgent: DeployedAgent = {
        id: agent.id,
        type: agent.id,
        name: agent.name,
        description: agent.description,
        status: "active",
        deployedAt: new Date().toISOString(),
        uptime: "100%",
        lastActive: "Just now",
        icon: getAgentIcon(agent.id),
      }

      setDeployedAgents((prev) => [...prev, newAgent])

      // Remove from cart after successful deployment
      removeFromCart(agent.id)

      toast({
        title: "Agent deployed successfully",
        description: `${agent.name} is now active and ready to use.`,
      })
    } catch (error) {
      console.error("Deployment error:", error)
      toast({
        title: "Deployment failed",
        description: "There was an error deploying the agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeploying(false)
    }
  }

  const deployAgents = async () => {
    for (const item of cartItems) {
      await deployAgent(item)
    }
  }

  const isAgentInCart = (agentId: string) => {
    return cartItems.some((item) => item.id === agentId)
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.some((agent) => agent.type === agentId && agent.status === "active")
  }

  const isAgentDeploying = (agentId: string) => {
    return deployedAgents.some((agent) => agent.type === agentId && agent.status === "deploying")
  }

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        // Legacy API
        items: cartItems,
        updateQuantity,
        removeItem: removeFromCart,
        total,
        deployAgents,

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
