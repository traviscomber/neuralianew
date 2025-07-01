"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

export interface CartItem {
  id: string
  name: string
  type: string
  price: number
  description?: string
}

interface CartContextType {
  /* cart helpers ---------------------------------------------------------- */
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
  isAgentInCart: (id: string) => boolean

  /* deployment helpers ---------------------------------------------------- */
  deployedAgents: string[]
  deployingAgents: string[]
  isDeploying: boolean
  isAgentDeployed: (id: string) => boolean
  isAgentDeploying: (id: string) => boolean
  deployAgent: (item: CartItem) => Promise<boolean>
  deployAllAgents: () => Promise<boolean>
}

/* -------------------------------------------------------------------------- */
/*  Context                                                                   */
/* -------------------------------------------------------------------------- */

const CartContext = createContext<CartContextType | undefined>(undefined)

/* -------------------------------------------------------------------------- */
/*  Provider                                                                  */
/* -------------------------------------------------------------------------- */

export function CartProvider({ children }: { children: ReactNode }) {
  /* Cart ------------------------------------------------------------------ */
  const [items, setItems] = useState<CartItem[]>([])

  /* Deployment ------------------------------------------------------------ */
  const [deployedAgents, setDeployedAgents] = useState<string[]>([])
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])
  const [isDeploying, setIsDeploying] = useState(false)

  /* ---------------------------------------------------------------------- */
  /*  Local-storage persistence                                             */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    const stored = localStorage.getItem("neuralia-cart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        /* ignore corrupted payload */
        /* eslint-disable-line no-empty */
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("neuralia-cart", JSON.stringify(items))
  }, [items])

  /* ---------------------------------------------------------------------- */
  /*  Cart helper implementations                                           */
  /* ---------------------------------------------------------------------- */

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        toast({ title: "Already in cart", description: `${item.name} is already in your cart.` })
        return prev
      }
      toast({ title: "Added to cart", description: `${item.name} has been added to your cart.` })
      return [...prev, item]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const clearCart = () => {
    setItems([])
    toast({ title: "Cart cleared", description: "All items have been removed from your cart." })
  }

  const getTotalPrice = () => items.reduce((sum, i) => sum + i.price, 0)
  const getTotalItems = () => items.length
  const isAgentInCart = (id: string) => items.some((i) => i.id === id)

  /* ---------------------------------------------------------------------- */
  /*  Deployment helpers (stubbed logic)                                    */
  /* ---------------------------------------------------------------------- */

  const isAgentDeployed = (id: string) => deployedAgents.includes(id)
  const isAgentDeploying = (id: string) => deployingAgents.includes(id)

  const deployAgent = async (item: CartItem) => {
    try {
      setDeployingAgents((prev) => [...prev, item.id])
      setIsDeploying(true)

      /* TODO: replace with real deployment call */
      await new Promise((res) => setTimeout(res, 2000))

      setDeployedAgents((prev) => [...prev, item.id])
      toast({ title: "Agent deployed", description: `${item.name} is now live.` })
      return true
    } catch (err) {
      console.error("Deployment error:", err)
      toast({ title: "Deployment failed", description: "Please try again.", variant: "destructive" })
      return false
    } finally {
      setDeployingAgents((prev) => prev.filter((id) => id !== item.id))
      setIsDeploying(false)
    }
  }

  const deployAllAgents = async () => {
    if (items.length === 0) return true
    setDeployingAgents(items.map((i) => i.id))
    setIsDeploying(true)
    try {
      /* Simulate bulk deploy */
      await new Promise((res) => setTimeout(res, 3000))
      setDeployedAgents((prev) => [...prev, ...items.map((i) => i.id)])
      toast({ title: "All agents deployed", description: "Your AI team is live." })
      clearCart()
      return true
    } catch (err) {
      console.error(err)
      toast({ title: "Bulk deploy failed", description: "Please try again.", variant: "destructive" })
      return false
    } finally {
      setDeployingAgents([])
      setIsDeploying(false)
    }
  }

  /* ---------------------------------------------------------------------- */

  const value: CartContextType = {
    /* cart */
    items,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isAgentInCart,

    /* deployment */
    deployedAgents,
    deployingAgents,
    isDeploying,
    isAgentDeployed,
    isAgentDeploying,
    deployAgent,
    deployAllAgents,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/* -------------------------------------------------------------------------- */
/*  Hook                                                                      */
/* -------------------------------------------------------------------------- */

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within a CartProvider")
  return ctx
}
