"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface Agent {
  id: string
  name: string
  description: string
  category: string
  price: number
  image: string
  features: string[]
  rating: number
  reviews: number
}

interface CartItem extends Agent {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  cartItems: CartItem[]
  addToCart: (agent: Agent) => void
  removeFromCart: (agentId: string) => void
  updateQuantity: (agentId: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  isAgentInCart: (agentId: string) => boolean
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<Set<string>>(new Set())
  const [deployingAgents, setDeployingAgents] = useState<Set<string>>(new Set())

  const addToCart = (agent: Agent) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === agent.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === agent.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...agent, quantity: 1 }]
    })
  }

  const removeFromCart = (agentId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== agentId))
  }

  const updateQuantity = (agentId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(agentId)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === agentId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const isAgentInCart = (agentId: string) => {
    return items.some((item) => item.id === agentId)
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.has(agentId)
  }

  const isAgentDeploying = (agentId: string) => {
    return deployingAgents.has(agentId)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems: items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getTotalItems,
        isAgentInCart,
        isAgentDeployed,
        isAgentDeploying,
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
