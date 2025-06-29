"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./use-auth"
import { db } from "@/lib/supabase"

export interface CartItem {
  id: string
  name: string
  type: "agent" | "system"
  price: number
  description: string
  features: string[]
  category: string
  icon: string
  setupTime: string
  roi: string
}

export interface DeployedAgent {
  id: string
  name: string
  type: string
  status: "deploying" | "active" | "error"
  deployedAt: Date
  category: string
  icon: string
  description: string
  features: string[]
  price: number
  setupTime: string
  roi: string
}

interface CartContextType {
  items: CartItem[]
  deployedAgents: DeployedAgent[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  deployItems: () => Promise<void>
  isDeploying: boolean
  deploymentProgress: Record<string, number>
  notifications: Array<{ id: string; message: string; type: "success" | "error" | "info" }>
  dismissNotification: (id: string) => void
  // Backward compatibility
  cartItems?: CartItem[]
  addToCart?: (item: CartItem) => void
  removeFromCart?: (id: string) => void
  totalPrice?: number
  /* ─── Legacy aliases (optional) ─────────────────────────────── */
  state?: {
    items: CartItem[]
    deployingAgents: any[]
    deployedAgents: DeployedAgent[]
    isLoading: boolean
  }
  itemCount?: number
  deployingAgents?: any[]
}

const CartContext = createContext<CartContextType | undefined>(undefined)

// Available items catalog
const AVAILABLE_ITEMS: CartItem[] = [
  // AI Agents
  {
    id: "hr-advisory",
    name: "HR Advisory Agent",
    type: "agent",
    price: 299,
    description: "24/7 HR expert for policies, benefits, and employee queries",
    features: ["Policy Guidance", "Benefits Support", "Compliance Help", "Employee Relations"],
    category: "Human Resources",
    icon: "👥",
    setupTime: "24-48 hours",
    roi: "60% reduction in HR escalations",
  },
  {
    id: "sales-coach",
    name: "Sales Coach Agent",
    type: "agent",
    price: 399,
    description: "AI sales expert to boost team performance and close rates",
    features: ["Deal Strategy", "Objection Handling", "Pipeline Management", "Team Coaching"],
    category: "Sales",
    icon: "💼",
    setupTime: "24-48 hours",
    roi: "40% higher close rates",
  },
  {
    id: "customer-service",
    name: "Customer Service Agent",
    type: "agent",
    price: 249,
    description: "Instant customer support with 95% resolution rate",
    features: ["24/7 Support", "Multi-channel", "Escalation Handling", "Knowledge Base"],
    category: "Customer Support",
    icon: "🎧",
    setupTime: "24-48 hours",
    roi: "300% faster response times",
  },
  {
    id: "technical-support",
    name: "Technical Support Agent",
    type: "agent",
    price: 349,
    description: "Expert technical troubleshooting and system guidance",
    features: ["System Diagnostics", "Troubleshooting", "Integration Help", "Documentation"],
    category: "Technical",
    icon: "🔧",
    setupTime: "24-48 hours",
    roi: "70% faster resolution",
  },
  {
    id: "marketing",
    name: "Marketing Agent",
    type: "agent",
    price: 329,
    description: "Strategic marketing guidance and campaign optimization",
    features: ["Campaign Strategy", "Lead Generation", "Content Planning", "Performance Analysis"],
    category: "Marketing",
    icon: "📈",
    setupTime: "24-48 hours",
    roi: "45% increase in leads",
  },
  {
    id: "analytics",
    name: "Analytics Agent",
    type: "agent",
    price: 379,
    description: "Data insights and business intelligence expert",
    features: ["Data Analysis", "Report Generation", "Trend Identification", "KPI Tracking"],
    category: "Analytics",
    icon: "📊",
    setupTime: "24-48 hours",
    roi: "40% better decision making",
  },
  // AI Systems
  {
    id: "workflow-automation",
    name: "Workflow Automation System",
    type: "system",
    price: 599,
    description: "Complete business process automation",
    features: ["Process Mapping", "Task Automation", "Integration Hub", "Performance Monitoring"],
    category: "Automation",
    icon: "⚙️",
    setupTime: "1-2 weeks",
    roi: "80% time savings",
  },
  {
    id: "data-intelligence",
    name: "Data Intelligence System",
    type: "system",
    price: 799,
    description: "Advanced analytics and business intelligence platform",
    features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "Data Integration"],
    category: "Business Intelligence",
    icon: "🧠",
    setupTime: "2-3 weeks",
    roi: "300-500% ROI",
  },
]

