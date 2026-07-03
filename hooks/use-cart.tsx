"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  type: string
  icon?: string
  description?: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
  total: number
  itemCount: number
  deployedAgents: string[]
  deployAgent: (agentId: string) => void
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  total: 0,
  itemCount: 0,
  deployedAgents: [],
  deployAgent: () => {},
  isAgentDeployed: () => false,
  isAgentDeploying: () => false,
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<string[]>([])
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])

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

  const deployAgent = (agentId: string) => {
    setDeployingAgents((prev) => [...prev, agentId])
    setTimeout(() => {
      setDeployingAgents((prev) => prev.filter((id) => id !== agentId))
      setDeployedAgents((prev) => [...prev, agentId])
    }, 2000)
  }

  const isAgentDeployed = (agentId: string) => deployedAgents.includes(agentId)
  const isAgentDeploying = (agentId: string) => deployingAgents.includes(agentId)

  const total = items.reduce((sum, item) => sum + item.price, 0)
  const itemCount = items.length

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        total,
        itemCount,
        deployedAgents,
        deployAgent,
        isAgentDeployed,
        isAgentDeploying,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
