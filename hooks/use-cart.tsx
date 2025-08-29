"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "./use-auth"
import { dbService } from "@/lib/database"

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  category: string
  features: string[]
  icon?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  deployAgent: (agent: any) => Promise<void>
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
  deployedAgents: any[]
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [deployedAgents, setDeployedAgents] = useState<any[]>([])
  const [deployingAgents, setDeployingAgents] = useState<Set<string>>(new Set())
  const { user } = useAuth()

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("neuralia-cart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("neuralia-cart", JSON.stringify(items))
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
      const agents = await dbService.getUserDeployedAgents(user.id)
      setDeployedAgents(agents)
    } catch (error) {
      console.error("Error loading deployed agents:", error)
    }
  }

  const addItem = (newItem: Omit<CartItem, "quantity">) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...newItem, quantity: 1 }]
    })
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const deployAgent = async (agent: any) => {
    if (!user) throw new Error("User not authenticated")

    setDeployingAgents((prev) => new Set(prev).add(agent.id))

    try {
      await dbService.deployAgent(user.id, agent.id, {
        name: agent.name,
        description: agent.description,
        type: agent.category,
        icon: agent.icon,
      })

      // Reload deployed agents
      await loadDeployedAgents()
    } finally {
      setDeployingAgents((prev) => {
        const newSet = new Set(prev)
        newSet.delete(agent.id)
        return newSet
      })
    }
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.some((agent) => agent.agent_id === agentId)
  }

  const isAgentDeploying = (agentId: string) => {
    return deployingAgents.has(agentId)
  }

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
    deployAgent,
    isAgentDeployed,
    isAgentDeploying,
    deployedAgents,
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
