"use client"

import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from "react"
import { dbService } from "@/lib/database"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"

export interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity?: number
  category?: string
  icon?: string
}

export interface DeployedAgent {
  id: string
  user_id: string
  agent_id: string
  name: string
  agent_name?: string
  agent_description?: string
  agent_type?: string
  icon?: string
  status: "deploying" | "active" | "trial" | "expired"
  created_at: string
  expires_at?: string
  trial_ends_at?: string // 5-day trial expiration
  is_trial: boolean
}

interface CartContextType {
  items: CartItem[]
  deployedAgents: DeployedAgent[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  deployAgents: () => Promise<void>
  upgradeAgent: (agentId: string) => Promise<void>
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
  isAgentOnTrial: (agentId: string) => boolean
  getTrialTimeRemaining: (agentId: string) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([])
  const { user } = useAuth()
  const { toast } = useToast()

  // Load deployed agents when user changes
  useEffect(() => {
    if (user) {
      loadDeployedAgents()
    } else {
      setDeployedAgents([])
    }
  }, [user])

  // Check for expired trials every minute
  useEffect(() => {
    const interval = setInterval(() => {
      checkExpiredTrials()
    }, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [deployedAgents])

  const loadDeployedAgents = async () => {
    if (!user) return

    try {
      const agents = await dbService.getUserDeployedAgents(user.id)
      const mappedAgents: DeployedAgent[] = agents.map((agent: any) => ({
        id: agent.id,
        user_id: agent.user_id,
        agent_id: agent.agent_id,
        name: agent.name || agent.agent_name || "Unnamed Agent",
        agent_name: agent.agent_name,
        agent_description: agent.agent_description,
        agent_type: agent.agent_type,
        icon: agent.icon || "🤖",
        status: determineAgentStatus(agent),
        created_at: agent.created_at,
        expires_at: agent.expires_at,
        trial_ends_at: agent.trial_ends_at,
        is_trial: agent.is_trial || false,
      }))
      setDeployedAgents(mappedAgents)
    } catch (error) {
      console.error("Failed to load deployed agents:", error)
    }
  }

  const determineAgentStatus = (agent: any): "deploying" | "active" | "trial" | "expired" => {
    const now = new Date()

    // Check if trial has expired
    if (agent.trial_ends_at && new Date(agent.trial_ends_at) < now) {
      return "expired"
    }

    // Check if it's still on trial
    if (agent.is_trial && agent.trial_ends_at && new Date(agent.trial_ends_at) > now) {
      return "trial"
    }

    // Check if it's still deploying
    if (agent.status === "deploying") {
      return "deploying"
    }

    return "active"
  }

  const checkExpiredTrials = () => {
    const now = new Date()
    setDeployedAgents((prev) =>
      prev.map((agent) => {
        if (agent.trial_ends_at && new Date(agent.trial_ends_at) < now && agent.status === "trial") {
          return { ...agent, status: "expired" as const }
        }
        return agent
      }),
    )
  }

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i))
      }
      return [...prev, { ...item, quantity: 1 }]
    })

    toast({
      title: "Added to Neural Cart",
      description: `${item.name} has been added to your neural deployment queue.`,
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = useMemo(() => {
    return () => items.reduce((total, item) => total + (item.quantity || 1), 0)
  }, [items])

  const getTotalPrice = useMemo(() => {
    return () => items.reduce((total, item) => total + item.price * (item.quantity || 1), 0)
  }, [items])

  const deployAgents = async () => {
    if (!user || items.length === 0) return

    try {
      const now = new Date()
      const trialEndsAt = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000) // 5 days from now

      const deploymentPromises = items.map(async (item) => {
        const payload = {
          user_id: user.id,
          agent_id: item.id,
          name: item.name,
          agent_name: item.name,
          agent_description: item.description,
          agent_type: item.category || "neural-network",
          icon: item.icon || "🤖",
          status: "trial",
          is_trial: true,
          trial_ends_at: trialEndsAt.toISOString(),
          created_at: now.toISOString(),
        }

        return dbService.deployAgent(user.id, item.id, payload)
      })

      await Promise.all(deploymentPromises)

      toast({
        title: "Neural Agents Deployed!",
        description: `${items.length} neural agents are now active with 5-day free trial.`,
      })

      clearCart()
      await loadDeployedAgents()
    } catch (error) {
      console.error("deployAgents error:", error)
      toast({
        title: "Deployment Failed",
        description: "Failed to deploy neural agents. Please try again.",
        variant: "destructive",
      })
    }
  }

  const upgradeAgent = async (agentId: string) => {
    if (!user) return

    try {
      // This would integrate with USDT payment processing
      // For now, we'll simulate the upgrade
      toast({
        title: "Upgrade Required",
        description: "Send USDT to TQn9Y2khEsLMG73Zyy56JdKHD8rQQzaUvr to upgrade this neural agent.",
      })
    } catch (error) {
      console.error("upgradeAgent error:", error)
      toast({
        title: "Upgrade Failed",
        description: "Failed to upgrade agent. Please try again.",
        variant: "destructive",
      })
    }
  }

  const isAgentDeployed = (agentId: string): boolean => {
    return deployedAgents.some((agent) => agent.agent_id === agentId)
  }

  const isAgentDeploying = (agentId: string): boolean => {
    return deployedAgents.some((agent) => agent.agent_id === agentId && agent.status === "deploying")
  }

  const isAgentOnTrial = (agentId: string): boolean => {
    return deployedAgents.some((agent) => agent.agent_id === agentId && agent.status === "trial")
  }

  const getTrialTimeRemaining = (agentId: string): string => {
    const agent = deployedAgents.find((a) => a.agent_id === agentId)
    if (!agent || !agent.trial_ends_at) return ""

    const now = new Date()
    const trialEnd = new Date(agent.trial_ends_at)
    const diff = trialEnd.getTime() - now.getTime()

    if (diff <= 0) return "Expired"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

    if (days > 0) return `${days}d ${hours}h remaining`
    if (hours > 0) return `${hours}h ${minutes}m remaining`
    return `${minutes}m remaining`
  }

  return (
    <CartContext.Provider
      value={{
        items,
        deployedAgents,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        deployAgents,
        upgradeAgent,
        isAgentDeployed,
        isAgentDeploying,
        isAgentOnTrial,
        getTrialTimeRemaining,
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
