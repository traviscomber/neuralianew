import { useCallback } from "react"

export function useToast() {
  const toast = useCallback((props: { title?: string; description?: string; variant?: "default" | "destructive" }) => {
    // Simple toast implementation using browser's console for now
    console.log("[Toast]", props)
  }, [])

  return { toast }
}
