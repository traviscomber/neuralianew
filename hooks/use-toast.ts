import { useCallback } from "react"

type ToastProps = { title?: string; description?: string; variant?: "default" | "destructive" }

export function toast(props: ToastProps) {
  console.log("[Toast]", props)
}

export function useToast() {
  const toastFn = useCallback((props: ToastProps) => {
    console.log("[Toast]", props)
  }, [])

  return { toast: toastFn }
}
