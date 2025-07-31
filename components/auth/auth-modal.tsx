"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { authService } from "@/lib/auth"
import { Loader2, Eye, EyeOff } from "lucide-react"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [connectionStatus, setConnectionStatus] = useState<"checking" | "connected" | "error">("checking")
  const { toast } = useToast()

  // Estados del formulario
  const [signInData, setSignInData] = useState({ email: "", password: "" })
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  })

  // Verificar conexión cuando se abre el modal
  React.useEffect(() => {
    if (isOpen) {
      checkConnection()
    }
  }, [isOpen])

  const checkConnection = async () => {
    try {
      setConnectionStatus("checking")
      console.log("🔍 Verificando conexión con Supabase...")

      const result = await authService.checkConnection()
      if (result.success) {
        setConnectionStatus("connected")
        console.log("✅ Conexión con Supabase exitosa")
      } else {
        setConnectionStatus("error")
        console.error("❌ Error de conexión:", result.error)
      }
    } catch (error) {
      setConnectionStatus("error")
      console.error("❌ Error verificando conexión:", error)
    }
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    if (connectionStatus !== "connected") {
      toast({
        title: "Error de conexión",
        description: "No se puede conectar con el servidor. Intenta más tarde.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    console.log("🔐 Iniciando proceso de sign in...")

    try {
      // Sanitizar email
      const email = signInData.email.trim().toLowerCase()
      const password = signInData.password

      console.log("📧 Email sanitizado:", email)
      console.log("🔑 Intentando autenticación...")

      const result = await authService.signIn(email, password)

      if (result.success) {
        console.log("✅ Sign in exitoso:", result.user?.email)
        toast({
          title: "¡Bienvenido!",
          description: "Has iniciado sesión correctamente.",
        })
        onSuccess?.()
        onClose()
      } else {
        console.warn("⚠️ Sign in falló:", result.error)

        // Manejar errores específicos
        if (result.error === "Invalid login credentials") {
          toast({
            title: "Credenciales incorrectas",
            description: "El email o contraseña son incorrectos. Verifica tus datos.",
            variant: "destructive",
          })
        } else if (result.error === "Email not confirmed") {
          toast({
            title: "Email no confirmado",
            description: "Revisa tu email y confirma tu cuenta antes de iniciar sesión.",
            variant: "destructive",
          })
        } else {
          toast({
            title: "Error de autenticación",
            description: result.error || "No se pudo iniciar sesión. Intenta nuevamente.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("🚨 Error inesperado en sign in:", error)
      toast({
        title: "Error inesperado",
        description: "Ocurrió un error inesperado. Intenta más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (connectionStatus !== "connected") {
      toast({
        title: "Error de conexión",
        description: "No se puede conectar con el servidor. Intenta más tarde.",
        variant: "destructive",
      })
      return
    }

    // Validaciones
    if (signUpData.password !== signUpData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas no coinciden.",
        variant: "destructive",
      })
      return
    }

    if (signUpData.password.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    console.log("📝 Iniciando proceso de registro...")

    try {
      // Sanitizar datos
      const email = signUpData.email.trim().toLowerCase()
      const password = signUpData.password
      const fullName = signUpData.fullName.trim()

      console.log("📧 Email sanitizado:", email)
      console.log("👤 Nombre completo:", fullName)

      const result = await authService.signUp(email, password, { fullName })

      if (result.success) {
        console.log("✅ Registro exitoso:", result.user?.email)
        toast({
          title: "¡Registro exitoso!",
          description: "Revisa tu email para confirmar tu cuenta.",
        })
        onClose()
      } else {
        console.warn("⚠️ Registro falló:", result.error)
        toast({
          title: "Error en el registro",
          description: result.error || "No se pudo crear la cuenta. Intenta nuevamente.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("🚨 Error inesperado en registro:", error)
      toast({
        title: "Error inesperado",
        description: "Ocurrió un error inesperado. Intenta más tarde.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const ConnectionIndicator = () => {
    switch (connectionStatus) {
      case "checking":
        return (
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Loader2 className="h-4 w-4 animate-spin" />
            Verificando conexión...
          </div>
        )
      case "connected":
        return (
          <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            Conectado al servidor
          </div>
        )
      case "error":
        return (
          <div className="flex items-center gap-2 text-sm text-red-600 mb-4">
            <div className="h-2 w-2 bg-red-500 rounded-full" />
            Error de conexión
            <Button variant="ghost" size="sm" onClick={checkConnection} className="h-auto p-1 text-xs">
              Reintentar
            </Button>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Acceder a Neuralia</DialogTitle>
        </DialogHeader>

        <ConnectionIndicator />

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="signup">Registrarse</TabsTrigger>
          </TabsList>

          <TabsContent value="signin" className="space-y-4">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="tu@email.com"
                  value={signInData.email}
                  onChange={(e) => setSignInData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  disabled={isLoading || connectionStatus !== "connected"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="signin-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Tu contraseña"
                    value={signInData.password}
                    onChange={(e) => setSignInData((prev) => ({ ...prev, password: e.target.value }))}
                    required
                    disabled={isLoading || connectionStatus !== "connected"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading || connectionStatus !== "connected"}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-name">Nombre completo</Label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={signUpData.fullName}
                  onChange={(e) => setSignUpData((prev) => ({ ...prev, fullName: e.target.value }))}
                  required
                  disabled={isLoading || connectionStatus !== "connected"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="tu@email.com"
                  value={signUpData.email}
                  onChange={(e) => setSignUpData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                  disabled={isLoading || connectionStatus !== "connected"}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData((prev) => ({ ...prev, password: e.target.value }))}
                    required
                    disabled={isLoading || connectionStatus !== "connected"}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-confirm">Confirmar contraseña</Label>
                <Input
                  id="signup-confirm"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  value={signUpData.confirmPassword}
                  onChange={(e) => setSignUpData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                  required
                  disabled={isLoading || connectionStatus !== "connected"}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading || connectionStatus !== "connected"}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creando cuenta...
                  </>
                ) : (
                  "Crear Cuenta"
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
