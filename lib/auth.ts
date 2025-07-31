import { supabase } from "./supabase"

interface AuthUser {
  id: string
  email: string
  name?: string
}

interface AuthResponse {
  success: boolean
  user?: AuthUser
  error?: string
}

export const authService = {
  /**
   * Iniciar sesión con email y contraseña
   */
  async signIn(email: string, password: string): Promise<AuthResponse> {
    console.log("🔐 Intentando iniciar sesión:", email)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      })

      if (error) {
        console.error("❌ Error de autenticación:", error.message)
        return {
          success: false,
          error: error.message === "Invalid login credentials" ? "Credenciales incorrectas" : error.message,
        }
      }

      if (!data.user) {
        return {
          success: false,
          error: "No se pudo obtener información del usuario",
        }
      }

      console.log("✅ Sesión iniciada:", data.user.email)

      // Crear/actualizar perfil automáticamente
      await supabase.from("profiles").upsert({
        id: data.user.id,
        email: data.user.email,
        full_name: data.user.user_metadata?.full_name || data.user.email?.split("@")[0],
        updated_at: new Date().toISOString(),
      })

      return {
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.full_name || data.user.email?.split("@")[0],
        },
      }
    } catch (error) {
      console.error("❌ Error inesperado en signIn:", error)
      return {
        success: false,
        error: "Error de conexión. Intenta de nuevo.",
      }
    }
  },

  /**
   * Registrar nuevo usuario
   */
  async signUp(email: string, password: string, fullName?: string): Promise<AuthResponse> {
    console.log("🔐 Registrando usuario:", email)

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: {
            full_name: fullName || email.split("@")[0],
          },
        },
      })

      if (error) {
        console.error("❌ Error de registro:", error.message)
        return {
          success: false,
          error: error.message,
        }
      }

      if (!data.user) {
        return {
          success: false,
          error: "No se pudo crear el usuario",
        }
      }

      console.log("✅ Usuario registrado:", data.user.email)

      return {
        success: true,
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: fullName || data.user.email?.split("@")[0],
        },
      }
    } catch (error) {
      console.error("❌ Error inesperado en signUp:", error)
      return {
        success: false,
        error: "Error de conexión. Intenta de nuevo.",
      }
    }
  },

  /**
   * Cerrar sesión
   */
  async signOut(): Promise<void> {
    console.log("🔐 Cerrando sesión...")
    await supabase.auth.signOut()
  },

  /**
   * Obtener usuario actual
   */
  async getCurrentUser(): Promise<AuthUser | null> {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) return null

      return {
        id: user.id,
        email: user.email!,
        name: user.user_metadata?.full_name || user.email?.split("@")[0],
      }
    } catch (error) {
      console.error("❌ Error obteniendo usuario:", error)
      return null
    }
  },
}
