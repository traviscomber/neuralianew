"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useToast } from "@/hooks/use-toast"
import { dbService } from "@/lib/database"

interface CartItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  icon: string
}

interface CartContextType {
  cartItems: CartItem[]
  deployedAgents: string[]
  deployingAgents: string[]
  loading: boolean
  addToCart: (item: CartItem) => void
  removeFromCart: (itemId: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  deployAgent: (agent: CartItem) => Promise<void>
  isAgentDeployed: (agentId: string) => boolean
  isAgentDeploying: (agentId: string) => boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<string[]>([])
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const { toast } = useToast()

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.find((cartItem) => cartItem.id === item.id)
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
    setCartItems((prev) => prev.filter((item) => item.id !== itemId))
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
    })
  }

  const clearCart = () => {
    setCartItems([])
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    })
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
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

    if (deployedAgents.includes(agent.id)) {
      toast({
        title: "Already deployed",
        description: `${agent.name} is already deployed.`,
      })
      return
    }

    setDeployingAgents((prev) => [...prev, agent.id])
    setLoading(true)

    try {
      await dbService.deployAgent(user.id, agent)

      setDeployedAgents((prev) => [...prev, agent.id])
      removeFromCart(agent.id)

      toast({
        title: "Deployment successful!",
        description: `${agent.name} has been deployed with a 5-day free trial.`,
      })
    } catch (error) {
      console.error("Deployment error:", error)
      toast({
        title: "Deployment failed",
        description: "Failed to deploy agent. Please try again.",
        variant: "destructive",
      })
    } finally {
      setDeployingAgents((prev) => prev.filter((id) => id !== agent.id))
      setLoading(false)
    }
  }

  const isAgentDeployed = (agentId: string) => {
    return deployedAgents.includes(agentId)
  }

  const isAgentDeploying = (agentId: string) => {
    return deployingAgents.includes(agentId)
  }

  const value = {
    cartItems,
    deployedAgents,
    deployingAgents,
    loading,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    deployAgent,
    isAgentDeployed,
    isAgentDeploying,
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
