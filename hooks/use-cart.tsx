"use client"

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import { supabase } from "@/lib/supabase-browser"
import { toast } from "sonner"
import { v4 as uuid } from "uuid"

type Agent = {
  id: string
  name: string
  price: number
  [key: string]: any
}

type Notification = { id: string; message: string; type: "success" | "error" | "info" }

interface CartCtx {
  cartItems: Agent[]
  deployedAgents: Agent[]
  notifications: Notification[]
  /* helpers */
  getTotalItems: () => number
  getTotalPrice: () => number
  isAgentInCart: (id: string) => boolean
  isAgentDeployed: (id: string) => boolean
  isAgentDeploying: (id: string) => boolean
  isDeploying: boolean
  /* mutations */
  addToCart: (a: Agent) => void
  deployAgent: (a: Agent) => Promise<void>
  clearCart: () => void
  dismissNotification: (id: string) => void
}

const CartContext = createContext<CartCtx | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Agent[]>([])
  const [deployed, setDeployed] = useState<Agent[]>([])
  const [deployingIds, setDeploying] = useState<Set<string>>(new Set())
  const [notis, setNotis] = useState<Notification[]>([])

  /* ---------- notification helpers ---------- */
  const notify = useCallback(
    (n: Omit<Notification, "id">) => {
      const id = uuid()
      setNotis((p) => [...p, { ...n, id }])
      toast[n.type](n.message)
    },
    [setNotis],
  )
  const dismissNotification = (id: string) => setNotis((p) => p.filter((n) => n.id !== id))

  /* --------------- cart helpers -------------- */
  const getTotalItems = useCallback(() => cart.length, [cart])
  const getTotalPrice = useCallback(() => cart.reduce((sum, a) => sum + (a.price ?? 0), 0), [cart])

  const isAgentInCart = useCallback((id: string) => cart.some((a) => a.id === id), [cart])
  const isAgentDeployed = useCallback((id: string) => deployed.some((a) => a.id === id), [deployed])
  const isAgentDeploying = useCallback((id: string) => deployingIds.has(id), [deployingIds])

  const addToCart = (agent: Agent) => {
    setCart((p) => (p.find((a) => a.id === agent.id) ? p : [...p, agent]))
    notify({ type: "info", message: `${agent.name} added to cart` })
  }

  const clearCart = () => {
    setCart([])
    notify({ type: "info", message: "Cart cleared" })
  }

  /* ---------------- deploy logic ------------- */
  const deployAgent = useCallback(
    async (agent: Agent) => {
      if (deployingIds.has(agent.id)) return
      setDeploying((p) => new Set(p).add(agent.id))

      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()
        if (!session?.access_token) throw new Error("Auth session missing")

        const res = await fetch("/api/agents/deploy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ agent }),
        })

        let payload: any = {}
        try {
          payload = await res.json()
        } catch {
          payload = { error: await res.text() } /* plain-text fallback */
        }

        if (!res.ok) throw new Error(payload.error ?? "Unknown error")

        /* success */
        setDeployed((p) => [...p, agent])
        setCart((p) => p.filter((a) => a.id !== agent.id))
        notify({ type: "success", message: `${agent.name} deployed!` })
      } catch (err: any) {
        console.error("deployAgent error →", err)
        notify({ type: "error", message: err.message })
      } finally {
        setDeploying((p) => {
          const next = new Set(p)
          next.delete(agent.id)
          return next
        })
      }
    },
    [deployingIds, notify],
  )

  /* --------------- exposed value ------------- */
  const value = useMemo<CartCtx>(
    () => ({
      cartItems: cart,
      deployedAgents: deployed,
      notifications: notis,
      isDeploying: deployingIds.size > 0,
      getTotalItems,
      getTotalPrice,
      isAgentInCart,
      isAgentDeployed,
      isAgentDeploying,
      addToCart,
      deployAgent,
      clearCart,
      dismissNotification,
    }),
    [
      cart,
      deployed,
      notis,
      deployingIds,
      getTotalItems,
      getTotalPrice,
      isAgentInCart,
      isAgentDeployed,
      isAgentDeploying,
      deployAgent,
    ],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
