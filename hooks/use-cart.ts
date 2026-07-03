import { useState, useCallback } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  const [deployedAgents, setDeployedAgents] = useState<any[]>([])
  const [deployingAgents, setDeployingAgents] = useState<string[]>([])

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i))
      }
      return [...prev, item]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const clear = useCallback(() => {
    setItems([])
  }, [])

  const deployAgent = useCallback((agentIdOrObj: string | any) => {
    const agentId = typeof agentIdOrObj === "string" ? agentIdOrObj : agentIdOrObj?.id ?? agentIdOrObj
    setDeployingAgents((prev) => [...prev, agentId])
    setTimeout(() => {
      setDeployingAgents((prev) => prev.filter((id) => id !== agentId))
      setDeployedAgents((prev) => {
        const obj = typeof agentIdOrObj === "string"
          ? { id: agentIdOrObj, name: agentIdOrObj, icon: "", description: "", type: "", status: "active", uptime: "99.9%", lastActive: "now" }
          : agentIdOrObj
        return [...prev, obj]
      })
    }, 2000)
  }, [])

  const isAgentDeployed = useCallback((agentId: string) => deployedAgents.some((a) => (a?.id ?? a) === agentId), [deployedAgents])
  const isAgentDeploying = useCallback((agentId: string) => deployingAgents.includes(agentId), [deployingAgents])

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return {
    items,
    addItem,
    removeItem,
    clear,
    total,
    deployedAgents,
    deployAgent,
    isAgentDeployed,
    isAgentDeploying,
  }
}