// Central Orchestrator - always included
const CENTRAL_ORCHESTRATOR: DeployedAgent = {
  id: "central-orchestrator",
  name: "Central Orchestrator",
  type: "orchestrator",
  status: "active",
  deployedAt: new Date(),
  category: "Core System",
  icon: "🎯",
  description: "Coordinates all your AI agents and learns about your business",
  features: ["Agent Coordination", "Business Learning", "Context Sharing", "Performance Optimization"],
  price: 0,
  setupTime: "Always Active",
  roi: "Optimizes all agents",
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<DeployedAgent[]>([CENTRAL_ORCHESTRATOR])
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentProgress, setDeploymentProgress] = useState<Record<string, number>>({})
  const [notifications, setNotifications] = useState<
    Array<{ id: string; message: string; type: "success" | "error" | "info" }>
  >([])
  const { user } = useAuth()

  // Load deployed agents from database when user logs in
  useEffect(() => {
    if (user) {
      loadDeployedAgents()
    }
  }, [user])

  const loadDeployedAgents = async () => {
    if (!user) return

    try {
      const agents = await db.agents.list(user.id)
      const deployedFromDB = agents
        .filter((agent) => agent.status === "active")
        .map((agent) => ({
          id: agent.id,
          name: agent.name,
          type: agent.type,
          status: "active" as const,
          deployedAt: new Date(agent.created_at),
          category: getCategoryForType(agent.type),
          icon: getIconForType(agent.type),
          description: agent.description || getDescriptionForType(agent.type),
          features: getFeaturesForType(agent.type),
          price: getPriceForType(agent.type),
          setupTime: "24-48 hours",
          roi: getROIForType(agent.type),
        }))

      // Always include Central Orchestrator, but don't duplicate
      const hasOrchestrator = deployedFromDB.some((agent) => agent.type === "orchestrator")
      const finalDeployedAgents = hasOrchestrator ? deployedFromDB : [CENTRAL_ORCHESTRATOR, ...deployedFromDB]

      setDeployedAgents(finalDeployedAgents)
    } catch (error) {
      console.error("Error loading deployed agents:", error)
    }
  }

  const getCategoryForType = (type: string): string => {
    const categoryMap: Record<string, string> = {
      hr: "Human Resources",
      sales: "Sales",
      "customer-service": "Customer Support",
      "technical-support": "Technical",
      marketing: "Marketing",
      analytics: "Analytics",
      orchestrator: "Core System",
    }
    return categoryMap[type] || "General"
  }

  const getIconForType = (type: string): string => {
    const iconMap: Record<string, string> = {
      hr: "👥",
      sales: "💼",
      "customer-service": "🎧",
      "technical-support": "🔧",
      marketing: "📈",
      analytics: "📊",
      orchestrator: "🎯",
    }
    return iconMap[type] || "🤖"
  }

  const getDescriptionForType = (type: string): string => {
    const descMap: Record<string, string> = {
      hr: "24/7 HR expert for policies, benefits, and employee queries",
      sales: "AI sales expert to boost team performance and close rates",
      "customer-service": "Instant customer support with 95% resolution rate",
      "technical-support": "Expert technical troubleshooting and system guidance",
      marketing: "Strategic marketing guidance and campaign optimization",
      analytics: "Data insights and business intelligence expert",
      orchestrator: "Coordinates all your AI agents and learns about your business",
    }
    return descMap[type] || "AI-powered assistant"
  }

  const getFeaturesForType = (type: string): string[] => {
    const featuresMap: Record<string, string[]> = {
      hr: ["Policy Guidance", "Benefits Support", "Compliance Help", "Employee Relations"],
      sales: ["Deal Strategy", "Objection Handling", "Pipeline Management", "Team Coaching"],
      "customer-service": ["24/7 Support", "Multi-channel", "Escalation Handling", "Knowledge Base"],
      "technical-support": ["System Diagnostics", "Troubleshooting", "Integration Help", "Documentation"],
      marketing: ["Campaign Strategy", "Lead Generation", "Content Planning", "Performance Analysis"],
      analytics: ["Data Analysis", "Report Generation", "Trend Identification", "KPI Tracking"],
      orchestrator: ["Agent Coordination", "Business Learning", "Context Sharing", "Performance Optimization"],
    }
    return featuresMap[type] || ["AI Assistant Features"]
  }

  const getPriceForType = (type: string): number => {
    const priceMap: Record<string, number> = {
      hr: 299,
      sales: 399,
      "customer-service": 249,
      "technical-support": 349,
      marketing: 329,
      analytics: 379,
      orchestrator: 0,
    }
    return priceMap[type] || 299
  }

  const getROIForType = (type: string): string => {
    const roiMap: Record<string, string> = {
      hr: "60% reduction in HR escalations",
      sales: "40% higher close rates",
      "customer-service": "300% faster response times",
      "technical-support": "70% faster resolution",
      marketing: "45% increase in leads",
      analytics: "40% better decision making",
      orchestrator: "Optimizes all agents",
    }
    return roiMap[type] || "Significant ROI improvement"
  }

  const addItem = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) return prev
      return [...prev, item]
    })
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0)
  }

  const addNotification = (message: string, type: "success" | "error" | "info" = "info") => {
    const id = Date.now().toString()
    setNotifications((prev) => [...prev, { id, message, type }])

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      dismissNotification(id)
    }, 5000)
  }

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id))
  }

  const deployItems = async () => {
    if (items.length === 0) return

    setIsDeploying(true)
    const progressTracker: Record<string, number> = {}

    try {
      for (const item of items) {
        // Initialize progress
        progressTracker[item.id] = 0
        setDeploymentProgress({ ...progressTracker })

        // Simulate deployment phases
        const phases = [
          { name: "Initializing", progress: 20, duration: 1000 },
          { name: "Configuring", progress: 40, duration: 1500 },
          { name: "Training", progress: 70, duration: 2000 },
          { name: "Testing", progress: 90, duration: 1000 },
          { name: "Deploying", progress: 100, duration: 500 },
        ]

        for (const phase of phases) {
          await new Promise((resolve) => setTimeout(resolve, phase.duration))
          progressTracker[item.id] = phase.progress
          setDeploymentProgress({ ...progressTracker })
        }

        // Create deployed agent
        const deployedAgent: DeployedAgent = {
          id: item.id,
          name: item.name,
          type: item.type === "agent" ? item.id : item.type,
          status: "active",
          deployedAt: new Date(),
          category: item.category,
          icon: item.icon,
          description: item.description,
          features: item.features,
          price: item.price,
          setupTime: item.setupTime,
          roi: item.roi,
        }

        // Save to database if user is logged in
        if (user) {
          try {
            await db.agents.create({
              user_id: user.id,
              name: item.name,
              type: item.id as any,
              description: item.description,
              configuration: {
                features: item.features,
                category: item.category,
                icon: item.icon,
                price: item.price,
                setupTime: item.setupTime,
                roi: item.roi,
              },
              status: "active",
            })
          } catch (error) {
            console.error("Error saving agent to database:", error)
          }
        }

        setDeployedAgents((prev) => {
          const exists = prev.find((agent) => agent.id === deployedAgent.id)
          if (exists) return prev
          return [...prev, deployedAgent]
        })

        addNotification(`${item.name} deployed successfully!`, "success")
      }

      // Clear cart after successful deployment
      clearCart()
      addNotification("All agents deployed successfully!", "success")
    } catch (error) {
      console.error("Deployment error:", error)
      addNotification("Deployment failed. Please try again.", "error")
    } finally {
      setIsDeploying(false)
      setDeploymentProgress({})
    }
  }

  /* ─── Legacy compatibility helpers ─────────────────────────── */
  const itemCountLegacy = items.length

  type DeployingAgent = {
    id: string
    name: string
    progress: number
    status: "initializing" | "configuring" | "training" | "testing" | "deploying" | "finalizing"
  }

  // rebuild an old-style deployingAgents array from our progress map
  const deployingAgentsLegacy: DeployingAgent[] = Object.entries(deploymentProgress).map(([id, progress]) => ({
    id,
    name: AVAILABLE_ITEMS.find((i) => i.id === id)?.name ?? id,
    progress,
    status:
      progress < 20
        ? "initializing"
        : progress < 40
          ? "configuring"
          : progress < 70
            ? "training"
            : progress < 90
              ? "testing"
              : progress < 100
                ? "deploying"
                : "finalizing",
  }))

  const legacyState = {
    items,
    deployingAgents: deployingAgentsLegacy,
    deployedAgents,
    isLoading: isDeploying,
  }

  /* merge into exported context value */
  const value: CartContextType = {
    items,
    deployedAgents,
    addItem,
    removeItem,
    clearCart,
    getTotalPrice,
    deployItems,
    isDeploying,
    deploymentProgress,
    notifications,
    dismissNotification,

    // ─── original v1 aliases ───────────────────────────────────
    cartItems: items,
    addToCart: addItem,
    removeFromCart: removeItem,
    totalPrice: getTotalPrice(),

    // ─── NEW legacy aliases to keep HomePage working ───────────
    state: legacyState,
    itemCount: itemCountLegacy,
    deployingAgents: deployingAgentsLegacy,
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

// Export available items for use in components
export { AVAILABLE_ITEMS }
